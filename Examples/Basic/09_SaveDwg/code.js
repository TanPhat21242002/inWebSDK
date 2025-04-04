var Module = {
  // TOTAL_MEMORY: 16777216,
  FS: {},
  arguments: [],
  preRun: [],
  postRun: [
    function () {
      // ------------------- Initialize ODA lib ----------------
      Module.canvas = document.querySelector('canvas');
      const {
        Services,
        odInitialize,
        odUninitialize,
        OdCmColor,
        OdDb3dSolid,
        OdDbBlockTableRecord,
        OdString,
        OdWrFileBuf,
      } = Module;

      const services = new Services();
      services.initialize();

      const pDb = services.createDatabase();
      const pSolid = OdDb3dSolid.createObject();
      pSolid.setDatabaseDefaults(pDb, true);
      pSolid.createBox(1.0, 1.0, 1.0);

      const red = new OdCmColor();
      red.setRGB(255, 0, 0);
      pSolid.setColor(red, true);
      const obj = pDb
        .getModelSpaceId()
        .safeOpenObject(OpenMode.kForWrite, false);
      const pRecord = OdDbBlockTableRecord.cast(obj);
      obj.delete();
      pRecord.appendOdDbEntity(pSolid);
      // ***** file created

      // ***** write file
      const f_out = new OdString('Example1.dwg'); // for UNIX UNICODE support
      const fileType = SaveType.kDwg;
      const outVer = DwgVersion.kDHL_CURRENT;
      pDb.writeFile1(f_out, fileType, outVer, false, 16);
      console.log(`\nDatabase has been saved as ${pDb.getFilename()}`);

      pSolid.delete();
      pRecord.delete();
      pDb.delete();

      var cadCore = new Module.CadCore();
      cadCore.OpenFile('Example1.dwg');
      Module.canvas.height = Module.canvas.clientHeight;
      Module.canvas.width = Module.canvas.clientWidth;
      cadCore.Resize(Module.canvas.width, Module.canvas.height);
      cadCore.ZoomExtents();
      cadCore.Update();

      services.uninitialize();

      document.getElementById('download').onclick = () => {
        ReadFile('Example1.dwg');
      };
      function ReadFile(name) {
        var buf = FS.readFile(name);
        var blob = new Blob([buf.buffer]);
        var url = window.URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = name;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        console.log('Downloading start');
      }
    },
  ],
};
