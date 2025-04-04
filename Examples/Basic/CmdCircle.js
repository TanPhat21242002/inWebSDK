const {
    Services,
    OdDb3dSolid,
    OdString,
    OdDbCircle,
    OdCmColor,
    OdDbBlockTableRecord,
} = Module;

export class CmdCircle {
    constructor(cadCore) {
        this.cadCore = cadCore;
        this.firstPoint = null;
        this.secondPoint = null;
        this.initEventListeners();
    }

    initEventListeners() {
        Module.canvas.addEventListener("click", (event) => this.handleCanvasClick(event));
    }

    handleCanvasClick(event) {
        const rect = Module.canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        if (!this.firstPoint) {
            this.firstPoint = { x, y };
            console.log("First point selected:", this.firstPoint);
        } else {
            this.secondPoint = { x, y };
            console.log("Second point selected:", this.secondPoint);
            this.drawCircle(this.firstPoint, this.secondPoint);
            this.resetPoints();
        }
    }

    drawCircle(p1, p2) {
        const services = new Services();
        services.initialize();

        const pDb = this.cadCore.getDb();
        console.log("Database instance:", pDb);

        const centerX = (p1.x + p2.x) / 2;
        const centerY = (p1.y + p2.y) / 2;
        const radius = Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2)) / 2;

        const pCircle = OdDbCircle.createObject();
        pCircle.setDatabaseDefaults(pDb, true);
        const center = new Module.OdGePoint3d(centerX, centerY, 0);
        pCircle.setCenter(center);
        pCircle.setRadius(radius);

        console.log("Circle created:", pCircle);

        const red = new OdCmColor();
        red.setRGB(255, 0, 0);
        pCircle.setColor(red, true);

        const obj = pDb.getModelSpaceId().safeOpenObject(OpenMode.kForWrite, false);
        const record = OdDbBlockTableRecord.cast(obj);
        record.appendOdDbEntity(pCircle);

        this.updateCanvas(pDb);

        pDb.delete();
        services.uninitialize();
    }

    updateCanvas(pDb) {
        this.cadCore.createDevice();
        this.cadCore.setDb(pDb);
        this.cadCore.Resize(Module.canvas.clientWidth, Module.canvas.clientHeight);
        this.cadCore.ZoomExtents();
        this.cadCore.Update();
    }

    resetPoints() {
        this.firstPoint = null;
        this.secondPoint = null;
    }
}