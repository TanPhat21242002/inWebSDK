/**
 * @typedef {import('./DrawingWeb.d.ts').Module}
 */

/**
 * 
 * @param {Module} Module 
 */
export function example(Module) {

  const SaveType = {
    kDwg: 0,
    kDxf: 1,
    kDxb: 2,
    kUnknown: -1,
};            

const {
  OdDbCircle,
  OdCmColor,
  OdGeMatrix3d,
  OdGeTol,
  OdDbObject,
  OdDbLine,
} = Module;

const OpenMode = {
  kForRead: 0,
  kForWrite: 1,
  kForNotify: 2,
};

const DwgVersion = {
    kDHL_CURRENT: 33,
    kDHL_2013: 1,
    kDHL_2018: 2,
};

    Promise.resolve()
    .then(() => {
      var fontName = "SaveLemon.ttf"
      return Promise.resolve()
        .then(() => fetch(fontName)
        .then(r => r.arrayBuffer()))
        .then(arraybuffer => new Uint8Array(arraybuffer))
        .then((array) => {
                  Module.FS_createDataFile(
                    "/",
                    fontName,
                    array,
                    true,
                    true,
                    true
                  );
        })
    }).then(() => {
      function OpenAs(id, type, openMode) {
        let pObj = id.safeOpenObject(openMode, false);
        let instance = type.cast(pObj);
        pObj.delete();
        return instance;
      }
      // ------------------- Initialize ODA lib ----------------
      Module.canvas = document.querySelector("canvas");
      const {
        Services,
        OdDbBlockTableRecord,
        OdWrFileBuf,
        OdString,
        OdDbText,
        OdGePoint3d,OdDbTextStyleTableRecord,OdDbTextStyleTable
      } = Module;

      const services = new Services();
      services.initialize();
      services.ttfFileNameByDescriptor("SaveLemon.ttf")
      let pDb = services.createDatabase();
      let modelSpaceId = pDb.getModelSpaceId();
      const pRecord = OpenAs(
        modelSpaceId,
        OdDbBlockTableRecord,
        window.OpenMode.kForWrite
      );

      var pStyles = OpenAs(
        pDb.getTextStyleTableId(),
        OdDbTextStyleTable,
        window.OpenMode.kForWrite
      );
      
      var pStyle = OdDbTextStyleTableRecord.createObject();

      var pStyle2 = OpenAs(
        pDb.getTextStyleStandardId(),
        OdDbTextStyleTableRecord,
        window.OpenMode.kForWrite
      );

      pStyle2.setFont(new OdString("Save Lemon"), false, false, 0, 34);

      // var styleName = new OdString("TextStyle1");
      // var textSize;
      // var xScale;
      // var priorSize;
      // var obliquing;
      // var fileName;
      // var isShapeFile = false;
      // var ttFaceName = new OdString("");
      // var bold = false;
      // var italic = false;
      // var charset = false;
      // var pitchAndFamily = 0;

      var styleName = new OdString("OdaTtfStyle");
      var textSize = 0.0;
      var xScale = 1.0;
      var priorSize = 0.2;
      var obliquing = 0.0;
      var fileName = new OdString("SaveLemon.ttf");
      var isShapeFile = false;
      var ttFaceName = new OdString("Save Lemon");
      var bold = false;
      var italic = false;
      var charset = false;
      var pitchAndFamily = 34;

      // Name must be set before a table object is added to a table.  The
      // isShapeFile flag must also be set (if true) before adding the object
      // to the database.
      pStyle.setName(styleName);
      // pStyle.setIsShapeFile(isShapeFile);

      // Add the object to the table.
      var styleId = pStyles.add(pStyle);

      if (isShapeFile) {
        pStyle.setPriorSize(22.45);
      }
      if (ttFaceName) {
        pStyle.setFont(ttFaceName, bold, italic, 0, pitchAndFamily);
      }

      // const pText = OdDbText.createObject();
      // pText.setDatabaseDefaults(pDb, true);
      // pText.setPosition(new OdGePoint3d(0, 0, 0));
      // pText.setAlignmentPoint(new OdGePoint3d(0, 0, 0));
      // pText.setHeight(10);
      // pText.setWidthFactor(1.0);
      // pText.setTextString(new OdString("TEST TEXT"));
      // pText.setHorizontalMode(window.TextHorzMode.kTextLeft);
      // pText.setVerticalMode(window.TextVertMode.kTextBase);
      // pText.setTextStyle(styleId);

      // const textId = pRecord.appendOdDbEntity(pText);

      // ***** file created

      // ***** write file
      const f_out = new OdString("OdDbTextStyleTable.dwg"); // for UNIX UNICODE support
      const fileType = window.SaveType.kDwg;
      const outVer = window.DwgVersion.kDHL_CURRENT;

      pStyles.delete()
      pStyle.delete()

      // pText.delete()
      pRecord.delete();

      pDb.writeFile1(f_out, fileType, outVer, false, 16);
      console.log(`\nDatabase has been saved as ${pDb.getFilename()}`);

      

      var cadCore = new Module.CadCore();
      cadCore.createDevice()
      cadCore.setDb(pDb);
      //cadCore.OpenFile("OdDbTextStyleTable.dwg");
      Module.canvas.height = Module.canvas.clientHeight;
      Module.canvas.width = Module.canvas.clientWidth;
      cadCore.Resize(Module.canvas.width, Module.canvas.height);
      cadCore.ZoomExtents();
      cadCore.Update();

      services.uninitialize();

      document.getElementById("download").onclick = () => {
        pDb.writeFile1(f_out, fileType, outVer, false, 16);
        ReadFile("OdDbTextStyleTable.dwg");
      };

      function ReadFile(name) {
        var buf = window.FS.readFile(name);
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
      
      // document.getElementById("newFileButton").onclick = function () {
      //   const newFileName = Module.ASSETS_FOLDER + "/Example1.dwg";
      //   try {
      //       var cadCore = new Module.CadCore();
      //       const pDb = cadCore.getDb();
      //       const f_out = new OdString(newFileName);
      //       const fileType = SaveType.kDwg;
      //       const outVer = DwgVersion.kDHL_CURRENT;
      //       pDb.writeFile1(f_out, fileType, outVer, false, 16);
      //       const { exists } = FS.analyzePath(newFileName);
      //       if (!exists) {
      //           const fileData = new Uint8Array(0);
      //           Module.FS_createDataFile(
      //               Module.ASSETS_FOLDER,
      //               "Example1.dwg",
      //               fileData,
      //               true,
      //               true,
      //               true
      //           );
      //       }

      //       OpenFile(newFileName);
      //   } catch (e) {
      //       console.error("Error creating new DWG file:", e);
      //   }
      // };
      
      // function OpenFile(name) {
      //   var time = Date.now();
      //   cadCore.OpenFile(name);
      //   Resize();
      //   cadCore.ZoomExtents();
      //   cadCore.Update();
      //   console.log("Time: " + (Date.now() - time));
      //   localStorage.setItem("lastFile", name);
      // }
      
      document
      .getElementById("drawCircleButton")
      .addEventListener("click", function () {
          Module.canvas.addEventListener("click", onCanvasClickCircle);
      });
      
      // document.getElementById('saveButton').onclick = function () {
      //   SaveFile();
      // };

      // function SaveFile() {
      //   const pDb = cadCore.getDb();
      //   const f_out = new OdString(
      //       Module.ASSETS_FOLDER + "/Example1.dwg"
      //   );
      //   try {
      //       pDb.save1(
      //           f_out, false);
      //       const filePath = Module.ASSETS_FOLDER + "/Example1.dwg";
      //       const { exists } = FS.analyzePath(filePath);
      //       if (!exists) {
      //           const fileData = new Uint8Array(0);
      //           Module.FS_createDataFile(
      //               Module.ASSETS_FOLDER,
      //               "Example1.dwg",
      //               fileData,
      //               true,
      //               true,
      //               true
      //           );
      //       }
      //   } catch (e) {
      //       console.error("Error saving DWG file:", e);
      //   }
      // }
      let firstPoint = null;
      let secondPoint = null;
      let tempCircle = null;
      let tempLine = null;
      let centerCircle = null;

      function onCanvasClickCircle(ev) {
        const x = ev.offsetX;
        const y = ev.offsetY;
        if (!firstPoint) {
            firstPoint = { x, y };
            Module.canvas.addEventListener("mousemove", onMouseMoveCircle);
        } else {
            secondPoint = { x, y };
            if (tempLine) {
                const lineobj = OdDbObject.cast(tempLine);
                lineobj.erase(true);
                cadCore.Update();
            }
            tempLine = null;
            if (tempCircle) {
                tempCircle = null;
            }
            firstPoint = null;
            secondPoint = null;
            Module.canvas.removeEventListener("mousemove", onMouseMoveCircle);
            Module.canvas.removeEventListener("click", onCanvasClickCircle);
        }
      }

      function onMouseMoveCircle(ev) {
        if (!firstPoint) return;
        const x = ev.offsetX;
        const y = ev.offsetY;
        drawTempCircle(firstPoint, { x, y }, cadCore);
      }

      function drawTempCircle(p1, p2, cadCore) {
        const pDb = cadCore.getDb();
        const device = cadCore.getDevice();
        const view = device.viewAt(0);
        const edge = screenToWorld(view, p2.x, p2.y);

        const obj = pDb
            .getModelSpaceId()
            .safeOpenObject(OpenMode.kForWrite, false);
        const Record = OdDbBlockTableRecord.cast(obj);
        if (tempCircle) {
            const radius = Math.sqrt(
                Math.pow(edge.x - centerCircle.x, 2) + Math.pow(edge.y - centerCircle.y, 2)
            );
            tempCircle.setCenter(new OdGePoint3d(centerCircle.x, centerCircle.y, 0));
            tempCircle.setRadius(radius);
        } else {
            centerCircle = screenToWorld(view, p1.x, p1.y);
            const radius = Math.sqrt(
                Math.pow(edge.x - centerCircle.x, 2) + Math.pow(edge.y - centerCircle.y, 2)
            );
            tempCircle = OdDbCircle.createObject();
            tempCircle.setDatabaseDefaults(pDb, true);
            tempCircle.setCenter(new OdGePoint3d(centerCircle.x, centerCircle.y, 0));
            tempCircle.setRadius(radius);
            const red = new OdCmColor();
            red.setRGB(255, 0, 0);
            tempCircle.setColor(red, true);
            Record.appendOdDbEntity(tempCircle);
        }
        createLine(Record, centerCircle, edge);
        cadCore.createDevice();
        cadCore.setDb(pDb);
        Resize();
        cadCore.Update();
      }

      function createLine(bBTR, centerCircle, edge) {
        if (tempLine) {
            let line1Pt = new OdGePoint3d(centerCircle.x, centerCircle.y, 0);
            let line2Pt = new OdGePoint3d(edge.x, edge.y, 0);
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
      
      function Resize(ev) {
        Module.canvas.height = Module.canvas.clientHeight;
        Module.canvas.width = Module.canvas.clientWidth;

        cadCore.Resize(Module.canvas.width, Module.canvas.height);
    }
    })
}
