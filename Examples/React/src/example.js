/**
 * @typedef {import('./DrawingWeb.d.ts').Module}
 */

/**
 * 
 * @param {Module} Module 
 */
export function example(Module) {
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

      const pText = OdDbText.createObject();
      pText.setDatabaseDefaults(pDb, true);
      pText.setPosition(new OdGePoint3d(0, 0, 0));
      pText.setAlignmentPoint(new OdGePoint3d(0, 0, 0));
      pText.setHeight(10);
      pText.setWidthFactor(1.0);
      pText.setTextString(new OdString("TEST TEXT"));
      pText.setHorizontalMode(window.TextHorzMode.kTextLeft);
      pText.setVerticalMode(window.TextVertMode.kTextBase);
      pText.setTextStyle(styleId);

      const textId = pRecord.appendOdDbEntity(pText);

      // ***** file created

      // ***** write file
      const f_out = new OdString("OdDbTextStyleTable.dwg"); // for UNIX UNICODE support
      const fileType = window.SaveType.kDwg;
      const outVer = window.DwgVersion.kDHL_CURRENT;

      pStyles.delete()
      pStyle.delete()
      pText.delete()
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
    })
}
