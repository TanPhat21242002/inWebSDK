declare namespace Module {
    class App {
        constructor();
        SetUserName(name: string): void;
        Dolly(x: number, y: number): void;
        OpenFile(name: string): void;
        Orbit(deltaX: number, deltaY: number): void;
        Resize(width: number, height: number): void;
        Update(): void;
        Zoom(factor: number, scrx: number, scry: number): void;
        ZoomExtents(): void;
        ExecuteCommand(name: string, args: Array<string>): void;
        getDb(): OdDbDatabase;
        setDb(db: OdDbDatabase): void;
        getDevice(): void;
        createDevice(): OdGsDevice;
        gsModule(): OdGsModule;
        registerFontFileName(name: string): void;
        regenAll(): void;
    };

    class Services {
        constructor();
        createDatabase(): OdDbDatabase;
        initialize(): void;
        uninitialize(): void;
        loadModule(name: string): OdRxModule;
        unloadModule(name: string): void;
        createContext(): any;
        readFile(name: string): OdDbDatabase;
        layoutManager(): OdDbLayoutManager;
        ttfFileNameByDescriptor(fontName: string): void;
    };

    class OdString {
        constructor();
        constructor(text: string);
        toString(): string;
        set(text: string): OdString;
    };

    class OdArray<T> {
        push_back(value: T): void;
        resize(size: number): void;
        size(): number;
        get(index: number): T;
        set(index: number, value: T): boolean;
        toJSArray(): Array<T>;
        asArrayPtr(): T;
    };
    
    class OdVector<T> {
        push_back(value: T): void;
        resize(size: number): void;
        size(): number;
        get(index: number): T;
        set(index: number, value: T): boolean;
        toJSArray(): Array<T>
    };

    class Primitive<T> {
        constructor(arg: T | undefined);
        static fromArray<T>(array: OdArray<T>): Primitive<T>;
        get():T;
        set(value:T);
    }

    class Int extends Primitive<number> {}
    class Double extends Primitive<number> {}
    class Boolean extends Primitive<boolean> {}
    class Boolean extends Primitive<boolean> {}
    class ODCOLORREF extends Primitive<number> {}

    function odcmAcadDarkPalette(): ODCOLORREF;
    function odcmAcadLightPalette(): ODCOLORREF;
    function odcmAcadPlotPalette(): ODCOLORREF;
    function odcmAcadPalette(backgr: number): ODCOLORREF;
    function odcmAcadDynamicPalette(background: number): ODCOLORREF;
    function odcmLookupRGB(idx: number, pPalette: ODCOLORREF): number;
    function odcmLookupACI(rgb: number, startParam: ODCOLORREF): number;
  
/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdAbstractViewPE.html} Additional documentation.
 */
class OdAbstractViewPE extends OdRxObject {
  static cast(pObj: OdRxObject): OdAbstractViewPE;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdAbstractViewPE;
  static rxInit(): void;
  static rxUninit(): void;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  lowerLeftCorner(pViewport: OdRxObject): OdGePoint2d;
  upperRightCorner(pViewport: OdRxObject): OdGePoint2d;
  setViewport(pViewport: OdRxObject, lowerLeft: OdGePoint2d, upperRight: OdGePoint2d): void;
  hasViewport(pViewport: OdRxObject): boolean;
  target(pViewport: OdRxObject): OdGePoint3d;
  direction(pViewport: OdRxObject): OdGeVector3d;
  upVector(pViewport: OdRxObject): OdGeVector3d;
  fieldWidth(pViewport: OdRxObject): number;
  fieldHeight(pViewport: OdRxObject): number;
  isPerspective(pViewport: OdRxObject): boolean;
  viewOffset(pViewport: OdRxObject): OdGeVector2d;
  hasViewOffset(pViewport: OdRxObject): boolean;
  viewTwist(pViewport: OdRxObject): number;
  setView(pViewport: OdRxObject, target: OdGePoint3d, direction: OdGeVector3d, upVector: OdGeVector3d, fieldWidth: number, fieldHeight: number, isPerspective: boolean, viewOffset: OdGeVector2d): void;
  setLensLength(pViewport: OdRxObject, lensLength: number): void;
  lensLength(pViewport: OdRxObject): number;
  isFrontClipOn(pViewport: OdRxObject): boolean;
  setFrontClipOn(pViewport: OdRxObject, frontClip: boolean): void;
  isBackClipOn(pViewport: OdRxObject): boolean;
  setBackClipOn(pViewport: OdRxObject, backClip: boolean): void;
  isFrontClipAtEyeOn(pViewport: OdRxObject): boolean;
  setFrontClipAtEyeOn(pViewport: OdRxObject, frontClipAtEye: boolean): void;
  frontClipDistance(pViewport: OdRxObject): number;
  setFrontClipDistance(pViewport: OdRxObject, frontClipDistance: number): void;
  backClipDistance(pViewport: OdRxObject): number;
  setBackClipDistance(pViewport: OdRxObject, backClipDistance: number): void;
  setRenderMode(pViewport: OdRxObject, renderMode: RenderMode): void;
  renderMode(pViewport: OdRxObject): RenderMode;
  setVisualStyle(pViewport: OdRxObject, visualStyleId: OdDbStub): void;
  visualStyle(pViewport: OdRxObject): OdDbStub;
  setBackground(pViewport: OdRxObject, backgroundId: OdDbStub): void;
  background(pViewport: OdRxObject): OdDbStub;
  isDefaultLightingOn(pViewport: OdRxObject): boolean;
  setDefaultLightingOn(pViewport: OdRxObject, isOn: boolean): void;
  defaultLightingType(pViewport: OdRxObject): DefaultLightingType;
  setDefaultLightingType(pViewport: OdRxObject, lightingType: DefaultLightingType): void;
  frozenLayers(pViewport: OdRxObject, frozenLayers: OdDbStubPtrArray): void;
  setFrozenLayers(pViewport: OdRxObject, frozenLayers: OdDbStubPtrArray): void;
  setView1(pDestinationView: OdRxObject, pSourceView: OdRxObject): void;
  hasUcs(pViewport: OdRxObject): boolean;
  orthoUcs(pViewport: OdRxObject, pDb: OdDbBaseDatabase): OrthographicView;
  setUcs(pViewport: OdRxObject, orthoUcs: OrthographicView, pDb: OdDbBaseDatabase): boolean;
  ucsName(pViewport: OdRxObject): OdDbStub;
  setUcs1(pViewport: OdRxObject, ucsId: OdDbStub): boolean;
  getUcs(pViewport: OdRxObject, origin: OdGePoint3d, xAxis: OdGeVector3d, yAxis: OdGeVector3d): void;
  setUcs2(pViewport: OdRxObject, origin: OdGePoint3d, xAxis: OdGeVector3d, yAxis: OdGeVector3d): void;
  elevation(pViewport: OdRxObject): number;
  setElevation(pViewport: OdRxObject, elevation: number): void;
  setUcs3(pDestinationView: OdRxObject, pSourceView: OdRxObject): void;
  viewExtents(pViewport: OdRxObject, extents: OdGeBoundBlock3d): boolean;
  plotExtents(pViewport: OdRxObject, extents: OdGeBoundBlock3d, bExtendOnly: boolean, bExtentsValid: boolean, pWorldToEye: OdGeMatrix3d): boolean;
  zoomExtents(pViewport: OdRxObject, pExtents: OdGeBoundBlock3d, extCoef: number): boolean;
  worldToEye(pViewport: OdRxObject): OdGeMatrix3d;
  eyeToWorld(pViewport: OdRxObject): OdGeMatrix3d;
  isPlotting(pViewport: OdRxObject): boolean;
  plotDataObject(pViewport: OdRxObject, bOpenForWrite: boolean): OdRxObjectPtr;
  applyPlotSettings(pDestinationView: OdRxObject, pSourceView: OdRxObject): boolean;
  annotationScale(pViewport: OdRxObject): OdDbStub;
  compatibleCopyObject(pViewport: OdRxObject, pCopyObject: OdDbStub): OdDbStub;
};

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdBaseObjectPtr.html} Additional documentation.
 */
class OdBaseObjectPtr {
  constructor(arg0: OdBaseObjectPtr);
  get(): OdRxObject;
  isNull(): boolean;
  static ctr1(arg0: OdBaseObjectPtr): OdBaseObjectPtr;
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdCmColor.html} Additional documentation.
 */
class OdCmColor extends OdCmColorBase {
  constructor();
  constructor(color: OdCmColor);
  static odcmGetColorFromColorBookName(color: OdCmColor, bookMap: BooksMap, bookName: OdString, colorName: OdString): OdResult;
  static odcmGetColorFromColorBookName1(color: OdCmColor, bookName: OdString, colorName: OdString): OdResult;
  getDescription(): OdString;
  getExplanation(): OdString;
  colorMethod(): ColorMethod;
  setColorMethod(colorMethod: ColorMethod): void;
  isByColor(): boolean;
  isByLayer(): boolean;
  isByBlock(): boolean;
  isByACI(): boolean;
  isForeground(): boolean;
  isByDgnIndex(): boolean;
  isNone(): boolean;
  color(): number;
  setColor(color: number): void;
  setRGB(red: number, green: number, blue: number): void;
  setRed(red: number): void;
  setGreen(green: number): void;
  setBlue(blue: number): void;
  red(): number;
  green(): number;
  blue(): number;
  colorIndex(): number;
  setColorIndex(colorIndex: number): void;
  setNames(colorName: OdString, bookName: OdString): boolean;
  colorName(): OdString;
  bookName(): OdString;
  colorNameForDisplay(): OdString;
  entityColor(): OdCmEntityColor;
  getDictionaryKey(): OdString;
  setNamesFromDictionaryKey(dictionaryKey: OdString): boolean;
  dwgIn(pFiler: OdDbDwgFiler): void;
  dwgOut(pFiler: OdDbDwgFiler): void;
  dxfIn(pFiler: OdDbDxfFiler, groupCodeOffset: number): void;
  dxfOut(pFiler: OdDbDxfFiler, groupCodeOffset: number): void;
  audit(pAuditInfo: OdDbAuditInfo): void;
  dwgInAsTrueColor(pFiler: OdDbDwgFiler): void;
  dwgOutAsTrueColor(pFiler: OdDbDwgFiler): void;
  dxfIn1(pFiler: OdDbDxfFiler, groupCodeOffset: number, bFixColor: boolean): void;
  dxfInXRec(pFiler: OdDbDxfFiler, groupCodeOffset: number): boolean;
  dxfOutXRec(pFiler: OdDbDxfFiler, groupCodeOffset: number): void;
  static ctr1(color: OdCmColorBase): OdCmColor;
  static ctr2(color: ColorMethod): OdCmColor;
};

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdCmColorBase.html} Additional documentation.
 */
class OdCmColorBase {
  colorMethod(): ColorMethod;
  setColorMethod(colorMethod: ColorMethod): void;
  isByColor(): boolean;
  isByLayer(): boolean;
  isByBlock(): boolean;
  isByACI(): boolean;
  isForeground(): boolean;
  isByDgnIndex(): boolean;
  color(): number;
  setColor(color: number): void;
  setRGB(red: number, green: number, blue: number): void;
  setRed(red: number): void;
  setGreen(green: number): void;
  setBlue(blue: number): void;
  red(): number;
  green(): number;
  blue(): number;
  colorIndex(): number;
  setColorIndex(colorIndex: number): void;
  setNames(colorName: OdString, bookName: OdString): boolean;
  colorName(): OdString;
  bookName(): OdString;
  colorNameForDisplay(): OdString;
};

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdCmEntityColor.html} Additional documentation.
 */
class OdCmEntityColor {
  constructor();
  constructor(color: OdCmEntityColor);
  constructor(red: number, green: number, blue: number);
  static setColorMethod1(pRGBM: number, colorMethod: ColorMethod): void;
  static colorMethod1(pRGBM: number): ColorMethod;
  static setColor1(pRGBM: number, color: number): void;
  static color1(pRGBM: number): number;
  static setColorIndex1(pRGBM: number, colorIndex: number): void;
  static setDgnColorIndex(pRGBM: number, colorIndex: number): void;
  static colorIndex1(pRGBM: number): number;
  static setRGB1(pRGBM: number, red: number, green: number, blue: number): void;
  static setRed1(pRGBM: number, red: number): void;
  static setGreen1(pRGBM: number, green: number): void;
  static setBlue1(pRGBM: number, blue: number): void;
  static red1(pRGBM: number): number;
  static green1(pRGBM: number): number;
  static blue1(pRGBM: number): number;
  static isByColor1(pRGBM: number): boolean;
  static isByLayer1(pRGBM: number): boolean;
  static isByBlock1(pRGBM: number): boolean;
  static isByACI1(pRGBM: number): boolean;
  static isForeground1(pRGBM: number): boolean;
  static isByDgnIndex1(pRGBM: number): boolean;
  static isNone1(pRGBM: number): boolean;
  static setTrueColor1(pRGBM: number): void;
  static lookUpRGB(colorIndex: number): number;
  static lookUpACI(red: number, green: number, blue: number): number;
  setColorMethod(colorMethod: ColorMethod): void;
  colorMethod(): ColorMethod;
  setColor(color: number): void;
  color(): number;
  setColorIndex(colorIndex: number): void;
  colorIndex(): number;
  setRGB(red: number, green: number, blue: number): void;
  setRed(red: number): void;
  setGreen(green: number): void;
  setBlue(blue: number): void;
  red(): number;
  green(): number;
  blue(): number;
  isByColor(): boolean;
  isByLayer(): boolean;
  isByBlock(): boolean;
  isByACI(): boolean;
  isForeground(): boolean;
  isByDgnIndex(): boolean;
  isNone(): boolean;
  setTrueColor(): void;
  static ctr1(colorMethod: ColorMethod): OdCmEntityColor;
};

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdCmTransparency.html} Additional documentation.
 */
class OdCmTransparency {
  constructor();
  constructor(method: transparencyMethod);
  setAlpha(alpha: number): void;
  alpha(): number;
  setAlphaPercent(alphaPercent: number): void;
  alphaPercent(): number;
  method(): transparencyMethod;
  setMethod(method: transparencyMethod): void;
  isByAlpha(): boolean;
  isByBlock(): boolean;
  isByLayer(): boolean;
  isInvalid(): boolean;
  isClear(): boolean;
  isSolid(): boolean;
  serializeOut(): number;
  serializeIn(transparency: number): void;
  dwgIn(pFiler: OdDbDwgFiler): void;
  dwgOut(pFiler: OdDbDwgFiler): void;
  static ctr1(alpha: number): OdCmTransparency;
  static ctr2(alphaPercent: number): OdCmTransparency;
  static ctr3(arg0: OdCmTransparency): OdCmTransparency;
  static ctr4(arg0: OdCmTransparency): OdCmTransparency;
};

enum ColorMethod {
  kByLayer = 192,
  kByBlock = 193,
  kByColor = 194,
  kByACI = 195,
  kByPen = 196,
  kForeground = 197,
  kByDgnIndex = 199,
  kNone = 200
};

enum Color {
  kRed = 0,
  kGreen = 1,
  kBlue = 2
};

enum ACIcolorMethod {
  kACIbyBlock = 0,
  kACIforeground = 7,
  kACIbyLayer = 256,
  kACIclear = 0,
  kACIRed = 1,
  kACIYellow = 2,
  kACIGreen = 3,
  kACICyan = 4,
  kACIBlue = 5,
  kACIMagenta = 6,
  kACIWhite = 7,
  kACIstandard = 7,
  kACImaximum = 255,
  kACInone = 257,
  kACIminimum = -255
};

enum transparencyMethod {
  kByLayer = 0,
  kByBlock = 1,
  kByAlpha = 2,
  kErrorValue = 3
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDb2LineAngularDimension.html} Additional documentation.
 */
class OdDb2LineAngularDimension extends OdDbDimension {
  constructor();
  constructor(arg0: OdDb2LineAngularDimension);
  static cast(pObj: OdRxObject): OdDb2LineAngularDimension;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdDb2LineAngularDimension;
  static rxInit(): void;
  static rxUninit(): void;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  arcPoint(): OdGePoint3d;
  setArcPoint(arcPoint: OdGePoint3d): void;
  xLine1Start(): OdGePoint3d;
  setXLine1Start(xLine1Start: OdGePoint3d): void;
  xLine1End(): OdGePoint3d;
  setXLine1End(xLine1End: OdGePoint3d): void;
  xLine2Start(): OdGePoint3d;
  setXLine2Start(xLine2Start: OdGePoint3d): void;
  xLine2End(): OdGePoint3d;
  setXLine2End(xLine2End: OdGePoint3d): void;
  extArcOn(): boolean;
  setExtArcOn(value: boolean): void;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): void;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): void;
  dxfInFields_R12(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields_R12(pFiler: OdDbDxfFiler): void;
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDb2dPolyline.html} Additional documentation.
 */
class OdDb2dPolyline extends OdDbCurve {
  constructor();
  constructor(arg0: OdDb2dPolyline);
  static cast(pObj: OdRxObject): OdDb2dPolyline;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdDb2dPolyline;
  static rxInit(): void;
  static rxUninit(): void;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  polyType(): Poly2dType;
  setPolyType(polyType: Poly2dType): void;
  makeClosed(): void;
  makeOpen(): void;
  defaultStartWidth(): number;
  setDefaultStartWidth(defaultStartWidth: number): void;
  defaultEndWidth(): number;
  setDefaultEndWidth(defaultEndWidth: number): void;
  thickness(): number;
  setThickness(thickness: number): void;
  normal(): OdGeVector3d;
  setNormal(normal: OdGeVector3d): void;
  elevation(): number;
  setElevation(elevation: number): void;
  isLinetypeGenerationOn(): boolean;
  setLinetypeGenerationOn(): void;
  setLinetypeGenerationOff(): void;
  straighten(): void;
  appendVertex(pVertex: OdDb2dVertex): OdDbObjectId;
  insertVertexAt(indexVertId: OdDbObjectId, pVertex: OdDb2dVertex): OdDbObjectId;
  insertVertexAt1(pIndexVert: OdDb2dVertex, pVertex: OdDb2dVertex): OdDbObjectId;
  openVertex(vertId: OdDbObjectId, mode: OpenMode, openErasedOne: boolean): OdDb2dVertex;
  openSequenceEnd(mode: OpenMode): OdDbSequenceEnd;
  vertexIterator(): OdDbObjectIterator;
  vertexPosition(vertex: OdDb2dVertex): OdGePoint3d;
  subWorldDraw(pWd: OdGiWorldDraw): boolean;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): void;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): void;
  dxfInFields_R12(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields_R12(pFiler: OdDbDxfFiler): void;
  dxfOut(pFiler: OdDbDxfFiler): void;
  dxfIn(pFiler: OdDbDxfFiler): OdResult;
  subClose(): void;
  subExplode(entitySet: OdRxObjectPtrArray): OdResult;
  explodeGeometry(entitySet: OdRxObjectPtrArray): OdResult;
  subTransformBy(xfm: OdGeMatrix3d): OdResult;
  isPlanar(): boolean;
  getArea(area: number): OdResult;
  getPlane(plane: OdGePlane, planarity: Planarity): OdResult;
  isClosed(): boolean;
  isPeriodic(): boolean;
  getStartParam(startParam: number): OdResult;
  getEndParam(endParam: number): OdResult;
  getStartPoint(startPoint: OdGePoint3d): OdResult;
  getEndPoint(endPoint: OdGePoint3d): OdResult;
  getPointAtParam(param: number, pointOnCurve: OdGePoint3d): OdResult;
  getParamAtPoint(pointOnCurve: OdGePoint3d, param: number): OdResult;
  getDistAtParam(param: number, dist: number): OdResult;
  getParamAtDist(dist: number, param: number): OdResult;
  getFirstDeriv(param: number, firstDeriv: OdGeVector3d): OdResult;
  getSecondDeriv(param: number, secondDeriv: OdGeVector3d): OdResult;
  convertToPolyType(newVal: Poly2dType): OdResult;
  curveFit(): OdResult;
  splineFit(): OdResult;
  splineFit1(splineType: Poly2dType, splineSegs: number): OdResult;
  subGetSubentPathsAtGsMarker(type: SubentType, gsMark: number, arg2: OdGePoint3d, arg3: OdGeMatrix3d, subentPaths: OdDbFullSubentPathArray, pEntAndInsertStack: OdDbObjectIdArray): OdResult;
  subGetGsMarkersAtSubentPath(subPath: OdDbFullSubentPath, gsMarkers: OdGsMarkerArray): OdResult;
  subSubentPtr(path: OdDbFullSubentPath): OdDbEntity;
  getSplitCurves(points: OdGePoint3dArray, curveSegments: OdRxObjectPtrArray): OdResult;
  getSplitCurves1(params: OdGeDoubleArray, curveSegments: OdRxObjectPtrArray): OdResult;
  getEcs(): OdGeMatrix3d;
  setFromOdGeCurve(geCurve: OdGeCurve3d, normal: OdGeVector3d, tol: OdGeTol): OdResult;
  reverseCurve(): OdResult;
  findVertexIndex(vert: OdDbVertex): number;
  subSetDatabaseDefaults(pDb: OdDbDatabase, doSubEnts: boolean): void;
};

enum Poly2dType {
  k2dSimplePoly = 0,
  k2dFitCurvePoly = 1,
  k2dQuadSplinePoly = 2,
  k2dCubicSplinePoly = 3
};

enum Vertex2dType {
  k2dVertex = 0,
  k2dSplineCtlVertex = 1,
  k2dSplineFitVertex = 2,
  k2dCurveFitVertex = 3
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDb2dVertex.html} Additional documentation.
 */
class OdDb2dVertex extends OdDbVertex {
  constructor();
  constructor(arg0: OdDb2dVertex);
  static cast(pObj: OdRxObject): OdDb2dVertex;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdDb2dVertex;
  static rxInit(): void;
  static rxUninit(): void;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  vertexType(): Vertex2dType;
  setVertexType(vertexType: Vertex2dType): void;
  position(): OdGePoint3d;
  setPosition(position: OdGePoint3d): void;
  startWidth(): number;
  setStartWidth(startWidth: number): void;
  endWidth(): number;
  setEndWidth(endWidth: number): void;
  bulge(): number;
  setBulge(bulge: number): void;
  isTangentUsed(): boolean;
  useTangent(): void;
  ignoreTangent(): void;
  tangent(): number;
  setTangent(tangent: number): void;
  vertexIdentifier(): number;
  setVertexIdentifier(suggestedId: number): void;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): void;
  dxfInFields_R12(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields_R12(pFiler: OdDbDxfFiler): void;
  subTransformBy(xfm: OdGeMatrix3d): OdResult;
  subGetTransformedCopy(mat: OdGeMatrix3d, pCopy: OdDbEntity): OdResult;
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDb3PointAngularDimension.html} Additional documentation.
 */
class OdDb3PointAngularDimension extends OdDbDimension {
  constructor();
  constructor(arg0: OdDb3PointAngularDimension);
  static cast(pObj: OdRxObject): OdDb3PointAngularDimension;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdDb3PointAngularDimension;
  static rxInit(): void;
  static rxUninit(): void;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  arcPoint(): OdGePoint3d;
  setArcPoint(arcPoint: OdGePoint3d): void;
  xLine1Point(): OdGePoint3d;
  setXLine1Point(xLine1Point: OdGePoint3d): void;
  xLine2Point(): OdGePoint3d;
  setXLine2Point(xLine2Point: OdGePoint3d): void;
  centerPoint(): OdGePoint3d;
  extArcOn(): boolean;
  setExtArcOn(value: boolean): void;
  setCenterPoint(centerPoint: OdGePoint3d): void;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): void;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): void;
  dxfInFields_R12(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields_R12(pFiler: OdDbDxfFiler): void;
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDb3dPolyline.html} Additional documentation.
 */
class OdDb3dPolyline extends OdDbCurve {
  constructor();
  constructor(arg0: OdDb3dPolyline);
  static cast(pObj: OdRxObject): OdDb3dPolyline;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdDb3dPolyline;
  static rxInit(): void;
  static rxUninit(): void;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  makeClosed(): void;
  makeOpen(): void;
  polyType(): Poly3dType;
  setPolyType(polyType: Poly3dType): void;
  straighten(): void;
  appendVertex(pVertex: OdDb3dPolylineVertex): OdDbObjectId;
  insertVertexAt(indexVertId: OdDbObjectId, pVertex: OdDb3dPolylineVertex): OdDbObjectId;
  insertVertexAt1(pIndexVert: OdDb3dPolylineVertex, pVertex: OdDb3dPolylineVertex): OdDbObjectId;
  openVertex(vertId: OdDbObjectId, mode: OpenMode, openErasedOne: boolean): OdDb3dPolylineVertex;
  openSequenceEnd(mode: OpenMode): OdDbSequenceEnd;
  vertexIterator(): OdDbObjectIterator;
  dxfOut(pFiler: OdDbDxfFiler): void;
  dxfIn(pFiler: OdDbDxfFiler): OdResult;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): void;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): void;
  dxfInFields_R12(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields_R12(pFiler: OdDbDxfFiler): void;
  subClose(): void;
  subExplode(entitySet: OdRxObjectPtrArray): OdResult;
  explodeGeometry(entitySet: OdRxObjectPtrArray): OdResult;
  subTransformBy(xfm: OdGeMatrix3d): OdResult;
  subWorldDraw(pWd: OdGiWorldDraw): boolean;
  isPlanar(): boolean;
  getPlane(plane: OdGePlane, planarity: Planarity): OdResult;
  isClosed(): boolean;
  isPeriodic(): boolean;
  getStartParam(startParam: number): OdResult;
  getEndParam(endParam: number): OdResult;
  getStartPoint(startPoint: OdGePoint3d): OdResult;
  getEndPoint(endPoint: OdGePoint3d): OdResult;
  getPointAtParam(param: number, pointOnCurve: OdGePoint3d): OdResult;
  getParamAtPoint(pointOnCurve: OdGePoint3d, param: number): OdResult;
  getDistAtParam(param: number, dist: number): OdResult;
  getParamAtDist(dist: number, param: number): OdResult;
  getFirstDeriv(param: number, firstDeriv: OdGeVector3d): OdResult;
  getSecondDeriv(param: number, secondDeriv: OdGeVector3d): OdResult;
  getArea(area: number): OdResult;
  convertToPolyType(newVal: Poly3dType): OdResult;
  splineFit(): OdResult;
  splineFit1(splineType: Poly3dType, splineSegs: number): OdResult;
  subGetSubentPathsAtGsMarker(type: SubentType, gsMark: number, arg2: OdGePoint3d, arg3: OdGeMatrix3d, subentPaths: OdDbFullSubentPathArray, pEntAndInsertStack: OdDbObjectIdArray): OdResult;
  subGetGsMarkersAtSubentPath(subPath: OdDbFullSubentPath, gsMarkers: OdGsMarkerArray): OdResult;
  subSubentPtr(path: OdDbFullSubentPath): OdDbEntity;
  getSplitCurves(points: OdGePoint3dArray, curveSegments: OdRxObjectPtrArray): OdResult;
  getSplitCurves1(params: OdGeDoubleArray, curveSegments: OdRxObjectPtrArray): OdResult;
  setFromOdGeCurve(geCurve: OdGeCurve3d, normal: OdGeVector3d, tol: OdGeTol): OdResult;
  reverseCurve(): OdResult;
  findVertexIndex(vert: OdDbVertex): number;
};

enum Poly3dType {
  k3dSimplePoly = 0,
  k3dQuadSplinePoly = 1,
  k3dCubicSplinePoly = 2
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDb3dPolylineVertex.html} Additional documentation.
 */
class OdDb3dPolylineVertex extends OdDbVertex {
  constructor();
  constructor(arg0: OdDb3dPolylineVertex);
  static cast(pObj: OdRxObject): OdDb3dPolylineVertex;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdDb3dPolylineVertex;
  static rxInit(): void;
  static rxUninit(): void;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  vertexType(): Vertex3dType;
  setVertexType(vertexType: Vertex3dType): void;
  position(): OdGePoint3d;
  setPosition(position: OdGePoint3d): void;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): void;
  dxfInFields_R12(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields_R12(pFiler: OdDbDxfFiler): void;
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDb3dProfile.html} Additional documentation.
 */
class OdDb3dProfile extends OdRxObject {
  static cast(pObj: OdRxObject): OdDb3dProfile;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdDb3dProfile;
  static rxInit(): void;
  static rxUninit(): void;
  static createObject1(faceSubentPath: OdDbFullSubentPath): OdDb3dProfile;
  static mergeProfiles(profileArrArray: any, mergeEdges: boolean, mergeCurves: boolean, mergedProfileArrArray: any): OdResult;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  copyFrom(src: OdRxObject): void;
  entity(): OdDbEntity;
  set(pEntity: OdDbEntity): OdResult;
  set1(vertexRef: OdDbVertexRef): OdResult;
  getVertexRef(vertexRef: OdDbVertexRef): OdResult;
  set2(pathRef: OdDbPathRef): OdResult;
  isClosed(tol: OdGeTol): boolean;
  isPlanar(): boolean;
  isSubent(): boolean;
  isFace(): boolean;
  isEdge(): boolean;
  isValid(): boolean;
  getPathRef(pathRef: OdDbPathRef): OdResult;
  convertProfile(aPathArray: any): OdDb3dProfile;
  convertProfile1(explodeMultiFaceRegions: boolean, convertSurfaceToEdges: boolean, nonPlanarOnly: boolean, outerLoopOnly: boolean, convertedProfileArrArray: any): OdResult;
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDb3dSolid.html} Additional documentation.
 */
class OdDb3dSolid extends OdDbEntity {
  constructor();
  constructor(arg0: OdDb3dSolid);
  static cast(pObj: OdRxObject): OdDb3dSolid;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdDb3dSolid;
  static rxInit(): void;
  static rxUninit(): void;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  isNull(): boolean;
  acisOut(pStreamBuf: OdStreamBuf, typeVer: number): OdResult;
  acisIn(pStreamBuf: OdStreamBuf, pTypeVer: number): OdResult;
  brep(brep: OdBrBrep): void;
  getFaceMesh(mesh: OdGeTrMesh, iFace: number, triangulationParams: wrTriangulationParams): boolean;
  subWorldDraw(pWd: OdGiWorldDraw): boolean;
  subViewportDraw(pVd: OdGiViewportDraw): void;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): void;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): void;
  createBox(xLen: number, yLen: number, zLen: number): void;
  createFrustum(height: number, majorRadius: number, minorRadius: number, topMajorRadius: number): void;
  createSphere(radius: number): void;
  createTorus(majorRadius: number, minorRadius: number): void;
  createWedge(xLen: number, yLen: number, zLen: number): void;
  extrude(pRegion: OdDbRegion, height: number, taperAngle: number): OdResult;
  revolve(pRegion: OdDbRegion, axisPoint: OdGePoint3d, axisDir: OdGeVector3d, angleOfRevolution: number): OdResult;
  booleanOper(operation: BoolOperType, solid: OdDb3dSolid): OdResult;
  extrudeAlongPath(region: OdDbRegion, path: OdDbCurve, taperAngle: number): OdResult;
  imprintEntity(pEntity: OdDbEntity): OdResult;
  getArea(area: number): OdResult;
  checkInterference(otherSolid: OdDb3dSolid, createNewSolid: boolean, solidsInterfere: boolean, commonVolumeSolid: OdDb3dSolid): OdResult;
  getMassProp(volume: number, centroid: OdGePoint3d, momInertia: number, prodInertia: number, prinMoments: number, prinAxes: OdGeVector3d, radiiGyration: number, extents: OdGeExtents3d): OdResult;
  getSection(plane: OdGePlane, sectionRegion: OdDbRegion): OdResult;
  getSlice(plane: OdGePlane, bGetNegHalfToo: boolean, pNegHalfSolid: OdDb3dSolid): OdResult;
  getSlice1(pSurface: OdDbSurface, bGetNegHalfToo: boolean, pNegHalfSolid: OdDb3dSolid): OdResult;
  cleanBody(): OdResult;
  offsetBody(offsetDistance: number): OdResult;
  separateBody(newSolids: OdDb3dSolidPtrArray): OdResult;
  createExtrudedSolid(pSweepEnt: OdDbEntity, directionVec: OdGeVector3d, sweepOptions: OdDbSweepOptions): OdResult;
  createExtrudedSolid1(pSweepEnt: OdDbEntity, faceSubentId: OdDbSubentId, directionVec: OdGeVector3d, sweepOptions: OdDbSweepOptions): OdResult;
  createExtrudedSolid2(pSweepEnt: OdDbEntity, faceSubentId: OdDbSubentId, height: number, sweepOptions: OdDbSweepOptions): OdResult;
  createLoftedSolid(crossSectionCurves: OdDbEntityPtrArray, guideCurves: OdDbEntityPtrArray, pPathCurve: OdDbEntity, loftOptions: OdDbLoftOptions): OdResult;
  createPyramid(height: number, sides: number, radius: number, topRadius: number): OdResult;
  createRevolvedSolid(pRevEnt: OdDbEntity, axisPnt: OdGePoint3d, axisDir: OdGeVector3d, revAngle: number, startAngle: number, revolveOptions: OdDbRevolveOptions): OdResult;
  createRevolvedSolid1(pRevEnt: OdDbEntity, faceSubentId: OdDbSubentId, axisPnt: OdGePoint3d, axisDir: OdGeVector3d, revAngle: number, startAngle: number, revolveOptions: OdDbRevolveOptions): OdResult;
  createSweptSolid(pSweepEnt: OdDbEntity, faceSubentId: OdDbSubentId, pPathEnt: OdDbEntity, sweepOptions: OdDbSweepOptions): OdResult;
  createSweptSolid1(pSweepEnt: OdDbEntity, pPathEnt: OdDbEntity, sweepOptions: OdDbSweepOptions): OdResult;
  stlOut(output: OdStreamBuf, asciiFormat: boolean, maxSurfaceDeviation: number): OdResult;
  decomposeForSave(ver: DwgVersion, replaceId: OdDbObjectId, exchangeXData: boolean): OdDbObject;
  subExplode(entitySet: OdRxObjectPtrArray): OdResult;
  subTransformBy(xfm: OdGeMatrix3d): OdResult;
  saveAs(pWd: OdGiWorldDraw, ver: DwgVersion): void;
  copyEdge(subentId: OdDbSubentId, newEntity: OdDbEntity): OdResult;
  copyFace(subentId: OdDbSubentId, newEntity: OdDbEntity): OdResult;
  subGetSubentPathsAtGsMarker(type: SubentType, gsMark: number, pickPoint: OdGePoint3d, viewXform: OdGeMatrix3d, subentPaths: OdDbFullSubentPathArray, pEntAndInsertStack: OdDbObjectIdArray): OdResult;
  subGetGsMarkersAtSubentPath(subPath: OdDbFullSubentPath, gsMarkers: OdGsMarkerArray): OdResult;
  subSubentPtr(id: OdDbFullSubentPath): OdDbEntity;
  extrudeFaces(faceSubentIdsArray: any, height: number, taper: number): OdResult;
  extrudeFacesAlongPath(faceSubentIdsArray: any, path: OdDbCurve): OdResult;
  taperFaces(faceSubentIdsArray: any, basePoint: OdGePoint3d, draftVector: OdGeVector3d, draftAngle: number): OdResult;
  transformFaces(faceSubentIdsArray: any, matrix: OdGeMatrix3d): OdResult;
  removeFaces(faceSubentIdsArray: any): OdResult;
  offsetFaces(faceSubentIdsArray: any, offsetDistance: number): OdResult;
  shellBody(faceSubentIdsArray: any, offsetDistance: number): OdResult;
  numChanges(): number;
  setSubentColor(subentId: OdDbSubentId, color: OdCmColor): OdResult;
  getSubentColor(subentId: OdDbSubentId, color: OdCmColor): OdResult;
  setSubentMaterial(subentId: OdDbSubentId, matId: OdDbObjectId): OdResult;
  getSubentMaterial(subentId: OdDbSubentId, matId: OdDbObjectId): OdResult;
  setSubentMaterialMapper(subentId: OdDbSubentId, mapper: OdGiMapper): OdResult;
  getSubentMaterialMapper(subentId: OdDbSubentId, mapper: OdGiMapper): OdResult;
  chamferEdges(edgeSubentIdsArray: any, baseFaceSubentId: OdDbSubentId, baseDist: number, otherDist: number): OdResult;
  filletEdges(edgeSubentIdsArray: any, radius: OdGeDoubleArray, startSetback: OdGeDoubleArray, endSetback: OdGeDoubleArray): OdResult;
  createFrom(pFromEntity: OdDbEntity): OdResult;
  recordHistory(): boolean;
  showHistory(): boolean;
  setRecordHistory(bRecord: boolean): OdResult;
  setShowHistory(bShow: boolean): OdResult;
  convertToBrepAtSubentPaths(arg0: OdDbFullSubentPathArray): OdResult;
  subSetAttributes(pTraits: OdGiDrawableTraits): number;
  projectOnToSolid(pEntityToProject: OdDbEntity, projectionDirection: OdGeVector3d, projectedEntities: OdDbEntityPtrArray): OdResult;
  createSculptedSolid(limitingBodies: OdDbEntityPtrArray, limitingFlags: OdGeIntArray): OdResult;
  subClose(): void;
  subGetGeomExtents(extents: OdGeExtents3d): OdResult;
  isSphere(byBrep: boolean, radius: number, matrix: OdGeMatrix3d): boolean;
  isTorus(byBrep: boolean, majorRadius: number, minorRadius: number, matrix: OdGeMatrix3d): boolean;
  isCylinder(byBrep: boolean, height: number, majorRadius: number, minorRadius: number, matrix: OdGeMatrix3d): boolean;
  isCone(byBrep: boolean, height: number, majorRadius: number, minorRadius: number, topMajorRadius: number, matrix: OdGeMatrix3d): boolean;
  isBox(byBrep: boolean, xLen: number, yLen: number, zLen: number, matrix: OdGeMatrix3d): boolean;
  isWedge(byBrep: boolean, xLen: number, yLen: number, zLen: number, matrix: OdGeMatrix3d): boolean;
  isPyramid(byBrep: boolean, height: number, sides: number, radius: number, topRadius: number, matrix: OdGeMatrix3d): boolean;
  copyFrom(pSource: OdRxObject): void;
};

class OdDb3dSolidPtrArray extends OdArray<OdDb3dSolid> { };

enum GeomType {
  eUndefinedType = 0,
  eSphere = 1,
  eTorus = 2,
  eCylinder = 3,
  eCone = 4,
  eBox = 5,
  eWedge = 6,
  ePyramid = 7,
  eExtrusion = 8,
  eSweep = 9,
  eLoft = 10,
  eRevolve = 11
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbAlignedDimension.html} Additional documentation.
 */
class OdDbAlignedDimension extends OdDbDimension {
  constructor();
  constructor(arg0: OdDbAlignedDimension);
  static cast(pObj: OdRxObject): OdDbAlignedDimension;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdDbAlignedDimension;
  static rxInit(): void;
  static rxUninit(): void;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  xLine1Point(): OdGePoint3d;
  setXLine1Point(xLine1Point: OdGePoint3d): void;
  xLine2Point(): OdGePoint3d;
  setXLine2Point(xLine2Point: OdGePoint3d): void;
  dimLinePoint(): OdGePoint3d;
  setDimLinePoint(dimLinePoint: OdGePoint3d): void;
  oblique(): number;
  setOblique(oblique: number): void;
  jogSymbolOn(): boolean;
  setJogSymbolOn(value: boolean): void;
  jogSymbolPosition(): OdGePoint3d;
  setJogSymbolPosition(pt: OdGePoint3d): void;
  jogSymbolHeight(): number;
  setJogSymbolHeight(value: number): void;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): void;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): void;
  dxfInFields_R12(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields_R12(pFiler: OdDbDxfFiler): void;
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbArc.html} Additional documentation.
 */
class OdDbArc extends OdDbCurve {
  constructor();
  constructor(arg0: OdDbArc);
  static cast(pObj: OdRxObject): OdDbArc;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdDbArc;
  static rxInit(): void;
  static rxUninit(): void;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  center(): OdGePoint3d;
  setCenter(center: OdGePoint3d): void;
  radius(): number;
  setRadius(radius: number): void;
  startAngle(): number;
  setStartAngle(startAngle: number): void;
  endAngle(): number;
  setEndAngle(endAngle: number): void;
  thickness(): number;
  setThickness(vThickness: number): void;
  normal(): OdGeVector3d;
  setNormal(geVector: OdGeVector3d): void;
  getEcs(): OdGeMatrix3d;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): void;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): void;
  dxfInFields_R12(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields_R12(pFiler: OdDbDxfFiler): void;
  subWorldDraw(pWd: OdGiWorldDraw): boolean;
  subTransformBy(xfm: OdGeMatrix3d): OdResult;
  subGetTransformedCopy(xfm: OdGeMatrix3d, pCopy: OdDbEntity): OdResult;
  isClosed(): boolean;
  isPeriodic(): boolean;
  isPlanar(): boolean;
  getPlane(gePlane: OdGePlane, gePlanarity: Planarity): OdResult;
  getStartParam(startParam: number): OdResult;
  getEndParam(endParam: number): OdResult;
  getStartPoint(startPoint: OdGePoint3d): OdResult;
  getEndPoint(endPoint: OdGePoint3d): OdResult;
  getPointAtParam(param: number, pointOnCurve: OdGePoint3d): OdResult;
  getParamAtPoint(pointOnCurve: OdGePoint3d, param: number): OdResult;
  getDistAtParam(param: number, dist: number): OdResult;
  getParamAtDist(dist: number, param: number): OdResult;
  getFirstDeriv(param: number, firstDeriv: OdGeVector3d): OdResult;
  getSecondDeriv(param: number, secondDeriv: OdGeVector3d): OdResult;
  getArea(vArea: number): OdResult;
  getOffsetCurves(offsetDist: number, offsetCurves: OdRxObjectPtrArray): OdResult;
  getOffsetCurvesGivenPlaneNormal(normal: OdGeVector3d, offsetDist: number, offsetCurves: OdRxObjectPtrArray): OdResult;
  getSplitCurves(points: OdGePoint3dArray, curveSegments: OdRxObjectPtrArray): OdResult;
  getSplitCurves1(params: OdGeDoubleArray, curveSegments: OdRxObjectPtrArray): OdResult;
  setFromOdGeCurve(geCurve: OdGeCurve3d, normal: OdGeVector3d, tol: OdGeTol): OdResult;
  reverseCurve(): OdResult;
  subSubentPtr(arg0: OdDbFullSubentPath): OdDbEntity;
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbArcDimension.html} Additional documentation.
 */
class OdDbArcDimension extends OdDbDimension {
  constructor();
  constructor(arg0: OdDbArcDimension);
  static cast(pObj: OdRxObject): OdDbArcDimension;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdDbArcDimension;
  static rxInit(): void;
  static rxUninit(): void;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  arcPoint(): OdGePoint3d;
  setArcPoint(arcPoint: OdGePoint3d): void;
  xLine1Point(): OdGePoint3d;
  setXLine1Point(xLine1Pt: OdGePoint3d): void;
  xLine2Point(): OdGePoint3d;
  setXLine2Point(xLine2Pt: OdGePoint3d): void;
  centerPoint(): OdGePoint3d;
  setCenterPoint(centerPoint: OdGePoint3d): void;
  isPartial(): boolean;
  setIsPartial(partial: boolean): void;
  arcStartParam(): number;
  setArcStartParam(arcStartParam: number): void;
  arcEndParam(): number;
  setArcEndParam(arcEndParam: number): void;
  hasLeader(): boolean;
  setHasLeader(hasLeader: boolean): void;
  leader1Point(): OdGePoint3d;
  setLeader1Point(leader1Point: OdGePoint3d): void;
  leader2Point(): OdGePoint3d;
  setLeader2Point(leader2Point: OdGePoint3d): void;
  arcSymbolType(): number;
  setArcSymbolType(arcSymbolType: number): void;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): void;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): void;
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbAttribute.html} Additional documentation.
 */
class OdDbAttribute extends OdDbText {
  constructor();
  constructor(arg0: OdDbAttribute);
  static cast(pObj: OdRxObject): OdDbAttribute;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdDbAttribute;
  static rxInit(): void;
  static rxUninit(): void;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  tag(): OdString;
  setTag(tagString: OdString): void;
  isInvisible(): boolean;
  setInvisible(invisible: boolean): void;
  isConstant(): boolean;
  isVerifiable(): boolean;
  isPreset(): boolean;
  fieldLength(): number;
  setFieldLength(fieldLength: number): void;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): void;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): void;
  dxfInFields_R12(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields_R12(pFiler: OdDbDxfFiler): void;
  subWorldDraw(pWd: OdGiWorldDraw): boolean;
  subViewportDraw(pVd: OdGiViewportDraw): void;
  setAttributeFromBlock(blkXform: OdGeMatrix3d): void;
  setAttributeFromBlock1(pAttDef: OdDbAttributeDefinition, blkXform: OdGeMatrix3d): void;
  lockPositionInBlock(): boolean;
  setLockPositionInBlock(lock: boolean): void;
  isMTextAttribute(): boolean;
  getMTextAttribute(): OdDbMText;
  setMTextAttribute(arg0: OdDbMText): void;
  convertIntoMTextAttribute(val: boolean): void;
  updateMTextAttribute(): void;
  subClose(): void;
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbAttributeDefinition.html} Additional documentation.
 */
class OdDbAttributeDefinition extends OdDbText {
  constructor();
  constructor(arg0: OdDbAttributeDefinition);
  static cast(pObj: OdRxObject): OdDbAttributeDefinition;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdDbAttributeDefinition;
  static rxInit(): void;
  static rxUninit(): void;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  prompt(): OdString;
  setPrompt(promptString: OdString): void;
  tag(): OdString;
  setTag(tagString: OdString): void;
  isInvisible(): boolean;
  setInvisible(invisible: boolean): void;
  isConstant(): boolean;
  setConstant(constant: boolean): void;
  isVerifiable(): boolean;
  setVerifiable(arg0: boolean): void;
  isPreset(): boolean;
  setPreset(arg0: boolean): void;
  fieldLength(): number;
  setFieldLength(fieldLength: number): void;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): void;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): void;
  dxfInFields_R12(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields_R12(pFiler: OdDbDxfFiler): void;
  subWorldDraw(pWd: OdGiWorldDraw): boolean;
  subViewportDraw(pVd: OdGiViewportDraw): void;
  subSetAttributes(pTraits: OdGiDrawableTraits): number;
  appendToOwner(Idpair: OdDbIdPair, pOwnerObject: OdDbObject, ownerIdMap: OdDbIdMapping): void;
  lockPositionInBlock(): boolean;
  setLockPositionInBlock(bValue: boolean): void;
  isMTextAttributeDefinition(): boolean;
  getMTextAttributeDefinition(): OdDbMText;
  setMTextAttributeDefinition(arg0: OdDbMText): void;
  convertIntoMTextAttributeDefinition(val: boolean): void;
  updateMTextAttributeDefinition(): void;
  subClose(): void;
};

enum ProdIdCode {
  kProd_ACAD = 1,
  kProd_LT = 2,
  kProd_OEM = 3,
  kProd_OdDb = 4
};

enum FindFileHint {
  kDefault = 0,
  kFontFile = 1,
  kCompiledShapeFile = 2,
  kTrueTypeFontFile = 3,
  kEmbeddedImageFile = 4,
  kXRefDrawing = 5,
  kPatternFile = 6,
  kTXApplication = 7,
  kFontMapFile = 8,
  kUnderlayFile = 9,
  kTextureMapFile = 10,
  kPhotometricWebFile = 11,
  kAssetLibXMLFile = 12,
  kTemplateFile = 13,
  kSchemaFile = 14
};

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdDbBaseHostAppServices.html} Additional documentation.
 */
class OdDbBaseHostAppServices extends OdRxObject {
  static cast(pObj: OdRxObject): OdDbBaseHostAppServices;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdDbBaseHostAppServices;
  static rxInit(): void;
  static rxUninit(): void;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  findFile(filename: OdString, pDb: OdDbBaseDatabase, hint: FindFileHint): OdString;
  newProgressMeter(): OdDbHostAppProgressMeter;
  releaseProgressMeter(pProgressMeter: OdDbHostAppProgressMeter): void;
  program(): OdString;
  product(): OdString;
  companyName(): OdString;
  prodcode(): ProdIdCode;
  releaseMajorMinorString(): OdString;
  releaseMajorVersion(): number;
  releaseMinorVersion(): number;
  versionString(): OdString;
  warning(message: OdString): void;
  warning2(warningOb: OdWarning): void;
  getErrorDescription(errorCode: number): OdString;
  newUndoController(): OdDbUndoController;
  newUndoStream(): OdStreamBuf;
  auditPrintReport(pAuditInfo: OdAuditInfo, strLine: OdString, printDest: number): void;
  ttfFileNameByDescriptor(description: OdTtfDescriptor, filename: OdString): boolean;
  getAlternateFontName(): OdString;
  getFontMapFileName(): OdString;
  getPreferableFont(fontName: OdString, fontType: OdFontType): OdString;
  getSubstituteFont(fontName: OdString, fontType: OdFontType): OdString;
  getSystemFontFolders(aDirs: OdStringArray): boolean;
  collectFilePathsInDirectory(res: OdStringArray, sPath: OdString, sFilter: OdString): void;
  fileDialog(flags: number, dialogCaption: OdString, defExt: OdString, defFilename: OdString, filter: OdString): OdString;
  gsBitmapDevice(pViewObj: OdRxObject, pDb: OdDbBaseDatabase, flags: number): OdGsDevice;
  getTempPath(): OdString;
  getMtMode(): number;
  numThreads(mtMode: MultiThreadedMode): number;
  brepBuilder(bbuilder: OdBrepBuilder, bbType: BrepType): OdResult;
  getEnv(varName: OdString, value: OdString): OdResult;
  setEnv(varName: OdString, newValue: OdString): OdResult;
  getAppUserName(unFormat: UserNameFormat): OdString;
};

enum OdSDIValues {
  kMDIEnabled = 0,
  kSDIUserEnforced = 1,
  kSDIAppEnforced = 2,
  kSDIUserAndAppEnforced = 3
};

enum RemapFileContext {
  kDrawingOpen = 0,
  kXrefResolution = 1,
  kRasterResolution = 2
};

enum GsBitmapDeviceFlags {
  kUseSoftwareHLR = 1,
  kFor2dExportRender = 2,
  kFor2dExportRenderHLR = 4,
  kForThumbnail = 8
};

enum SubentType {
  kNullSubentType = 0,
  kFaceSubentType = 1,
  kEdgeSubentType = 2,
  kVertexSubentType = 3,
  kMlineSubentCache = 4,
  kClassSubentType = 5,
  kAxisSubentType = 6
};

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdDbSubentId.html} Additional documentation.
 */
class OdDbSubentId {
  constructor();
  constructor(type: SubentType, index: number);
  constructor(arg0: OdDbSubentId);
  type(): SubentType;
  setType(type: SubentType): void;
  index(): number;
  setIndex(index: number): void;
  typeClass(): OdRxClass;
  setTypeClass(clazz: OdRxClass): void;
  static ctr1(clazz: OdRxClass, index: number): OdDbSubentId;
  static ctr2(arg0: OdDbSubentId): OdDbSubentId;
};

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdDbBaseFullSubentPath.html} Additional documentation.
 */
class OdDbBaseFullSubentPath {
  constructor();
  constructor(type: SubentType, index: number);
  constructor(entId: OdDbStub, type: SubentType, index: number);
  constructor(arg0: OdDbBaseFullSubentPath);
  objectIds(objectIdsArg: OdDbStubPtrArray): void;
  objectIds1(): OdDbStubPtrArray;
  objectIds2(): OdDbStubPtrArray;
  subentId(): OdDbSubentId;
  subentId1(): OdDbSubentId;
  static ctr1(entId: OdDbStub, subId: OdDbSubentId): OdDbBaseFullSubentPath;
  static ctr2(objectIds: OdDbStubPtrArray, subId: OdDbSubentId): OdDbBaseFullSubentPath;
};

class OdDbBaseFullSubentPathArray extends OdArray<OdDbBaseFullSubentPath> { };

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdBaseDatabaseByResolver.html} Additional documentation.
 */
class OdBaseDatabaseByResolver extends OdRxObject {
  resolve(pRxDb: OdRxObject): OdRxObject;
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbBlockBegin.html} Additional documentation.
 */
class OdDbBlockBegin extends OdDbEntity {
  constructor();
  constructor(arg0: OdDbBlockBegin);
  static cast(pObj: OdRxObject): OdDbBlockBegin;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdDbBlockBegin;
  static rxInit(): void;
  static rxUninit(): void;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): void;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): void;
  dxfInFields_R12(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields_R12(pFiler: OdDbDxfFiler): void;
  subGetGeomExtents(extents: OdGeExtents3d): OdResult;
  dxfIn(pFiler: OdDbDxfFiler): OdResult;
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbAttributeCollectionView.html} Additional documentation.
 */
class OdDbAttributeCollectionView {
  constructor(i: OdDbObjectIterator);
  begin(): Iterator;
  end(): Iterator;
  static ctr1(arg0: OdDbAttributeCollectionView): OdDbAttributeCollectionView;
  static ctr2(arg0: OdDbAttributeCollectionView): OdDbAttributeCollectionView;
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbBlockReference.html} Additional documentation.
 */
class OdDbBlockReference extends OdDbEntity {
  constructor();
  constructor(arg0: OdDbBlockReference);
  static cast(pObj: OdRxObject): OdDbBlockReference;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdDbBlockReference;
  static rxInit(): void;
  static rxUninit(): void;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  blockTableRecord(): OdDbObjectId;
  setBlockTableRecord(objectId: OdDbObjectId): void;
  position(): OdGePoint3d;
  setPosition(position: OdGePoint3d): void;
  scaleFactors(): OdGeScale3d;
  setScaleFactors(scale: OdGeScale3d): void;
  rotation(): number;
  setRotation(angle: number): void;
  normal(): OdGeVector3d;
  setNormal(normal: OdGeVector3d): void;
  isPlanar(): boolean;
  getPlane(plane: OdGePlane, planarity: Planarity): OdResult;
  blockTransform(): OdGeMatrix3d;
  setBlockTransform(xfm: OdGeMatrix3d): OdResult;
  appendAttribute(pAttr: OdDbAttribute): OdDbObjectId;
  openAttribute(ObjId: OdDbObjectId, mode: OpenMode, openErasedOne: boolean): OdDbAttribute;
  openSequenceEnd(mode: OpenMode): OdDbSequenceEnd;
  attributeIterator(): OdDbObjectIterator;
  attributes(): OdDbAttributeCollectionView;
  attributeIds(): OdDbIdCollectionView;
  explodeToBlock(BlockRecord: OdDbBlockTableRecord, ids: OdDbObjectIdArray): OdResult;
  subSetAttributes(pTraits: OdGiDrawableTraits): number;
  subWorldDraw(pWd: OdGiWorldDraw): boolean;
  subViewportDraw(pVd: OdGiViewportDraw): void;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): void;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): void;
  dxfInFields_R12(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields_R12(pFiler: OdDbDxfFiler): void;
  dxfIn(pFiler: OdDbDxfFiler): OdResult;
  dxfOut(pFiler: OdDbDxfFiler): void;
  subClose(): void;
  subTransformBy(xfm: OdGeMatrix3d): OdResult;
  subGetTransformedCopy(xfm: OdGeMatrix3d, pCopy: OdDbEntity): OdResult;
  subExplode(entitySet: OdRxObjectPtrArray): OdResult;
  subHandOverTo(pNewObject: OdDbObject): void;
  subGetGeomExtents(extents: OdGeExtents3d): OdResult;
  explodeGeometry(entitySet: OdRxObjectPtrArray): OdResult;
  treatAsOdDbBlockRefForExplode(): boolean;
  geomExtentsBestFit(extents: OdGeExtents3d, parentXform: OdGeMatrix3d): OdResult;
  explodeToOwnerSpace(): OdResult;
  copyFrom(pSrc: OdRxObject): void;
  subGetCompoundObjectTransform(xM: OdGeMatrix3d): OdResult;
  subGetSubentPathsAtGsMarker(type: SubentType, gsMark: number, pickPoint: OdGePoint3d, viewXform: OdGeMatrix3d, subentPaths: OdDbFullSubentPathArray, pEntAndInsertStack: OdDbObjectIdArray): OdResult;
  subGetGsMarkersAtSubentPath(subPath: OdDbFullSubentPath, gsMarkers: OdGsMarkerArray): OdResult;
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbBlockTableIterator.html} Additional documentation.
 */
class OdDbBlockTableIterator extends OdDbSymbolTableIterator {
  static cast(pObj: OdRxObject): OdDbBlockTableIterator;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdDbBlockTableIterator;
  static rxInit(): void;
  static rxUninit(): void;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbBlockTable.html} Additional documentation.
 */
class OdDbBlockTable extends OdDbSymbolTable {
  constructor();
  constructor(arg0: OdDbBlockTable);
  static cast(pObj: OdRxObject): OdDbBlockTable;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdDbBlockTable;
  static rxInit(): void;
  static rxUninit(): void;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  getAt(recordName: OdString, openMode: OpenMode, getErasedRecord: boolean): OdDbSymbolTableRecord;
  getAt1(recordName: OdString, getErasedRecord: boolean): OdDbObjectId;
  has(recordName: OdString): boolean;
  has1(objectId: OdDbObjectId): boolean;
  newIterator(atBeginning: boolean, skipDeleted: boolean): OdDbSymbolTableIterator;
  add(pRecord: OdDbSymbolTableRecord): OdDbObjectId;
  getModelSpaceId(): OdDbObjectId;
  getPaperSpaceId(): OdDbObjectId;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): void;
  dxfIn(pFiler: OdDbDxfFiler): OdResult;
  applyPartialUndo(pFiler: OdDbDwgFiler, pClass: OdRxClass): void;
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbIdCollectionView.html} Additional documentation.
 */
class OdDbIdCollectionView {
  constructor(i: OdDbObjectIterator);
  begin(): Iterator;
  end(): Iterator;
  static ctr1(arg0: OdDbIdCollectionView): OdDbIdCollectionView;
  static ctr2(arg0: OdDbIdCollectionView): OdDbIdCollectionView;
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbEntityCollectionView.html} Additional documentation.
 */
class OdDbEntityCollectionView {
  constructor(i: OdDbObjectIterator);
  begin(): Iterator;
  end(): Iterator;
  static ctr1(arg0: OdDbEntityCollectionView): OdDbEntityCollectionView;
  static ctr2(arg0: OdDbEntityCollectionView): OdDbEntityCollectionView;
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbBlockTableRecord.html} Additional documentation.
 */
class OdDbBlockTableRecord extends OdDbSymbolTableRecord {
  constructor();
  constructor(arg0: OdDbBlockTableRecord);
  static cast(pObj: OdRxObject): OdDbBlockTableRecord;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdDbBlockTableRecord;
  static rxInit(): void;
  static rxUninit(): void;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  appendOdDbEntity(pEntity: OdDbEntity): OdDbObjectId;
  newIterator(atBeginning: boolean, skipDeleted: boolean, sorted: boolean): OdDbObjectIterator;
  ids(atBeginning: boolean, skipDeleted: boolean, sorted: boolean): OdDbIdCollectionView;
  entities(atBeginning: boolean, skipDeleted: boolean, sorted: boolean): OdDbEntityCollectionView;
  comments(): OdString;
  setComments(comments: OdString): void;
  pathName(): OdString;
  setPathName(pathName: OdString): void;
  origin(): OdGePoint3d;
  setOrigin(origin: OdGePoint3d): void;
  openBlockBegin(openMode: OpenMode): OdDbBlockBegin;
  openBlockEnd(openMode: OpenMode): OdDbBlockEnd;
  hasAttributeDefinitions(): boolean;
  isAnonymous(): boolean;
  isFromExternalReference(): boolean;
  isFromOverlayReference(): boolean;
  setIsFromOverlayReference(bIsOverlay: boolean): void;
  isLayout(): boolean;
  getLayoutId(): OdDbObjectId;
  setLayoutId(layoutId: OdDbObjectId): void;
  getBlockReferenceIds(referenceIds: OdDbObjectIdArray, directOnly: boolean, forceValidity: boolean): void;
  getErasedBlockReferenceIds(referenceIds: OdDbObjectIdArray): void;
  isUnloaded(): boolean;
  setIsUnloaded(isUnloaded: boolean): void;
  subWorldDraw(pWd: OdGiWorldDraw): boolean;
  subSetAttributes(pTraits: OdGiDrawableTraits): number;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): void;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): void;
  subClose(): void;
  subErase(erasing: boolean): OdResult;
  subHandOverTo(pNewObject: OdDbObject): void;
  copyFrom(p: OdRxObject): void;
  xrefDatabase(includeUnresolved: boolean): OdDbDatabase;
  xrefStatus(): XrefStatus;
  hasPreviewIcon(): boolean;
  getPreviewIcon(previewIcon: PreviewIcon): void;
  setPreviewIcon(previewIcon: PreviewIcon): void;
  subWblockClone(ownerIdMap: OdDbIdMapping, arg1: OdDbObject, bPrimary: boolean): OdDbObject;
  getSortentsTable(createIfNotFound: boolean): OdDbSortentsTable;
  drawable(): OdGiDrawable;
  getGeomExtents(extents: OdGeExtents3d): OdResult;
  geomExtentsBestFit(extents: OdGeExtents3d, parentXform: OdGeMatrix3d): OdResult;
  assumeOwnershipOf(entitiesToMove: OdDbObjectIdArray): OdResult;
  blockScaling(): BlockScaling;
  setBlockScaling(blockScaling: BlockScaling): void;
  setExplodable(explodable: boolean): void;
  explodable(): boolean;
  setBlockInsertUnits(blockInsertUnits: UnitsValue): void;
  blockInsertUnits(): UnitsValue;
  applyPartialUndo(pFiler: OdDbDwgFiler, pClass: OdRxClass): void;
  postProcessAnnotativeBTR(strippedCount: number, noModify: boolean, scale: boolean): void;
  addAnnoScalestoBlkRefs(scale: boolean): void;
  subSwapIdWith(otherId: OdDbObjectId, swapXdata: boolean, swapExtDict: boolean): void;
};

enum BlockScaling {
  kAny = 0,
  kUniform = 1
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbBody.html} Additional documentation.
 */
class OdDbBody extends OdDbEntity {
  constructor();
  constructor(arg0: OdDbBody);
  static cast(pObj: OdRxObject): OdDbBody;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdDbBody;
  static rxInit(): void;
  static rxUninit(): void;
  static acisOut1(filename: OdString, solids: OdDbEntityPtrArray, typeVer: number): OdResult;
  static acisIn1(filename: OdString, solids: OdDbEntityPtrArray, convAcisColors: ColorConversionType): OdResult;
  static acisIn2(pStreamBuf: OdStreamBuf, solids: OdDbEntityPtrArray, convAcisColors: ColorConversionType): OdResult;
  static setSubentPath(ent: OdBrEntity, subpath: OdDbFullSubentPath): OdResult;
  static generateMesh(pEnt: OdDbEntity, filter: OdBrMesh2dFilter, mesh2d: OdBrMesh2d): OdResult;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  isNull(): boolean;
  acisOut(pStreamBuf: OdStreamBuf, typeVer: number): OdResult;
  acisIn(pStreamBuf: OdStreamBuf, pTypeVer: number): OdResult;
  brep(brep: OdBrBrep): void;
  getFaceMesh(mesh: OdGeTrMesh, iFace: number, triangulationParams: wrTriangulationParams): boolean;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): void;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): void;
  subWorldDraw(pWd: OdGiWorldDraw): boolean;
  subViewportDraw(pVd: OdGiViewportDraw): void;
  decomposeForSave(ver: DwgVersion, replaceId: OdDbObjectId, exchangeXData: boolean): OdDbObject;
  subExplode(entitySet: OdRxObjectPtrArray): OdResult;
  subTransformBy(xfn: OdGeMatrix3d): OdResult;
  saveAs(pWd: OdGiWorldDraw, ver: DwgVersion): void;
  subSubentPtr(id: OdDbFullSubentPath): OdDbEntity;
  subGetGsMarkersAtSubentPath(subPath: OdDbFullSubentPath, gsMarkers: OdGsMarkerArray): OdResult;
  subGetSubentPathsAtGsMarker(type: SubentType, gsMark: number, pickPoint: OdGePoint3d, viewXform: OdGeMatrix3d, subentPaths: OdDbFullSubentPathArray, pEntAndInsertStack: OdDbObjectIdArray): OdResult;
  numChanges(): number;
  subSetAttributes(pTraits: OdGiDrawableTraits): number;
  subGetGeomExtents(extents: OdGeExtents3d): OdResult;
  subClose(): void;
  copyFrom(pSource: OdRxObject): void;
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbCircle.html} Additional documentation.
 */
class OdDbCircle extends OdDbCurve {
  constructor();
  constructor(arg0: OdDbCircle);
  static cast(pObj: OdRxObject): OdDbCircle;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdDbCircle;
  static rxInit(): void;
  static rxUninit(): void;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  center(): OdGePoint3d;
  setCenter(center: OdGePoint3d): void;
  radius(): number;
  setRadius(radius: number): void;
  thickness(): number;
  setThickness(vThickness: number): void;
  normal(): OdGeVector3d;
  setNormal(geVector: OdGeVector3d): void;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): void;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): void;
  dxfInFields_R12(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields_R12(pFiler: OdDbDxfFiler): void;
  subWorldDraw(pWd: OdGiWorldDraw): boolean;
  subTransformBy(xfm: OdGeMatrix3d): OdResult;
  subGetTransformedCopy(xfm: OdGeMatrix3d, pCopy: OdDbEntity): OdResult;
  isClosed(): boolean;
  isPeriodic(): boolean;
  isPlanar(): boolean;
  getPlane(gePlane: OdGePlane, gePlanarity: Planarity): OdResult;
  getStartParam(startParam: number): OdResult;
  getEndParam(endParam: number): OdResult;
  getStartPoint(startPoint: OdGePoint3d): OdResult;
  getEndPoint(endPoint: OdGePoint3d): OdResult;
  getPointAtParam(param: number, pointOnCurve: OdGePoint3d): OdResult;
  getParamAtPoint(pointOnCurve: OdGePoint3d, param: number): OdResult;
  getDistAtParam(param: number, dist: number): OdResult;
  getParamAtDist(dist: number, param: number): OdResult;
  getFirstDeriv(param: number, firstDeriv: OdGeVector3d): OdResult;
  getSecondDeriv(param: number, secondDeriv: OdGeVector3d): OdResult;
  getArea(vArea: number): OdResult;
  getEcs(): OdGeMatrix3d;
  getOffsetCurves(offsetDist: number, offsetCurves: OdRxObjectPtrArray): OdResult;
  getOffsetCurvesGivenPlaneNormal(normal: OdGeVector3d, offsetDist: number, offsetCurves: OdRxObjectPtrArray): OdResult;
  getSplitCurves(points: OdGePoint3dArray, curveSegments: OdRxObjectPtrArray): OdResult;
  getSplitCurves1(params: OdGeDoubleArray, curveSegments: OdRxObjectPtrArray): OdResult;
  setFromOdGeCurve(geCurve: OdGeCurve3d, normal: OdGeVector3d, tol: OdGeTol): OdResult;
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbCurve.html} Additional documentation.
 */
class OdDbCurve extends OdDbEntity {
  static cast(pObj: OdRxObject): OdDbCurve;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdDbCurve;
  static rxInit(): void;
  static rxUninit(): void;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  isClosed(): boolean;
  isPeriodic(): boolean;
  getStartParam(startParam: number): OdResult;
  getEndParam(endParam: number): OdResult;
  getStartPoint(startPoint: OdGePoint3d): OdResult;
  getEndPoint(endPoint: OdGePoint3d): OdResult;
  getPointAtParam(param: number, pointOnCurve: OdGePoint3d): OdResult;
  getParamAtPoint(pointOnCurve: OdGePoint3d, param: number): OdResult;
  getDistAtParam(param: number, dist: number): OdResult;
  getParamAtDist(dist: number, param: number): OdResult;
  getDistAtPoint(pointOnCurve: OdGePoint3d, dist: number): OdResult;
  getPointAtDist(dist: number, pointOnCurve: OdGePoint3d): OdResult;
  getFirstDeriv(param: number, firstDeriv: OdGeVector3d): OdResult;
  getFirstDeriv1(pointOnCurve: OdGePoint3d, firstDeriv: OdGeVector3d): OdResult;
  getSecondDeriv(param: number, secondDeriv: OdGeVector3d): OdResult;
  getSecondDeriv1(pointOnCurve: OdGePoint3d, secondDeriv: OdGeVector3d): OdResult;
  getClosestPointTo(givenPoint: OdGePoint3d, pointOnCurve: OdGePoint3d, extend: boolean): OdResult;
  getClosestPointTo1(givenPoint: OdGePoint3d, normal: OdGeVector3d, pointOnCurve: OdGePoint3d, extend: boolean): OdResult;
  getSpline(spline: OdDbSpline): OdResult;
  extend(param: number): OdResult;
  extend1(extendStart: boolean, toPoint: OdGePoint3d): OdResult;
  getArea(area: number): OdResult;
  getOrthoProjectedCurve(projPlane: OdGePlane, pProjCurve: OdDbCurve): OdResult;
  getProjectedCurve(projPlane: OdGePlane, projDirection: OdGeVector3d, pProjCurve: OdDbCurve): OdResult;
  getOffsetCurves(offsetDistance: number, offsetCurves: OdRxObjectPtrArray): OdResult;
  getOffsetCurvesGivenPlaneNormal(normal: OdGeVector3d, offsetDistance: number, offsetCurves: OdRxObjectPtrArray): OdResult;
  getSplitCurves(params: OdGeDoubleArray, curveSegments: OdRxObjectPtrArray): OdResult;
  getSplitCurves1(points: OdGePoint3dArray, curveSegments: OdRxObjectPtrArray): OdResult;
  reverseCurve(): OdResult;
  setFromOdGeCurve(geCurve: OdGeCurve3d, normal: OdGeVector3d, tol: OdGeTol): OdResult;
  findVertexIndex(arg0: OdDbVertex): number;
};

enum EndCaps {
  kEndCapNone = 0,
  kEndCapRound = 1,
  kEndCapAngle = 2,
  kEndCapSquare = 3
};

enum JoinStyle {
  kJnStylNone = 0,
  kJnStylRound = 1,
  kJnStylAngle = 2,
  kJnStylFlat = 3
};

enum TimeZone {
  kInternationalDateLine = -12000,
  kMidwayIsland = -11000,
  kHawaii = -10000,
  kAlaska = -9000,
  kPacific = -8000,
  kMountain = -7000,
  kArizona = -7001,
  kMazatlan = -7002,
  kCentral = -6000,
  kCentralAmerica = -6001,
  kMexicoCity = -6002,
  kSaskatchewan = -6003,
  kEastern = -5000,
  kIndiana = -5001,
  kBogota = -5002,
  kAtlanticCanada = -4000,
  kCaracas = -4001,
  kSantiago = -4002,
  kNewfoundland = -3300,
  kBrasilia = -3000,
  kBuenosAires = -3001,
  kGreenland = -3002,
  kMidAtlantic = -2000,
  kAzores = -1000,
  kCapeVerde = -1001,
  kUTC = 0,
  kGMT = 1,
  kMonrovia = 2,
  kBerlin = 1000,
  kParis = 1001,
  kPrague = 1002,
  kSarajevo = 1003,
  kWestCentralAfrica = 1004,
  kAthens = 2000,
  kEasternEurope = 2001,
  kCairo = 2002,
  kHarare = 2003,
  kHelsinki = 2004,
  kJerusalem = 2005,
  kMoscow = 3000,
  kRiyadh = 3001,
  kBaghdad = 3002,
  kEastAfrica = 3003,
  kTehran = 3300,
  kAbuDhabi = 4000,
  kCaucasus = 4001,
  kKabul = 4300,
  kEkaterinburg = 5000,
  kIslamabad = 5001,
  kKolkata = 5300,
  kKathmandu = 5450,
  kAlmaty = 6000,
  kDhaka = 6001,
  kSriLanka = 6002,
  kRangoon = 6300,
  kBangkok = 7000,
  kKrasnoyarsk = 7001,
  kBeijing = 8000,
  kSingapore = 8001,
  kTaipei = 8002,
  kIrkutsk = 8003,
  kPerth = 8004,
  kTokyo = 9000,
  kSeoul = 9001,
  kYakutsk = 9002,
  kAdelaide = 9300,
  kDarwin = 9301,
  kSydney = 10000,
  kGuam = 10001,
  kBrisbane = 10002,
  kHobart = 10003,
  kVladivostock = 10004,
  kMagadan = 11000,
  kWellington = 12000,
  kFiji = 12001,
  kTonga = 13000
};

enum CollisionType {
  kCollisionTypeNone = 0,
  kCollisionTypeSolid = 1
};

enum DuplicateLinetypeLoading {
  kDltNotApplicable = 0,
  kDltIgnore = 1,
  kDltReplace = 2
};

enum LoftNormalsType {
  kLoftRuled = 0,
  kLoftSmooth = 1,
  kLoftFirstNormal = 2,
  kLoftLastNormal = 3,
  kLoftEndsNormal = 4,
  kLoftAllNormal = 5,
  kLoftUseDraftAngles = 6
};

enum ProxyImage {
  kProxyNotShow = 0,
  kProxyShow = 1,
  kProxyBoundingBox = 2
};

enum LayerAdskType {
  kLayerSystemLights = 0,
  kLayerConstraints = 1
};

enum TextFileEncoding {
  kTextFileEncodingDefault = 0,
  kTextFileEncodingANSI = 1,
  kTextFileEncodingUTF8 = 11,
  kTextFileEncodingUTF16 = 21,
  kTextFileEncodingUTF16LE = 22,
  kTextFileEncodingUTF16BE = 23,
  kTextFileEncodingUTF32 = 31,
  kTextFileEncodingUTF32LE = 32,
  kTextFileEncodingUTF32BE = 33
};

enum LoftParamType {
  kLoftNoParam = 0,
  kLoftNoTwist = 1,
  kLoftAlignDirection = 2,
  kLoftSimplify = 4,
  kLoftClose = 8,
  kLoftPeriodic = 16,
  kLoftDefault = 7
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbDatabase.html} Additional documentation.
 */
class OdDbDatabase extends OdDbObject {
  constructor(arg0: OdDbDatabase);
  static cast(pObj: OdRxObject): OdDbDatabase;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdDbDatabase;
  static rxInit(): void;
  static rxUninit(): void;
  static isValidLineWeight(weight: number): boolean;
  static getNearestLineWeight(weight: number): LineWeight;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  addRef(): void;
  release(): void;
  appServices(): OdDbHostAppServices;
  initialize(measurement: MeasurementValue): void;
  addOdDbObject(pObject: OdDbObject, ownerId: OdDbObjectId, handle: OdDbHandle): OdDbObjectId;
  newRegApp(regAppName: OdString): boolean;
  getBlockTableId(): OdDbObjectId;
  getLayerTableId(): OdDbObjectId;
  getTextStyleTableId(): OdDbObjectId;
  getLinetypeTableId(): OdDbObjectId;
  getViewTableId(): OdDbObjectId;
  getUCSTableId(): OdDbObjectId;
  getViewportTableId(): OdDbObjectId;
  getRegAppTableId(): OdDbObjectId;
  getDimStyleTableId(): OdDbObjectId;
  getMLStyleDictionaryId(createIfNotFound: boolean): OdDbObjectId;
  getGroupDictionaryId(createIfNotFound: boolean): OdDbObjectId;
  getLayoutDictionaryId(createIfNotFound: boolean): OdDbObjectId;
  getPlotStyleNameDictionaryId(createIfNotFound: boolean): OdDbObjectId;
  getNamedObjectsDictionaryId(): OdDbObjectId;
  getPlotSettingsDictionaryId(createIfNotFound: boolean): OdDbObjectId;
  getColorDictionaryId(createIfNotFound: boolean): OdDbObjectId;
  getMaterialDictionaryId(createIfNotFound: boolean): OdDbObjectId;
  getVisualStyleDictionaryId(createIfNotFound: boolean): OdDbObjectId;
  getTableStyleDictionaryId(createIfNotFound: boolean): OdDbObjectId;
  getScaleListDictionaryId(createIfNotFound: boolean): OdDbObjectId;
  tablestyle(): OdDbObjectId;
  setTablestyle(objectId: OdDbObjectId): void;
  getMLeaderStyleDictionaryId(createIfNotFound: boolean): OdDbObjectId;
  mleaderstyle(): OdDbObjectId;
  setMLeaderstyle(objectId: OdDbObjectId): void;
  getDetailViewStyleDictionaryId(createIfNotFound: boolean): OdDbObjectId;
  detailViewStyle(): OdDbObjectId;
  setDetailViewStyle(objectId: OdDbObjectId): void;
  getSectionViewStyleDictionaryId(createIfNotFound: boolean): OdDbObjectId;
  sectionViewStyle(): OdDbObjectId;
  setSectionViewStyle(objectId: OdDbObjectId): void;
  getRegAppAcadId(): OdDbObjectId;
  getLinetypeContinuousId(): OdDbObjectId;
  getLinetypeByLayerId(): OdDbObjectId;
  getLinetypeByBlockId(): OdDbObjectId;
  getModelSpaceId(): OdDbObjectId;
  getPaperSpaceId(): OdDbObjectId;
  getTextStyleStandardId(): OdDbObjectId;
  getDimStyleStandardId(): OdDbObjectId;
  getLayerZeroId(): OdDbObjectId;
  getLayerDefpointsId(createIfNotFound: boolean): OdDbObjectId;
  getLayerAdskId(layerType: LayerAdskType, createIfNotFound: boolean): OdDbObjectId;
  getSectionManager(): OdDbObjectId;
  getPointCloudDictionaryId(): OdDbObjectId;
  classDxfName(pClass: OdRxClass): OdString;
  getOdDbObjectId(objHandle: OdDbHandle, createIfNotFound: boolean, xRefId: number): OdDbObjectId;
  writeFile(pStreamBuf: OdStreamBuf, fileType: SaveType, fileVersion: DwgVersion, saveThumbnailImage: boolean, dxfPrecision: number): void;
  writeFile1(filename: OdString, fileType: SaveType, fileVersion: DwgVersion, saveThumbnailImage: boolean, dxfPrecision: number): void;
  save(pStreamBuf: OdStreamBuf, saveThumbnailImage: boolean): void;
  save1(filename: OdString, saveThumbnailImage: boolean): void;
  readFile(pStreamBuf: OdStreamBuf, partialLoad: boolean, pAuditInfo: OdDbAuditInfo, password: OdPassword, allowCPConversion: boolean): void;
  readFile1(filename: OdString, partialLoad: boolean, shareMode: FileShareMode, password: OdPassword, allowCPConversion: boolean): void;
  closeInput(): void;
  approxNumObjects(): number;
  version(pMaintReleaseVer: MaintReleaseVer): DwgVersion;
  numberOfSaves(): number;
  lastSavedAsVersion(pMaintReleaseVer: MaintReleaseVer): DwgVersion;
  originalFileType(): SaveType;
  originalFileVersion(pMaintReleaseVer: MaintReleaseVer): DwgVersion;
  originalFileSavedByVersion(pMaintReleaseVer: MaintReleaseVer): DwgVersion;
  addReactor(pReactor: OdDbDatabaseReactor): void;
  removeReactor(pReactor: OdDbDatabaseReactor): void;
  dimfit(): number;
  dimunit(): number;
  setDimfit(val: number): void;
  setDimunit(val: number): void;
  deepCloneObjects(objectIds: OdDbObjectIdArray, ownerId: OdDbObjectId, idMap: OdDbIdMapping, deferXlation: boolean): void;
  wblockCloneObjects(objectIds: OdDbObjectIdArray, ownerId: OdDbObjectId, idMap: OdDbIdMapping, duplicateRecordCloning: DuplicateRecordCloning, deferXlation: boolean): void;
  abortDeepClone(idMap: OdDbIdMapping): void;
  audit(pAuditInfo: OdDbAuditInfo): void;
  startTransaction(): void;
  flushAllTransactedChanges(): boolean;
  endTransaction(): void;
  abortTransaction(): void;
  numActiveTransactions(): number;
  addTransactionReactor(reactor: OdDbTransactionReactor): void;
  removeTransactionReactor(reactor: OdDbTransactionReactor): void;
  retainOriginalThumbnailBitmap(): boolean;
  setRetainOriginalThumbnailBitmap(retain: boolean): void;
  dwgOutFields(pFiler: OdDbDwgFiler): void;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  getANGBASE(): number;
  getANGDIR(): boolean;
  getINSBASE(): OdGePoint3d;
  getEXTMIN(): OdGePoint3d;
  getEXTMAX(): OdGePoint3d;
  getLIMMIN(): OdGePoint2d;
  getLIMMAX(): OdGePoint2d;
  getORTHOMODE(): boolean;
  getREGENMODE(): boolean;
  getFILLMODE(): boolean;
  getQTEXTMODE(): boolean;
  getMIRRTEXT(): boolean;
  getLTSCALE(): number;
  getATTMODE(): number;
  getTEXTSIZE(): number;
  getTRACEWID(): number;
  getTEXTSTYLE(): OdDbObjectId;
  getCLAYER(): OdDbObjectId;
  getCELTYPE(): OdDbObjectId;
  getCECOLOR(): OdCmColor;
  getCELTSCALE(): number;
  getCHAMFERA(): number;
  getCHAMFERB(): number;
  getCHAMFERC(): number;
  getCHAMFERD(): number;
  getDISPSILH(): boolean;
  getDIMSTYLE(): OdDbObjectId;
  getDIMASO(): boolean;
  getDIMSHO(): boolean;
  getLUNITS(): number;
  getLUPREC(): number;
  getSKETCHINC(): number;
  getFILLETRAD(): number;
  getAUNITS(): number;
  getAUPREC(): number;
  getMENUNAME(): OdString;
  getELEVATION(): number;
  getPELEVATION(): number;
  getTHICKNESS(): number;
  getLIMCHECK(): boolean;
  getSKPOLY(): boolean;
  getTDUCREATE(): OdDbDate;
  getTDUUPDATE(): OdDbDate;
  getTDINDWG(): OdDbDate;
  getTDUSRTIMER(): OdDbDate;
  getUSRTIMER(): boolean;
  getPDMODE(): number;
  getPDSIZE(): number;
  getPLINEWID(): number;
  getSPLFRAME(): boolean;
  getSPLINETYPE(): number;
  getSPLINESEGS(): number;
  getSURFTAB1(): number;
  getSURFTAB2(): number;
  getSURFTYPE(): number;
  getSURFU(): number;
  getSURFV(): number;
  getUSERI1(): number;
  getUSERI2(): number;
  getUSERI3(): number;
  getUSERI4(): number;
  getUSERI5(): number;
  getUSERR1(): number;
  getUSERR2(): number;
  getUSERR3(): number;
  getUSERR4(): number;
  getPDFUNDERLAYSHADEDMODE(): boolean;
  getUSERR5(): number;
  getWORLDVIEW(): boolean;
  getSHADEDGE(): number;
  getSHADEDIF(): number;
  getTILEMODE(): boolean;
  getMAXACTVP(): number;
  getPINSBASE(): OdGePoint3d;
  getPLIMCHECK(): boolean;
  getPEXTMIN(): OdGePoint3d;
  getPEXTMAX(): OdGePoint3d;
  getPLIMMIN(): OdGePoint2d;
  getPLIMMAX(): OdGePoint2d;
  getUCSNAME(): OdDbObjectId;
  getPUCSNAME(): OdDbObjectId;
  getUNITMODE(): number;
  getVISRETAIN(): boolean;
  getPLINEGEN(): boolean;
  getPSLTSCALE(): boolean;
  getTREEDEPTH(): number;
  getCMLSTYLE(): OdDbObjectId;
  getCMLJUST(): number;
  getCMLSCALE(): number;
  getPROXYGRAPHICS(): number;
  getMEASUREMENT(): MeasurementValue;
  getCELWEIGHT(): LineWeight;
  getENDCAPS(): EndCaps;
  getJOINSTYLE(): JoinStyle;
  getLWDISPLAY(): boolean;
  getINSUNITS(): UnitsValue;
  getTSTACKALIGN(): number;
  getTSTACKSIZE(): number;
  getHYPERLINKBASE(): OdString;
  getSTYLESHEET(): OdString;
  getXEDIT(): boolean;
  getCEPSNTYPE(): PlotStyleNameType;
  getCEPSNID(): OdDbObjectId;
  getPSTYLEMODE(): boolean;
  getFINGERPRINTGUID(): OdString;
  getVERSIONGUID(): OdString;
  getEXTNAMES(): boolean;
  getPSVPSCALE(): number;
  getOLESTARTUP(): boolean;
  getPELLIPSE(): boolean;
  getISOLINES(): number;
  getTEXTQLTY(): number;
  getFACETRES(): number;
  getUCSORG(): OdGePoint3d;
  getUCSXDIR(): OdGeVector3d;
  getUCSYDIR(): OdGeVector3d;
  getPUCSBASE(): OdDbObjectId;
  getPUCSORG(): OdGePoint3d;
  getPUCSXDIR(): OdGeVector3d;
  getPUCSYDIR(): OdGeVector3d;
  getPUCSORTHOVIEW(): number;
  getPUCSORGTOP(): OdGePoint3d;
  getPUCSORGBOTTOM(): OdGePoint3d;
  getPUCSORGLEFT(): OdGePoint3d;
  getPUCSORGRIGHT(): OdGePoint3d;
  getPUCSORGFRONT(): OdGePoint3d;
  getPUCSORGBACK(): OdGePoint3d;
  getUCSBASE(): OdDbObjectId;
  getUCSORTHOVIEW(): number;
  getUCSORGTOP(): OdGePoint3d;
  getUCSORGBOTTOM(): OdGePoint3d;
  getUCSORGLEFT(): OdGePoint3d;
  getUCSORGRIGHT(): OdGePoint3d;
  getUCSORGFRONT(): OdGePoint3d;
  getUCSORGBACK(): OdGePoint3d;
  getDWGCODEPAGE(): OdCodePageId;
  getCTABLESTYLE(): OdDbObjectId;
  getCMLEADERSTYLE(): OdDbObjectId;
  getCANNOSCALE(): OdDbAnnotationScale;
  getANNOALLVISIBLE(): boolean;
  getANNOTATIVEDWG(): number;
  getMSLTSCALE(): boolean;
  getLAYEREVAL(): number;
  getLAYERNOTIFY(): number;
  getLIGHTINGUNITS(): number;
  getLIGHTSINBLOCKS(): number;
  getDBCSTATE(): number;
  getINTERSECTIONCOLOR(): number;
  getINTERSECTIONDISPLAY(): boolean;
  getHALOGAP(): number;
  getOBSCUREDCOLOR(): number;
  getOBSCUREDLTYPE(): number;
  getINDEXCTL(): number;
  getPROJECTNAME(): OdString;
  getSORTENTS(): number;
  getDIMASSOC(): number;
  getHIDETEXT(): boolean;
  getDRAWORDERCTL(): number;
  getHPINHERIT(): boolean;
  getHPORIGIN(): OdGePoint2d;
  getFIELDEVAL(): number;
  getMSOLESCALE(): number;
  getUPDATETHUMBNAIL(): number;
  getSOLIDHIST(): number;
  getSHOWHIST(): number;
  getPSOLWIDTH(): number;
  getLOFTPARAM(): LoftParamType;
  getLOFTNORMALS(): LoftNormalsType;
  getLOFTANG1(): number;
  getLOFTANG2(): number;
  getLOFTMAG1(): number;
  getLOFTMAG2(): number;
  getLATITUDE(): number;
  getLONGITUDE(): number;
  getNORTHDIRECTION(): number;
  getTIMEZONE(): TimeZone;
  getLIGHTGLYPHDISPLAY(): number;
  getTILEMODELIGHTSYNCH(): number;
  getINTERFERECOLOR(): OdCmColor;
  getINTERFEREOBJVS(): OdDbObjectId;
  getINTERFEREVPVS(): OdDbObjectId;
  getDRAGVS(): OdDbObjectId;
  getCSHADOW(): ShadowFlags;
  getSHADOWPLANELOCATION(): number;
  getCAMERADISPLAY(): boolean;
  getLENSLENGTH(): number;
  getCAMERAHEIGHT(): number;
  getSTEPSPERSEC(): number;
  getSTEPSIZE(): number;
  get3DDWFPREC(): number;
  getPSOLHEIGHT(): number;
  getCMATERIAL(): OdDbObjectId;
  getDWFFRAME(): number;
  getDGNFRAME(): number;
  getREALWORLDSCALE(): boolean;
  getDXEVAL(): number;
  getGEOLATLONGFORMAT(): number;
  getGEOMARKERVISIBILITY(): number;
  getPREVIEWTYPE(): number;
  getEXPORTMODELSPACE(): number;
  getEXPORTPAPERSPACE(): number;
  getEXPORTPAGESETUP(): number;
  getFRAME(): number;
  getPDFFRAME(): number;
  getXCLIPFRAME(): number;
  getMESHTYPE(): number;
  getSKYSTATUS(): number;
  getHPLAYER(): OdString;
  getMIRRHATCH(): number;
  getHPTRANSPARENCY(): OdCmTransparency;
  getHPCOLOR(): OdCmColor;
  getHPBACKGROUNDCOLOR(): OdCmColor;
  getREQUIREDVERSIONS(): number;
  getCETRANSPARENCY(): OdCmTransparency;
  getCVIEWDETAILSTYLE(): OdDbObjectId;
  getCVIEWSECTIONSTYLE(): OdDbObjectId;
  getWIPEOUTFRAME(): number;
  getPOINTCLOUDCLIPFRAME(): number;
  getMLEADERSCALE(): number;
  getDYNCONSTRAINTDISPLAY(): boolean;
  getVIEWUPDATEAUTO(): number;
  getVSACURVATUREHIGH(): number;
  getVSACURVATURELOW(): number;
  getVSACURVATURETYPE(): number;
  getVSADRAFTANGLEHIGH(): number;
  getVSADRAFTANGLELOW(): number;
  getVSAZEBRACOLOR1(): OdString;
  getVSAZEBRACOLOR2(): OdString;
  getVSAZEBRADIRECTION(): number;
  getVSAZEBRASIZE(): number;
  getVSAZEBRATYPE(): number;
  getGEOMARKPOSITIONSIZE(): number;
  getPOINTCLOUDPOINTSIZE(): number;
  getDIMLAYER(): OdString;
  getSECTIONOFFSETINC(): number;
  getSECTIONTHICKNESSINC(): number;
  getXREFOVERRIDE(): number;
  getCENTERCROSSGAP(): OdString;
  getCENTERCROSSSIZE(): OdString;
  getCENTEREXE(): number;
  getCENTERLAYER(): OdString;
  getCENTERLTSCALE(): number;
  getCENTERLTYPE(): OdString;
  getCENTERLTYPEFILE(): OdString;
  getCENTERMARKEXE(): boolean;
  getTRACECURRENT(): OdString;
  getTRACEMODE(): number;
  getTRACEDISPLAYMODE(): number;
  getMATERIALFBX(): boolean;
  setANGBASE(val: number): void;
  setANGDIR(val: boolean): void;
  setINSBASE(val: OdGePoint3d): void;
  setEXTMIN(val: OdGePoint3d): void;
  setEXTMAX(val: OdGePoint3d): void;
  setLIMMIN(val: OdGePoint2d): void;
  setLIMMAX(val: OdGePoint2d): void;
  setORTHOMODE(val: boolean): void;
  setREGENMODE(val: boolean): void;
  setFILLMODE(val: boolean): void;
  setQTEXTMODE(val: boolean): void;
  setMIRRTEXT(val: boolean): void;
  setLTSCALE(val: number): void;
  setATTMODE(val: number): void;
  setTEXTSIZE(val: number): void;
  setTRACEWID(val: number): void;
  setTEXTSTYLE(val: OdDbObjectId): void;
  setCLAYER(val: OdDbObjectId): void;
  setCELTYPE(val: OdDbObjectId): void;
  setCECOLOR(val: OdCmColor): void;
  setCELTSCALE(val: number): void;
  setCHAMFERA(val: number): void;
  setCHAMFERB(val: number): void;
  setCHAMFERC(val: number): void;
  setCHAMFERD(val: number): void;
  setDISPSILH(val: boolean): void;
  setDIMSTYLE(val: OdDbObjectId): void;
  setDIMASO(val: boolean): void;
  setDIMSHO(val: boolean): void;
  setLUNITS(val: number): void;
  setLUPREC(val: number): void;
  setSKETCHINC(val: number): void;
  setFILLETRAD(val: number): void;
  setAUNITS(val: number): void;
  setAUPREC(val: number): void;
  setMENUNAME(val: OdString): void;
  setELEVATION(val: number): void;
  setPELEVATION(val: number): void;
  setTHICKNESS(val: number): void;
  setLIMCHECK(val: boolean): void;
  setSKPOLY(val: boolean): void;
  setUSRTIMER(val: boolean): void;
  setPDMODE(val: number): void;
  setPDSIZE(val: number): void;
  setPLINEWID(val: number): void;
  setSPLFRAME(val: boolean): void;
  setSPLINETYPE(val: number): void;
  setSPLINESEGS(val: number): void;
  setSURFTAB1(val: number): void;
  setSURFTAB2(val: number): void;
  setSURFTYPE(val: number): void;
  setSURFU(val: number): void;
  setSURFV(val: number): void;
  setUSERI1(val: number): void;
  setUSERI2(val: number): void;
  setUSERI3(val: number): void;
  setUSERI4(val: number): void;
  setUSERI5(val: number): void;
  setUSERR1(val: number): void;
  setUSERR2(val: number): void;
  setUSERR3(val: number): void;
  setUSERR4(val: number): void;
  setPDFUNDERLAYSHADEDMODE(val: boolean): void;
  setUSERR5(val: number): void;
  setWORLDVIEW(val: boolean): void;
  setSHADEDGE(val: number): void;
  setSHADEDIF(val: number): void;
  setTILEMODE(val: boolean): void;
  setMAXACTVP(val: number): void;
  setPINSBASE(val: OdGePoint3d): void;
  setPLIMCHECK(val: boolean): void;
  setPEXTMIN(val: OdGePoint3d): void;
  setPEXTMAX(val: OdGePoint3d): void;
  setPLIMMIN(val: OdGePoint2d): void;
  setPLIMMAX(val: OdGePoint2d): void;
  setUCSNAME(val: OdDbObjectId): void;
  setPUCSNAME(val: OdDbObjectId): void;
  setUNITMODE(val: number): void;
  setVISRETAIN(val: boolean): void;
  setPLINEGEN(val: boolean): void;
  setPSLTSCALE(val: boolean): void;
  setTREEDEPTH(val: number): void;
  setCMLSTYLE(val: OdDbObjectId): void;
  setCMLJUST(val: number): void;
  setCMLSCALE(val: number): void;
  setPROXYGRAPHICS(val: number): void;
  setMEASUREMENT(val: MeasurementValue): void;
  setCELWEIGHT(val: LineWeight): void;
  setENDCAPS(val: EndCaps): void;
  setJOINSTYLE(val: JoinStyle): void;
  setLWDISPLAY(val: boolean): void;
  setINSUNITS(val: UnitsValue): void;
  setTSTACKALIGN(val: number): void;
  setTSTACKSIZE(val: number): void;
  setHYPERLINKBASE(val: OdString): void;
  setSTYLESHEET(val: OdString): void;
  setXEDIT(val: boolean): void;
  setCEPSNTYPE(val: PlotStyleNameType): void;
  setCEPSNID(val: OdDbObjectId): void;
  setFINGERPRINTGUID(val: OdString): void;
  setVERSIONGUID(val: OdString): void;
  setEXTNAMES(val: boolean): void;
  setPSVPSCALE(val: number): void;
  setOLESTARTUP(val: boolean): void;
  setPELLIPSE(val: boolean): void;
  setISOLINES(val: number): void;
  setTEXTQLTY(val: number): void;
  setFACETRES(val: number): void;
  setPUCSBASE(val: OdDbObjectId): void;
  setPUCSORTHOVIEW(val: number): void;
  setPUCSORGTOP(val: OdGePoint3d): void;
  setPUCSORGBOTTOM(val: OdGePoint3d): void;
  setPUCSORGLEFT(val: OdGePoint3d): void;
  setPUCSORGRIGHT(val: OdGePoint3d): void;
  setPUCSORGFRONT(val: OdGePoint3d): void;
  setPUCSORGBACK(val: OdGePoint3d): void;
  setUCSBASE(val: OdDbObjectId): void;
  setUCSORTHOVIEW(val: number): void;
  setUCSORGTOP(val: OdGePoint3d): void;
  setUCSORGBOTTOM(val: OdGePoint3d): void;
  setUCSORGLEFT(val: OdGePoint3d): void;
  setUCSORGRIGHT(val: OdGePoint3d): void;
  setUCSORGFRONT(val: OdGePoint3d): void;
  setUCSORGBACK(val: OdGePoint3d): void;
  setCTABLESTYLE(val: OdDbObjectId): void;
  setCMLEADERSTYLE(val: OdDbObjectId): void;
  setCANNOSCALE(val: OdDbAnnotationScale): void;
  setANNOALLVISIBLE(val: boolean): void;
  setANNOTATIVEDWG(val: number): void;
  setMSLTSCALE(val: boolean): void;
  setLAYEREVAL(val: number): void;
  setLAYERNOTIFY(val: number): void;
  setLIGHTINGUNITS(val: number): void;
  setLIGHTSINBLOCKS(val: number): void;
  setDBCSTATE(val: number): void;
  setINTERSECTIONCOLOR(val: number): void;
  setINTERSECTIONDISPLAY(val: boolean): void;
  setHALOGAP(val: number): void;
  setOBSCUREDCOLOR(val: number): void;
  setOBSCUREDLTYPE(val: number): void;
  setINDEXCTL(val: number): void;
  setPROJECTNAME(val: OdString): void;
  setSORTENTS(val: number): void;
  setDIMASSOC(val: number): void;
  setHIDETEXT(val: boolean): void;
  setDRAWORDERCTL(val: number): void;
  setHPINHERIT(val: boolean): void;
  setHPORIGIN(val: OdGePoint2d): void;
  setFIELDEVAL(val: number): void;
  setMSOLESCALE(val: number): void;
  setUPDATETHUMBNAIL(val: number): void;
  setSOLIDHIST(val: number): void;
  setSHOWHIST(val: number): void;
  setPSOLWIDTH(val: number): void;
  setLOFTPARAM(val: LoftParamType): void;
  setLOFTNORMALS(val: LoftNormalsType): void;
  setLOFTANG1(val: number): void;
  setLOFTANG2(val: number): void;
  setLOFTMAG1(val: number): void;
  setLOFTMAG2(val: number): void;
  setLATITUDE(val: number): void;
  setLONGITUDE(val: number): void;
  setNORTHDIRECTION(val: number): void;
  setTIMEZONE(val: TimeZone): void;
  setLIGHTGLYPHDISPLAY(val: number): void;
  setTILEMODELIGHTSYNCH(val: number): void;
  setINTERFERECOLOR(val: OdCmColor): void;
  setINTERFEREOBJVS(val: OdDbObjectId): void;
  setINTERFEREVPVS(val: OdDbObjectId): void;
  setDRAGVS(val: OdDbObjectId): void;
  setCSHADOW(val: ShadowFlags): void;
  setSHADOWPLANELOCATION(val: number): void;
  setCAMERADISPLAY(val: boolean): void;
  setLENSLENGTH(val: number): void;
  setCAMERAHEIGHT(val: number): void;
  setSTEPSPERSEC(val: number): void;
  setSTEPSIZE(val: number): void;
  set3DDWFPREC(val: number): void;
  setPSOLHEIGHT(val: number): void;
  setCMATERIAL(val: OdDbObjectId): void;
  setDWFFRAME(val: number): void;
  setDGNFRAME(val: number): void;
  setREALWORLDSCALE(val: boolean): void;
  setDXEVAL(val: number): void;
  setGEOLATLONGFORMAT(val: number): void;
  setGEOMARKERVISIBILITY(val: number): void;
  setPREVIEWTYPE(val: number): void;
  setEXPORTMODELSPACE(val: number): void;
  setEXPORTPAPERSPACE(val: number): void;
  setEXPORTPAGESETUP(val: number): void;
  setFRAME(val: number): void;
  setPDFFRAME(val: number): void;
  setXCLIPFRAME(val: number): void;
  setMESHTYPE(val: number): void;
  setSKYSTATUS(val: number): void;
  setHPLAYER(val: OdString): void;
  setMIRRHATCH(val: number): void;
  setHPTRANSPARENCY(val: OdCmTransparency): void;
  setHPCOLOR(val: OdCmColor): void;
  setHPBACKGROUNDCOLOR(val: OdCmColor): void;
  setCETRANSPARENCY(val: OdCmTransparency): void;
  setCVIEWDETAILSTYLE(val: OdDbObjectId): void;
  setCVIEWSECTIONSTYLE(val: OdDbObjectId): void;
  setWIPEOUTFRAME(val: number): void;
  setPOINTCLOUDCLIPFRAME(val: number): void;
  setMLEADERSCALE(val: number): void;
  setDYNCONSTRAINTDISPLAY(val: boolean): void;
  setVIEWUPDATEAUTO(val: number): void;
  setVSACURVATUREHIGH(val: number): void;
  setVSACURVATURELOW(val: number): void;
  setVSACURVATURETYPE(val: number): void;
  setVSADRAFTANGLEHIGH(val: number): void;
  setVSADRAFTANGLELOW(val: number): void;
  setVSAZEBRACOLOR1(val: OdString): void;
  setVSAZEBRACOLOR2(val: OdString): void;
  setVSAZEBRADIRECTION(val: number): void;
  setVSAZEBRASIZE(val: number): void;
  setVSAZEBRATYPE(val: number): void;
  setGEOMARKPOSITIONSIZE(val: number): void;
  setPOINTCLOUDPOINTSIZE(val: number): void;
  setDIMLAYER(val: OdString): void;
  setSECTIONOFFSETINC(val: number): void;
  setSECTIONTHICKNESSINC(val: number): void;
  setXREFOVERRIDE(val: number): void;
  setCENTERCROSSGAP(val: OdString): void;
  setCENTERCROSSSIZE(val: OdString): void;
  setCENTEREXE(val: number): void;
  setCENTERLAYER(val: OdString): void;
  setCENTERLTSCALE(val: number): void;
  setCENTERLTYPE(val: OdString): void;
  setCENTERLTYPEFILE(val: OdString): void;
  setCENTERMARKEXE(val: boolean): void;
  setMATERIALFBX(val: boolean): void;
  dimadec(): number;
  setDimadec(val: number): void;
  dimalt(): boolean;
  setDimalt(val: boolean): void;
  dimaltd(): number;
  setDimaltd(val: number): void;
  dimaltf(): number;
  setDimaltf(val: number): void;
  dimaltrnd(): number;
  setDimaltrnd(val: number): void;
  dimalttd(): number;
  setDimalttd(val: number): void;
  dimalttz(): number;
  setDimalttz(val: number): void;
  dimaltu(): number;
  setDimaltu(val: number): void;
  dimaltz(): number;
  setDimaltz(val: number): void;
  dimapost(): OdString;
  setDimapost(val: OdString): void;
  dimasz(): number;
  setDimasz(val: number): void;
  dimatfit(): number;
  setDimatfit(val: number): void;
  dimaunit(): number;
  setDimaunit(val: number): void;
  dimazin(): number;
  setDimazin(val: number): void;
  dimblk(): OdDbHardPointerId;
  setDimblk(val: OdDbHardPointerId): void;
  dimblk1(): OdDbHardPointerId;
  setDimblk1(val: OdDbHardPointerId): void;
  dimblk2(): OdDbHardPointerId;
  setDimblk2(val: OdDbHardPointerId): void;
  dimcen(): number;
  setDimcen(val: number): void;
  dimclrd(): OdCmColor;
  setDimclrd(val: OdCmColor): void;
  dimclre(): OdCmColor;
  setDimclre(val: OdCmColor): void;
  dimclrt(): OdCmColor;
  setDimclrt(val: OdCmColor): void;
  dimdec(): number;
  setDimdec(val: number): void;
  dimdle(): number;
  setDimdle(val: number): void;
  dimdli(): number;
  setDimdli(val: number): void;
  dimdsep(): number;
  setDimdsep(val: number): void;
  dimexe(): number;
  setDimexe(val: number): void;
  dimexo(): number;
  setDimexo(val: number): void;
  dimfrac(): number;
  setDimfrac(val: number): void;
  dimgap(): number;
  setDimgap(val: number): void;
  dimjust(): number;
  setDimjust(val: number): void;
  dimldrblk(): OdDbHardPointerId;
  setDimldrblk(val: OdDbHardPointerId): void;
  dimlfac(): number;
  setDimlfac(val: number): void;
  dimlim(): boolean;
  setDimlim(val: boolean): void;
  dimlunit(): number;
  setDimlunit(val: number): void;
  dimlwd(): LineWeight;
  setDimlwd(val: LineWeight): void;
  dimlwe(): LineWeight;
  setDimlwe(val: LineWeight): void;
  dimpost(): OdString;
  setDimpost(val: OdString): void;
  dimrnd(): number;
  setDimrnd(val: number): void;
  dimsah(): boolean;
  setDimsah(val: boolean): void;
  dimscale(): number;
  setDimscale(val: number): void;
  dimsd1(): boolean;
  setDimsd1(val: boolean): void;
  dimsd2(): boolean;
  setDimsd2(val: boolean): void;
  dimse1(): boolean;
  setDimse1(val: boolean): void;
  dimse2(): boolean;
  setDimse2(val: boolean): void;
  dimsoxd(): boolean;
  setDimsoxd(val: boolean): void;
  dimtad(): number;
  setDimtad(val: number): void;
  dimtdec(): number;
  setDimtdec(val: number): void;
  dimtfac(): number;
  setDimtfac(val: number): void;
  dimtih(): boolean;
  setDimtih(val: boolean): void;
  dimtix(): boolean;
  setDimtix(val: boolean): void;
  dimtm(): number;
  setDimtm(val: number): void;
  dimtmove(): number;
  setDimtmove(val: number): void;
  dimtofl(): boolean;
  setDimtofl(val: boolean): void;
  dimtoh(): boolean;
  setDimtoh(val: boolean): void;
  dimtol(): boolean;
  setDimtol(val: boolean): void;
  dimtolj(): number;
  setDimtolj(val: number): void;
  dimtp(): number;
  setDimtp(val: number): void;
  dimtsz(): number;
  setDimtsz(val: number): void;
  dimtvp(): number;
  setDimtvp(val: number): void;
  dimtxsty(): OdDbHardPointerId;
  setDimtxsty(val: OdDbHardPointerId): void;
  dimtxt(): number;
  setDimtxt(val: number): void;
  dimtzin(): number;
  setDimtzin(val: number): void;
  dimupt(): boolean;
  setDimupt(val: boolean): void;
  dimzin(): number;
  setDimzin(val: number): void;
  dimfxl(): number;
  setDimfxl(val: number): void;
  dimfxlon(): boolean;
  setDimfxlon(val: boolean): void;
  dimjogang(): number;
  setDimjogang(val: number): void;
  dimtfill(): number;
  setDimtfill(val: number): void;
  dimtfillclr(): OdCmColor;
  setDimtfillclr(val: OdCmColor): void;
  dimarcsym(): number;
  setDimarcsym(val: number): void;
  dimltype(): OdDbHardPointerId;
  setDimltype(val: OdDbHardPointerId): void;
  dimltex1(): OdDbHardPointerId;
  setDimltex1(val: OdDbHardPointerId): void;
  dimltex2(): OdDbHardPointerId;
  setDimltex2(val: OdDbHardPointerId): void;
  dimtxtdirection(): boolean;
  setDimtxtdirection(val: boolean): void;
  dimmzf(): number;
  setDimmzf(val: number): void;
  dimmzs(): OdString;
  setDimmzs(val: OdString): void;
  dimaltmzf(): number;
  setDimaltmzf(val: number): void;
  dimaltmzs(): OdString;
  setDimaltmzs(val: OdString): void;
  getDIMANNO(): boolean;
  getTDCREATE(): OdDbDate;
  getTDUPDATE(): OdDbDate;
  getCGEOCS(): OdString;
  resetTimes(): void;
  getSysVar(name: OdString): OdResBuf;
  setSysVar(name: OdString, pValue: OdResBuf): void;
  handseed(): OdDbHandle;
  getDimstyleData(pDestination: OdDbDimStyleTableRecord): void;
  getDimstyleChildData(pDimClass: OdRxClass, pRec: OdDbDimStyleTableRecord, style: OdDbObjectId): OdResult;
  getDimstyleChildId(pDimClass: OdRxClass, parentStyle: OdDbObjectId): OdDbObjectId;
  getDimstyleParentId(childStyle: OdDbObjectId): OdDbObjectId;
  setDimstyleData(pSource: OdDbDimStyleTableRecord): void;
  setDimstyleData1(objectId: OdDbObjectId): void;
  loadLineTypeFile(ltName: OdString, filename: OdString, dlt: DuplicateLinetypeLoading, encode: TextFileEncoding): void;
  originalFilename(): OdString;
  getFilename(): OdString;
  setFilename(fileName: OdString): void;
  purge(objectIds: OdDbObjectIdArray): void;
  purge1(objectIds: OdDbObjectIdGraph): void;
  countHardReferences(objectIds: OdDbObjectIdArray, counts: number): void;
  currentLayoutId(): OdDbObjectId;
  setCurrentLayout(layoutName: OdString): void;
  setCurrentLayout1(layoutId: OdDbObjectId): void;
  findActiveLayout(allowModel: boolean): OdString;
  getActiveLayoutBTRId(): OdDbObjectId;
  findLayoutNamed(layoutName: OdString): OdDbObjectId;
  deleteLayout(layoutName: OdString): void;
  createLayout(layoutName: OdString, pBlockTableRecId: OdDbObjectId): OdDbObjectId;
  countLayouts(): number;
  renameLayout(oldName: OdString, newName: OdString): void;
  startUndoRecord(): void;
  hasUndo(): boolean;
  undo(): void;
  blockUndoRecording(bBegin: boolean): void;
  isUndoBlockStarted(): boolean;
  setUndoMark(): void;
  hasUndoMark(): boolean;
  undoBack(): void;
  getUNDOMARKS(): number;
  clearUndo(): void;
  hasRedo(): boolean;
  redo(): void;
  auditDatabase(pAuditInfo: OdDbAuditInfo): void;
  applyPartialUndo(pUndoFiler: OdDbDwgFiler, pClassObj: OdRxClass): void;
  undoFiler(): OdDbDwgFiler;
  insert(destinationBlockName: OdString, pSource: OdDbDatabase, preserveSourceDatabase: boolean): OdDbObjectId;
  insert1(sourceBlockName: OdString, destinationBlockName: OdString, pSource: OdDbDatabase, preserveSourceDatabase: boolean): OdDbObjectId;
  insert2(xfm: OdGeMatrix3d, pSource: OdDbDatabase, preserveSourceDatabase: boolean): void;
  wblock(outObjIds: OdDbObjectIdArray, basePoint: OdGePoint3d): OdDbDatabase;
  wblock1(blockId: OdDbObjectId): OdDbDatabase;
  wblock2(): OdDbDatabase;
  wblock3(pOutputDb: OdDbDatabase, outObjIds: OdDbObjectIdArray, basePoint: OdGePoint3d, drc: DuplicateRecordCloning): void;
  subWblockClone(ownerIdMap: OdDbIdMapping, arg1: OdDbObject): OdDbObject;
  setSecurityParams(secParams: OdSecurityParams, setDbMod: boolean): void;
  securityParams(secParams: OdSecurityParams): boolean;
  fileDependencyManager(): OdFileDependencyManager;
  objectContextManager(): OdDbObjectContextManager;
  getLayerStateManager(): OdDbLayerStateManager;
  updateExt(bExact: boolean): void;
  isEMR(): boolean;
  xrefBlockId(): OdDbObjectId;
  isPartiallyOpened(): boolean;
  isDatabaseLoading(): boolean;
  isDatabaseConverting(): boolean;
  auditInfo(): OdDbAuditInfo;
  setCurrentUCS(viewType: OrthographicView): void;
  setCurrentUCS1(ucsId: OdDbObjectId): void;
  setCurrentUCS2(origin: OdGePoint3d, xAxis: OdGeVector3d, yAxis: OdGeVector3d): void;
  getUCSBASEORG(viewType: OrthographicView): OdGePoint3d;
  setUCSBASEORG(viewType: OrthographicView, origin: OdGePoint3d): void;
  getPUCSBASEORG(viewType: OrthographicView): OdGePoint3d;
  setPUCSBASEORG(viewType: OrthographicView, origin: OdGePoint3d): void;
  restoreOriginalXrefSymbols(): void;
  restoreForwardingXrefSymbols(): void;
  byLayerMaterialId(): OdDbObjectId;
  byBlockMaterialId(): OdDbObjectId;
  globalMaterialId(): OdDbObjectId;
  activeViewportId(): OdDbObjectId;
  enableGraphicsFlush(bEnable: boolean): void;
  flushGraphics(): void;
  isMultiThreadedMode(): boolean;
  multiThreadedMode(): MultiThreadedMode;
  setMultiThreadedMode(arg0: MultiThreadedMode): void;
  setCannoscale(val: OdDbAnnotationScale): void;
  cannoscale(): OdDbAnnotationScale;
  dataLinkDictionaryId(): OdDbObjectId;
  dataLinkDictionary(mode: OpenMode): OdDbDictionary;
  usingCoreOnly(): boolean;
  enqueuePaging(id: OdDbObjectId): boolean;
  pageObjects(): boolean;
  indexingMode(): number;
  setIndexingMode(nIndexingModeBitFlags: number): void;
  isPerObjectConverting(): boolean;
};

enum FilletTrimMode {
  kTrimNone = 0,
  kTrimFirst = 1,
  kTrimSecond = 2,
  kTrimBoth = 3
};

enum IndexingModeFlags {
  kNoIndexing = 0,
  kUpdateBlockIndexOnSave = 1,
  kUseBlockChangeIterator = 2,
  kUseAll = 3
};

enum VerticalApplicationType {
  kArchitecture = 1,
  kCivil = 2,
  kMechanical = 4
};

enum VerticalApplicationMode {
  kEnabler = 0,
  kEditor = 1
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbDiametricDimension.html} Additional documentation.
 */
class OdDbDiametricDimension extends OdDbDimension {
  constructor();
  constructor(arg0: OdDbDiametricDimension);
  static cast(pObj: OdRxObject): OdDbDiametricDimension;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdDbDiametricDimension;
  static rxInit(): void;
  static rxUninit(): void;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  setLeaderLength(leaderLength: number): void;
  leaderLength(): number;
  chordPoint(): OdGePoint3d;
  setChordPoint(chordPoint: OdGePoint3d): void;
  farChordPoint(): OdGePoint3d;
  setFarChordPoint(farChordPoint: OdGePoint3d): void;
  extArcOn(): boolean;
  extArcStartAngle(): number;
  setExtArcStartAngle(newAngle: number): void;
  extArcEndAngle(): number;
  setExtArcEndAngle(newAngle: number): void;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): void;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): void;
  dxfInFields_R12(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields_R12(pFiler: OdDbDxfFiler): void;
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbDictionaryIterator.html} Additional documentation.
 */
class OdDbDictionaryIterator extends OdRxIterator {
  static cast(pObj: OdRxObject): OdDbDictionaryIterator;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdDbDictionaryIterator;
  static rxInit(): void;
  static rxUninit(): void;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  name(): OdString;
  getObject(openMode: OpenMode): OdDbObject;
  objectId(): OdDbObjectId;
  setPosition(objectId: OdDbObjectId): boolean;
  object(): OdRxObjectPtr;
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbDictionary.html} Additional documentation.
 */
class OdDbDictionary extends OdDbObject {
  constructor(arg0: OdDbDictionary);
  static cast(pObj: OdRxObject): OdDbDictionary;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdDbDictionary;
  static rxInit(): void;
  static rxUninit(): void;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  getAt(name: OdString, mode: OpenMode): OdDbObject;
  getAt1(name: OdString, pStatus: OdResult): OdDbObjectId;
  nameAt(objectId: OdDbObjectId): OdString;
  has(name: OdString): boolean;
  has1(objectId: OdDbObjectId): boolean;
  numEntries(): number;
  remove(name: OdString): OdDbObjectId;
  remove1(objectId: OdDbObjectId): void;
  setName(oldName: OdString, newName: OdString): boolean;
  setAt(name: OdString, newValue: OdDbObject): OdDbObjectId;
  isTreatElementsAsHard(): boolean;
  setTreatElementsAsHard(doIt: boolean): void;
  newIterator(iterType: DictIterType): OdDbDictionaryIterator;
  begin(): OdDbDictionaryIterator;
  end(): OdDbDictionaryIterator;
  suggestName(strFilePath: OdString, nMaxLength: number): OdString;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): void;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): void;
  mergeStyle(): DuplicateRecordCloning;
  setMergeStyle(mergeStyle: DuplicateRecordCloning): void;
  goodbye(pObject: OdDbObject): void;
  erased(pObject: OdDbObject, erasing: boolean): void;
  applyPartialUndo(pFiler: OdDbDwgFiler, pClass: OdRxClass): void;
  subClose(): void;
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbXrefFullSubentPath.html} Additional documentation.
 */
class OdDbXrefFullSubentPath extends OdDbFullSubentPath {
  constructor(arg0: OdDbXrefFullSubentPath);
  constructor();
  xrefObjHandles(): OdHandleArray;
  xrefObjHandles1(): OdHandleArray;
  dwgIn(pFiler: OdDbDwgFiler): void;
  dwgOut(pFiler: OdDbDwgFiler): void;
  dxfOut(pFiler: OdDbDxfFiler, groupCodeOffset: number): void;
  static ctr1(arg0: OdDbXrefFullSubentPath): OdDbXrefFullSubentPath;
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbDimAssoc.html} Additional documentation.
 */
class OdDbDimAssoc extends OdDbObject {
  constructor();
  constructor(arg0: OdDbDimAssoc);
  static cast(pObj: OdRxObject): OdDbDimAssoc;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdDbDimAssoc;
  static rxInit(): void;
  static rxUninit(): void;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): void;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): void;
  dimObjId(): OdDbObjectId;
  setDimObjId(dimId: OdDbObjectId): void;
  assocFlag(): number;
  assocFlag1(pointIndex: number): boolean;
  setAssocFlag(assocFlag: number): void;
  setAssocFlag1(pointIndex: number, flagValue: boolean): void;
  pointRef(pointIndex: number): OdDbOsnapPointRef;
  setPointRef(pointIndex: number, pOsnapPointRef: OdDbOsnapPointRef): void;
  rotatedDimType(): RotatedDimType;
  setRotatedDimType(dimType: RotatedDimType): void;
  addToPointRefReactor(): void;
  addToDimensionReactor(isAdd: boolean): void;
  removePointRef(ptType: number): OdResult;
  updateDimension(update: boolean, skipReactors: boolean): OdResult;
  removeAssociativity(force: boolean): void;
  isTransSpatial(): boolean;
  setTransSpatial(value: boolean): void;
  post(dimId: OdDbObjectId, dimAssocId: OdDbObjectId, isActive: boolean): OdResult;
  getDimAssocGeomIds(geomIds: OdDbObjectIdArray): OdResult;
  isAllGeomErased(): boolean;
  modifiedGraphics(pObj: OdDbObject): void;
  copied(pObj: OdDbObject, pNewObj: OdDbObject): void;
  erased(pObj: OdDbObject, erasing: boolean): void;
  openedForModify(pObject: OdDbObject): void;
  subWblockClone(idMap: OdDbIdMapping, pOwner: OdDbObject, bPrimary: boolean): OdDbObject;
  subDeepClone(idMap: OdDbIdMapping, pOwner: OdDbObject, bPrimary: boolean): OdDbObject;
  subClose(): void;
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbPointRef.html} Additional documentation.
 */
class OdDbPointRef extends OdRxObject {
  static cast(pObj: OdRxObject): OdDbPointRef;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdDbPointRef;
  static rxInit(): void;
  static rxUninit(): void;
  static calcTransform(ids: OdDbObjectIdArray, A_Ecs2Wcs: OdGeMatrix3d): boolean;
  static mswcsToPswcs(pVPort: OdDbViewport): OdGeMatrix3d;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  evalPoint(pnt_wcs: OdGePoint3d): OdResult;
  getEntities(ents: OdDbFullSubentPathArray, getLastPtRef: boolean): OdResult;
  isGeomErased(): boolean;
  isXrefObj(ids1: OdDbObjectIdArray, ids2: OdDbObjectIdArray, isMainObj: boolean): boolean;
  updateXrefSubentPath(): OdResult;
  updateSubentPath(idMap: OdDbIdMapping): OdResult;
  dwgOutFields(filer: OdDbDwgFiler): void;
  dwgInFields(filer: OdDbDwgFiler): void;
  dxfOutFields(filer: OdDbDxfFiler): void;
  dxfInFields(filer: OdDbDxfFiler): OdResult;
  updateDueToMirror(inMirror: boolean): void;
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbOsnapPointRef.html} Additional documentation.
 */
class OdDbOsnapPointRef extends OdDbPointRef {
  static cast(pObj: OdRxObject): OdDbOsnapPointRef;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdDbOsnapPointRef;
  static rxInit(): void;
  static rxUninit(): void;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  osnapType(): OsnapMode;
  setOsnapType(osnapMode: OsnapMode): void;
  mainEntity(): OdDbXrefFullSubentPath;
  intersectEntity(): OdDbXrefFullSubentPath;
  getIdPath(idPath: OdDbFullSubentPath): void;
  setIdPath(idPath: OdDbFullSubentPath): void;
  getIntIdPath(intIdPath: OdDbFullSubentPath): void;
  setIntIdPath(intIdPath: OdDbFullSubentPath): void;
  nearPointParam(): number;
  setNearPointParam(nearOsnap: number): void;
  point(): OdGePoint3d;
  setPoint(pt: OdGePoint3d): void;
  lastPointRef(): OdDbOsnapPointRef;
  lastPointRef1(): OdDbOsnapPointRef;
  setLastPointRef(pOsnapPointRef: OdDbOsnapPointRef): void;
  isGeomErased(): boolean;
  isXrefObj(ids1: OdDbObjectIdArray, ids2: OdDbObjectIdArray, isMainObj: boolean): boolean;
  updateXrefSubentPath(): OdResult;
  updateSubentPath(idMap: OdDbIdMapping): OdResult;
  evalPoint(pt: OdGePoint3d): OdResult;
  getEntities(ents: OdDbFullSubentPathArray, getLastPtRef: boolean): OdResult;
  updateDueToMirror(inMirror: boolean): void;
  getXrefHandles(xrefHandles: OdHandleArray): void;
  setXrefHandles(xrefHandles: OdHandleArray): void;
  getXrefIntHandles(xrefHandles: OdHandleArray): void;
  setXrefIntHandles(xrefHandles: OdHandleArray): void;
  dwgInFields(pFiler: OdDbDwgFiler): void;
  dwgOutFields(pFiler: OdDbDwgFiler): void;
  dxfOutFields(pFiler: OdDbDxfFiler): void;
  dxfInFields(filer: OdDbDxfFiler): OdResult;
};

enum PointType {
  kXline1Point = 0,
  kXline2Point = 1,
  kOriginPoint = 0,
  kDefiningPoint = 1,
  kXline1Start = 0,
  kXline1End = 1,
  kXline2Start = 2,
  kXline2End = 3,
  kVertexPoint = 2,
  kChordPoint = 0,
  kCenterPoint = 1,
  kFarChordPoint = 1,
  kOverrideCenterPoint = 2,
  kAngLineStart = 2,
  kJogPoint = 3,
  kAngLineEnd = 3,
  kLeaderPoint = 0
};

enum RotatedDimType {
  kUnknown = 0,
  kParallel = 1,
  kPerpendicular = 2
};

enum AssocFlags {
  kFirstPointRef = 1,
  kSecondPointRef = 2,
  kThirdPointRef = 4,
  kFourthPointRef = 8
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbDimension.html} Additional documentation.
 */
class OdDbDimension extends OdDbEntity {
  constructor();
  constructor(arg0: OdDbDimension);
  static cast(pObj: OdRxObject): OdDbDimension;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdDbDimension;
  static rxInit(): void;
  static rxUninit(): void;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  textPosition(): OdGePoint3d;
  setTextPosition(textPosition: OdGePoint3d): void;
  isUsingDefaultTextPosition(): boolean;
  useSetTextPosition(): void;
  useDefaultTextPosition(): void;
  normal(): OdGeVector3d;
  setNormal(normal: OdGeVector3d): void;
  isPlanar(): boolean;
  getPlane(plane: OdGePlane, planarity: Planarity): OdResult;
  elevation(): number;
  setElevation(elevation: number): void;
  dimensionText(): OdString;
  setDimensionText(dimensionText: OdString): void;
  textRotation(): number;
  setTextRotation(textRotation: number): void;
  dimensionStyle(): OdDbObjectId;
  setDimensionStyle(objectID: OdDbObjectId): void;
  textAttachment(): AttachmentPoint;
  setTextAttachment(attachmentPoint: AttachmentPoint): void;
  textLineSpacingStyle(): LineSpacingStyle;
  setTextLineSpacingStyle(lineSpacingStyle: LineSpacingStyle): void;
  textLineSpacingFactor(): number;
  setTextLineSpacingFactor(lineSpacingFactor: number): void;
  getDimstyleData(pRecord: OdDbDimStyleTableRecord): void;
  setDimstyleData(pDimstyle: OdDbDimStyleTableRecord): void;
  setDimstyleData1(dimstyleID: OdDbObjectId): void;
  horizontalRotation(): number;
  setHorizontalRotation(horizontalRotation: number): void;
  dimBlockId(): OdDbObjectId;
  setDimBlockId(dimBlockId: OdDbObjectId, singleReferenced: boolean): void;
  isSingleDimBlockReference(): boolean;
  dimBlockPosition(): OdGePoint3d;
  setDimBlockPosition(dimBlockPosition: OdGePoint3d): void;
  dimBlockRotation(): number;
  setDimBlockRotation(dimBlockRotation: number): void;
  dimBlockScale(): OdGeScale3d;
  setDimBlockScale(dimBlockScale: OdGeScale3d): void;
  dimBlockTransform(): OdGeMatrix3d;
  recomputeDimBlock(forceUpdate: boolean): void;
  getMeasurement(): number;
  measurement(): number;
  getBgrndTxtColor(bgrndTxtColor: OdCmColor): number;
  setBgrndTxtColor(bgrndTxtColor: OdCmColor, bgrndTxtFlags: number): void;
  getExtLineFixLenEnable(): boolean;
  setExtLineFixLenEnable(extLineFixLenEnable: boolean): void;
  getExtLineFixLen(): number;
  setExtLineFixLen(extLineFixLen: number): void;
  getDimLinetype(): OdDbObjectId;
  setDimLinetype(linetypeId: OdDbObjectId): void;
  getDimExt1Linetype(): OdDbObjectId;
  setDimExt1Linetype(linetypeId: OdDbObjectId): void;
  getDimExt2Linetype(): OdDbObjectId;
  setDimExt2Linetype(linetypeId: OdDbObjectId): void;
  getArrowFirstIsFlipped(): boolean;
  getArrowSecondIsFlipped(): boolean;
  setArrowFirstIsFlipped(bIsFlipped: boolean): void;
  setArrowSecondIsFlipped(bIsFlipped: boolean): void;
  inspection(): boolean;
  setInspection(val: boolean): void;
  inspectionFrame(): number;
  setInspectionFrame(frame: number): void;
  inspectionLabel(): OdString;
  setInspectionLabel(label: OdString): void;
  inspectionRate(): OdString;
  setInspectionRate(label: OdString): void;
  dimadec(): number;
  setDimadec(val: number): void;
  dimalt(): boolean;
  setDimalt(val: boolean): void;
  dimaltd(): number;
  setDimaltd(val: number): void;
  dimaltf(): number;
  setDimaltf(val: number): void;
  dimaltrnd(): number;
  setDimaltrnd(val: number): void;
  dimalttd(): number;
  setDimalttd(val: number): void;
  dimalttz(): number;
  setDimalttz(val: number): void;
  dimaltu(): number;
  setDimaltu(val: number): void;
  dimaltz(): number;
  setDimaltz(val: number): void;
  dimapost(): OdString;
  setDimapost(val: OdString): void;
  dimasz(): number;
  setDimasz(val: number): void;
  dimatfit(): number;
  setDimatfit(val: number): void;
  dimaunit(): number;
  setDimaunit(val: number): void;
  dimazin(): number;
  setDimazin(val: number): void;
  dimblk(): OdDbHardPointerId;
  setDimblk(val: OdDbHardPointerId): void;
  dimblk1(): OdDbHardPointerId;
  setDimblk1(val: OdDbHardPointerId): void;
  dimblk2(): OdDbHardPointerId;
  setDimblk2(val: OdDbHardPointerId): void;
  dimcen(): number;
  setDimcen(val: number): void;
  dimclrd(): OdCmColor;
  setDimclrd(val: OdCmColor): void;
  dimclre(): OdCmColor;
  setDimclre(val: OdCmColor): void;
  dimclrt(): OdCmColor;
  setDimclrt(val: OdCmColor): void;
  dimdec(): number;
  setDimdec(val: number): void;
  dimdle(): number;
  setDimdle(val: number): void;
  dimdli(): number;
  setDimdli(val: number): void;
  dimdsep(): number;
  setDimdsep(val: number): void;
  dimexe(): number;
  setDimexe(val: number): void;
  dimexo(): number;
  setDimexo(val: number): void;
  dimfrac(): number;
  setDimfrac(val: number): void;
  dimgap(): number;
  setDimgap(val: number): void;
  dimjust(): number;
  setDimjust(val: number): void;
  dimldrblk(): OdDbHardPointerId;
  setDimldrblk(val: OdDbHardPointerId): void;
  dimlfac(): number;
  setDimlfac(val: number): void;
  dimlim(): boolean;
  setDimlim(val: boolean): void;
  dimlunit(): number;
  setDimlunit(val: number): void;
  dimlwd(): LineWeight;
  setDimlwd(val: LineWeight): void;
  dimlwe(): LineWeight;
  setDimlwe(val: LineWeight): void;
  dimpost(): OdString;
  setDimpost(val: OdString): void;
  dimrnd(): number;
  setDimrnd(val: number): void;
  dimsah(): boolean;
  setDimsah(val: boolean): void;
  dimscale(): number;
  setDimscale(val: number): void;
  dimsd1(): boolean;
  setDimsd1(val: boolean): void;
  dimsd2(): boolean;
  setDimsd2(val: boolean): void;
  dimse1(): boolean;
  setDimse1(val: boolean): void;
  dimse2(): boolean;
  setDimse2(val: boolean): void;
  dimsoxd(): boolean;
  setDimsoxd(val: boolean): void;
  dimtad(): number;
  setDimtad(val: number): void;
  dimtdec(): number;
  setDimtdec(val: number): void;
  dimtfac(): number;
  setDimtfac(val: number): void;
  dimtih(): boolean;
  setDimtih(val: boolean): void;
  dimtix(): boolean;
  setDimtix(val: boolean): void;
  dimtm(): number;
  setDimtm(val: number): void;
  dimtmove(): number;
  setDimtmove(val: number): void;
  dimtofl(): boolean;
  setDimtofl(val: boolean): void;
  dimtoh(): boolean;
  setDimtoh(val: boolean): void;
  dimtol(): boolean;
  setDimtol(val: boolean): void;
  dimtolj(): number;
  setDimtolj(val: number): void;
  dimtp(): number;
  setDimtp(val: number): void;
  dimtsz(): number;
  setDimtsz(val: number): void;
  dimtvp(): number;
  setDimtvp(val: number): void;
  dimtxsty(): OdDbHardPointerId;
  setDimtxsty(val: OdDbHardPointerId): void;
  dimtxt(): number;
  setDimtxt(val: number): void;
  dimtzin(): number;
  setDimtzin(val: number): void;
  dimupt(): boolean;
  setDimupt(val: boolean): void;
  dimzin(): number;
  setDimzin(val: number): void;
  dimfxl(): number;
  setDimfxl(val: number): void;
  dimfxlon(): boolean;
  setDimfxlon(val: boolean): void;
  dimjogang(): number;
  setDimjogang(val: number): void;
  dimtfill(): number;
  setDimtfill(val: number): void;
  dimtfillclr(): OdCmColor;
  setDimtfillclr(val: OdCmColor): void;
  dimarcsym(): number;
  setDimarcsym(val: number): void;
  dimltype(): OdDbHardPointerId;
  setDimltype(val: OdDbHardPointerId): void;
  dimltex1(): OdDbHardPointerId;
  setDimltex1(val: OdDbHardPointerId): void;
  dimltex2(): OdDbHardPointerId;
  setDimltex2(val: OdDbHardPointerId): void;
  dimtxtdirection(): boolean;
  setDimtxtdirection(val: boolean): void;
  dimmzf(): number;
  setDimmzf(val: number): void;
  dimmzs(): OdString;
  setDimmzs(val: OdString): void;
  dimaltmzf(): number;
  setDimaltmzf(val: number): void;
  dimaltmzs(): OdString;
  setDimaltmzs(val: OdString): void;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): void;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): void;
  dxfInFields_R12(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields_R12(pFiler: OdDbDxfFiler): void;
  subSetAttributes(pTraits: OdGiDrawableTraits): number;
  subWorldDraw(pWd: OdGiWorldDraw): boolean;
  subViewportDraw(pVd: OdGiViewportDraw): void;
  subExplode(entitySet: OdRxObjectPtrArray): OdResult;
  subClose(): void;
  modified(pObject: OdDbObject): void;
  subTransformBy(xfm: OdGeMatrix3d): OdResult;
  subGetTransformedCopy(xfm: OdGeMatrix3d, pCopy: OdDbEntity): OdResult;
  subSetDatabaseDefaults(pDb: OdDbDatabase, doSubents: boolean): void;
  appendToOwner(idPair: OdDbIdPair, pOwnerObject: OdDbObject, ownerIdMap: OdDbIdMapping): void;
  subWblockClone(ownerIdMap: OdDbIdMapping, arg1: OdDbObject, bPrimary: boolean): OdDbObject;
  formatMeasurement(formattedMeasurement: OdString, measurementValue: number, dimensionText: OdString): void;
  explodeGeometry(entitySet: OdRxObjectPtrArray): OdResult;
  dimBlock(openMode: OpenMode): OdDbObject;
  subGetCompoundObjectTransform(xM: OdGeMatrix3d): OdResult;
  isDynamicDimension(): boolean;
  setDynamicDimension(bDynamic: boolean): void;
  isConstraintObject(): boolean;
  isConstraintObject1(isConstraintObject: boolean, hasExpression: boolean, isReferenceConstraint: boolean): OdResult;
  isConstraintDynamic(): boolean;
  setConstraintDynamic(bDynamic: boolean): OdResult;
  shouldParticipateInOPM(): boolean;
  setShouldParticipateInOPM(bShouldParticipate: boolean): void;
  setDIMTALN(val: boolean): void;
  getDIMTALN(): boolean;
  removeTextField(): void;
  fieldToMText(pDimMText: OdDbMText): void;
  fieldFromMText(pDimMText: OdDbMText): void;
  getEcs(): OdGeMatrix3d;
  resetTextDefinedSize(): void;
  setTextDefinedSize(width: number, height: number): void;
  textDefinedSize(width: number, height: number): void;
  subGetGeomExtents(extents: OdGeExtents3d): OdResult;
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbDimensionRecomputePE.html} Additional documentation.
 */
class OdDbDimensionRecomputePE extends OdRxObject {
  static setMeasurementValue(pDimension: OdDbDimension, measurementValue: number): void;
  static resetDimBlockInsertParams(pDimension: OdDbDimension): void;
  static cast(pObj: OdRxObject): OdDbDimensionRecomputePE;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdDbDimensionRecomputePE;
  static rxInit(): void;
  static rxUninit(): void;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  recomputeDimMeasurement(pDimension: OdDbDimension): void;
  recomputeDimBlock(pDimension: OdDbDimension, ctx: OdDbDimensionObjectContextData): void;
  formatMeasurement(pDimension: OdDbDimension, formattedMeasurement: OdString, measurementValue: number, dimensionText: OdString): void;
};

enum DimInspect {
  kShapeRemove = 0,
  kShapeRound = 1,
  kShapeAngular = 2,
  kShapeNone = 4,
  kShapeLabel = 16,
  kShapeRate = 32
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbEllipse.html} Additional documentation.
 */
class OdDbEllipse extends OdDbCurve {
  constructor();
  constructor(arg0: OdDbEllipse);
  static cast(pObj: OdRxObject): OdDbEllipse;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdDbEllipse;
  static rxInit(): void;
  static rxUninit(): void;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  center(): OdGePoint3d;
  setCenter(center: OdGePoint3d): void;
  normal(): OdGeVector3d;
  majorAxis(): OdGeVector3d;
  majorRadius(): number;
  minorAxis(): OdGeVector3d;
  minorRadius(): number;
  radiusRatio(): number;
  setRadiusRatio(radiusRatio: number): void;
  startAngle(): number;
  setStartAngle(startAngle: number): OdResult;
  endAngle(): number;
  setEndAngle(endAngle: number): OdResult;
  paramAtAngle(angle: number): number;
  angleAtParam(param: number): number;
  get(center: OdGePoint3d, unitNormal: OdGeVector3d, majorAxis: OdGeVector3d, radiusRatio: number, startAngle: number, endAngle: number): void;
  set(center: OdGePoint3d, unitNormal: OdGeVector3d, majorAxis: OdGeVector3d, radiusRatio: number, startAngle: number, endAngle: number): void;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): void;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): void;
  subWorldDraw(pWd: OdGiWorldDraw): boolean;
  isClosed(): boolean;
  isPeriodic(): boolean;
  isPlanar(): boolean;
  getPlane(gePlane: OdGePlane, gePlanarity: Planarity): OdResult;
  getStartParam(startParam: number): OdResult;
  setStartParam(startParam: number): OdResult;
  getEndParam(endParam: number): OdResult;
  setEndParam(endParam: number): OdResult;
  getStartPoint(startPoint: OdGePoint3d): OdResult;
  getEndPoint(endPoint: OdGePoint3d): OdResult;
  getPointAtParam(param: number, pointOnCurve: OdGePoint3d): OdResult;
  getParamAtPoint(pointOnCurve: OdGePoint3d, param: number): OdResult;
  getDistAtParam(param: number, dist: number): OdResult;
  getParamAtDist(dist: number, param: number): OdResult;
  getFirstDeriv(param: number, firstDeriv: OdGeVector3d): OdResult;
  getSecondDeriv(param: number, secondDeriv: OdGeVector3d): OdResult;
  getArea(vArea: number): OdResult;
  subTransformBy(xfm: OdGeMatrix3d): OdResult;
  setFromOdGeCurve(geCurve: OdGeCurve3d, normal: OdGeVector3d, tol: OdGeTol): OdResult;
  reverseCurve(): OdResult;
  getOffsetCurves(offsetDist: number, offsetCurves: OdRxObjectPtrArray): OdResult;
  getSplitCurves(points: OdGePoint3dArray, curveSegments: OdRxObjectPtrArray): OdResult;
  getSplitCurves1(params: OdGeDoubleArray, curveSegments: OdRxObjectPtrArray): OdResult;
};

enum Planarity {
  kNonPlanar = 0,
  kPlanar = 1,
  kLinear = 2
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbEntity.html} Additional documentation.
 */
class OdDbEntity extends OdDbObject {
  constructor();
  constructor(arg0: OdDbEntity);
  static cast(pObj: OdRxObject): OdDbEntity;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdDbEntity;
  static rxInit(): void;
  static rxUninit(): void;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  blockId(): OdDbObjectId;
  color(): OdCmColor;
  setColor(color: OdCmColor, doSubents: boolean): OdResult;
  colorIndex(): number;
  entityColor(): OdCmEntityColor;
  setColorIndex(colorIndex: number, doSubents: boolean): OdResult;
  colorId(): OdDbObjectId;
  setColorId(colorId: OdDbObjectId, doSubents: boolean): OdResult;
  transparency(): OdCmTransparency;
  setTransparency(transparency: OdCmTransparency, doSubents: boolean): OdResult;
  plotStyleName(): OdString;
  getPlotStyleNameId(plotStyleNameId: OdDbObjectId): PlotStyleNameType;
  setPlotStyleName(plotStyleName: OdString, doSubents: boolean): OdResult;
  setPlotStyleName1(plotStyleNameType: PlotStyleNameType, plotStyleNameId: OdDbObjectId, doSubents: boolean): OdResult;
  layer(): OdString;
  layerId(): OdDbObjectId;
  setLayer(layerName: OdString, doSubents: boolean, allowHiddenLayer: boolean): OdResult;
  setLayer1(layerId: OdDbObjectId, doSubents: boolean, allowHiddenLayer: boolean): OdResult;
  linetype(): OdString;
  linetypeId(): OdDbObjectId;
  setLinetype(linetypeName: OdString, doSubents: boolean): OdResult;
  setLinetype1(linetypeID: OdDbObjectId, doSubents: boolean): OdResult;
  material(): OdString;
  materialId(): OdDbObjectId;
  setMaterial(materialName: OdString, doSubents: boolean): OdResult;
  setMaterial1(materialID: OdDbObjectId, doSubents: boolean): OdResult;
  visualStyleId(vstype: VisualStyleType): OdDbObjectId;
  setVisualStyle(visualStyleId: OdDbObjectId, vstype: VisualStyleType, doSubents: boolean): OdResult;
  materialMapper(): OdGiMapper;
  setMaterialMapper(mapper: OdGiMapper, doSubents: boolean): void;
  linetypeScale(): number;
  setLinetypeScale(linetypeScale: number, doSubents: boolean): OdResult;
  visibility(): Visibility;
  setVisibility(visibility: Visibility, doSubents: boolean): OdResult;
  tempVisibility(): Visibility;
  setTempVisibility(visibility: Visibility): void;
  lineWeight(): LineWeight;
  setLineWeight(lineWeight: LineWeight, doSubents: boolean): OdResult;
  castShadows(): boolean;
  setCastShadows(castShadows: boolean): void;
  receiveShadows(): boolean;
  setReceiveShadows(receiveShadows: boolean): void;
  collisionType(): CollisionType;
  setPropertiesFrom(pSource: OdDbEntity, doSubents: boolean): void;
  isPlanar(): boolean;
  getPlane(plane: OdGePlane, planarity: Planarity): OdResult;
  subHandOverTo(pNewObject: OdDbObject): void;
  transformBy(xfm: OdGeMatrix3d): OdResult;
  getTransformedCopy(xfm: OdGeMatrix3d, pCopy: OdDbEntity): OdResult;
  explode(entitySet: OdRxObjectPtrArray): OdResult;
  explodeToBlock(pBlockRecord: OdDbBlockTableRecord, ids: OdDbObjectIdArray): OdResult;
  explodeGeometry(entitySet: OdRxObjectPtrArray): OdResult;
  explodeGeometryToBlock(pBlockRecord: OdDbBlockTableRecord, ids: OdDbObjectIdArray): OdResult;
  subWorldDraw(pWd: OdGiWorldDraw): boolean;
  subViewportDraw(pVd: OdGiViewportDraw): void;
  setDatabaseDefaults(pDb: OdDbDatabase, doSubents: boolean): void;
  subSetDatabaseDefaults(pDb: OdDbDatabase, doSubents: boolean): void;
  applyPartialUndo(pUndoFiler: OdDbDwgFiler, pClassObj: OdRxClass): void;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): void;
  appendToOwner(idPair: OdDbIdPair, pOwnerObject: OdDbObject, ownerIdMap: OdDbIdMapping): void;
  dxfIn(pFiler: OdDbDxfFiler): OdResult;
  dxfOut(pFiler: OdDbDxfFiler): void;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): void;
  dxfInFields_R12(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields_R12(pFiler: OdDbDxfFiler): void;
  drawable(): OdGiDrawable;
  subSetAttributes(pTraits: OdGiDrawableTraits): number;
  subList(): void;
  subSwapIdWith(otherId: OdDbObjectId, swapXdata: boolean, swapExtDict: boolean): void;
  subErase(erasing: boolean): OdResult;
  subOpen(mode: OpenMode): OdResult;
  recordGraphicsModified(graphicsModified: boolean): void;
  copyFrom(pSource: OdRxObject): void;
  list(): void;
  getGeomExtents(extents: OdGeExtents3d): OdResult;
  highlight(bDoIt: boolean, pSubId: OdDbFullSubentPath, highlightAll: boolean): void;
  getOsnapPoints(osnapMode: OsnapMode, gsSelectionMark: number, pickPoint: OdGePoint3d, lastPoint: OdGePoint3d, xWorldToEye: OdGeMatrix3d, snapPoints: OdGePoint3dArray): OdResult;
  getOsnapPoints1(osnapMode: OsnapMode, gsSelectionMark: number, pickPoint: OdGePoint3d, lastPoint: OdGePoint3d, xWorldToEye: OdGeMatrix3d, snapPoints: OdGePoint3dArray, insertionMat: OdGeMatrix3d): OdResult;
  isContentSnappable(): boolean;
  getGripPoints(gripPoints: OdGePoint3dArray): OdResult;
  moveGripPointsAt(indices: OdIntArray, offset: OdGeVector3d): OdResult;
  getGripPoints1(grips: OdDbGripDataPtrArray, curViewUnitSize: number, gripSize: number, curViewDir: OdGeVector3d, bitFlags: number): OdResult;
  moveGripPointsAt1(grips: OdDbVoidPtrArray, offset: OdGeVector3d, bitFlags: number): OdResult;
  getStretchPoints(stretchPoints: OdGePoint3dArray): OdResult;
  moveStretchPointsAt(indices: OdIntArray, offset: OdGeVector3d): OdResult;
  dragStatus(status: DragStat): void;
  gripStatus(status: GripStat): void;
  cloneMeForDragging(): boolean;
  hideMeForDragging(): boolean;
  saveAs(pWd: OdGiWorldDraw, ver: DwgVersion): void;
  getCompoundObjectTransform(xM: OdGeMatrix3d): OdResult;
  intersectWith(pEnt: OdDbEntity, intType: Intersect, points: OdGePoint3dArray, thisGsMarker: number, otherGsMarker: number): OdResult;
  intersectWith1(pEnt: OdDbEntity, intType: Intersect, projPlane: OdGePlane, points: OdGePoint3dArray, thisGsMarker: number, otherGsMarker: number): OdResult;
  boundingBoxIntersectWith(pEnt: OdDbEntity, intType: Intersect, points: OdGePoint3dArray, thisGsMarker: number, otherGsMarker: number): OdResult;
  boundingBoxIntersectWith1(pEnt: OdDbEntity, intType: Intersect, projPlane: OdGePlane, points: OdGePoint3dArray, thisGsMarker: number, otherGsMarker: number): OdResult;
  getSubentPathsAtGsMarker(type: SubentType, gsMark: number, pickPoint: OdGePoint3d, xfm: OdGeMatrix3d, subentPaths: OdDbFullSubentPathArray, pEntAndInsertStack: OdDbObjectIdArray): OdResult;
  getGsMarkersAtSubentPath(subPath: OdDbFullSubentPath, gsMarkers: OdGsMarkerArray): OdResult;
  getGripPointsAtSubentPath(path: OdDbFullSubentPath, grips: OdDbGripDataPtrArray, curViewUnitSize: number, gripSize: number, curViewDir: OdGeVector3d, bitflags: number): OdResult;
  moveGripPointsAtSubentPaths(paths: OdDbFullSubentPathArray, gripAppData: OdDbVoidPtrArray, offset: OdGeVector3d, bitflags: number): OdResult;
  deleteSubentPaths(paths: OdDbFullSubentPathArray): OdResult;
  addSubentPaths(paths: OdDbFullSubentPathArray): OdResult;
  subentPtr(path: OdDbFullSubentPath): OdDbEntity;
  transformSubentPathsBy(paths: OdDbFullSubentPathArray, xform: OdGeMatrix3d): OdResult;
  getSubentPathGeomExtents(path: OdDbFullSubentPath, extents: OdGeExtents3d): OdResult;
  subentGripStatus(status: GripStat, subentity: OdDbFullSubentPath): void;
  getEcs(): OdGeMatrix3d;
};

enum VisualStyleType {
  kFullVisualStyle = 0,
  kFaceVisualStyle = 1,
  kEdgeVisualStyle = 2
};

enum EntSaveAsType {
  kNoSave = 0,
  kSaveAsR12 = 1,
  kSaveAsR13 = 2,
  kSaveAsR14 = 3
};

class OdDbEntityPtrArray extends OdArray<OdDbEntity> { };

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbExtrudedSurface.html} Additional documentation.
 */
class OdDbExtrudedSurface extends OdDbSurface {
  constructor();
  constructor(arg0: OdDbExtrudedSurface);
  static cast(pObj: OdRxObject): OdDbExtrudedSurface;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdDbExtrudedSurface;
  static rxInit(): void;
  static rxUninit(): void;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  createExtrudedSurface(pSweepEnt: OdDbEntity, directionVec: OdGeVector3d, sweepOptions: OdDbSweepOptions, pSat: OdStreamBuf): OdResult;
  getSweepEntity(): OdDbEntity;
  getSweepVec(): OdGeVector3d;
  setSweepVec(sweepVec: OdGeVector3d): void;
  getHeight(): number;
  setHeight(height: number): void;
  getSweepOptions(sweepOptions: OdDbSweepOptions): void;
  setSweepOptions(sweepOptions: OdDbSweepOptions): void;
  setExtrude(sweepVec: OdGeVector3d, sweepOptions: OdDbSweepOptions): OdResult;
  subTransformBy(xfm: OdGeMatrix3d): OdResult;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): void;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): void;
  isDependent(): boolean;
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbFace.html} Additional documentation.
 */
class OdDbFace extends OdDbEntity {
  constructor();
  constructor(arg0: OdDbFace);
  static cast(pObj: OdRxObject): OdDbFace;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdDbFace;
  static rxInit(): void;
  static rxUninit(): void;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  getVertexAt(vertexIndex: number, vertexValue: OdGePoint3d): void;
  setVertexAt(vertexIndex: number, vertexValue: OdGePoint3d): void;
  isEdgeVisibleAt(edgeIndex: number): boolean;
  makeEdgeVisibleAt(edgeIndex: number): void;
  makeEdgeInvisibleAt(edgeIndex: number): void;
  getPlane(plane: OdGePlane, planarity: Planarity): OdResult;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): void;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): void;
  dxfInFields_R12(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields_R12(pFiler: OdDbDxfFiler): void;
  subWorldDraw(pWd: OdGiWorldDraw): boolean;
  subViewportDraw(pVd: OdGiViewportDraw): void;
  subTransformBy(xfm: OdGeMatrix3d): OdResult;
  subGetSubentPathsAtGsMarker(type: SubentType, gsMark: number, arg2: OdGePoint3d, arg3: OdGeMatrix3d, subentPaths: OdDbFullSubentPathArray, pEntAndInsertStack: OdDbObjectIdArray): OdResult;
  subGetGsMarkersAtSubentPath(subPath: OdDbFullSubentPath, gsMarkers: OdGsMarkerArray): OdResult;
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbFaceRecord.html} Additional documentation.
 */
class OdDbFaceRecord extends OdDbEntity {
  constructor();
  constructor(arg0: OdDbFaceRecord);
  static cast(pObj: OdRxObject): OdDbFaceRecord;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdDbFaceRecord;
  static rxInit(): void;
  static rxUninit(): void;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  getVertexAt(cornerIndex: number): number;
  setVertexAt(cornerIndex: number, vertexIndex: number): void;
  isEdgeVisibleAt(edgeIndex: number): boolean;
  makeEdgeVisibleAt(edgeIndex: number): void;
  makeEdgeInvisibleAt(edgeIndex: number): void;
  dxfInFields_R12(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields_R12(pFiler: OdDbDxfFiler): void;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): void;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): void;
  subErase(erasing: boolean): OdResult;
  subGetGeomExtents(extents: OdGeExtents3d): OdResult;
};

class OdDbVoidPtrArray extends OdArray<number> { };

class OdDbGripDataArray extends OdArray<OdDbGripData> { };

class OdDbGripDataPtrArray extends OdArray<OdDbGripData> { };

class OdDbDimDataPtrArray extends OdArray<OdDbDimData> { };

enum DragStat {
  kDragStart = 0,
  kDragEnd = 1,
  kDragAbort = 2
};

enum DrawType {
  kWarmGrip = 0,
  kHoverGrip = 1,
  kHotGrip = 2,
  kDragImageGrip = 3
};

enum GripStatus {
  kGripStart = 0,
  kGripEnd = 1,
  kGripAbort = 2,
  kStretch = 3,
  kMove = 4,
  kRotate = 5,
  kScale = 6,
  kMirror = 7,
  kDimFocusChanged = 8,
  kPopUpMenu = 9
};

enum GripFlags {
  kSkipWhenShared = 1,
  kDisableRubberBandLine = 2,
  kDisableModeKeywords = 4,
  kDrawAtDragImageGripPoint = 8,
  kTriggerGrip = 16,
  kTurnOnForcedPick = 32,
  kMapGripHotToRtClk = 64,
  kGizmosEnabled = 128,
  kGripIsPerViewport = 256
};

enum GripContextFlags {
  kSharedGrip = 1,
  kMultiHotGrip = 2
};

enum GetGripPointsFlags {
  kGripPointsOnly = 1,
  kCyclableGripsOnly = 2,
  kDynamicDimMode = 4
};

enum GripStat {
  kGripsDone = 0,
  kGripsToBeDeleted = 1,
  kDimDataToBeDeleted = 2
};

enum MoveGripPointsFlags {
  kOsnapped = 1,
  kPolar = 2,
  kOtrack = 4,
  kZdir = 8,
  kKeyboard = 16
};

enum OsnapMask {
  kOsMaskEnd = 1,
  kOsMaskMid = 2,
  kOsMaskCen = 4,
  kOsMaskNode = 8,
  kOsMaskQuad = 16,
  kOsMaskInt = 32,
  kOsMaskIns = 64,
  kOsMaskPerp = 128,
  kOsMaskTan = 256,
  kOsMaskNear = 512,
  kOsMaskQuick = 1024,
  kOsMaskApint = 2048,
  kOsMaskImmediate = 65536,
  kOsMaskAllowTan = 131072,
  kOsMaskDisablePerp = 262144,
  kOsMaskRelCartesian = 524288,
  kOsMaskRelPolar = 1048576,
  kOsMaskNoneOverride = 2097152
};

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdDbGripData.html} Additional documentation.
 */
class OdDbGripData {
  constructor();
  constructor(arg0: OdDbGripData);
  gripPoint(): OdGePoint3d;
  setGripPoint(pt: OdGePoint3d): void;
  appDataOdRxClass(): OdRxClass;
  setAppDataOdRxClass(pClass: OdRxClass): void;
  alternateBasePoint(): OdGePoint3d;
  setAlternateBasePoint(altBasePt: OdGePoint3d): void;
  bitFlags(): number;
  setBitFlags(flags: number): void;
  skipWhenShared(): boolean;
  setSkipWhenShared(skip: boolean): void;
  isRubberBandLineDisabled(): boolean;
  disableRubberBandLine(disable: boolean): void;
  areModeKeywordsDisabled(): boolean;
  disableModeKeywords(disable: boolean): void;
  drawAtDragImageGripPoint(): boolean;
  setDrawAtDragImageGripPoint(atDragPoint: boolean): void;
  triggerGrip(): boolean;
  setTriggerGrip(trigger: boolean): void;
  forcedPickOn(): boolean;
  setForcedPickOn(on: boolean): void;
  mapGripHotToRtClk(): boolean;
  setMapGripHotToRtClk(on: boolean): void;
  gizmosEnabled(): boolean;
  setGizmosEnabled(on: boolean): void;
  gripIsPerViewport(): boolean;
  setGripIsPerViewport(on: boolean): void;
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbGroupIterator.html} Additional documentation.
 */
class OdDbGroupIterator extends OdRxObject {
  static cast(pObj: OdRxObject): OdDbGroupIterator;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdDbGroupIterator;
  static rxInit(): void;
  static rxUninit(): void;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  getObject(openMode: OpenMode): OdDbObject;
  objectId(): OdDbObjectId;
  done(): boolean;
  next(): boolean;
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbGroup.html} Additional documentation.
 */
class OdDbGroup extends OdDbObject {
  constructor();
  constructor(arg0: OdDbGroup);
  static cast(pObj: OdRxObject): OdDbGroup;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdDbGroup;
  static rxInit(): void;
  static rxUninit(): void;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  newIterator(): OdDbGroupIterator;
  description(): OdString;
  setDescription(description: OdString): void;
  isSelectable(): boolean;
  setSelectable(selectable: boolean): void;
  name(): OdString;
  setName(name: OdString): void;
  isNotAccessible(): boolean;
  isAnonymous(): boolean;
  setAnonymous(): void;
  append(objectId: OdDbObjectId): void;
  append1(objectIds: OdDbObjectIdArray): void;
  prepend(objectId: OdDbObjectId): void;
  prepend1(objectIds: OdDbObjectIdArray): void;
  insertAt(insertionIndex: number, objectId: OdDbObjectId): void;
  insertAt1(insertionIndex: number, objectIds: OdDbObjectIdArray): void;
  remove(objectId: OdDbObjectId): void;
  removeAt(entityIndex: number): void;
  remove1(objectIds: OdDbObjectIdArray): void;
  removeAt1(index: number, objectIds: OdDbObjectIdArray): void;
  replace(oldId: OdDbObjectId, newId: OdDbObjectId): void;
  transfer(fromIndex: number, toIndex: number, numItems: number): void;
  clear(): void;
  numEntities(): number;
  has(pEntity: OdDbEntity): boolean;
  allEntityIds(objectIds: OdDbObjectIdArray): number;
  getIndex(objectId: OdDbObjectId, index: number): void;
  reverse(): void;
  setColorIndex(colorIndex: number): void;
  setColor(color: OdCmColor): void;
  setLayer(layer: OdString): void;
  setLayer1(layerId: OdDbObjectId): void;
  setLinetype(linetype: OdString): void;
  setLinetype1(linetypeID: OdDbObjectId): void;
  setLinetypeScale(linetypeScale: number): void;
  setVisibility(visibility: Visibility): void;
  setPlotStyleName(plotStyleName: OdString): void;
  setLineweight(lineWeight: LineWeight): void;
  setHighlight(newVal: boolean): OdResult;
  setMaterial(materialName: OdString): OdResult;
  setMaterial1(materialID: OdDbObjectId): OdResult;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): void;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): void;
  copied(pObject: OdDbObject, pNewObject: OdDbObject): void;
  appendToOwner(idPair: OdDbIdPair, pOwnerObject: OdDbObject, ownerIdMap: OdDbIdMapping): void;
  subClose(): void;
  subWblockClone(ownerIdMap: OdDbIdMapping, arg1: OdDbObject, bPrimary: boolean): OdDbObject;
  subDeepClone(ownerIdMap: OdDbIdMapping, arg1: OdDbObject, bPrimary: boolean): OdDbObject;
};

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdDbHandle.html} Additional documentation.
 */
class OdDbHandle {
  constructor();
  constructor(value: OdDbHandle);
  ascii(): OdString;
  isNull(): boolean;
  bytes(bytes: number): void;
  static ctr1(value: number): OdDbHandle;
  static ctr2(value: OdString): OdDbHandle;
  static ctr3(value: OdAnsiString): OdDbHandle;
  static ctr4(value: number): OdDbHandle;
  static ctr5(value: number): OdDbHandle;
};

class OdHandleArray extends OdArray<OdDbHandle> { };

class EdgeArray extends OdArray<OdGeCurve2d> { };

enum HatchLoopType {
  kDefault = 0,
  kExternal = 1,
  kPolyline = 2,
  kDerived = 4,
  kTextbox = 8,
  kOutermost = 16,
  kNotClosed = 32,
  kSelfIntersecting = 64,
  kTextIsland = 128,
  kDuplicate = 256,
  kIsAnnotative = 512,
  kDoesNotSupportScale = 1024,
  kForceAnnoAllVisible = 2048,
  kOrientToPaper = 4096,
  kIsAnnotativeBlock = 8192
};

enum HatchEdgeType {
  kNone = 0,
  kLine = 1,
  kCirArc = 2,
  kEllArc = 3,
  kSpline = 4
};

enum HatchStyle {
  kNormal = 0,
  kOuter = 1,
  kIgnore = 2
};

enum GradientPatternType {
  kPreDefinedGradient = 0,
  kUserDefinedGradient = 1
};

enum HatchObjectType {
  kHatchObject = 0,
  kGradientObject = 1
};

enum HatchPatternTypeClosure {
  kNoneClosure = 0,
  kSolidClosure = 1,
  kPatternClosure = 2,
  kAnyClosure = 3
};

enum HatchPatternType {
  kUserDefined = 0,
  kPreDefined = 1,
  kCustomDefined = 2
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbHatch.html} Additional documentation.
 */
class OdDbHatch extends OdDbEntity {
  constructor();
  constructor(arg0: OdDbHatch);
  static cast(pObj: OdRxObject): OdDbHatch;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdDbHatch;
  static rxInit(): void;
  static rxUninit(): void;
  static makeClosedLoop(edgePtrs: EdgeArray, dbObjIds: OdDbObjectIdArray, gapTolerance: OdGeTol, isEdgeArrayConsistent: boolean): OdResult;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  elevation(): number;
  setElevation(elevation: number): void;
  normal(): OdGeVector3d;
  setNormal(normal: OdGeVector3d): void;
  isPlanar(): boolean;
  getPlane(plane: OdGePlane, planarity: Planarity): OdResult;
  numLoops(): number;
  loopTypeAt(loopIndex: number): number;
  getLoopAt(loopIndex: number, edgePtrs: EdgeArray): void;
  getLoopAt1(loopIndex: number, vertices: OdGePoint2dArray, bulges: OdGeDoubleArray): void;
  appendLoop(loopType: number, edgePtrs: EdgeArray): void;
  appendLoop1(loopType: number, vertices: OdGePoint2dArray, bulges: OdGeDoubleArray): void;
  appendLoop2(loopType: number, dbObjIds: OdDbObjectIdArray, bCheckLoop: boolean): void;
  appendOrderedLoop(loopType: number, edgePtrs: EdgeArray): void;
  insertLoopAt(loopIndex: number, loopType: number, edgePtrs: EdgeArray): void;
  insertLoopAt1(loopIndex: number, loopType: number, vertices: OdGePoint2dArray, bulges: OdGeDoubleArray): void;
  insertLoopAt2(loopIndex: number, loopType: number, dbObjIds: OdDbObjectIdArray, bCheckLoop: boolean): void;
  removeLoopAt(loopIndex: number): void;
  associative(): boolean;
  setAssociative(isAssociative: boolean): void;
  getAssocObjIdsAt(loopIndex: number, dbObjIds: OdDbObjectIdArray): void;
  getAssocObjIds(dbObjIds: OdDbObjectIdArray): void;
  setAssocObjIdsAt(loopIndex: number, dbObjIds: OdDbObjectIdArray): void;
  removeAssocObjIds(): void;
  patternType(): HatchPatternType;
  isSolidFill(): boolean;
  patternName(): OdString;
  setPattern(patType: HatchPatternType, patName: OdString, closureType: HatchPatternTypeClosure): void;
  setPattern1(patType: HatchPatternType, patName: OdString, angle: number, scale: number, pat: OdHatchPattern, originPoint: OdGePoint2d): void;
  patternAngle(): number;
  setPatternAngle(angle: number): void;
  patternSpace(): number;
  setPatternSpace(space: number): void;
  patternScale(): number;
  setPatternScale(scale: number): void;
  patternDouble(): boolean;
  setPatternDouble(isDouble: boolean): void;
  numPatternDefinitions(): number;
  getPatternDefinitionAt(lineIndex: number, lineAngle: number, baseX: number, baseY: number, offsetX: number, offsetY: number, dashes: OdGeDoubleArray): void;
  regeneratePattern(forceReload: boolean): void;
  hatchStyle(): HatchStyle;
  setHatchStyle(hatchStyle: HatchStyle): void;
  numSeedPoints(): number;
  getSeedPointAt(seedIndex: number): OdGePoint2d;
  setSeedPointAt(seedIndex: number, point: OdGePoint2d): void;
  appendSeedPoint(point: OdGePoint2d): void;
  removeSeedPointAt(seedPointIndex: number): void;
  pixelSize(): number;
  setPixelSize(pixelSize: number): void;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): void;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): void;
  subWorldDraw(pWd: OdGiWorldDraw): boolean;
  subViewportDraw(pWd: OdGiViewportDraw): void;
  subTransformBy(xfm: OdGeMatrix3d): OdResult;
  subGetTransformedCopy(xfm: OdGeMatrix3d, pCopy: OdDbEntity): OdResult;
  decomposeForSave(ver: DwgVersion, replaceId: OdDbObjectId, exchangeXData: boolean): OdDbObject;
  subSetDatabaseDefaults(pDb: OdDbDatabase, doSubents: boolean): void;
  evaluateHatch(bUnderestimateNumLines: boolean): OdResult;
  numHatchLines(): number;
  getHatchLineDataAt(lineIndex: number, startPoint: OdGePoint2d, endPoint: OdGePoint2d): void;
  getHatchLinesData(startPoints: OdGePoint2dArray, endPoints: OdGePoint2dArray): void;
  subExplode(entitySet: OdRxObjectPtrArray): OdResult;
  openedForModify(pObject: OdDbObject): void;
  modifiedGraphics(pObject: OdDbObject): void;
  hatchObjectType(): HatchObjectType;
  setHatchObjectType(hatchObjectType: HatchObjectType): void;
  isGradient(): boolean;
  isHatch(): boolean;
  gradientType(): GradientPatternType;
  gradientName(): OdString;
  setGradient(gradientType: GradientPatternType, gradientName: OdString): void;
  gradientAngle(): number;
  setGradientAngle(angle: number): void;
  getGradientColors(colors: OdCmColorArray, values: OdGeDoubleArray): void;
  setGradientColors(count: number, colors: OdCmColor, values: number): void;
  getGradientOneColorMode(): boolean;
  setGradientOneColorMode(oneColorMode: boolean): void;
  getShadeTintValue(): number;
  setShadeTintValue(luminance: number): void;
  gradientShift(): number;
  setGradientShift(gradientShift: number): void;
  evaluateGradientColorAt(value: number, color: OdCmColor): void;
  appendToOwner(idPair: OdDbIdPair, pOwnerObject: OdDbObject, ownerIdMap: OdDbIdMapping): void;
  subClose(): void;
  setRawPattern(patType: HatchPatternType, patName: OdString, angle: number, scale: number, pat: OdHatchPattern, closureType: HatchPatternTypeClosure): void;
  getPattern(): OdHatchPatternLine;
  getRawPattern(): OdHatchPatternLine;
  setOriginPoint(pt: OdGePoint2d): void;
  originPoint(): OdGePoint2d;
  explodeGeometry(entitySet: OdRxObjectPtrArray): OdResult;
  getArea(area: number): OdResult;
  getRegionArea(): OdDbRegion;
  markModifiedLoop(loopIndex: number): OdResult;
  markModifiedLoop1(entityHandle: OdDbHandle): OdResult;
  unmarkModifiedLoop(loopIndex: number): OdResult;
  unmarkModifiedLoop1(entityHandle: OdDbHandle): OdResult;
  getMarkedModifiedLoops(indicesMarkedLoops: OdUInt16Array): void;
  clearMarkModifiedLoops(): void;
  updateMarkedLoops(): OdResult;
  setShadeTintValueAndColor2(value: number): OdResult;
  subGetSubentPathsAtGsMarker(type: SubentType, gsMark: number, pickPoint: OdGePoint3d, xfm: OdGeMatrix3d, subentPaths: OdDbFullSubentPathArray, pEntAndInsertStack: OdDbObjectIdArray): OdResult;
  subGetGsMarkersAtSubentPath(subPath: OdDbFullSubentPath, gsMarkers: OdGsMarkerArray): OdResult;
  subSubentPtr(path: OdDbFullSubentPath): OdDbEntity;
  backgroundColor(): OdCmColor;
  setBackgroundColor(color: OdCmColor): void;
  getEcs(): OdGeMatrix3d;
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbIdBufferIterator.html} Additional documentation.
 */
class OdDbIdBufferIterator extends OdRxObject {
  start(): void;
  done(): boolean;
  next(): void;
  id(): OdDbObjectId;
  seek(id: OdDbObjectId): boolean;
  removeCurrentId(): void;
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbIdBuffer.html} Additional documentation.
 */
class OdDbIdBuffer extends OdDbObject {
  constructor();
  constructor(arg0: OdDbIdBuffer);
  static cast(pObj: OdRxObject): OdDbIdBuffer;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdDbIdBuffer;
  static rxInit(): void;
  static rxUninit(): void;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  newIterator(): OdDbIdBufferIterator;
  addId(id: OdDbObjectId): void;
  addIds(ids: OdDbObjectIdArray): void;
  numIds(): number;
  removeAll(): void;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): void;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): void;
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbIdPair.html} Additional documentation.
 */
class OdDbIdPair {
  constructor();
  constructor(source: OdDbIdPair);
  constructor(key: OdDbObjectId, value: OdDbObjectId, cloned: boolean, ownerXlated: boolean, primary: boolean);
  key(): OdDbObjectId;
  value(): OdDbObjectId;
  isCloned(): boolean;
  isPrimary(): boolean;
  isOwnerXlated(): boolean;
  set(key: OdDbObjectId, value: OdDbObjectId, cloned: boolean, ownerXlated: boolean, arg4: boolean): OdDbIdPair;
  setKey(key: OdDbObjectId): void;
  setValue(value: OdDbObjectId): void;
  setCloned(cloned: boolean): void;
  setPrimary(primary: boolean): void;
  setOwnerXlated(ownerXlated: boolean): void;
  static ctr1(key: OdDbObjectId): OdDbIdPair;
};

enum DeepCloneType {
  kDcCopy = 0,
  kDcExplode = 1,
  kDcBlock = 2,
  kDcXrefBind = 3,
  kDcSymTableMerge = 4,
  kDcInsert = 6,
  kDcWblock = 7,
  kDcObjects = 8,
  kDcXrefInsert = 9,
  kDcInsertCopy = 10,
  kDcWblkObjects = 11
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbIdMapping.html} Additional documentation.
 */
class OdDbIdMapping extends OdRxObject {
  static cast(pObj: OdRxObject): OdDbIdMapping;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdDbIdMapping;
  static rxInit(): void;
  static rxUninit(): void;
  static createObject1(arg0: DeepCloneType): OdDbIdMapping;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  assign(idPair: OdDbIdPair): void;
  compute(idPair: OdDbIdPair): boolean;
  del(key: OdDbObjectId): boolean;
  newIterator(): OdDbIdMappingIter;
  destDb(): OdDbDatabase;
  setDestDb(pDb: OdDbDatabase): void;
  origDb(): OdDbDatabase;
  insertingXrefBlockId(): OdDbObjectId;
  deepCloneContext(): DeepCloneType;
  duplicateRecordCloning(): DuplicateRecordCloning;
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbIdMappingIter.html} Additional documentation.
 */
class OdDbIdMappingIter extends OdRxObject {
  static cast(pObj: OdRxObject): OdDbIdMappingIter;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdDbIdMappingIter;
  static rxInit(): void;
  static rxUninit(): void;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  start(): void;
  getMap(idPair: OdDbIdPair): void;
  next(): void;
  done(): boolean;
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbLayerTable.html} Additional documentation.
 */
class OdDbLayerTable extends OdDbSymbolTable {
  constructor();
  constructor(arg0: OdDbLayerTable);
  static cast(pObj: OdRxObject): OdDbLayerTable;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdDbLayerTable;
  static rxInit(): void;
  static rxUninit(): void;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  hasUnreconciledLayers(): boolean;
  getUnreconciledLayers(idArray: OdDbObjectIdArray): OdResult;
  generateUsageData(): void;
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbLayerTableRecord.html} Additional documentation.
 */
class OdDbLayerTableRecord extends OdDbSymbolTableRecord {
  constructor();
  constructor(arg0: OdDbLayerTableRecord);
  static cast(pObj: OdRxObject): OdDbLayerTableRecord;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdDbLayerTableRecord;
  static rxInit(): void;
  static rxUninit(): void;
  static isHidden1(idLayer: OdDbObjectId): boolean;
  static isReconciled1(idLayer: OdDbObjectId): boolean;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  isFrozen(): boolean;
  setIsFrozen(bStatus: boolean): void;
  isOff(): boolean;
  setIsOff(bStatus: boolean): void;
  VPDFLT(): boolean;
  setVPDFLT(bStatus: boolean): void;
  isLocked(): boolean;
  setIsLocked(bStatus: boolean): void;
  isPlottable(): boolean;
  setIsPlottable(bStatus: boolean): void;
  isHidden(): boolean;
  setIsHidden(bStatus: boolean): void;
  isReconciled(): boolean;
  setIsReconciled(bStatus: boolean): void;
  transparency(): OdCmTransparency;
  transparency1(idViewport: OdDbObjectId, pIsOverride: boolean): OdCmTransparency;
  setTransparency(cmTransparency: OdCmTransparency): OdResult;
  setTransparency1(cmTransparency: OdCmTransparency, idViewport: OdDbObjectId): void;
  color(): OdCmColor;
  color1(viewportId: OdDbObjectId, pIsOverride: boolean): OdCmColor;
  setColor(cmColor: OdCmColor): void;
  setColor1(cmColor: OdCmColor, idViewport: OdDbObjectId): void;
  colorIndex(): number;
  setColorIndex(idxColor: number): void;
  lineWeight(): LineWeight;
  lineWeight1(idViewport: OdDbObjectId, pIsOverride: boolean): LineWeight;
  setLineWeight(kLnWtEnum: LineWeight): void;
  setLineWeight1(kLnWtEnum: LineWeight, idViewport: OdDbObjectId): void;
  linetypeObjectId(): OdDbObjectId;
  linetypeObjectId1(idViewport: OdDbObjectId, pIsOverride: boolean): OdDbObjectId;
  setLinetypeObjectId(idLinetype: OdDbObjectId): void;
  setLinetypeObjectId1(idLinetype: OdDbObjectId, idViewport: OdDbObjectId): void;
  materialId(): OdDbObjectId;
  setMaterialId(idMaterial: OdDbObjectId): void;
  plotStyleName(): OdString;
  plotStyleName1(idViewport: OdDbObjectId, pIsOverride: boolean): OdString;
  plotStyleNameId(): OdDbObjectId;
  plotStyleNameId1(idViewport: OdDbObjectId, pIsOverride: boolean): OdDbObjectId;
  setPlotStyleName(sPlotStyleName: OdString): OdResult;
  setPlotStyleName1(sPlotStyleName: OdString, idViewport: OdDbObjectId): void;
  setPlotStyleName2(idPlotStyle: OdDbObjectId): void;
  setPlotStyleName3(idPlotStyle: OdDbObjectId, idViewport: OdDbObjectId): void;
  description(): OdString;
  setDescription(sDescription: OdString): void;
  isInUse(): boolean;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): void;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): void;
  dxfInFields_R12(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields_R12(pFiler: OdDbDxfFiler): void;
  subErase(erasing: boolean): OdResult;
  subSetAttributes(pTraits: OdGiDrawableTraits): number;
  subWorldDraw(pWd: OdGiWorldDraw): boolean;
  subViewportDraw(pVd: OdGiViewportDraw): void;
  drawable(): OdGiDrawable;
  removeAllOverrides(): void;
  removeColorOverride(idViewport: OdDbObjectId): void;
  removeLinetypeOverride(idViewport: OdDbObjectId): void;
  removeLineWeightOverride(idViewport: OdDbObjectId): void;
  removePlotStyleOverride(idViewport: OdDbObjectId): void;
  removeTransparencyOverride(idViewport: OdDbObjectId): void;
  removeViewportOverrides(idViewport: OdDbObjectId): void;
  hasOverrides(idViewport: OdDbObjectId): boolean;
  hasAnyOverrides(): boolean;
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbLayout.html} Additional documentation.
 */
class OdDbLayout extends OdDbPlotSettings {
  constructor();
  constructor(arg0: OdDbLayout);
  static cast(pObj: OdRxObject): OdDbLayout;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdDbLayout;
  static rxInit(): void;
  static rxUninit(): void;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  getLIMMIN(): OdGePoint2d;
  setLIMMIN(limMin: OdGePoint2d): void;
  getLIMMAX(): OdGePoint2d;
  setLIMMAX(limMax: OdGePoint2d): void;
  getEXTMIN(): OdGePoint3d;
  setEXTMIN(extMin: OdGePoint3d): void;
  getEXTMAX(): OdGePoint3d;
  setEXTMAX(extMax: OdGePoint3d): void;
  getINSBASE(): OdGePoint3d;
  setINSBASE(insBase: OdGePoint3d): void;
  getLIMCHECK(): boolean;
  setLIMCHECK(limCheck: boolean): void;
  getPSLTSCALE(): boolean;
  setPSLTSCALE(psLtScale: boolean): void;
  getBlockTableRecordId(): OdDbObjectId;
  setBlockTableRecordId(blockTableRecordId: OdDbObjectId): void;
  addToLayoutDict(pDb: OdDbDatabase, blockTableRecordId: OdDbObjectId): void;
  getLayoutName(): OdString;
  setLayoutName(layoutName: OdString): void;
  getTabOrder(): number;
  setTabOrder(tabOrder: number): void;
  getTabSelected(): boolean;
  setTabSelected(tabSelected: boolean): void;
  getViewportArray(): OdDbObjectIdArray;
  getPreviewImage(): OdGiRasterImage;
  setPreviewImage(image: OdGiRasterImage): void;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): void;
  appendToOwner(idPair: OdDbIdPair, pOwnerObject: OdDbObject, ownerIdMap: OdDbIdMapping): void;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): void;
  activeViewportId(): OdDbObjectId;
  setActiveViewportId(viewportId: OdDbObjectId): void;
  overallVportId(): OdDbObjectId;
  subSetAttributes(pTraits: OdGiDrawableTraits): number;
  subWorldDraw(pWd: OdGiWorldDraw): boolean;
  subViewportDraw(vPd: OdGiViewportDraw): void;
  getGeomExtents(extents: OdGeExtents3d): OdResult;
  subClose(): void;
  annoAllVisible(): boolean;
  setAnnoAllVisible(newVal: boolean): void;
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbLayoutManagerReactor.html} Additional documentation.
 */
class OdDbLayoutManagerReactor extends OdRxObject {
  static cast(pObj: OdRxObject): OdDbLayoutManagerReactor;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdDbLayoutManagerReactor;
  static rxInit(): void;
  static rxUninit(): void;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  layoutCreated(layoutName: OdString, layoutId: OdDbObjectId): void;
  layoutToBeRemoved(layoutName: OdString, layoutId: OdDbObjectId): void;
  layoutRemoved(layoutName: OdString, layoutId: OdDbObjectId): void;
  abortLayoutRemoved(layoutName: OdString, layoutId: OdDbObjectId): void;
  layoutToBeCopied(layoutName: OdString, layoutId: OdDbObjectId): void;
  layoutCopied(oldLayoutName: OdString, oldLayoutId: OdDbObjectId, newLayoutName: OdString, newLayoutId: OdDbObjectId): void;
  abortLayoutCopied(layoutName: OdString, layoutId: OdDbObjectId): void;
  layoutToBeRenamed(oldLayoutName: OdString, newLayoutName: OdString, layoutId: OdDbObjectId): void;
  layoutRenamed(oldLayoutName: OdString, newLayoutName: OdString, layoutId: OdDbObjectId): void;
  abortLayoutRename(oldLayoutName: OdString, newLayoutName: OdString, layoutId: OdDbObjectId): void;
  layoutSwitched(newLayoutName: OdString, newLayoutId: OdDbObjectId): void;
  plotStyleTableChanged(newTableName: OdString, layoutId: OdDbObjectId): void;
  layoutToBeDeactivated(layoutName: OdString, layoutId: OdDbObjectId): void;
  layoutsReordered(): void;
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbLayoutManager.html} Additional documentation.
 */
class OdDbLayoutManager extends OdRxObject {
  static cast(pObj: OdRxObject): OdDbLayoutManager;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdDbLayoutManager;
  static rxInit(): void;
  static rxUninit(): void;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  setCurrentLayout(pDb: OdDbDatabase, layoutId: OdDbObjectId): void;
  findActiveLayout(pDb: OdDbDatabase, allowModel: boolean): OdString;
  getActiveLayoutBTRId(pDb: OdDbDatabase): OdDbObjectId;
  findLayoutNamed(pDb: OdDbDatabase, name: OdString): OdDbObjectId;
  deleteLayout(pDb: OdDbDatabase, delname: OdString): void;
  createLayout(pDb: OdDbDatabase, newname: OdString, pBlockTableRecId: OdDbObjectId): OdDbObjectId;
  renameLayout(pDb: OdDbDatabase, oldname: OdString, newname: OdString): void;
  cloneLayout(pDb: OdDbDatabase, pLayout: OdDbLayout, newname: OdString, newTabOrder: number): OdDbObjectId;
  getNonRectVPIdFromClipId(clipId: OdDbObjectId): OdDbObjectId;
  isVpnumClipped(pDb: OdDbDatabase, index: number): boolean;
  countLayouts(pDb: OdDbDatabase): number;
  addReactor(newObj: OdDbLayoutManagerReactor): void;
  removeReactor(delObj: OdDbLayoutManagerReactor): void;
  fireLayoutsReordered(): void;
};

enum gsMarkType {
  kArrowMark = 3,
  kLeaderLineMark = 4
};

enum AnnoType {
  kMText = 0,
  kFcf = 1,
  kBlockRef = 2,
  kNoAnno = 3
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbLeader.html} Additional documentation.
 */
class OdDbLeader extends OdDbCurve {
  constructor();
  constructor(arg0: OdDbLeader);
  static cast(pObj: OdRxObject): OdDbLeader;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdDbLeader;
  static rxInit(): void;
  static rxUninit(): void;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  normal(): OdGeVector3d;
  numVertices(): number;
  appendVertex(vertex: OdGePoint3d): boolean;
  removeLastVertex(): void;
  firstVertex(): OdGePoint3d;
  lastVertex(): OdGePoint3d;
  vertexAt(vertexIndex: number): OdGePoint3d;
  setVertexAt(vertexIndex: number, vertex: OdGePoint3d): boolean;
  isArrowHeadEnabled(): boolean;
  hasArrowHead(): boolean;
  enableArrowHead(): void;
  disableArrowHead(): void;
  hasHookLine(): boolean;
  isHookLineOnXDir(): boolean;
  setToSplineLeader(): void;
  setToStraightLeader(): void;
  isSplined(): boolean;
  dimensionStyle(): OdDbHardPointerId;
  setDimensionStyle(dimStyleId: OdDbHardPointerId): void;
  attachAnnotation(annoId: OdDbObjectId): void;
  attachAnnotation1(annoId: OdDbObjectId, xDir: OdGeVector3d, annotationWidth: number, annotationHeight: number, hookLineOnXDir: boolean): void;
  detachAnnotation(): void;
  annotationObjId(): OdDbObjectId;
  annotationXDir(): OdGeVector3d;
  annotationOffset(): OdGeVector3d;
  setAnnotationOffset(offset: OdGeVector3d): void;
  annoType(): AnnoType;
  annoHeight(): number;
  annoWidth(): number;
  dimasz(): number;
  dimclrd(): OdCmColor;
  dimgap(): number;
  dimlwd(): LineWeight;
  dimldrblk(): OdDbObjectId;
  dimsah(): boolean;
  dimscale(): number;
  dimtad(): number;
  dimtxsty(): OdDbObjectId;
  dimtxt(): number;
  setDimasz(val: number): void;
  setDimclrd(val: OdCmColor): void;
  setDimgap(val: number): void;
  setDimldrblk(val: OdDbObjectId): void;
  setDimldrblk1(val: OdString): void;
  setDimlwd(val: LineWeight): void;
  setDimsah(val: boolean): void;
  setDimscale(val: number): void;
  setDimtad(val: number): void;
  setDimtxsty(val: OdDbObjectId): void;
  setDimtxt(val: number): void;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): void;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): void;
  subWorldDraw(pWd: OdGiWorldDraw): boolean;
  subViewportDraw(pVd: OdGiViewportDraw): void;
  subExplode(entitySet: OdRxObjectPtrArray): OdResult;
  subClose(): void;
  subSetAttributes(pTraits: OdGiDrawableTraits): number;
  isPlanar(): boolean;
  getPlane(plane: OdGePlane, planarity: Planarity): OdResult;
  isClosed(): boolean;
  isPeriodic(): boolean;
  getStartParam(startParam: number): OdResult;
  getEndParam(endParam: number): OdResult;
  getStartPoint(startPoint: OdGePoint3d): OdResult;
  getEndPoint(endPoint: OdGePoint3d): OdResult;
  getPointAtParam(param: number, pointOnCurve: OdGePoint3d): OdResult;
  getParamAtPoint(pointOnCurve: OdGePoint3d, param: number): OdResult;
  subTransformBy(xfm: OdGeMatrix3d): OdResult;
  subGetTransformedCopy(xform: OdGeMatrix3d, pEnt: OdDbEntity): OdResult;
  getDistAtParam(param: number, dist: number): OdResult;
  getParamAtDist(dist: number, param: number): OdResult;
  getFirstDeriv(param: number, firstDeriv: OdGeVector3d): OdResult;
  getSecondDeriv(param: number, secondDeriv: OdGeVector3d): OdResult;
  getArea(area: number): OdResult;
  subSetDatabaseDefaults(pDb: OdDbDatabase, doSubents: boolean): void;
  evaluateLeader(): OdResult;
  modifiedGraphics(pObject: OdDbObject): void;
  erased(pObject: OdDbObject, erasing: boolean): void;
  getDimstyleData(pRecord: OdDbDimStyleTableRecord): void;
  setDimstyleData(pDimstyle: OdDbDimStyleTableRecord): void;
  setDimstyleData1(dimstyleID: OdDbObjectId): void;
  setPlane(leaderPlane: OdGePlane): void;
  getSplitCurves(points: OdGePoint3dArray, curveSegments: OdRxObjectPtrArray): OdResult;
  getSplitCurves1(params: OdGeDoubleArray, curveSegments: OdRxObjectPtrArray): OdResult;
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbLine.html} Additional documentation.
 */
class OdDbLine extends OdDbCurve {
  constructor();
  constructor(arg0: OdDbLine);
  static cast(pObj: OdRxObject): OdDbLine;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdDbLine;
  static rxInit(): void;
  static rxUninit(): void;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  startPoint(): OdGePoint3d;
  setStartPoint(geStartPoint: OdGePoint3d): void;
  endPoint(): OdGePoint3d;
  setEndPoint(geEndPoint: OdGePoint3d): void;
  thickness(): number;
  setThickness(vThickness: number): void;
  normal(): OdGeVector3d;
  setNormal(geVector: OdGeVector3d): void;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): void;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): void;
  dxfInFields_R12(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields_R12(pFiler: OdDbDxfFiler): void;
  subWorldDraw(pWd: OdGiWorldDraw): boolean;
  subGetGeomExtents(extents: OdGeExtents3d): OdResult;
  subTransformBy(xfm: OdGeMatrix3d): OdResult;
  isClosed(): boolean;
  isPeriodic(): boolean;
  isPlanar(): boolean;
  getPlane(gePlane: OdGePlane, gePlanarity: Planarity): OdResult;
  getStartParam(startParam: number): OdResult;
  getEndParam(endParam: number): OdResult;
  getStartPoint(startPoint: OdGePoint3d): OdResult;
  getEndPoint(endPoint: OdGePoint3d): OdResult;
  getPointAtParam(param: number, pointOnCurve: OdGePoint3d): OdResult;
  getParamAtPoint(pointOnCurve: OdGePoint3d, param: number): OdResult;
  getDistAtParam(param: number, dist: number): OdResult;
  getParamAtDist(dist: number, param: number): OdResult;
  getFirstDeriv(param: number, firstDeriv: OdGeVector3d): OdResult;
  getSecondDeriv(param: number, secondDeriv: OdGeVector3d): OdResult;
  getArea(area: number): OdResult;
  getOffsetCurves(offsetDist: number, offsetCurves: OdRxObjectPtrArray): OdResult;
  getOffsetCurvesGivenPlaneNormal(normal: OdGeVector3d, offsetDist: number, offsetCurves: OdRxObjectPtrArray): OdResult;
  getSplitCurves(points: OdGePoint3dArray, curveSegments: OdRxObjectPtrArray): OdResult;
  getSplitCurves1(params: OdGeDoubleArray, curveSegments: OdRxObjectPtrArray): OdResult;
  getEcs(): OdGeMatrix3d;
  setFromOdGeCurve(geCurve: OdGeCurve3d, normal: OdGeVector3d, tol: OdGeTol): OdResult;
  reverseCurve(): OdResult;
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbLinetypeTableIterator.html} Additional documentation.
 */
class OdDbLinetypeTableIterator extends OdDbSymbolTableIterator {
  static cast(pObj: OdRxObject): OdDbLinetypeTableIterator;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdDbLinetypeTableIterator;
  static rxInit(): void;
  static rxUninit(): void;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbLinetypeTable.html} Additional documentation.
 */
class OdDbLinetypeTable extends OdDbSymbolTable {
  constructor();
  constructor(arg0: OdDbLinetypeTable);
  static cast(pObj: OdRxObject): OdDbLinetypeTable;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdDbLinetypeTable;
  static rxInit(): void;
  static rxUninit(): void;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  getAt(recordName: OdString, getErasedRecord: boolean): OdDbObjectId;
  getAt1(recordName: OdString, openMode: OpenMode, getErasedRecord: boolean): OdDbSymbolTableRecord;
  has(recordName: OdString): boolean;
  has1(objectId: OdDbObjectId): boolean;
  add(pRecord: OdDbSymbolTableRecord): OdDbObjectId;
  newIterator(atBeginning: boolean, skipDeleted: boolean): OdDbSymbolTableIterator;
  getLinetypeByLayerId(): OdDbObjectId;
  getLinetypeByBlockId(): OdDbObjectId;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): void;
  dxfOut(pFiler: OdDbDxfFiler): void;
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbLinetypeTableRecord.html} Additional documentation.
 */
class OdDbLinetypeTableRecord extends OdDbSymbolTableRecord {
  constructor();
  constructor(arg0: OdDbLinetypeTableRecord);
  static cast(pObj: OdRxObject): OdDbLinetypeTableRecord;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdDbLinetypeTableRecord;
  static rxInit(): void;
  static rxUninit(): void;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  comments(): OdString;
  setComments(sComment: OdString): void;
  isScaledToFit(): boolean;
  setIsScaledToFit(bScaleToFit: boolean): void;
  patternLength(): number;
  setPatternLength(vLength: number): void;
  numDashes(): number;
  setNumDashes(numberDashes: number): void;
  dashLengthAt(dashIndex: number): number;
  setDashLengthAt(dashIndex: number, dashLength: number): void;
  shapeStyleAt(dashIndex: number): OdDbObjectId;
  setShapeStyleAt(dashIndex: number, idTextStyle: OdDbObjectId): void;
  shapeNumberAt(dashIndex: number): number;
  setShapeNumberAt(dashIndex: number, shapeNumber: number): void;
  textAt(dashIndex: number): OdString;
  setTextAt(dashIndex: number, textString: OdString): void;
  shapeOffsetAt(dashIndex: number): OdGeVector2d;
  setShapeOffsetAt(dashIndex: number, shapeOffset: OdGeVector2d): void;
  shapeScaleAt(dashIndex: number): number;
  setShapeScaleAt(dashIndex: number, shapeScale: number): void;
  shapeRotationAt(dashIndex: number): number;
  setShapeRotationAt(dashIndex: number, shapeRotation: number): void;
  shapeIsUcsOrientedAt(dashIndex: number): boolean;
  setShapeIsUcsOrientedAt(dashIndex: number, isUcsOriented: boolean): void;
  shapeIsUprightAt(dashIndex: number): boolean;
  setShapeIsUprightAt(dashIndex: number, isUpright: boolean): void;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): void;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): void;
  dxfInFields_R12(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields_R12(pFiler: OdDbDxfFiler): void;
  drawable(): OdGiDrawable;
  subSetAttributes(pTraits: OdGiDrawableTraits): number;
  subErase(erasing: boolean): OdResult;
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbMInsertBlock.html} Additional documentation.
 */
class OdDbMInsertBlock extends OdDbBlockReference {
  constructor();
  constructor(arg0: OdDbMInsertBlock);
  static cast(pObj: OdRxObject): OdDbMInsertBlock;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdDbMInsertBlock;
  static rxInit(): void;
  static rxUninit(): void;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  columns(): number;
  setColumns(numColumns: number): void;
  rows(): number;
  setRows(numRows: number): void;
  columnSpacing(): number;
  setColumnSpacing(colSpacing: number): void;
  rowSpacing(): number;
  setRowSpacing(rowSpacing: number): void;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): void;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): void;
  subTransformBy(xfm: OdGeMatrix3d): OdResult;
  explodeToBlock(pTargetBlkRec: OdDbBlockTableRecord, pResIdArray: OdDbObjectIdArray): OdResult;
  subGetGeomExtents(extents: OdGeExtents3d): OdResult;
  subWorldDraw(pWd: OdGiWorldDraw): boolean;
  subExplode(entitySet: OdRxObjectPtrArray): OdResult;
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbMLeaderRecomputePE.html} Additional documentation.
 */
class OdDbMLeaderRecomputePE extends OdRxObject {
  static cast(pObj: OdRxObject): OdDbMLeaderRecomputePE;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdDbMLeaderRecomputePE;
  static rxInit(): void;
  static rxUninit(): void;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  recomputeBreakPoints(pMLeader: OdDbMLeader): OdResult;
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbMLeader.html} Additional documentation.
 */
class OdDbMLeader extends OdDbEntity {
  constructor();
  constructor(arg0: OdDbMLeader);
  static cast(pObj: OdRxObject): OdDbMLeader;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdDbMLeader;
  static rxInit(): void;
  static rxUninit(): void;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  dwgInFields(filer: OdDbDwgFiler): OdResult;
  dwgOutFields(filer: OdDbDwgFiler): void;
  dxfInFields(filer: OdDbDxfFiler): OdResult;
  dxfOutFields(filer: OdDbDxfFiler): void;
  setOverride(propertyType: PropertyOverrideType, isOverride: boolean): void;
  isOverride(propertyType: PropertyOverrideType): boolean;
  setScale(scale: number): OdResult;
  scale(): number;
  getBlockAttributeValue(attdefId: OdDbObjectId, pAtt: OdDbAttribute): OdResult;
  setBlockAttributeValue(attdefId: OdDbObjectId, pAtt: OdDbAttribute): OdResult;
  plane(): OdGePlane;
  setPlane(plane: OdGePlane): void;
  normal(): OdGeVector3d;
  moveMLeader(vector: OdGeVector3d, moveType: MoveType, bAutoSwitchDogleg: boolean): OdResult;
  getContentGeomExtents(extents: OdGeExtents3d): OdResult;
  numLeaders(): number;
  getLeaderIndexes(leaderIndexes: OdIntArray): void;
  addLeader(leaderIndex: number): void;
  removeLeader(leaderIndex: number): void;
  numLeaderLines(): number;
  getLeaderLineIndexes(leaderLineIndexes: OdIntArray): void;
  addLeaderLine(leaderIndex: number, leaderLineIndex: number): OdResult;
  addLeaderLine1(point: OdGePoint3d, leaderLineIndex: number): OdResult;
  removeLeaderLine(leaderLineIndex: number): void;
  addFirstVertex(leaderLineIndex: number, point: OdGePoint3d): OdResult;
  removeFirstVertex(leaderLineIndex: number): OdResult;
  getFirstVertex(leaderLineIndex: number, point: OdGePoint3d): OdResult;
  setFirstVertex(leaderLineIndex: number, point: OdGePoint3d): OdResult;
  addLastVertex(leaderLineIndex: number, point: OdGePoint3d): OdResult;
  removeLastVertex(leaderLineIndex: number): OdResult;
  getLastVertex(leaderLineIndex: number, point: OdGePoint3d): OdResult;
  setLastVertex(leaderLineIndex: number, point: OdGePoint3d): OdResult;
  numVertices(leaderLineIndex: number, num: number): OdResult;
  setVertex(leaderLineIndex: number, index: number, point: OdGePoint3d): OdResult;
  getVertex(leaderLineIndex: number, index: number, point: OdGePoint3d): void;
  getLeaderIndex(leaderLineIndex: number, leaderIndex: number): void;
  getLeaderLineIndexes1(leaderIndex: number, leaderLineIndexes: OdIntArray): void;
  setDoglegDirection(leaderIndex: number, vector: OdGeVector3d): void;
  getDoglegDirection(leaderIndex: number, vector: OdGeVector3d): void;
  setLeaderLineType(leaderLineType: LeaderType): void;
  leaderLineType(): LeaderType;
  setLeaderLineColor(leaderLineColor: OdCmColor): void;
  leaderLineColor(): OdCmColor;
  setLeaderLineTypeId(leaderLineTypeId: OdDbObjectId): void;
  leaderLineTypeId(): OdDbObjectId;
  setLeaderLineWeight(leaderLineWeight: LineWeight): void;
  leaderLineWeight(): LineWeight;
  setLandingGap(landingGap: number): void;
  landingGap(): number;
  setEnableLanding(enableLanding: boolean): void;
  enableLanding(): boolean;
  setEnableDogleg(enableDogleg: boolean): void;
  enableDogleg(): boolean;
  setDoglegLength(leaderIndex: number, dDoglegLength: number): void;
  doglegLength(leaderIndex: number): number;
  setDoglegLength1(doglegLength: number): OdResult;
  doglegLength1(): number;
  setArrowSymbolId(arrowSymbolId: OdDbObjectId): void;
  arrowSymbolId(): OdDbObjectId;
  setArrowSize(arrowSize: number): void;
  arrowSize(): number;
  setContentType(contentType: ContentType): void;
  contentType(): ContentType;
  setTextStyleId(textStyleId: OdDbObjectId): void;
  textStyleId(): OdDbObjectId;
  setTextAttachmentType(textAttachmentType: TextAttachmentType, leaderDirection: LeaderDirectionType): void;
  textAttachmentType(leaderDirection: LeaderDirectionType): TextAttachmentType;
  setTextAngleType(textAngleType: TextAngleType): void;
  textAngleType(): TextAngleType;
  setTextAlignmentType(textAlignmentType: TextAlignmentType): void;
  textAlignmentType(): TextAlignmentType;
  setTextColor(textColor: OdCmColor): void;
  textColor(): OdCmColor;
  setTextHeight(textHeight: number): void;
  textHeight(): number;
  setEnableFrameText(enableFrameText: boolean): void;
  enableFrameText(): boolean;
  setMText(pMText: OdDbMText): void;
  mtext(): OdDbMText;
  setBlockContentId(blockId: OdDbObjectId): void;
  blockContentId(): OdDbObjectId;
  setBlockColor(blockColor: OdCmColor): void;
  blockColor(): OdCmColor;
  setBlockScale(scale: OdGeScale3d): void;
  blockScale(): OdGeScale3d;
  setBlockRotation(rotation: number): void;
  blockRotation(): number;
  setBlockConnectionType(blockConnectionType: BlockConnectionType): void;
  blockConnectionType(): BlockConnectionType;
  setEnableAnnotationScale(enableAnnotationScale: boolean): void;
  enableAnnotationScale(): boolean;
  setMLeaderStyle(newStyleId: OdDbObjectId): void;
  MLeaderStyle(): OdDbObjectId;
  getOverridedMLeaderStyle(mleaderStyle: OdDbMLeaderStyle): OdResult;
  setBlockPosition(position: OdGePoint3d): void;
  getBlockPosition(position: OdGePoint3d): void;
  setTextLocation(location: OdGePoint3d): void;
  getTextLocation(location: OdGePoint3d): void;
  setToleranceLocation(location: OdGePoint3d): OdResult;
  getToleranceLocation(location: OdGePoint3d): OdResult;
  setArrowSymbolId1(leaderLineIndex: number, arrowSymbolId: OdDbObjectId): void;
  arrowSymbolId1(leaderLineIndex: number): OdDbObjectId;
  hasContent(): boolean;
  connectionPoint(vect: OdGeVector3d, point: OdGePoint3d): OdResult;
  connectionPoint1(vect: OdGeVector3d, point: OdGePoint3d, direction: TextAttachmentDirection): OdResult;
  recomputeBreakPoints(): OdResult;
  postMLeaderToDb(pDb: OdDbDatabase): OdResult;
  updateLeaderLinePosition(): OdResult;
  removeLeaderLineRefAssoc(leaderLineIndex: number): OdResult;
  updateContentScale(pContext: OdDbMLeaderObjectContextData): OdResult;
  isPlanar(): boolean;
  getPlane(plane: OdGePlane, planarity: Planarity): OdResult;
  setTextAttachmentDirection(direction: TextAttachmentDirection): void;
  textAttachmentDirection(): TextAttachmentDirection;
  isOverride1(leaderLineIndex: number, value: LeaderLineOverrideType): boolean;
  setLeaderLineType1(leaderLineIndex: number, leaderLineType: LeaderType): void;
  leaderLineType1(leaderLineIndex: number): LeaderType;
  setLeaderLineColor1(leaderLineIndex: number, leaderLineColor: OdCmColor): void;
  leaderLineColor1(leaderLineIndex: number): OdCmColor;
  setLeaderLineTypeId1(leaderLineIndex: number, leaderLineTypeId: OdDbObjectId): void;
  leaderLineTypeId1(leaderLineIndex: number): OdDbObjectId;
  setLeaderLineWeight1(leaderLineIndex: number, leaderLineWeight: LineWeight): void;
  leaderLineWeight1(leaderLineIndex: number): LineWeight;
  setArrowSize1(leaderLineIndex: number, arrowSize: number): void;
  arrowSize1(leaderLineIndex: number): number;
  setExtendLeaderToText(bSet: boolean): void;
  extendLeaderToText(): boolean;
  copyFrom(pSource: OdRxObject): void;
};

enum MoveType {
  kMoveAllPoints = 0,
  kMoveAllExceptArrowHeaderPoints = 1,
  kMoveContentAndDoglegPoints = 2
};

enum PropertyOverrideType {
  kLeaderLineType = 0,
  kLeaderLineColor = 1,
  kLeaderLineTypeId = 2,
  kLeaderLineWeight = 3,
  kEnableLanding = 4,
  kLandingGap = 5,
  kEnableDogleg = 6,
  kDoglegLength = 7,
  kArrowSymbolId = 8,
  kArrowSize = 9,
  kContentType = 10,
  kTextStyleId = 11,
  kTextLeftAttachmentType = 12,
  kTextAngleType = 13,
  kTextAlignmentType = 14,
  kTextColor = 15,
  kTextHeight = 16,
  kEnableFrameText = 17,
  kDefaultMText = 18,
  kBlockId = 19,
  kBlockColor = 20,
  kBlockScale = 21,
  kBlockRotation = 22,
  kBlockConnectionType = 23,
  kScale = 24,
  kTextRightAttachmentType = 25,
  kTextSwitchAlignmentType = 26,
  kTextAttachmentDirection = 27,
  kTextTopAttachmentType = 28,
  kTextBottomAttachmentType = 29,
  kExtendLeaderToText = 30,
  kSize = 31
};

enum gsMarkType {
  kNone = 0,
  kArrowMark = 1,
  kLeaderLineMark = 5001,
  kDoglegMark = 10001,
  kMTextMark = 15001,
  kMTextUnderLineMark = 15002,
  kToleranceMark = 15003,
  kBlockMark = 15004,
  kBlockAttribute = 15005
};

enum LeaderLineOverrideType {
  kOverrideLeaderType = 0,
  kOverrideLineColor = 1,
  kOverrideLineTypeId = 2,
  kOverrideLineWeight = 3,
  kOverrideArrowSize = 4,
  kOverrideArrowSymbolId = 5
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbMLeaderStyle.html} Additional documentation.
 */
class OdDbMLeaderStyle extends OdDbObject {
  constructor();
  constructor(arg0: OdDbMLeaderStyle);
  static cast(pObj: OdRxObject): OdDbMLeaderStyle;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdDbMLeaderStyle;
  static rxInit(): void;
  static rxUninit(): void;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  setDatabaseDefaults(pDb: OdDbDatabase): void;
  getName(): OdString;
  setName(name: OdString): void;
  description(): OdString;
  setDescription(description: OdString): void;
  bitFlags(): number;
  setBitFlags(flags: number): void;
  setContentType(contentType: ContentType): void;
  contentType(): ContentType;
  setDrawMLeaderOrderType(drawMLeaderOrderType: DrawMLeaderOrderType): void;
  drawMLeaderOrderType(): DrawMLeaderOrderType;
  setDrawLeaderOrderType(drawLeaderOrderType: DrawLeaderOrderType): void;
  drawLeaderOrderType(): DrawLeaderOrderType;
  setMaxLeaderSegmentsPoints(maxLeaderSegmentsPoints: number): void;
  maxLeaderSegmentsPoints(): number;
  setFirstSegmentAngleConstraint(angle: SegmentAngleType): void;
  firstSegmentAngleConstraint(): SegmentAngleType;
  setSecondSegmentAngleConstraint(angle: SegmentAngleType): void;
  secondSegmentAngleConstraint(): SegmentAngleType;
  setLeaderLineType(leaderLineType: LeaderType): void;
  leaderLineType(): LeaderType;
  setLeaderLineColor(leaderLineColor: OdCmColor): void;
  leaderLineColor(): OdCmColor;
  setLeaderLineTypeId(leaderLineTypeId: OdDbObjectId): void;
  leaderLineTypeId(): OdDbObjectId;
  setLeaderLineWeight(leaderLineWeight: LineWeight): void;
  leaderLineWeight(): LineWeight;
  setEnableLanding(enableLanding: boolean): void;
  enableLanding(): boolean;
  setLandingGap(landingGap: number): void;
  landingGap(): number;
  setEnableDogleg(enableDogleg: boolean): void;
  enableDogleg(): boolean;
  setDoglegLength(doglegLength: number): void;
  doglegLength(): number;
  setArrowSymbolId(name: OdString): void;
  setArrowSymbolId1(arrowSymbolId: OdDbObjectId): void;
  arrowSymbolId(): OdDbObjectId;
  setArrowSize(arrowSize: number): void;
  arrowSize(): number;
  setDefaultMText(defaultMText: OdDbMText): void;
  defaultMText(): OdDbMText;
  setTextStyleId(textStyleId: OdDbObjectId): void;
  textStyleId(): OdDbObjectId;
  setTextAttachmentType(textAttachmentType: TextAttachmentType, leaderDirection: LeaderDirectionType): void;
  textAttachmentType(leaderDirection: LeaderDirectionType): TextAttachmentType;
  setTextAngleType(textAngleType: TextAngleType): void;
  textAngleType(): TextAngleType;
  setTextAlignmentType(textAlignmentType: TextAlignmentType): void;
  textAlignmentType(): TextAlignmentType;
  setTextAlignAlwaysLeft(bAlwaysLeft: boolean): void;
  textAlignAlwaysLeft(): boolean;
  setTextColor(textColor: OdCmColor): void;
  textColor(): OdCmColor;
  setTextHeight(textHeight: number): void;
  textHeight(): number;
  setEnableFrameText(enableFrameText: boolean): void;
  enableFrameText(): boolean;
  setAlignSpace(alignSpace: number): void;
  alignSpace(): number;
  setBlockId(name: OdString): void;
  setBlockId1(blockId: OdDbObjectId): void;
  blockId(): OdDbObjectId;
  setBlockColor(blockColor: OdCmColor): void;
  blockColor(): OdCmColor;
  setBlockScale(scale: OdGeScale3d): void;
  blockScale(): OdGeScale3d;
  setEnableBlockScale(enableBlockScale: boolean): void;
  enableBlockScale(): boolean;
  setBlockRotation(rotation: number): void;
  blockRotation(): number;
  setEnableBlockRotation(enableBlockRotation: boolean): void;
  enableBlockRotation(): boolean;
  setBlockConnectionType(blockConnectionType: BlockConnectionType): void;
  blockConnectionType(): BlockConnectionType;
  setScale(scale: number): void;
  scale(): number;
  overwritePropChanged(): boolean;
  postMLeaderStyleToDb(pDb: OdDbDatabase, styleName: OdString): OdDbObjectId;
  setAnnotative(isAnnotative: boolean): void;
  annotative(): boolean;
  setBreakSize(size: number): void;
  breakSize(): number;
  setTextAttachmentDirection(direction: TextAttachmentDirection): void;
  textAttachmentDirection(): TextAttachmentDirection;
  setExtendLeaderToText(bSet: boolean): void;
  extendLeaderToText(): boolean;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): void;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): void;
  subClose(): void;
};

enum DrawLeaderOrderType {
  kDrawLeaderHeadFirst = 0,
  kDrawLeaderTailFirst = 1
};

enum ContentType {
  kNoneContent = 0,
  kBlockContent = 1,
  kMTextContent = 2,
  kToleranceContent = 3
};

enum DrawMLeaderOrderType {
  kDrawContentFirst = 0,
  kDrawLeaderFirst = 1
};

enum TextAngleType {
  kInsertAngle = 0,
  kHorizontalAngle = 1,
  kAlwaysRightReadingAngle = 2
};

enum LeaderType {
  kInVisibleLeader = 0,
  kStraightLeader = 1,
  kSplineLeader = 2
};

enum TextAttachmentType {
  kAttachmentTopOfTop = 0,
  kAttachmentMiddleOfTop = 1,
  kAttachmentMiddle = 2,
  kAttachmentMiddleOfBottom = 3,
  kAttachmentBottomOfBottom = 4,
  kAttachmentBottomLine = 5,
  kAttachmentBottomOfTopLine = 6,
  kAttachmentBottomOfTop = 7,
  kAttachmentAllLine = 8,
  kAttachmentCenter = 9,
  kAttachmentLinedCenter = 10
};

enum BlockConnectionType {
  kConnectExtents = 0,
  kConnectBase = 1
};

enum TextAlignmentType {
  kLeftAlignment = 0,
  kCenterAlignment = 1,
  kRightAlignment = 2
};

enum TextAttachmentDirection {
  kAttachmentHorizontal = 0,
  kAttachmentVertical = 1
};

enum SegmentAngleType {
  kAny = 0,
  k15 = 1,
  k30 = 2,
  k45 = 3,
  k60 = 4,
  k90 = 6,
  kHorz = 12
};

enum LeaderDirectionType {
  kUnknownLeader = 0,
  kLeftLeader = 1,
  kRightLeader = 2,
  kTopLeader = 3,
  kBottomLeader = 4
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbMText.html} Additional documentation.
 */
class OdDbMText extends OdDbEntity {
  constructor();
  constructor(arg0: OdDbMText);
  static cast(pObj: OdRxObject): OdDbMText;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdDbMText;
  static rxInit(): void;
  static rxUninit(): void;
  static nonBreakSpace(): OdString;
  static overlineOn(): OdString;
  static overlineOff(): OdString;
  static underlineOn(): OdString;
  static underlineOff(): OdString;
  static colorChange(): OdString;
  static fontChange(): OdString;
  static heightChange(): OdString;
  static widthChange(): OdString;
  static obliqueChange(): OdString;
  static trackChange(): OdString;
  static lineBreak(): OdString;
  static paragraphBreak(): OdString;
  static stackStart(): OdString;
  static alignChange(): OdString;
  static blockBegin(): OdString;
  static blockEnd(): OdString;
  static strikethroughOn(): OdString;
  static strikethroughOff(): OdString;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  location(): OdGePoint3d;
  setLocation(location: OdGePoint3d): void;
  normal(): OdGeVector3d;
  setNormal(normal: OdGeVector3d): void;
  direction(): OdGeVector3d;
  setDirection(direction: OdGeVector3d): void;
  rotation(): number;
  setRotation(rotation: number): void;
  width(): number;
  setWidth(width: number): void;
  textStyle(): OdDbObjectId;
  setTextStyle(textStyleId: OdDbObjectId): void;
  textHeight(): number;
  setTextHeight(height: number): void;
  attachment(): AttachmentPoint;
  setAttachment(type: AttachmentPoint): void;
  flowDirection(): FlowDirection;
  setFlowDirection(flowDirection: FlowDirection): void;
  contents(): OdString;
  setContents(text: OdString): number;
  setContentsRTF(text: OdString, base: BaseTextHeightRFT): number;
  actualWidth(): number;
  setLineSpacingStyle(lineSpacingStyle: LineSpacingStyle): void;
  lineSpacingStyle(): LineSpacingStyle;
  setLineSpacingFactor(lineSpacingFactor: number): void;
  lineSpacingFactor(): number;
  horizontalMode(): TextHorzMode;
  setHorizontalMode(horizontalMode: TextHorzMode): void;
  verticalMode(): TextVertMode;
  setVerticalMode(verticalMode: TextVertMode): void;
  getEcs(): OdGeMatrix3d;
  subSetAttributes(pTraits: OdGiDrawableTraits): number;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): void;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): void;
  subWorldDraw(pWd: OdGiWorldDraw): boolean;
  subViewportDraw(pVd: OdGiViewportDraw): void;
  subTransformBy(xfm: OdGeMatrix3d): OdResult;
  subExplode(entitySet: OdRxObjectPtrArray): OdResult;
  explodeGeometry(entitySet: OdRxObjectPtrArray): OdResult;
  subClose(): void;
  isPlanar(): boolean;
  actualHeight(ctxt: OdGiWorldDraw): number;
  getActualBoundingPoints(boundingPoints: OdGePoint3dArray, dGapX: number, dGapY: number): void;
  getBoundingPoints(boundingPoints: OdGePoint3dArray): void;
  setAttachmentMovingLocation(attachment: AttachmentPoint): OdResult;
  subGetGeomExtents(extents: OdGeExtents3d): OdResult;
  backgroundFillOn(): boolean;
  setBackgroundFill(bEnable: boolean): void;
  getBackgroundFillColor(): OdCmColor;
  setBackgroundFillColor(color: OdCmColor): void;
  getBackgroundScaleFactor(): number;
  setBackgroundScaleFactor(scaleFactor: number): void;
  getBackgroundTransparency(): OdCmTransparency;
  setBackgroundTransparency(transparency: OdCmTransparency): void;
  useBackgroundColorOn(): boolean;
  setUseBackgroundColor(enable: boolean): void;
  getParagraphsIndent(indents: OdDbMTextIndents): void;
  setField(fieldName: OdString, pField: OdDbField): OdDbObjectId;
  removeField(fieldId: OdDbObjectId): OdResult;
  removeField1(fieldName: OdString): OdDbObjectId;
  convertFieldToText(): void;
  subSetDatabaseDefaults(pDb: OdDbDatabase, doSubents: boolean): void;
  setDynamicColumns(width: number, gutter: number, bAutoHeigh: boolean): void;
  setStaticColumns(width: number, gutter: number, count: number): void;
  getColumnType(): ColumnType;
  setColumnType(colType: ColumnType): void;
  getColumnAutoHeight(): boolean;
  setColumnAutoHeight(bAutoHeigh: boolean): void;
  getColumnCount(): number;
  setColumnCount(numCol: number): void;
  getColumnWidth(): number;
  setColumnWidth(colWidth: number): void;
  getColumnGutterWidth(): number;
  setColumnGutterWidth(colGutter: number): void;
  getColumnFlowReversed(): boolean;
  setColumnFlowReversed(bFlowRev: boolean): void;
  getColumnHeight(col: number): number;
  setColumnHeight(col: number, colHeight: number): void;
  height(): number;
  setHeight(value: number): void;
  getPlane(plane: OdGePlane, planarity: Planarity): OdResult;
  subGetTransformedCopy(mat: OdGeMatrix3d, pCopy: OdDbEntity): OdResult;
  ascent(): number;
  descent(): number;
  setShowBorders(bEnable: boolean): void;
  showBorders(): boolean;
  text(): OdString;
  contentsRTF(): OdString;
  getTextWithFieldCodes(): OdString;
};

enum FlowDirection {
  kLtoR = 1,
  kRtoL = 2,
  kTtoB = 3,
  kBtoT = 4,
  kByStyle = 5
};

enum BaseTextHeightRFT {
  kRTFTextHeightUIExport = 0,
  kRTFHalfTextHeightUIExport = 1
};

enum AttachmentPoint {
  kTopLeft = 1,
  kTopCenter = 2,
  kTopRight = 3,
  kMiddleLeft = 4,
  kMiddleCenter = 5,
  kMiddleRight = 6,
  kBottomLeft = 7,
  kBottomCenter = 8,
  kBottomRight = 9,
  kBaseLeft = 10,
  kBaseCenter = 11,
  kBaseRight = 12,
  kBaseAlign = 13,
  kBottomAlign = 14,
  kMiddleAlign = 15,
  kTopAlign = 16,
  kBaseFit = 17,
  kBottomFit = 18,
  kMiddleFit = 19,
  kTopFit = 20,
  kBaseMid = 21,
  kBottomMid = 22,
  kMiddleMid = 23,
  kTopMid = 24
};

enum ColumnType {
  kNoColumns = 0,
  kStaticColumns = 1,
  kDynamicColumns = 2
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbMaterial.html} Additional documentation.
 */
class OdDbMaterial extends OdDbObject {
  constructor();
  constructor(arg0: OdDbMaterial);
  static cast(pObj: OdRxObject): OdDbMaterial;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdDbMaterial;
  static rxInit(): void;
  static rxUninit(): void;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  setName(name: OdString): OdResult;
  name(): OdString;
  setDescription(description: OdString): void;
  description(): OdString;
  setAmbient(ambientColor: OdGiMaterialColor): void;
  ambient(ambientColor: OdGiMaterialColor): void;
  setDiffuse(diffuseColor: OdGiMaterialColor, diffuseMap: OdGiMaterialMap): void;
  diffuse(diffuseColor: OdGiMaterialColor, diffuseMap: OdGiMaterialMap): void;
  setSpecular(specularColor: OdGiMaterialColor, specularMap: OdGiMaterialMap, glossFactor: number): void;
  specular(specularColor: OdGiMaterialColor, specularMap: OdGiMaterialMap, glossFactor: number): void;
  setReflection(reflectionMap: OdGiMaterialMap): void;
  reflection(reflectionMap: OdGiMaterialMap): void;
  setOpacity(opacityPercentage: number, opacityMap: OdGiMaterialMap): void;
  opacity(opacityPercentage: number, opacityMap: OdGiMaterialMap): void;
  setBump(bumpMap: OdGiMaterialMap): void;
  bump(map: OdGiMaterialMap): void;
  setRefraction(refractionIndex: number, refractionMap: OdGiMaterialMap): void;
  refraction(refractionIndex: number, refractionMap: OdGiMaterialMap): void;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): void;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): void;
  drawable(): OdGiDrawable;
  subSetAttributes(pTraits: OdGiDrawableTraits): number;
  translucence(): number;
  setTranslucence(translucence: number): void;
  selfIllumination(): number;
  setSelfIllumination(selfIllumination: number): void;
  reflectivity(): number;
  setReflectivity(reflectivity: number): void;
  mode(): Mode;
  setMode(mode: Mode): void;
  channelFlags(): ChannelFlags;
  setChannelFlags(channelFlags: ChannelFlags): void;
  illuminationModel(): IlluminationModel;
  setIlluminationModel(illuminationMode: IlluminationModel): void;
  colorBleedScale(): number;
  setColorBleedScale(scale: number): void;
  indirectBumpScale(): number;
  setIndirectBumpScale(scale: number): void;
  reflectanceScale(): number;
  setReflectanceScale(scale: number): void;
  transmittanceScale(): number;
  setTransmittanceScale(scale: number): void;
  twoSided(): boolean;
  setTwoSided(flag: boolean): void;
  luminanceMode(): LuminanceMode;
  setLuminanceMode(mode: LuminanceMode): void;
  luminance(): number;
  setLuminance(value: number): void;
  shininess(): number;
  setShininess(value: number): void;
  normalMap(normalMap: OdGiMaterialMap, method: NormalMapMethod, strength: number): void;
  setNormalMap(normalMap: OdGiMaterialMap, method: NormalMapMethod, strength: number): void;
  isAnonymous(): boolean;
  setAnonymous(flag: boolean): void;
  globalIllumination(): GlobalIlluminationMode;
  setGlobalIllumination(mode: GlobalIlluminationMode): void;
  finalGather(): FinalGatherMode;
  setFinalGather(mode: FinalGatherMode): void;
  subErase(erasing: boolean): OdResult;
  getFbx(pAssetXData: class OdSharedPtr<class OdMaterialFBXAssetXData>): OdResult;
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdError_XdataSizeExceeded.html} Additional documentation.
 */
class OdError_XdataSizeExceeded extends OdError {
  constructor(objectId: OdDbObjectId);
  static ctr1(arg0: OdError_XdataSizeExceeded): OdError_XdataSizeExceeded;
  static ctr2(arg0: OdError_XdataSizeExceeded): OdError_XdataSizeExceeded;
};

enum DuplicateRecordCloning {
  kDrcNotApplicable = 0,
  kDrcIgnore = 1,
  kDrcReplace = 2,
  kDrcXrefMangleName = 3,
  kDrcMangleName = 4,
  kDrcUnmangleName = 5,
  kDrcMax = 5
};

enum Visibility {
  kInvisible = 1,
  kVisible = 0
};

enum SaveType {
  kDwg = 0,
  kDxf = 1,
  kDxb = 2,
  kUnknown = -1
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbObject.html} Additional documentation.
 */
class OdDbObject extends OdGiDrawable {
  constructor(arg0: OdDbObject);
  static cast(pObj: OdRxObject): OdDbObject;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdDbObject;
  static rxInit(): void;
  static rxUninit(): void;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  addRef(): void;
  release(): void;
  numRefs(): number;
  objectId(): OdDbObjectId;
  getDbHandle(): OdDbHandle;
  handle(): OdDbHandle;
  ownerId(): OdDbObjectId;
  setOwnerId(ownerId: OdDbObjectId): void;
  database(): OdDbDatabase;
  createExtensionDictionary(): void;
  extensionDictionary(): OdDbObjectId;
  releaseExtensionDictionary(): boolean;
  createXrecord(xrecordName: OdString, style: DuplicateRecordCloning): OdDbXrecord;
  upgradeOpen(): void;
  downgradeOpen(): void;
  subOpen(mode: OpenMode): OdResult;
  subClose(): void;
  erase(eraseIt: boolean): OdResult;
  subErase(erasing: boolean): OdResult;
  handOverTo(pNewObject: OdDbObject, keepXData: boolean, keepExtDict: boolean): void;
  subHandOverTo(pNewObject: OdDbObject): void;
  swapIdWith(otherId: OdDbObjectId, swapXdata: boolean, swapExtDict: boolean): void;
  subSwapIdWith(otherId: OdDbObjectId, swapXdata: boolean, swapExtDict: boolean): void;
  audit(pAuditInfo: OdDbAuditInfo): void;
  dwgIn(pFiler: OdDbDwgFiler): void;
  dwgOut(pFiler: OdDbDwgFiler): void;
  dxfIn(pFiler: OdDbDxfFiler): OdResult;
  dxfOut(pFiler: OdDbDxfFiler): void;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): void;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): void;
  dxfInFields_R12(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields_R12(pFiler: OdDbDxfFiler): void;
  mergeStyle(): DuplicateRecordCloning;
  xData(regappName: OdString): OdResBuf;
  setXData(pRb: OdResBuf): void;
  setBinaryData(strKey: OdString, data: OdBinaryData): OdResult;
  getBinaryData(strKey: OdString, data: OdBinaryData): OdResult;
  isEraseStatusToggled(): boolean;
  isErased(): boolean;
  isReadEnabled(): boolean;
  isWriteEnabled(): boolean;
  isNotifyEnabled(): boolean;
  isModified(): boolean;
  isModifiedXData(): boolean;
  isModifiedGraphics(): boolean;
  isNewObject(): boolean;
  isNotifying(): boolean;
  isUndoing(): boolean;
  isReallyClosing(): boolean;
  isDBRO(): boolean;
  assertReadEnabled(): void;
  assertWriteEnabled(autoUndo: boolean, recordModified: boolean): void;
  assertNotifyEnabled(): void;
  disableUndoRecording(disable: boolean): void;
  undoFiler(): OdDbDwgFiler;
  applyPartialUndo(pUndoFiler: OdDbDwgFiler, pClassObj: OdRxClass): void;
  addReactor(pReactor: OdDbObjectReactor): void;
  removeReactor(pReactor: OdDbObjectReactor): void;
  addPersistentReactor(objId: OdDbObjectId): void;
  removePersistentReactor(objId: OdDbObjectId): void;
  hasPersistentReactor(objId: OdDbObjectId): boolean;
  getPersistentReactors(): OdDbObjectIdArray;
  getTransientReactors(): OdDbObjectReactorArray;
  recvPropagateModify(pSubObj: OdDbObject): void;
  xmitPropagateModify(): void;
  deepClone(idMap: OdDbIdMapping, pOwner: OdDbObject, bPrimary: boolean): OdDbObject;
  wblockClone(idMap: OdDbIdMapping, pOwner: OdDbObject, bPrimary: boolean): OdDbObject;
  appendToOwner(idPair: OdDbIdPair, pOwnerObject: OdDbObject, idMap: OdDbIdMapping): void;
  setOdDbObjectIdsInFlux(): void;
  isOdDbObjectIdsInFlux(): boolean;
  copied(pObject: OdDbObject, pNewObject: OdDbObject): void;
  erased(pObject: OdDbObject, erasing: boolean): void;
  goodbye(pObject: OdDbObject): void;
  openedForModify(pObject: OdDbObject): void;
  modified(pObject: OdDbObject): void;
  subObjModified(pObject: OdDbObject, pSubObj: OdDbObject): void;
  modifyUndone(pObject: OdDbObject): void;
  modifiedXData(pObject: OdDbObject): void;
  unappended(pObject: OdDbObject): void;
  reappended(pObject: OdDbObject): void;
  isAProxy(): boolean;
  objectClosed(objectId: OdDbObjectId): void;
  modifiedGraphics(pObject: OdDbObject): void;
  copyFrom(pSource: OdRxObject): void;
  copyMeFrom(pSource: OdRxObject): void;
  hasSaveVersionOverride(): boolean;
  setHasSaveVersionOverride(hasSaveVersionOverride: boolean): void;
  getObjectSaveVersion(pFiler: OdDbFiler, pMaintVer: MaintReleaseVer): DwgVersion;
  decomposeForSave(ver: DwgVersion, replaceId: OdDbObjectId, exchangeXData: boolean): OdDbObject;
  decomposeForSave1(format: SaveType, ver: DwgVersion, replaceId: OdDbObjectId, exchangeXData: boolean): OdDbObject;
  convertForSave(ver: DwgVersion): void;
  composeForLoad(format: SaveType, version: DwgVersion, pAuditInfo: OdDbAuditInfo): void;
  drawable(): OdGiDrawable;
  subSetAttributes(pTraits: OdGiDrawableTraits): number;
  subWorldDraw(pWd: OdGiWorldDraw): boolean;
  subViewportDraw(pVd: OdGiViewportDraw): void;
  isPersistent(): boolean;
  id(): OdDbStub;
  setGsNode(pNode: OdGsCache): void;
  gsNode(): OdGsCache;
  xDataTransformBy(xfm: OdGeMatrix3d): void;
  hasFields(): boolean;
  getField(fieldName: OdString): OdDbObjectId;
  getField1(fieldName: OdString, mode: OpenMode): OdDbObject;
  setField(fieldName: OdString, pField: OdDbField): OdDbObjectId;
  removeField(fieldId: OdDbObjectId): OdResult;
  removeField1(fieldName: OdString): OdDbObjectId;
  getFieldDictionary(): OdDbObjectId;
  getFieldDictionary1(mode: OpenMode): OdDbObject;
  saveAsClass(pClass: OdRxClass): OdRxClass;
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbSoftPointerId.html} Additional documentation.
 */
class OdDbSoftPointerId extends OdDbObjectId {
  constructor();
  constructor(objectId: OdDbObjectId);
  static ctr1(objectId: OdDbStub): OdDbSoftPointerId;
  static ctr2(arg0: OdDbSoftPointerId): OdDbSoftPointerId;
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbSoftOwnershipId.html} Additional documentation.
 */
class OdDbSoftOwnershipId extends OdDbObjectId {
  constructor();
  constructor(objectId: OdDbObjectId);
  static ctr1(objectId: OdDbStub): OdDbSoftOwnershipId;
  static ctr2(arg0: OdDbSoftOwnershipId): OdDbSoftOwnershipId;
  static ctr3(arg0: OdDbSoftOwnershipId): OdDbSoftOwnershipId;
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbHardOwnershipId.html} Additional documentation.
 */
class OdDbHardOwnershipId extends OdDbObjectId {
  constructor();
  constructor(objectId: OdDbObjectId);
  static ctr1(objectId: OdDbStub): OdDbHardOwnershipId;
  static ctr2(arg0: OdDbHardOwnershipId): OdDbHardOwnershipId;
  static ctr3(arg0: OdDbHardOwnershipId): OdDbHardOwnershipId;
};

enum OpenMode {
  kNotOpen = -1,
  kForRead = 0,
  kForWrite = 1,
  kForNotify = 2
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbObjectId.html} Additional documentation.
 */
class OdDbObjectId {
  constructor();
  constructor(objectId: OdDbStub);
  isNull(): boolean;
  setNull(): void;
  isValid(): boolean;
  database(): OdDbDatabase;
  originalDatabase(): OdDbDatabase;
  convertToRedirectedId(): void;
  isErased(): boolean;
  isEffectivelyErased(): boolean;
  objectLeftOnDisk(): boolean;
  getHandle(): OdDbHandle;
  getNonForwardedHandle(): OdDbHandle;
  openObject(pObj: OdDbObject, openMode: OpenMode, openErasedOne: boolean): OdResult;
  openObject1(openMode: OpenMode, openErasedOne: boolean): OdDbObject;
  safeOpenObject(openMode: OpenMode, openErasedOne: boolean): OdDbObject;
  bindObject(pObj: OdDbObject): void;
  objectClass(): OdRxClass;
  static ctr1(objectId: OdDbObjectId): OdDbObjectId;
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbHardPointerId.html} Additional documentation.
 */
class OdDbHardPointerId extends OdDbObjectId {
  constructor();
  constructor(objectId: OdDbObjectId);
  static ctr1(objectId: OdDbStub): OdDbHardPointerId;
  static ctr2(arg0: OdDbHardPointerId): OdDbHardPointerId;
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbObjectIterator.html} Additional documentation.
 */
class OdDbObjectIterator extends OdRxObject {
  static cast(pObj: OdRxObject): OdDbObjectIterator;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdDbObjectIterator;
  static rxInit(): void;
  static rxUninit(): void;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  start(atBeginning: boolean, skipErased: boolean): void;
  done(): boolean;
  objectId(): OdDbObjectId;
  entity(openMode: OpenMode, openErasedEntity: boolean): OdDbEntity;
  step(forward: boolean, skipErased: boolean): void;
  seek(objectId: OdDbObjectId): boolean;
  seek1(pEntity: OdDbEntity): boolean;
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbOrdinateDimension.html} Additional documentation.
 */
class OdDbOrdinateDimension extends OdDbDimension {
  constructor();
  constructor(arg0: OdDbOrdinateDimension);
  static cast(pObj: OdRxObject): OdDbOrdinateDimension;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdDbOrdinateDimension;
  static rxInit(): void;
  static rxUninit(): void;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  isUsingXAxis(): boolean;
  isUsingYAxis(): boolean;
  useXAxis(): void;
  useYAxis(): void;
  origin(): OdGePoint3d;
  setOrigin(origin: OdGePoint3d): void;
  definingPoint(): OdGePoint3d;
  setDefiningPoint(definingPoint: OdGePoint3d): void;
  leaderEndPoint(): OdGePoint3d;
  setLeaderEndPoint(leaderEndPoint: OdGePoint3d): void;
  dxfInFields_R12(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields_R12(pFiler: OdDbDxfFiler): void;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): void;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): void;
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbPlaneSurface.html} Additional documentation.
 */
class OdDbPlaneSurface extends OdDbSurface {
  constructor();
  constructor(arg0: OdDbPlaneSurface);
  static cast(pObj: OdRxObject): OdDbPlaneSurface;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdDbPlaneSurface;
  static rxInit(): void;
  static rxUninit(): void;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  createFromRegion(pRegion: OdDbRegion): OdResult;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): void;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): void;
  isDependent(): boolean;
  subExplode(entitySet: OdRxObjectPtrArray): OdResult;
  getPlane(plane: OdGePlane, planarity: Planarity): OdResult;
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbPlotSettings.html} Additional documentation.
 */
class OdDbPlotSettings extends OdDbObject {
  constructor();
  constructor(arg0: OdDbPlotSettings);
  static cast(pObj: OdRxObject): OdDbPlotSettings;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdDbPlotSettings;
  static rxInit(): void;
  static rxUninit(): void;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  addToPlotSettingsDict(pDb: OdDbDatabase): void;
  getPlotSettingsName(): OdString;
  setPlotSettingsName(plotSettingsName: OdString): void;
  getPlotCfgName(): OdString;
  getPlotPaperMargins(leftMargin: number, bottomMargin: number, rightMargin: number, topMargin: number): void;
  getPlotPaperSize(paperWidth: number, paperHeight: number): void;
  getCanonicalMediaName(): OdString;
  getPlotOrigin(xCoordinate: number, yCoordinate: number): void;
  plotPaperUnits(): PlotPaperUnits;
  plotViewportBorders(): boolean;
  setPlotViewportBorders(plotViewportBorders: boolean): void;
  plotPlotStyles(): boolean;
  setPlotPlotStyles(plotPlotStyles: boolean): void;
  showPlotStyles(): boolean;
  setShowPlotStyles(showPlotStyles: boolean): void;
  plotRotation(): PlotRotation;
  plotCentered(): boolean;
  plotHidden(): boolean;
  setPlotHidden(plotHidden: boolean): void;
  plotType(): PlotType;
  getPlotWindowArea(xMin: number, yMin: number, xMax: number, yMax: number): void;
  getPlotViewName(): OdString;
  useStandardScale(): boolean;
  getCustomPrintScale(numerator: number, denominator: number): void;
  getCurrentStyleSheet(): OdString;
  stdScaleType(): StdScaleType;
  getStdScale(standardScale: number): void;
  scaleLineweights(): boolean;
  setScaleLineweights(scaleLineweights: boolean): void;
  printLineweights(): boolean;
  setPrintLineweights(printLineweights: boolean): void;
  drawViewportsFirst(): boolean;
  setDrawViewportsFirst(drawViewportsFirst: boolean): void;
  modelType(): boolean;
  setModelType(modelType: boolean): void;
  getTopMargin(): number;
  getRightMargin(): number;
  getBottomMargin(): number;
  getLeftMargin(): number;
  getPaperImageOrigin(): OdGePoint2d;
  setPaperImageOrigin(paperImageOrigin: OdGePoint2d): void;
  shadePlot(): ShadePlotType;
  setShadePlot(shadePlot: ShadePlotType): OdResult;
  shadePlotResLevel(): ShadePlotResLevel;
  setShadePlotResLevel(shadePlotResLevel: ShadePlotResLevel): void;
  shadePlotCustomDPI(): number;
  setShadePlotCustomDPI(shadePlotCustomDPI: number): void;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): void;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): void;
  subClose(): void;
  subErase(erasing: boolean): OdResult;
  subHandOverTo(pNewObject: OdDbObject): void;
  copyFrom(pSource: OdRxObject): void;
  shadePlotId(): OdDbObjectId;
  setShadePlot1(type: ShadePlotType, shadePlotId: OdDbObjectId): OdResult;
  plotWireframe(): boolean;
  plotAsRaster(): boolean;
  plotTransparency(): boolean;
  setPlotTransparency(bSet: boolean): void;
};

enum PlotPaperUnits {
  kInches = 0,
  kMillimeters = 1,
  kPixels = 2
};

enum PlotRotation {
  k0degrees = 0,
  k90degrees = 1,
  k180degrees = 2,
  k270degrees = 3
};

enum PlotType {
  kDisplay = 0,
  kExtents = 1,
  kLimits = 2,
  kView = 3,
  kWindow = 4,
  kLayout = 5
};

enum StdScaleType {
  kScaleToFit = 0,
  k1_128in_1ft = 1,
  k1_64in_1ft = 2,
  k1_32in_1ft = 3,
  k1_16in_1ft = 4,
  k3_32in_1ft = 5,
  k1_8in_1ft = 6,
  k3_16in_1ft = 7,
  k1_4in_1ft = 8,
  k3_8in_1ft = 9,
  k1_2in_1ft = 10,
  k3_4in_1ft = 11,
  k1in_1ft = 12,
  k3in_1ft = 13,
  k6in_1ft = 14,
  k1ft_1ft = 15,
  k1_1 = 16,
  k1_2 = 17,
  k1_4 = 18,
  k1_5 = 19,
  k1_8 = 20,
  k1_10 = 21,
  k1_16 = 22,
  k1_20 = 23,
  k1_30 = 24,
  k1_40 = 25,
  k1_50 = 26,
  k1_100 = 27,
  k2_1 = 28,
  k4_1 = 29,
  k8_1 = 30,
  k10_1 = 31,
  k100_1 = 32,
  k1000_1 = 33,
  k1and1_2in_1ft = 34
};

enum ShadePlotType {
  kAsDisplayed = 0,
  kWireframe = 1,
  kHidden = 2,
  kRendered = 3,
  kVisualStyle = 4,
  kRenderPreset = 5
};

enum ShadePlotResLevel {
  kDraft = 0,
  kPreview = 1,
  kNormal = 2,
  kPresentation = 3,
  kMaximum = 4,
  kCustom = 5
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbPoint.html} Additional documentation.
 */
class OdDbPoint extends OdDbEntity {
  constructor();
  constructor(gePoint: OdGePoint3d);
  static cast(pObj: OdRxObject): OdDbPoint;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdDbPoint;
  static rxInit(): void;
  static rxUninit(): void;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  position(): OdGePoint3d;
  setPosition(gePoint: OdGePoint3d): void;
  thickness(): number;
  setThickness(vThickness: number): void;
  normal(): OdGeVector3d;
  setNormal(geVector: OdGeVector3d): void;
  ecsRotation(): number;
  setEcsRotation(vAngle: number): void;
  isPlanar(): boolean;
  getPlane(gePlane: OdGePlane, gePlanarity: Planarity): OdResult;
  subGetGeomExtents(extents: OdGeExtents3d): OdResult;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): void;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): void;
  dxfInFields_R12(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields_R12(pFiler: OdDbDxfFiler): void;
  subTransformBy(xfm: OdGeMatrix3d): OdResult;
  subWorldDraw(pWd: OdGiWorldDraw): boolean;
  subViewportDraw(pVd: OdGiViewportDraw): void;
  subSetAttributes(pTraits: OdGiDrawableTraits): number;
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbPolyFaceMesh.html} Additional documentation.
 */
class OdDbPolyFaceMesh extends OdDbEntity {
  constructor();
  constructor(arg0: OdDbPolyFaceMesh);
  static cast(pObj: OdRxObject): OdDbPolyFaceMesh;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdDbPolyFaceMesh;
  static rxInit(): void;
  static rxUninit(): void;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  numVertices(): number;
  numFaces(): number;
  appendVertex(pVertex: OdDbPolyFaceMeshVertex): OdDbObjectId;
  appendFaceRecord(pFaceRecord: OdDbFaceRecord): OdDbObjectId;
  openVertex(subObjId: OdDbObjectId, mode: OpenMode, openErasedOne: boolean): OdDbPolyFaceMeshVertex;
  openSequenceEnd(mode: OpenMode): OdDbSequenceEnd;
  clear(): void;
  vertexIterator(): OdDbObjectIterator;
  subWorldDraw(pWd: OdGiWorldDraw): boolean;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): void;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): void;
  dxfOut(pFiler: OdDbDxfFiler): void;
  dxfIn(pFiler: OdDbDxfFiler): OdResult;
  dxfInFields_R12(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields_R12(pFiler: OdDbDxfFiler): void;
  subClose(): void;
  isPlanar(): boolean;
  getPlane(plane: OdGePlane, planarity: Planarity): OdResult;
  subTransformBy(xfm: OdGeMatrix3d): OdResult;
  subGetGeomExtents(extents: OdGeExtents3d): OdResult;
  subExplode(entitySet: OdRxObjectPtrArray): OdResult;
  explodeGeometry(entitySet: OdRxObjectPtrArray): OdResult;
  subGetSubentPathsAtGsMarker(type: SubentType, gsMark: number, arg2: OdGePoint3d, arg3: OdGeMatrix3d, subentPaths: OdDbFullSubentPathArray, pEntAndInsertStack: OdDbObjectIdArray): OdResult;
  subGetGsMarkersAtSubentPath(subPath: OdDbFullSubentPath, gsMarkers: OdGsMarkerArray): OdResult;
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbPolyFaceMeshVertex.html} Additional documentation.
 */
class OdDbPolyFaceMeshVertex extends OdDbVertex {
  constructor();
  constructor(arg0: OdDbPolyFaceMeshVertex);
  static cast(pObj: OdRxObject): OdDbPolyFaceMeshVertex;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdDbPolyFaceMeshVertex;
  static rxInit(): void;
  static rxUninit(): void;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  position(): OdGePoint3d;
  setPosition(position: OdGePoint3d): void;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): void;
  dxfInFields_R12(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields_R12(pFiler: OdDbDxfFiler): void;
  subErase(erasing: boolean): OdResult;
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbPolygonMesh.html} Additional documentation.
 */
class OdDbPolygonMesh extends OdDbEntity {
  constructor();
  constructor(arg0: OdDbPolygonMesh);
  static cast(pObj: OdRxObject): OdDbPolygonMesh;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdDbPolygonMesh;
  static rxInit(): void;
  static rxUninit(): void;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  polyMeshType(): PolyMeshType;
  setPolyMeshType(polyMeshType: PolyMeshType): void;
  convertToPolyMeshType(polyMeshType: PolyMeshType): OdResult;
  mSize(): number;
  setMSize(mSize: number): void;
  nSize(): number;
  setNSize(nSize: number): void;
  isMClosed(): boolean;
  makeMClosed(): void;
  makeMOpen(): void;
  isNClosed(): boolean;
  makeNClosed(): void;
  makeNOpen(): void;
  mSurfaceDensity(): number;
  setMSurfaceDensity(mSurfaceDensity: number): void;
  nSurfaceDensity(): number;
  setNSurfaceDensity(nSurfaceDensity: number): void;
  straighten(): void;
  surfaceFit(): OdResult;
  surfaceFit1(surfType: PolyMeshType, surfU: number, surfV: number): OdResult;
  appendVertex(pVertex: OdDbPolygonMeshVertex, vType: Vertex3dType): OdDbObjectId;
  openVertex(vertId: OdDbObjectId, mode: OpenMode, openErasedOne: boolean): OdDbPolygonMeshVertex;
  openSequenceEnd(mode: OpenMode): OdDbSequenceEnd;
  vertexIterator(): OdDbObjectIterator;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): void;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): void;
  dxfOut(pFiler: OdDbDxfFiler): void;
  dxfIn(pFiler: OdDbDxfFiler): OdResult;
  dxfInFields_R12(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields_R12(pFiler: OdDbDxfFiler): void;
  subWorldDraw(pWd: OdGiWorldDraw): boolean;
  subClose(): void;
  isPlanar(): boolean;
  getPlane(plane: OdGePlane, planarity: Planarity): OdResult;
  subTransformBy(xfm: OdGeMatrix3d): OdResult;
  subExplode(entitySet: OdRxObjectPtrArray): OdResult;
  explodeGeometry(entitySet: OdRxObjectPtrArray): OdResult;
  subGetSubentPathsAtGsMarker(type: SubentType, gsMark: number, arg2: OdGePoint3d, arg3: OdGeMatrix3d, subentPaths: OdDbFullSubentPathArray, pEntAndInsertStack: OdDbObjectIdArray): OdResult;
  subGetGsMarkersAtSubentPath(subPath: OdDbFullSubentPath, gsMarkers: OdGsMarkerArray): OdResult;
};

enum PolyMeshType {
  kSimpleMesh = 0,
  kQuadSurfaceMesh = 5,
  kCubicSurfaceMesh = 6,
  kBezierSurfaceMesh = 8
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbPolygonMeshVertex.html} Additional documentation.
 */
class OdDbPolygonMeshVertex extends OdDbVertex {
  constructor();
  constructor(arg0: OdDbPolygonMeshVertex);
  static cast(pObj: OdRxObject): OdDbPolygonMeshVertex;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdDbPolygonMeshVertex;
  static rxInit(): void;
  static rxUninit(): void;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  vertexType(): Vertex3dType;
  position(): OdGePoint3d;
  setPosition(position: OdGePoint3d): void;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): void;
  dxfInFields_R12(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields_R12(pFiler: OdDbDxfFiler): void;
  subErase(erasing: boolean): OdResult;
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbPolyline.html} Additional documentation.
 */
class OdDbPolyline extends OdDbCurve {
  constructor();
  constructor(arg0: OdDbPolyline);
  static cast(pObj: OdRxObject): OdDbPolyline;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdDbPolyline;
  static rxInit(): void;
  static rxUninit(): void;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  convertFrom(pSource: OdDbEntity, transferId: boolean): OdResult;
  convertTo(pDest: OdDb2dPolyline, transferId: boolean): OdResult;
  getPointAt(vertexIndex: number, point2d: OdGePoint2d): void;
  getPointAt1(vertexIndex: number, point3d: OdGePoint3d): void;
  segType(segmentIndex: number): SegType;
  getLineSegAt(segmentIndex: number, line2d: OdGeLineSeg2d): void;
  getLineSegAt1(segmentIndex: number, line3d: OdGeLineSeg3d): void;
  getArcSegAt(segmentIndex: number, arc2d: OdGeCircArc2d): void;
  getArcSegAt1(segmentIndex: number, arc3d: OdGeCircArc3d): void;
  onSegAt(segmentIndex: number, point2d: OdGePoint2d, param: number): boolean;
  setClosed(closed: boolean): void;
  setPlinegen(plinegen: boolean): void;
  setElevation(elevation: number): void;
  setThickness(thickness: number): void;
  setConstantWidth(constantWidth: number): void;
  setNormal(normal: OdGeVector3d): void;
  isOnlyLines(): boolean;
  hasPlinegen(): boolean;
  elevation(): number;
  thickness(): number;
  getConstantWidth(): number;
  getConstantWidth1(dWidth: number): OdResult;
  normal(): OdGeVector3d;
  addVertexAt(vertexIndex: number, point2d: OdGePoint2d, bulge: number, startWidth: number, endWidth: number, vertexIdentifier: number): void;
  removeVertexAt(vertexIndex: number): void;
  numVerts(): number;
  getBulgeAt(index: number): number;
  getVertexIdentifierAt(index: number): number;
  getWidthsAt(segmentIndex: number, startWidth: number, endWidth: number): void;
  setPointAt(vertexIndex: number, point2d: OdGePoint2d): void;
  setBulgeAt(index: number, bulge: number): void;
  setVertexIdentifierAt(index: number, suggestedId: number): void;
  setWidthsAt(index: number, startWidth: number, endWidth: number): void;
  minimizeMemory(): void;
  maximizeMemory(): void;
  reset(reuse: boolean, numVerts: number): void;
  hasBulges(): boolean;
  hasVertexIdentifiers(): boolean;
  hasWidth(): boolean;
  subGetTransformedCopy(mat: OdGeMatrix3d, pCopy: OdDbEntity): OdResult;
  subTransformBy(xfm: OdGeMatrix3d): OdResult;
  subWorldDraw(pWd: OdGiWorldDraw): boolean;
  subViewportDraw(pVd: OdGiViewportDraw): void;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): void;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfInFields_R12(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): void;
  isPlanar(): boolean;
  getPlane(plane: OdGePlane, planarity: Planarity): OdResult;
  isClosed(): boolean;
  isPeriodic(): boolean;
  getStartParam(startParam: number): OdResult;
  getEndParam(endParam: number): OdResult;
  getStartPoint(startPoint: OdGePoint3d): OdResult;
  getEndPoint(endPoint: OdGePoint3d): OdResult;
  getPointAtParam(param: number, pointOnCurve: OdGePoint3d): OdResult;
  getParamAtPoint(pointOnCurve: OdGePoint3d, param: number): OdResult;
  getFirstDeriv(param: number, firstDeriv: OdGeVector3d): OdResult;
  getSecondDeriv(param: number, secondDeriv: OdGeVector3d): OdResult;
  getArea(area: number): OdResult;
  getDistAtParam(param: number, dist: number): OdResult;
  getParamAtDist(dist: number, param: number): OdResult;
  subExplode(entitySet: OdRxObjectPtrArray): OdResult;
  explodeGeometry(entitySet: OdRxObjectPtrArray): OdResult;
  subGetSubentPathsAtGsMarker(type: SubentType, gsMark: number, pickPoint: OdGePoint3d, viewXform: OdGeMatrix3d, subentPaths: OdDbFullSubentPathArray, pEntAndInsertStack: OdDbObjectIdArray): OdResult;
  subGetGsMarkersAtSubentPath(subPath: OdDbFullSubentPath, gsMarkers: OdGsMarkerArray): OdResult;
  subSubentPtr(path: OdDbFullSubentPath): OdDbEntity;
  reverseCurve(): OdResult;
  getEcs(): OdGeMatrix3d;
  setFromOdGeCurve(geCurve: OdGeCurve3d, normal: OdGeVector3d, tol: OdGeTol): OdResult;
  subSetDatabaseDefaults(pDb: OdDbDatabase, doSubEnts: boolean): void;
  getSplitCurves(points: OdGePoint3dArray, curveSegments: OdRxObjectPtrArray): OdResult;
  getSplitCurves1(params: OdGeDoubleArray, curveSegments: OdRxObjectPtrArray): OdResult;
};

enum SegType {
  kLine = 0,
  kArc = 1,
  kCoincident = 2,
  kPoint = 3,
  kEmpty = 4
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbRadialDimension.html} Additional documentation.
 */
class OdDbRadialDimension extends OdDbDimension {
  constructor();
  constructor(arg0: OdDbRadialDimension);
  static cast(pObj: OdRxObject): OdDbRadialDimension;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdDbRadialDimension;
  static rxInit(): void;
  static rxUninit(): void;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  setLeaderLength(leaderLength: number): void;
  leaderLength(): number;
  center(): OdGePoint3d;
  setCenter(center: OdGePoint3d): void;
  chordPoint(): OdGePoint3d;
  setChordPoint(chordPoint: OdGePoint3d): void;
  extArcOn(): boolean;
  extArcStartAngle(): number;
  setExtArcStartAngle(newAngle: number): void;
  extArcEndAngle(): number;
  setExtArcEndAngle(newAngle: number): void;
  dxfInFields_R12(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields_R12(pFiler: OdDbDxfFiler): void;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): void;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): void;
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbRadialDimensionLarge.html} Additional documentation.
 */
class OdDbRadialDimensionLarge extends OdDbDimension {
  constructor();
  constructor(arg0: OdDbRadialDimensionLarge);
  static cast(pObj: OdRxObject): OdDbRadialDimensionLarge;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdDbRadialDimensionLarge;
  static rxInit(): void;
  static rxUninit(): void;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  center(): OdGePoint3d;
  setCenter(center: OdGePoint3d): void;
  chordPoint(): OdGePoint3d;
  setChordPoint(chordPoint: OdGePoint3d): void;
  overrideCenter(): OdGePoint3d;
  setOverrideCenter(overrideCenter: OdGePoint3d): void;
  jogPoint(): OdGePoint3d;
  setJogPoint(jogPoint: OdGePoint3d): void;
  jogAngle(): number;
  setJogAngle(jogAngle: number): void;
  extArcOn(): boolean;
  extArcStartAngle(): number;
  setExtArcStartAngle(newAngle: number): void;
  extArcEndAngle(): number;
  setExtArcEndAngle(newAngle: number): void;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): void;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): void;
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbRay.html} Additional documentation.
 */
class OdDbRay extends OdDbCurve {
  constructor();
  constructor(arg0: OdDbRay);
  static cast(pObj: OdRxObject): OdDbRay;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdDbRay;
  static rxInit(): void;
  static rxUninit(): void;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  basePoint(): OdGePoint3d;
  setBasePoint(geBasePoint: OdGePoint3d): void;
  unitDir(): OdGeVector3d;
  setUnitDir(geDirVector: OdGeVector3d): void;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): void;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): void;
  subWorldDraw(pWd: OdGiWorldDraw): boolean;
  subGetGeomExtents(extents: OdGeExtents3d): OdResult;
  isClosed(): boolean;
  isPeriodic(): boolean;
  isPlanar(): boolean;
  getPlane(gePlane: OdGePlane, gePlanarity: Planarity): OdResult;
  getStartParam(startParam: number): OdResult;
  getEndParam(endParam: number): OdResult;
  getStartPoint(startPoint: OdGePoint3d): OdResult;
  getEndPoint(endPoint: OdGePoint3d): OdResult;
  getPointAtParam(param: number, pointOnCurve: OdGePoint3d): OdResult;
  getParamAtPoint(pointOnCurve: OdGePoint3d, param: number): OdResult;
  getDistAtParam(param: number, dist: number): OdResult;
  getParamAtDist(dist: number, param: number): OdResult;
  getFirstDeriv(param: number, firstDeriv: OdGeVector3d): OdResult;
  getSecondDeriv(param: number, secondDeriv: OdGeVector3d): OdResult;
  getArea(area: number): OdResult;
  subTransformBy(xfm: OdGeMatrix3d): OdResult;
  setFromOdGeCurve(geCurve: OdGeCurve3d, normal: OdGeVector3d, tol: OdGeTol): OdResult;
  getSplitCurves(points: OdGePoint3dArray, curveSegments: OdRxObjectPtrArray): OdResult;
  getSplitCurves1(params: OdGeDoubleArray, curveSegments: OdRxObjectPtrArray): OdResult;
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbRegion.html} Additional documentation.
 */
class OdDbRegion extends OdDbEntity {
  constructor();
  constructor(arg0: OdDbRegion);
  static cast(pObj: OdRxObject): OdDbRegion;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdDbRegion;
  static rxInit(): void;
  static rxUninit(): void;
  static createFromCurves(curveSegments: OdRxObjectPtrArray, regions: OdRxObjectPtrArray): OdResult;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  acisOut(pStreamBuf: OdStreamBuf, typeVer: number): OdResult;
  acisIn(pStreamBuf: OdStreamBuf, typeVer: number): OdResult;
  brep(brep: OdBrBrep): void;
  getFaceMesh(mesh: OdGeTrMesh, iFace: number, triangulationParams: wrTriangulationParams): boolean;
  isNull(): boolean;
  getNormal(normal: OdGeVector3d): OdResult;
  isPlanar(): boolean;
  getPlane(plane: OdGePlane, planarity: Planarity): OdResult;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): void;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): void;
  subWorldDraw(pWd: OdGiWorldDraw): boolean;
  decomposeForSave(ver: DwgVersion, replaceId: OdDbObjectId, exchangeXData: boolean): OdDbObject;
  subExplode(entitySet: OdRxObjectPtrArray): OdResult;
  subTransformBy(xfm: OdGeMatrix3d): OdResult;
  saveAs(pWd: OdGiWorldDraw, ver: DwgVersion): void;
  booleanOper(operation: BoolOperType, otherRegion: OdDbRegion): OdResult;
  getArea(regionArea: number): OdResult;
  getPerimeter(arg0: number): OdResult;
  getAreaProp(origin: OdGePoint3d, xAxis: OdGeVector3d, yAxis: OdGeVector3d, perimeter: number, area: number, centroid: OdGePoint2d, momInertia: number, prodInertia: number, prinMoments: number, prinAxes: OdGeVector2d, radiiGyration: number, extentsLow: OdGePoint2d, extentsHigh: OdGePoint2d): OdResult;
  subIntersectWith(pEnt: OdDbEntity, intType: Intersect, points: OdGePoint3dArray, thisGsMarker: number, otherGsMarker: number): OdResult;
  subIntersectWith1(pEnt: OdDbEntity, intType: Intersect, projPlane: OdGePlane, points: OdGePoint3dArray, thisGsMarker: number, otherGsMarker: number): OdResult;
  subSubentPtr(id: OdDbFullSubentPath): OdDbEntity;
  subGetGsMarkersAtSubentPath(subPath: OdDbFullSubentPath, gsMarkers: OdGsMarkerArray): OdResult;
  subGetSubentPathsAtGsMarker(type: SubentType, gsMark: number, pickPoint: OdGePoint3d, viewXform: OdGeMatrix3d, subentPaths: OdDbFullSubentPathArray, pEntAndInsertStack: OdDbObjectIdArray): OdResult;
  numChanges(): number;
  subSetAttributes(pTraits: OdGiDrawableTraits): number;
  subGetGeomExtents(extents: OdGeExtents3d): OdResult;
  subClose(): void;
  copyFrom(pSource: OdRxObject): void;
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbRotatedDimension.html} Additional documentation.
 */
class OdDbRotatedDimension extends OdDbDimension {
  constructor();
  constructor(arg0: OdDbRotatedDimension);
  static cast(pObj: OdRxObject): OdDbRotatedDimension;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdDbRotatedDimension;
  static rxInit(): void;
  static rxUninit(): void;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  xLine1Point(): OdGePoint3d;
  setXLine1Point(xLine1Point: OdGePoint3d): void;
  xLine2Point(): OdGePoint3d;
  setXLine2Point(xLine2Point: OdGePoint3d): void;
  dimLinePoint(): OdGePoint3d;
  setDimLinePoint(dimLinePoint: OdGePoint3d): void;
  oblique(): number;
  setOblique(oblique: number): void;
  rotation(): number;
  setRotation(rotation: number): void;
  jogSymbolOn(): boolean;
  setJogSymbolOn(value: boolean): void;
  jogSymbolPosition(): OdGePoint3d;
  setJogSymbolPosition(pt: OdGePoint3d): void;
  jogSymbolHeight(): number;
  setJogSymbolHeight(value: number): void;
  dxfInFields_R12(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields_R12(pFiler: OdDbDxfFiler): void;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): void;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): void;
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbParametrizedSF.html} Additional documentation.
 */
class OdDbParametrizedSF extends OdDbSelectionFilter {
  static createObject(pSpec: OdResBuf, pDb: OdDbDatabase): OdDbParametrizedSF;
  setSpecification(arg0: OdResBuf, arg1: OdDbDatabase): void;
  specification(): OdResBuf;
  database(): OdDbDatabase;
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbSelectionFilter.html} Additional documentation.
 */
class OdDbSelectionFilter extends OdRxObject {
  static cast(pObj: OdRxObject): OdDbSelectionFilter;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdDbSelectionFilter;
  static rxInit(): void;
  static rxUninit(): void;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  accept(entityId: OdDbObjectId): boolean;
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbSelectionSetIterator.html} Additional documentation.
 */
class OdDbSelectionSetIterator extends OdSelectionSetIterator {
  static cast(pObj: OdRxObject): OdDbSelectionSetIterator;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdDbSelectionSetIterator;
  static rxInit(): void;
  static rxUninit(): void;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  objectId(): OdDbObjectId;
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbSelectionSet.html} Additional documentation.
 */
class OdDbSelectionSet extends OdSelectionSet {
  static cast(pObj: OdRxObject): OdDbSelectionSet;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdDbSelectionSet;
  static rxInit(): void;
  static rxUninit(): void;
  static createObject1(pDb: OdDbDatabase): OdDbSelectionSet;
  static select(pDb: OdDbDatabase, pFilter: OdRxObject): OdDbSelectionSet;
  static select1(vpId: OdDbObjectId, nPoints: number, wcsPts: OdGePoint3d, mode: Mode, sm: number, pFilter: OdRxObject): OdDbSelectionSet;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  database(): OdDbDatabase;
  objectIdArray(): OdDbObjectIdArray;
  append(entityId: OdDbObjectId, pMethod: OdDbSelectionMethod): void;
  append1(entityIds: OdDbObjectIdArray, pMethod: OdDbSelectionMethod): void;
  append2(subent: OdDbFullSubentPath, pMethod: OdDbSelectionMethod): void;
  append3(pSSet: OdSelectionSet): void;
  remove(entityId: OdDbObjectId): void;
  remove1(entityIds: OdDbObjectIdArray): void;
  remove2(subent: OdDbFullSubentPath): void;
  remove3(pSSet: OdSelectionSet): void;
  isMember(entityId: OdDbObjectId): boolean;
  isMember1(subent: OdDbFullSubentPath): boolean;
  method(entityId: OdDbObjectId): OdDbSelectionMethod;
  subentCount(rootEntityId: OdDbStub): number;
  getSubentity(entityId: OdDbObjectId, i: number, path: OdDbFullSubentPath): boolean;
  method1(subent: OdDbFullSubentPath): OdDbSelectionMethod;
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbShape.html} Additional documentation.
 */
class OdDbShape extends OdDbEntity {
  constructor();
  constructor(arg0: OdDbShape);
  static cast(pObj: OdRxObject): OdDbShape;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdDbShape;
  static rxInit(): void;
  static rxUninit(): void;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  position(): OdGePoint3d;
  setPosition(position: OdGePoint3d): void;
  size(): number;
  setSize(size: number): void;
  name(): OdString;
  setName(name: OdString): OdResult;
  rotation(): number;
  setRotation(rotation: number): void;
  widthFactor(): number;
  setWidthFactor(widthFactor: number): void;
  oblique(): number;
  setOblique(oblique: number): void;
  thickness(): number;
  setThickness(thickness: number): void;
  normal(): OdGeVector3d;
  setNormal(normal: OdGeVector3d): void;
  isPlanar(): boolean;
  getPlane(plane: OdGePlane, planarity: Planarity): OdResult;
  shapeNumber(): number;
  setShapeNumber(shapeNumber: number): void;
  styleId(): OdDbObjectId;
  setStyleId(styleId: OdDbObjectId): OdResult;
  subWorldDraw(pWd: OdGiWorldDraw): boolean;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): void;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): void;
  dxfOut(pFiler: OdDbDxfFiler): void;
  dxfInFields_R12(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields_R12(pFiler: OdDbDxfFiler): void;
  subTransformBy(xfm: OdGeMatrix3d): OdResult;
  getEcs(): OdGeMatrix3d;
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbSolid.html} Additional documentation.
 */
class OdDbSolid extends OdDbEntity {
  constructor();
  constructor(arg0: OdDbSolid);
  static cast(pObj: OdRxObject): OdDbSolid;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdDbSolid;
  static rxInit(): void;
  static rxUninit(): void;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  getPointAt(pointIndex: number, pointValue: OdGePoint3d): void;
  setPointAt(pointIndex: number, pointValue: OdGePoint3d): void;
  thickness(): number;
  setThickness(vThickness: number): void;
  normal(): OdGeVector3d;
  setNormal(geVector: OdGeVector3d): void;
  getPlane(gePlane: OdGePlane, gePlanarity: Planarity): OdResult;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): void;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): void;
  dxfInFields_R12(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields_R12(pFiler: OdDbDxfFiler): void;
  subWorldDraw(pWd: OdGiWorldDraw): boolean;
  subViewportDraw(pVd: OdGiViewportDraw): void;
  subTransformBy(xfm: OdGeMatrix3d): OdResult;
  subGetSubentPathsAtGsMarker(type: SubentType, gsMark: number, arg2: OdGePoint3d, arg3: OdGeMatrix3d, subentPaths: OdDbFullSubentPathArray, pEntAndInsertStack: OdDbObjectIdArray): OdResult;
  subGetGsMarkersAtSubentPath(subPath: OdDbFullSubentPath, gsMarkers: OdGsMarkerArray): OdResult;
  getEcs(): OdGeMatrix3d;
};

class HandlePairsArray extends OdArray<any> { };

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbSortentsTable.html} Additional documentation.
 */
class OdDbSortentsTable extends OdDbObject {
  constructor();
  constructor(arg0: OdDbSortentsTable);
  static cast(pObj: OdRxObject): OdDbSortentsTable;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdDbSortentsTable;
  static rxInit(): void;
  static rxUninit(): void;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  getSortHandle(id: OdDbObjectId, h: OdDbHandle): void;
  moveToBottom(entityIds: OdDbObjectIdArray): void;
  moveToTop(entityIds: OdDbObjectIdArray): void;
  moveBelow(entityIds: OdDbObjectIdArray, targetId: OdDbObjectId): void;
  moveAbove(entityIds: OdDbObjectIdArray, targetId: OdDbObjectId): void;
  swapOrder(firstId: OdDbObjectId, secondId: OdDbObjectId): void;
  blockId(): OdDbObjectId;
  firstEntityIsDrawnBeforeSecond(firstID: OdDbObjectId, secondID: OdDbObjectId): boolean;
  getFullDrawOrder(entityIds: OdDbObjectIdArray, honorSortentsMask: number): void;
  getRelativeDrawOrder(entityIds: OdDbObjectIdArray, honorSortentsMask: number): void;
  setRelativeDrawOrder(entityIds: OdDbObjectIdArray): void;
  setAbsoluteDrawOrder(handlePairs: HandlePairsArray): void;
  getAbsoluteDrawOrder(handlePairs: HandlePairsArray): void;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): void;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): void;
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbSpline.html} Additional documentation.
 */
class OdDbSpline extends OdDbCurve {
  constructor();
  constructor(arg0: OdDbSpline);
  static cast(pObj: OdRxObject): OdDbSpline;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdDbSpline;
  static rxInit(): void;
  static rxUninit(): void;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  isRational(): boolean;
  degree(): number;
  elevateDegree(newDegree: number): void;
  numControlPoints(): number;
  getControlPointAt(controlPointIndex: number, point: OdGePoint3d): void;
  setControlPointAt(controlPointIndex: number, point: OdGePoint3d): void;
  numFitPoints(): number;
  getFitPointAt(fitPointIndex: number, point: OdGePoint3d): OdResult;
  setFitPointAt(fitPointIndex: number, point: OdGePoint3d): void;
  insertFitPointAt(fitPointIndex: number, point: OdGePoint3d): void;
  removeFitPointAt(fitPointIndex: number): void;
  fitTolerance(): number;
  setFitTol(fitTolerance: number): void;
  getFitTangents(startTangent: OdGeVector3d, endTangent: OdGeVector3d): OdResult;
  setFitTangents(startTangent: OdGeVector3d, endTangent: OdGeVector3d): void;
  hasFitData(): boolean;
  getFitData(fitPoints: OdGePoint3dArray, degree: number, fitTolerance: number, tangentsExist: boolean, startTangent: OdGeVector3d, endTangent: OdGeVector3d): OdResult;
  getFitData1(fitPoints: OdGePoint3dArray, degree: number, fitTolerance: number, tangentsExist: boolean, startTangent: OdGeVector3d, endTangent: OdGeVector3d, knotParam: OdGeKnotParameterization): OdResult;
  setFitData(fitPoints: OdGePoint3dArray, degree: number, fitTolerance: number, startTangent: OdGeVector3d, endTangent: OdGeVector3d): void;
  setFitData1(fitPoints: OdGePoint3dArray, degree: number, fitTolerance: number, startTangent: OdGeVector3d, endTangent: OdGeVector3d, knotParam: OdGeKnotParameterization): void;
  purgeFitData(): void;
  getNurbsData(degree: number, rational: boolean, closed: boolean, periodic: boolean, controlPoints: OdGePoint3dArray, knots: OdGeDoubleArray, weights: OdGeDoubleArray, controlPtTol: number, knotTol: number): void;
  getNurbsData1(degree: number, rational: boolean, closed: boolean, periodic: boolean, controlPoints: OdGePoint3dArray, knots: OdGeKnotVector, weights: OdGeDoubleArray, controlPtTol: number): void;
  setNurbsData(degree: number, rational: boolean, closed: boolean, periodic: boolean, controlPoints: OdGePoint3dArray, knots: OdGeDoubleArray, weights: OdGeDoubleArray, controlPtTol: number, knotTol: number): void;
  setNurbsData1(degree: number, rational: boolean, closed: boolean, periodic: boolean, controlPoints: OdGePoint3dArray, knots: OdGeKnotVector, weights: OdGeDoubleArray, controlPtTol: number): void;
  weightAt(weightIndex: number): number;
  setWeightAt(weightIndex: number, weight: number): void;
  insertKnot(param: number): void;
  reverseCurve(): OdResult;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): void;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): void;
  subWorldDraw(pWd: OdGiWorldDraw): boolean;
  subTransformBy(xfm: OdGeMatrix3d): OdResult;
  isPlanar(): boolean;
  getPlane(plane: OdGePlane, planarity: Planarity): OdResult;
  getPointAtParam(param: number, pointOnCurve: OdGePoint3d): OdResult;
  getParamAtPoint(pointOnCurve: OdGePoint3d, param: number): OdResult;
  getStartParam(startParam: number): OdResult;
  getEndParam(endParam: number): OdResult;
  getStartPoint(startPoint: OdGePoint3d): OdResult;
  getEndPoint(endPoint: OdGePoint3d): OdResult;
  getDistAtParam(param: number, dist: number): OdResult;
  getParamAtDist(dist: number, param: number): OdResult;
  getFirstDeriv(param: number, firstDeriv: OdGeVector3d): OdResult;
  getSecondDeriv(param: number, secondDeriv: OdGeVector3d): OdResult;
  getArea(area: number): OdResult;
  getSplitCurves(points: OdGePoint3dArray, curveSegments: OdRxObjectPtrArray): OdResult;
  getSplitCurves1(params: OdGeDoubleArray, curveSegments: OdRxObjectPtrArray): OdResult;
  decomposeForSave(ver: DwgVersion, replaceId: OdDbObjectId, exchangeXData: boolean): OdDbObject;
  type(): SplineType;
  setType(type: SplineType): OdResult;
  cvFrame(): boolean;
  setCvFrame(bVisible: boolean): void;
  insertControlPointAt(knotParam: number, ctrlPt: OdGePoint3d, weight: number): OdResult;
  removeControlPointAt(index: number): OdResult;
  isNull(): boolean;
  modifyPositionAndTangent(param: number, point: OdGePoint3d, deriv: OdGeVector3d): boolean;
  setFromOdGeCurve(geCurve: OdGeCurve3d, normal: OdGeVector3d, tol: OdGeTol): OdResult;
  subExplode(entitySet: OdRxObjectPtrArray): OdResult;
};

enum SplineType {
  kFitPoints = 0,
  kControlPoints = 1
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbSplinePE.html} Additional documentation.
 */
class OdDbSplinePE extends OdRxObject {
  static cast(pObj: OdRxObject): OdDbSplinePE;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdDbSplinePE;
  static rxInit(): void;
  static rxUninit(): void;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  getParamAtPoint(pCurve: OdDbCurve, pointOnCurve: OdGePoint3d, param: number): OdResult;
  getArea(pCurve: OdDbCurve, area: number): OdResult;
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbSubDMesh.html} Additional documentation.
 */
class OdDbSubDMesh extends OdDbEntity {
  constructor();
  constructor(arg0: OdDbSubDMesh);
  static cast(pObj: OdRxObject): OdDbSubDMesh;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdDbSubDMesh;
  static rxInit(): void;
  static rxUninit(): void;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  subWorldDraw(pWd: OdGiWorldDraw): boolean;
  subSetAttributes(pTraits: OdGiDrawableTraits): number;
  decomposeForSave(ver: DwgVersion, replaceId: OdDbObjectId, exchangeXData: boolean): OdDbObject;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): void;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): void;
  subTransformBy(xfm: OdGeMatrix3d): OdResult;
  subGetGeomExtents(extents: OdGeExtents3d): OdResult;
  subExplode(entitySet: OdRxObjectPtrArray): OdResult;
  setSubDMesh(vertexArray: OdGePoint3dArray, faceArray: OdInt32Array, subDLevel: number): OdResult;
  setSphere(radius: number, divAxis: number, divHeight: number, subDLevel: number): OdResult;
  setCylinder(majorRadius: number, minorRadius: number, height: number, divAxis: number, divHeight: number, divCap: number, subDLevel: number): OdResult;
  setCone(majorRadius: number, minorRadius: number, height: number, divAxis: number, divHeight: number, divCap: number, radiusRatio: number, subDLevel: number): OdResult;
  setTorus(majorRadius: number, divSection: number, divSweepPath: number, sectionRadiusRatio: number, sectionRotate: number, subDLevel: number): OdResult;
  setBox(xLen: number, yLen: number, zLen: number, divX: number, divY: number, divZ: number, subDLevel: number): OdResult;
  setWedge(xLen: number, yLen: number, zLen: number, divLength: number, divWidth: number, divHeight: number, divSlope: number, divCap: number, subDLevel: number): OdResult;
  setPyramid(radius: number, height: number, divLength: number, divHeight: number, divCap: number, nSides: number, radiusRatio: number, subDLevel: number): OdResult;
  computeRayIntersection(rayStart: OdGePoint3d, rayDir: OdGeVector3d, retSubentsArray: any, retIntersectDistArray: any, retIntersectPoint: OdGePoint3dArray): OdResult;
  subdDivideUp(): OdResult;
  subdDivideDown(): OdResult;
  subdRefine(): OdResult;
  subdRefine1(subentPaths: OdDbFullSubentPathArray): OdResult;
  subdLevel(result: number): OdResult;
  splitFace(subentFaceId: OdDbSubentId, subent0: OdDbSubentId, point0: OdGePoint3d, subent1: OdDbSubentId, point1: OdGePoint3d): OdResult;
  extrudeFaces(subentPaths: OdDbFullSubentPathArray, length: number, dir: OdGeVector3d, taper: number): OdResult;
  extrudeFaces1(subentPaths: OdDbFullSubentPathArray, alongPath: OdGePoint3dArray, taper: number): OdResult;
  extrudeConnectedFaces(subentPaths: OdDbFullSubentPathArray, length: number, dir: OdGeVector3d, taper: number): OdResult;
  negate(): OdResult;
  isWatertight(result: boolean): OdResult;
  numOfFaces(result: number): OdResult;
  numOfSubDividedFaces(result: number): OdResult;
  numOfSubDividedFacesAt(subentPaths: OdDbFullSubentPathArray, result: number): OdResult;
  numOfVertices(result: number): OdResult;
  numOfSubDividedVertices(result: number): OdResult;
  numOfEdges(result: number): OdResult;
  getVertices(vertexArray: OdGePoint3dArray): OdResult;
  getEdgeArray(edgeArray: OdInt32Array): OdResult;
  getFaceArray(faceArray: OdInt32Array): OdResult;
  getNormalArray(normalArray: OdGeVector3dArray): OdResult;
  getSubDividedVertices(vertexArray: OdGePoint3dArray): OdResult;
  getSubDividedFaceArray(faceArray: OdInt32Array): OdResult;
  getSubDividedNormalArray(normalArray: OdGeVector3dArray): OdResult;
  getVertexAt(nIndex: number, vertex: OdGePoint3d): OdResult;
  setVertexAt(nIndex: number, vertex: OdGePoint3d): OdResult;
  getVertexAt1(id: OdDbSubentId, vertex: OdGePoint3d): OdResult;
  setVertexAt1(id: OdDbSubentId, vertex: OdGePoint3d): OdResult;
  getSubDividedVertexAt(nIndex: number, vertex: OdGePoint3d): OdResult;
  getSubDividedVertexAt1(id: OdDbSubentId, vertex: OdGePoint3d): OdResult;
  setCrease(creaseVal: number): OdResult;
  setCrease1(subentPaths: OdDbFullSubentPathArray, creaseVal: number): OdResult;
  getCrease(subentPaths: OdDbFullSubentPathArray, result: OdDoubleArray): OdResult;
  getCrease1(id: OdDbSubentId, result: number): OdResult;
  getAdjacentSubentPath(path: OdDbFullSubentPath, type: SubentType, subentPaths: OdDbFullSubentPathArray): OdResult;
  getSubentPath(nIndex: number, type: SubentType, subentPaths: OdDbFullSubentPathArray): OdResult;
  convertToSurface(bConvertAsSmooth: boolean, id: OdDbSubentId, pSurface: OdDbSurface): OdResult;
  convertToSurface1(bConvertAsSmooth: boolean, optimize: boolean, pSurface: OdDbSurface): OdResult;
  convertToSolid(bConvertAsSmooth: boolean, optimize: boolean, pSolid: OdDb3dSolid): OdResult;
  getSubentColor(id: OdDbSubentId, color: OdCmColor): OdResult;
  setSubentColor(id: OdDbSubentId, color: OdCmColor): OdResult;
  getSubentMaterial(id: OdDbSubentId, material: OdDbObjectId): OdResult;
  setSubentMaterial(id: OdDbSubentId, material: OdDbObjectId): OdResult;
  getSubentMaterialMapper(id: OdDbSubentId, mapper: OdGiMapper): OdResult;
  setSubentMaterialMapper(id: OdDbSubentId, mapper: OdGiMapper): OdResult;
  getFacePlane(id: OdDbSubentId, facePlane: OdGePlane): OdResult;
  computeVolume(retVolume: number): OdResult;
  computeSurfaceArea(retSurfArea: number): OdResult;
  getVertexNormalArray(arrNorm: OdGeVector3dArray): OdResult;
  getVertexTextureArray(arrPts: OdGePoint3dArray): OdResult;
  getVertexColorArray(arrColor: OdCmEntityColorArray): OdResult;
  setVertexNormalArray(arrNorm: OdGeVector3dArray): OdResult;
  setVertexTextureArray(arrPts: OdGePoint3dArray): OdResult;
  setVertexColorArray(arrColor: OdCmEntityColorArray): OdResult;
  clearVertexNormalArray(): OdResult;
  clearVertexTextureArray(): OdResult;
  clearVertexColorArray(): OdResult;
  subGetSubentPathsAtGsMarker(type: SubentType, gsMarker: number, pickPoint: OdGePoint3d, xrm: OdGeMatrix3d, subentPaths: OdDbFullSubentPathArray, pEntAndInsertStack: OdDbObjectIdArray): OdResult;
  subGetGsMarkersAtSubentPath(subPath: OdDbFullSubentPath, gsMarkers: OdGsMarkerArray): OdResult;
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbFullSubentPath.html} Additional documentation.
 */
class OdDbFullSubentPath extends OdDbBaseFullSubentPath {
  constructor();
  constructor(type: SubentType, index: number);
  constructor(entId: OdDbObjectId, type: SubentType, index: number);
  constructor(basePath: OdDbBaseFullSubentPath);
  objectIds(objectIdsArg: OdDbObjectIdArray): void;
  objectIds1(): OdDbObjectIdArray;
  objectIds2(): OdDbObjectIdArray;
  subentId(): OdDbSubentId;
  subentId1(): OdDbSubentId;
  static ctr1(entId: OdDbObjectId, subId: OdDbSubentId): OdDbFullSubentPath;
  static ctr2(objectIds: OdDbObjectIdArray, subId: OdDbSubentId): OdDbFullSubentPath;
  static ctr3(objectIds: OdDbStubPtrArray, subId: OdDbSubentId): OdDbFullSubentPath;
  static ctr4(arg0: OdDbFullSubentPath): OdDbFullSubentPath;
};

class OdDbFullSubentPathArray extends OdArray<OdDbFullSubentPath> { };

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbSurface.html} Additional documentation.
 */
class OdDbSurface extends OdDbEntity {
  constructor();
  constructor(arg0: OdDbSurface);
  static cast(pObj: OdRxObject): OdDbSurface;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdDbSurface;
  static rxInit(): void;
  static rxUninit(): void;
  static createFrom(pFromEntity: OdDbEntity, pNewSurface: OdDbSurface): OdResult;
  static trimSurface(blankSurfaceId: OdDbObjectId, toolIds: OdDbObjectIdArray, toolCurveIds: OdDbObjectIdArray, projVectors: OdGeVector3dArray, pickPoint: OdGePoint3d, viewVector: OdGeVector3d, bAutoExtend: boolean, bAssociativeEnabled: boolean): OdResult;
  static createOffsetSurface(pInputSurface: OdDbEntity, dOffsetDistance: number, offsetSurface: OdDbEntity): OdResult;
  static createOffsetSurface1(pInputSurface: OdDbEntity, dOffsetDistance: number, bAssociativeEnabled: boolean, offsetSurfaceId: OdDbObjectId): OdResult;
  static createFilletSurface(surfId1: OdDbObjectId, pickPt1: OdGePoint3d, surfId2: OdDbObjectId, pickPt2: OdGePoint3d, dRadius: number, trimMode: FilletTrimMode, projDir: OdGeVector3d, filletSurface: OdDbSurface): OdResult;
  static createFilletSurface1(surfId1: OdDbObjectId, pickPt1: OdGePoint3d, surfId2: OdDbObjectId, pickPt2: OdGePoint3d, dRadius: number, trimMode: FilletTrimMode, projDir: OdGeVector3d, bAssociativeEnabled: boolean, filletSurfaceId: OdDbObjectId): OdResult;
  static createExtendSurface(sourceSurface: OdDbObjectId, edgesIdArray: any, dExtDist: number, extOption: EdgeExtensionType, bAssociativeEnabled: boolean, newExtendSurfaceId: OdDbObjectId): OdResult;
  static createNetworkSurface(uProfilesArray: any, vProfilesArray: any, newSurface: OdDbSurface): OdResult;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  uIsolineDensity(): number;
  setUIsolineDensity(numIsolines: number): void;
  vIsolineDensity(): number;
  setVIsolineDensity(numIsolines: number): void;
  convertToRegion(regions: OdDbEntityPtrArray): OdResult;
  thicken(thickness: number, bBothSides: boolean, pSolid: OdDb3dSolid): OdResult;
  getArea(area: number): OdResult;
  isNull(): boolean;
  acisOut(pStreamBuf: OdStreamBuf, typeVer: number): OdResult;
  acisIn(pStreamBuf: OdStreamBuf, pTypeVer: number): OdResult;
  brep(brep: OdBrBrep): void;
  getFaceMesh(mesh: OdGeTrMesh, iFace: number, triangulationParams: wrTriangulationParams): boolean;
  decomposeForSave(ver: DwgVersion, replaceId: OdDbObjectId, exchangeXData: boolean): OdDbObject;
  subExplode(entitySet: OdRxObjectPtrArray): OdResult;
  subTransformBy(xfm: OdGeMatrix3d): OdResult;
  saveAs(pWd: OdGiWorldDraw, ver: DwgVersion): void;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): void;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): void;
  subWorldDraw(pWd: OdGiWorldDraw): boolean;
  subViewportDraw(pVd: OdGiViewportDraw): void;
  subSubentPtr(id: OdDbFullSubentPath): OdDbEntity;
  createInterferenceObjects(interferenceObjects: OdDbEntityPtrArray, pEntity: OdDbEntity, flags: number): OdResult;
  booleanUnion(pSurface: OdDbSurface, pNewSurface: OdDbSurface): OdResult;
  booleanSubtract(pSurface: OdDbSurface, pNewSurface: OdDbSurface): OdResult;
  booleanSubtract1(pSolid: OdDb3dSolid, pNewSurface: OdDbSurface): OdResult;
  booleanIntersect(pSurface: OdDbSurface, intersectionEntities: OdDbEntityPtrArray): OdResult;
  booleanIntersect1(pSolid: OdDb3dSolid, intersectionEntities: OdDbEntityPtrArray): OdResult;
  imprintEntity(pEntity: OdDbEntity): OdResult;
  createSectionObjects(sectionPlane: OdGePlane, sectionObjects: OdDbEntityPtrArray): OdResult;
  sliceByPlane(slicePlane: OdGePlane, pNegHalfSurface: OdDbSurface, pNewSurface: OdDbSurface): OdResult;
  sliceBySurface(pSlicingSurface: OdDbSurface, pNegHalfSurface: OdDbSurface, pNewSurface: OdDbSurface): OdResult;
  chamferEdges(edgeSubentIdsArray: any, baseFaceSubentId: OdDbSubentId, baseDist: number, otherDist: number): OdResult;
  filletEdges(edgeSubentIdsArray: any, radius: OdGeDoubleArray, startSetback: OdGeDoubleArray, endSetback: OdGeDoubleArray): OdResult;
  setSubentColor(subentId: OdDbSubentId, color: OdCmColor): OdResult;
  getSubentColor(subentId: OdDbSubentId, color: OdCmColor): OdResult;
  setSubentMaterial(subentId: OdDbSubentId, matId: OdDbObjectId): OdResult;
  getSubentMaterial(subentId: OdDbSubentId, matId: OdDbObjectId): OdResult;
  setSubentMaterialMapper(subentId: OdDbSubentId, mapper: OdGiMapper): OdResult;
  getSubentMaterialMapper(subentId: OdDbSubentId, mapper: OdGiMapper): OdResult;
  subGetGsMarkersAtSubentPath(subPath: OdDbFullSubentPath, gsMarkers: OdGsMarkerArray): OdResult;
  subGetSubentPathsAtGsMarker(type: SubentType, gsMark: number, pickPoint: OdGePoint3d, viewXform: OdGeMatrix3d, subentPaths: OdDbFullSubentPathArray, pEntAndInsertStack: OdDbObjectIdArray): OdResult;
  subGetTransformedCopy(mat: OdGeMatrix3d, pCopy: OdDbEntity): OdResult;
  convertToNurbSurface(nurbSurfaceArray: OdDbNurbSurfacePtrArray): OdResult;
  subSetAttributes(pTraits: OdGiDrawableTraits): number;
  projectOnToSurface(pEntityToProject: OdDbEntity, projectionDirection: OdGeVector3d, projectedEntities: OdDbEntityPtrArray): OdResult;
  getPerimeter(arg0: number): OdResult;
  rayTest(rayBasePoint: OdGePoint3d, rayDir: OdGeVector3d, rayRadius: number, subEntIdsArray: any, parameters: OdGeDoubleArray): OdResult;
  extendEdges(edgesId: OdDbFullSubentPathArray, dExtDist: number, extOption: EdgeExtensionType, bAssociativeEnabled: boolean): OdResult;
  subGetGeomExtents(extents: OdGeExtents3d): OdResult;
  subHandOverTo(pNewObject: OdDbObject): void;
  subClose(): void;
  numChanges(): number;
  copyFrom(pSource: OdRxObject): void;
};

class OdDbNurbSurfacePtrArray extends OdArray<OdDbNurbSurface> { };

enum EdgeExtensionType {
  kExtendEdge = 0,
  kStretchEdge = 1
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdError_DuplicateRecordName.html} Additional documentation.
 */
class OdError_DuplicateRecordName extends OdError {
  constructor(existingRecId: OdDbObjectId);
  existingRecordId(): OdDbObjectId;
  static ctr1(arg0: OdError_DuplicateRecordName): OdError_DuplicateRecordName;
  static ctr2(arg0: OdError_DuplicateRecordName): OdError_DuplicateRecordName;
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbSymbolTable.html} Additional documentation.
 */
class OdDbSymbolTable extends OdDbObject {
  constructor();
  constructor(arg0: OdDbSymbolTable);
  static cast(pObj: OdRxObject): OdDbSymbolTable;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdDbSymbolTable;
  static rxInit(): void;
  static rxUninit(): void;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  getAt(sName: OdString, openMode: OpenMode, getErasedRecord: boolean): OdDbSymbolTableRecord;
  getAt1(sName: OdString, getErasedRecord: boolean): OdDbObjectId;
  has(sName: OdString): boolean;
  has1(objectId: OdDbObjectId): boolean;
  newIterator(atBeginning: boolean, skipDeleted: boolean): OdDbSymbolTableIterator;
  ids(atBeginning: boolean, skipDeleted: boolean): OdDbRecordIdCollectionView;
  records(atBeginning: boolean, skipDeleted: boolean): OdDbRecordCollectionView;
  add(pRecord: OdDbSymbolTableRecord): OdDbObjectId;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): void;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): void;
  dxfIn(pFiler: OdDbDxfFiler): OdResult;
  dxfOut(pFiler: OdDbDxfFiler): void;
  dxfInFields_R12(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields_R12(pFiler: OdDbDxfFiler): void;
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbSymbolTableIterator.html} Additional documentation.
 */
class OdDbSymbolTableIterator extends OdRxObject {
  static cast(pObj: OdRxObject): OdDbSymbolTableIterator;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdDbSymbolTableIterator;
  static rxInit(): void;
  static rxUninit(): void;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  start(atBeginning: boolean, skipErased: boolean): void;
  done(): boolean;
  getRecordId(): OdDbObjectId;
  getRecord(openMode: OpenMode, openErasedRecord: boolean): OdDbSymbolTableRecord;
  step(forward: boolean, skipErased: boolean): void;
  seek(ObjectId: OdDbObjectId): void;
  seek1(pRecord: OdDbSymbolTableRecord): void;
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbRecordIdCollectionView.html} Additional documentation.
 */
class OdDbRecordIdCollectionView {
  constructor(i: OdDbSymbolTableIterator);
  begin(): Iterator;
  end(): Iterator;
  static ctr1(arg0: OdDbRecordIdCollectionView): OdDbRecordIdCollectionView;
  static ctr2(arg0: OdDbRecordIdCollectionView): OdDbRecordIdCollectionView;
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbRecordCollectionView.html} Additional documentation.
 */
class OdDbRecordCollectionView {
  constructor(i: OdDbSymbolTableIterator);
  begin(): Iterator;
  end(): Iterator;
  static ctr1(arg0: OdDbRecordCollectionView): OdDbRecordCollectionView;
  static ctr2(arg0: OdDbRecordCollectionView): OdDbRecordCollectionView;
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbSymbolTableRecord.html} Additional documentation.
 */
class OdDbSymbolTableRecord extends OdDbObject {
  constructor();
  constructor(arg0: OdDbSymbolTableRecord);
  static cast(pObj: OdRxObject): OdDbSymbolTableRecord;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdDbSymbolTableRecord;
  static rxInit(): void;
  static rxUninit(): void;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  getName(): OdString;
  setName(sName: OdString): void;
  isDependent(): boolean;
  isResolved(): boolean;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): void;
  appendToOwner(idPair: OdDbIdPair, pOwnerObject: OdDbObject, ownerIdMap: OdDbIdMapping): void;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): void;
  dxfOutFields_R12(pFiler: OdDbDxfFiler): void;
  copyFrom(pSource: OdRxObject): void;
  subErase(erasing: boolean): OdResult;
  subSwapIdWith(otherId: OdDbObjectId, swapXdata: boolean, swapExtDict: boolean): void;
  subWblockClone(ownerIdMap: OdDbIdMapping, pOwner: OdDbObject, bPrimary: boolean): OdDbObject;
};

enum TableBreakOption {
  kTableBreakNone = 0,
  kTableBreakEnableBreaking = 1,
  kTableBreakRepeatTopLabels = 2,
  kTableBreakRepeatBottomLabels = 4,
  kTableBreakAllowManualPositions = 8,
  kTableBreakAllowManualHeights = 16
};

enum TableBreakFlowDirection {
  kTableBreakFlowRight = 1,
  kTableBreakFlowDownOrUp = 2,
  kTableBreakFlowLeft = 4
};

enum TableHitItem {
  kTableHitNone = 0,
  kTableHitCell = 1,
  kTableHitRowIndicator = 2,
  kTableHitColumnIndicator = 4,
  kTableHitGridLine = 8
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbTable.html} Additional documentation.
 */
class OdDbTable extends OdDbBlockReference {
  constructor();
  constructor(arg0: OdDbTable);
  static cast(pObj: OdRxObject): OdDbTable;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdDbTable;
  static rxInit(): void;
  static rxUninit(): void;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  tableStyle(): OdDbObjectId;
  setTableStyle(tableStyleId: OdDbObjectId): void;
  direction(): OdGeVector3d;
  setDirection(horizVector: OdGeVector3d): void;
  numRows(): number;
  setNumRows(numRows: number): void;
  numColumns(): number;
  setNumColumns(numColumns: number): void;
  width(): number;
  setWidth(width: number): void;
  columnWidth(column: number): number;
  setColumnWidth(column: number, width: number): void;
  setColumnWidth1(width: number): void;
  height(): number;
  setHeight(height: number): void;
  rowHeight(row: number): number;
  setRowHeight(row: number, height: number): void;
  setRowHeight1(height: number): void;
  minimumColumnWidth(column: number): number;
  minimumRowHeight(row: number): number;
  minimumTableWidth(): number;
  minimumTableHeight(): number;
  horzCellMargin(): number;
  setHorzCellMargin(cellMargin: number): void;
  vertCellMargin(): number;
  setVertCellMargin(cellMargin: number): void;
  flowDirection(): FlowDirection;
  setFlowDirection(flowDirection: FlowDirection): void;
  isTitleSuppressed(): boolean;
  suppressTitleRow(suppress: boolean): void;
  isHeaderSuppressed(): boolean;
  suppressHeaderRow(suppress: boolean): void;
  alignment(rowType: RowType): CellAlignment;
  alignment1(row: number, column: number): CellAlignment;
  setAlignment(alignment: CellAlignment, rowTypes: number): void;
  setAlignment1(row: number, column: number, alignment: CellAlignment): void;
  isBackgroundColorNone(rowType: RowType): boolean;
  isBackgroundColorNone1(row: number, column: number): boolean;
  setBackgroundColorNone(disable: boolean, rowTypes: number): void;
  setBackgroundColorNone1(row: number, column: number, disable: boolean): void;
  backgroundColor(rowType: RowType): OdCmColor;
  backgroundColor1(row: number, column: number): OdCmColor;
  setBackgroundColor(color: OdCmColor, rowTypes: number): void;
  setBackgroundColor1(row: number, column: number, color: OdCmColor): void;
  contentColor(rowType: RowType): OdCmColor;
  contentColor1(row: number, column: number): OdCmColor;
  setContentColor(color: OdCmColor, nRowType: number): void;
  setContentColor1(row: number, column: number, color: OdCmColor): void;
  textStyle(rowType: RowType): OdDbObjectId;
  textStyle1(row: number, column: number): OdDbObjectId;
  setTextStyle(textStyleId: OdDbObjectId, rowTypes: number): void;
  setTextStyle1(row: number, column: number, textStyleId: OdDbObjectId): void;
  textHeight(rowType: RowType): number;
  textHeight1(row: number, column: number): number;
  setTextHeight(height: number, rowTypes: number): void;
  setTextHeight1(row: number, column: number, height: number): void;
  gridLineWeight(gridlineType: GridLineType, rowType: RowType): LineWeight;
  gridLineWeight1(row: number, column: number, edgeType: CellEdgeMask): LineWeight;
  setGridLineWeight(lineWeight: LineWeight, gridlineTypes: number, rowTypes: number): void;
  setGridLineWeight1(row: number, column: number, edgeTypes: number, lineWeight: LineWeight): void;
  gridColor(gridlineType: GridLineType, rowType: RowType): OdCmColor;
  gridColor1(row: number, column: number, edgeType: CellEdgeMask): OdCmColor;
  gridVisibility(gridlineType: GridLineType, rowType: RowType): Visibility;
  gridVisibility1(row: number, column: number, edgeType: CellEdgeMask): Visibility;
  setGridVisibility(gridVisiblity: Visibility, gridlineTypes: number, rowTypes: number): void;
  setGridVisibility1(row: number, column: number, edgeTypes: number, gridVisibility: Visibility): void;
  tableStyleOverrides(overrides: OdUInt32Array): boolean;
  clearTableStyleOverrides(option: number): void;
  cellType(row: number, column: number): CellType;
  setCellType(row: number, column: number, cellType: CellType): void;
  getCellExtents(row: number, column: number, isOuterCell: boolean, pts: OdGePoint3dArray): void;
  attachmentPoint(row: number, column: number): OdGePoint3d;
  cellStyleOverrides(row: number, column: number, overrides: OdUInt32Array): boolean;
  clearCellOverrides(row: number, column: number): void;
  deleteCellContent(row: number, column: number): void;
  rowType(row: number): RowType;
  textString(row: number, column: number): OdString;
  setTextString(row: number, column: number, textString: OdString): void;
  fieldId(row: number, column: number): OdDbObjectId;
  setFieldId(row: number, column: number, fieldId: OdDbObjectId): void;
  textRotation(row: number, column: number): RotationAngle;
  setTextRotation(row: number, column: number, textRotation: RotationAngle): void;
  isAutoScale(row: number, column: number): boolean;
  setAutoScale(row: number, column: number, autoScale: boolean): void;
  blockTableRecordId(row: number, column: number): OdDbObjectId;
  setBlockTableRecordId(row: number, column: number, blockId: OdDbObjectId, autoScale: boolean): void;
  blockScale(row: number, column: number): number;
  setBlockScale(row: number, column: number, blockScale: number): void;
  blockRotation(row: number, column: number): number;
  setBlockRotation(row: number, column: number, blockRotation: number): void;
  getBlockAttributeValue(row: number, column: number, attdefId: OdDbObjectId, attValue: OdString): void;
  setBlockAttributeValue(row: number, column: number, attdefId: OdDbObjectId, attValue: OdString): void;
  setGridColor(color: OdCmColor, gridlineTypes: number, rowTypes: number): void;
  setGridColor1(row: number, column: number, edgeTypes: number, color: OdCmColor): void;
  insertColumns(column: number, width: number, numColumns: number): void;
  deleteColumns(column: number, numColumns: number): void;
  insertRows(row: number, height: number, numRows: number): void;
  deleteRows(row: number, numRows: number): void;
  mergeCells(minRow: number, maxRow: number, minColumn: number, maxColumn: number): void;
  unmergeCells(minRow: number, maxRow: number, minColumn: number, maxColumn: number): void;
  isMergedCell(row: number, column: number, minRow: number, maxRow: number, minColumn: number, maxColumn: number): boolean;
  mergedHeight(row: number, column: number): number;
  mergedWidth(row: number, column: number): number;
  mergedFlag(row: number, column: number): boolean;
  generateLayout(): OdResult;
  recomputeTableBlock(forceUpdate: boolean): OdResult;
  hitTest(wpt: OdGePoint3d, wviewVec: OdGeVector3d, wxaper: number, wyaper: number, resultRowIndex: number, resultColumnIndex: number, subTable: number): boolean;
  hitTest1(wpt: OdGePoint3d, wviewVec: OdGeVector3d, wxaper: number, wyaper: number, resultRowIndex: number, resultColumnIndex: number, contentIndex: number, nItem: TableHitItem, subTable: number): boolean;
  select(wpt: OdGePoint3d, wvwVec: OdGeVector3d, wvwxVec: OdGeVector3d, wxaper: number, wyaper: number, allowOutside: boolean, bInPickFirst: boolean, resultRowIndex: number, resultColumnIndex: number, pPaths: OdDbFullSubentPathArray): OdResult;
  selectSubRegion(wpt1: OdGePoint3d, wpt2: OdGePoint3d, wvwVec: OdGeVector3d, wvwxVec: OdGeVector3d, wxaper: number, wyaper: number, seltype: SelectType, bIncludeCurrentSelection: boolean, bInPickFirst: boolean, rowMin: number, rowMax: number, colMin: number, colMax: number, pPaths: OdDbFullSubentPathArray): OdResult;
  reselectSubRegion(paths: OdDbFullSubentPathArray): boolean;
  getSubSelection(rowMin: number, rowMax: number, colMin: number, colMax: number, subTable: number): OdResult;
  getSubSelection1(subTable: number): OdCellRange;
  setSubSelection(range: OdCellRange, subTable: number): OdResult;
  setSubSelection1(rowMin: number, rowMax: number, colMin: number, colMax: number, subTable: number): OdResult;
  clearSubSelection(): void;
  hasSubSelection(): boolean;
  select_next_cell(dir: number, resultRowIndex: number, resultColumnIndex: number, pPaths: OdDbFullSubentPathArray, bSupportTextCellOnly: boolean): OdResult;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): void;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): void;
  subClose(): void;
  subSetDatabaseDefaults(pDb: OdDbDatabase, doSubents: boolean): void;
  modified(pObj: OdDbObject): void;
  subWorldDraw(pWd: OdGiWorldDraw): boolean;
  subViewportDraw(pVd: OdGiViewportDraw): void;
  subTransformBy(xfm: OdGeMatrix3d): OdResult;
  subGetTransformedCopy(xfm: OdGeMatrix3d, pCopy: OdDbEntity): OdResult;
  subGetGeomExtents(extents: OdGeExtents3d): OdResult;
  getDataType(nDataType: DataType, nUnitType: UnitType, type: RowType): void;
  setDataType(nDataType: DataType, nUnitType: UnitType): void;
  setDataType1(nDataType: DataType, nUnitType: UnitType, nRowTypes: number): void;
  format(type: RowType): OdString;
  setFormat(pszFormat: OdString): void;
  setFormat1(pszFormat: OdString, nRowTypes: number): void;
  getDataType1(row: number, col: number, nDataType: DataType, nUnitType: UnitType): void;
  setDataType2(row: number, col: number, nDataType: DataType, nUnitType: UnitType): void;
  value(row: number, col: number): OdValue;
  setValue(row: number, col: number, val: OdValue): void;
  setValue1(row: number, col: number, pszText: OdString, nOption: ParseOption): void;
  resetValue(row: number, col: number): void;
  format1(row: number, col: number): OdString;
  setFormat2(row: number, col: number, pszFormat: OdString): void;
  isBreakEnabled(): boolean;
  enableBreak(bEnable: boolean): void;
  breakFlowDirection(): TableBreakFlowDirection;
  setBreakFlowDirection(flowDir: TableBreakFlowDirection): void;
  breakHeight(index: number): number;
  setBreakHeight(index: number, height: number): void;
  breakOffset(index: number): OdGeVector3d;
  setBreakOffset(index: number, vec: OdGeVector3d): void;
  breakOption(): TableBreakOption;
  setBreakOption(option: TableBreakOption): void;
  breakSpacing(): number;
  setBreakSpacing(spacing: number): void;
  setSize(rows: number, cols: number): void;
  canInsert(nIndex: number, bRow: boolean): boolean;
  insertRowsAndInherit(nIndex: number, nInheritFrom: number, nNumRows: number): void;
  insertColumnsAndInherit(col: number, nInheritFrom: number, nNumCols: number): void;
  canDelete(nIndex: number, nCount: number, bRow: boolean): boolean;
  isEmpty(row: number, col: number): boolean;
  getMergeRange(row: number, col: number): OdCellRange;
  isContentEditable(row: number, col: number): boolean;
  isFormatEditable(row: number, col: number): boolean;
  cellState(row: number, col: number): CellState;
  setCellState(row: number, col: number, nLock: CellState): void;
  numContents(row: number, col: number): number;
  createContent(row: number, col: number, nIndex: number): number;
  moveContent(row: number, col: number, nFromIndex: number, nToIndex: number): void;
  deleteContent(row: number, col: number): void;
  deleteContent1(row: number, col: number, nIndex: number): void;
  deleteContent2(range: OdCellRange): void;
  contentType(row: number, col: number): CellContentType;
  contentType1(row: number, col: number, nIndex: number): CellContentType;
  value1(row: number, col: number, nContent: number): OdValue;
  value2(row: number, col: number, nContent: number, nOption: FormatOption): OdValue;
  setValue2(row: number, col: number, nContent: number, val: OdValue): void;
  setValue3(row: number, col: number, nContent: number, val: OdValue, nOption: ParseOption): void;
  setValue4(row: number, col: number, nContent: number, sText: OdString, nOption: ParseOption): void;
  dataFormat(row: number, col: number): OdString;
  dataFormat1(row: number, col: number, nContent: number): OdString;
  setDataFormat(row: number, col: number, sFormat: OdString): void;
  setDataFormat1(row: number, col: number, nContent: number, sFormat: OdString): void;
  textString1(row: number, col: number, nContent: number): OdString;
  textString2(row: number, col: number, nContent: number, nOption: FormatOption): OdString;
  textString3(row: number, col: number, nOption: FormatOption): OdString;
  setTextString1(row: number, col: number, nContent: number, text: OdString): void;
  hasFormula(row: number, col: number, nContent: number): boolean;
  getFormula(row: number, col: number, nContent: number): OdString;
  setFormula(row: number, col: number, nContent: number, pszFormula: OdString): void;
  fieldId1(row: number, col: number, nContent: number): OdDbObjectId;
  setFieldId1(row: number, col: number, nContent: number, fieldId: OdDbObjectId, nFlag: CellOption): void;
  blockTableRecordId1(row: number, col: number, nContent: number): OdDbObjectId;
  setBlockTableRecordId1(row: number, col: number, nContent: number, blkId: OdDbObjectId, autoFit: boolean): void;
  getBlockAttributeValue1(row: number, col: number, nContent: number, attdefId: OdDbObjectId): OdString;
  setBlockAttributeValue1(row: number, col: number, nContent: number, attdefId: OdDbObjectId, atrValue: OdString): void;
  getCustomData(row: number, col: number): number;
  setCustomData(row: number, col: number, nData: number): void;
  getCustomData1(row: number, col: number, sKey: OdString): OdValue;
  setCustomData1(row: number, col: number, sKey: OdString, pData: OdValue): void;
  cellStyle(row: number, col: number): OdString;
  setCellStyle(row: number, col: number, sCellStyle: OdString): void;
  margin(row: number, col: number, nMargin: CellMargin): number;
  setMargin(row: number, col: number, nMargins: CellMargin, fMargin: number): void;
  attachmentPoint1(row: number, col: number, content: number): OdGePoint3d;
  contentColor2(row: number, col: number, nContent: number): OdCmColor;
  setContentColor2(row: number, col: number, nContent: number, color: OdCmColor): void;
  getDataType2(row: number, col: number, nContent: number, nDataType: DataType, nUnitType: UnitType): void;
  setDataType3(row: number, col: number, nContent: number, nDataType: DataType, nUnitType: UnitType): void;
  textStyle2(row: number, col: number, nContent: number): OdDbObjectId;
  setTextStyle2(row: number, col: number, nContent: number, id: OdDbObjectId): void;
  textHeight2(row: number, col: number, nContent: number): number;
  setTextHeight2(row: number, col: number, nContent: number, height: number): void;
  rotation(): number;
  rotation1(row: number, col: number, nContent: number): number;
  setRotation(fAngle: number): void;
  setRotation1(row: number, col: number, nContent: number, fAngle: number): void;
  isAutoScale1(row: number, col: number, nContent: number): boolean;
  setAutoScale1(row: number, col: number, nContent: number, autoFit: boolean): void;
  scale(row: number, col: number, nContent: number): number;
  setScale(row: number, col: number, nContent: number, scale: number): void;
  contentLayout(row: number, col: number): CellContentLayout;
  setContentLayout(row: number, col: number, nLayout: CellContentLayout): void;
  isMergeAllEnabled(row: number, col: number): boolean;
  enableMergeAll(row: number, col: number, bEnable: boolean): void;
  getOverride(row: number, col: number, nContent: number): CellProperty;
  getOverride1(row: number, col: number, nGridLineType: GridLineType): GridProperty;
  setOverride(row: number, col: number, nContent: number, nOverride: CellProperty): void;
  setOverride1(row: number, col: number, nGridLineType: GridLineType, nOverride: GridProperty): void;
  removeAllOverrides(row: number, col: number): void;
  gridLineStyle(row: number, col: number, nGridLineType: GridLineType): GridLineStyle;
  setGridLineStyle(row: number, col: number, nGridLineTypes: GridLineType, nLineStyle: GridLineStyle): void;
  gridLineWeight2(row: number, col: number, nGridLineType: GridLineType): LineWeight;
  setGridLineWeight2(row: number, col: number, nGridLineTypes: GridLineType, nLineWeight: LineWeight): void;
  gridLinetype(row: number, col: number, nGridLineType: GridLineType): OdDbObjectId;
  setGridLinetype(row: number, col: number, nGridLineTypes: GridLineType, idLinetype: OdDbObjectId): void;
  gridColor2(row: number, col: number, nGridLineType: GridLineType): OdCmColor;
  setGridColor2(row: number, col: number, nGridlineTypes: GridLineType, color: OdCmColor): void;
  gridVisibility2(row: number, col: number, nGridLineType: GridLineType): Visibility;
  setGridVisibility2(row: number, col: number, nGridLineTypes: GridLineType, nVisibility: Visibility): void;
  gridDoubleLineSpacing(row: number, col: number, nGridLineType: GridLineType): number;
  setGridDoubleLineSpacing(row: number, col: number, nGridLineTypes: GridLineType, fSpacing: number): void;
  getGridProperty(row: number, col: number, nGridLineType: GridLineType, gridProp: OdGridProperty): void;
  setGridProperty(row: number, col: number, nGridLineTypes: GridLineType, gridProp: OdGridProperty): void;
  setGridProperty1(rangeIn: OdCellRange, nGridLineTypes: GridLineType, gridProp: OdGridProperty): void;
  isLinked(row: number, col: number): boolean;
  getDataLink(row: number, col: number): OdDbObjectId;
  getDataLink1(row: number, col: number, mode: OpenMode): OdDbDataLink;
  getDataLink2(pRange: OdCellRange, dataLinkIds: OdDbObjectIdArray): number;
  setDataLink(row: number, col: number, idDataLink: OdDbObjectId, bUpdate: boolean): void;
  setDataLink1(range: OdCellRange, idDataLink: OdDbObjectId, bUpdate: boolean): void;
  getDataLinkRange(row: number, col: number): OdCellRange;
  removeDataLink(row: number, col: number): void;
  removeDataLink1(): void;
  updateDataLink(row: number, col: number, nDir: UpdateDirection, nOption: UpdateOption): void;
  updateDataLink1(nDir: UpdateDirection, nOption: UpdateOption): void;
  getColumnName(nIndex: number): OdString;
  setColumnName(nIndex: number, sName: OdString): void;
  getToolTip(row: number, col: number): OdString;
  setToolTip(row: number, col: number, sToolTip: OdString): void;
  copyFrom(pSource: OdRxObject): void;
  copyFrom1(pSrc: OdDbLinkedTableData, nOption: TableCopyOption): void;
  copyFrom2(pSrc: OdDbLinkedTableData, nOption: TableCopyOption, srcRange: OdCellRange, targetRange: OdCellRange, pNewTargetRangeOut: OdCellRange): void;
  copyFrom3(pSrc: OdDbTable, nOption: TableCopyOption, srcRange: OdCellRange, targetRange: OdCellRange, pNewTargetRangeOut: OdCellRange): void;
  appendToOwner(idPair: OdDbIdPair, pOwnerObject: OdDbObject, ownerIdMap: OdDbIdMapping): void;
  isRegenerateTableSuppressed(): boolean;
  suppressRegenerateTable(bSuppress: boolean): void;
  subExplode(entitySet: OdRxObjectPtrArray): OdResult;
  createTemplate(target: OdDbTableTemplate, nCopyOption: TableCopyOption): void;
  subErase(erasing: boolean): OdResult;
  subHighlight(bDoIt: boolean, pSubId: OdDbFullSubentPath, highlightAll: boolean): void;
  getSubTablesInfo(subTablesArray: any): number;
  getIterator(): OdDbTableIterator;
  getIterator1(pRange: OdCellRange, nOption: TableIteratorOption): OdDbTableIterator;
  getIndicatorSize(dWidth: number, dHeight: number): void;
  subWblockClone(idMap: OdDbIdMapping, owner: OdDbObject, bPrimary: boolean): OdDbObject;
  getContentBounding(row: number, col: number, content: number, pts: OdGePoint3dArray): number;
};

enum TableStyleOverrides {
  kTitleSuppressed = 1,
  kHeaderSuppressed = 2,
  kFlowDirection = 3,
  kHorzCellMargin = 4,
  kVertCellMargin = 5,
  kTitleRowColor = 6,
  kHeaderRowColor = 7,
  kDataRowColor = 8,
  kTitleRowFillNone = 9,
  kHeaderRowFillNone = 10,
  kDataRowFillNone = 11,
  kTitleRowFillColor = 12,
  kHeaderRowFillColor = 13,
  kDataRowFillColor = 14,
  kTitleRowAlignment = 15,
  kHeaderRowAlignment = 16,
  kDataRowAlignment = 17,
  kTitleRowTextStyle = 18,
  kHeaderRowTextStyle = 19,
  kDataRowTextStyle = 20,
  kTitleRowTextHeight = 21,
  kHeaderRowTextHeight = 22,
  kDataRowTextHeight = 23,
  kTitleRowDataType = 24,
  kHeaderRowDataType = 25,
  kDataRowDataType = 26,
  kTitleHorzTopColor = 40,
  kTitleHorzInsideColor = 41,
  kTitleHorzBottomColor = 42,
  kTitleVertLeftColor = 43,
  kTitleVertInsideColor = 44,
  kTitleVertRightColor = 45,
  kHeaderHorzTopColor = 46,
  kHeaderHorzInsideColor = 47,
  kHeaderHorzBottomColor = 48,
  kHeaderVertLeftColor = 49,
  kHeaderVertInsideColor = 50,
  kHeaderVertRightColor = 51,
  kDataHorzTopColor = 52,
  kDataHorzInsideColor = 53,
  kDataHorzBottomColor = 54,
  kDataVertLeftColor = 55,
  kDataVertInsideColor = 56,
  kDataVertRightColor = 57,
  kTitleHorzTopLineWeight = 70,
  kTitleHorzInsideLineWeight = 71,
  kTitleHorzBottomLineWeight = 72,
  kTitleVertLeftLineWeight = 73,
  kTitleVertInsideLineWeight = 74,
  kTitleVertRightLineWeight = 75,
  kHeaderHorzTopLineWeight = 76,
  kHeaderHorzInsideLineWeight = 77,
  kHeaderHorzBottomLineWeight = 78,
  kHeaderVertLeftLineWeight = 79,
  kHeaderVertInsideLineWeight = 80,
  kHeaderVertRightLineWeight = 81,
  kDataHorzTopLineWeight = 82,
  kDataHorzInsideLineWeight = 83,
  kDataHorzBottomLineWeight = 84,
  kDataVertLeftLineWeight = 85,
  kDataVertInsideLineWeight = 86,
  kDataVertRightLineWeight = 87,
  kTitleHorzTopVisibility = 100,
  kTitleHorzInsideVisibility = 101,
  kTitleHorzBottomVisibility = 102,
  kTitleVertLeftVisibility = 103,
  kTitleVertInsideVisibility = 104,
  kTitleVertRightVisibility = 105,
  kHeaderHorzTopVisibility = 106,
  kHeaderHorzInsideVisibility = 107,
  kHeaderHorzBottomVisibility = 108,
  kHeaderVertLeftVisibility = 109,
  kHeaderVertInsideVisibility = 110,
  kHeaderVertRightVisibility = 111,
  kDataHorzTopVisibility = 112,
  kDataHorzInsideVisibility = 113,
  kDataHorzBottomVisibility = 114,
  kDataVertLeftVisibility = 115,
  kDataVertInsideVisibility = 116,
  kDataVertRightVisibility = 117,
  kCellAlignment = 130,
  kCellBackgroundFillNone = 131,
  kCellBackgroundColor = 132,
  kCellContentColor = 133,
  kCellTextStyle = 134,
  kCellTextHeight = 135,
  kCellTopGridColor = 136,
  kCellRightGridColor = 137,
  kCellBottomGridColor = 138,
  kCellLeftGridColor = 139,
  kCellTopGridLineWeight = 140,
  kCellRightGridLineWeight = 141,
  kCellBottomGridLineWeight = 142,
  kCellLeftGridLineWeight = 143,
  kCellTopVisibility = 144,
  kCellRightVisibility = 145,
  kCellBottomVisibility = 146,
  kCellLeftVisibility = 147,
  kCellDataType = 148
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbText.html} Additional documentation.
 */
class OdDbText extends OdDbEntity {
  constructor();
  constructor(arg0: OdDbText);
  static cast(pObj: OdRxObject): OdDbText;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdDbText;
  static rxInit(): void;
  static rxUninit(): void;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  position(): OdGePoint3d;
  setPosition(position: OdGePoint3d): void;
  alignmentPoint(): OdGePoint3d;
  setAlignmentPoint(alignment: OdGePoint3d): void;
  isDefaultAlignment(): boolean;
  normal(): OdGeVector3d;
  setNormal(normal: OdGeVector3d): void;
  isPlanar(): boolean;
  getPlane(plane: OdGePlane, planarity: Planarity): OdResult;
  thickness(): number;
  setThickness(thickness: number): void;
  oblique(): number;
  setOblique(oblique: number): void;
  rotation(): number;
  setRotation(rotation: number): void;
  height(): number;
  setHeight(height: number): void;
  widthFactor(): number;
  setWidthFactor(widthFactor: number): void;
  isMirroredInX(): boolean;
  mirrorInX(mirror: boolean): void;
  isMirroredInY(): boolean;
  mirrorInY(mirror: boolean): void;
  textString(): OdString;
  setTextString(textString: OdString): void;
  textStyle(): OdDbObjectId;
  setTextStyle(textStyleId: OdDbObjectId): void;
  horizontalMode(): TextHorzMode;
  setHorizontalMode(horizontalMode: TextHorzMode): void;
  verticalMode(): TextVertMode;
  setVerticalMode(verticalMode: TextVertMode): void;
  correctSpelling(): number;
  getTextWithFieldCodes(): OdString;
  adjustAlignment(pDb: OdDbDatabase): void;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): void;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): void;
  dxfInFields_R12(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields_R12(pFiler: OdDbDxfFiler): void;
  subClose(): void;
  explodeGeometry(entitySet: OdRxObjectPtrArray): OdResult;
  subWorldDraw(pWd: OdGiWorldDraw): boolean;
  subViewportDraw(pVd: OdGiViewportDraw): void;
  subTransformBy(xfm: OdGeMatrix3d): OdResult;
  subGetTransformedCopy(xfm: OdGeMatrix3d, pCopy: OdDbEntity): OdResult;
  getBoundingPoints(boundingPoints: OdGePoint3dArray): void;
  setField(fieldName: OdString, pField: OdDbField): OdDbObjectId;
  removeField(fieldId: OdDbObjectId): OdResult;
  removeField1(fieldName: OdString): OdDbObjectId;
  convertFieldToText(): void;
  subSetDatabaseDefaults(pDb: OdDbDatabase, doSubents: boolean): void;
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbTextStyleTable.html} Additional documentation.
 */
class OdDbTextStyleTable extends OdDbSymbolTable {
  constructor();
  constructor(arg0: OdDbTextStyleTable);
  static cast(pObj: OdRxObject): OdDbTextStyleTable;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdDbTextStyleTable;
  static rxInit(): void;
  static rxUninit(): void;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  add(pRecord: OdDbSymbolTableRecord): OdDbObjectId;
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbTextStyleTableRecord.html} Additional documentation.
 */
class OdDbTextStyleTableRecord extends OdDbSymbolTableRecord {
  constructor();
  constructor(arg0: OdDbTextStyleTableRecord);
  static cast(pObj: OdRxObject): OdDbTextStyleTableRecord;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdDbTextStyleTableRecord;
  static rxInit(): void;
  static rxUninit(): void;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  isShapeFile(): boolean;
  setIsShapeFile(bShapeFile: boolean): void;
  isVertical(): boolean;
  setIsVertical(bVertical: boolean): void;
  isBackwards(): boolean;
  setIsBackwards(bBackwards: boolean): void;
  isUpsideDown(): boolean;
  setIsUpsideDown(bUpsideDown: boolean): void;
  textSize(): number;
  setTextSize(vSize: number): void;
  xScale(): number;
  setXScale(xFactor: number): void;
  obliquingAngle(): number;
  setObliquingAngle(vAngle: number): void;
  priorSize(): number;
  setPriorSize(vSize: number): void;
  fileName(): OdString;
  setFileName(sUniFont: OdString): void;
  bigFontFileName(): OdString;
  setBigFontFileName(sBigFont: OdString): void;
  font(typeface: OdString, bold: boolean, italic: boolean, charset: number, pitchAndFamily: number): void;
  setFont(typeface: OdString, bold: boolean, italic: boolean, charset: number, pitchAndFamily: number): void;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): void;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): void;
  dxfInFields_R12(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields_R12(pFiler: OdDbDxfFiler): void;
  dxfIn(pFiler: OdDbDxfFiler): OdResult;
  subClose(): void;
  subErase(erasing: boolean): OdResult;
  subHandOverTo(pNewObject: OdDbObject): void;
  setXData(pRb: OdResBuf): void;
  subSetAttributes(pTraits: OdGiDrawableTraits): number;
  decomposeForSave(format: SaveType, ver: DwgVersion, replaceId: OdDbObjectId, exchangeXData: boolean): OdDbObject;
};

enum Vertex3dType {
  k3dSimpleVertex = 0,
  k3dControlVertex = 1,
  k3dFitVertex = 2
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbVertex.html} Additional documentation.
 */
class OdDbVertex extends OdDbEntity {
  constructor(arg0: OdDbVertex);
  static cast(pObj: OdRxObject): OdDbVertex;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdDbVertex;
  static rxInit(): void;
  static rxUninit(): void;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): void;
  subGetGeomExtents(extents: OdGeExtents3d): OdResult;
  subTransformBy(xform: OdGeMatrix3d): OdResult;
  subSubentPtr(path: OdDbFullSubentPath): OdDbEntity;
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbViewport.html} Additional documentation.
 */
class OdDbViewport extends OdDbEntity {
  constructor();
  constructor(arg0: OdDbViewport);
  static cast(pObj: OdRxObject): OdDbViewport;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdDbViewport;
  static rxInit(): void;
  static rxUninit(): void;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  height(): number;
  setHeight(height: number): void;
  width(): number;
  setWidth(width: number): void;
  centerPoint(): OdGePoint3d;
  setCenterPoint(centerPoint: OdGePoint3d): void;
  number(): number;
  isOn(): boolean;
  setOn(): void;
  setOff(): void;
  viewTarget(): OdGePoint3d;
  setViewTarget(viewTarget: OdGePoint3d): void;
  viewDirection(): OdGeVector3d;
  setViewDirection(viewDirection: OdGeVector3d): void;
  viewHeight(): number;
  setViewHeight(viewHeight: number): void;
  viewCenter(): OdGePoint2d;
  setViewCenter(viewCenter: OdGePoint2d): void;
  twistAngle(): number;
  setTwistAngle(twistAngle: number): void;
  lensLength(): number;
  setLensLength(lensLength: number): void;
  isFrontClipOn(): boolean;
  setFrontClipOn(): void;
  setFrontClipOff(): void;
  isBackClipOn(): boolean;
  setBackClipOn(): void;
  setBackClipOff(): void;
  isFrontClipAtEyeOn(): boolean;
  setFrontClipAtEyeOn(): void;
  setFrontClipAtEyeOff(): void;
  frontClipDistance(): number;
  setFrontClipDistance(frontClipDistance: number): void;
  backClipDistance(): number;
  setBackClipDistance(backClipDistance: number): void;
  isPerspectiveOn(): boolean;
  setPerspectiveOn(): void;
  setPerspectiveOff(): void;
  isUcsFollowModeOn(): boolean;
  setUcsFollowModeOn(): void;
  setUcsFollowModeOff(): void;
  isUcsIconVisible(): boolean;
  setUcsIconVisible(): void;
  setUcsIconInvisible(): void;
  isUcsIconAtOrigin(): boolean;
  setUcsIconAtOrigin(): void;
  setUcsIconAtCorner(): void;
  isFastZoomOn(): boolean;
  setFastZoomOn(): void;
  setFastZoomOff(): void;
  circleSides(): number;
  setCircleSides(circleSides: number): void;
  isSnapOn(): boolean;
  setSnapOn(): void;
  setSnapOff(): void;
  isSnapIsometric(): boolean;
  setSnapIsometric(): void;
  setSnapStandard(): void;
  snapAngle(): number;
  setSnapAngle(snapAngle: number): void;
  snapBasePoint(): OdGePoint2d;
  setSnapBasePoint(snapBasePoint: OdGePoint2d): void;
  snapIncrement(): OdGeVector2d;
  setSnapIncrement(snapIncrement: OdGeVector2d): void;
  snapIsoPair(): number;
  setSnapIsoPair(snapIsoPair: number): void;
  isGridOn(): boolean;
  setGridOn(): void;
  setGridOff(): void;
  gridIncrement(): OdGeVector2d;
  setGridIncrement(gridIncrement: OdGeVector2d): void;
  hiddenLinesRemoved(): boolean;
  showHiddenLines(): void;
  removeHiddenLines(): void;
  freezeLayersInViewport(layerIds: OdDbObjectIdArray): void;
  thawLayersInViewport(layerIds: OdDbObjectIdArray): void;
  thawAllLayersInViewport(): void;
  isLayerFrozenInViewport(layerId: OdDbObjectId): boolean;
  getFrozenLayerList(layerIds: OdDbObjectIdArray): void;
  updateDisplay(): void;
  subSetAttributes(pTraits: OdGiDrawableTraits): number;
  subWorldDraw(pWd: OdGiWorldDraw): boolean;
  isLocked(): boolean;
  setLocked(): void;
  setUnlocked(): void;
  isTransparent(): boolean;
  setTransparent(): void;
  setOpaque(): void;
  customScale(): number;
  setCustomScale(customScale: number): void;
  standardScale(): StandardScaleType;
  setStandardScale(standardScale: StandardScaleType): void;
  plotStyleSheet(): OdString;
  effectivePlotStyleSheet(): OdString;
  setPlotStyleSheet(plotStyleSheetName: OdString): void;
  isNonRectClipOn(): boolean;
  setNonRectClipOn(): void;
  setNonRectClipOff(): void;
  nonRectClipEntityId(): OdDbObjectId;
  setNonRectClipEntityId(clipEntityId: OdDbObjectId): void;
  getUcs(origin: OdGePoint3d, xAxis: OdGeVector3d, yAxis: OdGeVector3d): void;
  isUcsOrthographic(viewType: OrthographicView, pDb: OdDbDatabase): boolean;
  ucsName(): OdDbObjectId;
  elevation(): number;
  setUcs(origin: OdGePoint3d, xAxis: OdGeVector3d, yAxis: OdGeVector3d): void;
  setUcs1(viewType: OrthographicView, pDb: OdDbDatabase): void;
  setUcs2(ucsId: OdDbObjectId): void;
  setUcsToWorld(): void;
  setElevation(elevation: number): void;
  isUcsSavedWithViewport(): boolean;
  setUcsPerViewport(ucsPerViewport: boolean): void;
  setRenderMode(renderMode: RenderMode): void;
  renderMode(): RenderMode;
  shadePlot(): ShadePlotType;
  setShadePlot(shadePlot: ShadePlotType): void;
  shadePlotId(): OdDbObjectId;
  setShadePlot1(type: ShadePlotType, shadePlotId: OdDbObjectId): void;
  plotWireframe(): boolean;
  plotAsRaster(): boolean;
  background(): OdDbObjectId;
  setBackground(backgroundId: OdDbObjectId): void;
  visualStyle(): OdDbObjectId;
  setVisualStyle(visualStyle: OdDbObjectId): void;
  isDefaultLightingOn(): boolean;
  setDefaultLightingOn(on: boolean): void;
  defaultLightingType(): DefaultLightingType;
  setDefaultLightingType(typ: DefaultLightingType): void;
  brightness(): number;
  setBrightness(arg0: number): void;
  contrast(): number;
  setContrast(arg0: number): void;
  ambientLightColor(): OdCmColor;
  setAmbientLightColor(clr: OdCmColor): void;
  sunId(): OdDbObjectId;
  setSun(pSun: OdDbSun): OdDbObjectId;
  toneOperatorParameters(params: OdGiToneOperatorParameters): void;
  setToneOperatorParameters(params: OdGiToneOperatorParameters): void;
  setAnnotationScale(pScaleObj: OdDbAnnotationScale): OdResult;
  annotationScale(): OdDbAnnotationScale;
  isGridBoundToLimits(): boolean;
  setGridBoundToLimits(bNewVal: boolean): void;
  isGridAdaptive(): boolean;
  setGridAdaptive(bNewVal: boolean): void;
  isGridSubdivisionRestricted(): boolean;
  setGridSubdivisionRestricted(bNewVal: boolean): void;
  isGridFollow(): boolean;
  setGridFollow(bNewVal: boolean): void;
  gridMajor(): number;
  setGridMajor(arg0: number): void;
  setModelView(objId: OdDbXrefObjectId): void;
  getModelView(): OdDbXrefObjectId;
  removeModelView(): void;
  syncModelView(): OdResult;
  setSheetView(objId: OdDbObjectId): void;
  getSheetView(): OdDbObjectId;
  removeSheetView(): void;
  setLabelBlock(objId: OdDbObjectId): void;
  getLabelBlock(): OdDbObjectId;
  removeLabelBlock(): void;
  gsView(): OdGsView;
  setGsView(arg0: OdGsView): void;
  subSetDatabaseDefaults(pDb: OdDbDatabase, doSubents: boolean): void;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): void;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): void;
  dxfInFields_R12(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields_R12(pFiler: OdDbDxfFiler): void;
  subClose(): void;
  subErase(erasing: boolean): OdResult;
  zoomExtents(): void;
  subGetGeomExtents(extents: OdGeExtents3d): OdResult;
  subTransformBy(xfm: OdGeMatrix3d): OdResult;
  modified(pObj: OdDbObject): void;
  erased(pObj: OdDbObject, pErasing: boolean): void;
  subGetTransformedCopy(mat: OdGeMatrix3d, pCopy: OdDbEntity): OdResult;
  explodeGeometry(entitySet: OdRxObjectPtrArray): OdResult;
};

enum StandardScaleType {
  kScaleToFit = 0,
  kCustomScale = 1,
  k1_1 = 2,
  k1_2 = 3,
  k1_4 = 4,
  k1_5 = 5,
  k1_8 = 6,
  k1_10 = 7,
  k1_16 = 8,
  k1_20 = 9,
  k1_30 = 10,
  k1_40 = 11,
  k1_50 = 12,
  k1_100 = 13,
  k2_1 = 14,
  k4_1 = 15,
  k8_1 = 16,
  k10_1 = 17,
  k100_1 = 18,
  k1_128in_1ft = 19,
  k1_64in_1ft = 20,
  k1_32in_1ft = 21,
  k1_16in_1ft = 22,
  k3_32in_1ft = 23,
  k1_8in_1ft = 24,
  k3_16in_1ft = 25,
  k1_4in_1ft = 26,
  k3_8in_1ft = 27,
  k1_2in_1ft = 28,
  k3_4in_1ft = 29,
  k1in_1ft = 30,
  k1and1_2in_1ft = 31,
  k3in_1ft = 32,
  k6in_1ft = 33,
  k1ft_1ft = 34
};

enum ShadePlotType {
  kAsDisplayed = 0,
  kWireframe = 1,
  kHidden = 2,
  kRendered = 3,
  kVisualStyle = 4,
  kRenderPreset = 5
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbViewportTableRecord.html} Additional documentation.
 */
class OdDbViewportTableRecord extends OdDbAbstractViewTableRecord {
  constructor();
  constructor(arg0: OdDbViewportTableRecord);
  static cast(pObj: OdRxObject): OdDbViewportTableRecord;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdDbViewportTableRecord;
  static rxInit(): void;
  static rxUninit(): void;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  lowerLeftCorner(): OdGePoint2d;
  setLowerLeftCorner(point: OdGePoint2d): void;
  upperRightCorner(): OdGePoint2d;
  setUpperRightCorner(point: OdGePoint2d): void;
  ucsFollowMode(): boolean;
  setUcsFollowMode(ucsFollowMode: boolean): void;
  circleSides(): number;
  setCircleSides(circleSides: number): void;
  iconEnabled(): boolean;
  setIconEnabled(iconEnabled: boolean): void;
  iconAtOrigin(): boolean;
  setIconAtOrigin(atOrigin: boolean): void;
  gridEnabled(): boolean;
  setGridEnabled(gridEnabled: boolean): void;
  gridIncrements(): OdGePoint2d;
  setGridIncrements(gridIncrements: OdGePoint2d): void;
  snapEnabled(): boolean;
  setSnapEnabled(snapEnabled: boolean): void;
  isometricSnapEnabled(): boolean;
  setIsometricSnapEnabled(isometricSnapEnabled: boolean): void;
  snapPair(): number;
  setSnapPair(snapPair: number): void;
  snapAngle(): number;
  setSnapAngle(snapAngle: number): void;
  snapBase(): OdGePoint2d;
  setSnapBase(snapBase: OdGePoint2d): void;
  snapIncrements(): OdGePoint2d;
  setSnapIncrements(snapIncrements: OdGePoint2d): void;
  isUcsSavedWithViewport(): boolean;
  setUcsPerViewport(ucsPerViewport: boolean): void;
  fastZoomsEnabled(): boolean;
  setFastZoomsEnabled(fastZoomsEnabled: boolean): void;
  isGridBoundToLimits(): boolean;
  setGridBoundToLimits(enabled: boolean): void;
  isGridAdaptive(): boolean;
  setGridAdaptive(enabled: boolean): void;
  isGridSubdivisionRestricted(): boolean;
  setGridSubdivisionRestricted(enabled: boolean): void;
  isGridFollow(): boolean;
  setGridFollow(enabled: boolean): void;
  gridMajor(): number;
  setGridMajor(value: number): void;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): void;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): void;
  dxfInFields_R12(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields_R12(pFiler: OdDbDxfFiler): void;
  gsView(): OdGsView;
  setGsView(pGsView: OdGsView): void;
  drawable(): OdGiDrawable;
  copyFrom(pSource: OdRxObject): void;
  zoomExtents(): void;
  subClose(): void;
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbXrecordIterator.html} Additional documentation.
 */
class OdDbXrecordIterator extends OdRxObject {
  static cast(pObj: OdRxObject): OdDbXrecordIterator;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdDbXrecordIterator;
  static rxInit(): void;
  static rxUninit(): void;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  start(): void;
  done(): boolean;
  next(): boolean;
  curRestype(): number;
  getCurResbuf(pDb: OdDbDatabase): OdResBuf;
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbXrecord.html} Additional documentation.
 */
class OdDbXrecord extends OdDbObject {
  constructor();
  constructor(arg0: OdDbXrecord);
  static cast(pObj: OdRxObject): OdDbXrecord;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdDbXrecord;
  static rxInit(): void;
  static rxUninit(): void;
  static open(pObject: OdDbObject, key: OdString, creationFlag: number, mergeStyle: DuplicateRecordCloning): OdDbXrecord;
  static open1(pObject: OdDbObject, keysArray: any, creationFlag: number, mergeStyle: DuplicateRecordCloning): OdDbXrecord;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  rbChain(pDb: OdDbDatabase, pStatus: OdResult): OdResBuf;
  newIterator(pDb: OdDbDatabase): OdDbXrecordIterator;
  begin(): OdDbXrecordIterator;
  end(): OdDbXrecordIterator;
  setFromRbChain(pRb: OdResBuf, pDb: OdDbDatabase): OdResult;
  appendRbChain(pRb: OdResBuf, pDb: OdDbDatabase): OdResult;
  isXlateReferences(): boolean;
  setXlateReferences(isXlateReferences: boolean): void;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): void;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): void;
  mergeStyle(): DuplicateRecordCloning;
  setMergeStyle(mergeStyle: DuplicateRecordCloning): void;
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/ExHostAppServices.html} Additional documentation.
 */
class ExHostAppServices extends OdDbHostAppServices2 {
  newProgressMeter(): OdDbHostAppProgressMeter;
  releaseProgressMeter(pProgressMeter: OdDbHostAppProgressMeter): void;
  start(displayString: OdString): void;
  stop(): void;
  meterProgress(): void;
  setLimit(max: number): void;
  disableOutput(disable: boolean): void;
  setPrefix(prefix: OdString): void;
  patternManager(): OdHatchPatternManager;
  readFile(filename: OdString, allowCPConversion: boolean, partialLoad: boolean, shareMode: FileShareMode, password: OdPassword): OdDbDatabase;
};

enum ExternalEntityKind {
  kAcisEntity = 0,
  kGe3dCurveEntity = 1,
  kGeSurfaceEntity = 2,
  kExternalEntityUndefined = 3,
  kBimEntity = 4,
  kIfcEntity = 5
};

enum NurbSurfaceProperties {
  kUninit = 0,
  kOpen = 1,
  kClosed = 2,
  kPeriodic = 4,
  kRational = 8,
  kNoPoles = 16,
  kPoleAtMin = 32,
  kPoleAtMax = 64,
  kPoleAtBoth = 128
};

enum BooleanType {
  kUnion = 0,
  kSubtract = 1,
  kCommon = 2
};

enum ClipError {
  eOk = 0,
  eInvalidClipBoundary = 1,
  eNotInitialized = 2
};

enum PointContainment {
  kInside = 0,
  kOutside = 1,
  kOnBoundary = 2
};

enum OffsetCrvExtType {
  kFillet = 0,
  kChamfer = 1,
  kExtend = 2
};

enum ClipCondition {
  kInvalid = 0,
  kAllSegmentsInside = 1,
  kSegmentsIntersect = 2,
  kAllSegmentsOutsideZeroWinds = 3,
  kAllSegmentsOutsideOddWinds = 4,
  kAllSegmentsOutsideEvenWinds = 5
};

enum OdGeXConfig {
  kNotDefined = 1,
  kUnknown = 2,
  kLeftRight = 4,
  kRightLeft = 8,
  kLeftLeft = 16,
  kRightRight = 32,
  kPointLeft = 64,
  kPointRight = 128,
  kLeftOverlap = 256,
  kOverlapLeft = 512,
  kRightOverlap = 1024,
  kOverlapRight = 2048,
  kOverlapStart = 4096,
  kOverlapEnd = 8192,
  kOverlapOverlap = 16384
};

enum ssiType {
  kSSITransverse = 0,
  kSSITangent = 1,
  kSSIAntiTangent = 2
};

enum ErrorCondition {
  kOk = 0,
  k0This = 1,
  k0Arg1 = 2,
  k0Arg2 = 3,
  kPerpendicularArg1Arg2 = 4,
  kEqualArg1Arg2 = 5,
  kEqualArg1Arg3 = 6,
  kEqualArg2Arg3 = 7,
  kLinearlyDependentArg1Arg2Arg3 = 8,
  kArg1TooBig = 9,
  kArg1OnThis = 10,
  kArg1InsideThis = 11,
  kNonCoplanarGeometry = 12,
  kDegenerateGeometry = 13,
  kSingularPoint = 14
};

enum EntityId {
  kEntity2d = 0,
  kEntity3d = 1,
  kPointEnt2d = 2,
  kPointEnt3d = 3,
  kPosition2d = 4,
  kPosition3d = 5,
  kPointOnCurve2d = 6,
  kPointOnCurve3d = 7,
  kPointOnSurface = 8,
  kBoundedPlane = 9,
  kCircArc2d = 10,
  kCircArc3d = 11,
  kConic2d = 12,
  kConic3d = 13,
  kCurve2d = 14,
  kCurve3d = 15,
  kEllipArc2d = 16,
  kEllipArc3d = 17,
  kLine2d = 18,
  kLine3d = 19,
  kLinearEnt2d = 20,
  kLinearEnt3d = 21,
  kLineSeg2d = 22,
  kLineSeg3d = 23,
  kPlanarEnt = 24,
  kPlane = 25,
  kRay2d = 26,
  kRay3d = 27,
  kSurface = 28,
  kSphere = 29,
  kCylinder = 30,
  kTorus = 31,
  kCone = 32,
  kSplineEnt2d = 33,
  kPolyline2d = 34,
  kAugPolyline2d = 35,
  kNurbCurve2d = 36,
  kDSpline2d = 37,
  kCubicSplineCurve2d = 38,
  kSplineEnt3d = 39,
  kPolyline3d = 40,
  kAugPolyline3d = 41,
  kNurbCurve3d = 42,
  kDSpline3d = 43,
  kCubicSplineCurve3d = 44,
  kTrimmedCrv2d = 45,
  kCompositeCrv2d = 46,
  kCompositeCrv3d = 47,
  kExternalSurface = 48,
  kNurbSurface = 49,
  kTrimmedSurface = 50,
  kOffsetSurface = 51,
  kEnvelope2d = 52,
  kCurveBoundedSurface = 53,
  kExternalCurve3d = 54,
  kExternalCurve2d = 55,
  kSurfaceCurve2dTo3d = 56,
  kSurfaceCurve3dTo2d = 57,
  kExternalBoundedSurface = 58,
  kCurveCurveInt2d = 59,
  kCurveCurveInt3d = 60,
  kBoundBlock2d = 61,
  kBoundBlock3d = 62,
  kOffsetCurve2d = 63,
  kOffsetCurve3d = 64,
  kPolynomCurve3d = 65,
  kBezierCurve3d = 66,
  kObject = 67,
  kFitData3d = 68,
  kHatch = 69,
  kTrimmedCurve2d = 70,
  kTrimmedCurve3d = 71,
  kCurveSampleData = 72,
  kEllipCone = 73,
  kEllipCylinder = 74,
  kIntervalBoundBlock = 75,
  kClipBoundary2d = 76,
  kExternalObject = 77,
  kCurveSurfaceInt = 78,
  kSurfaceSurfaceInt = 79,
  kHelix = 80,
  kSpunSurface = 81,
  kSegmentChain2d = 82,
  kRevolvedSurface = 83,
  kRuled = 84,
  kEdgeCurve = 85,
  kInvalidEntity = 86,
  kDummy1 = 87,
  kDummy2 = 88,
  kDummy3 = 89,
  kDummy4 = 90,
  kDummy5 = 91,
  kDummy6 = 92,
  kDummy7 = 93,
  kDummy8 = 94,
  kDummy9 = 95
};

enum ssiConfig {
  kSSIUnknown = 0,
  kSSIOut = 1,
  kSSIIn = 2,
  kSSICoincident = 3
};

enum csiConfig {
  kXUnknown = 0,
  kXOut = 1,
  kXIn = 2,
  kXTanOut = 3,
  kXTanIn = 4,
  kXCoincident = 5,
  kXCoincidentUnbounded = 6
};

enum OdGeKnotParameterization {
  kChord = 0,
  kSqrtChord = 1,
  kUniform = 2,
  kCustomParameterization = 15,
  kNotDefinedKnotParam = 16
};

enum OdGeIntersectError {
  kXXOk = 0,
  kXXIndexOutOfRange = 1,
  kXXWrongDimensionAtIndex = 2,
  kXXUnknown = 3
};

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdGeAugPolyline3d.html} Additional documentation.
 */
class OdGeAugPolyline3d extends OdGePolyline3d {
  constructor();
  constructor(apline: OdGeAugPolyline3d);
  constructor(knots: OdGeKnotVector, controlPoints: OdGePoint3dArray, vecBundle: OdGeVector3dArray);
  constructor(controlPoints: OdGePoint3dArray, vecBundle: OdGeVector3dArray);
  constructor(curve: OdGeCurve3d, fromParam: number, toParam: number, approxEps: number);
  copy(): OdGeAugPolyline3d;
  transformBy(xfm: OdGeMatrix3d): OdGeAugPolyline3d;
  translateBy(translateVec: OdGeVector3d): OdGeAugPolyline3d;
  rotateBy(angle: number, vect: OdGeVector3d, basePoint: OdGePoint3d): OdGeAugPolyline3d;
  mirror(plane: OdGePlane): OdGeAugPolyline3d;
  scaleBy(scaleFactor: number, basePoint: OdGePoint3d): OdGeAugPolyline3d;
  getPoint(index: number): OdGePoint3d;
  setPoint(controlpointIndex: number, point: OdGePoint3d): OdGeAugPolyline3d;
  getPoints(controlPoints: OdGePoint3dArray): void;
  getVector(vectorIndex: number): OdGeVector3d;
  setVector(vectorIndex: number, vect: OdGeVector3d): OdGeAugPolyline3d;
  getD1Vectors(tangents: OdGeVector3dArray): void;
  getD2Vector(vectorIndex: number): OdGeVector3d;
  setD2Vector(vectorIndex: number, vect: OdGeVector3d): OdGeAugPolyline3d;
  getD2Vectors(d2Vectors: OdGeVector3dArray): void;
  approxTol(): number;
  setApproxTol(approxTol: number): OdGeAugPolyline3d;
};

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdGeBoundBlock2d.html} Additional documentation.
 */
class OdGeBoundBlock2d extends OdGeEntity2d {
  constructor();
  constructor(point1: OdGePoint2d, point2: OdGePoint2d);
  constructor(base: OdGePoint2d, dir1: OdGeVector2d, dir2: OdGeVector2d);
  constructor(source: OdGeBoundBlock2d);
  copy(): OdGeBoundBlock2d;
  transformBy(xfm: OdGeMatrix2d): OdGeBoundBlock2d;
  translateBy(translateVec: OdGeVector2d): OdGeBoundBlock2d;
  rotateBy(angle: number, basePoint: OdGePoint2d): OdGeBoundBlock2d;
  mirror(line: OdGeLine2d): OdGeBoundBlock2d;
  scaleBy(scaleFactor: number, basePoint: OdGePoint2d): OdGeBoundBlock2d;
  getMinMaxPoints(p1: OdGePoint2d, p2: OdGePoint2d): void;
  get(base: OdGePoint2d, side1: OdGeVector2d, side2: OdGeVector2d): void;
  set(p1: OdGePoint2d, p2: OdGePoint2d): OdGeBoundBlock2d;
  set1(base: OdGePoint2d, side1: OdGeVector2d, side2: OdGeVector2d): OdGeBoundBlock2d;
  extend(point: OdGePoint2d): OdGeBoundBlock2d;
  swell(distance: number): OdGeBoundBlock2d;
  contains(point: OdGePoint2d, tol: OdGeTol): boolean;
  isDisjoint(block: OdGeBoundBlock2d, tol: OdGeTol): boolean;
  isBox(): boolean;
  setToBox(toBox: boolean): OdGeBoundBlock2d;
};

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdGeBoundBlock3d.html} Additional documentation.
 */
class OdGeBoundBlock3d extends OdGeEntity3d {
  constructor();
  constructor(base: OdGePoint3d, side1: OdGeVector3d, side2: OdGeVector3d, side3: OdGeVector3d);
  constructor(point1: OdGePoint3d, point2: OdGePoint3d);
  constructor(source: OdGeBoundBlock3d);
  copy(): OdGeBoundBlock3d;
  transformBy(xfm: OdGeMatrix3d): OdGeBoundBlock3d;
  translateBy(translateVec: OdGeVector3d): OdGeBoundBlock3d;
  rotateBy(angle: number, vect: OdGeVector3d, basePoint: OdGePoint3d): OdGeBoundBlock3d;
  mirror(plane: OdGePlane): OdGeBoundBlock3d;
  scaleBy(scaleFactor: number, basePoint: OdGePoint3d): OdGeBoundBlock3d;
  getMinMaxPoints(p1: OdGePoint3d, p2: OdGePoint3d): void;
  get(base: OdGePoint3d, side1: OdGeVector3d, side2: OdGeVector3d, side3: OdGeVector3d): void;
  set(p1: OdGePoint3d, p2: OdGePoint3d): OdGeBoundBlock3d;
  set1(base: OdGePoint3d, side1: OdGeVector3d, side2: OdGeVector3d, side3: OdGeVector3d): OdGeBoundBlock3d;
  extend(point: OdGePoint3d): OdGeBoundBlock3d;
  swell(distance: number): OdGeBoundBlock3d;
  contains(point: OdGePoint3d, tol: OdGeTol): boolean;
  isDisjoint(block: OdGeBoundBlock3d, tol: OdGeTol): boolean;
  isBox(): boolean;
  setToBox(toBox: boolean): OdGeBoundBlock3d;
  minPoint(): OdGePoint3d;
  maxPoint(): OdGePoint3d;
  center(): OdGePoint3d;
  setToBoxOrtho(dir1: OdGeVector3d, dir2: OdGeVector3d, dir3: OdGeVector3d): void;
  setToBoxOrtho1(): void;
  static ctr1(lcs: OdGeMatrix3d, localBox: OdGeExtents3d): OdGeBoundBlock3d;
};

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdGeBoundedPlane.html} Additional documentation.
 */
class OdGeBoundedPlane extends OdGePlanarEnt {
  constructor();
  constructor(plane: OdGeBoundedPlane);
  constructor(origin: OdGePoint3d, uAxis: OdGeVector3d, vAxis: OdGeVector3d);
  copy(): OdGeBoundedPlane;
  transformBy(xfm: OdGeMatrix3d): OdGeBoundedPlane;
  translateBy(translateVec: OdGeVector3d): OdGeBoundedPlane;
  rotateBy(angle: number, vect: OdGeVector3d, basePoint: OdGePoint3d): OdGeBoundedPlane;
  mirror(plane: OdGePlane): OdGeBoundedPlane;
  scaleBy(scaleFactor: number, basePoint: OdGePoint3d): OdGeBoundedPlane;
  intersectWith(plane: OdGePlane, intLine: OdGeLineSeg3d, tol: OdGeTol): boolean;
  intersectWith1(plane: OdGeBoundedPlane, intLine: OdGeLineSeg3d, tol: OdGeTol): boolean;
  set(origin: OdGePoint3d, uAxis: OdGeVector3d, vAxis: OdGeVector3d): OdGeBoundedPlane;
  set1(uPnt: OdGePoint3d, origin: OdGePoint3d, vPnt: OdGePoint3d): OdGeBoundedPlane;
  static ctr1(uPnt: OdGePoint3d, origin: OdGePoint3d, vPnt: OdGePoint3d): OdGeBoundedPlane;
};

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdGeCircArc2d.html} Additional documentation.
 */
class OdGeCircArc2d extends OdGeCurve2d {
  constructor();
  constructor(source: OdGeCircArc2d);
  constructor(center: OdGePoint2d, radius: number);
  constructor(center: OdGePoint2d, radius: number, startAng: number, endAng: number, refVec: OdGeVector2d, isClockWise: boolean);
  constructor(startPoint: OdGePoint2d, secondPoint: OdGePoint2d, endPoint: OdGePoint2d);
  constructor(startPoint: OdGePoint2d, endPoint: OdGePoint2d, bulge: number, bulgeFlag: boolean);
  copy(): OdGeCircArc2d;
  transformBy(xfm: OdGeMatrix2d): OdGeCircArc2d;
  translateBy(translateVec: OdGeVector2d): OdGeCircArc2d;
  rotateBy(angle: number, basePoint: OdGePoint2d): OdGeCircArc2d;
  mirror(line: OdGeLine2d): OdGeCircArc2d;
  scaleBy(scaleFactor: number, basePoint: OdGePoint2d): OdGeCircArc2d;
  intersectWith(line: OdGeLinearEnt2d, numInt: number, p1: OdGePoint2d, p2: OdGePoint2d, tol: OdGeTol): boolean;
  intersectWith1(circarc: OdGeCircArc2d, numInt: number, p1: OdGePoint2d, p2: OdGePoint2d, tol: OdGeTol): boolean;
  tangent(point: OdGePoint2d, line: OdGeLine2d, tol: OdGeTol): boolean;
  tangent1(point: OdGePoint2d, line: OdGeLine2d, tol: OdGeTol, status: OdGeError): boolean;
  isInside(point: OdGePoint2d, tol: OdGeTol): boolean;
  center(): OdGePoint2d;
  radius(): number;
  startAng(): number;
  endAng(): number;
  isClockWise(): boolean;
  refVec(): OdGeVector2d;
  startPoint(): OdGePoint2d;
  endPoint(): OdGePoint2d;
  setCenter(center: OdGePoint2d): OdGeCircArc2d;
  setRadius(radius: number): OdGeCircArc2d;
  setAngles(startAng: number, endAng: number): OdGeCircArc2d;
  setToComplement(): OdGeCircArc2d;
  setRefVec(vect: OdGeVector2d): OdGeCircArc2d;
  set(center: OdGePoint2d, radius: number): OdGeCircArc2d;
  set1(center: OdGePoint2d, radius: number, startAng: number, endAng: number, refVec: OdGeVector2d, isClockWise: boolean): OdGeCircArc2d;
  set2(startPoint: OdGePoint2d, secondPoint: OdGePoint2d, endPoint: OdGePoint2d): OdGeCircArc2d;
  set3(startPoint: OdGePoint2d, secondPoint: OdGePoint2d, endPoint: OdGePoint2d, status: OdGeError): OdGeCircArc2d;
  set4(startPoint: OdGePoint2d, endPoint: OdGePoint2d, bulge: number, bulgeFlag: boolean): OdGeCircArc2d;
  set5(curve1: OdGeCurve2d, curve2: OdGeCurve2d, radius: number, param1: number, param2: number, success: boolean): OdGeCircArc2d;
  set6(curve1: OdGeCurve2d, curve2: OdGeCurve2d, curve3: OdGeCurve2d, param1: number, param2: number, param3: number, success: boolean): OdGeCircArc2d;
  getGeomExtents(extents: OdGeExtents2d): void;
  startAngFromXAxis(): number;
  endAngFromXAxis(): number;
};

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdGeCircArc3d.html} Additional documentation.
 */
class OdGeCircArc3d extends OdGeCurve3d {
  constructor();
  constructor(source: OdGeCircArc3d);
  constructor(center: OdGePoint3d, normal: OdGeVector3d, radius: number);
  constructor(center: OdGePoint3d, normal: OdGeVector3d, refVec: OdGeVector3d, radius: number, startAng: number, endAng: number);
  copy(): OdGeCircArc3d;
  transformBy(xfm: OdGeMatrix3d): OdGeCircArc3d;
  translateBy(translateVec: OdGeVector3d): OdGeCircArc3d;
  rotateBy(angle: number, vect: OdGeVector3d, basePoint: OdGePoint3d): OdGeCircArc3d;
  mirror(plane: OdGePlane): OdGeCircArc3d;
  scaleBy(scaleFactor: number, basePoint: OdGePoint3d): OdGeCircArc3d;
  closestPointToPlane(plane: OdGePlanarEnt, pointOnPlane: OdGePoint3d, tol: OdGeTol): OdGePoint3d;
  intersectWith(line: OdGeLinearEnt3d, numInt: number, p1: OdGePoint3d, p2: OdGePoint3d, tol: OdGeTol): boolean;
  intersectWith1(arc: OdGeCircArc3d, numInt: number, p1: OdGePoint3d, p2: OdGePoint3d, tol: OdGeTol): boolean;
  intersectWith2(plane: OdGePlanarEnt, numInt: number, p1: OdGePoint3d, p2: OdGePoint3d, tol: OdGeTol): boolean;
  projIntersectWith(line: OdGeLinearEnt3d, projDir: OdGeVector3d, numInt: number, pntOnArc1: OdGePoint3d, pntOnArc2: OdGePoint3d, pntOnLine1: OdGePoint3d, pntOnLine2: OdGePoint3d, tol: OdGeTol): boolean;
  tangent(point: OdGePoint3d, line: OdGeLine3d, tol: OdGeTol): boolean;
  tangent1(point: OdGePoint3d, line: OdGeLine3d, tol: OdGeTol, status: OdGeError): boolean;
  getPlane(plane: OdGePlane): void;
  isInside(point: OdGePoint3d, tol: OdGeTol): boolean;
  center(): OdGePoint3d;
  normal(): OdGeVector3d;
  refVec(): OdGeVector3d;
  radius(): number;
  startAng(): number;
  endAng(): number;
  startPoint(): OdGePoint3d;
  endPoint(): OdGePoint3d;
  setCenter(center: OdGePoint3d): OdGeCircArc3d;
  setAxes(normal: OdGeVector3d, refVec: OdGeVector3d): OdGeCircArc3d;
  setRadius(radius: number): OdGeCircArc3d;
  setAngles(startAng: number, endAng: number): OdGeCircArc3d;
  set(center: OdGePoint3d, normal: OdGeVector3d, radius: number): OdGeCircArc3d;
  set1(center: OdGePoint3d, normal: OdGeVector3d, refVec: OdGeVector3d, radius: number, startAng: number, endAng: number): OdGeCircArc3d;
  set2(startPoint: OdGePoint3d, secondPoint: OdGePoint3d, endPoint: OdGePoint3d): OdGeCircArc3d;
  set3(startPoint: OdGePoint3d, secondPoint: OdGePoint3d, endPoint: OdGePoint3d, status: OdGeError): OdGeCircArc3d;
  set4(curve1: OdGeCurve3d, curve2: OdGeCurve3d, radius: number, param1: number, param2: number, success: boolean): OdGeCircArc3d;
  set5(curve1: OdGeCurve3d, curve2: OdGeCurve3d, curve3: OdGeCurve3d, param1: number, param2: number, param3: number, success: boolean): OdGeCircArc3d;
  getGeomExtents(extents: OdGeExtents3d): void;
  joinWith(curve: OdGeCircArc3d, iTolerance: OdGeTol): OdGeCircArc3d;
  static ctr1(startPoint: OdGePoint3d, secondPoint: OdGePoint3d, endPoint: OdGePoint3d): OdGeCircArc3d;
};

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdGeClipBoundary2d.html} Additional documentation.
 */
class OdGeClipBoundary2d extends OdGeEntity2d {
  constructor();
  constructor(cornerA: OdGePoint2d, cornerB: OdGePoint2d);
  constructor(clipBoundary: OdGePoint2dArray);
  copy(): OdGeClipBoundary2d;
  transformBy(xfm: OdGeMatrix2d): OdGeClipBoundary2d;
  translateBy(translateVec: OdGeVector2d): OdGeClipBoundary2d;
  rotateBy(angle: number, basePoint: OdGePoint2d): OdGeClipBoundary2d;
  mirror(line: OdGeLine2d): OdGeClipBoundary2d;
  scaleBy(scaleFactor: number, basePoint: OdGePoint2d): OdGeClipBoundary2d;
  set(cornerA: OdGePoint2d, cornerB: OdGePoint2d): ClipError;
  set1(clipBoundary: OdGePoint2dArray): ClipError;
  clipPolygon(rawVertices: OdGePoint2dArray, clippedVertices: OdGePoint2dArray, clipCondition: ClipCondition, pClippedSegmentSourceLabel: OdGeIntArray): ClipError;
  clipPolyline(rawVertices: OdGePoint2dArray, clippedVertices: OdGePoint2dArray, clipCondition: ClipCondition, pClippedSegmentSourceLabel: OdGeIntArray): ClipError;
  static ctr1(src: OdGeClipBoundary2d): OdGeClipBoundary2d;
};

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdGeCompositeCurve2d.html} Additional documentation.
 */
class OdGeCompositeCurve2d extends OdGeCurve2d {
  constructor();
  constructor(source: OdGeCompositeCurve2d);
  copy(): OdGeCompositeCurve2d;
  transformBy(xfm: OdGeMatrix2d): OdGeCompositeCurve2d;
  translateBy(translateVec: OdGeVector2d): OdGeCompositeCurve2d;
  rotateBy(angle: number, basePoint: OdGePoint2d): OdGeCompositeCurve2d;
  mirror(line: OdGeLine2d): OdGeCompositeCurve2d;
  scaleBy(scaleFactor: number, basePoint: OdGePoint2d): OdGeCompositeCurve2d;
  getCurveList(curveList: OdGeCurve2dPtrArray): void;
  getCurveList1(): OdGeCurve2dPtrArray;
  setCurveList(curveList: OdGeCurve2dPtrArray): OdGeCompositeCurve2d;
  globalToLocalParam(param: number, crvNum: number): number;
  localToGlobalParam(param: number, crvNum: number): number;
  static ctr1(curveList: OdGeCurve2dPtrArray): OdGeCompositeCurve2d;
};

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdGeCompositeCurve3d.html} Additional documentation.
 */
class OdGeCompositeCurve3d extends OdGeCurve3d {
  constructor();
  constructor(source: OdGeCompositeCurve3d);
  copy(): OdGeCompositeCurve3d;
  transformBy(xfm: OdGeMatrix3d): OdGeCompositeCurve3d;
  translateBy(translateVec: OdGeVector3d): OdGeCompositeCurve3d;
  rotateBy(angle: number, vect: OdGeVector3d, basePoint: OdGePoint3d): OdGeCompositeCurve3d;
  mirror(plane: OdGePlane): OdGeCompositeCurve3d;
  scaleBy(scaleFactor: number, basePoint: OdGePoint3d): OdGeCompositeCurve3d;
  getCurveList(curveList: OdGeCurve3dPtrArray): void;
  getCurveList1(): OdGeCurve3dPtrArray;
  setCurveList(curveList: OdGeCurve3dPtrArray): OdGeCompositeCurve3d;
  globalToLocalParam(param: number, crvNum: number): number;
  localToGlobalParam(param: number, crvNum: number): number;
  static ctr1(curveList: OdGeCurve3dPtrArray): OdGeCompositeCurve3d;
};

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdGeCone.html} Additional documentation.
 */
class OdGeCone extends OdGeSurface {
  constructor();
  constructor(cosineAngle: number, sineAngle: number, baseOrigin: OdGePoint3d, baseRadius: number, axisOfSymmetry: OdGeVector3d);
  constructor(cosineAngle: number, sineAngle: number, baseOrigin: OdGePoint3d, baseRadius: number, axisOfSymmetry: OdGeVector3d, refAxis: OdGeVector3d, height: OdGeInterval, startAng: number, endAng: number);
  constructor(cone: OdGeCone);
  copy(): OdGeCone;
  transformBy(xfm: OdGeMatrix3d): OdGeCone;
  translateBy(translateVec: OdGeVector3d): OdGeCone;
  rotateBy(angle: number, vect: OdGeVector3d, basePoint: OdGePoint3d): OdGeCone;
  mirror(plane: OdGePlane): OdGeCone;
  scaleBy(scaleFactor: number, basePoint: OdGePoint3d): OdGeCone;
  baseRadius(): number;
  baseCenter(): OdGePoint3d;
  getAngles(startAng: number, endAng: number): void;
  halfAngle(): number;
  getHalfAngle(cosineAngle: number, sineAngle: number): void;
  getHalfAngleSigned(cosineAngle: number, sineAngle: number): void;
  getHeight(height: OdGeInterval): void;
  heightAt(u: number): number;
  axisOfSymmetry(): OdGeVector3d;
  refAxis(): OdGeVector3d;
  apex(): OdGePoint3d;
  isClosed(tol: OdGeTol): boolean;
  isOuterNormal(): boolean;
  setBaseRadius(baseRadius: number): OdGeCone;
  setAngles(startAng: number, endAng: number): OdGeCone;
  setHeight(height: OdGeInterval): OdGeCone;
  getPoleParam(): number;
  set(cosineAngle: number, sineAngle: number, baseCenter: OdGePoint3d, baseRadius: number, axisOfSymmetry: OdGeVector3d): OdGeCone;
  set1(cosineAngle: number, sineAngle: number, baseCenter: OdGePoint3d, baseRadius: number, axisOfSymmetry: OdGeVector3d, refAxis: OdGeVector3d, height: OdGeInterval, startAng: number, endAng: number): OdGeCone;
  intersectWith(linEnt: OdGeLinearEnt3d, numInt: number, p1: OdGePoint3d, p2: OdGePoint3d, tol: OdGeTol): boolean;
  getUParamScale(): number;
  setUParamScale(uScale: number): void;
};

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdGeCubicSplineCurve2d.html} Additional documentation.
 */
class OdGeCubicSplineCurve2d extends OdGeSplineEnt2d {
  constructor();
  constructor(source: OdGeCubicSplineCurve2d);
  constructor(fitPnts: OdGePoint2dArray, tol: OdGeTol);
  constructor(fitPnts: OdGePoint2dArray, startDeriv: OdGeVector2d, endDeriv: OdGeVector2d, tol: OdGeTol);
  copy(): OdGeCubicSplineCurve2d;
  transformBy(xfm: OdGeMatrix2d): OdGeCubicSplineCurve2d;
  translateBy(translateVec: OdGeVector2d): OdGeCubicSplineCurve2d;
  rotateBy(angle: number, basePoint: OdGePoint2d): OdGeCubicSplineCurve2d;
  mirror(line: OdGeLine2d): OdGeCubicSplineCurve2d;
  scaleBy(scaleFactor: number, basePoint: OdGePoint2d): OdGeCubicSplineCurve2d;
  numFitPoints(): number;
  fitPointAt(fitPointIndex: number): OdGePoint2d;
  setFitPointAt(fitPointIndex: number, point: OdGePoint2d): OdGeCubicSplineCurve2d;
  firstDerivAt(fitPointIndex: number): OdGeVector2d;
  setFirstDerivAt(fitPointIndex: number, deriv: OdGeVector2d): OdGeCubicSplineCurve2d;
  static ctr1(curve: OdGeCurve2d, tol: number): OdGeCubicSplineCurve2d;
  static ctr2(knots: OdGeKnotVector, fitPnts: OdGePoint2dArray, firstDerivs: OdGeVector2dArray, isPeriodic: boolean): OdGeCubicSplineCurve2d;
};

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdGeCubicSplineCurve3d.html} Additional documentation.
 */
class OdGeCubicSplineCurve3d extends OdGeSplineEnt3d {
  constructor();
  constructor(source: OdGeCubicSplineCurve3d);
  constructor(fitPnts: OdGePoint3dArray, tol: OdGeTol);
  constructor(fitPnts: OdGePoint3dArray, startDeriv: OdGeVector3d, endDeriv: OdGeVector3d, tol: OdGeTol);
  copy(): OdGeCubicSplineCurve3d;
  transformBy(xfm: OdGeMatrix3d): OdGeCubicSplineCurve3d;
  translateBy(translateVec: OdGeVector3d): OdGeCubicSplineCurve3d;
  rotateBy(angle: number, vect: OdGeVector3d, basePoint: OdGePoint3d): OdGeCubicSplineCurve3d;
  mirror(plane: OdGePlane): OdGeCubicSplineCurve3d;
  scaleBy(scaleFactor: number, basePoint: OdGePoint3d): OdGeCubicSplineCurve3d;
  numFitPoints(): number;
  fitPointAt(fitPointIndex: number): OdGePoint3d;
  setFitPointAt(fitPointIndex: number, point: OdGePoint3d): OdGeCubicSplineCurve3d;
  firstDerivAt(fitPointIndex: number): OdGeVector3d;
  setFirstDerivAt(fitPointIndex: number, deriv: OdGeVector3d): OdGeCubicSplineCurve3d;
  static ctr1(curve: OdGeCurve3d, epsilon: number): OdGeCubicSplineCurve3d;
  static ctr2(knots: OdGeKnotVector, fitPnts: OdGePoint3dArray, firstDerivs: OdGeVector3dArray, isPeriodic: boolean): OdGeCubicSplineCurve3d;
};

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdGeCurve2d.html} Additional documentation.
 */
class OdGeCurve2d extends OdGeEntity2d {
  static restoreUvCurve(curve: OdGeCurve3d, surface: OdGeSurface, tol: OdGeTol): OdGeCurve2d;
  copy(): OdGeCurve2d;
  convertTo3d(): OdGeCurve3d;
  convertTo3d1(curve3d: OdGeCurve3d): void;
  getInterval(interval: OdGeInterval): void;
  getInterval1(interval: OdGeInterval, start: OdGePoint2d, end: OdGePoint2d): void;
  setInterval1(interval: OdGeInterval): boolean;
  distanceTo(point: OdGePoint2d, tol: OdGeTol): number;
  distanceTo1(otherCur: OdGeCurve2d, tol: OdGeTol): number;
  closestPointTo(point: OdGePoint2d, tol: OdGeTol): OdGePoint2d;
  closestPointTo1(point: OdGePoint2d, param: number, range: OdGeInterval, tol: OdGeTol): OdGePoint2d;
  closestPointTo2(curve2d: OdGeCurve2d, pntOnOtherCrv: OdGePoint2d, tol: OdGeTol): OdGePoint2d;
  getClosestPointTo(point: OdGePoint2d, pntOnCrv: OdGePointOnCurve2d, tol: OdGeTol): void;
  getClosestPointTo1(curve2d: OdGeCurve2d, pntOnThisCrv: OdGePointOnCurve2d, pntOnOtherCrv: OdGePointOnCurve2d, tol: OdGeTol): void;
  getNormalPoint(point: OdGePoint2d, pntOnCrv: OdGePointOnCurve2d, tol: OdGeTol): boolean;
  isOn(point: OdGePoint2d, param: number, tol: OdGeTol): boolean;
  isOn1(param: number, tol: OdGeTol): boolean;
  paramOf(point: OdGePoint2d, tol: OdGeTol): number;
  paramOf1(point: OdGePoint2d, range: OdGeInterval, tol: OdGeTol): number;
  getTrimmedOffset(distance: number, offsetCurveList: OdGeCurve2dPtrArray, extensionType: OffsetCrvExtType, tol: OdGeTol): OdResult;
  isClosed(tol: OdGeTol): boolean;
  isPeriodic(period: number): boolean;
  isLinear(line: OdGeLine2d, tol: OdGeTol): boolean;
  length(fromParam: number, toParam: number, tol: number): number;
  length1(tol: number): number;
  paramAtLength(datumParam: number, length: number, posParamDir: boolean, tol: number): number;
  area(startParam: number, endParam: number, value: number, tol: OdGeTol): boolean;
  isDegenerate(degenerateType: EntityId, tol: OdGeTol): boolean;
  explode(explodedCurves: OdGeCurve2dPtrArray, newExplodedCurve: OdGeIntArray, interval: OdGeInterval): boolean;
  getLocalClosestPoints(point: OdGePoint2d, approxPnt: OdGePointOnCurve2d, nbhd: OdGeInterval, tol: OdGeTol): void;
  getLocalClosestPoints1(otherCurve: OdGeCurve2d, approxPntOnThisCrv: OdGePointOnCurve2d, approxPntOnOtherCrv: OdGePointOnCurve2d, nbhd1: OdGeInterval, nbhd2: OdGeInterval, tol: OdGeTol): void;
  boundBlock(): OdGeBoundBlock2d;
  boundBlock1(range: OdGeInterval): OdGeBoundBlock2d;
  orthoBoundBlock(): OdGeBoundBlock2d;
  orthoBoundBlock1(range: OdGeInterval): OdGeBoundBlock2d;
  getGeomExtents(range: OdGeInterval, coordSystem: OdGeMatrix2d): OdGeExtents2d;
  hasStartPoint(startPoint: OdGePoint2d): boolean;
  hasEndPoint(endPoint: OdGePoint2d): boolean;
  hasMidPoint(point: OdGePoint2d, coef: number): boolean;
  midPoint(coef: number): OdGePoint2d;
  evalPoint(param: number): OdGePoint2d;
  evalPoint1(param: number, numDeriv: number, derivatives: OdGeVector2dArray): OdGePoint2d;
  getSamplePoints(fromParam: number, toParam: number, approxEps: number, pointArray: OdGePoint2dArray, paramArray: OdGeDoubleArray): void;
  getSamplePoints1(numSample: number, pointArray: OdGePoint2dArray): void;
  getSamplePoints2(fromParam: number, toParam: number, approxEps: number, pointArray: OdGePoint2dArray, pParamArray: OdGeDoubleArray): void;
  appendSamplePoints(fromParam: number, toParam: number, approxEps: number, pointArray: OdGePoint2dArray, pParamArray: OdGeDoubleArray): void;
  appendSamplePoints1(numSample: number, pointArray: OdGePoint2dArray): void;
};

class OdGeCurve2dPtrArray extends OdArray<OdGeCurve2d> { };

class OdGeCurve2dArray extends OdArray<OdGeCurve2d> { };

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdGeCurve3d.html} Additional documentation.
 */
class OdGeCurve3d extends OdGeEntity3d {
  copy(): OdGeCurve3d;
  getInterval(interval: OdGeInterval): void;
  getInterval1(interval: OdGeInterval, start: OdGePoint3d, end: OdGePoint3d): void;
  setInterval1(interval: OdGeInterval): boolean;
  distanceTo(point: OdGePoint3d, tol: OdGeTol): number;
  distanceTo1(curve: OdGeCurve3d, tol: OdGeTol): number;
  closestPointTo(point: OdGePoint3d, tol: OdGeTol): OdGePoint3d;
  closestPointTo1(curve: OdGeCurve3d, pntOnOtherCrv: OdGePoint3d, tol: OdGeTol): OdGePoint3d;
  closestPointTo2(point: OdGePoint3d, param: number, range: OdGeInterval, tol: OdGeTol): OdGePoint3d;
  getClosestPointTo(point: OdGePoint3d, pntOnCrv: OdGePointOnCurve3d, tol: OdGeTol): void;
  getClosestPointTo1(curve: OdGeCurve3d, pntOnThisCrv: OdGePointOnCurve3d, pntOnOtherCrv: OdGePointOnCurve3d, tol: OdGeTol): void;
  projClosestPointTo(point: OdGePoint3d, projectDirection: OdGeVector3d, tol: OdGeTol): OdGePoint3d;
  projClosestPointTo1(curve: OdGeCurve3d, projectDirection: OdGeVector3d, pntOnOtherCrv: OdGePoint3d, tol: OdGeTol): OdGePoint3d;
  getProjClosestPointTo(point: OdGePoint3d, projectDirection: OdGeVector3d, pntOnCrv: OdGePointOnCurve3d, tol: OdGeTol): void;
  getProjClosestPointTo1(curve: OdGeCurve3d, projectDirection: OdGeVector3d, pntOnThisCrv: OdGePointOnCurve3d, pntOnOtherCrv: OdGePointOnCurve3d, tol: OdGeTol): void;
  getNormalPoint(point: OdGePoint3d, pntOnCrv: OdGePointOnCurve3d, tol: OdGeTol): boolean;
  boundBlock(): OdGeBoundBlock3d;
  boundBlock1(range: OdGeInterval): OdGeBoundBlock3d;
  orthoBoundBlock(): OdGeBoundBlock3d;
  orthoBoundBlock1(range: OdGeInterval): OdGeBoundBlock3d;
  getGeomExtents(range: OdGeInterval, coordSystem: OdGeMatrix3d): OdGeExtents3d;
  project(projectionPlane: OdGePlane, projectDirection: OdGeVector3d, tol: OdGeTol): OdGeEntity3d;
  orthoProject(projectionPlane: OdGePlane, tol: OdGeTol): OdGeEntity3d;
  isOn(point: OdGePoint3d, param: number, tol: OdGeTol): boolean;
  isOn1(param: number, tol: OdGeTol): boolean;
  paramOf(point: OdGePoint3d, tol: OdGeTol): number;
  paramOf1(point: OdGePoint3d, range: OdGeInterval, tol: OdGeTol): number;
  getTrimmedOffset(distance: number, planeNormal: OdGeVector3d, offsetCurveList: OdGeCurve3dPtrArray, extensionType: OffsetCrvExtType, tol: OdGeTol): OdResult;
  isClosed(tol: OdGeTol): boolean;
  isPlanar(plane: OdGePlane, tol: OdGeTol): boolean;
  isLinear(line: OdGeLine3d, tol: OdGeTol): boolean;
  isCoplanarWith(curve: OdGeCurve3d, plane: OdGePlane, tol: OdGeTol): boolean;
  isPeriodic(period: number): boolean;
  length(fromParam: number, toParam: number, tol: number): number;
  length1(tol: number): number;
  paramAtLength(datumParam: number, length: number, posParamDir: boolean, tol: number): number;
  area(startParam: number, endParam: number, value: number, tol: OdGeTol): boolean;
  isDegenerate(degenerateType: EntityId, tol: OdGeTol): boolean;
  explode(explodedCurves: OdGeCurve3dPtrArray, newExplodedCurves: OdGeIntArray, pInterval: OdGeInterval): boolean;
  getLocalClosestPoints(point: OdGePoint3d, approxPntOnThisCrv: OdGePointOnCurve3d, pInterval1: OdGeInterval, tol: OdGeTol): void;
  getLocalClosestPoints1(curve: OdGeCurve3d, approxPntOnThisCrv: OdGePointOnCurve3d, approxPntOnOtherCrv: OdGePointOnCurve3d, pInterval1: OdGeInterval, pInterval2: OdGeInterval, tol: OdGeTol): void;
  hasStartPoint(startPoint: OdGePoint3d): boolean;
  hasEndPoint(endPoint: OdGePoint3d): boolean;
  hasMidPoint(point: OdGePoint3d, coef: number): boolean;
  midPoint(coef: number): OdGePoint3d;
  evalPoint(param: number): OdGePoint3d;
  evalPoint1(param: number, numDeriv: number, derivatives: OdGeVector3dArray): OdGePoint3d;
  getSamplePoints(fromParam: number, toParam: number, approxEps: number, pointArray: OdGePoint3dArray, paramArray: OdGeDoubleArray, forceResampling: boolean): void;
  getSamplePoints1(numSample: number, pointArray: OdGePoint3dArray): void;
  getSamplePoints2(numSample: number, pointArray: OdGePoint3dArray, paramArray: OdGeDoubleArray): void;
  getSamplePoints3(fromParam: number, toParam: number, approxEps: number, pointArray: OdGePoint3dArray, paramArray: OdGeDoubleArray): void;
  getSamplePoints4(paramInterval: OdGeInterval, approxEps: number, pointArray: OdGePoint3dArray, pParamArray: OdGeDoubleArray): void;
  appendSamplePoints(fromParam: number, toParam: number, approxEps: number, pointArray: OdGePoint3dArray, pParamArray: OdGeDoubleArray): void;
  appendSamplePoints1(numSample: number, pointArray: OdGePoint3dArray, pParamArray: OdGeDoubleArray): void;
  appendSamplePoints2(paramInterval: OdGeInterval, approxEps: number, pointArray: OdGePoint3dArray, pParamArray: OdGeDoubleArray): void;
  convertTo2d(tol: OdGeTol, sameParametrization: boolean): OdGeCurve2d;
};

class OdGeCurve3dArray extends OdArray<OdGeCurve3d> { };

class OdGeCurve3dPtrArray extends OdArray<OdGeCurve3d> { };

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdGeCurveBoundary.html} Additional documentation.
 */
class OdGeCurveBoundary {
  constructor();
  constructor(source: OdGeCurveBoundary);
  isDegenerate(): boolean;
  numElements(): number;
  isOwnerOfCurves(): boolean;
  setToOwnCurves(): OdGeCurveBoundary;
};

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdGeCurveCurveInt2d.html} Additional documentation.
 */
class OdGeCurveCurveInt2d extends OdGeEntity2d {
  constructor();
  constructor(curve1: OdGeCurve2d, curve2: OdGeCurve2d, tol: OdGeTol);
  constructor(curve1: OdGeCurve2d, curve2: OdGeCurve2d, range1: OdGeInterval, range2: OdGeInterval, tol: OdGeTol);
  constructor(source: OdGeCurveCurveInt2d);
  copy(): OdGeCurveCurveInt2d;
  transformBy(xfm: OdGeMatrix2d): OdGeCurveCurveInt2d;
  translateBy(translateVec: OdGeVector2d): OdGeCurveCurveInt2d;
  rotateBy(angle: number, basePoint: OdGePoint2d): OdGeCurveCurveInt2d;
  mirror(line: OdGeLine2d): OdGeCurveCurveInt2d;
  scaleBy(scaleFactor: number, basePoint: OdGePoint2d): OdGeCurveCurveInt2d;
  curve1(): OdGeCurve2d;
  curve2(): OdGeCurve2d;
  getIntRanges(range1: OdGeInterval, range2: OdGeInterval): void;
  tolerance(): OdGeTol;
  numIntPoints(): number;
  intPoint(intNum: number): OdGePoint2d;
  getIntParams(intNum: number, param1: number, param2: number): void;
  getPointOnCurve1(intNum: number, intPnt: OdGePointOnCurve2d): void;
  getPointOnCurve2(intNum: number, intPnt: OdGePointOnCurve2d): void;
  getIntConfigs(intNum: number, config1wrt2: OdGeXConfig, config2wrt1: OdGeXConfig): void;
  isTangential(intNum: number): boolean;
  isTransversal(intNum: number): boolean;
  intPointTol(intNum: number): number;
  overlapCount(): number;
  overlapDirection(overlapNum: number): boolean;
  getOverlapRanges(overlapNum: number, range1: OdGeInterval, range2: OdGeInterval): void;
  changeCurveOrder(): void;
  orderWrt1(): OdGeCurveCurveInt2d;
  orderWrt2(): OdGeCurveCurveInt2d;
  set(curve1: OdGeCurve2d, curve2: OdGeCurve2d, tol: OdGeTol): OdGeCurveCurveInt2d;
  set1(curve1: OdGeCurve2d, curve2: OdGeCurve2d, range1: OdGeInterval, range2: OdGeInterval, tol: OdGeTol): OdGeCurveCurveInt2d;
};

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdGeCurveCurveInt3d.html} Additional documentation.
 */
class OdGeCurveCurveInt3d extends OdGeEntity3d {
  constructor();
  constructor(curve1: OdGeCurve3d, curve2: OdGeCurve3d, planeNormal: OdGeVector3d, tol: OdGeTol);
  constructor(curve1: OdGeCurve3d, curve2: OdGeCurve3d, range1: OdGeInterval, range2: OdGeInterval, planeNormal: OdGeVector3d, tol: OdGeTol);
  constructor(source: OdGeCurveCurveInt3d);
  copy(): OdGeCurveCurveInt3d;
  transformBy(xfm: OdGeMatrix3d): OdGeCurveCurveInt3d;
  translateBy(translateVec: OdGeVector3d): OdGeCurveCurveInt3d;
  rotateBy(angle: number, vect: OdGeVector3d, basePoint: OdGePoint3d): OdGeCurveCurveInt3d;
  mirror(plane: OdGePlane): OdGeCurveCurveInt3d;
  scaleBy(scaleFactor: number, basePoint: OdGePoint3d): OdGeCurveCurveInt3d;
  curve1(): OdGeCurve3d;
  curve2(): OdGeCurve3d;
  getIntRanges(range1: OdGeInterval, range2: OdGeInterval): void;
  planeNormal(): OdGeVector3d;
  tolerance(): OdGeTol;
  numIntPoints(): number;
  intPoint(intNum: number): OdGePoint3d;
  getIntParams(intNum: number, param1: number, param2: number): void;
  getPointOnCurve1(intNum: number, intPnt: OdGePointOnCurve3d): void;
  getPointOnCurve2(intNum: number, intPnt: OdGePointOnCurve3d): void;
  getIntConfigs(intNum: number, config1wrt2: OdGeXConfig, config2wrt1: OdGeXConfig): void;
  isTangential(intNum: number): boolean;
  isTransversal(intNum: number): boolean;
  intPointTol(intNum: number): number;
  overlapCount(): number;
  overlapDirection(overlapNum: number): boolean;
  getOverlapRanges(overlapNum: number, range1: OdGeInterval, range2: OdGeInterval): void;
  changeCurveOrder(): void;
  orderWrt1(): OdGeCurveCurveInt3d;
  orderWrt2(): OdGeCurveCurveInt3d;
  set(curve1: OdGeCurve3d, curve2: OdGeCurve3d, planeNormal: OdGeVector3d, tol: OdGeTol): OdGeCurveCurveInt3d;
  set1(curve1: OdGeCurve3d, curve2: OdGeCurve3d, range1: OdGeInterval, range2: OdGeInterval, planeNormal: OdGeVector3d, tol: OdGeTol): OdGeCurveCurveInt3d;
};

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdGeCurveSurfInt.html} Additional documentation.
 */
class OdGeCurveSurfInt extends OdGeEntity3d {
  constructor();
  constructor(curve: OdGeCurve3d, surf: OdGeSurface, tol: OdGeTol);
  constructor(source: OdGeCurveSurfInt);
  copy(): OdGeCurveSurfInt;
  transformBy(xfm: OdGeMatrix3d): OdGeCurveSurfInt;
  translateBy(translateVec: OdGeVector3d): OdGeCurveSurfInt;
  rotateBy(angle: number, vect: OdGeVector3d, basePoint: OdGePoint3d): OdGeCurveSurfInt;
  mirror(plane: OdGePlane): OdGeCurveSurfInt;
  scaleBy(scaleFactor: number, basePoint: OdGePoint3d): OdGeCurveSurfInt;
  curve(): OdGeCurve3d;
  surface(): OdGeSurface;
  tolerance(): OdGeTol;
  numResults(status: OdGeIntersectError): number;
  getDimension(intNum: number, status: OdGeIntersectError): number;
  numIntPoints(status: OdGeIntersectError): number;
  intPoint(intNum: number, status: OdGeIntersectError): OdGePoint3d;
  getIntParams(intNum: number, param1: number, param2: OdGePoint2d, status: OdGeIntersectError): void;
  getPointOnCurve(intNum: number, intPnt: OdGePointOnCurve3d, status: OdGeIntersectError): void;
  getPointOnSurface(intNum: number, intPnt: OdGePointOnSurface, status: OdGeIntersectError): void;
  getIntConfigs(intNum: number, lower: csiConfig, higher: csiConfig, smallAngle: boolean, status: OdGeIntersectError): void;
  overlapCount(status: OdGeIntersectError): number;
  getOverlapRange(intNum: number, range: OdGeInterval, status: OdGeIntersectError): void;
  intParamCurve(intNum: number, isExternal: boolean, status: OdGeIntersectError): OdGeCurve2d;
  set(crv: OdGeCurve3d, surface: OdGeSurface, tol: OdGeTol): OdGeCurveSurfInt;
};

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdGeCylinder.html} Additional documentation.
 */
class OdGeCylinder extends OdGeSurface {
  constructor();
  constructor(radius: number, origin: OdGePoint3d, axisOfSymmetry: OdGeVector3d);
  constructor(radius: number, origin: OdGePoint3d, axisOfSymmetry: OdGeVector3d, refAxis: OdGeVector3d, height: OdGeInterval, startAng: number, endAng: number);
  constructor(cylinder: OdGeCylinder);
  copy(): OdGeCylinder;
  transformBy(xfm: OdGeMatrix3d): OdGeCylinder;
  translateBy(translateVec: OdGeVector3d): OdGeCylinder;
  rotateBy(angle: number, vect: OdGeVector3d, basePoint: OdGePoint3d): OdGeCylinder;
  mirror(plane: OdGePlane): OdGeCylinder;
  scaleBy(scaleFactor: number, basePoint: OdGePoint3d): OdGeCylinder;
  radius(): number;
  origin(): OdGePoint3d;
  getAngles(startAng: number, endAng: number): void;
  getHeight(height: OdGeInterval): void;
  heightAt(u: number): number;
  axisOfSymmetry(): OdGeVector3d;
  refAxis(): OdGeVector3d;
  isOuterNormal(): boolean;
  isClosed(tol: OdGeTol): boolean;
  setRadius(radius: number): OdGeCylinder;
  setAngles(startAng: number, endAng: number): OdGeCylinder;
  setHeight(height: OdGeInterval): OdGeCylinder;
  set(radius: number, origin: OdGePoint3d, axisOfSym: OdGeVector3d): OdGeCylinder;
  set1(radius: number, origin: OdGePoint3d, axisOfSymmetry: OdGeVector3d, refAxis: OdGeVector3d, height: OdGeInterval, startAng: number, endAng: number): OdGeCylinder;
  intersectWith(linEnt: OdGeLinearEnt3d, numInt: number, p1: OdGePoint3d, p2: OdGePoint3d, tol: OdGeTol): boolean;
  setIsOuterNormal(isOuterNormal: boolean): void;
  getUParamScale(): number;
  setUParamScale(uScale: number): void;
};

class OdGeDoubleArray extends OdArray<number> { };

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdGeEllipArc2d.html} Additional documentation.
 */
class OdGeEllipArc2d extends OdGeCurve2d {
  constructor();
  constructor(ell: OdGeEllipArc2d);
  constructor(center: OdGePoint2d, majorAxis: OdGeVector2d, minorAxis: OdGeVector2d, majorRadius: number, minorRadius: number);
  constructor(center: OdGePoint2d, majorAxis: OdGeVector2d, minorAxis: OdGeVector2d, majorRadius: number, minorRadius: number, startAng: number, endAng: number);
  copy(): OdGeEllipArc2d;
  transformBy(xfm: OdGeMatrix2d): OdGeEllipArc2d;
  translateBy(translateVec: OdGeVector2d): OdGeEllipArc2d;
  rotateBy(angle: number, basePoint: OdGePoint2d): OdGeEllipArc2d;
  mirror(line: OdGeLine2d): OdGeEllipArc2d;
  scaleBy(scaleFactor: number, basePoint: OdGePoint2d): OdGeEllipArc2d;
  intersectWith(line: OdGeLinearEnt2d, numInt: number, p1: OdGePoint2d, p2: OdGePoint2d, tol: OdGeTol): boolean;
  isCircular(tol: OdGeTol): boolean;
  isInside(point: OdGePoint2d, tol: OdGeTol): boolean;
  center(): OdGePoint2d;
  minorRadius(): number;
  majorRadius(): number;
  minorAxis(): OdGeVector2d;
  majorAxis(): OdGeVector2d;
  startAng(): number;
  endAng(): number;
  startPoint(): OdGePoint2d;
  endPoint(): OdGePoint2d;
  isClockWise(): boolean;
  setCenter(center: OdGePoint2d): OdGeEllipArc2d;
  setMinorRadius(rad: number): OdGeEllipArc2d;
  setMajorRadius(rad: number): OdGeEllipArc2d;
  setAxes(majorAxis: OdGeVector2d, minorAxis: OdGeVector2d): OdGeEllipArc2d;
  setAngles(startAng: number, endAng: number): OdGeEllipArc2d;
  set(center: OdGePoint2d, majorAxis: OdGeVector2d, minorAxis: OdGeVector2d, majorRadius: number, minorRadius: number): OdGeEllipArc2d;
  set1(center: OdGePoint2d, majorAxis: OdGeVector2d, minorAxis: OdGeVector2d, majorRadius: number, minorRadius: number, startAng: number, endAng: number): OdGeEllipArc2d;
  set2(arc: OdGeCircArc2d): OdGeEllipArc2d;
  getGeomExtents(extents: OdGeExtents2d): void;
  inverseTangent(tan: OdGeVector2d, params: OdGeDoubleArray): void;
  static ctr1(arc: OdGeCircArc2d): OdGeEllipArc2d;
};

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdGeEllipArc3d.html} Additional documentation.
 */
class OdGeEllipArc3d extends OdGeCurve3d {
  constructor();
  constructor(ell: OdGeEllipArc3d);
  constructor(center: OdGePoint3d, majorAxis: OdGeVector3d, minorAxis: OdGeVector3d, majorRadius: number, minorRadius: number);
  constructor(center: OdGePoint3d, majorAxis: OdGeVector3d, minorAxis: OdGeVector3d, majorRadius: number, minorRadius: number, startAng: number, endAng: number);
  copy(): OdGeEllipArc3d;
  transformBy(xfm: OdGeMatrix3d): OdGeEllipArc3d;
  translateBy(translateVec: OdGeVector3d): OdGeEllipArc3d;
  rotateBy(angle: number, vect: OdGeVector3d, basePoint: OdGePoint3d): OdGeEllipArc3d;
  mirror(plane: OdGePlane): OdGeEllipArc3d;
  scaleBy(scaleFactor: number, basePoint: OdGePoint3d): OdGeEllipArc3d;
  closestPointToPlane(plane: OdGePlanarEnt, pointOnPlane: OdGePoint3d, tol: OdGeTol): OdGePoint3d;
  intersectWith(line: OdGeLinearEnt3d, numInt: number, p1: OdGePoint3d, p2: OdGePoint3d, tol: OdGeTol): boolean;
  intersectWith1(plane: OdGePlanarEnt, numInt: number, p1: OdGePoint3d, p2: OdGePoint3d, tol: OdGeTol): boolean;
  projIntersectWith(line: OdGeLinearEnt3d, projDir: OdGeVector3d, numInt: number, pntOnEllipse1: OdGePoint3d, pntOnEllipse2: OdGePoint3d, pntOnLine1: OdGePoint3d, pntOnLine2: OdGePoint3d, tol: OdGeTol): boolean;
  getPlane(plane: OdGePlane): void;
  isCircular(tol: OdGeTol): boolean;
  isInside(point: OdGePoint3d, tol: OdGeTol): boolean;
  center(): OdGePoint3d;
  minorRadius(): number;
  majorRadius(): number;
  minorAxis(): OdGeVector3d;
  majorAxis(): OdGeVector3d;
  normal(): OdGeVector3d;
  startAng(): number;
  endAng(): number;
  startPoint(): OdGePoint3d;
  endPoint(): OdGePoint3d;
  setCenter(center: OdGePoint3d): OdGeEllipArc3d;
  setMinorRadius(rad: number): OdGeEllipArc3d;
  setMajorRadius(rad: number): OdGeEllipArc3d;
  setAxes(majorAxis: OdGeVector3d, minorAxis: OdGeVector3d): OdGeEllipArc3d;
  setAngles(startAng: number, endAng: number): OdGeEllipArc3d;
  set(center: OdGePoint3d, majorAxis: OdGeVector3d, minorAxis: OdGeVector3d, majorRadius: number, minorRadius: number): OdGeEllipArc3d;
  set1(center: OdGePoint3d, majorAxis: OdGeVector3d, minorAxis: OdGeVector3d, majorRadius: number, minorRadius: number, startAng: number, endAng: number): OdGeEllipArc3d;
  set2(arc: OdGeCircArc3d): OdGeEllipArc3d;
  orthogonalizeAxes(tol: OdGeTol, flag: ErrorCondition): void;
  orthogonalizeAxes1(tol: OdGeTol): void;
  tangentAt(param: number): OdGeVector3d;
  getGeomExtents(extents: OdGeExtents3d): void;
  inverseTangent(tan: OdGeVector3d, params: OdGeDoubleArray): OdResult;
  inverseTangentPlane(refPlane: OdGePlane, params: OdGeDoubleArray): OdResult;
  joinWith(curve: OdGeEllipArc3d, iTolerance: OdGeTol): OdGeEllipArc3d;
  static ctr1(source: OdGeCircArc3d): OdGeEllipArc3d;
};

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdGeEllipCone.html} Additional documentation.
 */
class OdGeEllipCone extends OdGeSurface {
  constructor();
  constructor(cosineAngle: number, sineAngle: number, origin: OdGePoint3d, minorRadius: number, majorRadius: number, axisOfSymmetry: OdGeVector3d);
  constructor(cosineAngle: number, sineAngle: number, baseOrigin: OdGePoint3d, minorRadius: number, majorRadius: number, axisOfSymmetry: OdGeVector3d, majorAxis: OdGeVector3d, height: OdGeInterval, startAng: number, endAng: number);
  constructor(cone: OdGeEllipCone);
  copy(): OdGeEllipCone;
  transformBy(xfm: OdGeMatrix3d): OdGeEllipCone;
  translateBy(translateVec: OdGeVector3d): OdGeEllipCone;
  rotateBy(angle: number, vect: OdGeVector3d, basePoint: OdGePoint3d): OdGeEllipCone;
  mirror(plane: OdGePlane): OdGeEllipCone;
  scaleBy(scaleFactor: number, basePoint: OdGePoint3d): OdGeEllipCone;
  radiusRatio(): number;
  minorRadius(): number;
  majorRadius(): number;
  baseCenter(): OdGePoint3d;
  getAngles(startAng: number, endAng: number): void;
  halfAngle(): number;
  getHalfAngle(cosineAngle: number, sineAngle: number): void;
  getHeight(height: OdGeInterval): void;
  heightAt(u: number): number;
  axisOfSymmetry(): OdGeVector3d;
  majorAxis(): OdGeVector3d;
  minorAxis(): OdGeVector3d;
  apex(): OdGePoint3d;
  isClosed(tol: OdGeTol): boolean;
  isOuterNormal(): boolean;
  setMinorRadius(minorRadius: number): OdGeEllipCone;
  setMajorRadius(majorRadius: number): OdGeEllipCone;
  setAngles(startAng: number, endAng: number): OdGeEllipCone;
  setHeight(height: OdGeInterval): OdGeEllipCone;
  getPoleParam(): number;
  intersectWith(linEnt: OdGeLinearEnt3d, numInt: number, p1: OdGePoint3d, p2: OdGePoint3d, tol: OdGeTol): boolean;
  set(cosineAngle: number, sineAngle: number, center: OdGePoint3d, minorRadius: number, majorRadius: number, axisOfSymmetry: OdGeVector3d): OdGeEllipCone;
  set1(cosineAngle: number, sineAngle: number, center: OdGePoint3d, minorRadius: number, majorRadius: number, axisOfSymmetry: OdGeVector3d, majorAxis: OdGeVector3d, height: OdGeInterval, startAng: number, endAng: number): OdGeEllipCone;
  getUParamScale(): number;
  setUParamScale(uScale: number): void;
};

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdGeEllipCylinder.html} Additional documentation.
 */
class OdGeEllipCylinder extends OdGeSurface {
  constructor();
  constructor(minorRadius: number, majorRadius: number, origin: OdGePoint3d, axisOfSymmetry: OdGeVector3d);
  constructor(minorRadius: number, majorRadius: number, origin: OdGePoint3d, axisOfSymmetry: OdGeVector3d, majorAxis: OdGeVector3d, height: OdGeInterval, startAng: number, endAng: number);
  constructor(cylinder: OdGeEllipCylinder);
  copy(): OdGeEllipCylinder;
  transformBy(xfm: OdGeMatrix3d): OdGeEllipCylinder;
  translateBy(translateVec: OdGeVector3d): OdGeEllipCylinder;
  rotateBy(angle: number, vect: OdGeVector3d, basePoint: OdGePoint3d): OdGeEllipCylinder;
  mirror(plane: OdGePlane): OdGeEllipCylinder;
  scaleBy(scaleFactor: number, basePoint: OdGePoint3d): OdGeEllipCylinder;
  radiusRatio(): number;
  minorRadius(): number;
  majorRadius(): number;
  origin(): OdGePoint3d;
  getAngles(startAng: number, endAng: number): void;
  getHeight(height: OdGeInterval): void;
  heightAt(u: number): number;
  axisOfSymmetry(): OdGeVector3d;
  majorAxis(): OdGeVector3d;
  minorAxis(): OdGeVector3d;
  isOuterNormal(): boolean;
  isClosed(tol: OdGeTol): boolean;
  setIsOuterNormal(isOuterNormal: boolean): void;
  setMinorRadius(minorRadius: number): OdGeEllipCylinder;
  setMajorRadius(majorRadius: number): OdGeEllipCylinder;
  setAngles(startAng: number, endAng: number): OdGeEllipCylinder;
  setHeight(height: OdGeInterval): OdGeEllipCylinder;
  set(minorRadius: number, majorRadius: number, origin: OdGePoint3d, axisOfSymmetry: OdGeVector3d): OdGeEllipCylinder;
  set1(minorRadius: number, majorRadius: number, origin: OdGePoint3d, axisOfSymmetry: OdGeVector3d, majorAxis: OdGeVector3d, height: OdGeInterval, startAng: number, endAng: number): OdGeEllipCylinder;
  intersectWith(linEnt: OdGeLinearEnt3d, numInt: number, p1: OdGePoint3d, p2: OdGePoint3d, tol: OdGeTol): boolean;
  getUParamScale(): number;
  setUParamScale(uScale: number): void;
};

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdGeEntity2d.html} Additional documentation.
 */
class OdGeEntity2d {
  isKindOf(entType: EntityId): boolean;
  type(): EntityId;
  copy(): OdGeEntity2d;
  isEqualTo(other: OdGeEntity2d, tol: OdGeTol): boolean;
  isOn(point: OdGePoint2d, tol: OdGeTol): boolean;
};

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdGeEntity3d.html} Additional documentation.
 */
class OdGeEntity3d {
  isKindOf(entType: EntityId): boolean;
  type(): EntityId;
  copy(): OdGeEntity3d;
  isEqualTo(object: OdGeEntity3d, tol: OdGeTol): boolean;
  isOn(point: OdGePoint3d, tol: OdGeTol): boolean;
};

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdGeExtents2d.html} Additional documentation.
 */
class OdGeExtents2d {
  constructor();
  constructor(min: OdGePoint2d, max: OdGePoint2d);
  constructor(arg0: OdGeExtents2d);
  minPoint(): OdGePoint2d;
  maxPoint(): OdGePoint2d;
  diagonal(): OdGeVector2d;
  set(min: OdGePoint2d, max: OdGePoint2d): void;
  comparingSet(pt1: OdGePoint2d, pt2: OdGePoint2d): void;
  addPoint(point: OdGePoint2d): OdGeExtents2d;
  addPoints(points: OdGePoint2dArray): OdGeExtents2d;
  addExt(extents: OdGeExtents2d): OdGeExtents2d;
  isValidExtents(): boolean;
  expandBy(vect: OdGeVector2d): void;
  transformBy(xfm: OdGeMatrix2d): void;
  translate(iShift: OdGeVector2d): void;
  contains(point: OdGePoint2d, tol: OdGeTol): boolean;
  contains1(extents: OdGeExtents2d, tol: OdGeTol): boolean;
  isDisjoint(extents: OdGeExtents2d, tol: OdGeTol): boolean;
  intersectWith(extents: OdGeExtents2d, pResult: OdGeExtents2d): IntersectionStatus;
  center(): OdGePoint2d;
  isEqualTo(extents: OdGeExtents2d, tol: OdGeTol): boolean;
  static ctr1(arg0: OdGeExtents2d): OdGeExtents2d;
};

enum IntersectionStatus {
  kIntersectUnknown = 0,
  kIntersectNot = 1,
  kIntersectOpIn = 2,
  kIntersectOpOut = 3,
  kIntersectOk = 4
};

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdGeExtents3d.html} Additional documentation.
 */
class OdGeExtents3d {
  constructor();
  constructor(min: OdGePoint3d, max: OdGePoint3d);
  constructor(arg0: OdGeExtents3d);
  minPoint(): OdGePoint3d;
  maxPoint(): OdGePoint3d;
  set(min: OdGePoint3d, max: OdGePoint3d): void;
  comparingSet(pt1: OdGePoint3d, pt2: OdGePoint3d): void;
  addPoint(point: OdGePoint3d): OdGeExtents3d;
  addPoints(points: OdGePoint3dArray): OdGeExtents3d;
  addExt(extents: OdGeExtents3d): OdGeExtents3d;
  isValidExtents(): boolean;
  expandBy(vect: OdGeVector3d): void;
  transformBy(xfm: OdGeMatrix3d): void;
  contains(point: OdGePoint3d, tol: OdGeTol): boolean;
  contains1(extents: OdGeExtents3d, tol: OdGeTol): boolean;
  isDisjoint(extents: OdGeExtents3d, tol: OdGeTol): boolean;
  isDisjointEuclidean(extents: OdGeExtents3d, tol: OdGeTol): boolean;
  distanceTo(iPoint: OdGePoint3d): number;
  distanceTo1(iExtents: OdGeExtents3d): number;
  intersectWith(extents: OdGeExtents3d, pResult: OdGeExtents3d): IntersectionStatus;
  isWithinRange(pt: OdGePoint3d, radius: number): boolean;
  center(): OdGePoint3d;
  diagonal(): OdGeVector3d;
  convert2d(extents: OdGeExtents2d, plane: Convert2dPlane): void;
  setFrom2d(extents: OdGeExtents2d, plane: Convert2dPlane): void;
  isEqualTo(extents: OdGeExtents3d, tol: OdGeTol): boolean;
  static ctr1(arg0: OdGeExtents3d): OdGeExtents3d;
};

enum IntersectionStatus {
  kIntersectUnknown = 0,
  kIntersectNot = 1,
  kIntersectOpIn = 2,
  kIntersectOpOut = 3,
  kIntersectOk = 4
};

enum Convert2dPlane {
  kConvert2dPlaneXY = 4,
  kConvert2dPlaneXZ = 8,
  kConvert2dPlaneYX = 1,
  kConvert2dPlaneYZ = 9,
  kConvert2dPlaneZX = 2,
  kConvert2dPlaneZY = 6
};

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdGeExternalBoundedSurface.html} Additional documentation.
 */
class OdGeExternalBoundedSurface extends OdGeSurface {
  constructor();
  constructor(source: OdGeExternalBoundedSurface);
  copy(): OdGeExternalBoundedSurface;
  transformBy(xfm: OdGeMatrix3d): OdGeExternalBoundedSurface;
  translateBy(translateVec: OdGeVector3d): OdGeExternalBoundedSurface;
  rotateBy(angle: number, vect: OdGeVector3d, basePoint: OdGePoint3d): OdGeExternalBoundedSurface;
  mirror(plane: OdGePlane): OdGeExternalBoundedSurface;
  scaleBy(scaleFactor: number, basePoint: OdGePoint3d): OdGeExternalBoundedSurface;
  externalSurfaceKind(): ExternalEntityKind;
  isDefined(): boolean;
  getBaseSurface1(unboundedSurfaceDef: OdGeExternalSurface): void;
  isPlane(): boolean;
  isSphere(): boolean;
  isCylinder(): boolean;
  isCone(): boolean;
  isEllipCylinder(): boolean;
  isEllipCone(): boolean;
  isTorus(): boolean;
  isNurbs(): boolean;
  isExternalSurface(): boolean;
  numContours(): number;
  isOwnerOfSurface(): boolean;
  setToOwnSurface(): OdGeExternalBoundedSurface;
};

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdGeExternalCurve2d.html} Additional documentation.
 */
class OdGeExternalCurve2d extends OdGeCurve2d {
  constructor();
  constructor(source: OdGeExternalCurve2d);
  copy(): OdGeExternalCurve2d;
  transformBy(xfm: OdGeMatrix2d): OdGeExternalCurve2d;
  translateBy(translateVec: OdGeVector2d): OdGeExternalCurve2d;
  rotateBy(angle: number, basePoint: OdGePoint2d): OdGeExternalCurve2d;
  mirror(line: OdGeLine2d): OdGeExternalCurve2d;
  scaleBy(scaleFactor: number, basePoint: OdGePoint2d): OdGeExternalCurve2d;
  isNurbCurve(): boolean;
  isNurbCurve1(nurbCurve: OdGeNurbCurve2d): boolean;
  isDefined(): boolean;
  externalCurveKind(): ExternalEntityKind;
  isOwnerOfCurve(): boolean;
  setToOwnCurve(): OdGeExternalCurve2d;
};

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdGeExternalCurve3d.html} Additional documentation.
 */
class OdGeExternalCurve3d extends OdGeCurve3d {
  constructor();
  constructor(source: OdGeExternalCurve3d);
  copy(): OdGeExternalCurve3d;
  transformBy(xfm: OdGeMatrix3d): OdGeExternalCurve3d;
  translateBy(translateVec: OdGeVector3d): OdGeExternalCurve3d;
  rotateBy(angle: number, vect: OdGeVector3d, basePoint: OdGePoint3d): OdGeExternalCurve3d;
  mirror(plane: OdGePlane): OdGeExternalCurve3d;
  scaleBy(scaleFactor: number, basePoint: OdGePoint3d): OdGeExternalCurve3d;
  isLine(): boolean;
  isRay(): boolean;
  isLineSeg(): boolean;
  isCircArc(): boolean;
  isEllipArc(): boolean;
  isNurbCurve(): boolean;
  isDefined(): boolean;
  externalCurveKind(): ExternalEntityKind;
  isOwnerOfCurve(): boolean;
  setToOwnCurve(): OdGeExternalCurve3d;
};

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdGeExternalSurface.html} Additional documentation.
 */
class OdGeExternalSurface extends OdGeSurface {
  constructor();
  constructor(source: OdGeExternalSurface);
  copy(): OdGeExternalSurface;
  transformBy(xfm: OdGeMatrix3d): OdGeExternalSurface;
  translateBy(translateVec: OdGeVector3d): OdGeExternalSurface;
  rotateBy(angle: number, vect: OdGeVector3d, basePoint: OdGePoint3d): OdGeExternalSurface;
  mirror(plane: OdGePlane): OdGeExternalSurface;
  scaleBy(scaleFactor: number, basePoint: OdGePoint3d): OdGeExternalSurface;
  externalSurfaceKind(): ExternalEntityKind;
  isPlane(): boolean;
  isSphere(): boolean;
  isCylinder(): boolean;
  isCone(): boolean;
  isEllipCylinder(): boolean;
  isEllipCone(): boolean;
  isTorus(): boolean;
  isNurbSurface(): boolean;
  isDefined(): boolean;
  isOwnerOfSurface(): boolean;
  setToOwnSurface(): OdGeExternalSurface;
};

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdError_GeNotImplemted.html} Additional documentation.
 */
class OdError_GeNotImplemted extends OdError {
  constructor(sMessage: OdString);
  static ctr1(arg0: OdError_GeNotImplemted): OdError_GeNotImplemted;
  static ctr2(arg0: OdError_GeNotImplemted): OdError_GeNotImplemted;
};

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdGeLoopCtx.html} Additional documentation.
 */
class OdGeLoopCtx {
  constructor(arg0: OdGeLoopCtx);
  getLoopType(dTol: number): LoopType;
  static ctr1(arg0: OdGeLoopCtx): OdGeLoopCtx;
};

enum LoopType {
  kLUndefined = 0,
  kLOuter = 1,
  kLInner = 2
};

class OdGePoint3dArray extends OdArray<OdGePoint3d> { };

class OdGePoint2dArray extends OdArray<OdGePoint2d> { };

class OdGeIntArray extends OdArray<number> { };

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdGeInterval.html} Additional documentation.
 */
class OdGeInterval {
  constructor(tol: number);
  constructor(lower: number, upper: number, tol: number);
  lowerBound(): number;
  upperBound(): number;
  middle(): number;
  element(): number;
  getBounds(lower: number, upper: number): void;
  getEnd(index: number): number;
  length(): number;
  tolerance(): number;
  eval(ratio: number): number;
  set(lower: number, upper: number): OdGeInterval;
  set1(boundedBelow: boolean, bound: number): OdGeInterval;
  set2(): OdGeInterval;
  setUpper(upper: number): OdGeInterval;
  setLower(lower: number): OdGeInterval;
  setTolerance(tol: number): OdGeInterval;
  scale(factor: number): OdGeInterval;
  swap(): OdGeInterval;
  getMerge(otherInterval: OdGeInterval, result: OdGeInterval): void;
  subtract(otherInterval: OdGeInterval, lInterval: OdGeInterval, rInterval: OdGeInterval): number;
  intersectWith(otherInterval: OdGeInterval, result: OdGeInterval): boolean;
  finiteIntersectWith(range: OdGeInterval, result: OdGeInterval): boolean;
  isBounded(): boolean;
  isBoundedAbove(): boolean;
  isBoundedBelow(): boolean;
  isUnBounded(): boolean;
  isSingleton(): boolean;
  isDisjoint(otherInterval: OdGeInterval): boolean;
  contains(otherInterval: OdGeInterval): boolean;
  contains1(value: number): boolean;
  clamp(value: number): number;
  isContinuousAtUpper(otherInterval: OdGeInterval): boolean;
  isOverlapAtUpper(otherInterval: OdGeInterval, overlap: OdGeInterval): boolean;
  isEqualAtUpper(otherInterval: OdGeInterval): boolean;
  isEqualAtUpper1(value: number): boolean;
  isEqualAtLower(otherInterval: OdGeInterval): boolean;
  isEqualAtLower1(value: number): boolean;
  isPeriodicallyOn(period: number, value: number): boolean;
  static ctr1(boundedBelow: boolean, bound: number, tol: number): OdGeInterval;
  static ctr2(arg0: OdGeInterval): OdGeInterval;
  static ctr3(arg0: OdGeInterval): OdGeInterval;
};

class OdGeIntervalArray extends OdArray<OdGeInterval> { };

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdGeKnotVector.html} Additional documentation.
 */
class OdGeKnotVector {
  constructor(tol: number);
  constructor(size: number, growSize: number, tol: number);
  constructor(plusMult: number, source: OdGeKnotVector);
  isEqualTo(knotVector: OdGeKnotVector): boolean;
  startParam(): number;
  endParam(): number;
  multiplicityAt(knotIndex: number): number;
  numIntervals(): number;
  getInterval(order: number, param: number, interval: OdGeInterval): number;
  getDistinctKnots(knots: OdGeDoubleArray, multiplicity: OdGeIntArray): void;
  contains(param: number): boolean;
  isOn(knot: number): boolean;
  reverse(): OdGeKnotVector;
  removeAt(knotIndex: number): OdGeKnotVector;
  removeSubVector(startIndex: number, endIndex: number): OdGeKnotVector;
  insertAt(knotIndex: number, knot: number, multiplicity: number): OdGeKnotVector;
  insert(param: number): OdGeKnotVector;
  insertIn(param: number): OdGeKnotVector;
  append(knot: number): number;
  append1(tail: OdGeKnotVector, knotRatio: number): OdGeKnotVector;
  split(param: number, pKnotHead: OdGeKnotVector, multLast: number, pKnotTail: OdGeKnotVector, multFirst: number): number;
  setRange(lower: number, upper: number): OdGeKnotVector;
  tolerance(): number;
  setTolerance(tol: number): OdGeKnotVector;
  length(): number;
  isEmpty(): boolean;
  logicalLength(): number;
  setLogicalLength(size: number): OdGeKnotVector;
  physicalLength(): number;
  setPhysicalLength(physLength: number): OdGeKnotVector;
  growLength(): number;
  setGrowLength(rowLength: number): OdGeKnotVector;
  set(size: number, source: number, tol: number): OdGeKnotVector;
  multiplicityAt1(param: number): number;
  getArray(): number;
  getArray1(): number;
  static ctr1(size: number, source: number, tol: number): OdGeKnotVector;
  static ctr2(source: OdGeKnotVector): OdGeKnotVector;
  static ctr3(source: OdGeDoubleArray, tol: number): OdGeKnotVector;
};

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdGeLibVersion.html} Additional documentation.
 */
class OdGeLibVersion {
  constructor();
  constructor(source: OdGeLibVersion);
  constructor(major: number, minor: number, corrective: number, schema: number);
  majorVersion(): number;
  minorVersion(): number;
  correctiveVersion(): number;
  schemaVersion(): number;
  setMajorVersion(major: number): OdGeLibVersion;
  setMinorVersion(minor: number): OdGeLibVersion;
  setCorrectiveVersion(corrective: number): OdGeLibVersion;
  setSchemaVersion(schema: number): OdGeLibVersion;
};

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdGeLine2d.html} Additional documentation.
 */
class OdGeLine2d extends OdGeLinearEnt2d {
  constructor();
  constructor(source: OdGeLine2d);
  constructor(point: OdGePoint2d, vect: OdGeVector2d);
  copy(): OdGeLine2d;
  transformBy(xfm: OdGeMatrix2d): OdGeLine2d;
  translateBy(translateVec: OdGeVector2d): OdGeLine2d;
  rotateBy(angle: number, basePoint: OdGePoint2d): OdGeLine2d;
  mirror(line: OdGeLine2d): OdGeLine2d;
  scaleBy(scaleFactor: number, basePoint: OdGePoint2d): OdGeLine2d;
  set(point: OdGePoint2d, vect: OdGeVector2d): OdGeLine2d;
  set1(point1: OdGePoint2d, point2: OdGePoint2d): OdGeLine2d;
  static ctr1(point1: OdGePoint2d, point2: OdGePoint2d): OdGeLine2d;
};

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdGeLine3d.html} Additional documentation.
 */
class OdGeLine3d extends OdGeLinearEnt3d {
  constructor();
  constructor(source: OdGeLine3d);
  constructor(point: OdGePoint3d, vect: OdGeVector3d);
  copy(): OdGeLine3d;
  transformBy(xfm: OdGeMatrix3d): OdGeLine3d;
  translateBy(translateVec: OdGeVector3d): OdGeLine3d;
  rotateBy(angle: number, vect: OdGeVector3d, basePoint: OdGePoint3d): OdGeLine3d;
  mirror(plane: OdGePlane): OdGeLine3d;
  scaleBy(scaleFactor: number, basePoint: OdGePoint3d): OdGeLine3d;
  set(point: OdGePoint3d, vect: OdGeVector3d): OdGeLine3d;
  set1(point1: OdGePoint3d, point2: OdGePoint3d): OdGeLine3d;
  static ctr1(point1: OdGePoint3d, point2: OdGePoint3d): OdGeLine3d;
};

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdGeLineSeg2d.html} Additional documentation.
 */
class OdGeLineSeg2d extends OdGeLinearEnt2d {
  constructor();
  constructor(source: OdGeLineSeg2d);
  constructor(point1: OdGePoint2d, point2: OdGePoint2d);
  copy(): OdGeLineSeg2d;
  transformBy(xfm: OdGeMatrix2d): OdGeLineSeg2d;
  translateBy(translateVec: OdGeVector2d): OdGeLineSeg2d;
  rotateBy(angle: number, basePoint: OdGePoint2d): OdGeLineSeg2d;
  mirror(line: OdGeLine2d): OdGeLineSeg2d;
  scaleBy(scaleFactor: number, basePoint: OdGePoint2d): OdGeLineSeg2d;
  set(point: OdGePoint2d, vect: OdGeVector2d): OdGeLineSeg2d;
  set1(point1: OdGePoint2d, point2: OdGePoint2d): OdGeLineSeg2d;
  set2(curve1: OdGeCurve2d, curve2: OdGeCurve2d, param1: number, param2: number, success: boolean): OdGeLineSeg2d;
  set3(curve: OdGeCurve2d, point: OdGePoint2d, param: number, success: boolean): OdGeLineSeg2d;
  getBisector(line: OdGeLine2d): void;
  baryComb(blendCoeff: number): OdGePoint2d;
  startPoint(): OdGePoint2d;
  endPoint(): OdGePoint2d;
  static ctr1(point: OdGePoint2d, vect: OdGeVector2d): OdGeLineSeg2d;
};

class OdGeLineSeg2dArray extends OdArray<OdGeLineSeg2d> { };

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdGeLineSeg3d.html} Additional documentation.
 */
class OdGeLineSeg3d extends OdGeLinearEnt3d {
  constructor();
  constructor(source: OdGeLineSeg3d);
  constructor(point: OdGePoint3d, vect: OdGeVector3d);
  copy(): OdGeLineSeg3d;
  transformBy(xfm: OdGeMatrix3d): OdGeLineSeg3d;
  translateBy(translateVec: OdGeVector3d): OdGeLineSeg3d;
  rotateBy(angle: number, vect: OdGeVector3d, basePoint: OdGePoint3d): OdGeLineSeg3d;
  mirror(plane: OdGePlane): OdGeLineSeg3d;
  scaleBy(scaleFactor: number, basePoint: OdGePoint3d): OdGeLineSeg3d;
  getBisector(plane: OdGePlane): void;
  baryComb(blendCoeff: number): OdGePoint3d;
  startPoint(): OdGePoint3d;
  endPoint(): OdGePoint3d;
  set(point: OdGePoint3d, vect: OdGeVector3d): OdGeLineSeg3d;
  set1(point1: OdGePoint3d, point2: OdGePoint3d): OdGeLineSeg3d;
  set2(curve1: OdGeCurve3d, curve2: OdGeCurve3d, param1: number, param2: number, success: boolean): OdGeLineSeg3d;
  set3(curve: OdGeCurve3d, point: OdGePoint3d, param: number, success: boolean): OdGeLineSeg3d;
  getDistanceToVector(point: OdGePoint3d, tol: OdGeTol): number;
  joinWith(curve: OdGeLineSeg3d, iTolerance: OdGeTol): OdGeLineSeg3d;
  static ctr1(point1: OdGePoint3d, point2: OdGePoint3d): OdGeLineSeg3d;
};

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdGeLinearEnt2d.html} Additional documentation.
 */
class OdGeLinearEnt2d extends OdGeCurve2d {
  copy(): OdGeLinearEnt2d;
  intersectWith(line: OdGeLinearEnt2d, intPnt: OdGePoint2d, tol: OdGeTol): boolean;
  isParallelTo(line: OdGeLinearEnt2d, tol: OdGeTol): boolean;
  isPerpendicularTo(line: OdGeLinearEnt2d, tol: OdGeTol): boolean;
  isColinearTo(line: OdGeLinearEnt2d, tol: OdGeTol): boolean;
  getPerpLine(point: OdGePoint2d, perpLine: OdGeLine2d): void;
  pointOnLine(): OdGePoint2d;
  direction(): OdGeVector2d;
  getLine(line: OdGeLine2d): void;
};

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdGeLinearEnt3d.html} Additional documentation.
 */
class OdGeLinearEnt3d extends OdGeCurve3d {
  copy(): OdGeLinearEnt3d;
  intersectWith(line: OdGeLinearEnt3d, intPt: OdGePoint3d, tol: OdGeTol): boolean;
  intersectWith1(plane: OdGePlanarEnt, intPnt: OdGePoint3d, tol: OdGeTol): boolean;
  projIntersectWith(line: OdGeLinearEnt3d, projDir: OdGeVector3d, pntOnThisLine: OdGePoint3d, pntOnOtherLine: OdGePoint3d, tol: OdGeTol): boolean;
  isOn(plane: OdGePlane, tol: OdGeTol): boolean;
  isParallelTo(line: OdGeLinearEnt3d, tol: OdGeTol): boolean;
  isParallelTo1(plane: OdGePlanarEnt, tol: OdGeTol): boolean;
  isPerpendicularTo(line: OdGeLinearEnt3d, tol: OdGeTol): boolean;
  isPerpendicularTo1(plane: OdGePlanarEnt, tol: OdGeTol): boolean;
  isColinearTo(line: OdGeLinearEnt3d, tol: OdGeTol): boolean;
  getPerpPlane(point: OdGePoint3d, plane: OdGePlane): void;
  pointOnLine(): OdGePoint3d;
  direction(): OdGeVector3d;
  getLine(line: OdGeLine3d): void;
};

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdGeMatrix2d.html} Additional documentation.
 */
class OdGeMatrix2d {
  constructor();
  constructor(arg0: OdGeMatrix2d);
  static translation1(vector: OdGeVector2d): OdGeMatrix2d;
  static rotation(angle: number, center: OdGePoint2d): OdGeMatrix2d;
  static scaling(scale: number, center: OdGePoint2d): OdGeMatrix2d;
  static scaling1(scale: OdGeScale2d, center: OdGePoint2d): OdGeMatrix2d;
  static mirroring(mirrorPoint: OdGePoint2d): OdGeMatrix2d;
  static mirroring1(mirrorLine: OdGeLine2d): OdGeMatrix2d;
  static alignCoordSys(fromOrigin: OdGePoint2d, fromXAxis: OdGeVector2d, fromYAxis: OdGeVector2d, toOrigin: OdGePoint2d, toXAxis: OdGeVector2d, toYAxis: OdGeVector2d): OdGeMatrix2d;
  setToIdentity(): OdGeMatrix2d;
  preMultBy(leftSide: OdGeMatrix2d): OdGeMatrix2d;
  postMultBy(rightSide: OdGeMatrix2d): OdGeMatrix2d;
  setToProduct(matrix1: OdGeMatrix2d, matrix2: OdGeMatrix2d): OdGeMatrix2d;
  invert(): OdGeMatrix2d;
  inverse(): OdGeMatrix2d;
  isSingular(tol: OdGeTol): boolean;
  transposeIt(): OdGeMatrix2d;
  transpose(): OdGeMatrix2d;
  isEqualTo(matrix: OdGeMatrix2d, tol: OdGeTol): boolean;
  isUniScaledOrtho(tol: OdGeTol): boolean;
  isScaledOrtho(tol: OdGeTol): boolean;
  scale(): number;
  det(): number;
  setTranslation(vect: OdGeVector2d): OdGeMatrix2d;
  translation(): OdGeVector2d;
  isConformal(scale: number, angle: number, isMirror: boolean, reflex: OdGeVector2d): boolean;
  setCoordSystem(origin: OdGePoint2d, xAxis: OdGeVector2d, yAxis: OdGeVector2d): OdGeMatrix2d;
  getCoordSystem(origin: OdGePoint2d, xAxis: OdGeVector2d, yAxis: OdGeVector2d): void;
  setToTranslation(vect: OdGeVector2d): OdGeMatrix2d;
  setToRotation(angle: number, center: OdGePoint2d): OdGeMatrix2d;
  setToScaling(scale: number, center: OdGePoint2d): OdGeMatrix2d;
  setToScaling1(scale: OdGeScale2d, center: OdGePoint2d): OdGeMatrix2d;
  setToMirroring(mirrorPoint: OdGePoint2d): OdGeMatrix2d;
  setToMirroring1(mirrorLine: OdGeLine2d): OdGeMatrix2d;
  setToAlignCoordSys(fromOrigin: OdGePoint2d, fromXAxis: OdGeVector2d, fromYAxis: OdGeVector2d, toOrigin: OdGePoint2d, toXAxis: OdGeVector2d, toYAxis: OdGeVector2d): OdGeMatrix2d;
  static ctr1(arg0: OdGeMatrix2d): OdGeMatrix2d;
};

class OdGeMatrix2dArray extends OdArray<OdGeMatrix2d> { };

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdGeMatrix3d.html} Additional documentation.
 */
class OdGeMatrix3d {
  constructor();
  constructor(arg0: OdGeMatrix3d);
  static translation(vect: OdGeVector3d): OdGeMatrix3d;
  static rotation(angle: number, axis: OdGeVector3d, center: OdGePoint3d): OdGeMatrix3d;
  static scaling(scale: number, center: OdGePoint3d): OdGeMatrix3d;
  static scaling1(scale: OdGeScale3d, center: OdGePoint3d): OdGeMatrix3d;
  static mirroring(mirrorPlane: OdGePlane): OdGeMatrix3d;
  static mirroring1(mirrorPoint: OdGePoint3d): OdGeMatrix3d;
  static mirroring2(mirrorLine: OdGeLine3d): OdGeMatrix3d;
  static projection(projectionPlane: OdGePlane, projectDir: OdGeVector3d): OdGeMatrix3d;
  static alignCoordSys(fromOrigin: OdGePoint3d, fromXAxis: OdGeVector3d, fromYAxis: OdGeVector3d, fromZAxis: OdGeVector3d, toOrigin: OdGePoint3d, toXAxis: OdGeVector3d, toYAxis: OdGeVector3d, toZAxis: OdGeVector3d): OdGeMatrix3d;
  static worldToPlane(normal: OdGeVector3d): OdGeMatrix3d;
  static worldToPlane1(plane: OdGePlane): OdGeMatrix3d;
  static planeToWorld(normal: OdGeVector3d): OdGeMatrix3d;
  static planeToWorld1(plane: OdGePlane): OdGeMatrix3d;
  setToIdentity(): OdGeMatrix3d;
  validateZero(tol: OdGeTol): void;
  preMultBy(leftSide: OdGeMatrix3d): OdGeMatrix3d;
  postMultBy(rightSide: OdGeMatrix3d): OdGeMatrix3d;
  setToProduct(matrix1: OdGeMatrix3d, matrix2: OdGeMatrix3d): OdGeMatrix3d;
  invert(): OdGeMatrix3d;
  inverse(): OdGeMatrix3d;
  inverse1(tol: OdGeTol): OdGeMatrix3d;
  inverse2(inverseMatrix: OdGeMatrix3d, tol: number): boolean;
  isSingular(tol: OdGeTol): boolean;
  transposeIt(): OdGeMatrix3d;
  transpose(): OdGeMatrix3d;
  isEqualTo(matrix: OdGeMatrix3d, tol: OdGeTol): boolean;
  isUniScaledOrtho(tol: OdGeTol): boolean;
  isScaledOrtho(tol: OdGeTol): boolean;
  isPerspective(tol: OdGeTol): boolean;
  det(): number;
  setTranslation(vect: OdGeVector3d): OdGeMatrix3d;
  setCoordSystem(origin: OdGePoint3d, xAxis: OdGeVector3d, yAxis: OdGeVector3d, zAxis: OdGeVector3d): OdGeMatrix3d;
  getCoordSystem(origin: OdGePoint3d, xAxis: OdGeVector3d, yAxis: OdGeVector3d, zAxis: OdGeVector3d): void;
  getCsOrigin(): OdGePoint3d;
  getCsXAxis(): OdGeVector3d;
  getCsYAxis(): OdGeVector3d;
  getCsZAxis(): OdGeVector3d;
  setToTranslation(vect: OdGeVector3d): OdGeMatrix3d;
  setToRotation(angle: number, axis: OdGeVector3d, center: OdGePoint3d): OdGeMatrix3d;
  setToScaling(scale: number, center: OdGePoint3d): OdGeMatrix3d;
  setToScaling1(scale: OdGeScale3d, center: OdGePoint3d): OdGeMatrix3d;
  setToMirroring(mirrorPlane: OdGePlane): OdGeMatrix3d;
  setToMirroring1(mirrorPoint: OdGePoint3d): OdGeMatrix3d;
  setToMirroring2(mirrorLine: OdGeLine3d): OdGeMatrix3d;
  setToProjection(projectionPlane: OdGePlane, projectDir: OdGeVector3d): OdGeMatrix3d;
  setToAlignCoordSys(fromOrigin: OdGePoint3d, fromXAxis: OdGeVector3d, fromYAxis: OdGeVector3d, fromZAxis: OdGeVector3d, toOrigin: OdGePoint3d, toXAxis: OdGeVector3d, toYAxis: OdGeVector3d, toZAxis: OdGeVector3d): OdGeMatrix3d;
  setToWorldToPlane(normal: OdGeVector3d): OdGeMatrix3d;
  setToWorldToPlane1(plane: OdGePlane): OdGeMatrix3d;
  setToPlaneToWorld(normal: OdGeVector3d): OdGeMatrix3d;
  setToPlaneToWorld1(plane: OdGePlane): OdGeMatrix3d;
  translation1(): OdGeVector3d;
  scale(): number;
  norm(): number;
  convertToLocal(normal: OdGeVector3d, elevation: number): OdGeMatrix2d;
  static ctr1(arg0: OdGeMatrix3d): OdGeMatrix3d;
};

class OdGeMatrix3dArray extends OdArray<OdGeMatrix3d> { };

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdGeNurbCurve2d.html} Additional documentation.
 */
class OdGeNurbCurve2d extends OdGeSplineEnt2d {
  constructor();
  constructor(source: OdGeNurbCurve2d);
  constructor(degree: number, knots: OdGeKnotVector, controlPoints: OdGePoint2dArray, isPeriodic: boolean);
  constructor(degree: number, knots: OdGeKnotVector, controlPoints: OdGePoint2dArray, weights: OdGeDoubleArray, isPeriodic: boolean);
  constructor(degree: number, fitPolyline: OdGePolyline2d, isPeriodic: boolean);
  constructor(fitPoints: OdGePoint2dArray, startTangent: OdGeVector2d, endTangent: OdGeVector2d, startTangentDefined: boolean, endTangentDefined: boolean, fitTolerance: OdGeTol);
  constructor(fitPoints: OdGePoint2dArray, fitTolerance: OdGeTol);
  constructor(fitPoints: OdGePoint2dArray, startTangent: OdGeVector2d, endTangent: OdGeVector2d, startTangentDefined: boolean, endTangentDefined: boolean, knotParam: OdGeKnotParameterization, fitTol: OdGeTol);
  static convertFrom(source: OdGeCurve2d, domain: OdGeInterval, tol: OdGeTol, sameParametrization: boolean): OdGeNurbCurve2d;
  static convertFrom1(source: OdGeCurve2d, tol: OdGeTol, sameParametrization: boolean): OdGeNurbCurve2d;
  copy(): OdGeNurbCurve2d;
  transformBy(xfm: OdGeMatrix2d): OdGeNurbCurve2d;
  translateBy(translateVec: OdGeVector2d): OdGeNurbCurve2d;
  rotateBy(angle: number, basePoint: OdGePoint2d): OdGeNurbCurve2d;
  mirror(line: OdGeLine2d): OdGeNurbCurve2d;
  scaleBy(scaleFactor: number, basePoint: OdGePoint2d): OdGeNurbCurve2d;
  numFitPoints(): number;
  getFitKnotParameterization(knotParam: OdGeKnotParameterization): boolean;
  getFitPointAt(fitPointIndex: number, point: OdGePoint2d): boolean;
  getFitTolerance(fitTolerance: OdGeTol): boolean;
  getFitTangents(startTangent: OdGeVector2d, endTangent: OdGeVector2d): boolean;
  getFitData(fitPoints: OdGePoint2dArray, fitTolerance: OdGeTol, tangentsExist: boolean, startTangent: OdGeVector2d, endTangent: OdGeVector2d): boolean;
  getFitData1(fitPoints: OdGePoint2dArray, fitTolerance: OdGeTol, tangentsExist: boolean, startTangent: OdGeVector2d, endTangent: OdGeVector2d, knotParam: OdGeKnotParameterization): boolean;
  getDefinitionData(degree: number, rational: boolean, periodic: boolean, knots: OdGeKnotVector, controlPoints: OdGePoint2dArray, weights: OdGeDoubleArray): void;
  numWeights(): number;
  weightAt(weightIndex: number): number;
  setWeightAt(weightIndex: number, weight: number): OdGeNurbCurve2d;
  evalMode(): boolean;
  getParamsOfC1Discontinuity(params: OdGeDoubleArray, tol: OdGeTol): boolean;
  getParamsOfG1Discontinuity(params: OdGeDoubleArray, tol: OdGeTol): boolean;
  setFitPointAt(fitPointIndex: number, point: OdGePoint2d): boolean;
  addFitPointAt(fitPointIndex: number, point: OdGePoint2d): boolean;
  deleteFitPointAt(fitPointIndex: number): boolean;
  addControlPointAt(newKnot: number, point: OdGePoint2d, weight: number): boolean;
  deleteControlPointAt(index: number): boolean;
  setFitKnotParameterization(knotParam: OdGeKnotParameterization): boolean;
  setFitTolerance(fitTol: OdGeTol): boolean;
  setFitTangents(startTangent: OdGeVector2d, endTangent: OdGeVector2d): boolean;
  setFitData(fitPoints: OdGePoint2dArray, startTangent: OdGeVector2d, endTangent: OdGeVector2d, fitTol: OdGeTol): OdGeNurbCurve2d;
  setFitData1(fitKnots: OdGeKnotVector, fitPoints: OdGePoint2dArray, startTangent: OdGeVector2d, endTangent: OdGeVector2d, fitTol: OdGeTol, isPeriodic: boolean): OdGeNurbCurve2d;
  setFitData2(degree: number, fitPoints: OdGePoint2dArray, fitTol: OdGeTol): OdGeNurbCurve2d;
  setFitData3(fitPoints: OdGePoint2dArray, startTangent: OdGeVector2d, endTangent: OdGeVector2d, knotParam: OdGeKnotParameterization, fitTol: OdGeTol): OdGeNurbCurve2d;
  purgeFitData(): boolean;
  addKnot(newKnot: number): OdGeNurbCurve2d;
  insertKnot(newKnot: number): OdGeNurbCurve2d;
  setEvalMode(evalMode: boolean): OdGeNurbCurve2d;
  joinWith(curve: OdGeNurbCurve2d, iTolerance: OdGeTol): OdGeNurbCurve2d;
  hardTrimByParams(newStartParam: number, newEndParam: number): OdGeNurbCurve2d;
  makeRational(weight: number): OdGeNurbCurve2d;
  makeClosed(): OdGeNurbCurve2d;
  makePeriodic(): OdGeNurbCurve2d;
  makeNonPeriodic(): OdGeNurbCurve2d;
  makeOpen(): OdGeNurbCurve2d;
  elevateDegree(plusDegree: number): OdGeNurbCurve2d;
  intersectWith(line2d: OdGeLine2d, pnts2d: OdGePoint2dArray, tol: OdGeTol, params: OdGeDoubleArray): boolean;
  set(degree: number, knots: OdGeKnotVector, controlPoints: OdGePoint2dArray, weights: OdGeDoubleArray, isPeriodic: boolean): OdGeNurbCurve2d;
  static ctr1(fitPoints: OdGePoint2dArray, fitTangents: OdGeVector2dArray, fitTolerance: OdGeTol, isPeriodic: boolean): OdGeNurbCurve2d;
  static ctr2(ellipse: OdGeEllipArc2d): OdGeNurbCurve2d;
  static ctr3(linSeg: OdGeLineSeg2d): OdGeNurbCurve2d;
};

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdGeNurbCurve3d.html} Additional documentation.
 */
class OdGeNurbCurve3d extends OdGeSplineEnt3d {
  constructor();
  constructor(source: OdGeNurbCurve3d);
  constructor(degree: number, knots: OdGeKnotVector, controlPoints: OdGePoint3dArray, isPeriodic: boolean);
  constructor(degree: number, knots: OdGeKnotVector, controlPoints: OdGePoint3dArray, weights: OdGeDoubleArray, isPeriodic: boolean);
  constructor(degree: number, knots: OdGeKnotVector, controlPoints: OdGePoint3d, numControlPoints: number, weights: number, numWeights: number, isPeriodic: boolean);
  constructor(degree: number, fitPolyline: OdGePolyline3d, isPeriodic: boolean);
  constructor(fitPoints: OdGePoint3dArray, startTangent: OdGeVector3d, endTangent: OdGeVector3d, startTangentDefined: boolean, endTangentDefined: boolean, fitTol: OdGeTol);
  constructor(fitPoints: OdGePoint3dArray, fitTolerance: OdGeTol);
  static convertFrom(source: OdGeCurve3d, domain: OdGeInterval, tol: OdGeTol, sameParametrization: boolean): OdGeNurbCurve3d;
  static convertFrom1(source: OdGeCurve3d, tol: OdGeTol, sameParametrization: boolean): OdGeNurbCurve3d;
  copy(): OdGeNurbCurve3d;
  transformBy(xfm: OdGeMatrix3d): OdGeNurbCurve3d;
  translateBy(translateVec: OdGeVector3d): OdGeNurbCurve3d;
  rotateBy(angle: number, vect: OdGeVector3d, basePoint: OdGePoint3d): OdGeNurbCurve3d;
  mirror(plane: OdGePlane): OdGeNurbCurve3d;
  scaleBy(scaleFactor: number, basePoint: OdGePoint3d): OdGeNurbCurve3d;
  numFitPoints(): number;
  getFitKnotParameterization(knotParam: OdGeKnotParameterization): boolean;
  getFitPointAt(fitPointIndex: number, point: OdGePoint3d): boolean;
  getFitTolerance(fitTolerance: OdGeTol): boolean;
  getFitTangents(startTangent: OdGeVector3d, endTangent: OdGeVector3d): boolean;
  getFitTangents1(startTangent: OdGeVector3d, endTangent: OdGeVector3d, startTangentDefined: boolean, endTangentDefined: boolean): boolean;
  getFitData(fitPoints: OdGePoint3dArray, fitTolerance: OdGeTol, tangentsExist: boolean, startTangent: OdGeVector3d, endTangent: OdGeVector3d): boolean;
  getFitData1(fitPoints: OdGePoint3dArray, fitTolerance: OdGeTol, tangentsExist: boolean, startTangent: OdGeVector3d, endTangent: OdGeVector3d, knotParam: OdGeKnotParameterization): boolean;
  getDefinitionData(degree: number, rational: boolean, periodic: boolean, knots: OdGeKnotVector, controlPoints: OdGePoint3dArray, weights: OdGeDoubleArray): void;
  numWeights(): number;
  weightAt(weightIndex: number): number;
  setWeightAt(weightIndex: number, weight: number): OdGeNurbCurve3d;
  evalMode(): boolean;
  getParamsOfC1Discontinuity(params: OdGeDoubleArray, tol: OdGeTol): boolean;
  getParamsOfG1Discontinuity(params: OdGeDoubleArray, tol: OdGeTol): boolean;
  setFitPointAt(fitPointIndex: number, point: OdGePoint3d): boolean;
  addFitPointAt(fitPointIndex: number, point: OdGePoint3d): boolean;
  deleteFitPointAt(fitPointIndex: number): boolean;
  addControlPointAt(newKnot: number, point: OdGePoint3d, weight: number): boolean;
  deleteControlPointAt(index: number): boolean;
  setFitKnotParameterization(knotParam: OdGeKnotParameterization): boolean;
  setFitTolerance(fitTol: OdGeTol): boolean;
  setFitTangents(startTangent: OdGeVector3d, endTangent: OdGeVector3d): boolean;
  setFitTangents1(startTangent: OdGeVector3d, endTangent: OdGeVector3d, startTangentDefined: boolean, endTangentDefined: boolean): boolean;
  setFitData(fitPoints: OdGePoint3dArray, startTangent: OdGeVector3d, endTangent: OdGeVector3d, fitTol: OdGeTol): OdGeNurbCurve3d;
  setFitData1(fitKnots: OdGeKnotVector, fitPoints: OdGePoint3dArray, startTangent: OdGeVector3d, endTangent: OdGeVector3d, fitTol: OdGeTol, isPeriodic: boolean): OdGeNurbCurve3d;
  setFitData2(degree: number, fitPoints: OdGePoint3dArray, fitTol: OdGeTol): OdGeNurbCurve3d;
  setFitData3(fitPoints: OdGePoint3dArray, startTangent: OdGeVector3d, endTangent: OdGeVector3d, knotParam: OdGeKnotParameterization, fitTol: OdGeTol): OdGeNurbCurve3d;
  purgeFitData(): boolean;
  addKnot(newKnot: number): OdGeNurbCurve3d;
  insertKnot(newKnot: number): OdGeNurbCurve3d;
  setEvalMode(evalMode: boolean): OdGeNurbCurve3d;
  joinWith(curve: OdGeNurbCurve3d, iTolerance: OdGeTol): OdGeNurbCurve3d;
  hardTrimByParams(newStartParam: number, newEndParam: number): OdGeNurbCurve3d;
  makeRational(weight: number): OdGeNurbCurve3d;
  makeClosed(): OdGeNurbCurve3d;
  makePeriodic(): OdGeNurbCurve3d;
  makeNonPeriodic(): OdGeNurbCurve3d;
  makeOpen(): OdGeNurbCurve3d;
  elevateDegree(plusDegree: number): OdGeNurbCurve3d;
  evalPoint(param: number, hint: number): OdGePoint3d;
  evalPointDivider(param: number, point: OdGePoint3d, divider: number, hint: number): void;
  set(degree: number, knots: OdGeKnotVector, controlPoints: OdGePoint3dArray, weights: OdGeDoubleArray, isPeriodic: boolean): OdGeNurbCurve3d;
  buildFitData(knotParam: OdGeKnotParameterization): boolean;
  static ctr1(fitPoints: OdGePoint3dArray, fitTangents: OdGeVector3dArray, fitTolerance: OdGeTol, isPeriodic: boolean): OdGeNurbCurve3d;
  static ctr2(fitPoints: OdGePoint3dArray, startTangent: OdGeVector3d, endTangent: OdGeVector3d, startTangentDefined: boolean, endTangentDefined: boolean, knotParam: OdGeKnotParameterization, fitTolerance: OdGeTol): OdGeNurbCurve3d;
  static ctr3(ellipse: OdGeEllipArc3d, numSpans: number): OdGeNurbCurve3d;
  static ctr4(lineSeg: OdGeLineSeg3d): OdGeNurbCurve3d;
};

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdGeNurbSurface.html} Additional documentation.
 */
class OdGeNurbSurface extends OdGeSurface {
  constructor();
  constructor(degreeInU: number, degreeInV: number, propsInU: number, propsInV: number, numControlPointsInU: number, numControlPointsInV: number, controlPoints: OdGePoint3dArray, weights: OdGeDoubleArray, uKnots: OdGeKnotVector, vKnots: OdGeKnotVector, tol: OdGeTol);
  constructor(source: OdGeNurbSurface);
  static convertFrom(source: OdGeSurface, domain: OdGeUvBox, tol: OdGeTol, sameParametrization: boolean): OdGeNurbSurface;
  static convertFrom1(source: OdGeSurface, tol: OdGeTol, sameParametrization: boolean): OdGeNurbSurface;
  copy(): OdGeNurbSurface;
  transformBy(xfm: OdGeMatrix3d): OdGeNurbSurface;
  translateBy(translateVec: OdGeVector3d): OdGeNurbSurface;
  rotateBy(angle: number, vect: OdGeVector3d, basePoint: OdGePoint3d): OdGeNurbSurface;
  mirror(plane: OdGePlane): OdGeNurbSurface;
  scaleBy(scaleFactor: number, basePoint: OdGePoint3d): OdGeNurbSurface;
  isRationalInU(): boolean;
  isPeriodicInU(period: number): boolean;
  isRationalInV(): boolean;
  isPeriodicInV(period: number): boolean;
  singularityInU(): number;
  singularityInV(): number;
  degreeInU(): number;
  numControlPointsInU(): number;
  degreeInV(): number;
  numControlPointsInV(): number;
  getControlPoints(controlPoints: OdGePoint3dArray): void;
  getWeights(weights: OdGeDoubleArray): boolean;
  numKnotsInU(): number;
  getUKnots(uKnots: OdGeKnotVector): void;
  numKnotsInV(): number;
  getVKnots(vKnots: OdGeKnotVector): void;
  getDefinition(degreeInU: number, degreeInV: number, propsInU: number, propsInV: number, numControlPointsInU: number, numControlPointsInV: number, controlPoints: OdGePoint3dArray, weights: OdGeDoubleArray, uKnots: OdGeKnotVector, vKnots: OdGeKnotVector): void;
  set(degreeInU: number, degreeInV: number, propsInU: number, propsInV: number, numControlPointsInU: number, numControlPointsInV: number, controlPoints: OdGePoint3dArray, weights: OdGeDoubleArray, uKnots: OdGeKnotVector, vKnots: OdGeKnotVector, tol: OdGeTol): OdGeNurbSurface;
  setFitData(fitPoints: OdGePoint3dArray, arrTangentsInU: OdGeVector3dArray, arrTangentsInV: OdGeVector3dArray, arrMixedDerivs: OdGeVector3dArray, uKnots: OdGeKnotVector, vKnots: OdGeKnotVector, tol: OdGeTol): OdGeNurbSurface;
  computeVIsoLine(V: number, isoline: OdGeNurbCurve3d): void;
  computeUIsoLine(U: number, isoline: OdGeNurbCurve3d): void;
  paramOfPrec(point: OdGePoint3d, tol: OdGeTol): OdGePoint2d;
  getDerivativesAt(param: OdGePoint2d, numDeriv: number, derivatives: any): boolean;
  loc(i: number, j: number): number;
  joinWith(surface: OdGeNurbSurface, thisConnectionSide: ConnectionSide, surfaceConnectionSide: ConnectionSide, tol: OdGeTol): OdGeNurbSurface;
  elevateDegree(iByU: boolean, iPlusDegree: number): OdGeNurbSurface;
  insertKnot(iByU: boolean, iNewKnot: number, iTimes: number): OdGeNurbSurface;
  knotAt(iByU: boolean, iKnotIndex: number): number;
  controlPointAt(iIdxU: number, iIdxV: number): OdGePoint3d;
  setControlPointAt(iIdxU: number, iIdxV: number, iPoint: OdGePoint3d): OdGeNurbSurface;
  static ctr1(cylinder: OdGeEllipCylinder): OdGeNurbSurface;
  static ctr2(cone: OdGeEllipCone): OdGeNurbSurface;
};

class VectorDerivArray extends OdArray<any> { };

enum ConnectionSide {
  kLowerU = 1,
  kUpperU = 2,
  kLowerV = 3,
  kUpperV = 4
};

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdGeOffsetCurve2d.html} Additional documentation.
 */
class OdGeOffsetCurve2d extends OdGeCurve2d {
  constructor();
  constructor(baseCurve: OdGeCurve2d, offsetDistance: number, makeCopy: boolean);
  constructor(source: OdGeOffsetCurve2d);
  copy(): OdGeOffsetCurve2d;
  transformBy(xfm: OdGeMatrix2d): OdGeOffsetCurve2d;
  translateBy(translateVec: OdGeVector2d): OdGeOffsetCurve2d;
  rotateBy(angle: number, basePoint: OdGePoint2d): OdGeOffsetCurve2d;
  mirror(line: OdGeLine2d): OdGeOffsetCurve2d;
  scaleBy(scaleFactor: number, basePoint: OdGePoint2d): OdGeOffsetCurve2d;
  curve(): OdGeCurve2d;
  offsetDistance(): number;
  paramDirection(): boolean;
  transformation(): OdGeMatrix2d;
  setCurve(baseCurve: OdGeCurve2d, makeCopy: boolean): OdGeOffsetCurve2d;
  setOffsetDistance(distance: number): OdGeOffsetCurve2d;
};

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdGeOffsetCurve3d.html} Additional documentation.
 */
class OdGeOffsetCurve3d extends OdGeCurve3d {
  constructor();
  constructor(baseCurve: OdGeCurve3d, planeNormal: OdGeVector3d, offsetDistance: number, makeCopy: boolean);
  constructor(source: OdGeOffsetCurve3d);
  copy(): OdGeOffsetCurve3d;
  transformBy(xfm: OdGeMatrix3d): OdGeOffsetCurve3d;
  translateBy(translateVec: OdGeVector3d): OdGeOffsetCurve3d;
  rotateBy(angle: number, vect: OdGeVector3d, basePoint: OdGePoint3d): OdGeOffsetCurve3d;
  mirror(plane: OdGePlane): OdGeOffsetCurve3d;
  scaleBy(scaleFactor: number, basePoint: OdGePoint3d): OdGeOffsetCurve3d;
  curve(): OdGeCurve3d;
  normal(): OdGeVector3d;
  offsetDistance(): number;
  paramDirection(): boolean;
  transformation(): OdGeMatrix3d;
  setCurve(baseCurve: OdGeCurve3d, makeCopy: boolean): OdGeOffsetCurve3d;
  setNormal(planeNormal: OdGeVector3d): OdGeOffsetCurve3d;
  setOffsetDistance(offsetDistance: number): OdGeOffsetCurve3d;
};

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdGeOffsetSurface.html} Additional documentation.
 */
class OdGeOffsetSurface extends OdGeSurface {
  constructor();
  constructor(baseSurface: OdGeSurface, offsetDistance: number, makeCopy: boolean);
  constructor(source: OdGeOffsetSurface);
  copy(): OdGeOffsetSurface;
  transformBy(xfm: OdGeMatrix3d): OdGeOffsetSurface;
  translateBy(translateVec: OdGeVector3d): OdGeOffsetSurface;
  rotateBy(angle: number, vect: OdGeVector3d, basePoint: OdGePoint3d): OdGeOffsetSurface;
  mirror(plane: OdGePlane): OdGeOffsetSurface;
  scaleBy(scaleFactor: number, basePoint: OdGePoint3d): OdGeOffsetSurface;
  isPlane(): boolean;
  isBoundedPlane(): boolean;
  isSphere(): boolean;
  isCylinder(): boolean;
  isCone(): boolean;
  isEllipCylinder(): boolean;
  isEllipCone(): boolean;
  isTorus(): boolean;
  offsetDist(): number;
  set(baseSurface: OdGeSurface, offsetDistance: number, makeCopy: boolean): OdGeOffsetSurface;
};

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdGePlanarEnt.html} Additional documentation.
 */
class OdGePlanarEnt extends OdGeSurface {
  copy(): OdGePlanarEnt;
  isOnPlane(point: OdGePoint3d, tol: OdGeTol): boolean;
  intersectWith(line: OdGeLinearEnt3d, point: OdGePoint3d, tol: OdGeTol): boolean;
  closestPointToLinearEnt(line: OdGeLinearEnt3d, pointOnLine: OdGePoint3d, tol: OdGeTol): OdGePoint3d;
  closestPointToPlanarEnt(plane: OdGePlanarEnt, pointOnOtherPlane: OdGePoint3d, tol: OdGeTol): OdGePoint3d;
  isParallelTo(line: OdGeLinearEnt3d, tol: OdGeTol): boolean;
  isParallelTo1(plane: OdGePlanarEnt, tol: OdGeTol): boolean;
  isPerpendicularTo(line: OdGeLinearEnt3d, tol: OdGeTol): boolean;
  isPerpendicularTo1(plane: OdGePlanarEnt, tol: OdGeTol): boolean;
  isCoplanarTo(plane: OdGePlanarEnt, tol: OdGeTol): boolean;
  get(origin: OdGePoint3d, uAxis: OdGeVector3d, vAxis: OdGeVector3d): void;
  get1(uPnt: OdGePoint3d, origin: OdGePoint3d, vPnt: OdGePoint3d): void;
  pointOnPlane(): OdGePoint3d;
  normal(): OdGeVector3d;
  getCoefficients(a: number, b: number, c: number, d: number): void;
  getCoordSystem(origin: OdGePoint3d, axis1: OdGeVector3d, axis2: OdGeVector3d): void;
  project(p: OdGePoint3d, unitDir: OdGeVector3d, projP: OdGePoint3d, tol: OdGeTol): boolean;
};

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdGePlane.html} Additional documentation.
 */
class OdGePlane extends OdGePlanarEnt {
  constructor();
  constructor(plane: OdGePlane);
  constructor(origin: OdGePoint3d, normal: OdGeVector3d);
  constructor(uPnt: OdGePoint3d, origin: OdGePoint3d, vPnt: OdGePoint3d);
  constructor(a: number, b: number, c: number, d: number);
  copy(): OdGePlane;
  transformBy(xfm: OdGeMatrix3d): OdGePlane;
  translateBy(translateVec: OdGeVector3d): OdGePlane;
  rotateBy(angle: number, vect: OdGeVector3d, basePoint: OdGePoint3d): OdGePlane;
  mirror(plane: OdGePlane): OdGePlane;
  scaleBy(scaleFactor: number, basePoint: OdGePoint3d): OdGePlane;
  intersectWith(plane: OdGePlane, intLine: OdGeLine3d, tol: OdGeTol): boolean;
  intersectWith1(plane: OdGeBoundedPlane, intLine: OdGeLineSeg3d, tol: OdGeTol): boolean;
  signedDistanceTo(point: OdGePoint3d): number;
  set(point: OdGePoint3d, normal: OdGeVector3d): OdGePlane;
  set1(uPnt: OdGePoint3d, origin: OdGePoint3d, vPnt: OdGePoint3d): OdGePlane;
  set2(a: number, b: number, c: number, d: number): OdGePlane;
  set3(origin: OdGePoint3d, uAxis: OdGeVector3d, vAxis: OdGeVector3d): OdGePlane;
  static ctr1(origin: OdGePoint3d, uAxis: OdGeVector3d, vAxis: OdGeVector3d): OdGePlane;
};

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdGePoint2d.html} Additional documentation.
 */
class OdGePoint2d {
  constructor();
  constructor(xx: number, yy: number);
  constructor(arg0: OdGePoint2d);
  setToProduct(matrix: OdGeMatrix2d, point: OdGePoint2d): OdGePoint2d;
  transformBy(xfm: OdGeMatrix2d): OdGePoint2d;
  rotateBy(angle: number, basePoint: OdGePoint2d): OdGePoint2d;
  mirror(line: OdGeLine2d): OdGePoint2d;
  scaleBy(scaleFactor: number, basePoint: OdGePoint2d): OdGePoint2d;
  setToSum(point: OdGePoint2d, vect: OdGeVector2d): OdGePoint2d;
  asVector(): OdGeVector2d;
  asVector1(): OdGeVector2d;
  distanceTo(point: OdGePoint2d): number;
  distanceSqrdTo(point: OdGePoint2d): number;
  isEqualTo(point: OdGePoint2d, tol: OdGeTol): boolean;
  set(xx: number, yy: number): OdGePoint2d;
  static ctr1(arg0: OdGePoint2d): OdGePoint2d;
  x: number;
  y: number;
};

class OdGePoint2dArray extends OdArray<OdGePoint2d> { };

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdGePoint3d.html} Additional documentation.
 */
class OdGePoint3d {
  constructor();
  constructor(xx: number, yy: number, zz: number);
  constructor(plane: OdGePlanarEnt, pnt2d: OdGePoint2d);
  constructor(arg0: OdGePoint3d);
  setToProduct(xfm: OdGeMatrix3d, point: OdGePoint3d): OdGePoint3d;
  transformBy(xfm: OdGeMatrix3d): OdGePoint3d;
  transformBy1(xfm: OdGeMatrix3d, status: ErrorCondition): OdGePoint3d;
  rotateBy(angle: number, vect: OdGeVector3d, basePoint: OdGePoint3d): OdGePoint3d;
  mirror(plane: OdGePlane): OdGePoint3d;
  scaleBy(scaleFactor: number, basePoint: OdGePoint3d): OdGePoint3d;
  convert2d(plane: OdGePlanarEnt): OdGePoint2d;
  convert2d1(): OdGePoint2d;
  setToSum(point: OdGePoint3d, vect: OdGeVector3d): OdGePoint3d;
  asVector(): OdGeVector3d;
  asVector1(): OdGeVector3d;
  distanceTo(point: OdGePoint3d): number;
  distanceSqrdTo(point: OdGePoint3d): number;
  project(plane: OdGePlanarEnt, vect: OdGeVector3d): OdGePoint3d;
  orthoProject(plane: OdGePlane): OdGePoint3d;
  isEqualTo(point: OdGePoint3d, tol: OdGeTol): boolean;
  set(xx: number, yy: number, zz: number): OdGePoint3d;
  set1(xy: OdGePoint2d, zz: number): OdGePoint3d;
  set2(plane: OdGePlanarEnt, point: OdGePoint2d): OdGePoint3d;
  swapWithPoint(point: OdGePoint3d): OdGePoint3d;
  static ctr1(arg0: OdGePoint3d): OdGePoint3d;
  x: number;
  y: number;
  z: number;
};

class OdGePoint3dArray extends OdArray<OdGePoint3d> { };

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdGePointEnt3d.html} Additional documentation.
 */
class OdGePointEnt3d extends OdGeEntity3d {
  copy(): OdGePointEnt3d;
  point3d(): OdGePoint3d;
};

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdGePointOnCurve2d.html} Additional documentation.
 */
class OdGePointOnCurve2d extends OdGePointEnt2d {
  constructor();
  constructor(curve2d: OdGeCurve2d, param: number);
  constructor(source: OdGePointOnCurve2d);
  copy(): OdGePointOnCurve2d;
  transformBy(xfm: OdGeMatrix2d): OdGePointOnCurve2d;
  translateBy(translateVec: OdGeVector2d): OdGePointOnCurve2d;
  rotateBy(angle: number, basePoint: OdGePoint2d): OdGePointOnCurve2d;
  mirror(line: OdGeLine2d): OdGePointOnCurve2d;
  scaleBy(scaleFactor: number, basePoint: OdGePoint2d): OdGePointOnCurve2d;
  curve(): OdGeCurve2d;
  parameter(): number;
  point(): OdGePoint2d;
  point1(param: number): OdGePoint2d;
  point2(curve2d: OdGeCurve2d, param: number): OdGePoint2d;
  deriv(order: number): OdGeVector2d;
  deriv1(order: number, param: number): OdGeVector2d;
  deriv2(order: number, curve2d: OdGeCurve2d, param: number): OdGeVector2d;
  isSingular(tol: OdGeTol): boolean;
  curvature(res: number): boolean;
  curvature1(param: number, res: number): boolean;
  setCurve(curve2d: OdGeCurve2d): OdGePointOnCurve2d;
  setParameter(param: number): OdGePointOnCurve2d;
};

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdGePointOnCurve3d.html} Additional documentation.
 */
class OdGePointOnCurve3d extends OdGePointEnt3d {
  constructor();
  constructor(curve3d: OdGeCurve3d);
  constructor(curve3d: OdGeCurve3d, param: number);
  copy(): OdGePointOnCurve3d;
  transformBy(xfm: OdGeMatrix3d): OdGePointOnCurve3d;
  translateBy(translateVec: OdGeVector3d): OdGePointOnCurve3d;
  rotateBy(angle: number, vect: OdGeVector3d, basePoint: OdGePoint3d): OdGePointOnCurve3d;
  mirror(plane: OdGePlane): OdGePointOnCurve3d;
  scaleBy(scaleFactor: number, basePoint: OdGePoint3d): OdGePointOnCurve3d;
  curve(): OdGeCurve3d;
  parameter(): number;
  point(): OdGePoint3d;
  point1(param: number): OdGePoint3d;
  point2(curve3d: OdGeCurve3d, param: number): OdGePoint3d;
  deriv(order: number): OdGeVector3d;
  deriv1(order: number, param: number): OdGeVector3d;
  deriv2(order: number, curve3d: OdGeCurve3d, param: number): OdGeVector3d;
  isSingular(tol: OdGeTol): boolean;
  curvature(res: number): boolean;
  curvature1(param: number, res: number): boolean;
  setCurve(curve3d: OdGeCurve3d): OdGePointOnCurve3d;
  setParameter(param: number): OdGePointOnCurve3d;
  static ctr1(src: OdGePointOnCurve3d): OdGePointOnCurve3d;
};

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdGePointOnSurface.html} Additional documentation.
 */
class OdGePointOnSurface extends OdGePointEnt3d {
  constructor();
  constructor(source: OdGePointOnSurface);
  constructor(surface: OdGeSurface, param: OdGePoint2d);
  copy(): OdGePointOnSurface;
  transformBy(xfm: OdGeMatrix3d): OdGePointOnSurface;
  translateBy(translateVec: OdGeVector3d): OdGePointOnSurface;
  rotateBy(angle: number, vect: OdGeVector3d, basePoint: OdGePoint3d): OdGePointOnSurface;
  mirror(plane: OdGePlane): OdGePointOnSurface;
  scaleBy(scaleFactor: number, basePoint: OdGePoint3d): OdGePointOnSurface;
  surface(): OdGeSurface;
  parameter(): OdGePoint2d;
  point(): OdGePoint3d;
  point1(param: OdGePoint2d): OdGePoint3d;
  point2(surface: OdGeSurface, param: OdGePoint2d): OdGePoint3d;
  normal(): OdGeVector3d;
  normal1(param: OdGePoint2d): OdGeVector3d;
  normal2(surface: OdGeSurface, param: OdGePoint2d): OdGeVector3d;
  uDeriv(order: number): OdGeVector3d;
  uDeriv1(order: number, param: OdGePoint2d): OdGeVector3d;
  uDeriv2(order: number, surface: OdGeSurface, param: OdGePoint2d): OdGeVector3d;
  vDeriv(order: number): OdGeVector3d;
  vDeriv1(order: number, param: OdGePoint2d): OdGeVector3d;
  vDeriv2(order: number, surface: OdGeSurface, param: OdGePoint2d): OdGeVector3d;
  mixedPartial(): OdGeVector3d;
  mixedPartial1(param: OdGePoint2d): OdGeVector3d;
  mixedPartial2(surface: OdGeSurface, param: OdGePoint2d): OdGeVector3d;
  tangentVector(vect: OdGeVector2d): OdGeVector3d;
  tangentVector1(vect: OdGeVector2d, param: OdGePoint2d): OdGeVector3d;
  tangentVector2(vect: OdGeVector2d, surface: OdGeSurface, param: OdGePoint2d): OdGeVector3d;
  inverseTangentVector(vect: OdGeVector3d): OdGeVector2d;
  inverseTangentVector1(vect: OdGeVector3d, param: OdGePoint2d): OdGeVector2d;
  inverseTangentVector2(vect: OdGeVector3d, surface: OdGeSurface, param: OdGePoint2d): OdGeVector2d;
  setSurface(surface: OdGeSurface): OdGePointOnSurface;
  setParameter(param: OdGePoint2d): OdGePointOnSurface;
  static ctr1(surface: OdGeSurface): OdGePointOnSurface;
};

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdGePolyline2d.html} Additional documentation.
 */
class OdGePolyline2d extends OdGeSplineEnt2d {
  constructor();
  constructor(source: OdGePolyline2d);
  constructor(knots: OdGeKnotVector, points: OdGePoint2dArray);
  copy(): OdGePolyline2d;
  transformBy(xfm: OdGeMatrix2d): OdGePolyline2d;
  translateBy(translateVec: OdGeVector2d): OdGePolyline2d;
  rotateBy(angle: number, basePoint: OdGePoint2d): OdGePolyline2d;
  mirror(line: OdGeLine2d): OdGePolyline2d;
  scaleBy(scaleFactor: number, basePoint: OdGePoint2d): OdGePolyline2d;
  numFitPoints(): number;
  fitPointAt(fitPointIndex: number): OdGePoint2d;
  static ctr1(fitpoints: OdGePoint2dArray): OdGePolyline2d;
  static ctr2(crv: OdGeCurve2d, approxEps: number): OdGePolyline2d;
};

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdGePolyline3d.html} Additional documentation.
 */
class OdGePolyline3d extends OdGeSplineEnt3d {
  constructor();
  constructor(source: OdGePolyline3d);
  constructor(knots: OdGeKnotVector, controlPoints: OdGePoint3dArray);
  copy(): OdGePolyline3d;
  transformBy(xfm: OdGeMatrix3d): OdGePolyline3d;
  translateBy(translateVec: OdGeVector3d): OdGePolyline3d;
  rotateBy(angle: number, vect: OdGeVector3d, basePoint: OdGePoint3d): OdGePolyline3d;
  mirror(plane: OdGePlane): OdGePolyline3d;
  scaleBy(scaleFactor: number, basePoint: OdGePoint3d): OdGePolyline3d;
  numFitPoints(): number;
  fitPointAt(fitPointIndex: number): OdGePoint3d;
  evalPointSeg(param: number, numSeg: number): OdGePoint3d;
  static ctr1(points: OdGePoint3dArray): OdGePolyline3d;
  static ctr2(crv: OdGeCurve3d, approxEps: number): OdGePolyline3d;
  static ctr3(numPoints: number, pPoints: OdGePoint3d): OdGePolyline3d;
};

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdGePosition2d.html} Additional documentation.
 */
class OdGePosition2d extends OdGePointEnt2d {
  constructor();
  constructor(point: OdGePoint2d);
  constructor(x: number, y: number);
  copy(): OdGePosition2d;
  transformBy(xfm: OdGeMatrix2d): OdGePosition2d;
  translateBy(translateVec: OdGeVector2d): OdGePosition2d;
  rotateBy(angle: number, basePoint: OdGePoint2d): OdGePosition2d;
  mirror(line: OdGeLine2d): OdGePosition2d;
  scaleBy(scaleFactor: number, basePoint: OdGePoint2d): OdGePosition2d;
  set(point: OdGePoint2d): OdGePosition2d;
  set1(x: number, y: number): OdGePosition2d;
  static ctr1(source: OdGePosition2d): OdGePosition2d;
};

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdGePosition3d.html} Additional documentation.
 */
class OdGePosition3d extends OdGePointEnt3d {
  constructor();
  constructor(point: OdGePoint3d);
  constructor(x: number, y: number, z: number);
  copy(): OdGePosition3d;
  transformBy(xfm: OdGeMatrix3d): OdGePosition3d;
  translateBy(translateVec: OdGeVector3d): OdGePosition3d;
  rotateBy(angle: number, vect: OdGeVector3d, basePoint: OdGePoint3d): OdGePosition3d;
  mirror(plane: OdGePlane): OdGePosition3d;
  scaleBy(scaleFactor: number, basePoint: OdGePoint3d): OdGePosition3d;
  set(point: OdGePoint3d): OdGePosition3d;
  set1(x: number, y: number, z: number): OdGePosition3d;
  static ctr1(source: OdGePosition3d): OdGePosition3d;
};

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdGeQuaternion.html} Additional documentation.
 */
class OdGeQuaternion {
  constructor();
  constructor(ww: number, xx: number, yy: number, zz: number);
  constructor(arg0: OdGeQuaternion);
  set(ww: number, xx: number, yy: number, zz: number): OdGeQuaternion;
  set1(matrix: OdGeMatrix3d): OdGeQuaternion;
  getMatrix(): OdGeMatrix3d;
  rotate(sourcePoint: OdGePoint3d): OdGePoint3d;
  rotate1(vector: OdGeVector3d): OdGeVector3d;
  rotateOpposite(sourcePoint: OdGePoint3d): OdGePoint3d;
  rotateOpposite1(vector: OdGeVector3d): OdGeVector3d;
  isEqualTo(quat: OdGeQuaternion, tol: OdGeTol): boolean;
  normSqrd(): number;
  norm(): number;
  normalize(tol: OdGeTol): OdGeQuaternion;
  dotProduct(quat: OdGeQuaternion): number;
  slerp(q: OdGeQuaternion, t: number, bUseShortestPath: boolean): OdGeQuaternion;
  static ctr1(arg0: OdGeQuaternion): OdGeQuaternion;
  w: number;
  x: number;
  y: number;
  z: number;
};

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdGeRay2d.html} Additional documentation.
 */
class OdGeRay2d extends OdGeLinearEnt2d {
  constructor();
  constructor(ray: OdGeRay2d);
  constructor(point: OdGePoint2d, vect: OdGeVector2d);
  copy(): OdGeRay2d;
  transformBy(xfm: OdGeMatrix2d): OdGeRay2d;
  translateBy(translateVec: OdGeVector2d): OdGeRay2d;
  rotateBy(angle: number, basePoint: OdGePoint2d): OdGeRay2d;
  mirror(line: OdGeLine2d): OdGeRay2d;
  scaleBy(scaleFactor: number, basePoint: OdGePoint2d): OdGeRay2d;
  set(point: OdGePoint2d, vect: OdGeVector2d): OdGeRay2d;
  set1(point1: OdGePoint2d, point2: OdGePoint2d): OdGeRay2d;
  static ctr1(point1: OdGePoint2d, point2: OdGePoint2d): OdGeRay2d;
};

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdGeRay3d.html} Additional documentation.
 */
class OdGeRay3d extends OdGeLinearEnt3d {
  constructor();
  constructor(line: OdGeRay3d);
  constructor(point: OdGePoint3d, vect: OdGeVector3d);
  copy(): OdGeRay3d;
  transformBy(xfm: OdGeMatrix3d): OdGeRay3d;
  translateBy(translateVec: OdGeVector3d): OdGeRay3d;
  rotateBy(angle: number, vect: OdGeVector3d, basePoint: OdGePoint3d): OdGeRay3d;
  mirror(plane: OdGePlane): OdGeRay3d;
  scaleBy(scaleFactor: number, basePoint: OdGePoint3d): OdGeRay3d;
  set(point: OdGePoint3d, vect: OdGeVector3d): OdGeRay3d;
  set1(point1: OdGePoint3d, point2: OdGePoint3d): OdGeRay3d;
  static ctr1(point1: OdGePoint3d, point2: OdGePoint3d): OdGeRay3d;
};

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdGeRevolvedSurface.html} Additional documentation.
 */
class OdGeRevolvedSurface extends OdGeSurface {
  constructor();
  constructor(pProfile: OdGeCurve3d, pBase: OdGePoint3d, pAxis: OdGeVector3d, pRef: OdGeVector3d, startAngle: number, endAngle: number);
  constructor(revolvedSurf: OdGeRevolvedSurface);
  copy(): OdGeRevolvedSurface;
  transformBy(xfm: OdGeMatrix3d): OdGeRevolvedSurface;
  translateBy(translateVec: OdGeVector3d): OdGeRevolvedSurface;
  rotateBy(angle: number, vect: OdGeVector3d, basePoint: OdGePoint3d): OdGeRevolvedSurface;
  mirror(plane: OdGePlane): OdGeRevolvedSurface;
  scaleBy(scaleFactor: number, basePoint: OdGePoint3d): OdGeRevolvedSurface;
  getBasePoint(): OdGePoint3d;
  getAxis(): OdGeVector3d;
  getRef(): OdGeVector3d;
  getAngles(startAngle: number, endAngle: number): void;
  setAngles(startAngle: number, endAngle: number): OdGeRevolvedSurface;
  setRef(pRef: OdGeVector3d): OdGeRevolvedSurface;
  set(pProfile: OdGeCurve3d, pBase: OdGePoint3d, pAxis: OdGeVector3d, pRef: OdGeVector3d): void;
};

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdGeRuled.html} Additional documentation.
 */
class OdGeRuled extends OdGeSurface {
  constructor();
  constructor(pProfileCurve1: OdGeCurve3d, pProfileCurve2: OdGeCurve3d);
  constructor(ruled: OdGeRuled);
  copy(): OdGeRuled;
  transformBy(xfm: OdGeMatrix3d): OdGeRuled;
  translateBy(translateVec: OdGeVector3d): OdGeRuled;
  rotateBy(angle: number, vect: OdGeVector3d, basePoint: OdGePoint3d): OdGeRuled;
  mirror(plane: OdGePlane): OdGeRuled;
  scaleBy(scaleFactor: number, basePoint: OdGePoint3d): OdGeRuled;
  set(pProfileCurve1: OdGeCurve3d, pProfileCurve2: OdGeCurve3d): void;
  set1(pProfileCurve1: OdGeCurve3d, pPoint2: OdGePoint3d): void;
  set2(pPoint1: OdGePoint3d, pProfileCurve2: OdGeCurve3d): void;
  getPoint(iIndex: number, point: OdGePoint3d): OdResult;
  setEnvelope(intrvlU: OdGeInterval, intrvlV: OdGeInterval): boolean;
  getEnvelope(intrvlU: OdGeInterval, intrvlV: OdGeInterval): void;
  hasFirstProfilePoint(): boolean;
  hasSecondProfilePoint(): boolean;
  static ctr1(pProfileCurve1: OdGeCurve3d, pPoint2: OdGePoint3d): OdGeRuled;
  static ctr2(pPoint1: OdGePoint3d, pProfileCurve2: OdGeCurve3d): OdGeRuled;
};

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdGeScale3d.html} Additional documentation.
 */
class OdGeScale3d {
  constructor();
  constructor(factor: number);
  constructor(xFactor: number, yFactor: number, zFactor: number);
  preMultBy(leftSide: OdGeScale3d): OdGeScale3d;
  postMultBy(rightSide: OdGeScale3d): OdGeScale3d;
  setToProduct(scaleVec1: OdGeScale3d, scaleVec2: OdGeScale3d): OdGeScale3d;
  setToProduct1(scaleVec: OdGeScale3d, factor: number): OdGeScale3d;
  inverse(): OdGeScale3d;
  invert(): OdGeScale3d;
  isProportional(tol: OdGeTol): boolean;
  isEqualTo(scaleVec: OdGeScale3d, tol: OdGeTol): boolean;
  set(xFactor: number, yFactor: number, zFactor: number): OdGeScale3d;
  getMatrix(xfm: OdGeMatrix3d): void;
  extractScale(xfm: OdGeMatrix3d): OdGeScale3d;
  removeScale(xfm: OdGeMatrix3d, negateX: boolean): OdGeScale3d;
  isValid(): boolean;
  static ctr1(arg0: OdGeScale3d): OdGeScale3d;
  static ctr2(arg0: OdGeScale3d): OdGeScale3d;
  sx: number;
  sy: number;
  sz: number;
};

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdGeSegmentChain2d.html} Additional documentation.
 */
class OdGeSegmentChain2d extends OdGeSplineEnt2d {
  constructor();
  constructor(source: OdGeSegmentChain2d);
  constructor(knots: OdGeKnotVector, points: OdGePoint2dArray);
  copy(): OdGeSegmentChain2d;
  transformBy(xfm: OdGeMatrix2d): OdGeSegmentChain2d;
  translateBy(translateVec: OdGeVector2d): OdGeSegmentChain2d;
  rotateBy(angle: number, basePoint: OdGePoint2d): OdGeSegmentChain2d;
  mirror(line: OdGeLine2d): OdGeSegmentChain2d;
  scaleBy(scaleFactor: number, basePoint: OdGePoint2d): OdGeSegmentChain2d;
  setClosed(flag: boolean): OdGeSegmentChain2d;
  bulges(): number;
  getBulges(): number;
  vertices(): OdGePoint2dArray;
  getVertices(): OdGePoint2dArray;
  hasBulges(): boolean;
  appendSamplePointsOptimal(numSampleForEachArc: number, pointArray: OdGePoint2dArray): void;
  static ctr1(fitpoints: OdGePoint2dArray): OdGeSegmentChain2d;
  static ctr2(crv: OdGeCurve2d, approxEps: number): OdGeSegmentChain2d;
};

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdGeShell.html} Additional documentation.
 */
class OdGeShell {
  constructor();
  constructor(arg0: OdGeShell);
  addVertex(vertex: OdGePoint3d): void;
  endFace(): void;
  startFace(bHole: boolean): void;
  addFaceVertex(nVertexIndex: number): void;
  draw(geometry: OdGiGeometry): void;
  static ctr1(arg0: OdGeShell): OdGeShell;
  vertices: OdGePoint3dArray;
  faces: OdInt32Array;
  edgeColors: OdUInt16Array;
  edgeTrueColors: OdCmEntityColorArray;
  edgeLayers: OdDbStubPtrArray;
  edgeLinetypes: OdDbStubPtrArray;
  edgeSelectionMarkers: OdGsMarkerArray;
  edgeVisibilities: OdUInt8Array;
  faceColors: OdUInt16Array;
  faceTrueColors: OdCmEntityColorArray;
  faceLayers: OdDbStubPtrArray;
  faceNormals: OdGeVector3dArray;
  faceSelectionMarkers: OdGsMarkerArray;
  faceVisibilities: OdUInt8Array;
  faceMaterials: OdDbStubPtrArray;
  faceMappers: any;
  faceTransparencies: OdCmTransparencyArray;
  textureCoords: OdGePoint3dArray;
  vertexNormals: OdGeVector3dArray;
};

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdGeSphere.html} Additional documentation.
 */
class OdGeSphere extends OdGeSurface {
  constructor();
  constructor(radius: number, center: OdGePoint3d);
  constructor(radius: number, center: OdGePoint3d, northAxis: OdGeVector3d, refAxis: OdGeVector3d, startAngleU: number, endAngleU: number, startAngleV: number, endAngleV: number);
  constructor(sphere: OdGeSphere);
  copy(): OdGeSphere;
  transformBy(xfm: OdGeMatrix3d): OdGeSphere;
  translateBy(translateVec: OdGeVector3d): OdGeSphere;
  rotateBy(angle: number, vect: OdGeVector3d, basePoint: OdGePoint3d): OdGeSphere;
  mirror(plane: OdGePlane): OdGeSphere;
  scaleBy(scaleFactor: number, basePoint: OdGePoint3d): OdGeSphere;
  radius(): number;
  center(): OdGePoint3d;
  getAnglesInU(startAngleU: number, endAngleU: number): void;
  getAnglesInV(startAngleV: number, endAngleV: number): void;
  northAxis(): OdGeVector3d;
  refAxis(): OdGeVector3d;
  northPole(): OdGePoint3d;
  southPole(): OdGePoint3d;
  isOuterNormal(): boolean;
  isClosed(tol: OdGeTol): boolean;
  setRadius(radius: number): OdGeSphere;
  setAnglesInU(startAngleU: number, endAngleU: number): OdGeSphere;
  setAnglesInV(startAngleV: number, endAngleV: number): OdGeSphere;
  set(radius: number, center: OdGePoint3d): OdGeSphere;
  set1(radius: number, center: OdGePoint3d, northAxis: OdGeVector3d, refAxis: OdGeVector3d, startAngleU: number, endAngleU: number, startAngleV: number, endAngleV: number): OdGeSphere;
  intersectWith(lineEnt: OdGeLinearEnt3d, numInt: number, p1: OdGePoint3d, p2: OdGePoint3d, tol: OdGeTol): boolean;
  isReverseV(): boolean;
  setReverseV(isReverseV: boolean): void;
};

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdGeSplineEnt2d.html} Additional documentation.
 */
class OdGeSplineEnt2d extends OdGeCurve2d {
  copy(): OdGeSplineEnt2d;
  isRational(): boolean;
  degree(): number;
  order(): number;
  numKnots(): number;
  knots(): OdGeKnotVector;
  numControlPoints(): number;
  continuityAtKnot(knotIndex: number, tol: OdGeTol): number;
  startParam(): number;
  endParam(): number;
  startPoint(): OdGePoint2d;
  endPoint(): OdGePoint2d;
  hasFitData(): boolean;
  knotAt(knotIndex: number): number;
  controlPointAt(controlPointIndex: number): OdGePoint2d;
};

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdGeSplineEnt3d.html} Additional documentation.
 */
class OdGeSplineEnt3d extends OdGeCurve3d {
  copy(): OdGeSplineEnt3d;
  isRational(): boolean;
  degree(): number;
  order(): number;
  numKnots(): number;
  knots(): OdGeKnotVector;
  numControlPoints(): number;
  continuityAtKnot(index: number, tol: OdGeTol): number;
  startParam(): number;
  endParam(): number;
  startPoint(): OdGePoint3d;
  endPoint(): OdGePoint3d;
  hasFitData(): boolean;
  knotAt(knotIndex: number): number;
  controlPointAt(controlPointIndex: number): OdGePoint3d;
};

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdGeSpunSurf.html} Additional documentation.
 */
class OdGeSpunSurf extends OdGeSurface {
  constructor();
  constructor(pProfile: OdGeCurve3d, pBase: OdGePoint3d, pAxis: OdGeVector3d);
  constructor(spunSurf: OdGeSpunSurf);
  copy(): OdGeSpunSurf;
  transformBy(xfm: OdGeMatrix3d): OdGeSpunSurf;
  translateBy(translateVec: OdGeVector3d): OdGeSpunSurf;
  rotateBy(angle: number, vect: OdGeVector3d, basePoint: OdGePoint3d): OdGeSpunSurf;
  mirror(plane: OdGePlane): OdGeSpunSurf;
  scaleBy(scaleFactor: number, basePoint: OdGePoint3d): OdGeSpunSurf;
  getProfile(): OdGeCurve3d;
  getBasePoint(): OdGePoint3d;
  getAxis(): OdGeVector3d;
  getRef(): OdGeVector3d;
  setAngles(startAngle: number, endAngle: number): OdGeSpunSurf;
  setRef(pRef: OdGeVector3d): OdGeSpunSurf;
  set(pProfile: OdGeCurve3d, pBase: OdGePoint3d, pAxis: OdGeVector3d): void;
};

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdGeSurfSurfInt.html} Additional documentation.
 */
class OdGeSurfSurfInt extends OdGeEntity3d {
  constructor();
  constructor(srf1: OdGeSurface, srf2: OdGeSurface, tol: OdGeTol);
  constructor(source: OdGeSurfSurfInt);
  copy(): OdGeSurfSurfInt;
  transformBy(xfm: OdGeMatrix3d): OdGeSurfSurfInt;
  translateBy(translateVec: OdGeVector3d): OdGeSurfSurfInt;
  rotateBy(angle: number, vect: OdGeVector3d, basePoint: OdGePoint3d): OdGeSurfSurfInt;
  mirror(plane: OdGePlane): OdGeSurfSurfInt;
  scaleBy(scaleFactor: number, basePoint: OdGePoint3d): OdGeSurfSurfInt;
  surface1(): OdGeSurface;
  surface2(): OdGeSurface;
  tolerance(): OdGeTol;
  numResults(status: OdGeIntersectError): number;
  numIntPoints(status: OdGeIntersectError): number;
  intCurve(intNum: number, isExternal: boolean, status: OdGeIntersectError): OdGeCurve3d;
  intParamCurve(intNum: number, isExternal: boolean, isFirst: boolean, status: OdGeIntersectError): OdGeCurve2d;
  intPoint(intNum: number, status: OdGeIntersectError): OdGePoint3d;
  getIntPointParams(intNum: number, param1: OdGePoint2d, param2: OdGePoint2d, status: OdGeIntersectError): void;
  getIntConfigs(intNum: number, surf1Left: ssiConfig, surf1Right: ssiConfig, surf2Left: ssiConfig, surf2Right: ssiConfig, intType: ssiType, dim: number, status: OdGeIntersectError): void;
  numIntCurves(status: OdGeIntersectError): number;
  getDimension(intNum: number, status: OdGeIntersectError): number;
  getType(intNum: number, status: OdGeIntersectError): ssiType;
  haveOverlap(status: OdGeIntersectError): boolean;
  set(srf1: OdGeSurface, srf2: OdGeSurface, tol: OdGeTol): OdGeSurfSurfInt;
};

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdGeSurface.html} Additional documentation.
 */
class OdGeSurface extends OdGeEntity3d {
  copy(): OdGeSurface;
  paramOf(point: OdGePoint3d, tol: OdGeTol): OdGePoint2d;
  paramOf1(point: OdGePoint3d, uvBox: OdGeUvBox, tol: OdGeTol): OdGePoint2d;
  isOn(point: OdGePoint3d, paramPoint: OdGePoint2d, tol: OdGeTol): boolean;
  closestPointTo(point: OdGePoint3d, tol: OdGeTol): OdGePoint3d;
  closestPointTo1(point: OdGePoint3d, param: OdGePoint2d, uvBox: OdGeUvBox, tol: OdGeTol): OdGePoint3d;
  getClosestPointTo(point: OdGePoint3d, pntOnSurface: OdGePointOnSurface, tol: OdGeTol): void;
  distanceTo(point: OdGePoint3d, tol: OdGeTol): number;
  isNormalReversed(): boolean;
  isLeftHanded(): boolean;
  getEnvelope(intrvlU: OdGeInterval, intrvlV: OdGeInterval): void;
  getEnvelope1(uvbox: OdGeUvBox): void;
  isClosedInU(tol: OdGeTol): boolean;
  isClosedInV(tol: OdGeTol): boolean;
  evalPoint(param: OdGePoint2d): OdGePoint3d;
  evalPoint1(param: OdGePoint2d, numDeriv: number, derivatives: OdGeVector3dArray): OdGePoint3d;
  evalPoint2(param: OdGePoint2d, numDeriv: number, derivatives: OdGeVector3dArray, normal: OdGeVector3d): OdGePoint3d;
  getGeomExtents(range: OdGeUvBox, coordSystem: OdGeMatrix3d): OdGeExtents3d;
  project(p: OdGePoint3d, projP: OdGePoint3d, tol: OdGeTol): boolean;
  setEnvelope(realIntrvlU: OdGeInterval, realIntrvlV: OdGeInterval): boolean;
  makeIsoparamCurve(byU: boolean, param: number): OdGeCurve3d;
  makeIsoparamCurve1(byU: boolean, param: number, interval: OdGeInterval): OdGeCurve3d;
  getPoles(uParams: OdGeDoubleArray, vParams: OdGeDoubleArray, uPoints: OdGePoint3dArray, vPoints: OdGePoint3dArray, tol: number): boolean;
};

enum OwnershipFlag {
  kCurveCopy = 1,
  kCurveOwn = 2,
  kCurveReference = 3,
  kSurfaceCopy = 4,
  kSurfaceOwn = 8,
  kSurfaceReference = 12,
  kCopy = 5,
  kOwn = 10,
  kReference = 15,
  kCurveMask = 3,
  kSurfaceMask = 12
};

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdGeSurfaceCurve2dTo3d.html} Additional documentation.
 */
class OdGeSurfaceCurve2dTo3d extends OdGeCurve3d {
  constructor();
  constructor(source: OdGeSurfaceCurve2dTo3d);
  constructor(uvc: OdGeCurve2d, surf: OdGeSurface);
  constructor(pUvCurve: OdGeCurve2d, pSurface: OdGeSurface, ownership: OwnershipFlag);
  copy(): OdGeSurfaceCurve2dTo3d;
  transformBy(xfm: OdGeMatrix3d): OdGeSurfaceCurve2dTo3d;
  translateBy(translateVec: OdGeVector3d): OdGeSurfaceCurve2dTo3d;
  rotateBy(angle: number, vect: OdGeVector3d, basePoint: OdGePoint3d): OdGeSurfaceCurve2dTo3d;
  mirror(plane: OdGePlane): OdGeSurfaceCurve2dTo3d;
  scaleBy(scaleFactor: number, basePoint: OdGePoint3d): OdGeSurfaceCurve2dTo3d;
  curve(): OdGeCurve2d;
  surface(): OdGeSurface;
  getGeomExtents(extents: OdGeExtents3d): void;
};

class OdGeSurfacePtrArray extends OdArray<OdGeSurface> { };

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdGeTol.html} Additional documentation.
 */
class OdGeTol {
  constructor(t: number);
  constructor(t1: number, t2: number);
  equalPoint(): number;
  equalVector(): number;
  setEqualPoint(val: number): void;
  setEqualVector(val: number): void;
  static ctr1(arg0: OdGeTol): OdGeTol;
  static ctr2(arg0: OdGeTol): OdGeTol;
};

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdGeTorus.html} Additional documentation.
 */
class OdGeTorus extends OdGeSurface {
  constructor();
  constructor(majorRadius: number, minorRadius: number, center: OdGePoint3d, axisOfSymmetry: OdGeVector3d);
  constructor(majorRadius: number, minorRadius: number, center: OdGePoint3d, axisOfSymmetry: OdGeVector3d, refAxis: OdGeVector3d, startAngleU: number, endAngleU: number, startAngleV: number, endAngleV: number);
  constructor(source: OdGeTorus);
  copy(): OdGeTorus;
  transformBy(xfm: OdGeMatrix3d): OdGeTorus;
  translateBy(translateVec: OdGeVector3d): OdGeTorus;
  rotateBy(angle: number, vect: OdGeVector3d, basePoint: OdGePoint3d): OdGeTorus;
  mirror(plane: OdGePlane): OdGeTorus;
  scaleBy(scaleFactor: number, basePoint: OdGePoint3d): OdGeTorus;
  majorRadius(): number;
  minorRadius(): number;
  getAnglesInU(startAngleU: number, endAngleU: number): void;
  getAnglesInV(startAngleV: number, endAngleV: number): void;
  center(): OdGePoint3d;
  axisOfSymmetry(): OdGeVector3d;
  refAxis(): OdGeVector3d;
  isOuterNormal(): boolean;
  setMajorRadius(radius: number): OdGeTorus;
  setMinorRadius(radius: number): OdGeTorus;
  setAnglesInU(startAngleU: number, endAngleU: number): OdGeTorus;
  setAnglesInV(startAngleV: number, endAngleV: number): OdGeTorus;
  set(majorRadius: number, minorRadius: number, center: OdGePoint3d, axisOfSymmetry: OdGeVector3d): OdGeTorus;
  set1(majorRadius: number, minorRadius: number, center: OdGePoint3d, axisOfSymmetry: OdGeVector3d, refAxis: OdGeVector3d, startAngleU: number, endAngleU: number, startAngleV: number, endAngleV: number): OdGeTorus;
  intersectWith(linEnt: OdGeLinearEnt3d, numInt: number, p1: OdGePoint3d, p2: OdGePoint3d, p3: OdGePoint3d, p4: OdGePoint3d, tol: OdGeTol): boolean;
  isLemon(): boolean;
  isApple(): boolean;
  isVortex(): boolean;
  isDoughnut(): boolean;
  isDegenerate(): boolean;
  isHollow(): boolean;
  isReverseV(): boolean;
  setReverseV(isReverseV: boolean): void;
};

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdGeVector2d.html} Additional documentation.
 */
class OdGeVector2d {
  constructor();
  constructor(xx: number, yy: number);
  constructor(arg0: OdGeVector2d);
  setToProduct(matrix: OdGeMatrix2d, vect: OdGeVector2d): OdGeVector2d;
  setToProduct1(vect: OdGeVector2d, scale: number): OdGeVector2d;
  transformBy(xfm: OdGeMatrix2d): OdGeVector2d;
  rotateBy(angle: number): OdGeVector2d;
  mirror(line: OdGeVector2d): OdGeVector2d;
  asPoint(): OdGePoint2d;
  asPoint1(): OdGePoint2d;
  setToSum(vector1: OdGeVector2d, vector2: OdGeVector2d): OdGeVector2d;
  negate(): OdGeVector2d;
  perpVector(): OdGeVector2d;
  angle(): number;
  angleTo(vect: OdGeVector2d): number;
  angleToCCW(vect: OdGeVector2d): number;
  normal(tol: OdGeTol): OdGeVector2d;
  normalize(tol: OdGeTol): OdGeVector2d;
  normalize1(tol: OdGeTol, status: OdGeError): OdGeVector2d;
  normalizeGetLength(tol: number): number;
  length(): number;
  lengthSqrd(): number;
  isUnitLength(tol: OdGeTol): boolean;
  isZeroLength(tol: OdGeTol): boolean;
  isParallelTo(vect: OdGeVector2d, tol: OdGeTol): boolean;
  isParallelTo1(vect: OdGeVector2d, tol: OdGeTol, status: OdGeError): boolean;
  isCodirectionalTo(vect: OdGeVector2d, tol: OdGeTol): boolean;
  isCodirectionalTo1(vect: OdGeVector2d, tol: OdGeTol, status: OdGeError): boolean;
  isPerpendicularTo(vect: OdGeVector2d, tol: OdGeTol): boolean;
  isPerpendicularTo1(vect: OdGeVector2d, tol: OdGeTol, status: OdGeError): boolean;
  dotProduct(vect: OdGeVector2d): number;
  crossProduct(vect: OdGeVector2d): number;
  isEqualTo(vect: OdGeVector2d, tol: OdGeTol): boolean;
  largestElement(): number;
  set(xx: number, yy: number): OdGeVector2d;
  static ctr1(arg0: OdGeVector2d): OdGeVector2d;
  x: number;
  y: number;
};

class OdGeVector2dArray extends OdArray<OdGeVector2d> { };

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdGeVector3d.html} Additional documentation.
 */
class OdGeVector3d {
  constructor();
  constructor(xx: number, yy: number, zz: number);
  constructor(plane: OdGePlanarEnt, vector2d: OdGeVector2d);
  constructor(arg0: OdGeVector3d);
  setToProduct(matrix: OdGeMatrix3d, vect: OdGeVector3d): OdGeVector3d;
  setToProduct1(vect: OdGeVector3d, scale: number): OdGeVector3d;
  transformBy(xfm: OdGeMatrix3d): OdGeVector3d;
  rotateBy(angle: number, axis: OdGeVector3d): OdGeVector3d;
  mirror(normalToPlane: OdGeVector3d): OdGeVector3d;
  convert2d(plane: OdGePlanarEnt): OdGeVector2d;
  convert2d1(): OdGeVector2d;
  asPoint(): OdGePoint3d;
  asPoint1(): OdGePoint3d;
  setToSum(vector1: OdGeVector3d, vector2: OdGeVector3d): OdGeVector3d;
  negate(): OdGeVector3d;
  perpVector(): OdGeVector3d;
  angleTo(vect: OdGeVector3d): number;
  angleTo1(vect: OdGeVector3d, refVector: OdGeVector3d): number;
  angleOnPlane(plane: OdGePlanarEnt): number;
  normal(tol: OdGeTol): OdGeVector3d;
  normalize(tol: OdGeTol): OdGeVector3d;
  normalize1(tol: OdGeTol, status: ErrorCondition): OdGeVector3d;
  normalizeGetLength(tol: number): number;
  length(): number;
  setLength(length: number): void;
  lengthSqrd(): number;
  isUnitLength(tol: OdGeTol): boolean;
  isZeroLength(tol: OdGeTol): boolean;
  isParallelTo(vect: OdGeVector3d, tol: OdGeTol): boolean;
  isParallelTo1(vect: OdGeVector3d, tol: OdGeTol, status: OdGeError): boolean;
  isCodirectionalTo(vect: OdGeVector3d, tol: OdGeTol): boolean;
  isCodirectionalTo1(vect: OdGeVector3d, tol: OdGeTol, status: OdGeError): boolean;
  isPerpendicularTo(vect: OdGeVector3d, tol: OdGeTol): boolean;
  isPerpendicularTo1(vect: OdGeVector3d, tol: OdGeTol, status: OdGeError): boolean;
  dotProduct(vect: OdGeVector3d): number;
  crossProduct(vect: OdGeVector3d): OdGeVector3d;
  project(planeNormal: OdGeVector3d, projectDirection: OdGeVector3d): OdGeVector3d;
  project1(planeNormal: OdGeVector3d, projectDirection: OdGeVector3d, tol: OdGeTol, flag: OdGeError): OdGeVector3d;
  orthoProject(planeNormal: OdGeVector3d): OdGeVector3d;
  orthoProject1(planeNormal: OdGeVector3d, tol: OdGeTol, flag: OdGeError): OdGeVector3d;
  isEqualTo(vect: OdGeVector3d, tol: OdGeTol): boolean;
  largestElement(): number;
  set(xx: number, yy: number, zz: number): OdGeVector3d;
  set1(plane: OdGePlanarEnt, vect: OdGeVector2d): OdGeVector3d;
  static ctr1(arg0: OdGeVector3d): OdGeVector3d;
  x: number;
  y: number;
  z: number;
};

class OdGeVector3dArray extends OdArray<OdGeVector3d> { };

class OdGeVoidPointerArray extends OdArray<number> { };

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdGiDrawableOverrule.html} Additional documentation.
 */
class OdGiDrawableOverrule extends OdRxOverrule {
  static cast(pObj: OdRxObject): OdGiDrawableOverrule;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdGiDrawableOverrule;
  static rxInit(): void;
  static rxUninit(): void;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  setAttributes(pSubject: OdGiDrawable, traits: OdGiDrawableTraits): number;
  worldDraw(pSubject: OdGiDrawable, wd: OdGiWorldDraw): boolean;
  viewportDraw(pSubject: OdGiDrawable, vd: OdGiViewportDraw): void;
  viewportDrawLogicalFlags(pSubject: OdGiDrawable, vd: OdGiViewportDraw): number;
  regenSupportFlags(pSubject: OdGiDrawable): number;
};

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdGiDrawable.html} Additional documentation.
 */
class OdGiDrawable extends OdRxObject {
  static cast(pObj: OdRxObject): OdGiDrawable;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdGiDrawable;
  static rxInit(): void;
  static rxUninit(): void;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  drawableType(): DrawableType;
  setAttributes(pTraits: OdGiDrawableTraits): number;
  worldDraw(pWd: OdGiWorldDraw): boolean;
  viewportDraw(pVd: OdGiViewportDraw): void;
  isPersistent(): boolean;
  id(): OdDbStub;
  setGsNode(pGsNode: OdGsCache): void;
  gsNode(): OdGsCache;
  viewportDrawLogicalFlags(pVd: OdGiViewportDraw): number;
  getGeomExtents(extents: OdGeExtents3d): OdResult;
  regenSupportFlags(): number;
};

enum DrawableType {
  kGeometry = 0,
  kDistantLight = 1,
  kPointLight = 2,
  kSpotLight = 3,
  kAmbientLight = 4,
  kSolidBackground = 5,
  kGradientBackground = 6,
  kImageBackground = 7,
  kGroundPlaneBackground = 8,
  kViewport = 9,
  kWebLight = 10,
  kSkyBackground = 11,
  kImageBasedLightingBackground = 12,
  kEnvironmentBackground = 16,
  kCustomBackground = 17
};

enum SetAttributesFlags {
  kDrawableNone = 0,
  kDrawableIsAnEntity = 1,
  kDrawableUsesNesting = 2,
  kDrawableIsCompoundObject = 4,
  kDrawableViewIndependentViewportDraw = 8,
  kDrawableIsInvisible = 16,
  kDrawableHasAttributes = 32,
  kDrawableRegenTypeDependantGeometry = 64,
  kDrawableIsDimension = 133,
  kDrawableRegenDraw = 256,
  kDrawableStandardDisplaySingleLOD = 512,
  kDrawableShadedDisplaySingleLOD = 1024,
  kDrawableViewDependentViewportDraw = 2048,
  kDrawableBlockDependentViewportDraw = 4096,
  kDrawableIsExternalReference = 8192,
  kDrawableNotPlottable = 16384,
  kDrawableNotAllowLCS = 32768,
  kDrawableMergeControlOff = 65536,
  kLastFlag = 65536
};

class OdGsModelArray extends OdArray<OdGsModel> { };

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdGsView.html} Additional documentation.
 */
class OdGsView extends OdRxObject {
  static cast(pObj: OdRxObject): OdGsView;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdGsView;
  static rxInit(): void;
  static rxUninit(): void;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  device(): OdGsDevice;
  userGiContext(): OdGiContext;
  setUserGiContext(pUserGiContext: OdGiContext): void;
  lineweightToDcScale(): number;
  setLineweightToDcScale(scale: number): void;
  setViewport(lowerLeft: OdGePoint2d, upperRight: OdGePoint2d): void;
  setViewport1(screenRect: OdGsDCRect): void;
  setViewport2(screenRect: OdGsDCRectDouble): void;
  getViewport(lowerLeft: OdGePoint2d, upperRight: OdGePoint2d): void;
  getViewport1(screenRect: OdGsDCRect): void;
  getViewport2(screenRect: OdGsDCRectDouble): void;
  setViewportClipRegion(numContours: number, numVertices: number, vertices: OdGsDCPoint): void;
  setViewportClipRegion1(numContours: number, numVertices: number, vertices: OdGePoint2d): void;
  viewportClipRegion(counts: OdIntArray, vertices: OdGsDCPointArray): void;
  viewportClipRegion1(counts: OdIntArray, vertices: OdGePoint2dArray): void;
  removeViewportClipRegion(): void;
  setViewport3dClipping(pBoundary: OdGiClipBoundary, pClipInfo: OdGiAbstractClipBoundary): void;
  removeViewport3dClipping(): void;
  setViewportBorderProperties(color: number, width: number): void;
  getViewportBorderProperties(color: number, width: number): void;
  setViewportBorderVisibility(visible: boolean): void;
  isViewportBorderVisible(): boolean;
  setView(position: OdGePoint3d, target: OdGePoint3d, upVector: OdGeVector3d, fieldWidth: number, fieldHeight: number, projectionType: Projection): void;
  position(): OdGePoint3d;
  target(): OdGePoint3d;
  upVector(): OdGeVector3d;
  lensLength(): number;
  setLensLength(lensLength: number): void;
  isPerspective(): boolean;
  fieldWidth(): number;
  fieldHeight(): number;
  setEnableFrontClip(enable: boolean): void;
  isFrontClipped(): boolean;
  setFrontClip(frontClip: number): void;
  frontClip(): number;
  setEnableBackClip(enable: boolean): void;
  isBackClipped(): boolean;
  setBackClip(backClip: number): void;
  backClip(): number;
  viewingMatrix(): OdGeMatrix3d;
  projectionMatrix(): OdGeMatrix3d;
  screenMatrix(): OdGeMatrix3d;
  worldToDeviceMatrix(): OdGeMatrix3d;
  objectToDeviceMatrix(): OdGeMatrix3d;
  setMode(mode: RenderMode): void;
  mode(): RenderMode;
  add(pSceneGraph: OdGiDrawable, pModel: OdGsModel): boolean;
  numRootDrawables(): number;
  rootDrawableIdAt(i: number, pModelReturn: OdGsModel): OdDbStub;
  rootDrawableAt(i: number, pModelReturn: OdGsModel): OdGiDrawable;
  erase(sceneGraph: OdGiDrawable): boolean;
  eraseAll(): void;
  getModel(pDrawable: OdGiDrawable): OdGsModel;
  getModelList(): OdGsModelArray;
  invalidate(): void;
  invalidate1(screenRect: OdGsDCRect): void;
  isValid(): boolean;
  update(): void;
  beginInteractivity(frameRateInHz: number): void;
  isInInteractivity(): boolean;
  interactivityFrameRate(): number;
  endInteractivity(): void;
  flush(): void;
  hide(): void;
  show(): void;
  isVisible(): boolean;
  freezeLayer(layerID: OdDbStub): void;
  thawLayer(layerID: OdDbStub): void;
  clearFrozenLayers(): void;
  invalidateCachedViewportGeometry(): void;
  select(pts: OdGsDCPoint, nPoints: number, pReactor: OdGsSelectionReactor, mode: SelectionMode): void;
  dolly(dollyVector: OdGeVector3d): void;
  dolly1(xDolly: number, yDolly: number, zDolly: number): void;
  roll(rollAngle: number): void;
  orbit(xOrbit: number, yOrbit: number): void;
  zoom(zoomFactor: number): void;
  pan(xPan: number, yPan: number): void;
  zoomExtents(minPt: OdGePoint3d, maxPt: OdGePoint3d): void;
  zoomWindow(lowerLeft: OdGePoint2d, upperRight: OdGePoint2d): void;
  pointInView(pt: OdGePoint3d): boolean;
  extentsInView(minPt: OdGePoint3d, maxPt: OdGePoint3d): boolean;
  cloneView(cloneViewParameters: boolean, cloneGeometry: boolean): OdGsView;
  viewParameters(pView: OdGsView): void;
  exceededBounds(): boolean;
  enableStereo(enabled: boolean): void;
  isStereoEnabled(): boolean;
  setStereoParameters(magnitude: number, parallax: number): void;
  getStereoParameters(magnitude: number, parallax: number): void;
  initLights(pLightsIterator: OdRxIterator): void;
  setLinetypeScaleMultiplier(linetypeScaleMultiplier: number): void;
  linetypeScaleMultiplier(): number;
  setAlternateLinetypeScaleMultiplier(linetypeAlternateScaleMultiplier: number): void;
  linetypeAlternateScaleMultiplier(): number;
  clientViewInfo(clientViewInfo: OdGsClientViewInfo): void;
  setClearColor(color: ClearColor): void;
  pointInViewport(screenPoint: OdGePoint2d): boolean;
  getNumPixelsInUnitSquare(point: OdGePoint3d, pixelDensity: OdGePoint2d, bUsePerspective: boolean): void;
  setBackground(backgroundId: OdDbStub): void;
  background(): OdDbStub;
  setVisualStyle(visualStyleId: OdDbStub): void;
  visualStyle(): OdDbStub;
  setVisualStyle1(visualStyle: OdGiVisualStyle): void;
  visualStyle1(visualStyle: OdGiVisualStyle): boolean;
  enableDefaultLighting(bEnable: boolean, lightType: DefaultLightingType): void;
  getSnapShot(pImage: OdGiRasterImage, region: OdGsDCRect): void;
  enableAntiAliasing(nMode: number): void;
  antiAliasingMode(): number;
  enableSSAO(bEnable: boolean): void;
  ssaoMode(): boolean;
};

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdGsDevice.html} Additional documentation.
 */
class OdGsDevice extends OdRxObject {
  static cast(pObj: OdRxObject): OdGsDevice;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdGsDevice;
  static rxInit(): void;
  static rxUninit(): void;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  properties(): OdRxDictionary;
  userGiContext(): OdGiContext;
  setUserGiContext(pUserGiContext: OdGiContext): void;
  invalidate(): void;
  invalidate1(screenRect: OdGsDCRect): void;
  isValid(): boolean;
  update(pUpdatedRect: OdGsDCRect): void;
  onSize(outputRect: OdGsDCRect): void;
  onSize1(outputRect: OdGsDCRectDouble): void;
  getSize(outputRect: OdGsDCRect): void;
  getSize1(outputRect: OdGsDCRectDouble): void;
  onRealizeForegroundPalette(): void;
  onRealizeBackgroundPalette(): void;
  onDisplayChange(bitsPerPixel: number, xPixels: number, yPixels: number): void;
  createView(pViewInfo: OdGsClientViewInfo, enableLayerVisibilityPerView: boolean): OdGsView;
  addView(pView: OdGsView): void;
  createModel(): OdGsModel;
  isModelCompatible(pModel: OdGsModel): boolean;
  saveDeviceState(pFiler: OdGsFilerGSS): boolean;
  loadDeviceState(pFiler: OdGsFilerGSS): boolean;
  gsFilerDeviceInterface(): OdGsFilerDeviceInterface;
  insertView(viewIndex: number, pView: OdGsView): void;
  eraseView(pView: OdGsView): boolean;
  eraseView1(viewIndex: number): boolean;
  eraseAllViews(): void;
  numViews(): number;
  viewAt(viewIndex: number): OdGsView;
  setBackgroundColor(backgroundColor: number): boolean;
  getBackgroundColor(): number;
  setLogicalPalette(logicalPalette: number, numColors: number): void;
  getSnapShot(pImage: OdGiRasterImage, region: OdGsDCRect): void;
  getUpdateManager(createIfNotExist: boolean): OdGsUpdateManager;
  setUpdateManager(pManager: OdGsUpdateManager): void;
};

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdGsReactor.html} Additional documentation.
 */
class OdGsReactor extends OdRxObject {
  viewWasCreated(pView: OdGsView): void;
  viewToBeDestroyed(pView: OdGsView): void;
  viewToBeUpdated(pView: OdGsView, flags: number): void;
  viewWasUpdated(pView: OdGsView, flags: number): void;
  gsToBeUnloaded(pModule: OdGsModule): void;
};

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdGsModule.html} Additional documentation.
 */
class OdGsModule extends OdRxModule {
  static cast(pObj: OdRxObject): OdGsModule;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdGsModule;
  static rxInit(): void;
  static rxUninit(): void;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  createDevice(): OdGsDevice;
  createBitmapDevice(): OdGsDevice;
  addReactor(pReactor: OdGsReactor): void;
  removeReactor(pReactor: OdGsReactor): void;
};

enum RenderMode {
  kBoundingBox = -1,
  k2DOptimized = 0,
  kWireframe = 1,
  kHiddenLine = 2,
  kFlatShaded = 3,
  kGouraudShaded = 4,
  kFlatShadedWithWireframe = 5,
  kGouraudShadedWithWireframe = 6,
  kNone = 7
};

enum Projection {
  kParallel = 0,
  kPerspective = 1
};

enum SelectionMode {
  kWindow = 0,
  kCrossing = 1,
  kFence = 2,
  kWPoly = 3,
  kCPoly = 4,
  kPoint = 16,
  kPointLast = 17
};

enum ClearColor {
  kTransparent = 0,
  kDeviceBackground = 1,
  kPaletteBackground = 2
};

enum ViewUpdateFlags {
  kCameraChanged = 1
};

enum DefaultLightingType {
  kOneLight = 0,
  kTwoLights = 1,
  kBackLight = 2
};

enum ViewportFlags {
  kDependentViewport = 1,
  kDependentGeometry = 2,
  kHelperView = 4,
  kSetViewportId = 8
};

class OdGsDCPointArray extends OdArray<OdGsDCPoint> { };

enum MinFlag {
  Minimum = 0
};

enum MaxFlag {
  Maximum = 0
};

enum NullFlag {
  Null = 0
};

enum EMetafilePlayMode {
  kMfUndefined = 0,
  kMfDisplay = 1,
  kMfSelect = 2,
  kMfNested = 3,
  kMfExtents = 4
};

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdGsDCPoint.html} Additional documentation.
 */
class OdGsDCPoint {
  constructor();
  constructor(xx: number, yy: number);
  constructor(arg0: MaxFlag);
  static ctr1(arg0: MinFlag): OdGsDCPoint;
  static ctr2(arg0: OdGsDCPoint): OdGsDCPoint;
  x: number;
  y: number;
};

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdGsDCRectDouble.html} Additional documentation.
 */
class OdGsDCRectDouble {
  constructor();
  constructor(minPoint: OdGePoint2d, maxPoint: OdGePoint2d);
  constructor(xMin: number, xMax: number, yMin: number, yMax: number);
  constructor(rc: OdGsDCRect);
  round(): OdGsDCRect;
  m_min: OdGePoint2d;
  m_max: OdGePoint2d;
};

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdGsDCRect.html} Additional documentation.
 */
class OdGsDCRect {
  constructor();
  constructor(minPoint: OdGsDCPoint, maxPoint: OdGsDCPoint);
  constructor(xMin: number, xMax: number, yMin: number, yMax: number);
  constructor(arg0: NullFlag);
  set_null(): void;
  is_null(): boolean;
  within(dcRect: OdGsDCRect): boolean;
  offset(x: number, y: number): void;
  intersectWith(dcRect: OdGsDCRect, bValidate: boolean): void;
  normalize(): void;
  isDisjoint(r: OdGsDCRect): boolean;
  static ctr1(arg0: OdGsDCRect): OdGsDCRect;
  m_min: OdGsDCPoint;
  m_max: OdGsDCPoint;
};

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdGsCache.html} Additional documentation.
 */
class OdGsCache extends OdRxObject {
  static cast(pObj: OdRxObject): OdGsCache;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdGsCache;
  static rxInit(): void;
  static rxUninit(): void;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  model(): OdGsModel;
  setDrawableNull(): void;
  extents(extents: OdGeExtents3d): boolean;
};

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdGsModel.html} Additional documentation.
 */
class OdGsModel extends OdRxObject {
  static cast(pObj: OdRxObject): OdGsModel;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdGsModel;
  static rxInit(): void;
  static rxUninit(): void;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  onAdded(pAdded: OdGiDrawable, pParent: OdGiDrawable): void;
  onAdded1(pAdded: OdGiDrawable, parentID: OdDbStub): void;
  onModified(pModified: OdGiDrawable, pParent: OdGiDrawable): void;
  onModified1(pModified: OdGiDrawable, parentID: OdDbStub): void;
  onModifiedGraphics(pModified: OdGiDrawable, parentID: OdDbStub): void;
  onErased(pErased: OdGiDrawable, pParent: OdGiDrawable): void;
  onErased1(pErased: OdGiDrawable, parentID: OdDbStub): void;
  onUnerased(pUnerased: OdGiDrawable, pParent: OdGiDrawable): void;
  onUnerased1(pUnerased: OdGiDrawable, parentID: OdDbStub): void;
  invalidate(hint: InvalidationHint): void;
  invalidate1(pView: OdGsView): void;
  invalidateVisible(pDevice: OdGsDevice): void;
  setTransform(arg0: OdGeMatrix3d): void;
  transform(): OdGeMatrix3d;
  highlight(path: OdGiPathNode, bDoIt: boolean, nStyle: number, pView: OdGsView): void;
  highlight1(path: OdGiPathNode, pMarkers: number, nMarkers: number, bDoIt: boolean, nStyle: number, pView: OdGsView): void;
  hide(path: OdGiPathNode, bDoIt: boolean, bSelectHidden: boolean, pView: OdGsView): void;
  hide1(path: OdGiPathNode, pMarkers: number, nMarkers: number, bDoIt: boolean, bSelectHidden: boolean, pView: OdGsView): void;
  externalTransform(path: OdGiPathNode, bDoIt: boolean, xForm: OdGsMatrixParam, pView: OdGsView): void;
  externalTransform1(path: OdGiPathNode, pMarkers: number, nMarkers: number, bDoIt: boolean, xForm: OdGsMatrixParam, pView: OdGsView): void;
  setRenderType(renderType: RenderType): void;
  renderType(): RenderType;
  setRenderModeOverride(mode: RenderMode): void;
  renderModeOverride(): RenderMode;
  setViewClippingOverride(bEnable: boolean): void;
  viewClippingOverride(): boolean;
  setBackground(backgroundId: OdDbStub): void;
  background(): OdDbStub;
  setVisualStyle(visualStyleId: OdDbStub): void;
  visualStyle(): OdDbStub;
  setVisualStyle1(visualStyle: OdGiVisualStyle): void;
  visualStyle1(visualStyle: OdGiVisualStyle): boolean;
  addModelReactor(pReactor: OdGsModelReactor): void;
  removeModelReactor(pReactor: OdGsModelReactor): void;
  setEnableSectioning(bEnable: boolean): void;
  isSectioningEnabled(): boolean;
  setSectioning(points: OdGePoint3dArray, upVector: OdGeVector3d): boolean;
  setSectioning1(points: OdGePoint3dArray, upVector: OdGeVector3d, dTop: number, dBottom: number): boolean;
  setSectioningVisualStyle(visualStyleId: OdDbStub): void;
  setEnableLinetypes(bEnable: boolean): void;
  isLinetypesEnabled(): boolean;
  setSelectable(bEnable: boolean): void;
  isSelectable(): boolean;
  setEnableViewExtentsCalculation(bEnable: boolean): void;
  isViewExtentsCalculationEnabled(): boolean;
  setEnableLightsInBlocks(bEnable: boolean): void;
  isLightsInBlocksEnabled(): boolean;
  setViewSectioningOverride(bEnable: boolean): void;
  viewSectioningOverride(): boolean;
};

enum InvalidationHint {
  kInvalidateIsolines = 0,
  kInvalidateViewportCache = 1,
  kInvalidateAll = 2,
  kInvalidateMaterials = 3,
  kInvalidateLinetypes = 4
};

enum RenderType {
  kMinRenderType = -3,
  kUserBg1 = -3,
  kUserBg2 = -2,
  kUserBg3 = -1,
  kMain = 0,
  kSprite = 1,
  kDirect = 2,
  kHighlight = 3,
  kHighlightSelection = 4,
  kDirectTopmost = 5,
  kContrast = 6,
  kCount = 7,
  kUserFg1 = 7,
  kUserFg2 = 8,
  kUserFg3 = 9,
  kMaxRenderType = 10,
  kNumRenderTypes = 13
};

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdGsModelReactor.html} Additional documentation.
 */
class OdGsModelReactor {
  constructor();
  constructor(arg0: OdGsModelReactor);
  onAdded(pModel: OdGsModel, pAdded: OdGiDrawable, pParent: OdGiDrawable): boolean;
  onAdded1(pModel: OdGsModel, pAdded: OdGiDrawable, parentID: OdDbStub): boolean;
  onErased(pModel: OdGsModel, pErased: OdGiDrawable, pParent: OdGiDrawable): boolean;
  onErased1(pModel: OdGsModel, pErased: OdGiDrawable, parentID: OdDbStub): boolean;
  onModified(pModel: OdGsModel, pModified: OdGiDrawable, pParent: OdGiDrawable): boolean;
  onModified1(pModel: OdGsModel, pModified: OdGiDrawable, parentID: OdDbStub): boolean;
  onUnerased(pModel: OdGsModel, pUnerased: OdGiDrawable, pParent: OdGiDrawable): boolean;
  onUnerased1(pModel: OdGsModel, pUnerased: OdGiDrawable, parentID: OdDbStub): boolean;
};

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdGsSelectionReactor.html} Additional documentation.
 */
class OdGsSelectionReactor {
  selected(pDrawableDesc: OdGiDrawableDesc): boolean;
  selected1(arg0: OdGiPathNode, arg1: OdGiViewport): number;
};

enum DrawableDescFlags {
  kFirstFlag = 1,
  kMarkedToSkip = 1,
  kMarkedBySelection = 2,
  kMarkedBySubSelection = 4,
  kMarkedByGeometry = 8,
  kMarkedBySubGeometry = 16,
  kMarkedToBreak = 32,
  kMarkedForForcedSelection = 64,
  kLastFlag = 64
};

enum OdGeIslandStyle {
  OdGeIslandStyle_Normal = 0,
  OdGeIslandStyle_Outer = 1,
  OdGeIslandStyle_Ignore = 2
};

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdHatchPatternLine.html} Additional documentation.
 */
class OdHatchPatternLine {
  constructor();
  constructor(pat: OdHatchPatternLine);
  transformBy(ocsXform: OdGeMatrix2d): void;
  scale(s: number): void;
  m_dLineAngle: number;
  m_basePoint: OdGePoint2d;
  m_patternOffset: OdGeVector2d;
  m_dashes: OdGeDoubleArray;
};

class OdSoftPtrIdArray extends OdArray<OdDbSoftPointerId> { };

class OdHardPtrIdArray extends OdArray<OdDbHardPointerId> { };

class OdSoftOwnIdArray extends OdArray<OdDbSoftOwnershipId> { };

class OdHardOwnIdArray extends OdArray<OdDbHardOwnershipId> { };

class OdTypedIdsArray extends OdArray<OdDbTypedId> { };

class OdDbObjectIdArray extends OdArray<OdDbObjectId> { };

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdBinaryData.html} Additional documentation.
 */
class OdBinaryData extends OdArray<number> {
  constructor(arg0: OdBinaryData);
  constructor();
  static ctr1(arg0: OdBinaryData): OdBinaryData;
};

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdBitBinaryData.html} Additional documentation.
 */
class OdBitBinaryData extends OdBinaryData {
  constructor();
  getBitSize(): number;
  setBitSize(value: number): void;
  updateBitSize(): void;
};

enum OdMessage {
  sidDummyFirstMessage = 510,
  sidLayoutNo = 511,
  sidDwgFile = 512,
  sidDb = 513,
  sidDbHeader = 514,
  sidObjectsAudited = 515,
  sidErrorsFound = 516,
  sidDictionary = 517,
  sidTable = 518,
  sidDbLayerZeroMissed = 519,
  sidDbLayerZeroBadIndex = 520,
  sidDbLtMissed = 521,
  sidDbLtContsBadIndex = 522,
  sidDbSymbolTableMissed = 523,
  sidDbRegAppAcadMissed = 524,
  sidDbRegAppAcadBadIndex = 525,
  sidDbTxtStStandardMissed = 526,
  sidDbDimStStandardMissed = 527,
  sidDbMlStStandardMissed = 528,
  sidDbVpActiveMissed = 529,
  sidDbLtByBlockName = 530,
  sidDbLtByBlockInList = 531,
  sidDbLtByLayerName = 532,
  sidDbLtByLayerInList = 533,
  sidDbNamedObjectsDictionaryMissed = 534,
  sidDbDictionaryMissed = 535,
  sidInvalidLayoutId = 536,
  sidInvalidLayoutAssoc = 537,
  sidInvalidLayoutBackPtr = 538,
  sidSysVar = 539,
  sidLayoutOverallVp = 540,
  sidInvalidObjectId = 541,
  sidIsNotTextStyleRec = 542,
  sidIsNotInTable = 543,
  sidIsShapeFile = 544,
  sidVxRecRef = 545,
  sidGenNamePrefix = 546,
  sidGenNameSymUtilPrefix = 547,
  sidVarValidDouble = 548,
  sidVarValidInt = 549,
  sidVarValidPositive = 550,
  sidVarValidZeroPositive = 551,
  sidVarValidNegative = 552,
  sidVarValidZeroNegative = 553,
  sidVarValidNonZero = 554,
  sidVarValidRangeInt = 555,
  sidVarValidRangeDouble = 556,
  sidVarValidRangeDegree = 557,
  sidVarValidMinInt = 558,
  sidVarValidMaxInt = 559,
  sidVarValidInvalid = 560,
  sidVarValid = 561,
  sidVarValidInts2 = 562,
  sidVarValidInts4 = 563,
  sidVarValidDisparity = 564,
  sidVarDefDouble = 565,
  sidVarDefInt = 566,
  sidVarDefObj = 567,
  sidVarDefDegree = 568,
  sidVarDefColor = 569,
  sidVarDefLayer = 570,
  sidVarDefLinetype = 571,
  sidVarDefZAxis = 572,
  sidVarDefViewMode = 573,
  sidVarDefFalse = 574,
  sidVarDefTrue = 575,
  sidVarDefNull = 576,
  sidVarDefDefault = 577,
  sidVarDefCreate = 578,
  sidVarDefRemove = 579,
  sidVarDefUpdate = 580,
  sidVarDefRepair = 581,
  sidVarDefUnerase = 582,
  sidVarDefLayerColorMethod = 583,
  sidColorInvalidIndex = 584,
  sidColorInvalidMethod = 585,
  sidValidColorIndices = 586,
  sidValidLayerColorIndices = 587,
  sidValidColorMethods = 588,
  sidValidColorMethods2 = 589,
  sidObjProp = 590,
  sidObjPropInt = 591,
  sidObjPropDouble = 592,
  sidObjPropStr = 593,
  sidObjPropColor = 594,
  sidObjPropLayerId = 595,
  sidObjPropLinetypeId = 596,
  sidObjPropLinetypeName = 597,
  sidObjPropPlotStyleNameId = 598,
  sidObjPropReactorId = 599,
  sidObjPropExtDicId = 600,
  sidObjPropOwnerId = 601,
  sidObjPropClassVersion = 602,
  sidXDataRegAppId = 603,
  sidXDataHandle = 604,
  sidXDataInvalidGrcode = 605,
  sidXdataSizeExceeded = 606,
  sidXDataGrcode3doubles = 607,
  sidXDataGrcode1double = 608,
  sidXDataUnpairedBrackets = 609,
  sidInvalidChildId = 610,
  sidDicClonFlag = 611,
  sidObjPropColorByLayer = 612,
  sidObjPropPlotStByLayer = 613,
  sidObjPropMaterialId = 614,
  sidObjPropMaterialByLayer = 615,
  sidObjPropMaterialGlobal = 616,
  sidFoundDuplicateKeys = 617,
  sidHatchAssocInvalid = 618,
  sidHatchAssocHatch = 619,
  sidHatchAssocReactor = 620,
  sidHatchRemoveAssoc = 621,
  sidHatchAssocFlag = 622,
  sidHatchNoPatternDef = 623,
  sidHatchConflictGradFlags = 624,
  sidHatchGradFlagsFixed = 625,
  sidInvalidHatchBoundaryData = 626,
  sidNoClosedHatchBoundaryLoops = 627,
  sidHatchBndDupVerts = 628,
  sidHatchNumSrcBnd = 629,
  sidMTextLinespacingStyle = 630,
  sidMTextAttachPt = 631,
  sidMTextDrawDir = 632,
  sidMTextLinespacingFactor = 633,
  sidMTextXDir = 634,
  sidMTextExtDic = 635,
  sidMLineJustification = 636,
  sidMLineScale = 637,
  sidMLineStyleId = 638,
  sidMLineStyleNumElements = 639,
  sidMLineStFillColor = 640,
  sidMLineStStartAngle = 641,
  sidMLineStEndAngle = 642,
  sidMLineStSegmentsNum = 643,
  sidMLineStElemLinetypeId = 644,
  sidMLineStElemColor = 645,
  sidMLineStyleName = 646,
  sidNumClipPoints = 647,
  sidImgInvalidReactorId = 648,
  sidViTilemodeCorners = 649,
  sidViTilemodeCornersValid = 650,
  sidViTilemodeCornersDef = 651,
  sidViSnapXIncr = 652,
  sidViSnapYIncr = 653,
  sidViGridXIncr = 654,
  sidViGridYIncr = 655,
  sidViViewWidth = 656,
  sidViViewHeight = 657,
  sidViLensLength = 658,
  sidViViewDirection = 659,
  sidViViewMode = 660,
  sidViRenderMode = 661,
  sidViTwistAngle = 662,
  sidVpHeight = 663,
  sidVpWidth = 664,
  sidVpUCS = 665,
  sidVpUCSInvalidXAxis = 666,
  sidVpUCSInvalidYAxis = 667,
  sidVpUCSNonPerpendicular = 668,
  sidVpCenter = 669,
  sidVpCenterDef = 670,
  sidResized = 671,
  sidTblVxOneEmptyRec = 672,
  sidTblBlockBeginInvalid = 673,
  sidTblBlockBeginErased = 674,
  sidTblBlockBeginNotOurs = 675,
  sidTblBlockEndInvalid = 676,
  sidTblBlockEndErased = 677,
  sidTblBlockEndNotOurs = 678,
  sidTblBlockInvalidSortents = 679,
  sidRecSpaceDuplicateEntry = 680,
  sidRecSpaceNameInvalid = 681,
  sidRecNameEmpty = 682,
  sidRecNameInvalidChars = 683,
  sidRecCommentInvalidChars = 684,
  sidRecDuplicateName = 685,
  sidRecXRefBlockInvalid = 686,
  sidRecXRefBlockIdNotNull = 687,
  sidRecXRefBlockIdInvalid = 688,
  sidRecXRefInvalidFlag = 689,
  sidRecXRefDepNameInvalid = 690,
  sidRecXRefBreakCycle = 691,
  sidRecXRefBindNotFound = 692,
  sidRecXRefBindUnloaded = 693,
  sidRecNameVertBar = 694,
  sidRecRemoveDependence = 695,
  sidRecAttrDefFalse = 696,
  sidRecAttrDefTrue = 697,
  sidRecAttrDefAlwaysFalse = 698,
  sidRecLtSegmentsNum = 699,
  sidRecLtBadSegmentType = 700,
  sidRecLtContPattern = 701,
  sidRecLtDescription = 702,
  sidRecTxtStLastHeight = 703,
  sidRecTxtStScaleFactor = 704,
  sidRecTxtStTextSize = 705,
  sidRecVxNullVp = 706,
  sidRecVxBadVp = 707,
  sidRecvInvalidFileSection = 708,
  sidUnknownSysVar = 709,
  sidUnknownSymbolTable = 710,
  sidIgnored = 711,
  sidInvalidDimOverridesData = 712,
  sidInvalidDimOverrides = 713,
  sidDimBlockRotation = 714,
  sidDimObliqueAngle = 715,
  sidDimTextRotation = 716,
  sidDimTextStyleNull = 717,
  sidDimIsNotTextStyleRec = 718,
  sidLeaderAnntEnbl = 719,
  sidLeaderAnntDisbl = 720,
  sidLeaderAnntDisable = 721,
  sidLeaderAnntToNull = 722,
  sidLeaderAnntId = 723,
  sidDimStyle = 724,
  sidLeaderArrowHead = 725,
  sidLeaderStyleNull = 726,
  sidTextHeight = 727,
  sidTextWidthFactor = 728,
  sidTextObliqueAngle = 729,
  sidTextTextStyle = 730,
  sidTextMirrorFlag = 731,
  sidTextHorizontalMode = 732,
  sidTextVerticalMode = 733,
  sidDimAssocDimId = 734,
  sidGroupEntryReactor = 735,
  sidGroupDefAddReactor = 736,
  sidPolyVertNumErr = 737,
  sidPolyVertNumAdd = 738,
  sidPolyVertLayerMatch = 739,
  sidPolyVertLinetypeMatch = 740,
  sidPolyVertColorMatch = 741,
  sidPolyVertValid = 742,
  sidPolylineSurfType = 743,
  sidPolyBulgeErr = 744,
  sidPolyBulgeValid = 745,
  sidPolyBulgeDef = 746,
  sidPolyWidthErr = 747,
  sidPolyWidthValid = 748,
  sidPolyWidthDef = 749,
  sidPolyIdentifiersErr = 750,
  sidPolyIdentifiersValid = 751,
  sidPolyIdentifiersDef = 752,
  sidPolyFitType = 753,
  sidCntrEntryInvalid = 754,
  sidCntrCrossRefInvalid = 755,
  sidCntrMultipleEntry = 756,
  sidCntrLastRefMatch = 757,
  sidCntrEntryTypeInvalid = 758,
  sidCntrSubentTypeInvalid = 759,
  sidPolyfaceMeshVertexIndex = 760,
  sidPolyfaceMeshHasNoFaces = 761,
  sidPolyfaceMeshVertexAfterFace = 762,
  sidPolyfaceMeshVertexNumInvalid = 763,
  sidPolyfaceMeshFaceNumInvalid = 764,
  sidBlkRefBlockRecErased = 765,
  sidBlkRefBlockRecInvalid = 766,
  sidMissingBlockRecord = 767,
  sidBlkRefScaleHasZero = 768,
  sidBlkRefScaleValid = 769,
  sidUnknownShapeName = 770,
  sidNullShapeFile = 771,
  sidNullShapeNumber = 772,
  sidCantGetShapeName = 773,
  sidNormalDirectionIsInvalid = 774,
  sidPerpToMajor = 775,
  sidAdjusted = 776,
  sidEllipseRatio = 777,
  sidEllipseEqualAngle = 778,
  sidCoincidentControlPoints = 779,
  sidInvalidKnotVector = 780,
  sidXRecordInvalidGrcode = 781,
  sidXRecordHandle = 782,
  sidXRecord3doubles = 783,
  sidXRecord1double = 784,
  sidMInsertNumRows = 785,
  sidMInsertNumColumns = 786,
  sidNormalized = 787,
  sidThickness = 788,
  sidZeroed = 789,
  sidRecvStart = 790,
  sidRecvSecLocHeader = 791,
  sidRecvSecLocClasses = 792,
  sidRecvSecLocObjectMap = 793,
  sidRecvSecLoc = 794,
  sidRecvBadCrc = 795,
  sidRecvSkip = 796,
  sidRecvBadAddr = 797,
  sidRecvFileTooShort = 798,
  sidRecvFailed = 799,
  sidRecvFinishFailed = 800,
  sidRecvStartAudit = 801,
  sidRecvRestoreObjectMap = 802,
  sidRecvTotalObs = 803,
  sidRecvLoadedObs = 804,
  sidRecvErrorsFound = 805,
  sidRecvDbHeaderErr = 806,
  sidRecvSections = 807,
  sidRecvObjectMap = 808,
  sidRecvHeader = 809,
  sidRecv2ndHeader = 810,
  sidRecvClasses = 811,
  sidRecvInvalidHandseed = 812,
  sidRecvObject = 813,
  sidRecvObjFreeSpaceBadSize = 814,
  sidRecvObjFreeSpaceErr = 815,
  sidRecvTemplateErr = 816,
  sidRecvPreviewImgErr = 817,
  sidRecvUnknownSecErr = 818,
  sidRecv2ndHdrErr = 819,
  sidRecv2ndHdrAddrErr = 820,
  sidRecvSs2ndHdr = 821,
  sidRecvResize = 822,
  sidRecvReconstruct = 823,
  sidRecvObjectMapErr = 824,
  sidRecvRecover = 825,
  sidRecvAddObj = 826,
  sidRecvBadRemainsEntry = 827,
  sidRecvClassMissed = 828,
  sidRecvAddClass = 829,
  sidRecvClassListErr = 830,
  sidRecvObjInvalid = 831,
  sidRecvObjInvalidOffset = 832,
  sidRecvObjInvalidSize = 833,
  sidRecvObjAddrInvalidSize = 834,
  sidRecvObjHandleUnmatched = 835,
  sidRecvObjInvalidData = 836,
  sidRecvSkippedRec = 837,
  sidRecvRootObjInvalid = 838,
  sidRecvBadRootTables = 839,
  sidRecvBadDictionary = 840,
  sidRecvBadRecClass = 841,
  sidRecvBadMlineStandard = 842,
  sidRecvBadPlotStNormal = 843,
  sidRecvRegAppAcad = 844,
  sidRecvLinetypeByBlock = 845,
  sidRecvLinetypeByLayer = 846,
  sidRecvLinetypeContinuous = 847,
  sidRecvLtSolidLine = 848,
  sidRecvLayerZero = 849,
  sidRecvPaperSpaceLayout = 850,
  sidRecvModelSpaceLayout = 851,
  sidRecvPaperSpaceInvalid = 852,
  sidRecvModelSpaceInvalid = 853,
  sidRecvBadSectionAddr = 854,
  sidRecvGrDataLength = 855,
  sidCantRestoreProxy = 856,
  sidEmptyProxyEntity = 857,
  sidUnexpectedProxyFormat = 858,
  sidRecvHeaderErr = 859,
  sidRecv2ndHeaderErr = 860,
  sidRecvTableRecsErr = 861,
  sidRecvTableRecordErr = 862,
  sidRecvEntityErr = 863,
  sidRecvDuplHandle = 864,
  sidRecvBadRecIndex = 865,
  sidNoDimBlockGenerated = 866,
  sidUnknownDXFversion = 867,
  sidBinaryIncompatible = 868,
  sidErrorUnloadingModule = 869,
  sidErrorNotThatKindOfClass = 870,
  sidViewHasInvalidLensLength = 871,
  sidNoCPConversionTable = 872,
  sidTableStyle = 873,
  sidAuditFailed = 874,
  sidRefToBlockIsCyclic = 875,
  sidCurrentDimstyle = 876,
  sidRequiresIntegerBetween = 877,
  sidRequiresRealBetween = 878,
  sidRequiresNOrNOnly = 879,
  sidRequiresModelSpace = 880,
  sidCommandCanceled = 881,
  sidCancel = 882,
  sidPmSavingTo = 883,
  sidPmAuditing = 884,
  sidPmPreloadingR14 = 885,
  sidPmLoadingHandles = 886,
  sidPmLoadingDWGfile = 887,
  sidPmLoadingFrom = 888,
  sidPmRecoveringDWGfile = 889,
  sidPmRecoveringFileHeader = 890,
  sidPmRecoveringObjects = 891,
  sidPmRecoveringObjectMap = 892,
  sidPmLoadingObjectMap = 893,
  sidPmLoadingDXFFile = 894,
  sidPmResolvingHeaderRoundtrip = 895,
  sidPmUndoingConversion = 896,
  sidPmDatabaseConversion = 897,
  sidCannotSetVarToThatValue = 898,
  sidDuplicateOwnership = 899,
  sidBadDxfHeader = 900,
  sidBadDxf = 901,
  sidLayoutInvalidModelType = 902,
  sidFontSubstitution = 903,
  sidFontSubstitutedPath = 904,
  sidFontSubstitutionByDefault = 905,
  sidGdtFontSubstitutionByDefault = 906,
  sidSpaModelingOperationError = 907,
  sidNodesNotSorted = 908,
  sidSorted = 909,
  sidInvalidConstraintGeometry = 910,
  sidAssocActionBodyIsInvalid = 911,
  sidDependencyReactorIsMissing = 912,
  sidSetErasedAssocStatus = 913,
  sidAssArrAbsentSrcBTR = 914,
  sidAssArrItemProviderId = 915,
  sidAssArrPathCurve = 916,
  sidAssArrGarbageItems = 917,
  sidErased = 918,
  sidIdViewObjsDxf = 919,
  sidInvalidDefinitionId = 920,
  sidActionStatus = 921,
  sidEvaluationQueue = 922,
  sidkChangedDirectly = 923,
  sidkParameterArray = 924,
  sidkZeroIdsFound = 925,
  sidEnterFileName = 926,
  sidFileToSave = 927,
  sidScalableVecGraphics = 928,
  sidLwScale = 929,
  sidFloatingPntPrecision = 930,
  sidEmptyImageBase = 931,
  sidImageBase = 932,
  sidImageURL = 933,
  sidScaleFactor = 934,
  sidOutputHeight = 935,
  sidOutputWidth = 936,
  sidUseHLRViewport = 937,
  sidNoYes = 938,
  sidUseBlendedGraphics = 939,
  sidSmallSVGPage = 940,
  sidLargeSVGPage = 941,
  sidSVGColorPolicy = 942,
  sidSVGColorOption = 943,
  sidDefaultImageExt = 944,
  sidGenericFontFamily = 945,
  sidUseGsModelForShadedVP = 946,
  sidDummyLastMessage = 947
};

enum OdResult {
  eOk = 0,
  eMakeMeProxy = 1,
  eInvalidDrawing = 2,
  eNotImplementedYet = 3,
  eNotApplicable = 4,
  eInvalidInput = 5,
  eInvalidFiler = 6,
  eAmbiguousInput = 7,
  eAmbiguousOutput = 8,
  eOutOfMemory = 9,
  eNoInterface = 10,
  eBufferTooSmall = 11,
  eInvalidOpenState = 12,
  eUnsupportedMethod = 13,
  eEntityInInactiveLayout = 14,
  eDuplicateHandle = 15,
  eNullHandle = 16,
  eBrokenHandle = 17,
  eUnknownHandle = 18,
  eHandleInUse = 19,
  eNullObjectPointer = 20,
  eNullObjectId = 21,
  eNullBlockName = 22,
  eContainerNotEmpty = 23,
  eNullEntityPointer = 24,
  eIllegalEntityType = 25,
  eKeyNotFound = 26,
  eDuplicateKey = 27,
  eInvalidIndex = 28,
  eCharacterNotFound = 29,
  eDuplicateIndex = 30,
  eAlreadyInDb = 31,
  eOutOfDisk = 32,
  eDeletedEntry = 33,
  eNegativeValueNotAllowed = 34,
  eInvalidExtents = 35,
  eInvalidAdsName = 36,
  eInvalidSymbolTableName = 37,
  eInvalidKey = 38,
  eWrongObjectType = 39,
  eWrongDatabase = 40,
  eObjectToBeDeleted = 41,
  eInvalidFileVersion = 42,
  eAnonymousEntry = 43,
  eIllegalReplacement = 44,
  eEndOfObject = 45,
  eEndOfFile = 46,
  eFileExists = 47,
  eCantOpenFile = 48,
  eFileCloseError = 49,
  eFileWriteError = 50,
  eNoFileName = 51,
  eFilerError = 52,
  eFileAccessErr = 53,
  eFileSystemErr = 54,
  eFileInternalErr = 55,
  eFileTooManyOpen = 56,
  eFileNotFound = 57,
  eUnknownFileType = 58,
  eIsReading = 59,
  eIsWriting = 60,
  eNotOpenForRead = 61,
  eNotOpenForWrite = 62,
  eNotThatKindOfClass = 63,
  eInvalidBlockName = 64,
  eMissingDxfField = 65,
  eDuplicateDxfField = 66,
  eInvalidGroupCode = 67,
  eInvalidResBuf = 68,
  eBadDxfSequence = 69,
  eInvalidRoundTripR14Data = 70,
  eVertexAfterFace = 71,
  eInvalidVertexIndex = 72,
  eOtherObjectsBusy = 73,
  eMustFirstAddBlockToDb = 74,
  eCannotNestBlockDefs = 75,
  eDwgRecoveredOK = 76,
  eDwgNotRecoverable = 77,
  eDxfPartiallyRead = 78,
  eDxfReadAborted = 79,
  eDxbPartiallyRead = 80,
  eDwgCRCError = 81,
  eDwgSentinelDoesNotMatch = 82,
  eDwgObjectImproperlyRead = 83,
  eNoInputFiler = 84,
  eDwgNeedsAFullSave = 85,
  eDxbReadAborted = 86,
  eDwkLockFileFound = 87,
  eWasErased = 88,
  ePermanentlyErased = 89,
  eWasOpenForRead = 90,
  eWasOpenForWrite = 91,
  eWasOpenForUndo = 92,
  eWasNotifying = 93,
  eWasOpenForNotify = 94,
  eOnLockedLayer = 95,
  eMustOpenThruOwner = 96,
  eSubentitiesStillOpen = 97,
  eAtMaxReaders = 98,
  eIsWriteProtected = 99,
  eIsXRefObject = 100,
  eNotAnEntity = 101,
  eHadMultipleReaders = 102,
  eInvalidBlkRecordName = 103,
  eDuplicateRecordName = 104,
  eNotXrefBlock = 105,
  eEmptyRecordName = 106,
  eXRefDependent = 107,
  eSelfReference = 108,
  eMissingSymbolTable = 109,
  eMissingSymbolTableRec = 110,
  eWasNotOpenForWrite = 111,
  eCloseWasNotifying = 112,
  eCloseModifyAborted = 113,
  eClosePartialFailure = 114,
  eCloseFailObjectDamaged = 115,
  eCannotBeErasedByCaller = 116,
  eCannotBeResurrected = 117,
  eInsertAfter = 118,
  eFixedAllErrors = 119,
  eLeftErrorsUnfixed = 120,
  eUnrecoverableErrors = 121,
  eNoDatabase = 122,
  eXdataSizeExceeded = 123,
  eCannotSaveHatchRoundtrip = 124,
  eHatchHasInconsistentPatParams = 125,
  eRegappIdNotFound = 126,
  eRepeatEntity = 127,
  eRecordNotInTable = 128,
  eIteratorDone = 129,
  eNullIterator = 130,
  eNotInBlock = 131,
  eOwnerNotInDatabase = 132,
  eOwnerNotOpenForRead = 133,
  eOwnerNotOpenForWrite = 134,
  eExplodeBeforeTransform = 135,
  eCannotScaleNonOrtho = 136,
  eCannotScaleNonUniformly = 137,
  eNotInDatabase = 138,
  eNotCurrentDatabase = 139,
  eIsAnEntity = 140,
  eCannotChangeActiveViewport = 141,
  eNotInPaperspace = 142,
  eCommandWasInProgress = 143,
  eGeneralModelingFailure = 144,
  eOutOfRange = 145,
  eNonCoplanarGeometry = 146,
  eDegenerateGeometry = 147,
  eInvalidAxis = 148,
  ePointNotOnEntity = 149,
  eSingularPoint = 150,
  eInvalidOffset = 151,
  eNonPlanarEntity = 152,
  eCannotExplodeEntity = 153,
  eStringTooLong = 154,
  eInvalidSymTableFlag = 155,
  eUndefinedLineType = 156,
  eInvalidTextStyle = 157,
  eTooFewLineTypeElements = 158,
  eTooManyLineTypeElements = 159,
  eExcessiveItemCount = 160,
  eIgnoredLinetypeRedef = 161,
  eBadUCS = 162,
  eBadPaperspaceView = 163,
  eSomeInputDataLeftUnread = 164,
  eNoInternalSpace = 165,
  eInvalidDimStyle = 166,
  eInvalidLayer = 167,
  eInvalidMlineStyle = 168,
  eDwgNeedsRecovery = 169,
  eRecoveryFailed = 170,
  eDeleteEntity = 171,
  eInvalidFix = 172,
  eBadLayerName = 173,
  eLayerGroupCodeMissing = 174,
  eBadColor = 175,
  eBadColorIndex = 176,
  eBadLinetypeName = 177,
  eBadLinetypeScale = 178,
  eBadVisibilityValue = 179,
  eProperClassSeparatorExpected = 180,
  eBadLineWeightValue = 181,
  ePagerError = 182,
  eOutOfPagerMemory = 183,
  ePagerWriteError = 184,
  eWasNotForwarding = 185,
  eInvalidIdMap = 186,
  eInvalidOwnerObject = 187,
  eOwnerNotSet = 188,
  eWrongSubentityType = 189,
  eTooManyVertices = 190,
  eTooFewVertices = 191,
  eNoActiveTransactions = 192,
  eTransactionIsActive = 193,
  eNotTopTransaction = 194,
  eTransactionOpenWhileCommandEnded = 195,
  eInProcessOfCommitting = 196,
  eNotNewlyCreated = 197,
  eLongTransReferenceError = 198,
  eNoWorkSet = 199,
  eAlreadyInGroup = 200,
  eNotInGroup = 201,
  eBadDwgFile = 202,
  eInvalidREFIID = 203,
  eInvalidNormal = 204,
  eInvalidStyle = 205,
  eCannotRestoreFromAcisFile = 206,
  eEmptyAcisFile = 207,
  eNLSFileNotAvailable = 208,
  eNotAllowedForThisProxy = 209,
  eNotSupportedInDwgApi = 210,
  ePolyWidthLost = 211,
  eNullExtents = 212,
  eExplodeAgain = 213,
  eBadDwgHeader = 214,
  eLockViolation = 215,
  eLockConflict = 216,
  eDatabaseObjectsOpen = 217,
  eLockChangeInProgress = 218,
  eVetoed = 219,
  eNoDocument = 220,
  eNotFromThisDocument = 221,
  eLISPActive = 222,
  eTargetDocNotQuiescent = 223,
  eDocumentSwitchDisabled = 224,
  eInvalidContext = 225,
  eCreateFailed = 226,
  eCreateInvalidName = 227,
  eSetFailed = 228,
  eDelDoesNotExist = 229,
  eDelIsModelSpace = 230,
  eDelLastLayout = 231,
  eDelUnableToSetCurrent = 232,
  eDelUnableToFind = 233,
  eRenameDoesNotExist = 234,
  eRenameIsModelSpace = 235,
  eRenameInvalidLayoutName = 236,
  eRenameLayoutAlreadyExists = 237,
  eRenameInvalidName = 238,
  eCopyDoesNotExist = 239,
  eCopyIsModelSpace = 240,
  eCopyFailed = 241,
  eCopyInvalidName = 242,
  eCopyNameExists = 243,
  eProfileDoesNotExist = 244,
  eInvalidProfileName = 245,
  eProfileIsInUse = 246,
  eRegistryAccessError = 247,
  eRegistryCreateError = 248,
  eBadDxfFile = 249,
  eUnknownDxfFileFormat = 250,
  eMissingDxfSection = 251,
  eInvalidDxfSectionName = 252,
  eNotDxfHeaderGroupCode = 253,
  eUndefinedDxfGroupCode = 254,
  eNotInitializedYet = 255,
  eInvalidDxf2dPoint = 256,
  eInvalidDxf3dPoint = 257,
  eBadlyNestedAppData = 258,
  eIncompleteBlockDefinition = 259,
  eIncompleteComplexObject = 260,
  eBlockDefInEntitySection = 261,
  eNoBlockBegin = 262,
  eDuplicateLayerName = 263,
  eBadPlotStyleName = 264,
  eDuplicateBlockName = 265,
  eBadPlotStyleType = 266,
  eBadPlotStyleNameHandle = 267,
  eUndefineShapeName = 268,
  eDuplicateBlockDefinition = 269,
  eMissingBlockName = 270,
  eBinaryDataSizeExceeded = 271,
  eObjectIsReferenced = 272,
  eInvalidThumbnailBitmap = 273,
  eDuplicateName = 274,
  eGuidNoAddress = 275,
  eMustBe0to2 = 276,
  eMustBe0to3 = 277,
  eMustBe0to4 = 278,
  eMustBe0to5 = 279,
  eMustBe0to8 = 280,
  eMustBe1to8 = 281,
  eMustBe1to15 = 282,
  eMustBePositive = 283,
  eMustBeNonNegative = 284,
  eMustBeNonZero = 285,
  eMustBe1to6 = 286,
  eNoPlotStyleTranslationTable = 287,
  ePlotStyleInColorDependentMode = 288,
  eMaxLayouts = 289,
  eNoClassId = 290,
  eUndoOperationNotAvailable = 291,
  eUndoNoGroupBegin = 292,
  eHatchTooDense = 293,
  eOpenFileCancelled = 294,
  eNotHandled = 295,
  eLibIntegrityBroken = 296,
  eAlreadyActive = 297,
  eAlreadyInactive = 298,
  eCodepageNotFound = 299,
  eIncorrectInitFileVersion = 300,
  eInternalFreetypeError = 301,
  eNoUCSPresent = 302,
  eBadObjType = 303,
  eBadProtocolExtension = 304,
  eHatchInvalidPatternName = 305,
  eNotTransactionResident = 306,
  eDwgFileIsEncrypted = 307,
  eInvalidPassword = 308,
  eDecryptionError = 309,
  eArithmeticOverflow = 310,
  eSkipObjPaging = 311,
  eStopPaging = 312,
  eInvalidDimStyleResBufData = 313,
  eExtendedError = 314,
  eGripOpFailure = 315,
  eGripOpNoRedrawGrip = 316,
  eGripOpGripHotToWarm = 317,
  eGripOpGetNewGripPoints = 318,
  eUnsupportedEarlyDwgVersion = 319,
  eCannotChangeColumnType = 320,
  eCustomSizeNotPossible = 321,
  eDataLinkAdapterNotFound = 322,
  eDataLinkInvalidAdapterId = 323,
  eDataLinkNotFound = 324,
  eDataLinkBadConnectionString = 325,
  eDataLinkNotUpdatedYet = 326,
  eDataLinkSourceNotFound = 327,
  eDataLinkConnectionFailed = 328,
  eDataLinkSourceUpdateNotAllowed = 329,
  eDataLinkSourceIsWriteProtected = 330,
  eDataLinkExcelNotFound = 331,
  eDataLinkOtherError = 332,
  eDeviceNotFound = 333,
  eDwgCrcDoesNotMatch = 334,
  eDwgShareDemandLoad = 335,
  eDwgShareReadAccess = 336,
  eDwgShareWriteAccess = 337,
  eFileMissingSections = 338,
  eFileSharingViolation = 339,
  eFiniteStateMachineError = 340,
  eGraphicsNotGenerated = 341,
  eHandleExists = 342,
  eIgnoredLinetypeRedefinition = 343,
  eIncompatiblePlotSettings = 344,
  eInternetBadPath = 345,
  eInternetBase = 346,
  eInternetCreateInternetSessionFailed = 347,
  eInternetDirectoryFull = 348,
  eInternetDiskFull = 349,
  eInternetFileAccessDenied = 350,
  eInternetFileGenericError = 351,
  eInternetFileNotFound = 352,
  eInternetFileOpenFailed = 353,
  eInternetGenericException = 354,
  eInternetHardwareError = 355,
  eInternetHttpAccessDenied = 356,
  eInternetHttpBadGateway = 357,
  eInternetHttpBadMethod = 358,
  eInternetHttpBadRequest = 359,
  eInternetHttpConflict = 360,
  eInternetHttpGatewayTimeout = 361,
  eInternetHttpLengthRequired = 362,
  eInternetHttpNoAcceptableResponse = 363,
  eInternetHttpNotSupported = 364,
  eInternetHttpObjectNotFound = 365,
  eInternetHttpOpenRequestFailed = 366,
  eInternetHttpPaymentRequired = 367,
  eInternetHttpPreconditionFailure = 368,
  eInternetHttpProxyAuthorizationRequired = 369,
  eInternetHttpRequestForbidden = 370,
  eInternetHttpRequestTooLarge = 371,
  eInternetHttpResourceGone = 372,
  eInternetHttpServerError = 373,
  eInternetHttpServiceUnavailable = 374,
  eInternetHttpTimedOut = 375,
  eInternetHttpUnsupportedMedia = 376,
  eInternetHttpUriTooLong = 377,
  eInternetHttpVersionNotSupported = 378,
  eInternetInCache = 379,
  eInternetInternetError = 380,
  eInternetInternetSessionConnectFailed = 381,
  eInternetInternetSessionOpenFailed = 382,
  eInternetInvalidAccessType = 383,
  eInternetInvalidFileHandle = 384,
  eInternetNoInternetSupport = 385,
  eInternetNotAnUrl = 386,
  eInternetNotImplemented = 387,
  eInternetNoWinInternet = 388,
  eInternetOK = 389,
  eInternetOldWinInternet = 390,
  eInternetProtocolNotSupported = 391,
  eInternetSharingViolation = 392,
  eInternetTooManyOpenFiles = 393,
  eInternetUnknownError = 394,
  eInternetUserCancelledTransfer = 395,
  eInternetValidUrl = 396,
  eInvalidEngineState = 397,
  eInvalidFaceVertexIndex = 398,
  eInvalidFileExtension = 399,
  eInvalidMeshVertexIndex = 400,
  eInvalidObjectId = 401,
  eInvalidPlotArea = 402,
  eInvalidPlotInfo = 403,
  eInvalidView = 404,
  eInvalidWindowArea = 405,
  eInvalidXrefObjectId = 406,
  eLayoutNotCurrent = 407,
  eMakeMeProxyAndResurrect = 408,
  eMustPlotToFile = 409,
  eCannotPlotToFile = 410,
  eNoCurrentConfig = 411,
  eNoErrorHandler = 412,
  eNoLabelBlock = 413,
  eNoLayout = 414,
  eNoMatchingMedia = 415,
  eNonePlotDevice = 416,
  eNoThumbnailBitmap = 417,
  eNotMultiPageCapable = 418,
  eNoViewAssociation = 419,
  eNullPtr = 420,
  eNumberOfCopiesNotSupported = 421,
  eObsoleteFileFormat = 422,
  ePageCancelled = 423,
  ePlotAlreadyStarted = 424,
  ePlotCancelled = 425,
  eRepeatedDwgRead = 426,
  eRowsMustMatchColumns = 427,
  eSecErrorCipherNotSupported = 428,
  eSecErrorComputingSignature = 429,
  eSecErrorDecryptingData = 430,
  eSecErrorEncryptingData = 431,
  eSecErrorGeneratingTimestamp = 432,
  eSecErrorReadingFile = 433,
  eSecErrorWritingFile = 434,
  eSecErrorWritingSignature = 435,
  eSecInitializationFailure = 436,
  eSecInvalidDigitalId = 437,
  eLoadFailed = 438,
  eSubSelectionSetEmpty = 439,
  eUnableToGetLabelBlock = 440,
  eUnableToGetViewAssociation = 441,
  eUnableToRemoveAssociation = 442,
  eUnableToSetLabelBlock = 443,
  eUnableToSetViewAssociation = 444,
  eUnableToSyncModelView = 445,
  eUnsupportedFileFormat = 446,
  eUserBreak = 447,
  eWasNotErased = 448,
  eWrongCellType = 449,
  eTxError = 450,
  eHiddenLayerNotAllowed = 451,
  eInvalidLicense = 452,
  eIncorrectDatabaseType = 453,
  eInvalidCategory = 454,
  eCryptProviderUnavailable = 455,
  eInvalidNumPCurves = 456,
  eNoTrimmigLoop = 457,
  eBrokenTrimmingLoop = 458,
  eBadApexLoop = 459,
  eLoopNotClosed = 460,
  eLoopIsNotOnFace = 461,
  eLoopSelfIntersecting = 462,
  eInvalidIntervals = 463,
  eEmptySet = 464,
  eInfinite = 465,
  eDataTooLarge = 466,
  eSyntaxError = 467,
  eDisabledInConfig = 468,
  eCantSetEnvVar = 469,
  eInvalidSurface = 470,
  eInvalidOrientation = 471,
  eLoopsIntersecting = 472,
  eInvalidEdge = 473,
  eNullEdgeCurve = 474,
  eNullFaceSurface = 475,
  eStartOrEndPntNotSet = 476,
  eIntervalIsTooShort = 477,
  eCurveLengthIsTooShort = 478,
  eCurveEndsMissed = 479,
  ePointNotOnCurve = 480,
  eInvalidProps = 481,
  eInvalidCurve = 482,
  eDiscontinuousCurve = 483,
  eParamHasNoValue = 484,
  eBrFileMissed = 485,
  eBrBrepMissed = 486,
  eBrComplexMissed = 487,
  eBrShellMissed = 488,
  eBrFaceMissed = 489,
  eBrLoopMissed = 490,
  eBrEdgeMissed = 491,
  eBrVertexMissed = 492,
  eBrEmptyLoop = 493,
  eCellNotFound = 494,
  eInvalidElementState = 495,
  eNoIntersections = 496,
  eMSmemcpySecureInvalidParameter = 497,
  eMSmemmoveSecureInvalidParameter = 498,
  eDaiInternalError = 499,
  eIncorrectSchema = 500,
  eSchemaNotDefined = 501,
  eEmptyRepository = 502,
  eFailedToEvaluate = 503,
  eFailedToEvaluateDependents = 504,
  eInvalidExpression = 505,
  eCyclicDependency = 506,
  eNullNodeId = 507,
  eNoNodeActive = 508,
  eGraphContainsProxies = 509,
  eStringNotAllowedInExpression = 510,
  eDummyLastError = 511
};

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdStreamBuf.html} Additional documentation.
 */
class OdStreamBuf extends OdRxObject {
  static cast(pObj: OdRxObject): OdStreamBuf;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdStreamBuf;
  static rxInit(): void;
  static rxUninit(): void;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  fileName(): OdString;
  isEof(): boolean;
  tell(): number;
  length(): number;
  truncate(): void;
  rewind(): void;
  seek(offset: number, seekType: FilerSeekType): number;
  getByte(): number;
  putByte(value: number): void;
  copyDataTo(pDestination: OdStreamBuf, sourceStart: number, sourceEnd: number): void;
  getShareMode(): number;
  getShareMode1(): FileShareMode;
};

enum FileAccessMode {
  kFileRead = -2147483648,
  kFileWrite = 1073741824,
  kFileTmp = 536870912,
  kFileDelete = 268435456,
  kNoFlushWhenClosed = 134217728,
  kFileReadWrite = -1073741824
};

enum FileCreationDisposition {
  kCreateNew = 1,
  kCreateAlways = 2,
  kOpenExisting = 3,
  kOpenAlways = 4,
  kTruncateExisting = 5
};

enum FileShareMode {
  kShareDenyReadWrite = 16,
  kShareDenyWrite = 32,
  kShareDenyRead = 48,
  kShareDenyNo = 64
};

enum FilerSeekType {
  kSeekFromStart = 0,
  kSeekFromCurrent = 1,
  kSeekFromEnd = 2
};

enum DwgVersion {
  kDHL_MC0_0 = 0,
  kDHL_AC1_2 = 1,
  kDHL_AC1_40 = 2,
  kDHL_AC1_50 = 3,
  kDHL_AC2_20 = 4,
  kDHL_AC2_10 = 5,
  kDHL_AC2_21 = 6,
  kDHL_AC2_22 = 7,
  kDHL_1001 = 8,
  kDHL_1002 = 9,
  vAC025 = 9,
  kDHL_1003 = 10,
  vAC026 = 10,
  kDHL_1004 = 11,
  vAC09 = 11,
  kDHL_1005 = 12,
  kDHL_1006 = 13,
  vAC10 = 13,
  kDHL_1007 = 14,
  kDHL_1008 = 15,
  kDHL_1009 = 16,
  vAC12 = 16,
  kDHL_1010 = 17,
  kDHL_1011 = 18,
  kDHL_1012 = 19,
  vAC13 = 19,
  kDHL_1013 = 20,
  vAC14beta = 20,
  kDHL_1014 = 21,
  vAC14 = 21,
  kDHL_1500 = 22,
  kDHL_1015 = 23,
  vAC15 = 23,
  kDHL_1800a = 24,
  kDHL_1800 = 25,
  vAC18 = 25,
  kDHL_2100a = 26,
  kDHL_1021 = 27,
  vAC21 = 27,
  kDHL_2400a = 28,
  kDHL_1024 = 29,
  vAC24 = 29,
  kDHL_2700a = 30,
  kDHL_1027 = 31,
  vAC27 = 31,
  kDHL_3200a = 32,
  kDHL_1032 = 33,
  vAC32 = 33,
  kDHL_PRECURR = 31,
  kDHL_CURRENT = 33,
  kDHL_Unknown = 32766,
  kDHL_Max = 32767
};

enum LineWeight {
  kLnWt000 = 0,
  kLnWt005 = 5,
  kLnWt009 = 9,
  kLnWt013 = 13,
  kLnWt015 = 15,
  kLnWt018 = 18,
  kLnWt020 = 20,
  kLnWt025 = 25,
  kLnWt030 = 30,
  kLnWt035 = 35,
  kLnWt040 = 40,
  kLnWt050 = 50,
  kLnWt053 = 53,
  kLnWt060 = 60,
  kLnWt070 = 70,
  kLnWt080 = 80,
  kLnWt090 = 90,
  kLnWt100 = 100,
  kLnWt106 = 106,
  kLnWt120 = 120,
  kLnWt140 = 140,
  kLnWt158 = 158,
  kLnWt200 = 200,
  kLnWt211 = 211,
  kLnWtByLayer = -1,
  kLnWtByBlock = -2,
  kLnWtByLwDefault = -3
};

enum PlotStyleNameType {
  kPlotStyleNameByLayer = 0,
  kPlotStyleNameByBlock = 1,
  kPlotStyleNameIsDictDefault = 2,
  kPlotStyleNameById = 3
};

enum MultiThreadedMode {
  kSTMode = 0,
  kMTLoading = 1,
  kMTRendering = 2
};

enum MeasurementValue {
  kEnglish = 0,
  kMetric = 1
};

enum UnitsValue {
  kUnitsUndefined = 0,
  kUnitsInches = 1,
  kUnitsFeet = 2,
  kUnitsMiles = 3,
  kUnitsMillimeters = 4,
  kUnitsCentimeters = 5,
  kUnitsMeters = 6,
  kUnitsKilometers = 7,
  kUnitsMicroinches = 8,
  kUnitsMils = 9,
  kUnitsYards = 10,
  kUnitsAngstroms = 11,
  kUnitsNanometers = 12,
  kUnitsMicrons = 13,
  kUnitsDecimeters = 14,
  kUnitsDekameters = 15,
  kUnitsHectometers = 16,
  kUnitsGigameters = 17,
  kUnitsAstronomical = 18,
  kUnitsLightYears = 19,
  kUnitsParsecs = 20,
  kUnitsUSSurveyFeet = 21,
  kUnitsUSSurveyInch = 22,
  kUnitsUSSurveyYard = 23,
  kUnitsUSSurveyMile = 24,
  kUnitsMax = 24
};

enum OsnapMode {
  kOsModeEnd = 1,
  kOsModeMid = 2,
  kOsModeCen = 3,
  kOsModeNode = 4,
  kOsModeQuad = 5,
  kOsModeIntersec = 6,
  kOsModeIns = 7,
  kOsModePerp = 8,
  kOsModeTan = 9,
  kOsModeNear = 10,
  kOsModeApint = 11,
  kOsModePar = 12,
  kOsModeStart = 13
};

enum ReferenceType {
  kSoftPointerRef = 0,
  kHardPointerRef = 1,
  kSoftOwnershipRef = 2,
  kHardOwnershipRef = 3
};

enum MaintReleaseVer {
  kMRelease0 = 0,
  kMRelease1 = 1,
  kMRelease2 = 2,
  kMRelease3 = 3,
  kMRelease4 = 4,
  kMRelease5 = 5,
  kMRelease6 = 6,
  kMRelease7 = 7,
  kMRelease8 = 8,
  kMRelease9 = 9,
  kMRelease10 = 10,
  kMRelease11 = 11,
  kMRelease12 = 12,
  kMRelease13 = 13,
  kMRelease14 = 14,
  kMRelease15 = 15,
  kMRelease16 = 16,
  kMRelease17 = 17,
  kMRelease18 = 18,
  kMRelease19 = 19,
  kMRelease20 = 20,
  kMRelease21 = 21,
  kMRelease22 = 22,
  kMRelease23 = 23,
  kMRelease24 = 24,
  kMRelease25 = 25,
  kMRelease26 = 26,
  kMRelease27 = 27,
  kMRelease28 = 28,
  kMRelease29 = 29,
  kMRelease30 = 30,
  kMRelease31 = 31,
  kMRelease32 = 32,
  kMRelease33 = 33,
  kMRelease34 = 34,
  kMRelease35 = 35,
  kMRelease36 = 36,
  kMRelease37 = 37,
  kMRelease38 = 38,
  kMRelease39 = 39,
  kMRelease40 = 40,
  kMRelease41 = 41,
  kMRelease42 = 42,
  kMRelease43 = 43,
  kMRelease44 = 44,
  kMRelease45 = 45,
  kMRelease46 = 46,
  kMRelease47 = 47,
  kMRelease48 = 48,
  kMRelease49 = 49,
  kMRelease50 = 50,
  kMRelease51 = 51,
  kMRelease52 = 52,
  kMRelease53 = 53,
  kMRelease54 = 54,
  kMRelease55 = 55,
  kMRelease56 = 56,
  kMRelease57 = 57,
  kMRelease58 = 58,
  kMRelease59 = 59,
  kMRelease60 = 60,
  kMRelease61 = 61,
  kMRelease62 = 62,
  kMRelease63 = 63,
  kMRelease64 = 64,
  kMRelease65 = 65,
  kMRelease66 = 66,
  kMRelease67 = 67,
  kMRelease68 = 68,
  kMRelease69 = 69,
  kMRelease70 = 70,
  kMRelease71 = 71,
  kMRelease72 = 72,
  kMRelease73 = 73,
  kMRelease74 = 74,
  kMRelease75 = 75,
  kMRelease76 = 76,
  kMRelease77 = 77,
  kMRelease78 = 78,
  kMRelease79 = 79,
  kMRelease80 = 80,
  kMRelease81 = 81,
  kMRelease82 = 82,
  kMRelease83 = 83,
  kMRelease84 = 84,
  kMRelease85 = 85,
  kMRelease86 = 86,
  kMRelease87 = 87,
  kMRelease88 = 88,
  kMRelease89 = 89,
  kMRelease90 = 90,
  kMRelease91 = 91,
  kMRelease92 = 92,
  kMRelease93 = 93,
  kMRelease94 = 94,
  kMRelease95 = 95,
  kMRelease96 = 96,
  kMRelease97 = 97,
  kMRelease98 = 98,
  kMRelease99 = 99,
  kMRelease100 = 100,
  kMRelease101 = 101,
  kMRelease102 = 102,
  kMRelease103 = 103,
  kMRelease104 = 104,
  kMRelease105 = 105,
  kMRelease106 = 106,
  kMRelease107 = 107,
  kMRelease108 = 108,
  kMRelease109 = 109,
  kMRelease110 = 110,
  kMRelease111 = 111,
  kMRelease112 = 112,
  kMRelease113 = 113,
  kMRelease114 = 114,
  kMRelease115 = 115,
  kMRelease116 = 116,
  kMRelease117 = 117,
  kMRelease118 = 118,
  kMRelease119 = 119,
  kMRelease120 = 120,
  kMRelease121 = 121,
  kMRelease122 = 122,
  kMRelease123 = 123,
  kMRelease124 = 124,
  kMRelease125 = 125,
  kMRelease126 = 126,
  kMRelease127 = 127,
  kMRelease128 = 128,
  kMRelease129 = 129,
  kMRelease130 = 130,
  kMRelease131 = 131,
  kMRelease132 = 132,
  kMRelease133 = 133,
  kMRelease134 = 134,
  kMRelease135 = 135,
  kMRelease136 = 136,
  kMRelease137 = 137,
  kMRelease138 = 138,
  kMRelease139 = 139,
  kMRelease140 = 140,
  kMRelease141 = 141,
  kMRelease142 = 142,
  kMRelease143 = 143,
  kMRelease144 = 144,
  kMRelease145 = 145,
  kMRelease146 = 146,
  kMRelease147 = 147,
  kMRelease148 = 148,
  kMRelease149 = 149,
  kMRelease150 = 150,
  kMRelease151 = 151,
  kMRelease152 = 152,
  kMRelease153 = 153,
  kMRelease154 = 154,
  kMRelease155 = 155,
  kMRelease156 = 156,
  kMRelease157 = 157,
  kMRelease158 = 158,
  kMRelease159 = 159,
  kMRelease160 = 160,
  kMRelease161 = 161,
  kMRelease162 = 162,
  kMRelease163 = 163,
  kMRelease164 = 164,
  kMRelease165 = 165,
  kMRelease166 = 166,
  kMRelease167 = 167,
  kMRelease168 = 168,
  kMRelease169 = 169,
  kMRelease170 = 170,
  kMRelease171 = 171,
  kMRelease172 = 172,
  kMRelease173 = 173,
  kMRelease174 = 174,
  kMRelease175 = 175,
  kMRelease176 = 176,
  kMRelease177 = 177,
  kMRelease178 = 178,
  kMRelease179 = 179,
  kMRelease180 = 180,
  kMRelease181 = 181,
  kMRelease182 = 182,
  kMRelease183 = 183,
  kMRelease184 = 184,
  kMRelease185 = 185,
  kMRelease186 = 186,
  kMRelease187 = 187,
  kMRelease188 = 188,
  kMRelease189 = 189,
  kMRelease190 = 190,
  kMRelease191 = 191,
  kMRelease192 = 192,
  kMRelease193 = 193,
  kMRelease194 = 194,
  kMRelease195 = 195,
  kMRelease196 = 196,
  kMRelease197 = 197,
  kMRelease198 = 198,
  kMRelease199 = 199,
  kMRelease200 = 200,
  kMRelease201 = 201,
  kMRelease202 = 202,
  kMRelease203 = 203,
  kMRelease204 = 204,
  kMRelease205 = 205,
  kMRelease206 = 206,
  kMRelease207 = 207,
  kMRelease208 = 208,
  kMRelease209 = 209,
  kMRelease210 = 210,
  kMRelease211 = 211,
  kMRelease212 = 212,
  kMRelease213 = 213,
  kMRelease214 = 214,
  kMRelease215 = 215,
  kMRelease216 = 216,
  kMRelease217 = 217,
  kMRelease218 = 218,
  kMRelease219 = 219,
  kMRelease220 = 220,
  kMRelease221 = 221,
  kMRelease222 = 222,
  kMRelease223 = 223,
  kMRelease224 = 224,
  kMRelease225 = 225,
  kMRelease226 = 226,
  kMRelease227 = 227,
  kMRelease228 = 228,
  kMRelease229 = 229,
  kMRelease230 = 230,
  kMRelease231 = 231,
  kMRelease232 = 232,
  kMRelease233 = 233,
  kMRelease234 = 234,
  kMRelease235 = 235,
  kMRelease236 = 236,
  kMRelease237 = 237,
  kMRelease238 = 238,
  kMRelease239 = 239,
  kMRelease240 = 240,
  kMRelease241 = 241,
  kMRelease242 = 242,
  kMRelease243 = 243,
  kMRelease244 = 244,
  kMRelease245 = 245,
  kMRelease246 = 246,
  kMRelease247 = 247,
  kMRelease248 = 248,
  kMRelease249 = 249,
  kMRelease250 = 250,
  kMRelease251 = 251,
  kMRelease252 = 252,
  kMRelease253 = 253,
  kMRelease254 = 254,
  kMRelease255 = 255,
  kMReleaseFirstValid1500 = 41,
  kMReleaseCurrent = 55,
  kMReleaseUnknown = 126,
  kMReleaseMax = 127,
  kMRelease2010Max = 255
};

enum Intersect {
  kOnBothOperands = 0,
  kExtendThis = 1,
  kExtendArg = 2,
  kExtendBoth = 3
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/RText.html} Additional documentation.
 */
class RText extends OdDbEntity {
  constructor(arg0: RText);
  static cast(pObj: OdRxObject): RText;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): RText;
  static rxInit(): void;
  static rxUninit(): void;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  normal(): OdGeVector3d;
  setNormal(normal: OdGeVector3d): void;
  getPoint(): OdGePoint3d;
  setPoint(point: OdGePoint3d): void;
  getRotAngle(): number;
  setRotAngle(rotAngle: number): void;
  getHeight(): number;
  setHeight(height: number): void;
  isStringExpression(): boolean;
  setToExpression(isExpression: boolean): void;
  enabledMTextSequences(): boolean;
  enableMTextSequences(enable: boolean): void;
  getStringContents(): OdString;
  setStringContents(stringContents: OdString): void;
  textStyleId(): OdDbObjectId;
  textStyleName(): OdString;
  setTextStyle(textStyleId: OdDbObjectId): void;
  setTextStyle1(name: OdString): void;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): void;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): void;
  subWorldDraw(pWd: OdGiWorldDraw): boolean;
  subTransformBy(xfm: OdGeMatrix3d): OdResult;
  subGetTransformedCopy(mat: OdGeMatrix3d, pCopy: OdDbEntity): OdResult;
  subClose(): void;
  subExplode(entitySet: OdRxObjectPtrArray): OdResult;
  explodeGeometry(entitySet: OdRxObjectPtrArray): OdResult;
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdError_InvalidResBuf.html} Additional documentation.
 */
class OdError_InvalidResBuf extends OdError {
  constructor();
  constructor(arg0: OdError_InvalidResBuf);
  static ctr1(arg0: OdError_InvalidResBuf): OdError_InvalidResBuf;
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdResBuf.html} Additional documentation.
 */
class OdResBuf extends OdRxObject {
  static cast(pObj: OdRxObject): OdResBuf;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdResBuf;
  static rxInit(): void;
  static rxUninit(): void;
  static newRb(resType: number): OdResBuf;
  static newRb1(resType: number, resVal: boolean): OdResBuf;
  static newRb2(resType: number, resVal: number): OdResBuf;
  static newRb3(resType: number, resVal: number): OdResBuf;
  static newRb4(resType: number, resVal: number): OdResBuf;
  static newRb5(resType: number, resVal: number): OdResBuf;
  static newRb6(resType: number, resVal: number): OdResBuf;
  static newRb7(resType: number, resVal: number): OdResBuf;
  static newRb8(resType: number, resVal: number): OdResBuf;
  static newRb9(resType: number, resVal: number): OdResBuf;
  static newRb10(resType: number, resVal: number): OdResBuf;
  static newRb11(resType: number, resVal: OdGePoint2d): OdResBuf;
  static newRb12(resType: number, resVal: OdGePoint3d): OdResBuf;
  static newRb13(resType: number, resVal: OdGeVector2d): OdResBuf;
  static newRb14(resType: number, resVal: OdGeVector3d): OdResBuf;
  static newRb15(resType: number, resVal: OdString): OdResBuf;
  static newRb18(resType: number, resVal: OdCmColor): OdResBuf;
  static newRb19(resType: number, id: OdDbObjectId): OdResBuf;
  static newRb20(resType: number, pSSet: OdDbSelectionSet): OdResBuf;
  static newRb21(resType: number, pNestedRb: OdResBuf): OdResBuf;
  static setAssertIndexByNewRb(index: number): void;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  copyFrom(pRb: OdRxObject): void;
  restype(): number;
  setRestype(resType: number): void;
  next(): OdResBuf;
  last(): OdResBuf;
  insert(pRb: OdResBuf): OdResBuf;
  setNext(pRb: OdResBuf): OdResBuf;
  getString(): OdString;
  setString(sValue: OdString): void;
  getBool(): boolean;
  setBool(bValue: boolean): void;
  getInt8(): number;
  setInt8(iValue: number): void;
  getInt16(): number;
  setInt16(iValue: number): void;
  getInt32(): number;
  setInt32(iValue: number): void;
  getInt64(): number;
  setInt64(iValue: number): void;
  getDouble(): number;
  setDouble(realValue: number): void;
  getPoint2d(): OdGePoint2d;
  setPoint2d(gePoint: OdGePoint2d): void;
  getPoint3d(): OdGePoint3d;
  setPoint3d(gePoint: OdGePoint3d): void;
  getVector2d(): OdGeVector2d;
  setVector2d(geVector: OdGeVector2d): void;
  getVector3d(): OdGeVector3d;
  setVector3d(val: OdGeVector3d): void;
  getBinaryChunk(): OdBinaryData;
  setBinaryChunk(bChunk: OdBinaryData): void;
  getColor(): OdCmColor;
  setColor(cmColor: OdCmColor): void;
  getResBuf(): OdResBuf;
  setResBuf(pResBuf: OdResBuf): void;
  getHandle(): OdDbHandle;
  setHandle(vHandle: OdDbHandle): void;
  getEntName(): OdDbObjectId;
  setObjectId(idObject: OdDbObjectId): void;
  getObjectId(pDb: OdDbDatabase): OdDbObjectId;
  getPickSet(): OdDbSelectionSet;
  setPickSet(pSSet: OdDbSelectionSet): void;
};

enum ValueType {
  kRtNone = 5000,
  kRtDouble = 5001,
  kRtPoint2d = 5002,
  kRtInt16 = 5003,
  kRtAngle = 5004,
  kRtString = 5005,
  kRtEntName = 5006,
  kRtPickSet = 5007,
  kRtOrient = 5008,
  kRtPoint3d = 5009,
  kRtInt32 = 5010,
  kRtColor = 5011,
  kRtVoid = 5014,
  kRtListBeg = 5016,
  kRtListEnd = 5017,
  kRtDote = 5018,
  kRtNil = 5019,
  kRtDXF0 = 5020,
  kRtT = 5021,
  kRtResBuf = 5023,
  kRtBool = 290,
  kRtInt8 = 280,
  kRtVector2d = 5002,
  kRtVector3d = 5009,
  kRtBinaryChunk = 310,
  kRtHandle = 320,
  kRtObjectId = 330,
  kRtSoftPointerId = 330,
  kRtHardPointerId = 340,
  kRtSoftOwnershipId = 350,
  kRtHardOwnershipId = 360,
  kDxfInvalid = -9999,
  kDxfXDictionary = -6,
  kDxfPReactors = -5,
  kDxfOperator = -4,
  kDxfXDataStart = -3,
  kDxfHeaderId = -2,
  kDxfFirstEntId = -2,
  kDxfEnd = -1,
  kDxfStart = 0,
  kDxfText = 1,
  kDxfXRefPath = 1,
  kDxfShapeName = 2,
  kDxfBlockName = 2,
  kDxfAttributeTag = 2,
  kDxfSymbolTableName = 2,
  kDxfMstyleName = 2,
  kDxfSymTableRecName = 2,
  kDxfAttributePrompt = 3,
  kDxfDimStyleName = 3,
  kDxfLinetypeProse = 3,
  kDxfTextFontFile = 3,
  kDxfDescription = 3,
  kDxfDimPostStr = 3,
  kDxfTextBigFontFile = 4,
  kDxfDimAPostStr = 4,
  kDxfCLShapeName = 4,
  kDxfSymTableRecComments = 4,
  kDxfHandle = 5,
  kDxfDimBlk = 5,
  kDxfDimBlk1 = 6,
  kDxfLinetypeName = 6,
  kDxfDimBlk2 = 7,
  kDxfTextStyleName = 7,
  kDxfLayerName = 8,
  kDxfCLShapeText = 9,
  kDxfXCoord = 10,
  kDxfYCoord = 20,
  kDxfZCoord = 30,
  kDxfElevation = 38,
  kDxfThickness = 39,
  kDxfReal = 40,
  kDxfViewportHeight = 40,
  kDxfTxtSize = 40,
  kDxfTxtStyleXScale = 41,
  kDxfViewWidth = 41,
  kDxfViewportAspect = 41,
  kDxfTxtStylePSize = 42,
  kDxfViewLensLength = 42,
  kDxfViewFrontClip = 43,
  kDxfViewBackClip = 44,
  kDxfShapeXOffset = 44,
  kDxfShapeYOffset = 45,
  kDxfViewHeight = 45,
  kDxfShapeScale = 46,
  kDxfPixelScale = 47,
  kDxfLinetypeScale = 48,
  kDxfDashLength = 49,
  kDxfMlineOffset = 49,
  kDxfLinetypeElement = 49,
  kDxfAngle = 50,
  kDxfViewportSnapAngle = 50,
  kDxfViewportTwist = 51,
  kDxfVisibility = 60,
  kDxfLayerLinetype = 61,
  kDxfColor = 62,
  kDxfHasSubentities = 66,
  kDxfViewportVisibility = 67,
  kDxfViewportActive = 68,
  kDxfViewportNumber = 69,
  kDxfInt16 = 70,
  kDxfViewMode = 71,
  kDxfCircleSides = 72,
  kDxfViewportZoom = 73,
  kDxfViewportIcon = 74,
  kDxfViewportSnap = 75,
  kDxfViewportGrid = 76,
  kDxfViewportSnapStyle = 77,
  kDxfViewportSnapPair = 78,
  kDxfRegAppFlags = 71,
  kDxfTxtStyleFlags = 71,
  kDxfLinetypeAlign = 72,
  kDxfLinetypePDC = 73,
  kDxfInt32 = 90,
  kDxfSubclass = 100,
  kDxfEmbeddedObjectStart = 101,
  kDxfControlString = 102,
  kDxfDimVarHandle = 105,
  kDxfUCSOrg = 110,
  kDxfUCSOriX = 111,
  kDxfUCSOriY = 112,
  kDxfXReal = 140,
  kDxfInt64 = 160,
  kDxfXInt16 = 170,
  kDxfNormalX = 210,
  kDxfNormalY = 220,
  kDxfNormalZ = 230,
  kDxfXXInt16 = 270,
  kDxfInt8 = 280,
  kDxfRenderMode = 281,
  kDxfBool = 290,
  kDxfXTextString = 300,
  kDxfBinaryChunk = 310,
  kDxfArbHandle = 320,
  kDxfSoftPointerId = 330,
  kDxfHardPointerId = 340,
  kDxfSoftOwnershipId = 350,
  kDxfHardOwnershipId = 360,
  kDxfLineWeight = 370,
  kDxfPlotStyleNameType = 380,
  kDxfPlotStyleNameId = 390,
  kDxfXXXInt16 = 400,
  kDxfLayoutName = 410,
  kDxfComment = 999,
  kDxfXdAsciiString = 1000,
  kDxfRegAppName = 1001,
  kDxfXdControlString = 1002,
  kDxfXdLayerName = 1003,
  kDxfXdBinaryChunk = 1004,
  kDxfXdHandle = 1005,
  kDxfXdXCoord = 1010,
  kDxfXdYCoord = 1020,
  kDxfXdZCoord = 1030,
  kDxfXdWorldXCoord = 1011,
  kDxfXdWorldYCoord = 1021,
  kDxfXdWorldZCoord = 1031,
  kDxfXdWorldXDisp = 1012,
  kDxfXdWorldYDisp = 1022,
  kDxfXdWorldZDisp = 1032,
  kDxfXdWorldXDir = 1013,
  kDxfXdWorldYDir = 1023,
  kDxfXdWorldZDir = 1033,
  kDxfXdReal = 1040,
  kDxfXdDist = 1041,
  kDxfXdScale = 1042,
  kDxfXdInteger16 = 1070,
  kDxfXdInteger32 = 1071
};

enum DictIterType {
  kDictSorted = 0,
  kDictCollated = 1,
  kDictReversed = 2
};

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdRxIterator.html} Additional documentation.
 */
class OdRxIterator extends OdRxObject {
  static cast(pObj: OdRxObject): OdRxIterator;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdRxIterator;
  static rxInit(): void;
  static rxUninit(): void;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  done(): boolean;
  next(): boolean;
  object(): OdRxObjectPtr;
};

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdRxModule.html} Additional documentation.
 */
class OdRxModule extends OdRxObject {
  static cast(pObj: OdRxObject): OdRxModule;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdRxModule;
  static rxInit(): void;
  static rxUninit(): void;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  deleteModule(): void;
  initApp(): void;
  uninitApp(): void;
  moduleName(): OdString;
};

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdRxObjectPtr.html} Additional documentation.
 */
class OdRxObjectPtr extends OdBaseObjectPtr {
  constructor();
  constructor(pSource: OdRxObject, arg1: OdRxObjMod);
  constructor(pSource: OdRxObject);
  attach(pObject: OdRxObject): void;
  release(): void;
  detach(): OdRxObject;
  get(): OdRxObject;
  get1(): OdRxObject;
  static ctr1(pSource: OdRxObjectPtr): OdRxObjectPtr;
  static ctr2(pSource: OdBaseObjectPtr): OdRxObjectPtr;
};

enum OdRxObjMod {
  kOdRxObjAttach = 0
};

enum Ordering {
  kLessThan = -1,
  kEqual = 0,
  kGreaterThan = 1,
  kNotOrderable = 2
};

enum MTSupport {
  kMTRender = 1,
  kMTRenderInBlock = 2,
  kMTRenderNested = 4,
  kMTRenderReserved = 8,
  kMTRenderMask = 15,
  kMTLoading = 128,
  kHistoryAware = 256
};

enum OverrulingType {
  kDrawableOverrule = 0,
  kObjectOverrule = 1,
  kPropertiesOverrule = 2,
  kGeometryOverrule = 3,
  kHighlightOverrule = 4,
  kSubentityOverrule = 5,
  kGripOverrule = 6,
  kTransformOverrule = 7,
  kOsnapOverrule = 8,
  kVisibilityOverrule = 9,
  kTotalOverrules = 10
};

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdRxObject.html} Additional documentation.
 */
class OdRxObject {
  static cast(pointer: OdRxObject): OdRxObjectPtr;
  static desc(): OdRxClass;
  static rxInit(): void;
  static rxUninit(): void;
  queryX(pClass: OdRxClass): OdRxObject;
  x(pClass: OdRxClass): OdRxObject;
  isA(): OdRxClass;
  addRef(): void;
  release(): void;
  numRefs(): number;
  isKindOf(pClass: OdRxClass): boolean;
  clone(): OdRxObjectPtr;
  copyFrom(pSource: OdRxObject): void;
  comparedTo(pOther: OdRxObject): Ordering;
  isEqualTo(pOther: OdRxObject): boolean;
};

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdRxClass.html} Additional documentation.
 */
class OdRxClass extends OdRxObject {
  static cast(pObj: OdRxObject): OdRxClass;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdRxClass;
  static rxInit(): void;
  static rxUninit(): void;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  addX(pProtocolClass: OdRxClass, pProtocolObject: OdRxObject): OdRxObjectPtr;
  getX(pProtocolClass: OdRxClass): OdRxObjectPtr;
  delX(pProtocolClass: OdRxClass): OdRxObjectPtr;
  create(): OdRxObjectPtr;
  appName(): OdString;
  dxfName(): OdString;
  name(): OdString;
  getClassVersion(pMaintReleaseVer: MaintReleaseVer): DwgVersion;
  proxyFlags(): number;
  isDerivedFrom(pClass: OdRxClass): boolean;
  myParent(): OdRxClass;
  module(): OdRxModule;
  customFlags(): number;
  members(): OdRxMemberCollection;
  attributes(): OdRxAttributeCollection;
  attributes1(): OdRxAttributeCollection;
};

class OdRxObjectPtrArray extends OdArray<OdRxObjectPtr> { };

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdDbSelectionMethod.html} Additional documentation.
 */
class OdDbSelectionMethod extends OdRxObject {
  static cast(pObj: OdRxObject): OdDbSelectionMethod;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdDbSelectionMethod;
  static rxInit(): void;
  static rxUninit(): void;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
};

enum Mode {
  kPoint = 0,
  kBox = 1,
  kWindow = 2,
  kCrossing = 3,
  kFence = 4,
  kWPoly = 5,
  kCPoly = 6
};

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdSelectionSetIterator.html} Additional documentation.
 */
class OdSelectionSetIterator extends OdRxObject {
  static cast(pObj: OdRxObject): OdSelectionSetIterator;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdSelectionSetIterator;
  static rxInit(): void;
  static rxUninit(): void;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  method(): OdDbSelectionMethod;
  done(): boolean;
  next(): boolean;
  subentCount(): number;
  getSubentity(i: number, path: OdDbBaseFullSubentPath): boolean;
  id(): OdDbStub;
};

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdSelectionSet.html} Additional documentation.
 */
class OdSelectionSet extends OdRxObject {
  static cast(pObj: OdRxObject): OdSelectionSet;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdSelectionSet;
  static rxInit(): void;
  static rxUninit(): void;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  baseDatabase(): OdRxObject;
  newIterator(): OdSelectionSetIterator;
  numEntities(): number;
  subentCount(arg0: OdDbStub): number;
  append(entityId: OdDbStub, pMethod: OdDbSelectionMethod): void;
  append1(subent: OdDbBaseFullSubentPath, pMethod: OdDbSelectionMethod): void;
  append2(pSSet: OdSelectionSet): void;
  remove(entityId: OdDbStub): void;
  remove1(subent: OdDbBaseFullSubentPath): void;
  remove2(pSSet: OdSelectionSet): void;
  isMember(entityId: OdDbStub): boolean;
  isMember1(subent: OdDbBaseFullSubentPath): boolean;
  method(entityId: OdDbStub): OdDbSelectionMethod;
  clear(): void;
};

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdDbVisualSelection.html} Additional documentation.
 */
class OdDbVisualSelection extends OdDbSelectionMethod {
  static cast(pObj: OdRxObject): OdDbVisualSelection;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdDbVisualSelection;
  static rxInit(): void;
  static rxUninit(): void;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  viewport(): OdDbStub;
  points(): OdGePoint3dArray;
  mode(): Mode;
};

enum SubentSelectionMode {
  kDisableSubents = 0,
  kEnableSubents = 1,
  kIncludeViewport = 2,
  kNestedEntities = 4
};

enum TextHorzMode {
  kTextLeft = 0,
  kTextCenter = 1,
  kTextRight = 2,
  kTextAlign = 3,
  kTextMid = 4,
  kTextFit = 5
};

enum TextVertMode {
  kTextBase = 0,
  kTextBottom = 1,
  kTextVertMid = 2,
  kTextTop = 3
};

enum LineSpacingStyle {
  kAtLeast = 1,
  kExactly = 2
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbXRefMan.html} Additional documentation.
 */
class OdDbXRefMan {
  constructor();
  constructor(arg0: OdDbXRefMan);
  static load(pHostDb: OdDbDatabase, xrefBlockname: OdString): OdResult;
  static load1(xrefBTRids: OdDbObjectIdArray): OdResult;
  static load2(pBTR: OdDbBlockTableRecord): OdResult;
  static loadAll(pHostDb: OdDbDatabase, verify: boolean): OdResult;
  static unload(pBTR: OdDbBlockTableRecord): void;
  static unload1(xrefBTRids: OdDbObjectIdArray): void;
  static unloadAll(pHostDb: OdDbDatabase): void;
  static bind(pBTR: OdDbBlockTableRecord, insertBind: boolean): OdResult;
  static detach(pBTR: OdDbBlockTableRecord): OdResult;
  static setOverlaid(pBTR: OdDbBlockTableRecord, overlaid: boolean): void;
  static ctr1(arg0: OdDbXRefMan): OdDbXRefMan;
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbXRefManExt.html} Additional documentation.
 */
class OdDbXRefManExt {
  constructor();
  constructor(arg0: OdDbXRefManExt);
  static addNewXRefDefBlock(pDb: OdDbDatabase, pathName: OdString, blockName: OdString, overlaid: boolean, password: OdPassword, handle: OdDbHandle): OdDbBlockTableRecord;
  static addNewXRefDependentLayer(pXRefBlock: OdDbBlockTableRecord, layerName: OdString): OdDbLayerTableRecord;
  static addNewXRefDependentLayer1(xRefBlockId: OdDbObjectId, layerName: OdString): OdDbLayerTableRecord;
  static addNewXRefDependentLinetype(pXRefBlock: OdDbBlockTableRecord, linetypeName: OdString): OdDbLinetypeTableRecord;
  static addNewXRefDependentLinetype1(xRefBlockId: OdDbObjectId, linetypeName: OdString): OdDbLinetypeTableRecord;
  static addNewXRefDependentTextStyle(pXRefBlock: OdDbBlockTableRecord, textStyleName: OdString): OdDbTextStyleTableRecord;
  static addNewXRefDependentTextStyle1(xRefBlockId: OdDbObjectId, textStyleName: OdString): OdDbTextStyleTableRecord;
  static addNestedXRefId(pXRefBlock: OdDbBlockTableRecord, nestedBlockId: OdDbObjectId): void;
  static getNestedXRefIds(pXRefBlock: OdDbBlockTableRecord, ids: OdDbObjectIdArray): void;
  static getSymbolTableRecordXrefBlockId(pRec: OdDbSymbolTableRecord): OdDbObjectId;
  static bindRecords(ids: OdDbObjectIdArray, pHostDatabase: OdDbDatabase): OdResult;
  static ctr1(arg0: OdDbXRefManExt): OdDbXRefManExt;
};

const preRun: Array<() => void>;
const postRun: Array<() => void>;
let loadWasmError: (error?: Error) => void;
let canvas: HTMLCanvasElement | any;
let print: (text?: string) => void;
let printErr: (text?: string) => void;
let setStatus: (text?: string) => void;
let monitorRunDependencies: (runDependencies:any) => void;
let onAbort: (what: any) => void;
let TOTAL_MEMORY: number;
let ctx: any;
const HEAP8: any;
const openUrl: any;
let noImageDecoding: any;
const _FS: any;
const HpTrc: { P2N: any, Usd: number };
} 
