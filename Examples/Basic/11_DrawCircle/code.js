var statusElement = document.getElementById("status");
var progressElement = document.getElementById("progress");
var spinnerElement = document.getElementById("spinner");

var inputConsole = document.getElementById("console");


var Module = {
    FS: {},
    arguments: [],
    preRun: [],
    ASSETS_FOLDER: "/assets",
    preRun: [
        function () {
            FS.mkdir(Module.ASSETS_FOLDER);
        },
    ],
    postRun: [
        function () {
            // ------------------- Initialize FS system --------------
            function FileToArrayBuffer(file) {
                return new Promise((resolve) => {
                    var reader = new FileReader();
                    reader.onload = (ev) => resolve(ev.target.result);
                    reader.readAsArrayBuffer(file);
                });
            }
            // -------------------------------------------------------

            // ------------------- Initialize ODA lib ----------------
            Module.canvas = document.querySelector("canvas");

            //-------------

            const {
                Services,
                odlnitialize,
                odUninitialize,
                odCmColor,
                OdDb3dSolid,
                OdDbBlockTablcRccord,
                OdString,
                OdWrFileBuf,
                OdDbCircle,
                OdGePoint3d,
                OdDbObjectId,
                OdCmColor,
                OdDbBlockTableRecord,
                OdGeMatrix3d,
                OdGeTol,
                OdGeVector3d,
                OdDbAlignedDimension,
                OdDbObjectIdArray,
                OdDbObject,
            } = Module;

            const OpenMode = {
                kForRead: 0,
                kForWrite: 1,
                kForNotify: 2,
            };

            const SaveType = {
                kDwg: 0,
                kDxf: 1,
                kDxb: 2,
                kUnknown: -1,
            };

            const DwgVersion = {
                kDHL_CURRENT: 33,
                kDHL_2013: 1,
                kDHL_2018: 2,
            };

            var cadCore = new Module.CadCore();

            function OpenFile(name) {
                var time = Date.now();
                cadCore.OpenFile(name);
                Resize();
                cadCore.ZoomExtents();
                cadCore.Update();
                console.log("Time: " + (Date.now() - time));
                localStorage.setItem("lastFile", name);
            }

            document.getElementById("download").onclick = () => {
                ReadFile(Module.ASSETS_FOLDER + "/Example1.dwg");
            };

            document.getElementById('saveButton').onclick = function () {
                SaveFile();
            };

            document.getElementById("newFileButton").onclick = function () {
                const newFileName = Module.ASSETS_FOLDER + "/Example1.dwg";
                try {
                    var cadCore = new Module.CadCore();
                    const pDb = cadCore.getDb();
                    const f_out = new OdString(newFileName);
                    const fileType = SaveType.kDwg;
                    const outVer = DwgVersion.kDHL_CURRENT;
                    pDb.writeFile1(f_out, fileType, outVer, false, 16);
                    const { exists } = FS.analyzePath(newFileName);
                    if (!exists) {
                        const fileData = new Uint8Array(0);
                        Module.FS_createDataFile(
                            Module.ASSETS_FOLDER,
                            "Example1.dwg",
                            fileData,
                            true,
                            true,
                            true
                        );
                    }

                    OpenFile(newFileName);
                } catch (e) {
                    console.error("Error creating new DWG file:", e);
                }
            };

            function SaveFile() {
                const pDb = cadCore.getDb();
                const f_out = new OdString(
                    Module.ASSETS_FOLDER + "/Example1.dwg"
                );
                try {

                    pDb.save1(
                        f_out, false);
                    const filePath = Module.ASSETS_FOLDER + "/Example1.dwg";
                    const { exists } = FS.analyzePath(filePath);
                    if (!exists) {
                        const fileData = new Uint8Array(0);
                        Module.FS_createDataFile(
                            Module.ASSETS_FOLDER,
                            "Example1.dwg",
                            fileData,
                            true,
                            true,
                            true
                        );
                    }
                } catch (e) {
                    console.error("Error saving DWG file:", e);
                }
            }

            function ReadFile(name) {
                var buf = FS.readFile(name);
                var blob = new Blob([buf.buffer]);
                var url = window.URL.createObjectURL(blob);
                var a = document.createElement("a");
                a.style.display = "none";
                a.href = url;
                a.download = name;
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(url);
                console.log("Downloading start");
            }

            function Resize(ev) {
                Module.canvas.height = Module.canvas.clientHeight;
                Module.canvas.width = Module.canvas.clientWidth;

                cadCore.Resize(Module.canvas.width, Module.canvas.height);
            }

            window.onresize = Resize;

            Module.canvas.onwheel = function (ev) {
                cadCore.Zoom(-ev.deltaY * 0.01, ev.offsetX, ev.offsetY);
                ev.preventDefault();
            };
            let firstPoint = null;
            let secondPoint = null;
            let tempCircle = null;
            let tempLine = null;

            Module.canvas.onmousedown = function (ev) {
                if (ev.buttons === 4) {
                    cadCore.ZoomExtents();
                    ev.preventDefault();
                }
            };

            document
                .getElementById("drawCircleButton")
                .addEventListener("click", function () {
                    Module.canvas.addEventListener("click", onCanvasClick);
                });

            function onCanvasClick(ev) {
                const x = ev.offsetX;
                const y = ev.offsetY;
                if (!firstPoint) {
                    firstPoint = { x, y };
                    Module.canvas.addEventListener("mousemove", onMouseMove);
                } else {
                    secondPoint = { x, y };
                    const lineobj = OdDbObject.cast(tempLine);
                    lineobj.erase(true);
                    tempLine = null;
                    if (tempCircle) {
                        tempCircle = null;
                    }
                    firstPoint = null;
                    secondPoint = null;
                    Module.canvas.removeEventListener("mousemove", onMouseMove);
                    Module.canvas.removeEventListener("click", onCanvasClick);
                }
            }

            function onMouseMove(ev) {
                if (!firstPoint) return;
                const x = ev.offsetX;
                const y = ev.offsetY;
                drawTempCircle(firstPoint, { x, y }, cadCore);
            }

            function drawTempCircle(p1, p2, cadCore) {
                const pDb = cadCore.getDb();
                const device = cadCore.getDevice();
                const view = device.viewAt(0);

                //dư
                const center = screenToWorld(view, p1.x, p1.y);
                const edge = screenToWorld(view, p2.x, p2.y);
                if (!center || !edge) return;

                const radius = Math.sqrt(
                    Math.pow(edge.x - center.x, 2) + Math.pow(edge.y - center.y, 2)
                );
                const obj = pDb
                    .getModelSpaceId()
                    .safeOpenObject(OpenMode.kForWrite, false);
                const Record = OdDbBlockTableRecord.cast(obj);
                if (tempCircle) {
                    //get center
                    //recalculate radius

                    tempCircle.setCenter(new OdGePoint3d(center.x, center.y, 0));
                    tempCircle.setRadius(radius);
                } else {
                    //Transfer p1 to center

                    tempCircle = OdDbCircle.createObject();
                    tempCircle.setDatabaseDefaults(pDb, true);
                    tempCircle.setCenter(new OdGePoint3d(center.x, center.y, 0));
                    tempCircle.setRadius(radius);
                    const red = new OdCmColor();
                    red.setRGB(255, 0, 0);
                    tempCircle.setColor(red, true);
                    const tempID = Record.appendOdDbEntity(tempCircle);
                    const tempEntity = tempID.safeOpenObject(
                        OpenMode.kForWrite,
                        false
                    );
                    if (tempID && !tempID.isNull()) {
                        const tempEntity = tempID.safeOpenObject(
                            OpenMode.kForWrite,
                            false
                        );
                    }
                }
                createAlignedDimension(Module, Record, center, edge);
                cadCore.createDevice();
                cadCore.setDb(pDb);
                cadCore.Resize(
                    Module.canvas.clientWidth,
                    Module.canvas.clientHeight
                );
                cadCore.Update();
            }

            function createAlignedDimension(Module, bBTR, center, edge) {
                const { OdGePoint3d, OdDbLine, OdDbAlignedDimension } = Module;

                let line1Pt = new OdGePoint3d(center.x, center.y, 0);
                let line2Pt = new OdGePoint3d(edge.x, edge.y, 0);
                let dimLinePt = new OdGePoint3d(
                    center.x + (edge.x - center.x) * 1.2,
                    center.y + (edge.y - center.y) * 1.2,
                    0
                );

                if (tempLine) {
                    tempLine.setStartPoint(line1Pt);
                    tempLine.setEndPoint(line2Pt);
                    const blue = new OdCmColor();
                    blue.setRGB(0, 0, 255);
                    tempLine.setColor(blue, true);
                } else {
                    tempLine = OdDbLine.createObject();
                    tempLine.setDatabaseDefaults(bBTR.database(), false);
                    bBTR.appendOdDbEntity(tempLine);
                }
            }

            const screenToWorld = (view, x, y) => {
                if (!view) return null;
                const point = new OdGePoint3d(x, y, 0);
                const pGsView = view;
                point.transformBy(
                    pGsView.screenMatrix().mul(pGsView.projectionMatrix()).inverse()
                );
                point.z = 0;
                const xEyeToWorld = new OdGeMatrix3d();
                let yVector = pGsView.upVector().normalize(new OdGeTol(1e-10));
                let zVector = pGsView
                    .position()
                    .asVector()
                    .sub(pGsView.target().asVector())
                    .normalize(new OdGeTol(1e-10));
                let xVector = yVector.crossProduct(zVector);
                xEyeToWorld.setCoordSystem(
                    pGsView.target(),
                    xVector,
                    yVector,
                    zVector
                );
                point.transformBy(xEyeToWorld);
                return point;
            };

            Module.canvas.onmousemove = function (ev) {
                switch (ev.buttons) {
                    case 1:
                        cadCore.Dolly(ev.movementX, ev.movementY);
                        break;
                    case 2:
                        cadCore.Orbit(ev.movementX, ev.movementY);
                        break;
                    default:
                        break;
                }
            };

            // ---- anim frame
            function render() {
                requestAnimationFrame(render);
                cadCore.Update();
            }
            render();
            // ---- anim frame

            document.querySelector("input[type='file']").onchange = function (
                ev
            ) {
                var cadCore = new Module.CadCore();
                const file = ev.target.files[0];
                if (file) {
                    const name = 'Example1.dwg';
                    FileToArrayBuffer(file)
                        .then((arraybuffer) => new Uint8Array(arraybuffer))
                        .then((array) => {
                            const { exists } = FS.analyzePath(
                                Module.ASSETS_FOLDER + "/" + name
                            );
                            if (!exists);
                            Module.FS_createDataFile(
                                Module.ASSETS_FOLDER,
                                name,
                                array,
                                true,
                                true,
                                true
                            );
                        })
                        .then(() => OpenFile(Module.ASSETS_FOLDER + "/" + name))
                        .catch((err) => console.error(err));
                }
            };
            // ------------------- END Initialize ODA lib ----------------

            function execute(name, args = []) {
                const vector_args = args.reduce((vector, arg) => {
                    vector.push_back(arg);
                    return vector;
                }, new Module.VectorString());

                cadCore.ExecuteCommand(name, vector_args);
            }

            document.querySelector("form").onsubmit = (ev) => {
                ev.preventDefault();
                var input = inputConsole.value;
                inputConsole.value = "";
                input = input.replace(/\s\s+/g, " ");
                input = input.split(" ");
                if (input.length > 0) {
                    const cmdName = input.shift().toUpperCase();
                    execute.call(null, cmdName, input);
                }
            };

            function enableDragger() {
                Module.canvas.onmousemove = null;
                const statemachine = new StateMachine(
                    new AppContext(cadCore, Module)
                );
                statemachine.change(new CircleDragger(statemachine));
            }
            window["enableDragger"] = enableDragger;
        },
    ],
    print: (function () {
        var element = document.getElementById("output");
        if (element) element.value = ""; // clear browser cache
        return function (text) {
            if (arguments.length > 1)
                text = Array.prototype.slice.call(arguments).join(" ");
            console.log(text);
            if (element) {
                element.value += text + "\n";
                element.scrollTop = element.scrollHeight; // focus on bottom
            }
        };
    })(),
    printErr: function (text) {
        if (arguments.length > 1)
            text = Array.prototype.slice.call(arguments).join(" ");
        console.error(text);
    },
    canvas: (function () {
        var canvas = document.getElementById("canvas");

        // As a default initial behavior, pop up an alert when webgl context is lost. To make your
        // application robust, you may want to override this behavior before shipping!
        // See http://www.khronos.org/registry/webgl/specs/latest/1.0/#5.15.2
        canvas.addEventListener(
            "webglcontextlost",
            function (e) {
                alert("WebGL context lost. You will need to reload the page.");
                e.preventDefault();
            },
            false
        );

        return canvas;
    })(),
    setStatus: function (text) {
        if (!Module.setStatus.last)
            Module.setStatus.last = { time: Date.now(), text: "" };
        if (text === Module.setStatus.last.text) return;
        var m = text.match(/([^(]+)\((\d+(\.\d+)?)\/(\d+)\)/);
        var now = Date.now();
        if (m && now - Module.setStatus.last.time < 30) return; // if this is a progress update, skip it if too soon
        Module.setStatus.last.time = now;
        Module.setStatus.last.text = text;
        if (m) {
            text = m[1];
            progressElement.value = parseInt(m[2]) * 100;
            progressElement.max = parseInt(m[4]) * 100;
            progressElement.hidden = false;
            spinnerElement.hidden = false;
        } else {
            progressElement.value = null;
            progressElement.max = null;
            progressElement.hidden = true;
            if (!text) spinnerElement.style.display = "none";
        }
        statusElement.innerHTML = text;
    },
    totalDependencies: 0,
    monitorRunDependencies: function (left) {
        this.totalDependencies = Math.max(this.totalDependencies, left);
        Module.setStatus(
            left
                ? "Preparing... (" +
                (this.totalDependencies - left) +
                "/" +
                this.totalDependencies +
                ")"
                : "All downloads complete."
        );
    },
};


Module.setStatus('Downloading...');

window.onerror = function (event) {
    // TODO: do not warn on ok events like simulating an infinite loop or exitStatus
    Module.setStatus('Exception thrown, see JavaScript console');
    spinnerElement.style.display = 'none';
    Module.setStatus = function (text) {
        if (text) Module.printErr('[post-exception status] ' + text);
    };
};

