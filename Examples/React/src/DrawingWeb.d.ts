declare namespace Module {
    class CadCore {
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
        toJSArray(): Array<T>
    };
    
    class OdVector<T> {
        push_back(value: T): void;
        resize(size: number): void;
        size(): number;
        get(index: number): T;
        set(index: number, value: T): boolean;
        toJSArray(): Array<T>
    };
/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdCmColor.html} Additional documentation.
 */
class OdCmColor extends OdCmColorBase {
  constructor();
  constructor(color: OdCmColor);
  static odcmGetColorFromColorBookName(color: OdCmColor, bookMap: BooksMap, bookName: OdString, colorName: OdString): OdResult;
  getDescription(): number;
  getExplanation(): number;
  colorMethod(): ColorMethod;
  setColorMethod(colorMethod: ColorMethod): number;
  isByColor(): boolean;
  isByLayer(): boolean;
  isByBlock(): boolean;
  isByACI(): boolean;
  isForeground(): boolean;
  isByDgnIndex(): boolean;
  isNone(): boolean;
  color(): number;
  setColor(color: number): number;
  setRGB(red: number, green: number, blue: number): number;
  setRed(red: number): number;
  setGreen(green: number): number;
  setBlue(blue: number): number;
  red(): number;
  green(): number;
  blue(): number;
  colorIndex(): number;
  setColorIndex(colorIndex: number): number;
  setNames(colorName: OdString, bookName: OdString): boolean;
  colorName(): number;
  bookName(): number;
  colorNameForDisplay(): number;
  entityColor(): OdCmEntityColor;
  getDictionaryKey(): number;
  setNamesFromDictionaryKey(dictionaryKey: OdString): boolean;
  dwgIn(pFiler: OdDbDwgFiler): number;
  dwgOut(pFiler: OdDbDwgFiler): number;
  dxfIn(pFiler: OdDbDxfFiler, groupCodeOffset: number): number;
  dxfOut(pFiler: OdDbDxfFiler, groupCodeOffset: number): number;
  audit(pAuditInfo: OdDbAuditInfo): number;
  dwgInAsTrueColor(pFiler: OdDbDwgFiler): number;
  dwgOutAsTrueColor(pFiler: OdDbDwgFiler): number;
  dxfIn1(pFiler: OdDbDxfFiler, groupCodeOffset: number, bFixColor: boolean): number;
};

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdCmColorBase.html} Additional documentation.
 */
class OdCmColorBase {
  colorMethod(): ColorMethod;
  setColorMethod(colorMethod: ColorMethod): number;
  isByColor(): boolean;
  isByLayer(): boolean;
  isByBlock(): boolean;
  isByACI(): boolean;
  isForeground(): boolean;
  isByDgnIndex(): boolean;
  color(): number;
  setColor(color: number): number;
  setRGB(red: number, green: number, blue: number): number;
  setRed(red: number): number;
  setGreen(green: number): number;
  setBlue(blue: number): number;
  red(): number;
  green(): number;
  blue(): number;
  colorIndex(): number;
  setColorIndex(colorIndex: number): number;
  setNames(colorName: OdString, bookName: OdString): boolean;
  colorName(): number;
  bookName(): number;
  colorNameForDisplay(): number;
};

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdCmEntityColor.html} Additional documentation.
 */
class OdCmEntityColor {
  constructor();
  constructor(color: OdCmEntityColor);
  constructor(red: number, green: number, blue: number);
  static setColorMethod1(pRGBM: number, colorMethod: ColorMethod): number;
  static colorMethod1(pRGBM: number): ColorMethod;
  static setColor1(pRGBM: number, color: number): number;
  static color1(pRGBM: number): number;
  static setColorIndex1(pRGBM: number, colorIndex: number): number;
  static setDgnColorIndex(pRGBM: number, colorIndex: number): number;
  static colorIndex1(pRGBM: number): number;
  static setRGB1(pRGBM: number, red: number, green: number, blue: number): number;
  static setRed1(pRGBM: number, red: number): number;
  static setGreen1(pRGBM: number, green: number): number;
  static setBlue1(pRGBM: number, blue: number): number;
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
  static setTrueColor1(pRGBM: number): number;
  static lookUpRGB(colorIndex: number): number;
  static lookUpACI(red: number, green: number, blue: number): number;
  setColorMethod(colorMethod: ColorMethod): number;
  colorMethod(): ColorMethod;
  setColor(color: number): number;
  color(): number;
  setColorIndex(colorIndex: number): number;
  colorIndex(): number;
  setRGB(red: number, green: number, blue: number): number;
  setRed(red: number): number;
  setGreen(green: number): number;
  setBlue(blue: number): number;
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
  setTrueColor(): number;
};

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdCmTransparency.html} Additional documentation.
 */
class OdCmTransparency {
  constructor();
  constructor(method: transparencyMethod);
  setAlpha(alpha: number): number;
  alpha(): number;
  setAlphaPercent(alphaPercent: number): number;
  alphaPercent(): number;
  method(): transparencyMethod;
  setMethod(method: transparencyMethod): number;
  isByAlpha(): boolean;
  isByBlock(): boolean;
  isByLayer(): boolean;
  isInvalid(): boolean;
  isClear(): boolean;
  isSolid(): boolean;
  serializeOut(): number;
  serializeIn(transparency: number): number;
  dwgIn(pFiler: OdDbDwgFiler): number;
  dwgOut(pFiler: OdDbDwgFiler): number;
};

enum Color {
  kRed = 0,
  kGreen = 1,
  kBlue = 2
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
  static rxInit(): number;
  static rxUninit(): number;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  arcPoint(): OdGePoint3d;
  setArcPoint(arcPoint: OdGePoint3d): number;
  xLine1Start(): OdGePoint3d;
  setXLine1Start(xLine1Start: OdGePoint3d): number;
  xLine1End(): OdGePoint3d;
  setXLine1End(xLine1End: OdGePoint3d): number;
  xLine2Start(): OdGePoint3d;
  setXLine2Start(xLine2Start: OdGePoint3d): number;
  xLine2End(): OdGePoint3d;
  setXLine2End(xLine2End: OdGePoint3d): number;
  extArcOn(): boolean;
  setExtArcOn(value: boolean): number;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): number;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): number;
  dxfInFields_R12(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields_R12(pFiler: OdDbDxfFiler): number;
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
  static rxInit(): number;
  static rxUninit(): number;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  polyType(): Poly2dType;
  setPolyType(polyType: Poly2dType): number;
  makeClosed(): number;
  makeOpen(): number;
  defaultStartWidth(): number;
  setDefaultStartWidth(defaultStartWidth: number): number;
  defaultEndWidth(): number;
  setDefaultEndWidth(defaultEndWidth: number): number;
  thickness(): number;
  setThickness(thickness: number): number;
  normal(): OdGeVector3d;
  setNormal(normal: OdGeVector3d): number;
  elevation(): number;
  setElevation(elevation: number): number;
  isLinetypeGenerationOn(): boolean;
  setLinetypeGenerationOn(): number;
  setLinetypeGenerationOff(): number;
  straighten(): number;
  appendVertex(pVertex: OdDb2dVertex): OdDbObjectId;
  insertVertexAt(indexVertId: OdDbObjectId, pVertex: OdDb2dVertex): OdDbObjectId;
  insertVertexAt1(pIndexVert: OdDb2dVertex, pVertex: OdDb2dVertex): OdDbObjectId;
  openVertex(vertId: OdDbObjectId, mode: OpenMode, openErasedOne: boolean): number;
  openSequenceEnd(mode: OpenMode): number;
  vertexIterator(): number;
  vertexPosition(vertex: OdDb2dVertex): OdGePoint3d;
  subWorldDraw(pWd: OdGiWorldDraw): boolean;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): number;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): number;
  dxfInFields_R12(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields_R12(pFiler: OdDbDxfFiler): number;
  dxfOut(pFiler: OdDbDxfFiler): number;
  dxfIn(pFiler: OdDbDxfFiler): OdResult;
  subClose(): number;
  subExplode(entitySet: OdRxObjectPtrArray): OdResult;
  explodeGeometry(entitySet: OdRxObjectPtrArray): OdResult;
  subTransformBy(xfm: OdGeMatrix3d): OdResult;
  isPlanar(): boolean;
  isClosed(): boolean;
  isPeriodic(): boolean;
  getStartPoint(startPoint: OdGePoint3d): OdResult;
  getEndPoint(endPoint: OdGePoint3d): OdResult;
  getPointAtParam(param: number, pointOnCurve: OdGePoint3d): OdResult;
  getFirstDeriv(param: number, firstDeriv: OdGeVector3d): OdResult;
  getSecondDeriv(param: number, secondDeriv: OdGeVector3d): OdResult;
  convertToPolyType(newVal: Poly2dType): OdResult;
  curveFit(): OdResult;
  splineFit(): OdResult;
  splineFit1(splineType: Poly2dType, splineSegs: number): OdResult;
  subGetSubentPathsAtGsMarker(type: SubentType, gsMark: number, arg2: OdGePoint3d, arg3: OdGeMatrix3d, subentPaths: OdDbFullSubentPathArray, pEntAndInsertStack: OdDbObjectIdArray): OdResult;
  subGetGsMarkersAtSubentPath(subPath: OdDbFullSubentPath, gsMarkers: OdGsMarkerArray): OdResult;
  subSubentPtr(path: OdDbFullSubentPath): number;
  getEcs(): OdGeMatrix3d;
  setFromOdGeCurve(geCurve: OdGeCurve3d, normal: OdGeVector3d, tol: OdGeTol): OdResult;
  reverseCurve(): OdResult;
  findVertexIndex(vert: OdDbVertex): number;
  subSetDatabaseDefaults(pDb: OdDbDatabase, doSubEnts: boolean): number;
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
  static rxInit(): number;
  static rxUninit(): number;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  vertexType(): Vertex2dType;
  setVertexType(vertexType: Vertex2dType): number;
  position(): OdGePoint3d;
  setPosition(position: OdGePoint3d): number;
  startWidth(): number;
  setStartWidth(startWidth: number): number;
  endWidth(): number;
  setEndWidth(endWidth: number): number;
  bulge(): number;
  setBulge(bulge: number): number;
  isTangentUsed(): boolean;
  useTangent(): number;
  ignoreTangent(): number;
  tangent(): number;
  setTangent(tangent: number): number;
  vertexIdentifier(): number;
  setVertexIdentifier(suggestedId: number): number;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): number;
  dxfInFields_R12(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields_R12(pFiler: OdDbDxfFiler): number;
  subTransformBy(xfm: OdGeMatrix3d): OdResult;
  subGetTransformedCopy(mat: OdGeMatrix3d, pCopy: OdDbEntityPtr): OdResult;
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
  static rxInit(): number;
  static rxUninit(): number;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  arcPoint(): OdGePoint3d;
  setArcPoint(arcPoint: OdGePoint3d): number;
  xLine1Point(): OdGePoint3d;
  setXLine1Point(xLine1Point: OdGePoint3d): number;
  xLine2Point(): OdGePoint3d;
  setXLine2Point(xLine2Point: OdGePoint3d): number;
  centerPoint(): OdGePoint3d;
  extArcOn(): boolean;
  setExtArcOn(value: boolean): number;
  setCenterPoint(centerPoint: OdGePoint3d): number;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): number;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): number;
  dxfInFields_R12(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields_R12(pFiler: OdDbDxfFiler): number;
};

enum Poly3dType {
  k3dSimplePoly = 0,
  k3dQuadSplinePoly = 1,
  k3dCubicSplinePoly = 2
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
  static rxInit(): number;
  static rxUninit(): number;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  makeClosed(): number;
  makeOpen(): number;
  polyType(): Poly3dType;
  setPolyType(polyType: Poly3dType): number;
  straighten(): number;
  appendVertex(pVertex: OdDb3dPolylineVertex): OdDbObjectId;
  insertVertexAt(indexVertId: OdDbObjectId, pVertex: OdDb3dPolylineVertex): OdDbObjectId;
  insertVertexAt1(pIndexVert: OdDb3dPolylineVertex, pVertex: OdDb3dPolylineVertex): OdDbObjectId;
  openVertex(vertId: OdDbObjectId, mode: OpenMode, openErasedOne: boolean): number;
  openSequenceEnd(mode: OpenMode): number;
  vertexIterator(): number;
  dxfOut(pFiler: OdDbDxfFiler): number;
  dxfIn(pFiler: OdDbDxfFiler): OdResult;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): number;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): number;
  dxfInFields_R12(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields_R12(pFiler: OdDbDxfFiler): number;
  subClose(): number;
  subExplode(entitySet: OdRxObjectPtrArray): OdResult;
  explodeGeometry(entitySet: OdRxObjectPtrArray): OdResult;
  subTransformBy(xfm: OdGeMatrix3d): OdResult;
  subWorldDraw(pWd: OdGiWorldDraw): boolean;
  isPlanar(): boolean;
  isClosed(): boolean;
  isPeriodic(): boolean;
  getStartPoint(startPoint: OdGePoint3d): OdResult;
  getEndPoint(endPoint: OdGePoint3d): OdResult;
  getPointAtParam(param: number, pointOnCurve: OdGePoint3d): OdResult;
  getFirstDeriv(param: number, firstDeriv: OdGeVector3d): OdResult;
  getSecondDeriv(param: number, secondDeriv: OdGeVector3d): OdResult;
  convertToPolyType(newVal: Poly3dType): OdResult;
  splineFit(): OdResult;
  splineFit1(splineType: Poly3dType, splineSegs: number): OdResult;
  subGetSubentPathsAtGsMarker(type: SubentType, gsMark: number, arg2: OdGePoint3d, arg3: OdGeMatrix3d, subentPaths: OdDbFullSubentPathArray, pEntAndInsertStack: OdDbObjectIdArray): OdResult;
  subGetGsMarkersAtSubentPath(subPath: OdDbFullSubentPath, gsMarkers: OdGsMarkerArray): OdResult;
  subSubentPtr(path: OdDbFullSubentPath): number;
  setFromOdGeCurve(geCurve: OdGeCurve3d, normal: OdGeVector3d, tol: OdGeTol): OdResult;
  reverseCurve(): OdResult;
  findVertexIndex(vert: OdDbVertex): number;
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
  static rxInit(): number;
  static rxUninit(): number;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  vertexType(): Vertex3dType;
  setVertexType(vertexType: Vertex3dType): number;
  position(): OdGePoint3d;
  setPosition(position: OdGePoint3d): number;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): number;
  dxfInFields_R12(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields_R12(pFiler: OdDbDxfFiler): number;
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDb3dProfile.html} Additional documentation.
 */
class OdDb3dProfile extends OdRxObject {
  static cast(pObj: OdRxObject): OdDb3dProfile;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdDb3dProfile;
  static rxInit(): number;
  static rxUninit(): number;
  static createObject1(faceSubentPath: OdDbFullSubentPath): OdDb3dProfile;
  static mergeProfiles(profileArrArray: any, mergeEdges: boolean, mergeCurves: boolean, mergedProfileArrArray: any): OdResult;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  copyFrom(src: OdRxObject): number;
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
  static rxInit(): number;
  static rxUninit(): number;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  isNull(): boolean;
  acisOut(pStreamBuf: OdStreamBuf, typeVer: number): OdResult;
  brep(brep: OdBrBrep): number;
  getFaceMesh(mesh: OdGeTrMesh, iFace: number, triangulationParams: wrTriangulationParams): boolean;
  subWorldDraw(pWd: OdGiWorldDraw): boolean;
  subViewportDraw(pVd: OdGiViewportDraw): number;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): number;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): number;
  createBox(xLen: number, yLen: number, zLen: number): number;
  createFrustum(height: number, majorRadius: number, minorRadius: number, topMajorRadius: number): number;
  createSphere(radius: number): number;
  createTorus(majorRadius: number, minorRadius: number): number;
  createWedge(xLen: number, yLen: number, zLen: number): number;
  extrude(pRegion: OdDbRegion, height: number, taperAngle: number): OdResult;
  revolve(pRegion: OdDbRegion, axisPoint: OdGePoint3d, axisDir: OdGeVector3d, angleOfRevolution: number): OdResult;
  booleanOper(operation: BoolOperType, solid: OdDb3dSolid): OdResult;
  extrudeAlongPath(region: OdDbRegion, path: OdDbCurve, taperAngle: number): OdResult;
  imprintEntity(pEntity: OdDbEntity): OdResult;
  getSection(plane: OdGePlane, sectionRegion: OdDbRegionPtr): OdResult;
  getSlice(plane: OdGePlane, bGetNegHalfToo: boolean, pNegHalfSolid: OdDb3dSolidPtr): OdResult;
  getSlice1(pSurface: OdDbSurface, bGetNegHalfToo: boolean, pNegHalfSolid: OdDb3dSolidPtr): OdResult;
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
  subExplode(entitySet: OdRxObjectPtrArray): OdResult;
  subTransformBy(xfm: OdGeMatrix3d): OdResult;
  saveAs(pWd: OdGiWorldDraw, ver: DwgVersion): number;
  copyEdge(subentId: OdDbSubentId, newEntity: OdDbEntityPtr): OdResult;
  copyFace(subentId: OdDbSubentId, newEntity: OdDbEntityPtr): OdResult;
  subGetSubentPathsAtGsMarker(type: SubentType, gsMark: number, pickPoint: OdGePoint3d, viewXform: OdGeMatrix3d, subentPaths: OdDbFullSubentPathArray, pEntAndInsertStack: OdDbObjectIdArray): OdResult;
  subGetGsMarkersAtSubentPath(subPath: OdDbFullSubentPath, gsMarkers: OdGsMarkerArray): OdResult;
  subSubentPtr(id: OdDbFullSubentPath): number;
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
  subClose(): number;
  subGetGeomExtents(extents: OdGeExtents3d): OdResult;
  copyFrom(pSource: OdRxObject): number;
};

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

class OdDb3dSolidPtrArray extends OdArray<OdDb3dSolid> { };

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
  static rxInit(): number;
  static rxUninit(): number;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  xLine1Point(): OdGePoint3d;
  setXLine1Point(xLine1Point: OdGePoint3d): number;
  xLine2Point(): OdGePoint3d;
  setXLine2Point(xLine2Point: OdGePoint3d): number;
  dimLinePoint(): OdGePoint3d;
  setDimLinePoint(dimLinePoint: OdGePoint3d): number;
  oblique(): number;
  setOblique(oblique: number): number;
  jogSymbolOn(): boolean;
  setJogSymbolOn(value: boolean): number;
  jogSymbolPosition(): OdGePoint3d;
  setJogSymbolPosition(pt: OdGePoint3d): number;
  jogSymbolHeight(): number;
  setJogSymbolHeight(value: number): number;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): number;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): number;
  dxfInFields_R12(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields_R12(pFiler: OdDbDxfFiler): number;
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
  static rxInit(): number;
  static rxUninit(): number;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  center(): OdGePoint3d;
  setCenter(center: OdGePoint3d): number;
  radius(): number;
  setRadius(radius: number): number;
  startAngle(): number;
  setStartAngle(startAngle: number): number;
  endAngle(): number;
  setEndAngle(endAngle: number): number;
  thickness(): number;
  setThickness(vThickness: number): number;
  normal(): OdGeVector3d;
  setNormal(geVector: OdGeVector3d): number;
  getEcs(): OdGeMatrix3d;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): number;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): number;
  dxfInFields_R12(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields_R12(pFiler: OdDbDxfFiler): number;
  subWorldDraw(pWd: OdGiWorldDraw): boolean;
  subTransformBy(xfm: OdGeMatrix3d): OdResult;
  subGetTransformedCopy(xfm: OdGeMatrix3d, pCopy: OdDbEntityPtr): OdResult;
  isClosed(): boolean;
  isPeriodic(): boolean;
  isPlanar(): boolean;
  getStartPoint(startPoint: OdGePoint3d): OdResult;
  getEndPoint(endPoint: OdGePoint3d): OdResult;
  getPointAtParam(param: number, pointOnCurve: OdGePoint3d): OdResult;
  getFirstDeriv(param: number, firstDeriv: OdGeVector3d): OdResult;
  getSecondDeriv(param: number, secondDeriv: OdGeVector3d): OdResult;
  getOffsetCurves(offsetDist: number, offsetCurves: OdRxObjectPtrArray): OdResult;
  getOffsetCurvesGivenPlaneNormal(normal: OdGeVector3d, offsetDist: number, offsetCurves: OdRxObjectPtrArray): OdResult;
  setFromOdGeCurve(geCurve: OdGeCurve3d, normal: OdGeVector3d, tol: OdGeTol): OdResult;
  reverseCurve(): OdResult;
  subSubentPtr(arg0: OdDbFullSubentPath): number;
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
  static rxInit(): number;
  static rxUninit(): number;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  arcPoint(): OdGePoint3d;
  setArcPoint(arcPoint: OdGePoint3d): number;
  xLine1Point(): OdGePoint3d;
  setXLine1Point(xLine1Pt: OdGePoint3d): number;
  xLine2Point(): OdGePoint3d;
  setXLine2Point(xLine2Pt: OdGePoint3d): number;
  centerPoint(): OdGePoint3d;
  setCenterPoint(centerPoint: OdGePoint3d): number;
  isPartial(): boolean;
  setIsPartial(partial: boolean): number;
  arcStartParam(): number;
  setArcStartParam(arcStartParam: number): number;
  arcEndParam(): number;
  setArcEndParam(arcEndParam: number): number;
  hasLeader(): boolean;
  setHasLeader(hasLeader: boolean): number;
  leader1Point(): OdGePoint3d;
  setLeader1Point(leader1Point: OdGePoint3d): number;
  leader2Point(): OdGePoint3d;
  setLeader2Point(leader2Point: OdGePoint3d): number;
  arcSymbolType(): number;
  setArcSymbolType(arcSymbolType: number): number;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): number;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): number;
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
  static rxInit(): number;
  static rxUninit(): number;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  tag(): number;
  setTag(tagString: OdString): number;
  isInvisible(): boolean;
  setInvisible(invisible: boolean): number;
  isConstant(): boolean;
  isVerifiable(): boolean;
  isPreset(): boolean;
  fieldLength(): number;
  setFieldLength(fieldLength: number): number;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): number;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): number;
  dxfInFields_R12(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields_R12(pFiler: OdDbDxfFiler): number;
  subWorldDraw(pWd: OdGiWorldDraw): boolean;
  subViewportDraw(pVd: OdGiViewportDraw): number;
  setAttributeFromBlock(blkXform: OdGeMatrix3d): number;
  setAttributeFromBlock1(pAttDef: OdDbAttributeDefinition, blkXform: OdGeMatrix3d): number;
  lockPositionInBlock(): boolean;
  setLockPositionInBlock(lock: boolean): number;
  isMTextAttribute(): boolean;
  getMTextAttribute(): number;
  setMTextAttribute(arg0: OdDbMText): number;
  convertIntoMTextAttribute(val: boolean): number;
  updateMTextAttribute(): number;
  subClose(): number;
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
  static rxInit(): number;
  static rxUninit(): number;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  prompt(): number;
  setPrompt(promptString: OdString): number;
  tag(): number;
  setTag(tagString: OdString): number;
  isInvisible(): boolean;
  setInvisible(invisible: boolean): number;
  isConstant(): boolean;
  setConstant(constant: boolean): number;
  isVerifiable(): boolean;
  setVerifiable(arg0: boolean): number;
  isPreset(): boolean;
  setPreset(arg0: boolean): number;
  fieldLength(): number;
  setFieldLength(fieldLength: number): number;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): number;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): number;
  dxfInFields_R12(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields_R12(pFiler: OdDbDxfFiler): number;
  subWorldDraw(pWd: OdGiWorldDraw): boolean;
  subViewportDraw(pVd: OdGiViewportDraw): number;
  subSetAttributes(pTraits: OdGiDrawableTraits): number;
  appendToOwner(Idpair: OdDbIdPair, pOwnerObject: OdDbObject, ownerIdMap: OdDbIdMapping): number;
  lockPositionInBlock(): boolean;
  setLockPositionInBlock(bValue: boolean): number;
  isMTextAttributeDefinition(): boolean;
  getMTextAttributeDefinition(): number;
  setMTextAttributeDefinition(arg0: OdDbMText): number;
  convertIntoMTextAttributeDefinition(val: boolean): number;
  updateMTextAttributeDefinition(): number;
  subClose(): number;
};

enum ProdIdCode {
  kProd_ACAD = 1,
  kProd_LT = 2,
  kProd_OEM = 3,
  kProd_OdDb = 4
};

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdDbBaseHostAppServices.html} Additional documentation.
 */
class OdDbBaseHostAppServices extends OdRxObject {
  static cast(pObj: OdRxObject): OdDbBaseHostAppServices;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdDbBaseHostAppServices;
  static rxInit(): number;
  static rxUninit(): number;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  findFile(filename: OdString, pDb: OdDbBaseDatabase, hint: FindFileHint): number;
  newProgressMeter(): OdDbHostAppProgressMeter;
  releaseProgressMeter(pProgressMeter: OdDbHostAppProgressMeter): number;
  program(): number;
  product(): number;
  companyName(): number;
  prodcode(): ProdIdCode;
  releaseMajorMinorString(): number;
  releaseMajorVersion(): number;
  releaseMinorVersion(): number;
  versionString(): number;
  warning(message: OdString): number;
  warning2(warningOb: OdWarning): number;
  getErrorDescription(errorCode: number): number;
  newUndoController(): number;
  newUndoStream(): number;
  auditPrintReport(pAuditInfo: OdAuditInfo, strLine: OdString, printDest: number): number;
  ttfFileNameByDescriptor(description: OdTtfDescriptor, filename: OdString): boolean;
  getAlternateFontName(): number;
  getFontMapFileName(): number;
  getPreferableFont(fontName: OdString, fontType: OdFontType): number;
  getSubstituteFont(fontName: OdString, fontType: OdFontType): number;
  getSubstituteFontByChar(arg0: OdFont, arg1: number, arg2: OdDbBaseDatabase): number;
  getSystemFontFolders(aDirs: OdStringArray): boolean;
  collectFilePathsInDirectory(res: OdStringArray, sPath: OdString, sFilter: OdString): number;
  fileDialog(flags: number, dialogCaption: OdString, defExt: OdString, defFilename: OdString, filter: OdString): number;
  gsBitmapDevice(pViewObj: OdRxObject, pDb: OdDbBaseDatabase, flags: number): number;
  getTempPath(): number;
  getMtMode(): number;
  numThreads(mtMode: MultiThreadedMode): number;
  brepBuilder(bbuilder: OdBrepBuilder, bbType: BrepType): OdResult;
  getEnv(varName: OdString, value: OdString): OdResult;
  setEnv(varName: OdString, newValue: OdString): OdResult;
  getAppUserName(unFormat: UserNameFormat): number;
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

enum OdSDIValues {
  kMDIEnabled = 0,
  kSDIUserEnforced = 1,
  kSDIAppEnforced = 2,
  kSDIUserAndAppEnforced = 3
};

enum GsBitmapDeviceFlags {
  kUseSoftwareHLR = 1,
  kFor2dExportRender = 2,
  kFor2dExportRenderHLR = 4,
  kForThumbnail = 8
};

enum RemapFileContext {
  kDrawingOpen = 0,
  kXrefResolution = 1,
  kRasterResolution = 2
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
  static rxInit(): number;
  static rxUninit(): number;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): number;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): number;
  dxfInFields_R12(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields_R12(pFiler: OdDbDxfFiler): number;
  subGetGeomExtents(extents: OdGeExtents3d): OdResult;
  dxfIn(pFiler: OdDbDxfFiler): OdResult;
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbAttributeCollectionView.html} Additional documentation.
 */
class OdDbAttributeCollectionView {
  constructor(i: OdDbObjectIteratorPtr);
  begin(): Iterator;
  end(): Iterator;
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
  static rxInit(): number;
  static rxUninit(): number;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  blockTableRecord(): OdDbObjectId;
  setBlockTableRecord(objectId: OdDbObjectId): number;
  position(): OdGePoint3d;
  setPosition(position: OdGePoint3d): number;
  scaleFactors(): OdGeScale3d;
  setScaleFactors(scale: OdGeScale3d): number;
  rotation(): number;
  setRotation(angle: number): number;
  normal(): OdGeVector3d;
  setNormal(normal: OdGeVector3d): number;
  isPlanar(): boolean;
  blockTransform(): OdGeMatrix3d;
  setBlockTransform(xfm: OdGeMatrix3d): OdResult;
  appendAttribute(pAttr: OdDbAttribute): OdDbObjectId;
  openAttribute(ObjId: OdDbObjectId, mode: OpenMode, openErasedOne: boolean): number;
  openSequenceEnd(mode: OpenMode): number;
  attributeIterator(): number;
  attributes(): OdDbAttributeCollectionView;
  attributeIds(): OdDbIdCollectionView;
  explodeToBlock(BlockRecord: OdDbBlockTableRecord, ids: OdDbObjectIdArray): OdResult;
  subSetAttributes(pTraits: OdGiDrawableTraits): number;
  subWorldDraw(pWd: OdGiWorldDraw): boolean;
  subViewportDraw(pVd: OdGiViewportDraw): number;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): number;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): number;
  dxfInFields_R12(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields_R12(pFiler: OdDbDxfFiler): number;
  dxfIn(pFiler: OdDbDxfFiler): OdResult;
  dxfOut(pFiler: OdDbDxfFiler): number;
  subClose(): number;
  subTransformBy(xfm: OdGeMatrix3d): OdResult;
  subGetTransformedCopy(xfm: OdGeMatrix3d, pCopy: OdDbEntityPtr): OdResult;
  subExplode(entitySet: OdRxObjectPtrArray): OdResult;
  subHandOverTo(pNewObject: OdDbObject): number;
  subGetGeomExtents(extents: OdGeExtents3d): OdResult;
  explodeGeometry(entitySet: OdRxObjectPtrArray): OdResult;
  treatAsOdDbBlockRefForExplode(): boolean;
  geomExtentsBestFit(extents: OdGeExtents3d, parentXform: OdGeMatrix3d): OdResult;
  explodeToOwnerSpace(): OdResult;
  copyFrom(pSrc: OdRxObject): number;
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
  static rxInit(): number;
  static rxUninit(): number;
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
  static rxInit(): number;
  static rxUninit(): number;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  getAt(recordName: OdString, openMode: OpenMode, getErasedRecord: boolean): number;
  getAt1(recordName: OdString, getErasedRecord: boolean): OdDbObjectId;
  has(recordName: OdString): boolean;
  has1(objectId: OdDbObjectId): boolean;
  newIterator(atBeginning: boolean, skipDeleted: boolean): number;
  add(pRecord: OdDbSymbolTableRecord): OdDbObjectId;
  getModelSpaceId(): OdDbObjectId;
  getPaperSpaceId(): OdDbObjectId;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): number;
  dxfIn(pFiler: OdDbDxfFiler): OdResult;
  applyPartialUndo(pFiler: OdDbDwgFiler, pClass: OdRxClass): number;
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbEntityCollectionView.html} Additional documentation.
 */
class OdDbEntityCollectionView {
  constructor(i: OdDbObjectIteratorPtr);
  begin(): Iterator;
  end(): Iterator;
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbIdCollectionView.html} Additional documentation.
 */
class OdDbIdCollectionView {
  constructor(i: OdDbObjectIteratorPtr);
  begin(): Iterator;
  end(): Iterator;
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
  static rxInit(): number;
  static rxUninit(): number;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  appendOdDbEntity(pEntity: OdDbEntity): OdDbObjectId;
  newIterator(atBeginning: boolean, skipDeleted: boolean, sorted: boolean): number;
  ids(atBeginning: boolean, skipDeleted: boolean, sorted: boolean): OdDbIdCollectionView;
  entities(atBeginning: boolean, skipDeleted: boolean, sorted: boolean): OdDbEntityCollectionView;
  comments(): number;
  setComments(comments: OdString): number;
  pathName(): number;
  setPathName(pathName: OdString): number;
  origin(): OdGePoint3d;
  setOrigin(origin: OdGePoint3d): number;
  openBlockBegin(openMode: OpenMode): number;
  openBlockEnd(openMode: OpenMode): number;
  hasAttributeDefinitions(): boolean;
  isAnonymous(): boolean;
  isFromExternalReference(): boolean;
  isFromOverlayReference(): boolean;
  setIsFromOverlayReference(bIsOverlay: boolean): number;
  isLayout(): boolean;
  getLayoutId(): OdDbObjectId;
  setLayoutId(layoutId: OdDbObjectId): number;
  getBlockReferenceIds(referenceIds: OdDbObjectIdArray, directOnly: boolean, forceValidity: boolean): number;
  getErasedBlockReferenceIds(referenceIds: OdDbObjectIdArray): number;
  isUnloaded(): boolean;
  setIsUnloaded(isUnloaded: boolean): number;
  subWorldDraw(pWd: OdGiWorldDraw): boolean;
  subSetAttributes(pTraits: OdGiDrawableTraits): number;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): number;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): number;
  subClose(): number;
  subErase(erasing: boolean): OdResult;
  subHandOverTo(pNewObject: OdDbObject): number;
  copyFrom(p: OdRxObject): number;
  xrefDatabase(includeUnresolved: boolean): OdDbDatabase;
  xrefStatus(): XrefStatus;
  hasPreviewIcon(): boolean;
  getPreviewIcon(previewIcon: PreviewIcon): number;
  setPreviewIcon(previewIcon: PreviewIcon): number;
  subWblockClone(ownerIdMap: OdDbIdMapping, arg1: OdDbObject, bPrimary: boolean): number;
  getSortentsTable(createIfNotFound: boolean): number;
  drawable(): OdGiDrawable;
  getGeomExtents(extents: OdGeExtents3d): OdResult;
  geomExtentsBestFit(extents: OdGeExtents3d, parentXform: OdGeMatrix3d): OdResult;
  assumeOwnershipOf(entitiesToMove: OdDbObjectIdArray): OdResult;
  blockScaling(): BlockScaling;
  setBlockScaling(blockScaling: BlockScaling): number;
  setExplodable(explodable: boolean): number;
  explodable(): boolean;
  setBlockInsertUnits(blockInsertUnits: UnitsValue): number;
  blockInsertUnits(): UnitsValue;
  applyPartialUndo(pFiler: OdDbDwgFiler, pClass: OdRxClass): number;
  addAnnoScalestoBlkRefs(scale: boolean): number;
  subSwapIdWith(otherId: OdDbObjectId, swapXdata: boolean, swapExtDict: boolean): number;
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
  static rxInit(): number;
  static rxUninit(): number;
  static acisOut1(filename: OdString, solids: OdDbEntityPtrArray, typeVer: number): OdResult;
  static acisIn1(filename: OdString, solids: OdDbEntityPtrArray, convAcisColors: ColorConversionType): OdResult;
  static setSubentPath(ent: OdBrEntity, subpath: OdDbFullSubentPath): OdResult;
  static generateMesh(pEnt: OdDbEntity, filter: OdBrMesh2dFilter, mesh2d: OdBrMesh2d): OdResult;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  isNull(): boolean;
  acisOut(pStreamBuf: OdStreamBuf, typeVer: number): OdResult;
  brep(brep: OdBrBrep): number;
  getFaceMesh(mesh: OdGeTrMesh, iFace: number, triangulationParams: wrTriangulationParams): boolean;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): number;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): number;
  subWorldDraw(pWd: OdGiWorldDraw): boolean;
  subViewportDraw(pVd: OdGiViewportDraw): number;
  subExplode(entitySet: OdRxObjectPtrArray): OdResult;
  subTransformBy(xfn: OdGeMatrix3d): OdResult;
  saveAs(pWd: OdGiWorldDraw, ver: DwgVersion): number;
  subSubentPtr(id: OdDbFullSubentPath): number;
  subGetGsMarkersAtSubentPath(subPath: OdDbFullSubentPath, gsMarkers: OdGsMarkerArray): OdResult;
  subGetSubentPathsAtGsMarker(type: SubentType, gsMark: number, pickPoint: OdGePoint3d, viewXform: OdGeMatrix3d, subentPaths: OdDbFullSubentPathArray, pEntAndInsertStack: OdDbObjectIdArray): OdResult;
  numChanges(): number;
  subSetAttributes(pTraits: OdGiDrawableTraits): number;
  subGetGeomExtents(extents: OdGeExtents3d): OdResult;
  subClose(): number;
  copyFrom(pSource: OdRxObject): number;
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
  static rxInit(): number;
  static rxUninit(): number;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  center(): OdGePoint3d;
  setCenter(center: OdGePoint3d): number;
  radius(): number;
  setRadius(radius: number): number;
  thickness(): number;
  setThickness(vThickness: number): number;
  normal(): OdGeVector3d;
  setNormal(geVector: OdGeVector3d): number;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): number;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): number;
  dxfInFields_R12(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields_R12(pFiler: OdDbDxfFiler): number;
  subWorldDraw(pWd: OdGiWorldDraw): boolean;
  subTransformBy(xfm: OdGeMatrix3d): OdResult;
  subGetTransformedCopy(xfm: OdGeMatrix3d, pCopy: OdDbEntityPtr): OdResult;
  isClosed(): boolean;
  isPeriodic(): boolean;
  isPlanar(): boolean;
  getStartPoint(startPoint: OdGePoint3d): OdResult;
  getEndPoint(endPoint: OdGePoint3d): OdResult;
  getPointAtParam(param: number, pointOnCurve: OdGePoint3d): OdResult;
  getFirstDeriv(param: number, firstDeriv: OdGeVector3d): OdResult;
  getSecondDeriv(param: number, secondDeriv: OdGeVector3d): OdResult;
  getEcs(): OdGeMatrix3d;
  getOffsetCurves(offsetDist: number, offsetCurves: OdRxObjectPtrArray): OdResult;
  getOffsetCurvesGivenPlaneNormal(normal: OdGeVector3d, offsetDist: number, offsetCurves: OdRxObjectPtrArray): OdResult;
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
  static rxInit(): number;
  static rxUninit(): number;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  isClosed(): boolean;
  isPeriodic(): boolean;
  getStartPoint(startPoint: OdGePoint3d): OdResult;
  getEndPoint(endPoint: OdGePoint3d): OdResult;
  getPointAtParam(param: number, pointOnCurve: OdGePoint3d): OdResult;
  getPointAtDist(dist: number, pointOnCurve: OdGePoint3d): OdResult;
  getFirstDeriv(param: number, firstDeriv: OdGeVector3d): OdResult;
  getFirstDeriv1(pointOnCurve: OdGePoint3d, firstDeriv: OdGeVector3d): OdResult;
  getSecondDeriv(param: number, secondDeriv: OdGeVector3d): OdResult;
  getSecondDeriv1(pointOnCurve: OdGePoint3d, secondDeriv: OdGeVector3d): OdResult;
  getClosestPointTo(givenPoint: OdGePoint3d, pointOnCurve: OdGePoint3d, extend: boolean): OdResult;
  getClosestPointTo1(givenPoint: OdGePoint3d, normal: OdGeVector3d, pointOnCurve: OdGePoint3d, extend: boolean): OdResult;
  getSpline(spline: OdDbSplinePtr): OdResult;
  extend(param: number): OdResult;
  extend1(extendStart: boolean, toPoint: OdGePoint3d): OdResult;
  getOrthoProjectedCurve(projPlane: OdGePlane, pProjCurve: OdDbCurvePtr): OdResult;
  getProjectedCurve(projPlane: OdGePlane, projDirection: OdGeVector3d, pProjCurve: OdDbCurvePtr): OdResult;
  getOffsetCurves(offsetDistance: number, offsetCurves: OdRxObjectPtrArray): OdResult;
  getOffsetCurvesGivenPlaneNormal(normal: OdGeVector3d, offsetDistance: number, offsetCurves: OdRxObjectPtrArray): OdResult;
  getSplitCurves(params: OdGeDoubleArray, curveSegments: OdRxObjectPtrArray): OdResult;
  getSplitCurves1(points: OdGePoint3dArray, curveSegments: OdRxObjectPtrArray): OdResult;
  reverseCurve(): OdResult;
  setFromOdGeCurve(geCurve: OdGeCurve3d, normal: OdGeVector3d, tol: OdGeTol): OdResult;
  findVertexIndex(arg0: OdDbVertex): number;
};

enum JoinStyle {
  kJnStylNone = 0,
  kJnStylRound = 1,
  kJnStylAngle = 2,
  kJnStylFlat = 3
};

enum EndCaps {
  kEndCapNone = 0,
  kEndCapRound = 1,
  kEndCapAngle = 2,
  kEndCapSquare = 3
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

enum LoftParamType {
  kLoftNoParam = 0,
  kLoftNoTwist = 1,
  kLoftAlignDirection = 2,
  kLoftSimplify = 4,
  kLoftClose = 8,
  kLoftPeriodic = 16,
  kLoftDefault = 7
};

enum DuplicateLinetypeLoading {
  kDltNotApplicable = 0,
  kDltIgnore = 1,
  kDltReplace = 2
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

enum LoftNormalsType {
  kLoftRuled = 0,
  kLoftSmooth = 1,
  kLoftFirstNormal = 2,
  kLoftLastNormal = 3,
  kLoftEndsNormal = 4,
  kLoftAllNormal = 5,
  kLoftUseDraftAngles = 6
};

enum VerticalApplicationType {
  kArchitecture = 1,
  kCivil = 2,
  kMechanical = 4
};

enum IndexingModeFlags {
  kNoIndexing = 0,
  kUpdateBlockIndexOnSave = 1,
  kUseBlockChangeIterator = 2,
  kUseAll = 3
};

enum VerticalApplicationMode {
  kEnabler = 0,
  kEditor = 1
};

enum FilletTrimMode {
  kTrimNone = 0,
  kTrimFirst = 1,
  kTrimSecond = 2,
  kTrimBoth = 3
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

enum CollisionType {
  kCollisionTypeNone = 0,
  kCollisionTypeSolid = 1
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
  static rxInit(): number;
  static rxUninit(): number;
  static isValidLineWeight(weight: number): boolean;
  static getNearestLineWeight(weight: number): LineWeight;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  addRef(): number;
  release(): number;
  appServices(): OdDbHostAppServices;
  initialize(measurement: MeasurementValue): number;
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
  setTablestyle(objectId: OdDbObjectId): number;
  getMLeaderStyleDictionaryId(createIfNotFound: boolean): OdDbObjectId;
  mleaderstyle(): OdDbObjectId;
  setMLeaderstyle(objectId: OdDbObjectId): number;
  getDetailViewStyleDictionaryId(createIfNotFound: boolean): OdDbObjectId;
  detailViewStyle(): OdDbObjectId;
  setDetailViewStyle(objectId: OdDbObjectId): number;
  getSectionViewStyleDictionaryId(createIfNotFound: boolean): OdDbObjectId;
  sectionViewStyle(): OdDbObjectId;
  setSectionViewStyle(objectId: OdDbObjectId): number;
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
  classDxfName(pClass: OdRxClass): number;
  getOdDbObjectId(objHandle: OdDbHandle, createIfNotFound: boolean, xRefId: number): OdDbObjectId;
  writeFile(pStreamBuf: OdStreamBuf, fileType: SaveType, fileVersion: DwgVersion, saveThumbnailImage: boolean, dxfPrecision: number): number;
  writeFile1(filename: OdString, fileType: SaveType, fileVersion: DwgVersion, saveThumbnailImage: boolean, dxfPrecision: number): number;
  save(pStreamBuf: OdStreamBuf, saveThumbnailImage: boolean): number;
  save1(filename: OdString, saveThumbnailImage: boolean): number;
  readFile(pStreamBuf: OdStreamBuf, partialLoad: boolean, pAuditInfo: OdDbAuditInfo, password: OdPassword, allowCPConversion: boolean): number;
  readFile1(filename: OdString, partialLoad: boolean, shareMode: FileShareMode, password: OdPassword, allowCPConversion: boolean): number;
  closeInput(): number;
  approxNumObjects(): number;
  numberOfSaves(): number;
  originalFileType(): SaveType;
  addReactor(pReactor: OdDbDatabaseReactor): number;
  removeReactor(pReactor: OdDbDatabaseReactor): number;
  dimfit(): number;
  dimunit(): number;
  setDimfit(val: number): number;
  setDimunit(val: number): number;
  deepCloneObjects(objectIds: OdDbObjectIdArray, ownerId: OdDbObjectId, idMap: OdDbIdMapping, deferXlation: boolean): number;
  wblockCloneObjects(objectIds: OdDbObjectIdArray, ownerId: OdDbObjectId, idMap: OdDbIdMapping, duplicateRecordCloning: DuplicateRecordCloning, deferXlation: boolean): number;
  abortDeepClone(idMap: OdDbIdMapping): number;
  audit(pAuditInfo: OdDbAuditInfo): number;
  startTransaction(): number;
  flushAllTransactedChanges(): boolean;
  endTransaction(): number;
  abortTransaction(): number;
  numActiveTransactions(): number;
  addTransactionReactor(reactor: OdDbTransactionReactor): number;
  removeTransactionReactor(reactor: OdDbTransactionReactor): number;
  retainOriginalThumbnailBitmap(): boolean;
  setRetainOriginalThumbnailBitmap(retain: boolean): number;
  dwgOutFields(pFiler: OdDbDwgFiler): number;
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
  getMENUNAME(): number;
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
  getHYPERLINKBASE(): number;
  getSTYLESHEET(): number;
  getXEDIT(): boolean;
  getCEPSNTYPE(): PlotStyleNameType;
  getCEPSNID(): OdDbObjectId;
  getPSTYLEMODE(): boolean;
  getFINGERPRINTGUID(): number;
  getVERSIONGUID(): number;
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
  getDWGCODEPAGE(): number;
  getCTABLESTYLE(): OdDbObjectId;
  getCMLEADERSTYLE(): OdDbObjectId;
  getCANNOSCALE(): number;
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
  getPROJECTNAME(): number;
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
  getHPLAYER(): number;
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
  getVSAZEBRACOLOR1(): number;
  getVSAZEBRACOLOR2(): number;
  getVSAZEBRADIRECTION(): number;
  getVSAZEBRASIZE(): number;
  getVSAZEBRATYPE(): number;
  getGEOMARKPOSITIONSIZE(): number;
  getPOINTCLOUDPOINTSIZE(): number;
  getDIMLAYER(): number;
  getSECTIONOFFSETINC(): number;
  getSECTIONTHICKNESSINC(): number;
  getXREFOVERRIDE(): number;
  getCENTERCROSSGAP(): number;
  getCENTERCROSSSIZE(): number;
  getCENTEREXE(): number;
  getCENTERLAYER(): number;
  getCENTERLTSCALE(): number;
  getCENTERLTYPE(): number;
  getCENTERLTYPEFILE(): number;
  getCENTERMARKEXE(): boolean;
  getTRACECURRENT(): number;
  getTRACEMODE(): number;
  getTRACEDISPLAYMODE(): number;
  setANGBASE(val: number): number;
  setANGDIR(val: boolean): number;
  setINSBASE(val: OdGePoint3d): number;
  setEXTMIN(val: OdGePoint3d): number;
  setEXTMAX(val: OdGePoint3d): number;
  setLIMMIN(val: OdGePoint2d): number;
  setLIMMAX(val: OdGePoint2d): number;
  setORTHOMODE(val: boolean): number;
  setREGENMODE(val: boolean): number;
  setFILLMODE(val: boolean): number;
  setQTEXTMODE(val: boolean): number;
  setMIRRTEXT(val: boolean): number;
  setLTSCALE(val: number): number;
  setATTMODE(val: number): number;
  setTEXTSIZE(val: number): number;
  setTRACEWID(val: number): number;
  setTEXTSTYLE(val: OdDbObjectId): number;
  setCLAYER(val: OdDbObjectId): number;
  setCELTYPE(val: OdDbObjectId): number;
  setCECOLOR(val: OdCmColor): number;
  setCELTSCALE(val: number): number;
  setCHAMFERA(val: number): number;
  setCHAMFERB(val: number): number;
  setCHAMFERC(val: number): number;
  setCHAMFERD(val: number): number;
  setDISPSILH(val: boolean): number;
  setDIMSTYLE(val: OdDbObjectId): number;
  setDIMASO(val: boolean): number;
  setDIMSHO(val: boolean): number;
  setLUNITS(val: number): number;
  setLUPREC(val: number): number;
  setSKETCHINC(val: number): number;
  setFILLETRAD(val: number): number;
  setAUNITS(val: number): number;
  setAUPREC(val: number): number;
  setMENUNAME(val: OdString): number;
  setELEVATION(val: number): number;
  setPELEVATION(val: number): number;
  setTHICKNESS(val: number): number;
  setLIMCHECK(val: boolean): number;
  setSKPOLY(val: boolean): number;
  setUSRTIMER(val: boolean): number;
  setPDMODE(val: number): number;
  setPDSIZE(val: number): number;
  setPLINEWID(val: number): number;
  setSPLFRAME(val: boolean): number;
  setSPLINETYPE(val: number): number;
  setSPLINESEGS(val: number): number;
  setSURFTAB1(val: number): number;
  setSURFTAB2(val: number): number;
  setSURFTYPE(val: number): number;
  setSURFU(val: number): number;
  setSURFV(val: number): number;
  setUSERI1(val: number): number;
  setUSERI2(val: number): number;
  setUSERI3(val: number): number;
  setUSERI4(val: number): number;
  setUSERI5(val: number): number;
  setUSERR1(val: number): number;
  setUSERR2(val: number): number;
  setUSERR3(val: number): number;
  setUSERR4(val: number): number;
  setPDFUNDERLAYSHADEDMODE(val: boolean): number;
  setUSERR5(val: number): number;
  setWORLDVIEW(val: boolean): number;
  setSHADEDGE(val: number): number;
  setSHADEDIF(val: number): number;
  setTILEMODE(val: boolean): number;
  setMAXACTVP(val: number): number;
  setPINSBASE(val: OdGePoint3d): number;
  setPLIMCHECK(val: boolean): number;
  setPEXTMIN(val: OdGePoint3d): number;
  setPEXTMAX(val: OdGePoint3d): number;
  setPLIMMIN(val: OdGePoint2d): number;
  setPLIMMAX(val: OdGePoint2d): number;
  setUCSNAME(val: OdDbObjectId): number;
  setPUCSNAME(val: OdDbObjectId): number;
  setUNITMODE(val: number): number;
  setVISRETAIN(val: boolean): number;
  setPLINEGEN(val: boolean): number;
  setPSLTSCALE(val: boolean): number;
  setTREEDEPTH(val: number): number;
  setCMLSTYLE(val: OdDbObjectId): number;
  setCMLJUST(val: number): number;
  setCMLSCALE(val: number): number;
  setPROXYGRAPHICS(val: number): number;
  setMEASUREMENT(val: MeasurementValue): number;
  setCELWEIGHT(val: LineWeight): number;
  setENDCAPS(val: EndCaps): number;
  setJOINSTYLE(val: JoinStyle): number;
  setLWDISPLAY(val: boolean): number;
  setINSUNITS(val: UnitsValue): number;
  setTSTACKALIGN(val: number): number;
  setTSTACKSIZE(val: number): number;
  setHYPERLINKBASE(val: OdString): number;
  setSTYLESHEET(val: OdString): number;
  setXEDIT(val: boolean): number;
  setCEPSNTYPE(val: PlotStyleNameType): number;
  setCEPSNID(val: OdDbObjectId): number;
  setFINGERPRINTGUID(val: OdString): number;
  setVERSIONGUID(val: OdString): number;
  setEXTNAMES(val: boolean): number;
  setPSVPSCALE(val: number): number;
  setOLESTARTUP(val: boolean): number;
  setPELLIPSE(val: boolean): number;
  setISOLINES(val: number): number;
  setTEXTQLTY(val: number): number;
  setFACETRES(val: number): number;
  setPUCSBASE(val: OdDbObjectId): number;
  setPUCSORTHOVIEW(val: number): number;
  setPUCSORGTOP(val: OdGePoint3d): number;
  setPUCSORGBOTTOM(val: OdGePoint3d): number;
  setPUCSORGLEFT(val: OdGePoint3d): number;
  setPUCSORGRIGHT(val: OdGePoint3d): number;
  setPUCSORGFRONT(val: OdGePoint3d): number;
  setPUCSORGBACK(val: OdGePoint3d): number;
  setUCSBASE(val: OdDbObjectId): number;
  setUCSORTHOVIEW(val: number): number;
  setUCSORGTOP(val: OdGePoint3d): number;
  setUCSORGBOTTOM(val: OdGePoint3d): number;
  setUCSORGLEFT(val: OdGePoint3d): number;
  setUCSORGRIGHT(val: OdGePoint3d): number;
  setUCSORGFRONT(val: OdGePoint3d): number;
  setUCSORGBACK(val: OdGePoint3d): number;
  setCTABLESTYLE(val: OdDbObjectId): number;
  setCMLEADERSTYLE(val: OdDbObjectId): number;
  setCANNOSCALE(val: OdDbAnnotationScalePtr): number;
  setANNOALLVISIBLE(val: boolean): number;
  setANNOTATIVEDWG(val: number): number;
  setMSLTSCALE(val: boolean): number;
  setLAYEREVAL(val: number): number;
  setLAYERNOTIFY(val: number): number;
  setLIGHTINGUNITS(val: number): number;
  setLIGHTSINBLOCKS(val: number): number;
  setDBCSTATE(val: number): number;
  setINTERSECTIONCOLOR(val: number): number;
  setINTERSECTIONDISPLAY(val: boolean): number;
  setHALOGAP(val: number): number;
  setOBSCUREDCOLOR(val: number): number;
  setOBSCUREDLTYPE(val: number): number;
  setINDEXCTL(val: number): number;
  setPROJECTNAME(val: OdString): number;
  setSORTENTS(val: number): number;
  setDIMASSOC(val: number): number;
  setHIDETEXT(val: boolean): number;
  setDRAWORDERCTL(val: number): number;
  setHPINHERIT(val: boolean): number;
  setHPORIGIN(val: OdGePoint2d): number;
  setFIELDEVAL(val: number): number;
  setMSOLESCALE(val: number): number;
  setUPDATETHUMBNAIL(val: number): number;
  setSOLIDHIST(val: number): number;
  setSHOWHIST(val: number): number;
  setPSOLWIDTH(val: number): number;
  setLOFTPARAM(val: LoftParamType): number;
  setLOFTNORMALS(val: LoftNormalsType): number;
  setLOFTANG1(val: number): number;
  setLOFTANG2(val: number): number;
  setLOFTMAG1(val: number): number;
  setLOFTMAG2(val: number): number;
  setLATITUDE(val: number): number;
  setLONGITUDE(val: number): number;
  setNORTHDIRECTION(val: number): number;
  setTIMEZONE(val: TimeZone): number;
  setLIGHTGLYPHDISPLAY(val: number): number;
  setTILEMODELIGHTSYNCH(val: number): number;
  setINTERFERECOLOR(val: OdCmColor): number;
  setINTERFEREOBJVS(val: OdDbObjectId): number;
  setINTERFEREVPVS(val: OdDbObjectId): number;
  setDRAGVS(val: OdDbObjectId): number;
  setCSHADOW(val: ShadowFlags): number;
  setSHADOWPLANELOCATION(val: number): number;
  setCAMERADISPLAY(val: boolean): number;
  setLENSLENGTH(val: number): number;
  setCAMERAHEIGHT(val: number): number;
  setSTEPSPERSEC(val: number): number;
  setSTEPSIZE(val: number): number;
  set3DDWFPREC(val: number): number;
  setPSOLHEIGHT(val: number): number;
  setCMATERIAL(val: OdDbObjectId): number;
  setDWFFRAME(val: number): number;
  setDGNFRAME(val: number): number;
  setREALWORLDSCALE(val: boolean): number;
  setDXEVAL(val: number): number;
  setGEOLATLONGFORMAT(val: number): number;
  setGEOMARKERVISIBILITY(val: number): number;
  setPREVIEWTYPE(val: number): number;
  setEXPORTMODELSPACE(val: number): number;
  setEXPORTPAPERSPACE(val: number): number;
  setEXPORTPAGESETUP(val: number): number;
  setFRAME(val: number): number;
  setPDFFRAME(val: number): number;
  setXCLIPFRAME(val: number): number;
  setMESHTYPE(val: number): number;
  setSKYSTATUS(val: number): number;
  setHPLAYER(val: OdString): number;
  setMIRRHATCH(val: number): number;
  setHPTRANSPARENCY(val: OdCmTransparency): number;
  setHPCOLOR(val: OdCmColor): number;
  setHPBACKGROUNDCOLOR(val: OdCmColor): number;
  setCETRANSPARENCY(val: OdCmTransparency): number;
  setCVIEWDETAILSTYLE(val: OdDbObjectId): number;
  setCVIEWSECTIONSTYLE(val: OdDbObjectId): number;
  setWIPEOUTFRAME(val: number): number;
  setPOINTCLOUDCLIPFRAME(val: number): number;
  setMLEADERSCALE(val: number): number;
  setDYNCONSTRAINTDISPLAY(val: boolean): number;
  setVIEWUPDATEAUTO(val: number): number;
  setVSACURVATUREHIGH(val: number): number;
  setVSACURVATURELOW(val: number): number;
  setVSACURVATURETYPE(val: number): number;
  setVSADRAFTANGLEHIGH(val: number): number;
  setVSADRAFTANGLELOW(val: number): number;
  setVSAZEBRACOLOR1(val: OdString): number;
  setVSAZEBRACOLOR2(val: OdString): number;
  setVSAZEBRADIRECTION(val: number): number;
  setVSAZEBRASIZE(val: number): number;
  setVSAZEBRATYPE(val: number): number;
  setGEOMARKPOSITIONSIZE(val: number): number;
  setPOINTCLOUDPOINTSIZE(val: number): number;
  setDIMLAYER(val: OdString): number;
  setSECTIONOFFSETINC(val: number): number;
  setSECTIONTHICKNESSINC(val: number): number;
  setXREFOVERRIDE(val: number): number;
  setCENTERCROSSGAP(val: OdString): number;
  setCENTERCROSSSIZE(val: OdString): number;
  setCENTEREXE(val: number): number;
  setCENTERLAYER(val: OdString): number;
  setCENTERLTSCALE(val: number): number;
  setCENTERLTYPE(val: OdString): number;
  setCENTERLTYPEFILE(val: OdString): number;
  setCENTERMARKEXE(val: boolean): number;
  dimadec(): number;
  setDimadec(val: number): number;
  dimalt(): boolean;
  setDimalt(val: boolean): number;
  dimaltd(): number;
  setDimaltd(val: number): number;
  dimaltf(): number;
  setDimaltf(val: number): number;
  dimaltrnd(): number;
  setDimaltrnd(val: number): number;
  dimalttd(): number;
  setDimalttd(val: number): number;
  dimalttz(): number;
  setDimalttz(val: number): number;
  dimaltu(): number;
  setDimaltu(val: number): number;
  dimaltz(): number;
  setDimaltz(val: number): number;
  dimapost(): number;
  setDimapost(val: OdString): number;
  dimasz(): number;
  setDimasz(val: number): number;
  dimatfit(): number;
  setDimatfit(val: number): number;
  dimaunit(): number;
  setDimaunit(val: number): number;
  dimazin(): number;
  setDimazin(val: number): number;
  dimblk(): OdDbHardPointerId;
  setDimblk(val: OdDbHardPointerId): number;
  dimblk1(): OdDbHardPointerId;
  setDimblk1(val: OdDbHardPointerId): number;
  dimblk2(): OdDbHardPointerId;
  setDimblk2(val: OdDbHardPointerId): number;
  dimcen(): number;
  setDimcen(val: number): number;
  dimclrd(): OdCmColor;
  setDimclrd(val: OdCmColor): number;
  dimclre(): OdCmColor;
  setDimclre(val: OdCmColor): number;
  dimclrt(): OdCmColor;
  setDimclrt(val: OdCmColor): number;
  dimdec(): number;
  setDimdec(val: number): number;
  dimdle(): number;
  setDimdle(val: number): number;
  dimdli(): number;
  setDimdli(val: number): number;
  dimdsep(): number;
  setDimdsep(val: number): number;
  dimexe(): number;
  setDimexe(val: number): number;
  dimexo(): number;
  setDimexo(val: number): number;
  dimfrac(): number;
  setDimfrac(val: number): number;
  dimgap(): number;
  setDimgap(val: number): number;
  dimjust(): number;
  setDimjust(val: number): number;
  dimldrblk(): OdDbHardPointerId;
  setDimldrblk(val: OdDbHardPointerId): number;
  dimlfac(): number;
  setDimlfac(val: number): number;
  dimlim(): boolean;
  setDimlim(val: boolean): number;
  dimlunit(): number;
  setDimlunit(val: number): number;
  dimlwd(): LineWeight;
  setDimlwd(val: LineWeight): number;
  dimlwe(): LineWeight;
  setDimlwe(val: LineWeight): number;
  dimpost(): number;
  setDimpost(val: OdString): number;
  dimrnd(): number;
  setDimrnd(val: number): number;
  dimsah(): boolean;
  setDimsah(val: boolean): number;
  dimscale(): number;
  setDimscale(val: number): number;
  dimsd1(): boolean;
  setDimsd1(val: boolean): number;
  dimsd2(): boolean;
  setDimsd2(val: boolean): number;
  dimse1(): boolean;
  setDimse1(val: boolean): number;
  dimse2(): boolean;
  setDimse2(val: boolean): number;
  dimsoxd(): boolean;
  setDimsoxd(val: boolean): number;
  dimtad(): number;
  setDimtad(val: number): number;
  dimtdec(): number;
  setDimtdec(val: number): number;
  dimtfac(): number;
  setDimtfac(val: number): number;
  dimtih(): boolean;
  setDimtih(val: boolean): number;
  dimtix(): boolean;
  setDimtix(val: boolean): number;
  dimtm(): number;
  setDimtm(val: number): number;
  dimtmove(): number;
  setDimtmove(val: number): number;
  dimtofl(): boolean;
  setDimtofl(val: boolean): number;
  dimtoh(): boolean;
  setDimtoh(val: boolean): number;
  dimtol(): boolean;
  setDimtol(val: boolean): number;
  dimtolj(): number;
  setDimtolj(val: number): number;
  dimtp(): number;
  setDimtp(val: number): number;
  dimtsz(): number;
  setDimtsz(val: number): number;
  dimtvp(): number;
  setDimtvp(val: number): number;
  dimtxsty(): OdDbHardPointerId;
  setDimtxsty(val: OdDbHardPointerId): number;
  dimtxt(): number;
  setDimtxt(val: number): number;
  dimtzin(): number;
  setDimtzin(val: number): number;
  dimupt(): boolean;
  setDimupt(val: boolean): number;
  dimzin(): number;
  setDimzin(val: number): number;
  dimfxl(): number;
  setDimfxl(val: number): number;
  dimfxlon(): boolean;
  setDimfxlon(val: boolean): number;
  dimjogang(): number;
  setDimjogang(val: number): number;
  dimtfill(): number;
  setDimtfill(val: number): number;
  dimtfillclr(): OdCmColor;
  setDimtfillclr(val: OdCmColor): number;
  dimarcsym(): number;
  setDimarcsym(val: number): number;
  dimltype(): OdDbHardPointerId;
  setDimltype(val: OdDbHardPointerId): number;
  dimltex1(): OdDbHardPointerId;
  setDimltex1(val: OdDbHardPointerId): number;
  dimltex2(): OdDbHardPointerId;
  setDimltex2(val: OdDbHardPointerId): number;
  dimtxtdirection(): boolean;
  setDimtxtdirection(val: boolean): number;
  dimmzf(): number;
  setDimmzf(val: number): number;
  dimmzs(): number;
  setDimmzs(val: OdString): number;
  dimaltmzf(): number;
  setDimaltmzf(val: number): number;
  dimaltmzs(): number;
  setDimaltmzs(val: OdString): number;
  getDIMANNO(): boolean;
  getTDCREATE(): OdDbDate;
  getTDUPDATE(): OdDbDate;
  getCGEOCS(): number;
  resetTimes(): number;
  getSysVar(name: OdString): number;
  setSysVar(name: OdString, pValue: OdResBuf): number;
  handseed(): OdDbHandle;
  getDimstyleData(pDestination: OdDbDimStyleTableRecord): number;
  getDimstyleChildData(pDimClass: OdRxClass, pRec: OdDbDimStyleTableRecord, style: OdDbObjectId): OdResult;
  getDimstyleChildId(pDimClass: OdRxClass, parentStyle: OdDbObjectId): OdDbObjectId;
  getDimstyleParentId(childStyle: OdDbObjectId): OdDbObjectId;
  setDimstyleData(pSource: OdDbDimStyleTableRecord): number;
  setDimstyleData1(objectId: OdDbObjectId): number;
  loadLineTypeFile(ltName: OdString, filename: OdString, dlt: DuplicateLinetypeLoading, encode: TextFileEncoding): number;
  originalFilename(): number;
  getFilename(): number;
  setFilename(fileName: OdString): number;
  purge(objectIds: OdDbObjectIdArray): number;
  purge1(objectIds: OdDbObjectIdGraph): number;
  currentLayoutId(): OdDbObjectId;
  setCurrentLayout(layoutName: OdString): number;
  setCurrentLayout1(layoutId: OdDbObjectId): number;
  findActiveLayout(allowModel: boolean): number;
  getActiveLayoutBTRId(): OdDbObjectId;
  findLayoutNamed(layoutName: OdString): OdDbObjectId;
  deleteLayout(layoutName: OdString): number;
  createLayout(layoutName: OdString, pBlockTableRecId: OdDbObjectId): OdDbObjectId;
  countLayouts(): number;
  renameLayout(oldName: OdString, newName: OdString): number;
  startUndoRecord(): number;
  hasUndo(): boolean;
  undo(): number;
  blockUndoRecording(bBegin: boolean): number;
  isUndoBlockStarted(): boolean;
  setUndoMark(): number;
  hasUndoMark(): boolean;
  undoBack(): number;
  getUNDOMARKS(): number;
  clearUndo(): number;
  hasRedo(): boolean;
  redo(): number;
  auditDatabase(pAuditInfo: OdDbAuditInfo): number;
  applyPartialUndo(pUndoFiler: OdDbDwgFiler, pClassObj: OdRxClass): number;
  undoFiler(): OdDbDwgFiler;
  insert(destinationBlockName: OdString, pSource: OdDbDatabase, preserveSourceDatabase: boolean): OdDbObjectId;
  insert1(sourceBlockName: OdString, destinationBlockName: OdString, pSource: OdDbDatabase, preserveSourceDatabase: boolean): OdDbObjectId;
  insert2(xfm: OdGeMatrix3d, pSource: OdDbDatabase, preserveSourceDatabase: boolean): number;
  wblock(outObjIds: OdDbObjectIdArray, basePoint: OdGePoint3d): number;
  wblock1(blockId: OdDbObjectId): number;
  wblock2(): number;
  wblock3(pOutputDb: OdDbDatabase, outObjIds: OdDbObjectIdArray, basePoint: OdGePoint3d, drc: DuplicateRecordCloning): number;
  subWblockClone(ownerIdMap: OdDbIdMapping, arg1: OdDbObject): number;
  setSecurityParams(secParams: OdSecurityParams, setDbMod: boolean): number;
  securityParams(secParams: OdSecurityParams): boolean;
  fileDependencyManager(): number;
  objectContextManager(): number;
  getLayerStateManager(): OdDbLayerStateManager;
  updateExt(bExact: boolean): number;
  isEMR(): boolean;
  xrefBlockId(): OdDbObjectId;
  isPartiallyOpened(): boolean;
  isDatabaseLoading(): boolean;
  isDatabaseConverting(): boolean;
  auditInfo(): OdDbAuditInfo;
  setCurrentUCS(viewType: OrthographicView): number;
  setCurrentUCS1(ucsId: OdDbObjectId): number;
  setCurrentUCS2(origin: OdGePoint3d, xAxis: OdGeVector3d, yAxis: OdGeVector3d): number;
  getUCSBASEORG(viewType: OrthographicView): OdGePoint3d;
  setUCSBASEORG(viewType: OrthographicView, origin: OdGePoint3d): number;
  getPUCSBASEORG(viewType: OrthographicView): OdGePoint3d;
  setPUCSBASEORG(viewType: OrthographicView, origin: OdGePoint3d): number;
  restoreOriginalXrefSymbols(): number;
  restoreForwardingXrefSymbols(): number;
  byLayerMaterialId(): OdDbObjectId;
  byBlockMaterialId(): OdDbObjectId;
  globalMaterialId(): OdDbObjectId;
  activeViewportId(): OdDbObjectId;
  enableGraphicsFlush(bEnable: boolean): number;
  flushGraphics(): number;
  isMultiThreadedMode(): boolean;
  multiThreadedMode(): MultiThreadedMode;
  setMultiThreadedMode(arg0: MultiThreadedMode): number;
  setCannoscale(val: OdDbAnnotationScale): number;
  cannoscale(): number;
  dataLinkDictionaryId(): OdDbObjectId;
  dataLinkDictionary(mode: OpenMode): number;
  usingCoreOnly(): boolean;
  enqueuePaging(id: OdDbObjectId): boolean;
  pageObjects(): boolean;
  indexingMode(): number;
  setIndexingMode(nIndexingModeBitFlags: number): number;
  isPerObjectConverting(): boolean;
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
  static rxInit(): number;
  static rxUninit(): number;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  setLeaderLength(leaderLength: number): number;
  leaderLength(): number;
  chordPoint(): OdGePoint3d;
  setChordPoint(chordPoint: OdGePoint3d): number;
  farChordPoint(): OdGePoint3d;
  setFarChordPoint(farChordPoint: OdGePoint3d): number;
  extArcOn(): boolean;
  extArcStartAngle(): number;
  setExtArcStartAngle(newAngle: number): number;
  extArcEndAngle(): number;
  setExtArcEndAngle(newAngle: number): number;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): number;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): number;
  dxfInFields_R12(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields_R12(pFiler: OdDbDxfFiler): number;
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbDictionaryIterator.html} Additional documentation.
 */
class OdDbDictionaryIterator extends OdRxIterator {
  static cast(pObj: OdRxObject): OdDbDictionaryIterator;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdDbDictionaryIterator;
  static rxInit(): number;
  static rxUninit(): number;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  name(): number;
  getObject(openMode: OpenMode): number;
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
  static rxInit(): number;
  static rxUninit(): number;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  getAt(name: OdString, mode: OpenMode): number;
  nameAt(objectId: OdDbObjectId): number;
  has(name: OdString): boolean;
  has1(objectId: OdDbObjectId): boolean;
  numEntries(): number;
  remove(name: OdString): OdDbObjectId;
  remove1(objectId: OdDbObjectId): number;
  setName(oldName: OdString, newName: OdString): boolean;
  setAt(name: OdString, newValue: OdDbObject): OdDbObjectId;
  isTreatElementsAsHard(): boolean;
  setTreatElementsAsHard(doIt: boolean): number;
  newIterator(iterType: DictIterType): number;
  begin(): any;
  end(): any;
  suggestName(strFilePath: OdString, nMaxLength: number): number;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): number;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): number;
  mergeStyle(): DuplicateRecordCloning;
  setMergeStyle(mergeStyle: DuplicateRecordCloning): number;
  goodbye(pObject: OdDbObject): number;
  erased(pObject: OdDbObject, erasing: boolean): number;
  applyPartialUndo(pFiler: OdDbDwgFiler, pClass: OdRxClass): number;
  subClose(): number;
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbXrefFullSubentPath.html} Additional documentation.
 */
class OdDbXrefFullSubentPath extends OdDbFullSubentPath {
  constructor(arg0: OdDbXrefFullSubentPath);
  constructor();
  xrefObjHandles(): number;
  xrefObjHandles1(): number;
  dwgIn(pFiler: OdDbDwgFiler): number;
  dwgOut(pFiler: OdDbDwgFiler): number;
  dxfOut(pFiler: OdDbDxfFiler, groupCodeOffset: number): number;
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
  static rxInit(): number;
  static rxUninit(): number;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): number;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): number;
  dimObjId(): OdDbObjectId;
  setDimObjId(dimId: OdDbObjectId): number;
  assocFlag(): number;
  assocFlag1(pointIndex: number): boolean;
  setAssocFlag(assocFlag: number): number;
  setAssocFlag1(pointIndex: number, flagValue: boolean): number;
  pointRef(pointIndex: number): number;
  setPointRef(pointIndex: number, pOsnapPointRef: OdDbOsnapPointRefPtr): number;
  rotatedDimType(): RotatedDimType;
  setRotatedDimType(dimType: RotatedDimType): number;
  addToPointRefReactor(): number;
  addToDimensionReactor(isAdd: boolean): number;
  removePointRef(ptType: number): OdResult;
  updateDimension(update: boolean, skipReactors: boolean): OdResult;
  removeAssociativity(force: boolean): number;
  isTransSpatial(): boolean;
  setTransSpatial(value: boolean): number;
  post(dimId: OdDbObjectId, dimAssocId: OdDbObjectId, isActive: boolean): OdResult;
  getDimAssocGeomIds(geomIds: OdDbObjectIdArray): OdResult;
  isAllGeomErased(): boolean;
  modifiedGraphics(pObj: OdDbObject): number;
  copied(pObj: OdDbObject, pNewObj: OdDbObject): number;
  erased(pObj: OdDbObject, erasing: boolean): number;
  openedForModify(pObject: OdDbObject): number;
  subWblockClone(idMap: OdDbIdMapping, pOwner: OdDbObject, bPrimary: boolean): number;
  subDeepClone(idMap: OdDbIdMapping, pOwner: OdDbObject, bPrimary: boolean): number;
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbPointRef.html} Additional documentation.
 */
class OdDbPointRef extends OdRxObject {
  static cast(pObj: OdRxObject): OdDbPointRef;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdDbPointRef;
  static rxInit(): number;
  static rxUninit(): number;
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
  dwgOutFields(filer: OdDbDwgFiler): number;
  dwgInFields(filer: OdDbDwgFiler): number;
  dxfOutFields(filer: OdDbDxfFiler): number;
  dxfInFields(filer: OdDbDxfFiler): OdResult;
  updateDueToMirror(inMirror: boolean): number;
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbOsnapPointRef.html} Additional documentation.
 */
class OdDbOsnapPointRef extends OdDbPointRef {
  static cast(pObj: OdRxObject): OdDbOsnapPointRef;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdDbOsnapPointRef;
  static rxInit(): number;
  static rxUninit(): number;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  osnapType(): OsnapMode;
  setOsnapType(osnapMode: OsnapMode): number;
  mainEntity(): OdDbXrefFullSubentPath;
  intersectEntity(): OdDbXrefFullSubentPath;
  getIdPath(idPath: OdDbFullSubentPath): number;
  setIdPath(idPath: OdDbFullSubentPath): number;
  getIntIdPath(intIdPath: OdDbFullSubentPath): number;
  setIntIdPath(intIdPath: OdDbFullSubentPath): number;
  nearPointParam(): number;
  setNearPointParam(nearOsnap: number): number;
  point(): OdGePoint3d;
  setPoint(pt: OdGePoint3d): number;
  lastPointRef(): OdDbOsnapPointRef;
  lastPointRef1(): OdDbOsnapPointRef;
  setLastPointRef(pOsnapPointRef: OdDbOsnapPointRefPtr): number;
  isGeomErased(): boolean;
  isXrefObj(ids1: OdDbObjectIdArray, ids2: OdDbObjectIdArray, isMainObj: boolean): boolean;
  updateXrefSubentPath(): OdResult;
  updateSubentPath(idMap: OdDbIdMapping): OdResult;
  evalPoint(pt: OdGePoint3d): OdResult;
  getEntities(ents: OdDbFullSubentPathArray, getLastPtRef: boolean): OdResult;
  updateDueToMirror(inMirror: boolean): number;
  getXrefHandles(xrefHandles: OdHandleArray): number;
  setXrefHandles(xrefHandles: OdHandleArray): number;
  getXrefIntHandles(xrefHandles: OdHandleArray): number;
  setXrefIntHandles(xrefHandles: OdHandleArray): number;
  dwgInFields(pFiler: OdDbDwgFiler): number;
  dwgOutFields(pFiler: OdDbDwgFiler): number;
  dxfOutFields(pFiler: OdDbDxfFiler): number;
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

enum AssocFlags {
  kFirstPointRef = 1,
  kSecondPointRef = 2,
  kThirdPointRef = 4,
  kFourthPointRef = 8
};

enum RotatedDimType {
  kUnknown = 0,
  kParallel = 1,
  kPerpendicular = 2
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
  static rxInit(): number;
  static rxUninit(): number;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  textPosition(): OdGePoint3d;
  setTextPosition(textPosition: OdGePoint3d): number;
  isUsingDefaultTextPosition(): boolean;
  useSetTextPosition(): number;
  useDefaultTextPosition(): number;
  normal(): OdGeVector3d;
  setNormal(normal: OdGeVector3d): number;
  isPlanar(): boolean;
  elevation(): number;
  setElevation(elevation: number): number;
  dimensionText(): number;
  setDimensionText(dimensionText: OdString): number;
  textRotation(): number;
  setTextRotation(textRotation: number): number;
  dimensionStyle(): OdDbObjectId;
  setDimensionStyle(objectID: OdDbObjectId): number;
  textAttachment(): AttachmentPoint;
  setTextAttachment(attachmentPoint: AttachmentPoint): number;
  textLineSpacingStyle(): LineSpacingStyle;
  setTextLineSpacingStyle(lineSpacingStyle: LineSpacingStyle): number;
  textLineSpacingFactor(): number;
  setTextLineSpacingFactor(lineSpacingFactor: number): number;
  getDimstyleData(pRecord: OdDbDimStyleTableRecord): number;
  setDimstyleData(pDimstyle: OdDbDimStyleTableRecord): number;
  setDimstyleData1(dimstyleID: OdDbObjectId): number;
  horizontalRotation(): number;
  setHorizontalRotation(horizontalRotation: number): number;
  dimBlockId(): OdDbObjectId;
  setDimBlockId(dimBlockId: OdDbObjectId, singleReferenced: boolean): number;
  isSingleDimBlockReference(): boolean;
  dimBlockPosition(): OdGePoint3d;
  setDimBlockPosition(dimBlockPosition: OdGePoint3d): number;
  dimBlockRotation(): number;
  setDimBlockRotation(dimBlockRotation: number): number;
  dimBlockScale(): OdGeScale3d;
  setDimBlockScale(dimBlockScale: OdGeScale3d): number;
  dimBlockTransform(): OdGeMatrix3d;
  recomputeDimBlock(forceUpdate: boolean): number;
  getMeasurement(): number;
  measurement(): number;
  getBgrndTxtColor(bgrndTxtColor: OdCmColor): number;
  setBgrndTxtColor(bgrndTxtColor: OdCmColor, bgrndTxtFlags: number): number;
  getExtLineFixLenEnable(): boolean;
  setExtLineFixLenEnable(extLineFixLenEnable: boolean): number;
  getExtLineFixLen(): number;
  setExtLineFixLen(extLineFixLen: number): number;
  getDimLinetype(): OdDbObjectId;
  setDimLinetype(linetypeId: OdDbObjectId): number;
  getDimExt1Linetype(): OdDbObjectId;
  setDimExt1Linetype(linetypeId: OdDbObjectId): number;
  getDimExt2Linetype(): OdDbObjectId;
  setDimExt2Linetype(linetypeId: OdDbObjectId): number;
  getArrowFirstIsFlipped(): boolean;
  getArrowSecondIsFlipped(): boolean;
  setArrowFirstIsFlipped(bIsFlipped: boolean): number;
  setArrowSecondIsFlipped(bIsFlipped: boolean): number;
  inspection(): boolean;
  setInspection(val: boolean): number;
  inspectionFrame(): number;
  setInspectionFrame(frame: number): number;
  inspectionLabel(): number;
  setInspectionLabel(label: OdString): number;
  inspectionRate(): number;
  setInspectionRate(label: OdString): number;
  dimadec(): number;
  setDimadec(val: number): number;
  dimalt(): boolean;
  setDimalt(val: boolean): number;
  dimaltd(): number;
  setDimaltd(val: number): number;
  dimaltf(): number;
  setDimaltf(val: number): number;
  dimaltrnd(): number;
  setDimaltrnd(val: number): number;
  dimalttd(): number;
  setDimalttd(val: number): number;
  dimalttz(): number;
  setDimalttz(val: number): number;
  dimaltu(): number;
  setDimaltu(val: number): number;
  dimaltz(): number;
  setDimaltz(val: number): number;
  dimapost(): number;
  setDimapost(val: OdString): number;
  dimasz(): number;
  setDimasz(val: number): number;
  dimatfit(): number;
  setDimatfit(val: number): number;
  dimaunit(): number;
  setDimaunit(val: number): number;
  dimazin(): number;
  setDimazin(val: number): number;
  dimblk(): OdDbHardPointerId;
  setDimblk(val: OdDbHardPointerId): number;
  dimblk1(): OdDbHardPointerId;
  setDimblk1(val: OdDbHardPointerId): number;
  dimblk2(): OdDbHardPointerId;
  setDimblk2(val: OdDbHardPointerId): number;
  dimcen(): number;
  setDimcen(val: number): number;
  dimclrd(): OdCmColor;
  setDimclrd(val: OdCmColor): number;
  dimclre(): OdCmColor;
  setDimclre(val: OdCmColor): number;
  dimclrt(): OdCmColor;
  setDimclrt(val: OdCmColor): number;
  dimdec(): number;
  setDimdec(val: number): number;
  dimdle(): number;
  setDimdle(val: number): number;
  dimdli(): number;
  setDimdli(val: number): number;
  dimdsep(): number;
  setDimdsep(val: number): number;
  dimexe(): number;
  setDimexe(val: number): number;
  dimexo(): number;
  setDimexo(val: number): number;
  dimfrac(): number;
  setDimfrac(val: number): number;
  dimgap(): number;
  setDimgap(val: number): number;
  dimjust(): number;
  setDimjust(val: number): number;
  dimldrblk(): OdDbHardPointerId;
  setDimldrblk(val: OdDbHardPointerId): number;
  dimlfac(): number;
  setDimlfac(val: number): number;
  dimlim(): boolean;
  setDimlim(val: boolean): number;
  dimlunit(): number;
  setDimlunit(val: number): number;
  dimlwd(): LineWeight;
  setDimlwd(val: LineWeight): number;
  dimlwe(): LineWeight;
  setDimlwe(val: LineWeight): number;
  dimpost(): number;
  setDimpost(val: OdString): number;
  dimrnd(): number;
  setDimrnd(val: number): number;
  dimsah(): boolean;
  setDimsah(val: boolean): number;
  dimscale(): number;
  setDimscale(val: number): number;
  dimsd1(): boolean;
  setDimsd1(val: boolean): number;
  dimsd2(): boolean;
  setDimsd2(val: boolean): number;
  dimse1(): boolean;
  setDimse1(val: boolean): number;
  dimse2(): boolean;
  setDimse2(val: boolean): number;
  dimsoxd(): boolean;
  setDimsoxd(val: boolean): number;
  dimtad(): number;
  setDimtad(val: number): number;
  dimtdec(): number;
  setDimtdec(val: number): number;
  dimtfac(): number;
  setDimtfac(val: number): number;
  dimtih(): boolean;
  setDimtih(val: boolean): number;
  dimtix(): boolean;
  setDimtix(val: boolean): number;
  dimtm(): number;
  setDimtm(val: number): number;
  dimtmove(): number;
  setDimtmove(val: number): number;
  dimtofl(): boolean;
  setDimtofl(val: boolean): number;
  dimtoh(): boolean;
  setDimtoh(val: boolean): number;
  dimtol(): boolean;
  setDimtol(val: boolean): number;
  dimtolj(): number;
  setDimtolj(val: number): number;
  dimtp(): number;
  setDimtp(val: number): number;
  dimtsz(): number;
  setDimtsz(val: number): number;
  dimtvp(): number;
  setDimtvp(val: number): number;
  dimtxsty(): OdDbHardPointerId;
  setDimtxsty(val: OdDbHardPointerId): number;
  dimtxt(): number;
  setDimtxt(val: number): number;
  dimtzin(): number;
  setDimtzin(val: number): number;
  dimupt(): boolean;
  setDimupt(val: boolean): number;
  dimzin(): number;
  setDimzin(val: number): number;
  dimfxl(): number;
  setDimfxl(val: number): number;
  dimfxlon(): boolean;
  setDimfxlon(val: boolean): number;
  dimjogang(): number;
  setDimjogang(val: number): number;
  dimtfill(): number;
  setDimtfill(val: number): number;
  dimtfillclr(): OdCmColor;
  setDimtfillclr(val: OdCmColor): number;
  dimarcsym(): number;
  setDimarcsym(val: number): number;
  dimltype(): OdDbHardPointerId;
  setDimltype(val: OdDbHardPointerId): number;
  dimltex1(): OdDbHardPointerId;
  setDimltex1(val: OdDbHardPointerId): number;
  dimltex2(): OdDbHardPointerId;
  setDimltex2(val: OdDbHardPointerId): number;
  dimtxtdirection(): boolean;
  setDimtxtdirection(val: boolean): number;
  dimmzf(): number;
  setDimmzf(val: number): number;
  dimmzs(): number;
  setDimmzs(val: OdString): number;
  dimaltmzf(): number;
  setDimaltmzf(val: number): number;
  dimaltmzs(): number;
  setDimaltmzs(val: OdString): number;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): number;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): number;
  dxfInFields_R12(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields_R12(pFiler: OdDbDxfFiler): number;
  subSetAttributes(pTraits: OdGiDrawableTraits): number;
  subWorldDraw(pWd: OdGiWorldDraw): boolean;
  subViewportDraw(pVd: OdGiViewportDraw): number;
  subExplode(entitySet: OdRxObjectPtrArray): OdResult;
  subClose(): number;
  modified(pObject: OdDbObject): number;
  subTransformBy(xfm: OdGeMatrix3d): OdResult;
  subGetTransformedCopy(xfm: OdGeMatrix3d, pCopy: OdDbEntityPtr): OdResult;
  subSetDatabaseDefaults(pDb: OdDbDatabase, doSubents: boolean): number;
  appendToOwner(idPair: OdDbIdPair, pOwnerObject: OdDbObject, ownerIdMap: OdDbIdMapping): number;
  subWblockClone(ownerIdMap: OdDbIdMapping, arg1: OdDbObject, bPrimary: boolean): number;
  formatMeasurement(formattedMeasurement: OdString, measurementValue: number, dimensionText: OdString): number;
  explodeGeometry(entitySet: OdRxObjectPtrArray): OdResult;
  dimBlock(openMode: OpenMode): number;
  subGetCompoundObjectTransform(xM: OdGeMatrix3d): OdResult;
  isDynamicDimension(): boolean;
  setDynamicDimension(bDynamic: boolean): number;
  isConstraintObject(): boolean;
  isConstraintDynamic(): boolean;
  setConstraintDynamic(bDynamic: boolean): OdResult;
  shouldParticipateInOPM(): boolean;
  setShouldParticipateInOPM(bShouldParticipate: boolean): number;
  setDIMTALN(val: boolean): number;
  getDIMTALN(): boolean;
  removeTextField(): number;
  fieldToMText(pDimMText: OdDbMTextPtr): number;
  fieldFromMText(pDimMText: OdDbMTextPtr): number;
  getEcs(): OdGeMatrix3d;
  resetTextDefinedSize(): number;
  setTextDefinedSize(width: number, height: number): number;
  subGetGeomExtents(extents: OdGeExtents3d): OdResult;
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbDimensionRecomputePE.html} Additional documentation.
 */
class OdDbDimensionRecomputePE extends OdRxObject {
  static setMeasurementValue(pDimension: OdDbDimension, measurementValue: number): number;
  static resetDimBlockInsertParams(pDimension: OdDbDimension): number;
  static cast(pObj: OdRxObject): OdDbDimensionRecomputePE;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdDbDimensionRecomputePE;
  static rxInit(): number;
  static rxUninit(): number;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  recomputeDimMeasurement(pDimension: OdDbDimension): number;
  recomputeDimBlock(pDimension: OdDbDimension, ctx: OdDbDimensionObjectContextData): number;
  formatMeasurement(pDimension: OdDbDimension, formattedMeasurement: OdString, measurementValue: number, dimensionText: OdString): number;
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
  static rxInit(): number;
  static rxUninit(): number;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  center(): OdGePoint3d;
  setCenter(center: OdGePoint3d): number;
  normal(): OdGeVector3d;
  majorAxis(): OdGeVector3d;
  minorAxis(): OdGeVector3d;
  radiusRatio(): number;
  setRadiusRatio(radiusRatio: number): number;
  startAngle(): number;
  setStartAngle(startAngle: number): OdResult;
  endAngle(): number;
  setEndAngle(endAngle: number): OdResult;
  paramAtAngle(angle: number): number;
  angleAtParam(param: number): number;
  set(center: OdGePoint3d, unitNormal: OdGeVector3d, majorAxis: OdGeVector3d, radiusRatio: number, startAngle: number, endAngle: number): number;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): number;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): number;
  subWorldDraw(pWd: OdGiWorldDraw): boolean;
  isClosed(): boolean;
  isPeriodic(): boolean;
  isPlanar(): boolean;
  setStartParam(startParam: number): OdResult;
  setEndParam(endParam: number): OdResult;
  getStartPoint(startPoint: OdGePoint3d): OdResult;
  getEndPoint(endPoint: OdGePoint3d): OdResult;
  getPointAtParam(param: number, pointOnCurve: OdGePoint3d): OdResult;
  getFirstDeriv(param: number, firstDeriv: OdGeVector3d): OdResult;
  getSecondDeriv(param: number, secondDeriv: OdGeVector3d): OdResult;
  subTransformBy(xfm: OdGeMatrix3d): OdResult;
  setFromOdGeCurve(geCurve: OdGeCurve3d, normal: OdGeVector3d, tol: OdGeTol): OdResult;
  reverseCurve(): OdResult;
  getOffsetCurves(offsetDist: number, offsetCurves: OdRxObjectPtrArray): OdResult;
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
  static rxInit(): number;
  static rxUninit(): number;
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
  plotStyleName(): number;
  getPlotStyleNameId(plotStyleNameId: OdDbObjectId): PlotStyleNameType;
  setPlotStyleName(plotStyleName: OdString, doSubents: boolean): OdResult;
  setPlotStyleName1(plotStyleNameType: PlotStyleNameType, plotStyleNameId: OdDbObjectId, doSubents: boolean): OdResult;
  layer(): number;
  layerId(): OdDbObjectId;
  setLayer(layerName: OdString, doSubents: boolean, allowHiddenLayer: boolean): OdResult;
  setLayer1(layerId: OdDbObjectId, doSubents: boolean, allowHiddenLayer: boolean): OdResult;
  linetype(): number;
  linetypeId(): OdDbObjectId;
  setLinetype(linetypeName: OdString, doSubents: boolean): OdResult;
  setLinetype1(linetypeID: OdDbObjectId, doSubents: boolean): OdResult;
  material(): number;
  materialId(): OdDbObjectId;
  setMaterial(materialName: OdString, doSubents: boolean): OdResult;
  setMaterial1(materialID: OdDbObjectId, doSubents: boolean): OdResult;
  visualStyleId(vstype: VisualStyleType): OdDbObjectId;
  setVisualStyle(visualStyleId: OdDbObjectId, vstype: VisualStyleType, doSubents: boolean): OdResult;
  materialMapper(): OdGiMapper;
  setMaterialMapper(mapper: OdGiMapper, doSubents: boolean): number;
  linetypeScale(): number;
  setLinetypeScale(linetypeScale: number, doSubents: boolean): OdResult;
  visibility(): Visibility;
  setVisibility(visibility: Visibility, doSubents: boolean): OdResult;
  tempVisibility(): Visibility;
  setTempVisibility(visibility: Visibility): number;
  lineWeight(): LineWeight;
  setLineWeight(lineWeight: LineWeight, doSubents: boolean): OdResult;
  castShadows(): boolean;
  setCastShadows(castShadows: boolean): number;
  receiveShadows(): boolean;
  setReceiveShadows(receiveShadows: boolean): number;
  collisionType(): CollisionType;
  setPropertiesFrom(pSource: OdDbEntity, doSubents: boolean): number;
  isPlanar(): boolean;
  subHandOverTo(pNewObject: OdDbObject): number;
  transformBy(xfm: OdGeMatrix3d): OdResult;
  getTransformedCopy(xfm: OdGeMatrix3d, pCopy: OdDbEntityPtr): OdResult;
  explode(entitySet: OdRxObjectPtrArray): OdResult;
  explodeToBlock(pBlockRecord: OdDbBlockTableRecord, ids: OdDbObjectIdArray): OdResult;
  explodeGeometry(entitySet: OdRxObjectPtrArray): OdResult;
  explodeGeometryToBlock(pBlockRecord: OdDbBlockTableRecord, ids: OdDbObjectIdArray): OdResult;
  subWorldDraw(pWd: OdGiWorldDraw): boolean;
  subViewportDraw(pVd: OdGiViewportDraw): number;
  setDatabaseDefaults(pDb: OdDbDatabase, doSubents: boolean): number;
  subSetDatabaseDefaults(pDb: OdDbDatabase, doSubents: boolean): number;
  applyPartialUndo(pUndoFiler: OdDbDwgFiler, pClassObj: OdRxClass): number;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): number;
  appendToOwner(idPair: OdDbIdPair, pOwnerObject: OdDbObject, ownerIdMap: OdDbIdMapping): number;
  dxfIn(pFiler: OdDbDxfFiler): OdResult;
  dxfOut(pFiler: OdDbDxfFiler): number;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): number;
  dxfInFields_R12(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields_R12(pFiler: OdDbDxfFiler): number;
  drawable(): OdGiDrawable;
  subSetAttributes(pTraits: OdGiDrawableTraits): number;
  subList(): number;
  subSwapIdWith(otherId: OdDbObjectId, swapXdata: boolean, swapExtDict: boolean): number;
  subErase(erasing: boolean): OdResult;
  subOpen(mode: OpenMode): OdResult;
  recordGraphicsModified(graphicsModified: boolean): number;
  copyFrom(pSource: OdRxObject): number;
  list(): number;
  getGeomExtents(extents: OdGeExtents3d): OdResult;
  highlight(bDoIt: boolean, pSubId: OdDbFullSubentPath, highlightAll: boolean): number;
  getOsnapPoints(osnapMode: OsnapMode, gsSelectionMark: number, pickPoint: OdGePoint3d, lastPoint: OdGePoint3d, xWorldToEye: OdGeMatrix3d, snapPoints: OdGePoint3dArray): OdResult;
  getOsnapPoints1(osnapMode: OsnapMode, gsSelectionMark: number, pickPoint: OdGePoint3d, lastPoint: OdGePoint3d, xWorldToEye: OdGeMatrix3d, snapPoints: OdGePoint3dArray, insertionMat: OdGeMatrix3d): OdResult;
  isContentSnappable(): boolean;
  getGripPoints(gripPoints: OdGePoint3dArray): OdResult;
  moveGripPointsAt(indices: OdIntArray, offset: OdGeVector3d): OdResult;
  getGripPoints1(grips: OdDbGripDataPtrArray, curViewUnitSize: number, gripSize: number, curViewDir: OdGeVector3d, bitFlags: number): OdResult;
  moveGripPointsAt1(grips: OdDbVoidPtrArray, offset: OdGeVector3d, bitFlags: number): OdResult;
  getStretchPoints(stretchPoints: OdGePoint3dArray): OdResult;
  moveStretchPointsAt(indices: OdIntArray, offset: OdGeVector3d): OdResult;
  dragStatus(status: DragStat): number;
  gripStatus(status: GripStat): number;
  cloneMeForDragging(): boolean;
  hideMeForDragging(): boolean;
  saveAs(pWd: OdGiWorldDraw, ver: DwgVersion): number;
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
  subentPtr(path: OdDbFullSubentPath): number;
  transformSubentPathsBy(paths: OdDbFullSubentPathArray, xform: OdGeMatrix3d): OdResult;
  getSubentPathGeomExtents(path: OdDbFullSubentPath, extents: OdGeExtents3d): OdResult;
  subentGripStatus(status: GripStat, subentity: OdDbFullSubentPath): number;
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
  static rxInit(): number;
  static rxUninit(): number;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  createExtrudedSurface(pSweepEnt: OdDbEntity, directionVec: OdGeVector3d, sweepOptions: OdDbSweepOptions, pSat: OdStreamBuf): OdResult;
  getSweepEntity(): number;
  getSweepVec(): OdGeVector3d;
  setSweepVec(sweepVec: OdGeVector3d): number;
  getHeight(): number;
  setHeight(height: number): number;
  getSweepOptions(sweepOptions: OdDbSweepOptions): number;
  setSweepOptions(sweepOptions: OdDbSweepOptions): number;
  setExtrude(sweepVec: OdGeVector3d, sweepOptions: OdDbSweepOptions): OdResult;
  subTransformBy(xfm: OdGeMatrix3d): OdResult;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): number;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): number;
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
  static rxInit(): number;
  static rxUninit(): number;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  getVertexAt(vertexIndex: number, vertexValue: OdGePoint3d): number;
  setVertexAt(vertexIndex: number, vertexValue: OdGePoint3d): number;
  isEdgeVisibleAt(edgeIndex: number): boolean;
  makeEdgeVisibleAt(edgeIndex: number): number;
  makeEdgeInvisibleAt(edgeIndex: number): number;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): number;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): number;
  dxfInFields_R12(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields_R12(pFiler: OdDbDxfFiler): number;
  subWorldDraw(pWd: OdGiWorldDraw): boolean;
  subViewportDraw(pVd: OdGiViewportDraw): number;
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
  static rxInit(): number;
  static rxUninit(): number;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  getVertexAt(cornerIndex: number): number;
  setVertexAt(cornerIndex: number, vertexIndex: number): number;
  isEdgeVisibleAt(edgeIndex: number): boolean;
  makeEdgeVisibleAt(edgeIndex: number): number;
  makeEdgeInvisibleAt(edgeIndex: number): number;
  dxfInFields_R12(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields_R12(pFiler: OdDbDxfFiler): number;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): number;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): number;
  subErase(erasing: boolean): OdResult;
  subGetGeomExtents(extents: OdGeExtents3d): OdResult;
};

class OdDbVoidPtrArray extends OdArray<number> { };

class OdDbGripDataPtrArray extends OdArray<OdDbGripData> { };

class OdDbGripDataArray extends OdArray<OdDbGripData> { };

class OdDbDimDataPtrArray extends OdArray<OdDbDimData> { };

enum DrawType {
  kWarmGrip = 0,
  kHoverGrip = 1,
  kHotGrip = 2,
  kDragImageGrip = 3
};

enum DragStat {
  kDragStart = 0,
  kDragEnd = 1,
  kDragAbort = 2
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

enum GetGripPointsFlags {
  kGripPointsOnly = 1,
  kCyclableGripsOnly = 2,
  kDynamicDimMode = 4
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

enum GripContextFlags {
  kSharedGrip = 1,
  kMultiHotGrip = 2
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

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdDbGripData.html} Additional documentation.
 */
class OdDbGripData {
  constructor();
  constructor(arg0: OdDbGripData);
  gripPoint(): OdGePoint3d;
  setGripPoint(pt: OdGePoint3d): number;
  appDataOdRxClass(): OdRxClass;
  setAppDataOdRxClass(pClass: OdRxClass): number;
  alternateBasePoint(): OdGePoint3d;
  setAlternateBasePoint(altBasePt: OdGePoint3d): number;
  bitFlags(): number;
  setBitFlags(flags: number): number;
  skipWhenShared(): boolean;
  setSkipWhenShared(skip: boolean): number;
  isRubberBandLineDisabled(): boolean;
  disableRubberBandLine(disable: boolean): number;
  areModeKeywordsDisabled(): boolean;
  disableModeKeywords(disable: boolean): number;
  drawAtDragImageGripPoint(): boolean;
  setDrawAtDragImageGripPoint(atDragPoint: boolean): number;
  triggerGrip(): boolean;
  setTriggerGrip(trigger: boolean): number;
  forcedPickOn(): boolean;
  setForcedPickOn(on: boolean): number;
  mapGripHotToRtClk(): boolean;
  setMapGripHotToRtClk(on: boolean): number;
  gizmosEnabled(): boolean;
  setGizmosEnabled(on: boolean): number;
  gripIsPerViewport(): boolean;
  setGripIsPerViewport(on: boolean): number;
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbGroupIterator.html} Additional documentation.
 */
class OdDbGroupIterator extends OdRxObject {
  static cast(pObj: OdRxObject): OdDbGroupIterator;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdDbGroupIterator;
  static rxInit(): number;
  static rxUninit(): number;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  getObject(openMode: OpenMode): number;
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
  static rxInit(): number;
  static rxUninit(): number;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  newIterator(): number;
  description(): number;
  setDescription(description: OdString): number;
  isSelectable(): boolean;
  setSelectable(selectable: boolean): number;
  name(): number;
  setName(name: OdString): number;
  isNotAccessible(): boolean;
  isAnonymous(): boolean;
  setAnonymous(): number;
  append(objectId: OdDbObjectId): number;
  append1(objectIds: OdDbObjectIdArray): number;
  prepend(objectId: OdDbObjectId): number;
  prepend1(objectIds: OdDbObjectIdArray): number;
  insertAt(insertionIndex: number, objectId: OdDbObjectId): number;
  insertAt1(insertionIndex: number, objectIds: OdDbObjectIdArray): number;
  remove(objectId: OdDbObjectId): number;
  removeAt(entityIndex: number): number;
  remove1(objectIds: OdDbObjectIdArray): number;
  removeAt1(index: number, objectIds: OdDbObjectIdArray): number;
  replace(oldId: OdDbObjectId, newId: OdDbObjectId): number;
  transfer(fromIndex: number, toIndex: number, numItems: number): number;
  clear(): number;
  numEntities(): number;
  has(pEntity: OdDbEntity): boolean;
  allEntityIds(objectIds: OdDbObjectIdArray): number;
  reverse(): number;
  setColorIndex(colorIndex: number): number;
  setColor(color: OdCmColor): number;
  setLayer(layer: OdString): number;
  setLayer1(layerId: OdDbObjectId): number;
  setLinetype(linetype: OdString): number;
  setLinetype1(linetypeID: OdDbObjectId): number;
  setLinetypeScale(linetypeScale: number): number;
  setVisibility(visibility: Visibility): number;
  setPlotStyleName(plotStyleName: OdString): number;
  setLineweight(lineWeight: LineWeight): number;
  setHighlight(newVal: boolean): OdResult;
  setMaterial(materialName: OdString): OdResult;
  setMaterial1(materialID: OdDbObjectId): OdResult;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): number;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): number;
  copied(pObject: OdDbObject, pNewObject: OdDbObject): number;
  appendToOwner(idPair: OdDbIdPair, pOwnerObject: OdDbObject, ownerIdMap: OdDbIdMapping): number;
  subClose(): number;
  subWblockClone(ownerIdMap: OdDbIdMapping, arg1: OdDbObject, bPrimary: boolean): number;
  subDeepClone(ownerIdMap: OdDbIdMapping, arg1: OdDbObject, bPrimary: boolean): number;
};

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdDbHandle.html} Additional documentation.
 */
class OdDbHandle {
  constructor();
  constructor(value: OdDbHandle);
  ascii(): number;
  isNull(): boolean;
};

class OdHandleArray extends OdArray<OdDbHandle> { };

class EdgeArray extends OdArray<OdGeCurve2d> { };

enum HatchObjectType {
  kHatchObject = 0,
  kGradientObject = 1
};

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

enum GradientPatternType {
  kPreDefinedGradient = 0,
  kUserDefinedGradient = 1
};

enum HatchStyle {
  kNormal = 0,
  kOuter = 1,
  kIgnore = 2
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
  static rxInit(): number;
  static rxUninit(): number;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  elevation(): number;
  setElevation(elevation: number): number;
  normal(): OdGeVector3d;
  setNormal(normal: OdGeVector3d): number;
  isPlanar(): boolean;
  numLoops(): number;
  loopTypeAt(loopIndex: number): number;
  getLoopAt(loopIndex: number, edgePtrs: EdgeArray): number;
  getLoopAt1(loopIndex: number, vertices: OdGePoint2dArray, bulges: OdGeDoubleArray): number;
  appendLoop(loopType: number, edgePtrs: EdgeArray): number;
  appendLoop1(loopType: number, vertices: OdGePoint2dArray, bulges: OdGeDoubleArray): number;
  appendLoop2(loopType: number, dbObjIds: OdDbObjectIdArray, bCheckLoop: boolean): number;
  appendOrderedLoop(loopType: number, edgePtrs: EdgeArray): number;
  insertLoopAt(loopIndex: number, loopType: number, edgePtrs: EdgeArray): number;
  insertLoopAt1(loopIndex: number, loopType: number, vertices: OdGePoint2dArray, bulges: OdGeDoubleArray): number;
  insertLoopAt2(loopIndex: number, loopType: number, dbObjIds: OdDbObjectIdArray, bCheckLoop: boolean): number;
  removeLoopAt(loopIndex: number): number;
  associative(): boolean;
  setAssociative(isAssociative: boolean): number;
  getAssocObjIdsAt(loopIndex: number, dbObjIds: OdDbObjectIdArray): number;
  getAssocObjIds(dbObjIds: OdDbObjectIdArray): number;
  setAssocObjIdsAt(loopIndex: number, dbObjIds: OdDbObjectIdArray): number;
  removeAssocObjIds(): number;
  patternType(): HatchPatternType;
  isSolidFill(): boolean;
  patternName(): number;
  setPattern(patType: HatchPatternType, patName: OdString): number;
  setPattern1(patType: HatchPatternType, patName: OdString, angle: number, scale: number, pat: OdHatchPattern, originPoint: OdGePoint2d): number;
  patternAngle(): number;
  setPatternAngle(angle: number): number;
  patternSpace(): number;
  setPatternSpace(space: number): number;
  patternScale(): number;
  setPatternScale(scale: number): number;
  patternDouble(): boolean;
  setPatternDouble(isDouble: boolean): number;
  numPatternDefinitions(): number;
  regeneratePattern(forceReload: boolean): number;
  hatchStyle(): HatchStyle;
  setHatchStyle(hatchStyle: HatchStyle): number;
  numSeedPoints(): number;
  getSeedPointAt(seedIndex: number): OdGePoint2d;
  setSeedPointAt(seedIndex: number, point: OdGePoint2d): number;
  appendSeedPoint(point: OdGePoint2d): number;
  removeSeedPointAt(seedPointIndex: number): number;
  pixelSize(): number;
  setPixelSize(pixelSize: number): number;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): number;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): number;
  subWorldDraw(pWd: OdGiWorldDraw): boolean;
  subViewportDraw(pWd: OdGiViewportDraw): number;
  subTransformBy(xfm: OdGeMatrix3d): OdResult;
  subGetTransformedCopy(xfm: OdGeMatrix3d, pCopy: OdDbEntityPtr): OdResult;
  subSetDatabaseDefaults(pDb: OdDbDatabase, doSubents: boolean): number;
  evaluateHatch(bUnderestimateNumLines: boolean): OdResult;
  numHatchLines(): number;
  getHatchLineDataAt(lineIndex: number, startPoint: OdGePoint2d, endPoint: OdGePoint2d): number;
  getHatchLinesData(startPoints: OdGePoint2dArray, endPoints: OdGePoint2dArray): number;
  subExplode(entitySet: OdRxObjectPtrArray): OdResult;
  openedForModify(pObject: OdDbObject): number;
  modifiedGraphics(pObject: OdDbObject): number;
  hatchObjectType(): HatchObjectType;
  setHatchObjectType(hatchObjectType: HatchObjectType): number;
  isGradient(): boolean;
  isHatch(): boolean;
  gradientType(): GradientPatternType;
  gradientName(): number;
  setGradient(gradientType: GradientPatternType, gradientName: OdString): number;
  gradientAngle(): number;
  setGradientAngle(angle: number): number;
  getGradientColors(colors: OdCmColorArray, values: OdGeDoubleArray): number;
  getGradientOneColorMode(): boolean;
  setGradientOneColorMode(oneColorMode: boolean): number;
  getShadeTintValue(): number;
  setShadeTintValue(luminance: number): number;
  gradientShift(): number;
  setGradientShift(gradientShift: number): number;
  evaluateGradientColorAt(value: number, color: OdCmColor): number;
  appendToOwner(idPair: OdDbIdPair, pOwnerObject: OdDbObject, ownerIdMap: OdDbIdMapping): number;
  subClose(): number;
  setRawPattern(patType: HatchPatternType, patName: OdString, angle: number, scale: number, pat: OdHatchPattern): number;
  getPattern(): number;
  getRawPattern(): number;
  setOriginPoint(pt: OdGePoint2d): number;
  originPoint(): OdGePoint2d;
  explodeGeometry(entitySet: OdRxObjectPtrArray): OdResult;
  getRegionArea(): number;
  markModifiedLoop(loopIndex: number): OdResult;
  markModifiedLoop1(entityHandle: OdDbHandle): OdResult;
  unmarkModifiedLoop(loopIndex: number): OdResult;
  unmarkModifiedLoop1(entityHandle: OdDbHandle): OdResult;
  getMarkedModifiedLoops(indicesMarkedLoops: OdUInt16Array): number;
  clearMarkModifiedLoops(): number;
  updateMarkedLoops(): OdResult;
  setShadeTintValueAndColor2(value: number): OdResult;
  subGetSubentPathsAtGsMarker(type: SubentType, gsMark: number, pickPoint: OdGePoint3d, xfm: OdGeMatrix3d, subentPaths: OdDbFullSubentPathArray, pEntAndInsertStack: OdDbObjectIdArray): OdResult;
  subGetGsMarkersAtSubentPath(subPath: OdDbFullSubentPath, gsMarkers: OdGsMarkerArray): OdResult;
  subSubentPtr(path: OdDbFullSubentPath): number;
  backgroundColor(): OdCmColor;
  setBackgroundColor(color: OdCmColor): number;
  getEcs(): OdGeMatrix3d;
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbIdBufferIterator.html} Additional documentation.
 */
class OdDbIdBufferIterator extends OdRxObject {
  start(): number;
  done(): boolean;
  next(): number;
  id(): OdDbObjectId;
  seek(id: OdDbObjectId): boolean;
  removeCurrentId(): number;
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
  static rxInit(): number;
  static rxUninit(): number;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  newIterator(): number;
  addId(id: OdDbObjectId): number;
  addIds(ids: OdDbObjectIdArray): number;
  numIds(): number;
  removeAll(): number;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): number;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): number;
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
  setKey(key: OdDbObjectId): number;
  setValue(value: OdDbObjectId): number;
  setCloned(cloned: boolean): number;
  setPrimary(primary: boolean): number;
  setOwnerXlated(ownerXlated: boolean): number;
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbIdMapping.html} Additional documentation.
 */
class OdDbIdMapping extends OdRxObject {
  static cast(pObj: OdRxObject): OdDbIdMapping;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdDbIdMapping;
  static rxInit(): number;
  static rxUninit(): number;
  static createObject1(arg0: DeepCloneType): number;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  assign(idPair: OdDbIdPair): number;
  compute(idPair: OdDbIdPair): boolean;
  del(key: OdDbObjectId): boolean;
  newIterator(): number;
  destDb(): OdDbDatabase;
  setDestDb(pDb: OdDbDatabase): number;
  origDb(): OdDbDatabase;
  insertingXrefBlockId(): OdDbObjectId;
  deepCloneContext(): DeepCloneType;
  duplicateRecordCloning(): DuplicateRecordCloning;
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
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbIdMappingIter.html} Additional documentation.
 */
class OdDbIdMappingIter extends OdRxObject {
  static cast(pObj: OdRxObject): OdDbIdMappingIter;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdDbIdMappingIter;
  static rxInit(): number;
  static rxUninit(): number;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  start(): number;
  getMap(idPair: OdDbIdPair): number;
  next(): number;
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
  static rxInit(): number;
  static rxUninit(): number;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  hasUnreconciledLayers(): boolean;
  getUnreconciledLayers(idArray: OdDbObjectIdArray): OdResult;
  generateUsageData(): number;
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
  static rxInit(): number;
  static rxUninit(): number;
  static isHidden1(idLayer: OdDbObjectId): boolean;
  static isReconciled1(idLayer: OdDbObjectId): boolean;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  isFrozen(): boolean;
  setIsFrozen(bStatus: boolean): number;
  isOff(): boolean;
  setIsOff(bStatus: boolean): number;
  VPDFLT(): boolean;
  setVPDFLT(bStatus: boolean): number;
  isLocked(): boolean;
  setIsLocked(bStatus: boolean): number;
  isPlottable(): boolean;
  setIsPlottable(bStatus: boolean): number;
  isHidden(): boolean;
  setIsHidden(bStatus: boolean): number;
  isReconciled(): boolean;
  setIsReconciled(bStatus: boolean): number;
  transparency(): OdCmTransparency;
  setTransparency(cmTransparency: OdCmTransparency): OdResult;
  setTransparency1(cmTransparency: OdCmTransparency, idViewport: OdDbObjectId): number;
  color(): OdCmColor;
  setColor(cmColor: OdCmColor): number;
  setColor1(cmColor: OdCmColor, idViewport: OdDbObjectId): number;
  colorIndex(): number;
  setColorIndex(idxColor: number): number;
  lineWeight(): LineWeight;
  setLineWeight(kLnWtEnum: LineWeight): number;
  setLineWeight1(kLnWtEnum: LineWeight, idViewport: OdDbObjectId): number;
  linetypeObjectId(): OdDbObjectId;
  setLinetypeObjectId(idLinetype: OdDbObjectId): number;
  setLinetypeObjectId1(idLinetype: OdDbObjectId, idViewport: OdDbObjectId): number;
  materialId(): OdDbObjectId;
  setMaterialId(idMaterial: OdDbObjectId): number;
  plotStyleName(): number;
  plotStyleNameId(): OdDbObjectId;
  setPlotStyleName(sPlotStyleName: OdString): OdResult;
  setPlotStyleName1(sPlotStyleName: OdString, idViewport: OdDbObjectId): number;
  setPlotStyleName2(idPlotStyle: OdDbObjectId): number;
  setPlotStyleName3(idPlotStyle: OdDbObjectId, idViewport: OdDbObjectId): number;
  description(): number;
  setDescription(sDescription: OdString): number;
  isInUse(): boolean;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): number;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): number;
  dxfInFields_R12(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields_R12(pFiler: OdDbDxfFiler): number;
  subErase(erasing: boolean): OdResult;
  subSetAttributes(pTraits: OdGiDrawableTraits): number;
  subWorldDraw(pWd: OdGiWorldDraw): boolean;
  subViewportDraw(pVd: OdGiViewportDraw): number;
  drawable(): OdGiDrawable;
  removeAllOverrides(): number;
  removeColorOverride(idViewport: OdDbObjectId): number;
  removeLinetypeOverride(idViewport: OdDbObjectId): number;
  removeLineWeightOverride(idViewport: OdDbObjectId): number;
  removePlotStyleOverride(idViewport: OdDbObjectId): number;
  removeTransparencyOverride(idViewport: OdDbObjectId): number;
  removeViewportOverrides(idViewport: OdDbObjectId): number;
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
  static rxInit(): number;
  static rxUninit(): number;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  getLIMMIN(): OdGePoint2d;
  setLIMMIN(limMin: OdGePoint2d): number;
  getLIMMAX(): OdGePoint2d;
  setLIMMAX(limMax: OdGePoint2d): number;
  getEXTMIN(): OdGePoint3d;
  setEXTMIN(extMin: OdGePoint3d): number;
  getEXTMAX(): OdGePoint3d;
  setEXTMAX(extMax: OdGePoint3d): number;
  getINSBASE(): OdGePoint3d;
  setINSBASE(insBase: OdGePoint3d): number;
  getLIMCHECK(): boolean;
  setLIMCHECK(limCheck: boolean): number;
  getPSLTSCALE(): boolean;
  setPSLTSCALE(psLtScale: boolean): number;
  getBlockTableRecordId(): OdDbObjectId;
  setBlockTableRecordId(blockTableRecordId: OdDbObjectId): number;
  addToLayoutDict(pDb: OdDbDatabase, blockTableRecordId: OdDbObjectId): number;
  getLayoutName(): number;
  setLayoutName(layoutName: OdString): number;
  getTabOrder(): number;
  setTabOrder(tabOrder: number): number;
  getTabSelected(): boolean;
  setTabSelected(tabSelected: boolean): number;
  getViewportArray(): number;
  getPreviewImage(): number;
  setPreviewImage(image: OdGiRasterImage): number;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): number;
  appendToOwner(idPair: OdDbIdPair, pOwnerObject: OdDbObject, ownerIdMap: OdDbIdMapping): number;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): number;
  activeViewportId(): OdDbObjectId;
  setActiveViewportId(viewportId: OdDbObjectId): number;
  overallVportId(): OdDbObjectId;
  subSetAttributes(pTraits: OdGiDrawableTraits): number;
  subWorldDraw(pWd: OdGiWorldDraw): boolean;
  subViewportDraw(vPd: OdGiViewportDraw): number;
  getGeomExtents(extents: OdGeExtents3d): OdResult;
  subClose(): number;
  annoAllVisible(): boolean;
  setAnnoAllVisible(newVal: boolean): number;
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbLayoutManagerReactor.html} Additional documentation.
 */
class OdDbLayoutManagerReactor extends OdRxObject {
  static cast(pObj: OdRxObject): OdDbLayoutManagerReactor;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdDbLayoutManagerReactor;
  static rxInit(): number;
  static rxUninit(): number;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  layoutCreated(layoutName: OdString, layoutId: OdDbObjectId): number;
  layoutToBeRemoved(layoutName: OdString, layoutId: OdDbObjectId): number;
  layoutRemoved(layoutName: OdString, layoutId: OdDbObjectId): number;
  abortLayoutRemoved(layoutName: OdString, layoutId: OdDbObjectId): number;
  layoutToBeCopied(layoutName: OdString, layoutId: OdDbObjectId): number;
  layoutCopied(oldLayoutName: OdString, oldLayoutId: OdDbObjectId, newLayoutName: OdString, newLayoutId: OdDbObjectId): number;
  abortLayoutCopied(layoutName: OdString, layoutId: OdDbObjectId): number;
  layoutToBeRenamed(oldLayoutName: OdString, newLayoutName: OdString, layoutId: OdDbObjectId): number;
  layoutRenamed(oldLayoutName: OdString, newLayoutName: OdString, layoutId: OdDbObjectId): number;
  abortLayoutRename(oldLayoutName: OdString, newLayoutName: OdString, layoutId: OdDbObjectId): number;
  layoutSwitched(newLayoutName: OdString, newLayoutId: OdDbObjectId): number;
  plotStyleTableChanged(newTableName: OdString, layoutId: OdDbObjectId): number;
  layoutToBeDeactivated(layoutName: OdString, layoutId: OdDbObjectId): number;
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbLayoutManager.html} Additional documentation.
 */
class OdDbLayoutManager extends OdRxObject {
  static cast(pObj: OdRxObject): OdDbLayoutManager;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdDbLayoutManager;
  static rxInit(): number;
  static rxUninit(): number;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  setCurrentLayout(pDb: OdDbDatabase, layoutId: OdDbObjectId): number;
  findActiveLayout(pDb: OdDbDatabase, allowModel: boolean): number;
  getActiveLayoutBTRId(pDb: OdDbDatabase): OdDbObjectId;
  findLayoutNamed(pDb: OdDbDatabase, name: OdString): OdDbObjectId;
  deleteLayout(pDb: OdDbDatabase, delname: OdString): number;
  createLayout(pDb: OdDbDatabase, newname: OdString, pBlockTableRecId: OdDbObjectId): OdDbObjectId;
  renameLayout(pDb: OdDbDatabase, oldname: OdString, newname: OdString): number;
  cloneLayout(pDb: OdDbDatabase, pLayout: OdDbLayout, newname: OdString, newTabOrder: number): OdDbObjectId;
  getNonRectVPIdFromClipId(clipId: OdDbObjectId): OdDbObjectId;
  isVpnumClipped(pDb: OdDbDatabase, index: number): boolean;
  countLayouts(pDb: OdDbDatabase): number;
  addReactor(newObj: OdDbLayoutManagerReactor): number;
  removeReactor(delObj: OdDbLayoutManagerReactor): number;
};

enum AnnoType {
  kMText = 0,
  kFcf = 1,
  kBlockRef = 2,
  kNoAnno = 3
};

enum gsMarkType {
  kArrowMark = 3,
  kLeaderLineMark = 4
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
  static rxInit(): number;
  static rxUninit(): number;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  normal(): OdGeVector3d;
  numVertices(): number;
  appendVertex(vertex: OdGePoint3d): boolean;
  removeLastVertex(): number;
  firstVertex(): OdGePoint3d;
  lastVertex(): OdGePoint3d;
  vertexAt(vertexIndex: number): OdGePoint3d;
  setVertexAt(vertexIndex: number, vertex: OdGePoint3d): boolean;
  isArrowHeadEnabled(): boolean;
  hasArrowHead(): boolean;
  enableArrowHead(): number;
  disableArrowHead(): number;
  hasHookLine(): boolean;
  isHookLineOnXDir(): boolean;
  setToSplineLeader(): number;
  setToStraightLeader(): number;
  isSplined(): boolean;
  dimensionStyle(): OdDbHardPointerId;
  setDimensionStyle(dimStyleId: OdDbHardPointerId): number;
  attachAnnotation(annoId: OdDbObjectId): number;
  attachAnnotation1(annoId: OdDbObjectId, xDir: OdGeVector3d, annotationWidth: number, annotationHeight: number, hookLineOnXDir: boolean): number;
  detachAnnotation(): number;
  annotationObjId(): OdDbObjectId;
  annotationXDir(): OdGeVector3d;
  annotationOffset(): OdGeVector3d;
  setAnnotationOffset(offset: OdGeVector3d): number;
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
  setDimasz(val: number): number;
  setDimclrd(val: OdCmColor): number;
  setDimgap(val: number): number;
  setDimldrblk(val: OdDbObjectId): number;
  setDimldrblk1(val: OdString): number;
  setDimlwd(val: LineWeight): number;
  setDimsah(val: boolean): number;
  setDimscale(val: number): number;
  setDimtad(val: number): number;
  setDimtxsty(val: OdDbObjectId): number;
  setDimtxt(val: number): number;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): number;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): number;
  subWorldDraw(pWd: OdGiWorldDraw): boolean;
  subViewportDraw(pVd: OdGiViewportDraw): number;
  subExplode(entitySet: OdRxObjectPtrArray): OdResult;
  subClose(): number;
  subSetAttributes(pTraits: OdGiDrawableTraits): number;
  isPlanar(): boolean;
  isClosed(): boolean;
  isPeriodic(): boolean;
  getStartPoint(startPoint: OdGePoint3d): OdResult;
  getEndPoint(endPoint: OdGePoint3d): OdResult;
  getPointAtParam(param: number, pointOnCurve: OdGePoint3d): OdResult;
  subTransformBy(xfm: OdGeMatrix3d): OdResult;
  subGetTransformedCopy(xform: OdGeMatrix3d, pEnt: OdDbEntityPtr): OdResult;
  getFirstDeriv(param: number, firstDeriv: OdGeVector3d): OdResult;
  getSecondDeriv(param: number, secondDeriv: OdGeVector3d): OdResult;
  subSetDatabaseDefaults(pDb: OdDbDatabase, doSubents: boolean): number;
  evaluateLeader(): OdResult;
  modifiedGraphics(pObject: OdDbObject): number;
  erased(pObject: OdDbObject, erasing: boolean): number;
  getDimstyleData(pRecord: OdDbDimStyleTableRecord): number;
  setDimstyleData(pDimstyle: OdDbDimStyleTableRecord): number;
  setDimstyleData1(dimstyleID: OdDbObjectId): number;
  setPlane(leaderPlane: OdGePlane): number;
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
  static rxInit(): number;
  static rxUninit(): number;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  startPoint(): OdGePoint3d;
  setStartPoint(geStartPoint: OdGePoint3d): number;
  endPoint(): OdGePoint3d;
  setEndPoint(geEndPoint: OdGePoint3d): number;
  thickness(): number;
  setThickness(vThickness: number): number;
  normal(): OdGeVector3d;
  setNormal(geVector: OdGeVector3d): number;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): number;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): number;
  dxfInFields_R12(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields_R12(pFiler: OdDbDxfFiler): number;
  subWorldDraw(pWd: OdGiWorldDraw): boolean;
  subGetGeomExtents(extents: OdGeExtents3d): OdResult;
  subTransformBy(xfm: OdGeMatrix3d): OdResult;
  isClosed(): boolean;
  isPeriodic(): boolean;
  isPlanar(): boolean;
  getStartPoint(startPoint: OdGePoint3d): OdResult;
  getEndPoint(endPoint: OdGePoint3d): OdResult;
  getPointAtParam(param: number, pointOnCurve: OdGePoint3d): OdResult;
  getFirstDeriv(param: number, firstDeriv: OdGeVector3d): OdResult;
  getSecondDeriv(param: number, secondDeriv: OdGeVector3d): OdResult;
  getOffsetCurves(offsetDist: number, offsetCurves: OdRxObjectPtrArray): OdResult;
  getOffsetCurvesGivenPlaneNormal(normal: OdGeVector3d, offsetDist: number, offsetCurves: OdRxObjectPtrArray): OdResult;
  getEcs(): OdGeMatrix3d;
  setFromOdGeCurve(geCurve: OdGeCurve3d, normal: OdGeVector3d, tol: OdGeTol): OdResult;
  reverseCurve(): OdResult;
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
  static rxInit(): number;
  static rxUninit(): number;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  getAt(recordName: OdString, getErasedRecord: boolean): OdDbObjectId;
  getAt1(recordName: OdString, openMode: OpenMode, getErasedRecord: boolean): number;
  has(recordName: OdString): boolean;
  has1(objectId: OdDbObjectId): boolean;
  add(pRecord: OdDbSymbolTableRecord): OdDbObjectId;
  newIterator(atBeginning: boolean, skipDeleted: boolean): number;
  getLinetypeByLayerId(): OdDbObjectId;
  getLinetypeByBlockId(): OdDbObjectId;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): number;
  dxfOut(pFiler: OdDbDxfFiler): number;
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbLinetypeTableIterator.html} Additional documentation.
 */
class OdDbLinetypeTableIterator extends OdDbSymbolTableIterator {
  static cast(pObj: OdRxObject): OdDbLinetypeTableIterator;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdDbLinetypeTableIterator;
  static rxInit(): number;
  static rxUninit(): number;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
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
  static rxInit(): number;
  static rxUninit(): number;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  comments(): number;
  setComments(sComment: OdString): number;
  isScaledToFit(): boolean;
  setIsScaledToFit(bScaleToFit: boolean): number;
  patternLength(): number;
  setPatternLength(vLength: number): number;
  numDashes(): number;
  setNumDashes(numberDashes: number): number;
  dashLengthAt(dashIndex: number): number;
  setDashLengthAt(dashIndex: number, dashLength: number): number;
  shapeStyleAt(dashIndex: number): OdDbObjectId;
  setShapeStyleAt(dashIndex: number, idTextStyle: OdDbObjectId): number;
  shapeNumberAt(dashIndex: number): number;
  setShapeNumberAt(dashIndex: number, shapeNumber: number): number;
  textAt(dashIndex: number): number;
  setTextAt(dashIndex: number, textString: OdString): number;
  shapeOffsetAt(dashIndex: number): OdGeVector2d;
  setShapeOffsetAt(dashIndex: number, shapeOffset: OdGeVector2d): number;
  shapeScaleAt(dashIndex: number): number;
  setShapeScaleAt(dashIndex: number, shapeScale: number): number;
  shapeRotationAt(dashIndex: number): number;
  setShapeRotationAt(dashIndex: number, shapeRotation: number): number;
  shapeIsUcsOrientedAt(dashIndex: number): boolean;
  setShapeIsUcsOrientedAt(dashIndex: number, isUcsOriented: boolean): number;
  shapeIsUprightAt(dashIndex: number): boolean;
  setShapeIsUprightAt(dashIndex: number, isUpright: boolean): number;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): number;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): number;
  dxfInFields_R12(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields_R12(pFiler: OdDbDxfFiler): number;
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
  static rxInit(): number;
  static rxUninit(): number;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  columns(): number;
  setColumns(numColumns: number): number;
  rows(): number;
  setRows(numRows: number): number;
  columnSpacing(): number;
  setColumnSpacing(colSpacing: number): number;
  rowSpacing(): number;
  setRowSpacing(rowSpacing: number): number;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): number;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): number;
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
  static rxInit(): number;
  static rxUninit(): number;
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
  static rxInit(): number;
  static rxUninit(): number;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  dwgInFields(filer: OdDbDwgFiler): OdResult;
  dwgOutFields(filer: OdDbDwgFiler): number;
  dxfInFields(filer: OdDbDxfFiler): OdResult;
  dxfOutFields(filer: OdDbDxfFiler): number;
  setOverride(propertyType: PropertyOverrideType, isOverride: boolean): number;
  isOverride(propertyType: PropertyOverrideType): boolean;
  setScale(scale: number): OdResult;
  scale(): number;
  getBlockAttributeValue(attdefId: OdDbObjectId, pAtt: OdDbAttributePtr): OdResult;
  setBlockAttributeValue(attdefId: OdDbObjectId, pAtt: OdDbAttribute): OdResult;
  plane(): OdGePlane;
  setPlane(plane: OdGePlane): number;
  normal(): OdGeVector3d;
  moveMLeader(vector: OdGeVector3d, moveType: MoveType, bAutoSwitchDogleg: boolean): OdResult;
  getContentGeomExtents(extents: OdGeExtents3d): OdResult;
  numLeaders(): number;
  getLeaderIndexes(leaderIndexes: OdIntArray): number;
  removeLeader(leaderIndex: number): number;
  numLeaderLines(): number;
  getLeaderLineIndexes(leaderLineIndexes: OdIntArray): number;
  removeLeaderLine(leaderLineIndex: number): number;
  addFirstVertex(leaderLineIndex: number, point: OdGePoint3d): OdResult;
  removeFirstVertex(leaderLineIndex: number): OdResult;
  getFirstVertex(leaderLineIndex: number, point: OdGePoint3d): OdResult;
  setFirstVertex(leaderLineIndex: number, point: OdGePoint3d): OdResult;
  addLastVertex(leaderLineIndex: number, point: OdGePoint3d): OdResult;
  removeLastVertex(leaderLineIndex: number): OdResult;
  getLastVertex(leaderLineIndex: number, point: OdGePoint3d): OdResult;
  setLastVertex(leaderLineIndex: number, point: OdGePoint3d): OdResult;
  setVertex(leaderLineIndex: number, index: number, point: OdGePoint3d): OdResult;
  getVertex(leaderLineIndex: number, index: number, point: OdGePoint3d): number;
  getLeaderLineIndexes1(leaderIndex: number, leaderLineIndexes: OdIntArray): number;
  setDoglegDirection(leaderIndex: number, vector: OdGeVector3d): number;
  getDoglegDirection(leaderIndex: number, vector: OdGeVector3d): number;
  setLeaderLineType(leaderLineType: LeaderType): number;
  leaderLineType(): LeaderType;
  setLeaderLineColor(leaderLineColor: OdCmColor): number;
  leaderLineColor(): OdCmColor;
  setLeaderLineTypeId(leaderLineTypeId: OdDbObjectId): number;
  leaderLineTypeId(): OdDbObjectId;
  setLeaderLineWeight(leaderLineWeight: LineWeight): number;
  leaderLineWeight(): LineWeight;
  setLandingGap(landingGap: number): number;
  landingGap(): number;
  setEnableLanding(enableLanding: boolean): number;
  enableLanding(): boolean;
  setEnableDogleg(enableDogleg: boolean): number;
  enableDogleg(): boolean;
  setDoglegLength(leaderIndex: number, dDoglegLength: number): number;
  doglegLength(leaderIndex: number): number;
  setDoglegLength1(doglegLength: number): OdResult;
  doglegLength1(): number;
  setArrowSymbolId(arrowSymbolId: OdDbObjectId): number;
  arrowSymbolId(): OdDbObjectId;
  setArrowSize(arrowSize: number): number;
  arrowSize(): number;
  setContentType(contentType: ContentType): number;
  contentType(): ContentType;
  setTextStyleId(textStyleId: OdDbObjectId): number;
  textStyleId(): OdDbObjectId;
  setTextAttachmentType(textAttachmentType: TextAttachmentType, leaderDirection: LeaderDirectionType): number;
  textAttachmentType(leaderDirection: LeaderDirectionType): TextAttachmentType;
  setTextAngleType(textAngleType: TextAngleType): number;
  textAngleType(): TextAngleType;
  setTextAlignmentType(textAlignmentType: TextAlignmentType): number;
  textAlignmentType(): TextAlignmentType;
  setTextColor(textColor: OdCmColor): number;
  textColor(): OdCmColor;
  setTextHeight(textHeight: number): number;
  textHeight(): number;
  setEnableFrameText(enableFrameText: boolean): number;
  enableFrameText(): boolean;
  setMText(pMText: OdDbMText): number;
  mtext(): number;
  setBlockContentId(blockId: OdDbObjectId): number;
  blockContentId(): OdDbObjectId;
  setBlockColor(blockColor: OdCmColor): number;
  blockColor(): OdCmColor;
  setBlockScale(scale: OdGeScale3d): number;
  blockScale(): OdGeScale3d;
  setBlockRotation(rotation: number): number;
  blockRotation(): number;
  setBlockConnectionType(blockConnectionType: BlockConnectionType): number;
  blockConnectionType(): BlockConnectionType;
  setEnableAnnotationScale(enableAnnotationScale: boolean): number;
  enableAnnotationScale(): boolean;
  setMLeaderStyle(newStyleId: OdDbObjectId): number;
  MLeaderStyle(): OdDbObjectId;
  getOverridedMLeaderStyle(mleaderStyle: OdDbMLeaderStyle): OdResult;
  setBlockPosition(position: OdGePoint3d): number;
  getBlockPosition(position: OdGePoint3d): number;
  setTextLocation(location: OdGePoint3d): number;
  getTextLocation(location: OdGePoint3d): number;
  setToleranceLocation(location: OdGePoint3d): OdResult;
  getToleranceLocation(location: OdGePoint3d): OdResult;
  setArrowSymbolId1(leaderLineIndex: number, arrowSymbolId: OdDbObjectId): number;
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
  setTextAttachmentDirection(direction: TextAttachmentDirection): number;
  textAttachmentDirection(): TextAttachmentDirection;
  isOverride1(leaderLineIndex: number, value: LeaderLineOverrideType): boolean;
  setLeaderLineType1(leaderLineIndex: number, leaderLineType: LeaderType): number;
  leaderLineType1(leaderLineIndex: number): LeaderType;
  setLeaderLineColor1(leaderLineIndex: number, leaderLineColor: OdCmColor): number;
  leaderLineColor1(leaderLineIndex: number): OdCmColor;
  setLeaderLineTypeId1(leaderLineIndex: number, leaderLineTypeId: OdDbObjectId): number;
  leaderLineTypeId1(leaderLineIndex: number): OdDbObjectId;
  setLeaderLineWeight1(leaderLineIndex: number, leaderLineWeight: LineWeight): number;
  leaderLineWeight1(leaderLineIndex: number): LineWeight;
  setArrowSize1(leaderLineIndex: number, arrowSize: number): number;
  arrowSize1(leaderLineIndex: number): number;
  setExtendLeaderToText(bSet: boolean): number;
  extendLeaderToText(): boolean;
  copyFrom(pSource: OdRxObject): number;
};

enum MoveType {
  kMoveAllPoints = 0,
  kMoveAllExceptArrowHeaderPoints = 1,
  kMoveContentAndDoglegPoints = 2
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
  static rxInit(): number;
  static rxUninit(): number;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  setDatabaseDefaults(pDb: OdDbDatabase): number;
  getName(): number;
  setName(name: OdString): number;
  description(): number;
  setDescription(description: OdString): number;
  bitFlags(): number;
  setBitFlags(flags: number): number;
  setContentType(contentType: ContentType): number;
  contentType(): ContentType;
  setDrawMLeaderOrderType(drawMLeaderOrderType: DrawMLeaderOrderType): number;
  drawMLeaderOrderType(): DrawMLeaderOrderType;
  setDrawLeaderOrderType(drawLeaderOrderType: DrawLeaderOrderType): number;
  drawLeaderOrderType(): DrawLeaderOrderType;
  setMaxLeaderSegmentsPoints(maxLeaderSegmentsPoints: number): number;
  maxLeaderSegmentsPoints(): number;
  setFirstSegmentAngleConstraint(angle: SegmentAngleType): number;
  firstSegmentAngleConstraint(): SegmentAngleType;
  setSecondSegmentAngleConstraint(angle: SegmentAngleType): number;
  secondSegmentAngleConstraint(): SegmentAngleType;
  setLeaderLineType(leaderLineType: LeaderType): number;
  leaderLineType(): LeaderType;
  setLeaderLineColor(leaderLineColor: OdCmColor): number;
  leaderLineColor(): OdCmColor;
  setLeaderLineTypeId(leaderLineTypeId: OdDbObjectId): number;
  leaderLineTypeId(): OdDbObjectId;
  setLeaderLineWeight(leaderLineWeight: LineWeight): number;
  leaderLineWeight(): LineWeight;
  setEnableLanding(enableLanding: boolean): number;
  enableLanding(): boolean;
  setLandingGap(landingGap: number): number;
  landingGap(): number;
  setEnableDogleg(enableDogleg: boolean): number;
  enableDogleg(): boolean;
  setDoglegLength(doglegLength: number): number;
  doglegLength(): number;
  setArrowSymbolId(name: OdString): number;
  setArrowSymbolId1(arrowSymbolId: OdDbObjectId): number;
  arrowSymbolId(): OdDbObjectId;
  setArrowSize(arrowSize: number): number;
  arrowSize(): number;
  setDefaultMText(defaultMText: OdDbMTextPtr): number;
  defaultMText(): number;
  setTextStyleId(textStyleId: OdDbObjectId): number;
  textStyleId(): OdDbObjectId;
  setTextAttachmentType(textAttachmentType: TextAttachmentType, leaderDirection: LeaderDirectionType): number;
  textAttachmentType(leaderDirection: LeaderDirectionType): TextAttachmentType;
  setTextAngleType(textAngleType: TextAngleType): number;
  textAngleType(): TextAngleType;
  setTextAlignmentType(textAlignmentType: TextAlignmentType): number;
  textAlignmentType(): TextAlignmentType;
  setTextAlignAlwaysLeft(bAlwaysLeft: boolean): number;
  textAlignAlwaysLeft(): boolean;
  setTextColor(textColor: OdCmColor): number;
  textColor(): OdCmColor;
  setTextHeight(textHeight: number): number;
  textHeight(): number;
  setEnableFrameText(enableFrameText: boolean): number;
  enableFrameText(): boolean;
  setAlignSpace(alignSpace: number): number;
  alignSpace(): number;
  setBlockId(name: OdString): number;
  setBlockId1(blockId: OdDbObjectId): number;
  blockId(): OdDbObjectId;
  setBlockColor(blockColor: OdCmColor): number;
  blockColor(): OdCmColor;
  setBlockScale(scale: OdGeScale3d): number;
  blockScale(): OdGeScale3d;
  setEnableBlockScale(enableBlockScale: boolean): number;
  enableBlockScale(): boolean;
  setBlockRotation(rotation: number): number;
  blockRotation(): number;
  setEnableBlockRotation(enableBlockRotation: boolean): number;
  enableBlockRotation(): boolean;
  setBlockConnectionType(blockConnectionType: BlockConnectionType): number;
  blockConnectionType(): BlockConnectionType;
  setScale(scale: number): number;
  scale(): number;
  overwritePropChanged(): boolean;
  postMLeaderStyleToDb(pDb: OdDbDatabase, styleName: OdString): OdDbObjectId;
  setAnnotative(isAnnotative: boolean): number;
  annotative(): boolean;
  setBreakSize(size: number): number;
  breakSize(): number;
  setTextAttachmentDirection(direction: TextAttachmentDirection): number;
  textAttachmentDirection(): TextAttachmentDirection;
  setExtendLeaderToText(bSet: boolean): number;
  extendLeaderToText(): boolean;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): number;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): number;
  subClose(): number;
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

enum LeaderType {
  kInVisibleLeader = 0,
  kStraightLeader = 1,
  kSplineLeader = 2
};

enum ContentType {
  kNoneContent = 0,
  kBlockContent = 1,
  kMTextContent = 2,
  kToleranceContent = 3
};

enum TextAlignmentType {
  kLeftAlignment = 0,
  kCenterAlignment = 1,
  kRightAlignment = 2
};

enum LeaderDirectionType {
  kUnknownLeader = 0,
  kLeftLeader = 1,
  kRightLeader = 2,
  kTopLeader = 3,
  kBottomLeader = 4
};

enum BlockConnectionType {
  kConnectExtents = 0,
  kConnectBase = 1
};

enum DrawMLeaderOrderType {
  kDrawContentFirst = 0,
  kDrawLeaderFirst = 1
};

enum DrawLeaderOrderType {
  kDrawLeaderHeadFirst = 0,
  kDrawLeaderTailFirst = 1
};

enum TextAttachmentDirection {
  kAttachmentHorizontal = 0,
  kAttachmentVertical = 1
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

enum TextAngleType {
  kInsertAngle = 0,
  kHorizontalAngle = 1,
  kAlwaysRightReadingAngle = 2
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
  static rxInit(): number;
  static rxUninit(): number;
  static nonBreakSpace(): number;
  static overlineOn(): number;
  static overlineOff(): number;
  static underlineOn(): number;
  static underlineOff(): number;
  static colorChange(): number;
  static fontChange(): number;
  static heightChange(): number;
  static widthChange(): number;
  static obliqueChange(): number;
  static trackChange(): number;
  static lineBreak(): number;
  static paragraphBreak(): number;
  static stackStart(): number;
  static alignChange(): number;
  static blockBegin(): number;
  static blockEnd(): number;
  static strikethroughOn(): number;
  static strikethroughOff(): number;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  location(): OdGePoint3d;
  setLocation(location: OdGePoint3d): number;
  normal(): OdGeVector3d;
  setNormal(normal: OdGeVector3d): number;
  direction(): OdGeVector3d;
  setDirection(direction: OdGeVector3d): number;
  rotation(): number;
  setRotation(rotation: number): number;
  width(): number;
  setWidth(width: number): number;
  textStyle(): OdDbObjectId;
  setTextStyle(textStyleId: OdDbObjectId): number;
  textHeight(): number;
  setTextHeight(height: number): number;
  attachment(): AttachmentPoint;
  setAttachment(type: AttachmentPoint): number;
  flowDirection(): FlowDirection;
  setFlowDirection(flowDirection: FlowDirection): number;
  contents(): number;
  setContents(text: OdString): number;
  setContentsRTF(text: OdString): number;
  actualWidth(): number;
  setLineSpacingStyle(lineSpacingStyle: LineSpacingStyle): number;
  lineSpacingStyle(): LineSpacingStyle;
  setLineSpacingFactor(lineSpacingFactor: number): number;
  lineSpacingFactor(): number;
  horizontalMode(): TextHorzMode;
  setHorizontalMode(horizontalMode: TextHorzMode): number;
  verticalMode(): TextVertMode;
  setVerticalMode(verticalMode: TextVertMode): number;
  getEcs(): OdGeMatrix3d;
  subSetAttributes(pTraits: OdGiDrawableTraits): number;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): number;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): number;
  subWorldDraw(pWd: OdGiWorldDraw): boolean;
  subViewportDraw(pVd: OdGiViewportDraw): number;
  subTransformBy(xfm: OdGeMatrix3d): OdResult;
  subExplode(entitySet: OdRxObjectPtrArray): OdResult;
  explodeGeometry(entitySet: OdRxObjectPtrArray): OdResult;
  subClose(): number;
  isPlanar(): boolean;
  actualHeight(ctxt: OdGiWorldDraw): number;
  getActualBoundingPoints(boundingPoints: OdGePoint3dArray, dGapX: number, dGapY: number): number;
  getBoundingPoints(boundingPoints: OdGePoint3dArray): number;
  setAttachmentMovingLocation(attachment: AttachmentPoint): OdResult;
  subGetGeomExtents(extents: OdGeExtents3d): OdResult;
  backgroundFillOn(): boolean;
  setBackgroundFill(bEnable: boolean): number;
  getBackgroundFillColor(): OdCmColor;
  setBackgroundFillColor(color: OdCmColor): number;
  getBackgroundScaleFactor(): number;
  setBackgroundScaleFactor(scaleFactor: number): number;
  getBackgroundTransparency(): OdCmTransparency;
  setBackgroundTransparency(transparency: OdCmTransparency): number;
  useBackgroundColorOn(): boolean;
  setUseBackgroundColor(enable: boolean): number;
  getParagraphsIndent(indents: OdDbMTextIndents): number;
  setField(fieldName: OdString, pField: OdDbField): OdDbObjectId;
  removeField(fieldId: OdDbObjectId): OdResult;
  removeField1(fieldName: OdString): OdDbObjectId;
  convertFieldToText(): number;
  subSetDatabaseDefaults(pDb: OdDbDatabase, doSubents: boolean): number;
  setDynamicColumns(width: number, gutter: number, bAutoHeigh: boolean): number;
  setStaticColumns(width: number, gutter: number, count: number): number;
  getColumnType(): ColumnType;
  setColumnType(colType: ColumnType): number;
  getColumnAutoHeight(): boolean;
  setColumnAutoHeight(bAutoHeigh: boolean): number;
  getColumnCount(): number;
  setColumnCount(numCol: number): number;
  getColumnWidth(): number;
  setColumnWidth(colWidth: number): number;
  getColumnGutterWidth(): number;
  setColumnGutterWidth(colGutter: number): number;
  getColumnFlowReversed(): boolean;
  setColumnFlowReversed(bFlowRev: boolean): number;
  getColumnHeight(col: number): number;
  setColumnHeight(col: number, colHeight: number): number;
  height(): number;
  setHeight(value: number): number;
  subGetTransformedCopy(mat: OdGeMatrix3d, pCopy: OdDbEntityPtr): OdResult;
  ascent(): number;
  descent(): number;
  setShowBorders(bEnable: boolean): number;
  showBorders(): boolean;
  text(): number;
  contentsRTF(): number;
  getTextWithFieldCodes(): number;
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

enum FlowDirection {
  kLtoR = 1,
  kRtoL = 2,
  kTtoB = 3,
  kBtoT = 4,
  kByStyle = 5
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
  static rxInit(): number;
  static rxUninit(): number;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  setName(name: OdString): OdResult;
  name(): number;
  setDescription(description: OdString): number;
  description(): number;
  setAmbient(ambientColor: OdGiMaterialColor): number;
  ambient(ambientColor: OdGiMaterialColor): number;
  setDiffuse(diffuseColor: OdGiMaterialColor, diffuseMap: OdGiMaterialMap): number;
  diffuse(diffuseColor: OdGiMaterialColor, diffuseMap: OdGiMaterialMap): number;
  setSpecular(specularColor: OdGiMaterialColor, specularMap: OdGiMaterialMap, glossFactor: number): number;
  setReflection(reflectionMap: OdGiMaterialMap): number;
  reflection(reflectionMap: OdGiMaterialMap): number;
  setOpacity(opacityPercentage: number, opacityMap: OdGiMaterialMap): number;
  setBump(bumpMap: OdGiMaterialMap): number;
  bump(map: OdGiMaterialMap): number;
  setRefraction(refractionIndex: number, refractionMap: OdGiMaterialMap): number;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): number;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): number;
  drawable(): OdGiDrawable;
  subSetAttributes(pTraits: OdGiDrawableTraits): number;
  translucence(): number;
  setTranslucence(translucence: number): number;
  selfIllumination(): number;
  setSelfIllumination(selfIllumination: number): number;
  reflectivity(): number;
  setReflectivity(reflectivity: number): number;
  mode(): Mode;
  setMode(mode: Mode): number;
  channelFlags(): ChannelFlags;
  setChannelFlags(channelFlags: ChannelFlags): number;
  illuminationModel(): IlluminationModel;
  setIlluminationModel(illuminationMode: IlluminationModel): number;
  colorBleedScale(): number;
  setColorBleedScale(scale: number): number;
  indirectBumpScale(): number;
  setIndirectBumpScale(scale: number): number;
  reflectanceScale(): number;
  setReflectanceScale(scale: number): number;
  transmittanceScale(): number;
  setTransmittanceScale(scale: number): number;
  twoSided(): boolean;
  setTwoSided(flag: boolean): number;
  luminanceMode(): LuminanceMode;
  setLuminanceMode(mode: LuminanceMode): number;
  luminance(): number;
  setLuminance(value: number): number;
  shininess(): number;
  setShininess(value: number): number;
  setNormalMap(normalMap: OdGiMaterialMap, method: NormalMapMethod, strength: number): number;
  isAnonymous(): boolean;
  setAnonymous(flag: boolean): number;
  globalIllumination(): GlobalIlluminationMode;
  setGlobalIllumination(mode: GlobalIlluminationMode): number;
  finalGather(): FinalGatherMode;
  setFinalGather(mode: FinalGatherMode): number;
  subErase(erasing: boolean): OdResult;
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdError_XdataSizeExceeded.html} Additional documentation.
 */
class OdError_XdataSizeExceeded extends OdError {
  constructor(objectId: OdDbObjectId);
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
  static rxInit(): number;
  static rxUninit(): number;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  addRef(): number;
  release(): number;
  numRefs(): number;
  objectId(): OdDbObjectId;
  getDbHandle(): OdDbHandle;
  handle(): OdDbHandle;
  ownerId(): OdDbObjectId;
  setOwnerId(ownerId: OdDbObjectId): number;
  database(): OdDbDatabase;
  createExtensionDictionary(): number;
  extensionDictionary(): OdDbObjectId;
  releaseExtensionDictionary(): boolean;
  createXrecord(xrecordName: OdString, style: DuplicateRecordCloning): number;
  upgradeOpen(): number;
  downgradeOpen(): number;
  subOpen(mode: OpenMode): OdResult;
  subClose(): number;
  erase(eraseIt: boolean): OdResult;
  subErase(erasing: boolean): OdResult;
  handOverTo(pNewObject: OdDbObject, keepXData: boolean, keepExtDict: boolean): number;
  subHandOverTo(pNewObject: OdDbObject): number;
  swapIdWith(otherId: OdDbObjectId, swapXdata: boolean, swapExtDict: boolean): number;
  subSwapIdWith(otherId: OdDbObjectId, swapXdata: boolean, swapExtDict: boolean): number;
  audit(pAuditInfo: OdDbAuditInfo): number;
  dwgIn(pFiler: OdDbDwgFiler): number;
  dwgOut(pFiler: OdDbDwgFiler): number;
  dxfIn(pFiler: OdDbDxfFiler): OdResult;
  dxfOut(pFiler: OdDbDxfFiler): number;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): number;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): number;
  dxfInFields_R12(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields_R12(pFiler: OdDbDxfFiler): number;
  mergeStyle(): DuplicateRecordCloning;
  xData(regappName: OdString): number;
  setXData(pRb: OdResBuf): number;
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
  assertReadEnabled(): number;
  assertWriteEnabled(autoUndo: boolean, recordModified: boolean): number;
  assertNotifyEnabled(): number;
  disableUndoRecording(disable: boolean): number;
  undoFiler(): OdDbDwgFiler;
  applyPartialUndo(pUndoFiler: OdDbDwgFiler, pClassObj: OdRxClass): number;
  addReactor(pReactor: OdDbObjectReactor): number;
  removeReactor(pReactor: OdDbObjectReactor): number;
  addPersistentReactor(objId: OdDbObjectId): number;
  removePersistentReactor(objId: OdDbObjectId): number;
  hasPersistentReactor(objId: OdDbObjectId): boolean;
  getPersistentReactors(): number;
  getTransientReactors(): number;
  recvPropagateModify(pSubObj: OdDbObject): number;
  xmitPropagateModify(): number;
  deepClone(idMap: OdDbIdMapping, pOwner: OdDbObject, bPrimary: boolean): number;
  wblockClone(idMap: OdDbIdMapping, pOwner: OdDbObject, bPrimary: boolean): number;
  appendToOwner(idPair: OdDbIdPair, pOwnerObject: OdDbObject, idMap: OdDbIdMapping): number;
  setOdDbObjectIdsInFlux(): number;
  isOdDbObjectIdsInFlux(): boolean;
  copied(pObject: OdDbObject, pNewObject: OdDbObject): number;
  erased(pObject: OdDbObject, erasing: boolean): number;
  goodbye(pObject: OdDbObject): number;
  openedForModify(pObject: OdDbObject): number;
  modified(pObject: OdDbObject): number;
  subObjModified(pObject: OdDbObject, pSubObj: OdDbObject): number;
  modifyUndone(pObject: OdDbObject): number;
  modifiedXData(pObject: OdDbObject): number;
  unappended(pObject: OdDbObject): number;
  reappended(pObject: OdDbObject): number;
  isAProxy(): boolean;
  objectClosed(objectId: OdDbObjectId): number;
  modifiedGraphics(pObject: OdDbObject): number;
  copyFrom(pSource: OdRxObject): number;
  hasSaveVersionOverride(): boolean;
  setHasSaveVersionOverride(hasSaveVersionOverride: boolean): number;
  convertForSave(ver: DwgVersion): number;
  composeForLoad(format: SaveType, version: DwgVersion, pAuditInfo: OdDbAuditInfo): number;
  drawable(): OdGiDrawable;
  subSetAttributes(pTraits: OdGiDrawableTraits): number;
  subWorldDraw(pWd: OdGiWorldDraw): boolean;
  subViewportDraw(pVd: OdGiViewportDraw): number;
  isPersistent(): boolean;
  id(): OdDbStub;
  setGsNode(pNode: OdGsCache): number;
  gsNode(): OdGsCache;
  xDataTransformBy(xfm: OdGeMatrix3d): number;
  hasFields(): boolean;
  getField(fieldName: OdString): OdDbObjectId;
  getField1(fieldName: OdString, mode: OpenMode): number;
  setField(fieldName: OdString, pField: OdDbField): OdDbObjectId;
  removeField(fieldId: OdDbObjectId): OdResult;
  removeField1(fieldName: OdString): OdDbObjectId;
  getFieldDictionary(): OdDbObjectId;
  getFieldDictionary1(mode: OpenMode): number;
  saveAsClass(pClass: OdRxClass): OdRxClass;
};

enum Visibility {
  kInvisible = 1,
  kVisible = 0
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

enum SaveType {
  kDwg = 0,
  kDxf = 1,
  kDxb = 2,
  kUnknown = -1
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbHardPointerId.html} Additional documentation.
 */
class OdDbHardPointerId extends OdDbObjectId {
  constructor();
  constructor(objectId: OdDbObjectId);
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbSoftOwnershipId.html} Additional documentation.
 */
class OdDbSoftOwnershipId extends OdDbObjectId {
  constructor();
  constructor(objectId: OdDbObjectId);
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbSoftPointerId.html} Additional documentation.
 */
class OdDbSoftPointerId extends OdDbObjectId {
  constructor();
  constructor(objectId: OdDbObjectId);
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbHardOwnershipId.html} Additional documentation.
 */
class OdDbHardOwnershipId extends OdDbObjectId {
  constructor();
  constructor(objectId: OdDbObjectId);
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
  setNull(): number;
  isValid(): boolean;
  database(): OdDbDatabase;
  originalDatabase(): OdDbDatabase;
  convertToRedirectedId(): number;
  isErased(): boolean;
  isEffectivelyErased(): boolean;
  objectLeftOnDisk(): boolean;
  getHandle(): OdDbHandle;
  getNonForwardedHandle(): OdDbHandle;
  openObject(pObj: OdDbObjectPtr, openMode: OpenMode, openErasedOne: boolean): OdResult;
  openObject1(openMode: OpenMode, openErasedOne: boolean): number;
  safeOpenObject(openMode: OpenMode, openErasedOne: boolean): number;
  bindObject(pObj: OdDbObject): number;
  objectClass(): OdRxClass;
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbObjectIterator.html} Additional documentation.
 */
class OdDbObjectIterator extends OdRxObject {
  static cast(pObj: OdRxObject): OdDbObjectIterator;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdDbObjectIterator;
  static rxInit(): number;
  static rxUninit(): number;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  start(atBeginning: boolean, skipErased: boolean): number;
  done(): boolean;
  objectId(): OdDbObjectId;
  entity(openMode: OpenMode, openErasedEntity: boolean): number;
  step(forward: boolean, skipErased: boolean): number;
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
  static rxInit(): number;
  static rxUninit(): number;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  isUsingXAxis(): boolean;
  isUsingYAxis(): boolean;
  useXAxis(): number;
  useYAxis(): number;
  origin(): OdGePoint3d;
  setOrigin(origin: OdGePoint3d): number;
  definingPoint(): OdGePoint3d;
  setDefiningPoint(definingPoint: OdGePoint3d): number;
  leaderEndPoint(): OdGePoint3d;
  setLeaderEndPoint(leaderEndPoint: OdGePoint3d): number;
  dxfInFields_R12(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields_R12(pFiler: OdDbDxfFiler): number;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): number;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): number;
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
  static rxInit(): number;
  static rxUninit(): number;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  createFromRegion(pRegion: OdDbRegion): OdResult;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): number;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): number;
  isDependent(): boolean;
  subExplode(entitySet: OdRxObjectPtrArray): OdResult;
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

enum PlotPaperUnits {
  kInches = 0,
  kMillimeters = 1,
  kPixels = 2
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

enum ShadePlotResLevel {
  kDraft = 0,
  kPreview = 1,
  kNormal = 2,
  kPresentation = 3,
  kMaximum = 4,
  kCustom = 5
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
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbPlotSettings.html} Additional documentation.
 */
class OdDbPlotSettings extends OdDbObject {
  constructor();
  constructor(arg0: OdDbPlotSettings);
  static cast(pObj: OdRxObject): OdDbPlotSettings;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdDbPlotSettings;
  static rxInit(): number;
  static rxUninit(): number;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  addToPlotSettingsDict(pDb: OdDbDatabase): number;
  getPlotSettingsName(): number;
  setPlotSettingsName(plotSettingsName: OdString): number;
  getPlotCfgName(): number;
  getCanonicalMediaName(): number;
  plotPaperUnits(): PlotPaperUnits;
  plotViewportBorders(): boolean;
  setPlotViewportBorders(plotViewportBorders: boolean): number;
  plotPlotStyles(): boolean;
  setPlotPlotStyles(plotPlotStyles: boolean): number;
  showPlotStyles(): boolean;
  setShowPlotStyles(showPlotStyles: boolean): number;
  plotRotation(): PlotRotation;
  plotCentered(): boolean;
  plotHidden(): boolean;
  setPlotHidden(plotHidden: boolean): number;
  plotType(): PlotType;
  getPlotViewName(): number;
  useStandardScale(): boolean;
  getCurrentStyleSheet(): number;
  stdScaleType(): StdScaleType;
  scaleLineweights(): boolean;
  setScaleLineweights(scaleLineweights: boolean): number;
  printLineweights(): boolean;
  setPrintLineweights(printLineweights: boolean): number;
  drawViewportsFirst(): boolean;
  setDrawViewportsFirst(drawViewportsFirst: boolean): number;
  modelType(): boolean;
  setModelType(modelType: boolean): number;
  getTopMargin(): number;
  getRightMargin(): number;
  getBottomMargin(): number;
  getLeftMargin(): number;
  getPaperImageOrigin(): OdGePoint2d;
  setPaperImageOrigin(paperImageOrigin: OdGePoint2d): number;
  shadePlot(): ShadePlotType;
  setShadePlot(shadePlot: ShadePlotType): OdResult;
  shadePlotResLevel(): ShadePlotResLevel;
  setShadePlotResLevel(shadePlotResLevel: ShadePlotResLevel): number;
  shadePlotCustomDPI(): number;
  setShadePlotCustomDPI(shadePlotCustomDPI: number): number;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): number;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): number;
  subClose(): number;
  subErase(erasing: boolean): OdResult;
  subHandOverTo(pNewObject: OdDbObject): number;
  copyFrom(pSource: OdRxObject): number;
  shadePlotId(): OdDbObjectId;
  setShadePlot1(type: ShadePlotType, shadePlotId: OdDbObjectId): OdResult;
  plotWireframe(): boolean;
  plotAsRaster(): boolean;
  plotTransparency(): boolean;
  setPlotTransparency(bSet: boolean): number;
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
  static rxInit(): number;
  static rxUninit(): number;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  numVertices(): number;
  numFaces(): number;
  appendVertex(pVertex: OdDbPolyFaceMeshVertex): OdDbObjectId;
  appendFaceRecord(pFaceRecord: OdDbFaceRecord): OdDbObjectId;
  openVertex(subObjId: OdDbObjectId, mode: OpenMode, openErasedOne: boolean): number;
  openSequenceEnd(mode: OpenMode): number;
  clear(): number;
  vertexIterator(): number;
  subWorldDraw(pWd: OdGiWorldDraw): boolean;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): number;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): number;
  dxfOut(pFiler: OdDbDxfFiler): number;
  dxfIn(pFiler: OdDbDxfFiler): OdResult;
  dxfInFields_R12(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields_R12(pFiler: OdDbDxfFiler): number;
  subClose(): number;
  isPlanar(): boolean;
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
  static rxInit(): number;
  static rxUninit(): number;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  position(): OdGePoint3d;
  setPosition(position: OdGePoint3d): number;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): number;
  dxfInFields_R12(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields_R12(pFiler: OdDbDxfFiler): number;
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
  static rxInit(): number;
  static rxUninit(): number;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  polyMeshType(): PolyMeshType;
  setPolyMeshType(polyMeshType: PolyMeshType): number;
  convertToPolyMeshType(polyMeshType: PolyMeshType): number;
  mSize(): number;
  setMSize(mSize: number): number;
  nSize(): number;
  setNSize(nSize: number): number;
  isMClosed(): boolean;
  makeMClosed(): number;
  makeMOpen(): number;
  isNClosed(): boolean;
  makeNClosed(): number;
  makeNOpen(): number;
  mSurfaceDensity(): number;
  setMSurfaceDensity(mSurfaceDensity: number): number;
  nSurfaceDensity(): number;
  setNSurfaceDensity(nSurfaceDensity: number): number;
  straighten(): number;
  surfaceFit(): number;
  surfaceFit1(surfType: PolyMeshType, surfU: number, surfV: number): number;
  appendVertex(pVertex: OdDbPolygonMeshVertex, vType: Vertex3dType): OdDbObjectId;
  openVertex(vertId: OdDbObjectId, mode: OpenMode, openErasedOne: boolean): number;
  openSequenceEnd(mode: OpenMode): number;
  vertexIterator(): number;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): number;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): number;
  dxfOut(pFiler: OdDbDxfFiler): number;
  dxfIn(pFiler: OdDbDxfFiler): OdResult;
  dxfInFields_R12(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields_R12(pFiler: OdDbDxfFiler): number;
  subWorldDraw(pWd: OdGiWorldDraw): boolean;
  subClose(): number;
  isPlanar(): boolean;
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
  static rxInit(): number;
  static rxUninit(): number;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  vertexType(): Vertex3dType;
  position(): OdGePoint3d;
  setPosition(position: OdGePoint3d): number;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): number;
  dxfInFields_R12(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields_R12(pFiler: OdDbDxfFiler): number;
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
  static rxInit(): number;
  static rxUninit(): number;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  convertFrom(pSource: OdDbEntity, transferId: boolean): OdResult;
  convertTo(pDest: OdDb2dPolyline, transferId: boolean): OdResult;
  getPointAt(vertexIndex: number, point2d: OdGePoint2d): number;
  getPointAt1(vertexIndex: number, point3d: OdGePoint3d): number;
  segType(segmentIndex: number): SegType;
  getLineSegAt(segmentIndex: number, line2d: OdGeLineSeg2d): number;
  getLineSegAt1(segmentIndex: number, line3d: OdGeLineSeg3d): number;
  getArcSegAt(segmentIndex: number, arc2d: OdGeCircArc2d): number;
  getArcSegAt1(segmentIndex: number, arc3d: OdGeCircArc3d): number;
  setClosed(closed: boolean): number;
  setPlinegen(plinegen: boolean): number;
  setElevation(elevation: number): number;
  setThickness(thickness: number): number;
  setConstantWidth(constantWidth: number): number;
  setNormal(normal: OdGeVector3d): number;
  isOnlyLines(): boolean;
  hasPlinegen(): boolean;
  elevation(): number;
  thickness(): number;
  getConstantWidth(): number;
  normal(): OdGeVector3d;
  addVertexAt(vertexIndex: number, point2d: OdGePoint2d, bulge: number, startWidth: number, endWidth: number, vertexIdentifier: number): number;
  removeVertexAt(vertexIndex: number): number;
  numVerts(): number;
  getBulgeAt(index: number): number;
  getVertexIdentifierAt(index: number): number;
  setPointAt(vertexIndex: number, point2d: OdGePoint2d): number;
  setBulgeAt(index: number, bulge: number): number;
  setVertexIdentifierAt(index: number, suggestedId: number): number;
  setWidthsAt(index: number, startWidth: number, endWidth: number): number;
  minimizeMemory(): number;
  maximizeMemory(): number;
  reset(reuse: boolean, numVerts: number): number;
  hasBulges(): boolean;
  hasVertexIdentifiers(): boolean;
  hasWidth(): boolean;
  subGetTransformedCopy(mat: OdGeMatrix3d, pCopy: OdDbEntityPtr): OdResult;
  subTransformBy(xfm: OdGeMatrix3d): OdResult;
  subWorldDraw(pWd: OdGiWorldDraw): boolean;
  subViewportDraw(pVd: OdGiViewportDraw): number;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): number;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfInFields_R12(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): number;
  isPlanar(): boolean;
  isClosed(): boolean;
  isPeriodic(): boolean;
  getStartPoint(startPoint: OdGePoint3d): OdResult;
  getEndPoint(endPoint: OdGePoint3d): OdResult;
  getPointAtParam(param: number, pointOnCurve: OdGePoint3d): OdResult;
  getFirstDeriv(param: number, firstDeriv: OdGeVector3d): OdResult;
  getSecondDeriv(param: number, secondDeriv: OdGeVector3d): OdResult;
  subExplode(entitySet: OdRxObjectPtrArray): OdResult;
  explodeGeometry(entitySet: OdRxObjectPtrArray): OdResult;
  subGetSubentPathsAtGsMarker(type: SubentType, gsMark: number, pickPoint: OdGePoint3d, viewXform: OdGeMatrix3d, subentPaths: OdDbFullSubentPathArray, pEntAndInsertStack: OdDbObjectIdArray): OdResult;
  subGetGsMarkersAtSubentPath(subPath: OdDbFullSubentPath, gsMarkers: OdGsMarkerArray): OdResult;
  subSubentPtr(path: OdDbFullSubentPath): number;
  reverseCurve(): OdResult;
  getEcs(): OdGeMatrix3d;
  setFromOdGeCurve(geCurve: OdGeCurve3d, normal: OdGeVector3d, tol: OdGeTol): OdResult;
  subSetDatabaseDefaults(pDb: OdDbDatabase, doSubEnts: boolean): number;
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
  static rxInit(): number;
  static rxUninit(): number;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  setLeaderLength(leaderLength: number): number;
  leaderLength(): number;
  center(): OdGePoint3d;
  setCenter(center: OdGePoint3d): number;
  chordPoint(): OdGePoint3d;
  setChordPoint(chordPoint: OdGePoint3d): number;
  extArcOn(): boolean;
  extArcStartAngle(): number;
  setExtArcStartAngle(newAngle: number): number;
  extArcEndAngle(): number;
  setExtArcEndAngle(newAngle: number): number;
  dxfInFields_R12(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields_R12(pFiler: OdDbDxfFiler): number;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): number;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): number;
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
  static rxInit(): number;
  static rxUninit(): number;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  center(): OdGePoint3d;
  setCenter(center: OdGePoint3d): number;
  chordPoint(): OdGePoint3d;
  setChordPoint(chordPoint: OdGePoint3d): number;
  overrideCenter(): OdGePoint3d;
  setOverrideCenter(overrideCenter: OdGePoint3d): number;
  jogPoint(): OdGePoint3d;
  setJogPoint(jogPoint: OdGePoint3d): number;
  jogAngle(): number;
  setJogAngle(jogAngle: number): number;
  extArcOn(): boolean;
  extArcStartAngle(): number;
  setExtArcStartAngle(newAngle: number): number;
  extArcEndAngle(): number;
  setExtArcEndAngle(newAngle: number): number;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): number;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): number;
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
  static rxInit(): number;
  static rxUninit(): number;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  basePoint(): OdGePoint3d;
  setBasePoint(geBasePoint: OdGePoint3d): number;
  unitDir(): OdGeVector3d;
  setUnitDir(geDirVector: OdGeVector3d): number;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): number;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): number;
  subWorldDraw(pWd: OdGiWorldDraw): boolean;
  subGetGeomExtents(extents: OdGeExtents3d): OdResult;
  isClosed(): boolean;
  isPeriodic(): boolean;
  isPlanar(): boolean;
  getStartPoint(startPoint: OdGePoint3d): OdResult;
  getEndPoint(endPoint: OdGePoint3d): OdResult;
  getPointAtParam(param: number, pointOnCurve: OdGePoint3d): OdResult;
  getFirstDeriv(param: number, firstDeriv: OdGeVector3d): OdResult;
  getSecondDeriv(param: number, secondDeriv: OdGeVector3d): OdResult;
  subTransformBy(xfm: OdGeMatrix3d): OdResult;
  setFromOdGeCurve(geCurve: OdGeCurve3d, normal: OdGeVector3d, tol: OdGeTol): OdResult;
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
  static rxInit(): number;
  static rxUninit(): number;
  static createFromCurves(curveSegments: OdRxObjectPtrArray, regions: OdRxObjectPtrArray): OdResult;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  acisOut(pStreamBuf: OdStreamBuf, typeVer: number): OdResult;
  brep(brep: OdBrBrep): number;
  getFaceMesh(mesh: OdGeTrMesh, iFace: number, triangulationParams: wrTriangulationParams): boolean;
  isNull(): boolean;
  getNormal(normal: OdGeVector3d): OdResult;
  isPlanar(): boolean;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): number;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): number;
  subWorldDraw(pWd: OdGiWorldDraw): boolean;
  subExplode(entitySet: OdRxObjectPtrArray): OdResult;
  subTransformBy(xfm: OdGeMatrix3d): OdResult;
  saveAs(pWd: OdGiWorldDraw, ver: DwgVersion): number;
  booleanOper(operation: BoolOperType, otherRegion: OdDbRegion): OdResult;
  subIntersectWith(pEnt: OdDbEntity, intType: Intersect, points: OdGePoint3dArray, thisGsMarker: number, otherGsMarker: number): OdResult;
  subIntersectWith1(pEnt: OdDbEntity, intType: Intersect, projPlane: OdGePlane, points: OdGePoint3dArray, thisGsMarker: number, otherGsMarker: number): OdResult;
  subSubentPtr(id: OdDbFullSubentPath): number;
  subGetGsMarkersAtSubentPath(subPath: OdDbFullSubentPath, gsMarkers: OdGsMarkerArray): OdResult;
  subGetSubentPathsAtGsMarker(type: SubentType, gsMark: number, pickPoint: OdGePoint3d, viewXform: OdGeMatrix3d, subentPaths: OdDbFullSubentPathArray, pEntAndInsertStack: OdDbObjectIdArray): OdResult;
  numChanges(): number;
  subSetAttributes(pTraits: OdGiDrawableTraits): number;
  subGetGeomExtents(extents: OdGeExtents3d): OdResult;
  subClose(): number;
  copyFrom(pSource: OdRxObject): number;
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
  static rxInit(): number;
  static rxUninit(): number;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  xLine1Point(): OdGePoint3d;
  setXLine1Point(xLine1Point: OdGePoint3d): number;
  xLine2Point(): OdGePoint3d;
  setXLine2Point(xLine2Point: OdGePoint3d): number;
  dimLinePoint(): OdGePoint3d;
  setDimLinePoint(dimLinePoint: OdGePoint3d): number;
  oblique(): number;
  setOblique(oblique: number): number;
  rotation(): number;
  setRotation(rotation: number): number;
  jogSymbolOn(): boolean;
  setJogSymbolOn(value: boolean): number;
  jogSymbolPosition(): OdGePoint3d;
  setJogSymbolPosition(pt: OdGePoint3d): number;
  jogSymbolHeight(): number;
  setJogSymbolHeight(value: number): number;
  dxfInFields_R12(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields_R12(pFiler: OdDbDxfFiler): number;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): number;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): number;
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbSelectionFilter.html} Additional documentation.
 */
class OdDbSelectionFilter extends OdRxObject {
  static cast(pObj: OdRxObject): OdDbSelectionFilter;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdDbSelectionFilter;
  static rxInit(): number;
  static rxUninit(): number;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  accept(entityId: OdDbObjectId): boolean;
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbParametrizedSF.html} Additional documentation.
 */
class OdDbParametrizedSF extends OdDbSelectionFilter {
  static createObject(pSpec: OdResBuf, pDb: OdDbDatabase): number;
  setSpecification(arg0: OdResBuf, arg1: OdDbDatabase): number;
  specification(): number;
  database(): OdDbDatabase;
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbSelectionSetIterator.html} Additional documentation.
 */
class OdDbSelectionSetIterator extends OdSelectionSetIterator {
  static cast(pObj: OdRxObject): OdDbSelectionSetIterator;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdDbSelectionSetIterator;
  static rxInit(): number;
  static rxUninit(): number;
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
  static rxInit(): number;
  static rxUninit(): number;
  static createObject1(pDb: OdDbDatabase): number;
  static select(pDb: OdDbDatabase, pFilter: OdRxObject): number;
  static select1(vpId: OdDbObjectId, nPoints: number, wcsPts: OdGePoint3d, mode: Mode, sm: number, pFilter: OdRxObject): number;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  database(): OdDbDatabase;
  objectIdArray(): number;
  append(entityId: OdDbObjectId, pMethod: OdDbSelectionMethod): number;
  append1(entityIds: OdDbObjectIdArray, pMethod: OdDbSelectionMethod): number;
  append2(subent: OdDbFullSubentPath, pMethod: OdDbSelectionMethod): number;
  append3(pSSet: OdSelectionSet): number;
  remove(entityId: OdDbObjectId): number;
  remove1(entityIds: OdDbObjectIdArray): number;
  remove2(subent: OdDbFullSubentPath): number;
  remove3(pSSet: OdSelectionSet): number;
  isMember(entityId: OdDbObjectId): boolean;
  isMember1(subent: OdDbFullSubentPath): boolean;
  method(entityId: OdDbObjectId): number;
  subentCount(rootEntityId: OdDbStub): number;
  getSubentity(entityId: OdDbObjectId, i: number, path: OdDbFullSubentPath): boolean;
  method1(subent: OdDbFullSubentPath): number;
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
  static rxInit(): number;
  static rxUninit(): number;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  position(): OdGePoint3d;
  setPosition(position: OdGePoint3d): number;
  size(): number;
  setSize(size: number): number;
  name(): number;
  setName(name: OdString): OdResult;
  rotation(): number;
  setRotation(rotation: number): number;
  widthFactor(): number;
  setWidthFactor(widthFactor: number): number;
  oblique(): number;
  setOblique(oblique: number): number;
  thickness(): number;
  setThickness(thickness: number): number;
  normal(): OdGeVector3d;
  setNormal(normal: OdGeVector3d): number;
  isPlanar(): boolean;
  shapeNumber(): number;
  setShapeNumber(shapeNumber: number): number;
  styleId(): OdDbObjectId;
  setStyleId(styleId: OdDbObjectId): OdResult;
  subWorldDraw(pWd: OdGiWorldDraw): boolean;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): number;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): number;
  dxfOut(pFiler: OdDbDxfFiler): number;
  dxfInFields_R12(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields_R12(pFiler: OdDbDxfFiler): number;
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
  static rxInit(): number;
  static rxUninit(): number;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  getPointAt(pointIndex: number, pointValue: OdGePoint3d): number;
  setPointAt(pointIndex: number, pointValue: OdGePoint3d): number;
  thickness(): number;
  setThickness(vThickness: number): number;
  normal(): OdGeVector3d;
  setNormal(geVector: OdGeVector3d): number;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): number;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): number;
  dxfInFields_R12(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields_R12(pFiler: OdDbDxfFiler): number;
  subWorldDraw(pWd: OdGiWorldDraw): boolean;
  subViewportDraw(pVd: OdGiViewportDraw): number;
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
  static rxInit(): number;
  static rxUninit(): number;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  getSortHandle(id: OdDbObjectId, h: OdDbHandle): number;
  moveToBottom(entityIds: OdDbObjectIdArray): number;
  moveToTop(entityIds: OdDbObjectIdArray): number;
  moveBelow(entityIds: OdDbObjectIdArray, targetId: OdDbObjectId): number;
  moveAbove(entityIds: OdDbObjectIdArray, targetId: OdDbObjectId): number;
  swapOrder(firstId: OdDbObjectId, secondId: OdDbObjectId): number;
  blockId(): OdDbObjectId;
  firstEntityIsDrawnBeforeSecond(firstID: OdDbObjectId, secondID: OdDbObjectId): boolean;
  getFullDrawOrder(entityIds: OdDbObjectIdArray, honorSortentsMask: number): number;
  getRelativeDrawOrder(entityIds: OdDbObjectIdArray, honorSortentsMask: number): number;
  setRelativeDrawOrder(entityIds: OdDbObjectIdArray): number;
  setAbsoluteDrawOrder(handlePairs: HandlePairsArray): number;
  getAbsoluteDrawOrder(handlePairs: HandlePairsArray): number;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): number;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): number;
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
  static rxInit(): number;
  static rxUninit(): number;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  isRational(): boolean;
  degree(): number;
  elevateDegree(newDegree: number): number;
  numControlPoints(): number;
  getControlPointAt(controlPointIndex: number, point: OdGePoint3d): number;
  setControlPointAt(controlPointIndex: number, point: OdGePoint3d): number;
  numFitPoints(): number;
  getFitPointAt(fitPointIndex: number, point: OdGePoint3d): OdResult;
  setFitPointAt(fitPointIndex: number, point: OdGePoint3d): number;
  insertFitPointAt(fitPointIndex: number, point: OdGePoint3d): number;
  removeFitPointAt(fitPointIndex: number): number;
  fitTolerance(): number;
  setFitTol(fitTolerance: number): number;
  getFitTangents(startTangent: OdGeVector3d, endTangent: OdGeVector3d): OdResult;
  setFitTangents(startTangent: OdGeVector3d, endTangent: OdGeVector3d): number;
  hasFitData(): boolean;
  setFitData(fitPoints: OdGePoint3dArray, degree: number, fitTolerance: number, startTangent: OdGeVector3d, endTangent: OdGeVector3d): number;
  setFitData1(fitPoints: OdGePoint3dArray, degree: number, fitTolerance: number, startTangent: OdGeVector3d, endTangent: OdGeVector3d, knotParam: OdGeKnotParameterization): number;
  purgeFitData(): number;
  setNurbsData(degree: number, rational: boolean, closed: boolean, periodic: boolean, controlPoints: OdGePoint3dArray, knots: OdGeDoubleArray, weights: OdGeDoubleArray, controlPtTol: number, knotTol: number): number;
  setNurbsData1(degree: number, rational: boolean, closed: boolean, periodic: boolean, controlPoints: OdGePoint3dArray, knots: OdGeKnotVector, weights: OdGeDoubleArray, controlPtTol: number): number;
  weightAt(weightIndex: number): number;
  setWeightAt(weightIndex: number, weight: number): number;
  insertKnot(param: number): number;
  reverseCurve(): OdResult;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): number;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): number;
  subWorldDraw(pWd: OdGiWorldDraw): boolean;
  subTransformBy(xfm: OdGeMatrix3d): OdResult;
  isPlanar(): boolean;
  getPointAtParam(param: number, pointOnCurve: OdGePoint3d): OdResult;
  getStartPoint(startPoint: OdGePoint3d): OdResult;
  getEndPoint(endPoint: OdGePoint3d): OdResult;
  getFirstDeriv(param: number, firstDeriv: OdGeVector3d): OdResult;
  getSecondDeriv(param: number, secondDeriv: OdGeVector3d): OdResult;
  getSplitCurves(params: OdGeDoubleArray, entitySet: OdRxObjectPtrArray): OdResult;
  type(): SplineType;
  setType(type: SplineType): OdResult;
  cvFrame(): boolean;
  setCvFrame(bVisible: boolean): number;
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
  static rxInit(): number;
  static rxUninit(): number;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
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
  static rxInit(): number;
  static rxUninit(): number;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  subWorldDraw(pWd: OdGiWorldDraw): boolean;
  subSetAttributes(pTraits: OdGiDrawableTraits): number;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): number;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): number;
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
  splitFace(subentFaceId: OdDbSubentId, subent0: OdDbSubentId, point0: OdGePoint3d, subent1: OdDbSubentId, point1: OdGePoint3d): OdResult;
  extrudeFaces(subentPaths: OdDbFullSubentPathArray, length: number, dir: OdGeVector3d, taper: number): OdResult;
  extrudeFaces1(subentPaths: OdDbFullSubentPathArray, alongPath: OdGePoint3dArray, taper: number): OdResult;
  extrudeConnectedFaces(subentPaths: OdDbFullSubentPathArray, length: number, dir: OdGeVector3d, taper: number): OdResult;
  negate(): OdResult;
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
  getAdjacentSubentPath(path: OdDbFullSubentPath, type: SubentType, subentPaths: OdDbFullSubentPathArray): OdResult;
  getSubentPath(nIndex: number, type: SubentType, subentPaths: OdDbFullSubentPathArray): OdResult;
  convertToSurface(bConvertAsSmooth: boolean, id: OdDbSubentId, pSurface: OdDbSurfacePtr): OdResult;
  convertToSurface1(bConvertAsSmooth: boolean, optimize: boolean, pSurface: OdDbSurfacePtr): OdResult;
  convertToSolid(bConvertAsSmooth: boolean, optimize: boolean, pSolid: OdDb3dSolidPtr): OdResult;
  getSubentColor(id: OdDbSubentId, color: OdCmColor): OdResult;
  setSubentColor(id: OdDbSubentId, color: OdCmColor): OdResult;
  getSubentMaterial(id: OdDbSubentId, material: OdDbObjectId): OdResult;
  setSubentMaterial(id: OdDbSubentId, material: OdDbObjectId): OdResult;
  getSubentMaterialMapper(id: OdDbSubentId, mapper: OdGiMapper): OdResult;
  setSubentMaterialMapper(id: OdDbSubentId, mapper: OdGiMapper): OdResult;
  getFacePlane(id: OdDbSubentId, facePlane: OdGePlane): OdResult;
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
  objectIds(objectIdsArg: OdDbObjectIdArray): number;
  objectIds1(): number;
  objectIds2(): number;
  subentId(): OdDbSubentId;
  subentId1(): OdDbSubentId;
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
  static rxInit(): number;
  static rxUninit(): number;
  static createFrom(pFromEntity: OdDbEntity, pNewSurface: OdDbSurfacePtr): OdResult;
  static trimSurface(blankSurfaceId: OdDbObjectId, toolIds: OdDbObjectIdArray, toolCurveIds: OdDbObjectIdArray, projVectors: OdGeVector3dArray, pickPoint: OdGePoint3d, viewVector: OdGeVector3d, bAutoExtend: boolean, bAssociativeEnabled: boolean): OdResult;
  static createOffsetSurface(pInputSurface: OdDbEntity, dOffsetDistance: number, offsetSurface: OdDbEntityPtr): OdResult;
  static createOffsetSurface1(pInputSurface: OdDbEntity, dOffsetDistance: number, bAssociativeEnabled: boolean, offsetSurfaceId: OdDbObjectId): OdResult;
  static createFilletSurface(surfId1: OdDbObjectId, pickPt1: OdGePoint3d, surfId2: OdDbObjectId, pickPt2: OdGePoint3d, dRadius: number, trimMode: FilletTrimMode, projDir: OdGeVector3d, filletSurface: OdDbSurfacePtr): OdResult;
  static createFilletSurface1(surfId1: OdDbObjectId, pickPt1: OdGePoint3d, surfId2: OdDbObjectId, pickPt2: OdGePoint3d, dRadius: number, trimMode: FilletTrimMode, projDir: OdGeVector3d, bAssociativeEnabled: boolean, filletSurfaceId: OdDbObjectId): OdResult;
  static createExtendSurface(sourceSurface: OdDbObjectId, edgesIdArray: any, dExtDist: number, extOption: EdgeExtensionType, bAssociativeEnabled: boolean, newExtendSurfaceId: OdDbObjectId): OdResult;
  static createNetworkSurface(uProfilesArray: any, vProfilesArray: any, newSurface: OdDbSurfacePtr): OdResult;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  uIsolineDensity(): number;
  setUIsolineDensity(numIsolines: number): number;
  vIsolineDensity(): number;
  setVIsolineDensity(numIsolines: number): number;
  convertToRegion(regions: OdDbEntityPtrArray): OdResult;
  thicken(thickness: number, bBothSides: boolean, pSolid: OdDb3dSolidPtr): OdResult;
  isNull(): boolean;
  acisOut(pStreamBuf: OdStreamBuf, typeVer: number): OdResult;
  brep(brep: OdBrBrep): number;
  getFaceMesh(mesh: OdGeTrMesh, iFace: number, triangulationParams: wrTriangulationParams): boolean;
  subExplode(entitySet: OdRxObjectPtrArray): OdResult;
  subTransformBy(xfm: OdGeMatrix3d): OdResult;
  saveAs(pWd: OdGiWorldDraw, ver: DwgVersion): number;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): number;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): number;
  subWorldDraw(pWd: OdGiWorldDraw): boolean;
  subViewportDraw(pVd: OdGiViewportDraw): number;
  subSubentPtr(id: OdDbFullSubentPath): number;
  createInterferenceObjects(interferenceObjects: OdDbEntityPtrArray, pEntity: OdDbEntityPtr, flags: number): OdResult;
  booleanUnion(pSurface: OdDbSurface, pNewSurface: OdDbSurfacePtr): OdResult;
  booleanSubtract(pSurface: OdDbSurface, pNewSurface: OdDbSurfacePtr): OdResult;
  booleanSubtract1(pSolid: OdDb3dSolid, pNewSurface: OdDbSurfacePtr): OdResult;
  booleanIntersect(pSurface: OdDbSurface, intersectionEntities: OdDbEntityPtrArray): OdResult;
  booleanIntersect1(pSolid: OdDb3dSolid, intersectionEntities: OdDbEntityPtrArray): OdResult;
  imprintEntity(pEntity: OdDbEntity): OdResult;
  createSectionObjects(sectionPlane: OdGePlane, sectionObjects: OdDbEntityPtrArray): OdResult;
  sliceByPlane(slicePlane: OdGePlane, pNegHalfSurface: OdDbSurfacePtr, pNewSurface: OdDbSurfacePtr): OdResult;
  sliceBySurface(pSlicingSurface: OdDbSurfacePtr, pNegHalfSurface: OdDbSurfacePtr, pNewSurface: OdDbSurfacePtr): OdResult;
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
  subGetTransformedCopy(mat: OdGeMatrix3d, pCopy: OdDbEntityPtr): OdResult;
  convertToNurbSurface(nurbSurfaceArray: OdDbNurbSurfacePtrArray): OdResult;
  subSetAttributes(pTraits: OdGiDrawableTraits): number;
  projectOnToSurface(pEntityToProject: OdDbEntity, projectionDirection: OdGeVector3d, projectedEntities: OdDbEntityPtrArray): OdResult;
  rayTest(rayBasePoint: OdGePoint3d, rayDir: OdGeVector3d, rayRadius: number, subEntIdsArray: any, parameters: OdGeDoubleArray): OdResult;
  extendEdges(edgesId: OdDbFullSubentPathArray, dExtDist: number, extOption: EdgeExtensionType, bAssociativeEnabled: boolean): OdResult;
  subGetGeomExtents(extents: OdGeExtents3d): OdResult;
  subHandOverTo(pNewObject: OdDbObject): number;
  subClose(): number;
  numChanges(): number;
  copyFrom(pSource: OdRxObject): number;
};

enum EdgeExtensionType {
  kExtendEdge = 0,
  kStretchEdge = 1
};

class OdDbNurbSurfacePtrArray extends OdArray<OdDbNurbSurface> { };

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
  static rxInit(): number;
  static rxUninit(): number;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  getAt(sName: OdString, openMode: OpenMode, getErasedRecord: boolean): number;
  getAt1(sName: OdString, getErasedRecord: boolean): OdDbObjectId;
  has(sName: OdString): boolean;
  has1(objectId: OdDbObjectId): boolean;
  newIterator(atBeginning: boolean, skipDeleted: boolean): number;
  ids(atBeginning: boolean, skipDeleted: boolean): OdDbRecordIdCollectionView;
  records(atBeginning: boolean, skipDeleted: boolean): OdDbRecordCollectionView;
  add(pRecord: OdDbSymbolTableRecord): OdDbObjectId;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): number;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): number;
  dxfIn(pFiler: OdDbDxfFiler): OdResult;
  dxfOut(pFiler: OdDbDxfFiler): number;
  dxfInFields_R12(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields_R12(pFiler: OdDbDxfFiler): number;
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbSymbolTableIterator.html} Additional documentation.
 */
class OdDbSymbolTableIterator extends OdRxObject {
  static cast(pObj: OdRxObject): OdDbSymbolTableIterator;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdDbSymbolTableIterator;
  static rxInit(): number;
  static rxUninit(): number;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  start(atBeginning: boolean, skipErased: boolean): number;
  done(): boolean;
  getRecordId(): OdDbObjectId;
  getRecord(openMode: OpenMode, openErasedRecord: boolean): number;
  step(forward: boolean, skipErased: boolean): number;
  seek(ObjectId: OdDbObjectId): number;
  seek1(pRecord: OdDbSymbolTableRecord): number;
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdError_DuplicateRecordName.html} Additional documentation.
 */
class OdError_DuplicateRecordName extends OdError {
  constructor(existingRecId: OdDbObjectId);
  existingRecordId(): OdDbObjectId;
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbRecordIdCollectionView.html} Additional documentation.
 */
class OdDbRecordIdCollectionView {
  constructor(i: OdDbSymbolTableIteratorPtr);
  begin(): Iterator;
  end(): Iterator;
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbRecordCollectionView.html} Additional documentation.
 */
class OdDbRecordCollectionView {
  constructor(i: OdDbSymbolTableIteratorPtr);
  begin(): Iterator;
  end(): Iterator;
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
  static rxInit(): number;
  static rxUninit(): number;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  getName(): number;
  setName(sName: OdString): number;
  isDependent(): boolean;
  isResolved(): boolean;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): number;
  appendToOwner(idPair: OdDbIdPair, pOwnerObject: OdDbObject, ownerIdMap: OdDbIdMapping): number;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): number;
  dxfOutFields_R12(pFiler: OdDbDxfFiler): number;
  copyFrom(pSource: OdRxObject): number;
  subErase(erasing: boolean): OdResult;
  subSwapIdWith(otherId: OdDbObjectId, swapXdata: boolean, swapExtDict: boolean): number;
  subWblockClone(ownerIdMap: OdDbIdMapping, pOwner: OdDbObject, bPrimary: boolean): number;
};

enum TableBreakOption {
  kTableBreakNone = 0,
  kTableBreakEnableBreaking = 1,
  kTableBreakRepeatTopLabels = 2,
  kTableBreakRepeatBottomLabels = 4,
  kTableBreakAllowManualPositions = 8,
  kTableBreakAllowManualHeights = 16
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
  static rxInit(): number;
  static rxUninit(): number;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  tableStyle(): OdDbObjectId;
  setTableStyle(tableStyleId: OdDbObjectId): number;
  direction(): OdGeVector3d;
  setDirection(horizVector: OdGeVector3d): number;
  numRows(): number;
  setNumRows(numRows: number): number;
  numColumns(): number;
  setNumColumns(numColumns: number): number;
  width(): number;
  setWidth(width: number): number;
  columnWidth(column: number): number;
  setColumnWidth(column: number, width: number): number;
  setColumnWidth1(width: number): number;
  height(): number;
  setHeight(height: number): number;
  rowHeight(row: number): number;
  setRowHeight(row: number, height: number): number;
  setRowHeight1(height: number): number;
  minimumColumnWidth(column: number): number;
  minimumRowHeight(row: number): number;
  minimumTableWidth(): number;
  minimumTableHeight(): number;
  horzCellMargin(): number;
  setHorzCellMargin(cellMargin: number): number;
  vertCellMargin(): number;
  setVertCellMargin(cellMargin: number): number;
  flowDirection(): FlowDirection;
  setFlowDirection(flowDirection: FlowDirection): number;
  isTitleSuppressed(): boolean;
  suppressTitleRow(suppress: boolean): number;
  isHeaderSuppressed(): boolean;
  suppressHeaderRow(suppress: boolean): number;
  alignment(rowType: RowType): CellAlignment;
  alignment1(row: number, column: number): CellAlignment;
  setAlignment(alignment: CellAlignment, rowTypes: number): number;
  setAlignment1(row: number, column: number, alignment: CellAlignment): number;
  isBackgroundColorNone(rowType: RowType): boolean;
  isBackgroundColorNone1(row: number, column: number): boolean;
  setBackgroundColorNone(disable: boolean, rowTypes: number): number;
  setBackgroundColorNone1(row: number, column: number, disable: boolean): number;
  backgroundColor(rowType: RowType): OdCmColor;
  backgroundColor1(row: number, column: number): OdCmColor;
  setBackgroundColor(color: OdCmColor, rowTypes: number): number;
  setBackgroundColor1(row: number, column: number, color: OdCmColor): number;
  contentColor(rowType: RowType): OdCmColor;
  contentColor1(row: number, column: number): OdCmColor;
  setContentColor(color: OdCmColor, nRowType: number): number;
  setContentColor1(row: number, column: number, color: OdCmColor): number;
  textStyle(rowType: RowType): OdDbObjectId;
  textStyle1(row: number, column: number): OdDbObjectId;
  setTextStyle(textStyleId: OdDbObjectId, rowTypes: number): number;
  setTextStyle1(row: number, column: number, textStyleId: OdDbObjectId): number;
  textHeight(rowType: RowType): number;
  textHeight1(row: number, column: number): number;
  setTextHeight(height: number, rowTypes: number): number;
  setTextHeight1(row: number, column: number, height: number): number;
  gridLineWeight(gridlineType: GridLineType, rowType: RowType): LineWeight;
  gridLineWeight1(row: number, column: number, edgeType: CellEdgeMask): LineWeight;
  setGridLineWeight(lineWeight: LineWeight, gridlineTypes: number, rowTypes: number): number;
  setGridLineWeight1(row: number, column: number, edgeTypes: number, lineWeight: LineWeight): number;
  gridColor(gridlineType: GridLineType, rowType: RowType): OdCmColor;
  gridColor1(row: number, column: number, edgeType: CellEdgeMask): OdCmColor;
  gridVisibility(gridlineType: GridLineType, rowType: RowType): Visibility;
  gridVisibility1(row: number, column: number, edgeType: CellEdgeMask): Visibility;
  setGridVisibility(gridVisiblity: Visibility, gridlineTypes: number, rowTypes: number): number;
  setGridVisibility1(row: number, column: number, edgeTypes: number, gridVisibility: Visibility): number;
  tableStyleOverrides(overrides: OdUInt32Array): boolean;
  clearTableStyleOverrides(option: number): number;
  cellType(row: number, column: number): CellType;
  setCellType(row: number, column: number, cellType: CellType): number;
  getCellExtents(row: number, column: number, isOuterCell: boolean, pts: OdGePoint3dArray): number;
  attachmentPoint(row: number, column: number): OdGePoint3d;
  cellStyleOverrides(row: number, column: number, overrides: OdUInt32Array): boolean;
  clearCellOverrides(row: number, column: number): number;
  deleteCellContent(row: number, column: number): number;
  rowType(row: number): RowType;
  textString(row: number, column: number): number;
  setTextString(row: number, column: number, textString: OdString): number;
  fieldId(row: number, column: number): OdDbObjectId;
  setFieldId(row: number, column: number, fieldId: OdDbObjectId): number;
  textRotation(row: number, column: number): RotationAngle;
  setTextRotation(row: number, column: number, textRotation: RotationAngle): number;
  isAutoScale(row: number, column: number): boolean;
  setAutoScale(row: number, column: number, autoScale: boolean): number;
  blockTableRecordId(row: number, column: number): OdDbObjectId;
  setBlockTableRecordId(row: number, column: number, blockId: OdDbObjectId, autoScale: boolean): number;
  blockScale(row: number, column: number): number;
  setBlockScale(row: number, column: number, blockScale: number): number;
  blockRotation(row: number, column: number): number;
  setBlockRotation(row: number, column: number, blockRotation: number): number;
  getBlockAttributeValue(row: number, column: number, attdefId: OdDbObjectId, attValue: OdString): number;
  setBlockAttributeValue(row: number, column: number, attdefId: OdDbObjectId, attValue: OdString): number;
  setGridColor(color: OdCmColor, gridlineTypes: number, rowTypes: number): number;
  setGridColor1(row: number, column: number, edgeTypes: number, color: OdCmColor): number;
  insertColumns(column: number, width: number, numColumns: number): number;
  deleteColumns(column: number, numColumns: number): number;
  insertRows(row: number, height: number, numRows: number): number;
  deleteRows(row: number, numRows: number): number;
  mergeCells(minRow: number, maxRow: number, minColumn: number, maxColumn: number): number;
  unmergeCells(minRow: number, maxRow: number, minColumn: number, maxColumn: number): number;
  mergedHeight(row: number, column: number): number;
  mergedWidth(row: number, column: number): number;
  mergedFlag(row: number, column: number): boolean;
  generateLayout(): OdResult;
  recomputeTableBlock(forceUpdate: boolean): OdResult;
  reselectSubRegion(paths: OdDbFullSubentPathArray): boolean;
  setSubSelection(range: OdCellRange, subTable: number): OdResult;
  setSubSelection1(rowMin: number, rowMax: number, colMin: number, colMax: number, subTable: number): OdResult;
  clearSubSelection(): number;
  hasSubSelection(): boolean;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): number;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): number;
  subClose(): number;
  subSetDatabaseDefaults(pDb: OdDbDatabase, doSubents: boolean): number;
  modified(pObj: OdDbObject): number;
  subWorldDraw(pWd: OdGiWorldDraw): boolean;
  subViewportDraw(pVd: OdGiViewportDraw): number;
  subTransformBy(xfm: OdGeMatrix3d): OdResult;
  subGetTransformedCopy(xfm: OdGeMatrix3d, pCopy: OdDbEntityPtr): OdResult;
  subGetGeomExtents(extents: OdGeExtents3d): OdResult;
  setDataType(nDataType: DataType, nUnitType: UnitType): number;
  setDataType1(nDataType: DataType, nUnitType: UnitType, nRowTypes: number): number;
  format(type: RowType): number;
  setFormat(pszFormat: OdString): number;
  setFormat1(pszFormat: OdString, nRowTypes: number): number;
  setDataType2(row: number, col: number, nDataType: DataType, nUnitType: UnitType): number;
  value(row: number, col: number): OdValue;
  setValue(row: number, col: number, val: OdValue): number;
  setValue1(row: number, col: number, pszText: OdString, nOption: ParseOption): number;
  resetValue(row: number, col: number): number;
  format1(row: number, col: number): number;
  setFormat2(row: number, col: number, pszFormat: OdString): number;
  isBreakEnabled(): boolean;
  enableBreak(bEnable: boolean): number;
  breakFlowDirection(): TableBreakFlowDirection;
  setBreakFlowDirection(flowDir: TableBreakFlowDirection): number;
  breakHeight(index: number): number;
  setBreakHeight(index: number, height: number): number;
  breakOffset(index: number): OdGeVector3d;
  setBreakOffset(index: number, vec: OdGeVector3d): number;
  breakOption(): TableBreakOption;
  setBreakOption(option: TableBreakOption): number;
  breakSpacing(): number;
  setBreakSpacing(spacing: number): number;
  setSize(rows: number, cols: number): number;
  canInsert(nIndex: number, bRow: boolean): boolean;
  insertRowsAndInherit(nIndex: number, nInheritFrom: number, nNumRows: number): number;
  insertColumnsAndInherit(col: number, nInheritFrom: number, nNumCols: number): number;
  canDelete(nIndex: number, nCount: number, bRow: boolean): boolean;
  isEmpty(row: number, col: number): boolean;
  getMergeRange(row: number, col: number): OdCellRange;
  isContentEditable(row: number, col: number): boolean;
  isFormatEditable(row: number, col: number): boolean;
  cellState(row: number, col: number): CellState;
  setCellState(row: number, col: number, nLock: CellState): number;
  numContents(row: number, col: number): number;
  createContent(row: number, col: number, nIndex: number): number;
  moveContent(row: number, col: number, nFromIndex: number, nToIndex: number): number;
  deleteContent(row: number, col: number): number;
  deleteContent1(row: number, col: number, nIndex: number): number;
  deleteContent2(range: OdCellRange): number;
  contentType(row: number, col: number): CellContentType;
  contentType1(row: number, col: number, nIndex: number): CellContentType;
  value1(row: number, col: number, nContent: number): OdValue;
  value2(row: number, col: number, nContent: number, nOption: FormatOption): OdValue;
  setValue2(row: number, col: number, nContent: number, val: OdValue): number;
  setValue3(row: number, col: number, nContent: number, val: OdValue, nOption: ParseOption): number;
  setValue4(row: number, col: number, nContent: number, sText: OdString, nOption: ParseOption): number;
  dataFormat(row: number, col: number): number;
  dataFormat1(row: number, col: number, nContent: number): number;
  setDataFormat(row: number, col: number, sFormat: OdString): number;
  setDataFormat1(row: number, col: number, nContent: number, sFormat: OdString): number;
  textString1(row: number, col: number, nContent: number): number;
  textString2(row: number, col: number, nContent: number, nOption: FormatOption): number;
  textString3(row: number, col: number, nOption: FormatOption): number;
  setTextString1(row: number, col: number, nContent: number, text: OdString): number;
  hasFormula(row: number, col: number, nContent: number): boolean;
  getFormula(row: number, col: number, nContent: number): number;
  setFormula(row: number, col: number, nContent: number, pszFormula: OdString): number;
  fieldId1(row: number, col: number, nContent: number): OdDbObjectId;
  setFieldId1(row: number, col: number, nContent: number, fieldId: OdDbObjectId, nFlag: CellOption): number;
  blockTableRecordId1(row: number, col: number, nContent: number): OdDbObjectId;
  setBlockTableRecordId1(row: number, col: number, nContent: number, blkId: OdDbObjectId, autoFit: boolean): number;
  getBlockAttributeValue1(row: number, col: number, nContent: number, attdefId: OdDbObjectId): number;
  setBlockAttributeValue1(row: number, col: number, nContent: number, attdefId: OdDbObjectId, atrValue: OdString): number;
  getCustomData(row: number, col: number): number;
  setCustomData(row: number, col: number, nData: number): number;
  getCustomData1(row: number, col: number, sKey: OdString): OdValue;
  setCustomData1(row: number, col: number, sKey: OdString, pData: OdValue): number;
  cellStyle(row: number, col: number): number;
  setCellStyle(row: number, col: number, sCellStyle: OdString): number;
  margin(row: number, col: number, nMargin: CellMargin): number;
  setMargin(row: number, col: number, nMargins: CellMargin, fMargin: number): number;
  attachmentPoint1(row: number, col: number, content: number): OdGePoint3d;
  contentColor2(row: number, col: number, nContent: number): OdCmColor;
  setContentColor2(row: number, col: number, nContent: number, color: OdCmColor): number;
  setDataType3(row: number, col: number, nContent: number, nDataType: DataType, nUnitType: UnitType): number;
  textStyle2(row: number, col: number, nContent: number): OdDbObjectId;
  setTextStyle2(row: number, col: number, nContent: number, id: OdDbObjectId): number;
  textHeight2(row: number, col: number, nContent: number): number;
  setTextHeight2(row: number, col: number, nContent: number, height: number): number;
  rotation(): number;
  rotation1(row: number, col: number, nContent: number): number;
  setRotation(fAngle: number): number;
  setRotation1(row: number, col: number, nContent: number, fAngle: number): number;
  isAutoScale1(row: number, col: number, nContent: number): boolean;
  setAutoScale1(row: number, col: number, nContent: number, autoFit: boolean): number;
  scale(row: number, col: number, nContent: number): number;
  setScale(row: number, col: number, nContent: number, scale: number): number;
  contentLayout(row: number, col: number): CellContentLayout;
  setContentLayout(row: number, col: number, nLayout: CellContentLayout): number;
  isMergeAllEnabled(row: number, col: number): boolean;
  enableMergeAll(row: number, col: number, bEnable: boolean): number;
  getOverride(row: number, col: number, nContent: number): CellProperty;
  getOverride1(row: number, col: number, nGridLineType: GridLineType): GridProperty;
  setOverride(row: number, col: number, nContent: number, nOverride: CellProperty): number;
  setOverride1(row: number, col: number, nGridLineType: GridLineType, nOverride: GridProperty): number;
  removeAllOverrides(row: number, col: number): number;
  gridLineStyle(row: number, col: number, nGridLineType: GridLineType): GridLineStyle;
  setGridLineStyle(row: number, col: number, nGridLineTypes: GridLineType, nLineStyle: GridLineStyle): number;
  gridLineWeight2(row: number, col: number, nGridLineType: GridLineType): LineWeight;
  setGridLineWeight2(row: number, col: number, nGridLineTypes: GridLineType, nLineWeight: LineWeight): number;
  gridLinetype(row: number, col: number, nGridLineType: GridLineType): OdDbObjectId;
  setGridLinetype(row: number, col: number, nGridLineTypes: GridLineType, idLinetype: OdDbObjectId): number;
  gridColor2(row: number, col: number, nGridLineType: GridLineType): OdCmColor;
  setGridColor2(row: number, col: number, nGridlineTypes: GridLineType, color: OdCmColor): number;
  gridVisibility2(row: number, col: number, nGridLineType: GridLineType): Visibility;
  setGridVisibility2(row: number, col: number, nGridLineTypes: GridLineType, nVisibility: Visibility): number;
  gridDoubleLineSpacing(row: number, col: number, nGridLineType: GridLineType): number;
  setGridDoubleLineSpacing(row: number, col: number, nGridLineTypes: GridLineType, fSpacing: number): number;
  getGridProperty(row: number, col: number, nGridLineType: GridLineType, gridProp: OdGridProperty): number;
  setGridProperty(row: number, col: number, nGridLineTypes: GridLineType, gridProp: OdGridProperty): number;
  setGridProperty1(rangeIn: OdCellRange, nGridLineTypes: GridLineType, gridProp: OdGridProperty): number;
  isLinked(row: number, col: number): boolean;
  getDataLink(row: number, col: number): OdDbObjectId;
  getDataLink1(row: number, col: number, mode: OpenMode): number;
  getDataLink2(pRange: OdCellRange, dataLinkIds: OdDbObjectIdArray): number;
  setDataLink(row: number, col: number, idDataLink: OdDbObjectId, bUpdate: boolean): number;
  setDataLink1(range: OdCellRange, idDataLink: OdDbObjectId, bUpdate: boolean): number;
  getDataLinkRange(row: number, col: number): OdCellRange;
  removeDataLink(row: number, col: number): number;
  removeDataLink1(): number;
  updateDataLink(row: number, col: number, nDir: UpdateDirection, nOption: UpdateOption): number;
  updateDataLink1(nDir: UpdateDirection, nOption: UpdateOption): number;
  getColumnName(nIndex: number): number;
  setColumnName(nIndex: number, sName: OdString): number;
  getToolTip(row: number, col: number): number;
  setToolTip(row: number, col: number, sToolTip: OdString): number;
  copyFrom(pSource: OdRxObject): number;
  copyFrom1(pSrc: OdDbLinkedTableData, nOption: TableCopyOption): number;
  copyFrom2(pSrc: OdDbLinkedTableData, nOption: TableCopyOption, srcRange: OdCellRange, targetRange: OdCellRange, pNewTargetRangeOut: OdCellRange): number;
  copyFrom3(pSrc: OdDbTable, nOption: TableCopyOption, srcRange: OdCellRange, targetRange: OdCellRange, pNewTargetRangeOut: OdCellRange): number;
  appendToOwner(idPair: OdDbIdPair, pOwnerObject: OdDbObject, ownerIdMap: OdDbIdMapping): number;
  isRegenerateTableSuppressed(): boolean;
  suppressRegenerateTable(bSuppress: boolean): number;
  subExplode(entitySet: OdRxObjectPtrArray): OdResult;
  createTemplate(target: OdDbTableTemplate, nCopyOption: TableCopyOption): number;
  subErase(erasing: boolean): OdResult;
  subHighlight(bDoIt: boolean, pSubId: OdDbFullSubentPath, highlightAll: boolean): number;
  getSubTablesInfo(subTablesArray: any): number;
  getIterator(): number;
  getIterator1(pRange: OdCellRange, nOption: TableIteratorOption): number;
  subWblockClone(idMap: OdDbIdMapping, owner: OdDbObject, bPrimary: boolean): number;
};

enum TableBreakFlowDirection {
  kTableBreakFlowRight = 1,
  kTableBreakFlowDownOrUp = 2,
  kTableBreakFlowLeft = 4
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
  static rxInit(): number;
  static rxUninit(): number;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  position(): OdGePoint3d;
  setPosition(position: OdGePoint3d): number;
  alignmentPoint(): OdGePoint3d;
  setAlignmentPoint(alignment: OdGePoint3d): number;
  isDefaultAlignment(): boolean;
  normal(): OdGeVector3d;
  setNormal(normal: OdGeVector3d): number;
  isPlanar(): boolean;
  thickness(): number;
  setThickness(thickness: number): number;
  oblique(): number;
  setOblique(oblique: number): number;
  rotation(): number;
  setRotation(rotation: number): number;
  height(): number;
  setHeight(height: number): number;
  widthFactor(): number;
  setWidthFactor(widthFactor: number): number;
  isMirroredInX(): boolean;
  mirrorInX(mirror: boolean): number;
  isMirroredInY(): boolean;
  mirrorInY(mirror: boolean): number;
  textString(): number;
  setTextString(textString: OdString): number;
  textStyle(): OdDbObjectId;
  setTextStyle(textStyleId: OdDbObjectId): number;
  horizontalMode(): TextHorzMode;
  setHorizontalMode(horizontalMode: TextHorzMode): number;
  verticalMode(): TextVertMode;
  setVerticalMode(verticalMode: TextVertMode): number;
  correctSpelling(): number;
  adjustAlignment(pDb: OdDbDatabase): number;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): number;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): number;
  dxfInFields_R12(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields_R12(pFiler: OdDbDxfFiler): number;
  subClose(): number;
  explodeGeometry(entitySet: OdRxObjectPtrArray): OdResult;
  subWorldDraw(pWd: OdGiWorldDraw): boolean;
  subViewportDraw(pVd: OdGiViewportDraw): number;
  subTransformBy(xfm: OdGeMatrix3d): OdResult;
  subGetTransformedCopy(xfm: OdGeMatrix3d, pCopy: OdDbEntityPtr): OdResult;
  getBoundingPoints(boundingPoints: OdGePoint3dArray): number;
  setField(fieldName: OdString, pField: OdDbField): OdDbObjectId;
  removeField(fieldId: OdDbObjectId): OdResult;
  removeField1(fieldName: OdString): OdDbObjectId;
  convertFieldToText(): number;
  subSetDatabaseDefaults(pDb: OdDbDatabase, doSubents: boolean): number;
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
  static rxInit(): number;
  static rxUninit(): number;
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
  static rxInit(): number;
  static rxUninit(): number;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  isShapeFile(): boolean;
  setIsShapeFile(bShapeFile: boolean): number;
  isVertical(): boolean;
  setIsVertical(bVertical: boolean): number;
  isBackwards(): boolean;
  setIsBackwards(bBackwards: boolean): number;
  isUpsideDown(): boolean;
  setIsUpsideDown(bUpsideDown: boolean): number;
  textSize(): number;
  setTextSize(vSize: number): number;
  xScale(): number;
  setXScale(xFactor: number): number;
  obliquingAngle(): number;
  setObliquingAngle(vAngle: number): number;
  priorSize(): number;
  setPriorSize(vSize: number): number;
  fileName(): number;
  setFileName(sUniFont: OdString): number;
  bigFontFileName(): number;
  setBigFontFileName(sBigFont: OdString): number;
  setFont(typeface: OdString, bold: boolean, italic: boolean, charset: number, pitchAndFamily: number): number;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): number;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): number;
  dxfInFields_R12(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields_R12(pFiler: OdDbDxfFiler): number;
  dxfIn(pFiler: OdDbDxfFiler): OdResult;
  subClose(): number;
  subErase(erasing: boolean): OdResult;
  subHandOverTo(pNewObject: OdDbObject): number;
  setXData(pRb: OdResBuf): number;
  subSetAttributes(pTraits: OdGiDrawableTraits): number;
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
  static rxInit(): number;
  static rxUninit(): number;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): number;
  subGetGeomExtents(extents: OdGeExtents3d): OdResult;
  subTransformBy(xform: OdGeMatrix3d): OdResult;
  subSubentPtr(path: OdDbFullSubentPath): number;
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
  static rxInit(): number;
  static rxUninit(): number;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  height(): number;
  setHeight(height: number): number;
  width(): number;
  setWidth(width: number): number;
  centerPoint(): OdGePoint3d;
  setCenterPoint(centerPoint: OdGePoint3d): number;
  number(): number;
  isOn(): boolean;
  setOn(): number;
  setOff(): number;
  viewTarget(): OdGePoint3d;
  setViewTarget(viewTarget: OdGePoint3d): number;
  viewDirection(): OdGeVector3d;
  setViewDirection(viewDirection: OdGeVector3d): number;
  viewHeight(): number;
  setViewHeight(viewHeight: number): number;
  viewCenter(): OdGePoint2d;
  setViewCenter(viewCenter: OdGePoint2d): number;
  twistAngle(): number;
  setTwistAngle(twistAngle: number): number;
  lensLength(): number;
  setLensLength(lensLength: number): number;
  isFrontClipOn(): boolean;
  setFrontClipOn(): number;
  setFrontClipOff(): number;
  isBackClipOn(): boolean;
  setBackClipOn(): number;
  setBackClipOff(): number;
  isFrontClipAtEyeOn(): boolean;
  setFrontClipAtEyeOn(): number;
  setFrontClipAtEyeOff(): number;
  frontClipDistance(): number;
  setFrontClipDistance(frontClipDistance: number): number;
  backClipDistance(): number;
  setBackClipDistance(backClipDistance: number): number;
  isPerspectiveOn(): boolean;
  setPerspectiveOn(): number;
  setPerspectiveOff(): number;
  isUcsFollowModeOn(): boolean;
  setUcsFollowModeOn(): number;
  setUcsFollowModeOff(): number;
  isUcsIconVisible(): boolean;
  setUcsIconVisible(): number;
  setUcsIconInvisible(): number;
  isUcsIconAtOrigin(): boolean;
  setUcsIconAtOrigin(): number;
  setUcsIconAtCorner(): number;
  isFastZoomOn(): boolean;
  setFastZoomOn(): number;
  setFastZoomOff(): number;
  circleSides(): number;
  setCircleSides(circleSides: number): number;
  isSnapOn(): boolean;
  setSnapOn(): number;
  setSnapOff(): number;
  isSnapIsometric(): boolean;
  setSnapIsometric(): number;
  setSnapStandard(): number;
  snapAngle(): number;
  setSnapAngle(snapAngle: number): number;
  snapBasePoint(): OdGePoint2d;
  setSnapBasePoint(snapBasePoint: OdGePoint2d): number;
  snapIncrement(): OdGeVector2d;
  setSnapIncrement(snapIncrement: OdGeVector2d): number;
  snapIsoPair(): number;
  setSnapIsoPair(snapIsoPair: number): number;
  isGridOn(): boolean;
  setGridOn(): number;
  setGridOff(): number;
  gridIncrement(): OdGeVector2d;
  setGridIncrement(gridIncrement: OdGeVector2d): number;
  hiddenLinesRemoved(): boolean;
  showHiddenLines(): number;
  removeHiddenLines(): number;
  freezeLayersInViewport(layerIds: OdDbObjectIdArray): number;
  thawLayersInViewport(layerIds: OdDbObjectIdArray): number;
  thawAllLayersInViewport(): number;
  isLayerFrozenInViewport(layerId: OdDbObjectId): boolean;
  getFrozenLayerList(layerIds: OdDbObjectIdArray): number;
  updateDisplay(): number;
  subSetAttributes(pTraits: OdGiDrawableTraits): number;
  subWorldDraw(pWd: OdGiWorldDraw): boolean;
  isLocked(): boolean;
  setLocked(): number;
  setUnlocked(): number;
  isTransparent(): boolean;
  setTransparent(): number;
  setOpaque(): number;
  customScale(): number;
  setCustomScale(customScale: number): number;
  standardScale(): StandardScaleType;
  setStandardScale(standardScale: StandardScaleType): number;
  plotStyleSheet(): number;
  effectivePlotStyleSheet(): number;
  setPlotStyleSheet(plotStyleSheetName: OdString): number;
  isNonRectClipOn(): boolean;
  setNonRectClipOn(): number;
  setNonRectClipOff(): number;
  nonRectClipEntityId(): OdDbObjectId;
  setNonRectClipEntityId(clipEntityId: OdDbObjectId): number;
  getUcs(origin: OdGePoint3d, xAxis: OdGeVector3d, yAxis: OdGeVector3d): number;
  ucsName(): OdDbObjectId;
  elevation(): number;
  setUcs(origin: OdGePoint3d, xAxis: OdGeVector3d, yAxis: OdGeVector3d): number;
  setUcs1(viewType: OrthographicView, pDb: OdDbDatabase): number;
  setUcs2(ucsId: OdDbObjectId): number;
  setUcsToWorld(): number;
  setElevation(elevation: number): number;
  isUcsSavedWithViewport(): boolean;
  setUcsPerViewport(ucsPerViewport: boolean): number;
  setRenderMode(renderMode: RenderMode): number;
  renderMode(): RenderMode;
  shadePlot(): ShadePlotType;
  setShadePlot(shadePlot: ShadePlotType): number;
  shadePlotId(): OdDbObjectId;
  setShadePlot1(type: ShadePlotType, shadePlotId: OdDbObjectId): number;
  plotWireframe(): boolean;
  plotAsRaster(): boolean;
  background(): OdDbObjectId;
  setBackground(backgroundId: OdDbObjectId): number;
  visualStyle(): OdDbObjectId;
  setVisualStyle(visualStyle: OdDbObjectId): number;
  isDefaultLightingOn(): boolean;
  setDefaultLightingOn(on: boolean): number;
  defaultLightingType(): DefaultLightingType;
  setDefaultLightingType(typ: DefaultLightingType): number;
  brightness(): number;
  setBrightness(arg0: number): number;
  contrast(): number;
  setContrast(arg0: number): number;
  ambientLightColor(): OdCmColor;
  setAmbientLightColor(clr: OdCmColor): number;
  sunId(): OdDbObjectId;
  setSun(pSun: OdDbSun): OdDbObjectId;
  toneOperatorParameters(params: OdGiToneOperatorParameters): number;
  setToneOperatorParameters(params: OdGiToneOperatorParameters): number;
  setAnnotationScale(pScaleObj: OdDbAnnotationScale): OdResult;
  annotationScale(): number;
  isGridBoundToLimits(): boolean;
  setGridBoundToLimits(bNewVal: boolean): number;
  isGridAdaptive(): boolean;
  setGridAdaptive(bNewVal: boolean): number;
  isGridSubdivisionRestricted(): boolean;
  setGridSubdivisionRestricted(bNewVal: boolean): number;
  isGridFollow(): boolean;
  setGridFollow(bNewVal: boolean): number;
  gridMajor(): number;
  setGridMajor(arg0: number): number;
  setModelView(objId: OdDbXrefObjectId): number;
  getModelView(): OdDbXrefObjectId;
  removeModelView(): number;
  syncModelView(): OdResult;
  setSheetView(objId: OdDbObjectId): number;
  getSheetView(): OdDbObjectId;
  removeSheetView(): number;
  setLabelBlock(objId: OdDbObjectId): number;
  getLabelBlock(): OdDbObjectId;
  removeLabelBlock(): number;
  gsView(): OdGsView;
  setGsView(arg0: OdGsView): number;
  subSetDatabaseDefaults(pDb: OdDbDatabase, doSubents: boolean): number;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): number;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): number;
  dxfInFields_R12(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields_R12(pFiler: OdDbDxfFiler): number;
  subClose(): number;
  subErase(erasing: boolean): OdResult;
  zoomExtents(): number;
  subGetGeomExtents(extents: OdGeExtents3d): OdResult;
  subTransformBy(xfm: OdGeMatrix3d): OdResult;
  modified(pObj: OdDbObject): number;
  erased(pObj: OdDbObject, pErasing: boolean): number;
  subGetTransformedCopy(mat: OdGeMatrix3d, pCopy: OdDbEntityPtr): OdResult;
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
  static rxInit(): number;
  static rxUninit(): number;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  lowerLeftCorner(): OdGePoint2d;
  setLowerLeftCorner(point: OdGePoint2d): number;
  upperRightCorner(): OdGePoint2d;
  setUpperRightCorner(point: OdGePoint2d): number;
  ucsFollowMode(): boolean;
  setUcsFollowMode(ucsFollowMode: boolean): number;
  circleSides(): number;
  setCircleSides(circleSides: number): number;
  iconEnabled(): boolean;
  setIconEnabled(iconEnabled: boolean): number;
  iconAtOrigin(): boolean;
  setIconAtOrigin(atOrigin: boolean): number;
  gridEnabled(): boolean;
  setGridEnabled(gridEnabled: boolean): number;
  gridIncrements(): OdGePoint2d;
  setGridIncrements(gridIncrements: OdGePoint2d): number;
  snapEnabled(): boolean;
  setSnapEnabled(snapEnabled: boolean): number;
  isometricSnapEnabled(): boolean;
  setIsometricSnapEnabled(isometricSnapEnabled: boolean): number;
  snapPair(): number;
  setSnapPair(snapPair: number): number;
  snapAngle(): number;
  setSnapAngle(snapAngle: number): number;
  snapBase(): OdGePoint2d;
  setSnapBase(snapBase: OdGePoint2d): number;
  snapIncrements(): OdGePoint2d;
  setSnapIncrements(snapIncrements: OdGePoint2d): number;
  isUcsSavedWithViewport(): boolean;
  setUcsPerViewport(ucsPerViewport: boolean): number;
  fastZoomsEnabled(): boolean;
  setFastZoomsEnabled(fastZoomsEnabled: boolean): number;
  isGridBoundToLimits(): boolean;
  setGridBoundToLimits(enabled: boolean): number;
  isGridAdaptive(): boolean;
  setGridAdaptive(enabled: boolean): number;
  isGridSubdivisionRestricted(): boolean;
  setGridSubdivisionRestricted(enabled: boolean): number;
  isGridFollow(): boolean;
  setGridFollow(enabled: boolean): number;
  gridMajor(): number;
  setGridMajor(value: number): number;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): number;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): number;
  dxfInFields_R12(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields_R12(pFiler: OdDbDxfFiler): number;
  gsView(): OdGsView;
  setGsView(pGsView: OdGsView): number;
  drawable(): OdGiDrawable;
  copyFrom(pSource: OdRxObject): number;
  zoomExtents(): number;
  subClose(): number;
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbXrecordIterator.html} Additional documentation.
 */
class OdDbXrecordIterator extends OdRxObject {
  static cast(pObj: OdRxObject): OdDbXrecordIterator;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdDbXrecordIterator;
  static rxInit(): number;
  static rxUninit(): number;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  start(): number;
  done(): boolean;
  next(): boolean;
  curRestype(): number;
  getCurResbuf(pDb: OdDbDatabase): number;
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
  static rxInit(): number;
  static rxUninit(): number;
  static open(pObject: OdDbObject, key: OdString, creationFlag: number, mergeStyle: DuplicateRecordCloning): number;
  static open1(pObject: OdDbObject, keysArray: any, creationFlag: number, mergeStyle: DuplicateRecordCloning): number;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  newIterator(pDb: OdDbDatabase): number;
  begin(): any;
  end(): any;
  setFromRbChain(pRb: OdResBuf, pDb: OdDbDatabase): OdResult;
  appendRbChain(pRb: OdResBuf, pDb: OdDbDatabase): OdResult;
  isXlateReferences(): boolean;
  setXlateReferences(isXlateReferences: boolean): number;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): number;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): number;
  mergeStyle(): DuplicateRecordCloning;
  setMergeStyle(mergeStyle: DuplicateRecordCloning): number;
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/ExHostAppServices.html} Additional documentation.
 */
class ExHostAppServices extends OdDbHostAppServices2 {
  newProgressMeter(): OdDbHostAppProgressMeter;
  releaseProgressMeter(pProgressMeter: OdDbHostAppProgressMeter): number;
  start(displayString: OdString): number;
  stop(): number;
  meterProgress(): number;
  setLimit(max: number): number;
  disableOutput(disable: boolean): number;
  setPrefix(prefix: OdString): number;
  patternManager(): OdHatchPatternManager;
  readFile(filename: OdString, allowCPConversion: boolean, partialLoad: boolean, shareMode: FileShareMode, password: OdPassword): number;
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

enum ClipError {
  eOk = 0,
  eInvalidClipBoundary = 1,
  eNotInitialized = 2
};

enum OdGeIntersectError {
  kXXOk = 0,
  kXXIndexOutOfRange = 1,
  kXXWrongDimensionAtIndex = 2,
  kXXUnknown = 3
};

enum BooleanType {
  kUnion = 0,
  kSubtract = 1,
  kCommon = 2
};

enum PointContainment {
  kInside = 0,
  kOutside = 1,
  kOnBoundary = 2
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

enum ssiType {
  kSSITransverse = 0,
  kSSITangent = 1,
  kSSIAntiTangent = 2
};

enum ExternalEntityKind {
  kAcisEntity = 0,
  kGe3dCurveEntity = 1,
  kGeSurfaceEntity = 2,
  kExternalEntityUndefined = 3,
  kBimEntity = 4,
  kIfcEntity = 5
};

enum ssiConfig {
  kSSIUnknown = 0,
  kSSIOut = 1,
  kSSIIn = 2,
  kSSICoincident = 3
};

enum OdGeKnotParameterization {
  kChord = 0,
  kSqrtChord = 1,
  kUniform = 2,
  kCustomParameterization = 15,
  kNotDefinedKnotParam = 16
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
  getPoints(controlPoints: OdGePoint3dArray): number;
  getVector(vectorIndex: number): OdGeVector3d;
  setVector(vectorIndex: number, vect: OdGeVector3d): OdGeAugPolyline3d;
  getD1Vectors(tangents: OdGeVector3dArray): number;
  getD2Vector(vectorIndex: number): OdGeVector3d;
  setD2Vector(vectorIndex: number, vect: OdGeVector3d): OdGeAugPolyline3d;
  getD2Vectors(d2Vectors: OdGeVector3dArray): number;
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
  getMinMaxPoints(p1: OdGePoint2d, p2: OdGePoint2d): number;
  get(base: OdGePoint2d, side1: OdGeVector2d, side2: OdGeVector2d): number;
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
  getMinMaxPoints(p1: OdGePoint3d, p2: OdGePoint3d): number;
  get(base: OdGePoint3d, side1: OdGeVector3d, side2: OdGeVector3d, side3: OdGeVector3d): number;
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
  setToBoxOrtho(dir1: OdGeVector3d, dir2: OdGeVector3d, dir3: OdGeVector3d): number;
  setToBoxOrtho1(): number;
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
  tangent(point: OdGePoint2d, line: OdGeLine2d, tol: OdGeTol): boolean;
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
  set4(startPoint: OdGePoint2d, endPoint: OdGePoint2d, bulge: number, bulgeFlag: boolean): OdGeCircArc2d;
  getGeomExtents(extents: OdGeExtents2d): number;
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
  tangent(point: OdGePoint3d, line: OdGeLine3d, tol: OdGeTol): boolean;
  getPlane(plane: OdGePlane): number;
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
  getGeomExtents(extents: OdGeExtents3d): number;
  joinWith(curve: OdGeCircArc3d, iTolerance: OdGeTol): OdGeCircArc3d;
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
  getCurveList(curveList: OdGeCurve2dPtrArray): number;
  getCurveList1(): number;
  setCurveList(curveList: OdGeCurve2dPtrArray): OdGeCompositeCurve2d;
  localToGlobalParam(param: number, crvNum: number): number;
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
  getCurveList(curveList: OdGeCurve3dPtrArray): number;
  getCurveList1(): number;
  setCurveList(curveList: OdGeCurve3dPtrArray): OdGeCompositeCurve3d;
  localToGlobalParam(param: number, crvNum: number): number;
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
  halfAngle(): number;
  getHeight(height: OdGeInterval): number;
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
  getUParamScale(): number;
  setUParamScale(uScale: number): number;
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
};

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdGeCurve2d.html} Additional documentation.
 */
class OdGeCurve2d extends OdGeEntity2d {
  static restoreUvCurve(curve: OdGeCurve3d, surface: OdGeSurface, tol: OdGeTol): OdGeCurve2d;
  copy(): OdGeCurve2d;
  convertTo3d(): OdGeCurve3d;
  convertTo3d1(curve3d: OdGeCurve3d): number;
  getInterval(interval: OdGeInterval): number;
  getInterval1(interval: OdGeInterval, start: OdGePoint2d, end: OdGePoint2d): number;
  setInterval1(interval: OdGeInterval): boolean;
  distanceTo(point: OdGePoint2d, tol: OdGeTol): number;
  distanceTo1(otherCur: OdGeCurve2d, tol: OdGeTol): number;
  closestPointTo(point: OdGePoint2d, tol: OdGeTol): OdGePoint2d;
  closestPointTo2(curve2d: OdGeCurve2d, pntOnOtherCrv: OdGePoint2d, tol: OdGeTol): OdGePoint2d;
  getClosestPointTo(point: OdGePoint2d, pntOnCrv: OdGePointOnCurve2d, tol: OdGeTol): number;
  getClosestPointTo1(curve2d: OdGeCurve2d, pntOnThisCrv: OdGePointOnCurve2d, pntOnOtherCrv: OdGePointOnCurve2d, tol: OdGeTol): number;
  getNormalPoint(point: OdGePoint2d, pntOnCrv: OdGePointOnCurve2d, tol: OdGeTol): boolean;
  isOn1(param: number, tol: OdGeTol): boolean;
  paramOf(point: OdGePoint2d, tol: OdGeTol): number;
  paramOf1(point: OdGePoint2d, range: OdGeInterval, tol: OdGeTol): number;
  getTrimmedOffset(distance: number, offsetCurveList: OdGeCurve2dPtrArray, extensionType: OffsetCrvExtType, tol: OdGeTol): OdResult;
  isClosed(tol: OdGeTol): boolean;
  isLinear(line: OdGeLine2d, tol: OdGeTol): boolean;
  length(fromParam: number, toParam: number, tol: number): number;
  length1(tol: number): number;
  paramAtLength(datumParam: number, length: number, posParamDir: boolean, tol: number): number;
  explode(explodedCurves: OdGeCurve2dPtrArray, newExplodedCurve: OdGeIntArray, interval: OdGeInterval): boolean;
  getLocalClosestPoints(point: OdGePoint2d, approxPnt: OdGePointOnCurve2d, nbhd: OdGeInterval, tol: OdGeTol): number;
  getLocalClosestPoints1(otherCurve: OdGeCurve2d, approxPntOnThisCrv: OdGePointOnCurve2d, approxPntOnOtherCrv: OdGePointOnCurve2d, nbhd1: OdGeInterval, nbhd2: OdGeInterval, tol: OdGeTol): number;
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
  getSamplePoints(fromParam: number, toParam: number, approxEps: number, pointArray: OdGePoint2dArray, paramArray: OdGeDoubleArray): number;
  getSamplePoints1(numSample: number, pointArray: OdGePoint2dArray): number;
  getSamplePoints2(fromParam: number, toParam: number, approxEps: number, pointArray: OdGePoint2dArray, pParamArray: OdGeDoubleArray): number;
  appendSamplePoints(fromParam: number, toParam: number, approxEps: number, pointArray: OdGePoint2dArray, pParamArray: OdGeDoubleArray): number;
  appendSamplePoints1(numSample: number, pointArray: OdGePoint2dArray): number;
};

class OdGeCurve2dPtrArray extends OdArray<OdGeCurve2d> { };

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdGeCurve3d.html} Additional documentation.
 */
class OdGeCurve3d extends OdGeEntity3d {
  copy(): OdGeCurve3d;
  getInterval(interval: OdGeInterval): number;
  getInterval1(interval: OdGeInterval, start: OdGePoint3d, end: OdGePoint3d): number;
  setInterval1(interval: OdGeInterval): boolean;
  distanceTo(point: OdGePoint3d, tol: OdGeTol): number;
  distanceTo1(curve: OdGeCurve3d, tol: OdGeTol): number;
  closestPointTo(point: OdGePoint3d, tol: OdGeTol): OdGePoint3d;
  closestPointTo1(curve: OdGeCurve3d, pntOnOtherCrv: OdGePoint3d, tol: OdGeTol): OdGePoint3d;
  getClosestPointTo(point: OdGePoint3d, pntOnCrv: OdGePointOnCurve3d, tol: OdGeTol): number;
  getClosestPointTo1(curve: OdGeCurve3d, pntOnThisCrv: OdGePointOnCurve3d, pntOnOtherCrv: OdGePointOnCurve3d, tol: OdGeTol): number;
  projClosestPointTo(point: OdGePoint3d, projectDirection: OdGeVector3d, tol: OdGeTol): OdGePoint3d;
  projClosestPointTo1(curve: OdGeCurve3d, projectDirection: OdGeVector3d, pntOnOtherCrv: OdGePoint3d, tol: OdGeTol): OdGePoint3d;
  getProjClosestPointTo(point: OdGePoint3d, projectDirection: OdGeVector3d, pntOnCrv: OdGePointOnCurve3d, tol: OdGeTol): number;
  getProjClosestPointTo1(curve: OdGeCurve3d, projectDirection: OdGeVector3d, pntOnThisCrv: OdGePointOnCurve3d, pntOnOtherCrv: OdGePointOnCurve3d, tol: OdGeTol): number;
  getNormalPoint(point: OdGePoint3d, pntOnCrv: OdGePointOnCurve3d, tol: OdGeTol): boolean;
  boundBlock(): OdGeBoundBlock3d;
  boundBlock1(range: OdGeInterval): OdGeBoundBlock3d;
  orthoBoundBlock(): OdGeBoundBlock3d;
  orthoBoundBlock1(range: OdGeInterval): OdGeBoundBlock3d;
  getGeomExtents(range: OdGeInterval, coordSystem: OdGeMatrix3d): OdGeExtents3d;
  project(projectionPlane: OdGePlane, projectDirection: OdGeVector3d, tol: OdGeTol): OdGeEntity3d;
  orthoProject(projectionPlane: OdGePlane, tol: OdGeTol): OdGeEntity3d;
  isOn1(param: number, tol: OdGeTol): boolean;
  paramOf(point: OdGePoint3d, tol: OdGeTol): number;
  paramOf1(point: OdGePoint3d, range: OdGeInterval, tol: OdGeTol): number;
  getTrimmedOffset(distance: number, planeNormal: OdGeVector3d, offsetCurveList: OdGeCurve3dPtrArray, extensionType: OffsetCrvExtType, tol: OdGeTol): OdResult;
  isClosed(tol: OdGeTol): boolean;
  isPlanar(plane: OdGePlane, tol: OdGeTol): boolean;
  isLinear(line: OdGeLine3d, tol: OdGeTol): boolean;
  isCoplanarWith(curve: OdGeCurve3d, plane: OdGePlane, tol: OdGeTol): boolean;
  length(fromParam: number, toParam: number, tol: number): number;
  length1(tol: number): number;
  paramAtLength(datumParam: number, length: number, posParamDir: boolean, tol: number): number;
  explode(explodedCurves: OdGeCurve3dPtrArray, newExplodedCurves: OdGeIntArray, pInterval: OdGeInterval): boolean;
  getLocalClosestPoints(point: OdGePoint3d, approxPntOnThisCrv: OdGePointOnCurve3d, pInterval1: OdGeInterval, tol: OdGeTol): number;
  getLocalClosestPoints1(curve: OdGeCurve3d, approxPntOnThisCrv: OdGePointOnCurve3d, approxPntOnOtherCrv: OdGePointOnCurve3d, pInterval1: OdGeInterval, pInterval2: OdGeInterval, tol: OdGeTol): number;
  hasStartPoint(startPoint: OdGePoint3d): boolean;
  hasEndPoint(endPoint: OdGePoint3d): boolean;
  hasMidPoint(point: OdGePoint3d, coef: number): boolean;
  midPoint(coef: number): OdGePoint3d;
  evalPoint(param: number): OdGePoint3d;
  evalPoint1(param: number, numDeriv: number, derivatives: OdGeVector3dArray): OdGePoint3d;
  getSamplePoints(fromParam: number, toParam: number, approxEps: number, pointArray: OdGePoint3dArray, paramArray: OdGeDoubleArray, forceResampling: boolean): number;
  getSamplePoints1(numSample: number, pointArray: OdGePoint3dArray): number;
  getSamplePoints2(numSample: number, pointArray: OdGePoint3dArray, paramArray: OdGeDoubleArray): number;
  getSamplePoints3(fromParam: number, toParam: number, approxEps: number, pointArray: OdGePoint3dArray, paramArray: OdGeDoubleArray): number;
  getSamplePoints4(paramInterval: OdGeInterval, approxEps: number, pointArray: OdGePoint3dArray, pParamArray: OdGeDoubleArray): number;
  appendSamplePoints(fromParam: number, toParam: number, approxEps: number, pointArray: OdGePoint3dArray, pParamArray: OdGeDoubleArray): number;
  appendSamplePoints1(numSample: number, pointArray: OdGePoint3dArray, pParamArray: OdGeDoubleArray): number;
  appendSamplePoints2(paramInterval: OdGeInterval, approxEps: number, pointArray: OdGePoint3dArray, pParamArray: OdGeDoubleArray): number;
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
  getIntRanges(range1: OdGeInterval, range2: OdGeInterval): number;
  tolerance(): OdGeTol;
  numIntPoints(): number;
  intPoint(intNum: number): OdGePoint2d;
  getPointOnCurve1(intNum: number, intPnt: OdGePointOnCurve2d): number;
  getPointOnCurve2(intNum: number, intPnt: OdGePointOnCurve2d): number;
  isTangential(intNum: number): boolean;
  isTransversal(intNum: number): boolean;
  intPointTol(intNum: number): number;
  overlapCount(): number;
  overlapDirection(overlapNum: number): boolean;
  getOverlapRanges(overlapNum: number, range1: OdGeInterval, range2: OdGeInterval): number;
  changeCurveOrder(): number;
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
  getIntRanges(range1: OdGeInterval, range2: OdGeInterval): number;
  planeNormal(): OdGeVector3d;
  tolerance(): OdGeTol;
  numIntPoints(): number;
  intPoint(intNum: number): OdGePoint3d;
  getPointOnCurve1(intNum: number, intPnt: OdGePointOnCurve3d): number;
  getPointOnCurve2(intNum: number, intPnt: OdGePointOnCurve3d): number;
  isTangential(intNum: number): boolean;
  isTransversal(intNum: number): boolean;
  intPointTol(intNum: number): number;
  overlapCount(): number;
  overlapDirection(overlapNum: number): boolean;
  getOverlapRanges(overlapNum: number, range1: OdGeInterval, range2: OdGeInterval): number;
  changeCurveOrder(): number;
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
  getHeight(height: OdGeInterval): number;
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
  setIsOuterNormal(isOuterNormal: boolean): number;
  getUParamScale(): number;
  setUParamScale(uScale: number): number;
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
  getGeomExtents(extents: OdGeExtents2d): number;
  inverseTangent(tan: OdGeVector2d, params: OdGeDoubleArray): number;
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
  getPlane(plane: OdGePlane): number;
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
  orthogonalizeAxes1(tol: OdGeTol): number;
  tangentAt(param: number): OdGeVector3d;
  getGeomExtents(extents: OdGeExtents3d): number;
  inverseTangent(tan: OdGeVector3d, params: OdGeDoubleArray): OdResult;
  inverseTangentPlane(refPlane: OdGePlane, params: OdGeDoubleArray): OdResult;
  joinWith(curve: OdGeEllipArc3d, iTolerance: OdGeTol): OdGeEllipArc3d;
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
  halfAngle(): number;
  getHeight(height: OdGeInterval): number;
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
  set(cosineAngle: number, sineAngle: number, center: OdGePoint3d, minorRadius: number, majorRadius: number, axisOfSymmetry: OdGeVector3d): OdGeEllipCone;
  set1(cosineAngle: number, sineAngle: number, center: OdGePoint3d, minorRadius: number, majorRadius: number, axisOfSymmetry: OdGeVector3d, majorAxis: OdGeVector3d, height: OdGeInterval, startAng: number, endAng: number): OdGeEllipCone;
  getUParamScale(): number;
  setUParamScale(uScale: number): number;
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
  getHeight(height: OdGeInterval): number;
  heightAt(u: number): number;
  axisOfSymmetry(): OdGeVector3d;
  majorAxis(): OdGeVector3d;
  minorAxis(): OdGeVector3d;
  isOuterNormal(): boolean;
  isClosed(tol: OdGeTol): boolean;
  setIsOuterNormal(isOuterNormal: boolean): number;
  setMinorRadius(minorRadius: number): OdGeEllipCylinder;
  setMajorRadius(majorRadius: number): OdGeEllipCylinder;
  setAngles(startAng: number, endAng: number): OdGeEllipCylinder;
  setHeight(height: OdGeInterval): OdGeEllipCylinder;
  set(minorRadius: number, majorRadius: number, origin: OdGePoint3d, axisOfSymmetry: OdGeVector3d): OdGeEllipCylinder;
  set1(minorRadius: number, majorRadius: number, origin: OdGePoint3d, axisOfSymmetry: OdGeVector3d, majorAxis: OdGeVector3d, height: OdGeInterval, startAng: number, endAng: number): OdGeEllipCylinder;
  getUParamScale(): number;
  setUParamScale(uScale: number): number;
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
  set(min: OdGePoint2d, max: OdGePoint2d): number;
  comparingSet(pt1: OdGePoint2d, pt2: OdGePoint2d): number;
  addPoint(point: OdGePoint2d): OdGeExtents2d;
  addPoints(points: OdGePoint2dArray): OdGeExtents2d;
  addExt(extents: OdGeExtents2d): OdGeExtents2d;
  isValidExtents(): boolean;
  expandBy(vect: OdGeVector2d): number;
  transformBy(xfm: OdGeMatrix2d): number;
  translate(iShift: OdGeVector2d): number;
  contains(point: OdGePoint2d, tol: OdGeTol): boolean;
  contains1(extents: OdGeExtents2d, tol: OdGeTol): boolean;
  isDisjoint(extents: OdGeExtents2d, tol: OdGeTol): boolean;
  intersectWith(extents: OdGeExtents2d, pResult: OdGeExtents2d): IntersectionStatus;
  center(): OdGePoint2d;
  isEqualTo(extents: OdGeExtents2d, tol: OdGeTol): boolean;
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
  set(min: OdGePoint3d, max: OdGePoint3d): number;
  comparingSet(pt1: OdGePoint3d, pt2: OdGePoint3d): number;
  addPoint(point: OdGePoint3d): OdGeExtents3d;
  addPoints(points: OdGePoint3dArray): OdGeExtents3d;
  addExt(extents: OdGeExtents3d): OdGeExtents3d;
  isValidExtents(): boolean;
  expandBy(vect: OdGeVector3d): number;
  transformBy(xfm: OdGeMatrix3d): number;
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
  convert2d(extents: OdGeExtents2d, plane: Convert2dPlane): number;
  setFrom2d(extents: OdGeExtents2d, plane: Convert2dPlane): number;
  isEqualTo(extents: OdGeExtents3d, tol: OdGeTol): boolean;
};

enum Convert2dPlane {
  kConvert2dPlaneXY = 4,
  kConvert2dPlaneXZ = 8,
  kConvert2dPlaneYX = 1,
  kConvert2dPlaneYZ = 9,
  kConvert2dPlaneZX = 2,
  kConvert2dPlaneZY = 6
};

enum IntersectionStatus {
  kIntersectUnknown = 0,
  kIntersectNot = 1,
  kIntersectOpIn = 2,
  kIntersectOpOut = 3,
  kIntersectOk = 4
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
  getBaseSurface1(unboundedSurfaceDef: OdGeExternalSurface): number;
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
};

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdGeLoopCtx.html} Additional documentation.
 */
class OdGeLoopCtx {
  constructor(arg0: OdGeLoopCtx);
  getLoopType(dTol: number): LoopType;
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
  getMerge(otherInterval: OdGeInterval, result: OdGeInterval): number;
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
  getDistinctKnots(knots: OdGeDoubleArray, multiplicity: OdGeIntArray): number;
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
  multiplicityAt1(param: number): number;
  getArray(): number;
  getArray1(): number;
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
  getBisector(line: OdGeLine2d): number;
  baryComb(blendCoeff: number): OdGePoint2d;
  startPoint(): OdGePoint2d;
  endPoint(): OdGePoint2d;
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
  getBisector(plane: OdGePlane): number;
  baryComb(blendCoeff: number): OdGePoint3d;
  startPoint(): OdGePoint3d;
  endPoint(): OdGePoint3d;
  set(point: OdGePoint3d, vect: OdGeVector3d): OdGeLineSeg3d;
  set1(point1: OdGePoint3d, point2: OdGePoint3d): OdGeLineSeg3d;
  getDistanceToVector(point: OdGePoint3d, tol: OdGeTol): number;
  joinWith(curve: OdGeLineSeg3d, iTolerance: OdGeTol): OdGeLineSeg3d;
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
  getPerpLine(point: OdGePoint2d, perpLine: OdGeLine2d): number;
  pointOnLine(): OdGePoint2d;
  direction(): OdGeVector2d;
  getLine(line: OdGeLine2d): number;
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
  getPerpPlane(point: OdGePoint3d, plane: OdGePlane): number;
  pointOnLine(): OdGePoint3d;
  direction(): OdGeVector3d;
  getLine(line: OdGeLine3d): number;
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
  setCoordSystem(origin: OdGePoint2d, xAxis: OdGeVector2d, yAxis: OdGeVector2d): OdGeMatrix2d;
  getCoordSystem(origin: OdGePoint2d, xAxis: OdGeVector2d, yAxis: OdGeVector2d): number;
  setToTranslation(vect: OdGeVector2d): OdGeMatrix2d;
  setToRotation(angle: number, center: OdGePoint2d): OdGeMatrix2d;
  setToScaling(scale: number, center: OdGePoint2d): OdGeMatrix2d;
  setToMirroring(mirrorPoint: OdGePoint2d): OdGeMatrix2d;
  setToMirroring1(mirrorLine: OdGeLine2d): OdGeMatrix2d;
  setToAlignCoordSys(fromOrigin: OdGePoint2d, fromXAxis: OdGeVector2d, fromYAxis: OdGeVector2d, toOrigin: OdGePoint2d, toXAxis: OdGeVector2d, toYAxis: OdGeVector2d): OdGeMatrix2d;
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
  validateZero(tol: OdGeTol): number;
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
  getCoordSystem(origin: OdGePoint3d, xAxis: OdGeVector3d, yAxis: OdGeVector3d, zAxis: OdGeVector3d): number;
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
  getFitPointAt(fitPointIndex: number, point: OdGePoint2d): boolean;
  getFitTolerance(fitTolerance: OdGeTol): boolean;
  getFitTangents(startTangent: OdGeVector2d, endTangent: OdGeVector2d): boolean;
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
};

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdGeNurbCurve3d.html} Additional documentation.
 */
class OdGeNurbCurve3d extends OdGeSplineEnt3d {
  constructor();
  constructor(source: OdGeNurbCurve3d);
  constructor(degree: number, knots: OdGeKnotVector, controlPoints: OdGePoint3dArray, isPeriodic: boolean);
  constructor(degree: number, knots: OdGeKnotVector, controlPoints: OdGePoint3dArray, weights: OdGeDoubleArray, isPeriodic: boolean);
  constructor(degree: number, fitPolyline: OdGePolyline3d, isPeriodic: boolean);
  constructor(fitPoints: OdGePoint3dArray, startTangent: OdGeVector3d, endTangent: OdGeVector3d, startTangentDefined: boolean, endTangentDefined: boolean, fitTol: OdGeTol);
  constructor(fitPoints: OdGePoint3dArray, fitTolerance: OdGeTol);
  constructor(fitPoints: OdGePoint3dArray, startTangent: OdGeVector3d, endTangent: OdGeVector3d, startTangentDefined: boolean, endTangentDefined: boolean, knotParam: OdGeKnotParameterization, fitTolerance: OdGeTol);
  static convertFrom(source: OdGeCurve3d, domain: OdGeInterval, tol: OdGeTol, sameParametrization: boolean): OdGeNurbCurve3d;
  static convertFrom1(source: OdGeCurve3d, tol: OdGeTol, sameParametrization: boolean): OdGeNurbCurve3d;
  copy(): OdGeNurbCurve3d;
  transformBy(xfm: OdGeMatrix3d): OdGeNurbCurve3d;
  translateBy(translateVec: OdGeVector3d): OdGeNurbCurve3d;
  rotateBy(angle: number, vect: OdGeVector3d, basePoint: OdGePoint3d): OdGeNurbCurve3d;
  mirror(plane: OdGePlane): OdGeNurbCurve3d;
  scaleBy(scaleFactor: number, basePoint: OdGePoint3d): OdGeNurbCurve3d;
  numFitPoints(): number;
  getFitPointAt(fitPointIndex: number, point: OdGePoint3d): boolean;
  getFitTolerance(fitTolerance: OdGeTol): boolean;
  getFitTangents(startTangent: OdGeVector3d, endTangent: OdGeVector3d): boolean;
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
  set(degree: number, knots: OdGeKnotVector, controlPoints: OdGePoint3dArray, weights: OdGeDoubleArray, isPeriodic: boolean): OdGeNurbCurve3d;
  buildFitData(knotParam: OdGeKnotParameterization): boolean;
};

class VectorDerivArray extends OdArray<any> { };

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
  isRationalInV(): boolean;
  singularityInU(): number;
  singularityInV(): number;
  degreeInU(): number;
  numControlPointsInU(): number;
  degreeInV(): number;
  numControlPointsInV(): number;
  getControlPoints(controlPoints: OdGePoint3dArray): number;
  getWeights(weights: OdGeDoubleArray): boolean;
  numKnotsInU(): number;
  getUKnots(uKnots: OdGeKnotVector): number;
  numKnotsInV(): number;
  getVKnots(vKnots: OdGeKnotVector): number;
  set(degreeInU: number, degreeInV: number, propsInU: number, propsInV: number, numControlPointsInU: number, numControlPointsInV: number, controlPoints: OdGePoint3dArray, weights: OdGeDoubleArray, uKnots: OdGeKnotVector, vKnots: OdGeKnotVector, tol: OdGeTol): OdGeNurbSurface;
  setFitData(fitPoints: OdGePoint3dArray, arrTangentsInU: OdGeVector3dArray, arrTangentsInV: OdGeVector3dArray, arrMixedDerivs: OdGeVector3dArray, uKnots: OdGeKnotVector, vKnots: OdGeKnotVector, tol: OdGeTol): OdGeNurbSurface;
  computeVIsoLine(V: number, isoline: OdGeNurbCurve3d): number;
  computeUIsoLine(U: number, isoline: OdGeNurbCurve3d): number;
  paramOfPrec(point: OdGePoint3d, tol: OdGeTol): OdGePoint2d;
  getDerivativesAt(param: OdGePoint2d, numDeriv: number, derivatives: any): boolean;
  loc(i: number, j: number): number;
  joinWith(surface: OdGeNurbSurface, thisConnectionSide: ConnectionSide, surfaceConnectionSide: ConnectionSide, tol: OdGeTol): OdGeNurbSurface;
  elevateDegree(iByU: boolean, iPlusDegree: number): OdGeNurbSurface;
  insertKnot(iByU: boolean, iNewKnot: number, iTimes: number): OdGeNurbSurface;
  knotAt(iByU: boolean, iKnotIndex: number): number;
  controlPointAt(iIdxU: number, iIdxV: number): OdGePoint3d;
  setControlPointAt(iIdxU: number, iIdxV: number, iPoint: OdGePoint3d): OdGeNurbSurface;
};

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
  get(origin: OdGePoint3d, uAxis: OdGeVector3d, vAxis: OdGeVector3d): number;
  get1(uPnt: OdGePoint3d, origin: OdGePoint3d, vPnt: OdGePoint3d): number;
  pointOnPlane(): OdGePoint3d;
  normal(): OdGeVector3d;
  getCoordSystem(origin: OdGePoint3d, axis1: OdGeVector3d, axis2: OdGeVector3d): number;
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
  setCurve(curve3d: OdGeCurve3d): OdGePointOnCurve3d;
  setParameter(param: number): OdGePointOnCurve3d;
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
  setAngles(startAngle: number, endAngle: number): OdGeRevolvedSurface;
  setRef(pRef: OdGeVector3d): OdGeRevolvedSurface;
  set(pProfile: OdGeCurve3d, pBase: OdGePoint3d, pAxis: OdGeVector3d, pRef: OdGeVector3d): number;
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
  set(pProfileCurve1: OdGeCurve3d, pProfileCurve2: OdGeCurve3d): number;
  set1(pProfileCurve1: OdGeCurve3d, pPoint2: OdGePoint3d): number;
  set2(pPoint1: OdGePoint3d, pProfileCurve2: OdGeCurve3d): number;
  getPoint(iIndex: number, point: OdGePoint3d): OdResult;
  setEnvelope(intrvlU: OdGeInterval, intrvlV: OdGeInterval): boolean;
  getEnvelope(intrvlU: OdGeInterval, intrvlV: OdGeInterval): number;
  hasFirstProfilePoint(): boolean;
  hasSecondProfilePoint(): boolean;
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
  getMatrix(xfm: OdGeMatrix3d): number;
  extractScale(xfm: OdGeMatrix3d): OdGeScale3d;
  removeScale(xfm: OdGeMatrix3d, negateX: boolean): OdGeScale3d;
  isValid(): boolean;
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
  vertices(): number;
  getVertices(): number;
  hasBulges(): boolean;
  appendSamplePointsOptimal(numSampleForEachArc: number, pointArray: OdGePoint2dArray): number;
};

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdGeShell.html} Additional documentation.
 */
class OdGeShell {
  constructor();
  constructor(arg0: OdGeShell);
  addVertex(vertex: OdGePoint3d): number;
  endFace(): number;
  startFace(bHole: boolean): number;
  addFaceVertex(nVertexIndex: number): number;
  draw(geometry: OdGiGeometry): number;
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
  isReverseV(): boolean;
  setReverseV(isReverseV: boolean): number;
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
  set(pProfile: OdGeCurve3d, pBase: OdGePoint3d, pAxis: OdGeVector3d): number;
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
  getClosestPointTo(point: OdGePoint3d, pntOnSurface: OdGePointOnSurface, tol: OdGeTol): number;
  distanceTo(point: OdGePoint3d, tol: OdGeTol): number;
  isNormalReversed(): boolean;
  isLeftHanded(): boolean;
  getEnvelope(intrvlU: OdGeInterval, intrvlV: OdGeInterval): number;
  getEnvelope1(uvbox: OdGeUvBox): number;
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
  getGeomExtents(extents: OdGeExtents3d): number;
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
  setEqualPoint(val: number): number;
  setEqualVector(val: number): number;
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
  isLemon(): boolean;
  isApple(): boolean;
  isVortex(): boolean;
  isDoughnut(): boolean;
  isDegenerate(): boolean;
  isHollow(): boolean;
  isReverseV(): boolean;
  setReverseV(isReverseV: boolean): number;
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
  normalizeGetLength(tol: number): number;
  length(): number;
  lengthSqrd(): number;
  isUnitLength(tol: OdGeTol): boolean;
  isZeroLength(tol: OdGeTol): boolean;
  isParallelTo(vect: OdGeVector2d, tol: OdGeTol): boolean;
  isCodirectionalTo(vect: OdGeVector2d, tol: OdGeTol): boolean;
  isPerpendicularTo(vect: OdGeVector2d, tol: OdGeTol): boolean;
  dotProduct(vect: OdGeVector2d): number;
  crossProduct(vect: OdGeVector2d): number;
  isEqualTo(vect: OdGeVector2d, tol: OdGeTol): boolean;
  largestElement(): number;
  set(xx: number, yy: number): OdGeVector2d;
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
  normalizeGetLength(tol: number): number;
  length(): number;
  setLength(length: number): number;
  lengthSqrd(): number;
  isUnitLength(tol: OdGeTol): boolean;
  isZeroLength(tol: OdGeTol): boolean;
  isParallelTo(vect: OdGeVector3d, tol: OdGeTol): boolean;
  isCodirectionalTo(vect: OdGeVector3d, tol: OdGeTol): boolean;
  isPerpendicularTo(vect: OdGeVector3d, tol: OdGeTol): boolean;
  dotProduct(vect: OdGeVector3d): number;
  crossProduct(vect: OdGeVector3d): OdGeVector3d;
  project(planeNormal: OdGeVector3d, projectDirection: OdGeVector3d): OdGeVector3d;
  orthoProject(planeNormal: OdGeVector3d): OdGeVector3d;
  isEqualTo(vect: OdGeVector3d, tol: OdGeTol): boolean;
  largestElement(): number;
  set(xx: number, yy: number, zz: number): OdGeVector3d;
  set1(plane: OdGePlanarEnt, vect: OdGeVector2d): OdGeVector3d;
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
  static rxInit(): number;
  static rxUninit(): number;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  setAttributes(pSubject: OdGiDrawable, traits: OdGiDrawableTraits): number;
  worldDraw(pSubject: OdGiDrawable, wd: OdGiWorldDraw): boolean;
  viewportDraw(pSubject: OdGiDrawable, vd: OdGiViewportDraw): number;
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
  static rxInit(): number;
  static rxUninit(): number;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  drawableType(): DrawableType;
  setAttributes(pTraits: OdGiDrawableTraits): number;
  worldDraw(pWd: OdGiWorldDraw): boolean;
  viewportDraw(pVd: OdGiViewportDraw): number;
  isPersistent(): boolean;
  id(): OdDbStub;
  setGsNode(pGsNode: OdGsCache): number;
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

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdGsModule.html} Additional documentation.
 */
class OdGsModule extends OdRxModule {
  static cast(pObj: OdRxObject): OdGsModule;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdGsModule;
  static rxInit(): number;
  static rxUninit(): number;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  createDevice(): number;
  createBitmapDevice(): number;
  addReactor(pReactor: OdGsReactor): number;
  removeReactor(pReactor: OdGsReactor): number;
};

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdGsView.html} Additional documentation.
 */
class OdGsView extends OdRxObject {
  static cast(pObj: OdRxObject): OdGsView;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdGsView;
  static rxInit(): number;
  static rxUninit(): number;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  device(): OdGsDevice;
  userGiContext(): OdGiContext;
  setUserGiContext(pUserGiContext: OdGiContext): number;
  lineweightToDcScale(): number;
  setLineweightToDcScale(scale: number): number;
  setViewport(lowerLeft: OdGePoint2d, upperRight: OdGePoint2d): number;
  setViewport1(screenRect: OdGsDCRect): number;
  setViewport2(screenRect: OdGsDCRectDouble): number;
  getViewport(lowerLeft: OdGePoint2d, upperRight: OdGePoint2d): number;
  getViewport1(screenRect: OdGsDCRect): number;
  getViewport2(screenRect: OdGsDCRectDouble): number;
  viewportClipRegion(counts: OdIntArray, vertices: OdGsDCPointArray): number;
  viewportClipRegion1(counts: OdIntArray, vertices: OdGePoint2dArray): number;
  removeViewportClipRegion(): number;
  setViewport3dClipping(pBoundary: OdGiClipBoundary, pClipInfo: OdGiAbstractClipBoundary): number;
  removeViewport3dClipping(): number;
  setViewportBorderProperties(color: number, width: number): number;
  setViewportBorderVisibility(visible: boolean): number;
  isViewportBorderVisible(): boolean;
  setView(position: OdGePoint3d, target: OdGePoint3d, upVector: OdGeVector3d, fieldWidth: number, fieldHeight: number, projectionType: Projection): number;
  position(): OdGePoint3d;
  target(): OdGePoint3d;
  upVector(): OdGeVector3d;
  lensLength(): number;
  setLensLength(lensLength: number): number;
  isPerspective(): boolean;
  fieldWidth(): number;
  fieldHeight(): number;
  setEnableFrontClip(enable: boolean): number;
  isFrontClipped(): boolean;
  setFrontClip(frontClip: number): number;
  frontClip(): number;
  setEnableBackClip(enable: boolean): number;
  isBackClipped(): boolean;
  setBackClip(backClip: number): number;
  backClip(): number;
  viewingMatrix(): OdGeMatrix3d;
  projectionMatrix(): OdGeMatrix3d;
  screenMatrix(): OdGeMatrix3d;
  worldToDeviceMatrix(): OdGeMatrix3d;
  objectToDeviceMatrix(): OdGeMatrix3d;
  setMode(mode: RenderMode): number;
  mode(): RenderMode;
  add(pSceneGraph: OdGiDrawable, pModel: OdGsModel): boolean;
  numRootDrawables(): number;
  rootDrawableIdAt(i: number, pModelReturn: OdGsModelPtr): OdDbStub;
  rootDrawableAt(i: number, pModelReturn: OdGsModelPtr): number;
  erase(sceneGraph: OdGiDrawable): boolean;
  eraseAll(): number;
  getModel(pDrawable: OdGiDrawable): OdGsModel;
  getModelList(): number;
  invalidate(): number;
  invalidate1(screenRect: OdGsDCRect): number;
  isValid(): boolean;
  update(): number;
  beginInteractivity(frameRateInHz: number): number;
  isInInteractivity(): boolean;
  interactivityFrameRate(): number;
  endInteractivity(): number;
  flush(): number;
  hide(): number;
  show(): number;
  isVisible(): boolean;
  freezeLayer(layerID: OdDbStub): number;
  thawLayer(layerID: OdDbStub): number;
  clearFrozenLayers(): number;
  invalidateCachedViewportGeometry(): number;
  select(pts: OdGsDCPoint, nPoints: number, pReactor: OdGsSelectionReactor, mode: SelectionMode): number;
  dolly(dollyVector: OdGeVector3d): number;
  dolly1(xDolly: number, yDolly: number, zDolly: number): number;
  roll(rollAngle: number): number;
  orbit(xOrbit: number, yOrbit: number): number;
  zoom(zoomFactor: number): number;
  pan(xPan: number, yPan: number): number;
  zoomExtents(minPt: OdGePoint3d, maxPt: OdGePoint3d): number;
  zoomWindow(lowerLeft: OdGePoint2d, upperRight: OdGePoint2d): number;
  pointInView(pt: OdGePoint3d): boolean;
  extentsInView(minPt: OdGePoint3d, maxPt: OdGePoint3d): boolean;
  cloneView(cloneViewParameters: boolean, cloneGeometry: boolean): number;
  viewParameters(pView: OdGsView): number;
  exceededBounds(): boolean;
  enableStereo(enabled: boolean): number;
  isStereoEnabled(): boolean;
  setStereoParameters(magnitude: number, parallax: number): number;
  initLights(pLightsIterator: OdRxIterator): number;
  setLinetypeScaleMultiplier(linetypeScaleMultiplier: number): number;
  linetypeScaleMultiplier(): number;
  setAlternateLinetypeScaleMultiplier(linetypeAlternateScaleMultiplier: number): number;
  linetypeAlternateScaleMultiplier(): number;
  clientViewInfo(clientViewInfo: OdGsClientViewInfo): number;
  setClearColor(color: ClearColor): number;
  pointInViewport(screenPoint: OdGePoint2d): boolean;
  getNumPixelsInUnitSquare(point: OdGePoint3d, pixelDensity: OdGePoint2d, bUsePerspective: boolean): number;
  setBackground(backgroundId: OdDbStub): number;
  background(): OdDbStub;
  setVisualStyle(visualStyleId: OdDbStub): number;
  visualStyle(): OdDbStub;
  setVisualStyle1(visualStyle: OdGiVisualStyle): number;
  visualStyle1(visualStyle: OdGiVisualStyle): boolean;
  enableDefaultLighting(bEnable: boolean, lightType: DefaultLightingType): number;
  getSnapShot(pImage: OdGiRasterImagePtr, region: OdGsDCRect): number;
  enableAntiAliasing(nMode: number): number;
  antiAliasingMode(): number;
  enableSSAO(bEnable: boolean): number;
  ssaoMode(): boolean;
};

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdGsReactor.html} Additional documentation.
 */
class OdGsReactor extends OdRxObject {
  viewWasCreated(pView: OdGsView): number;
  viewToBeDestroyed(pView: OdGsView): number;
  viewToBeUpdated(pView: OdGsView, flags: number): number;
  viewWasUpdated(pView: OdGsView, flags: number): number;
  gsToBeUnloaded(pModule: OdGsModule): number;
};

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdGsDevice.html} Additional documentation.
 */
class OdGsDevice extends OdRxObject {
  static cast(pObj: OdRxObject): OdGsDevice;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdGsDevice;
  static rxInit(): number;
  static rxUninit(): number;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  properties(): number;
  userGiContext(): OdGiContext;
  setUserGiContext(pUserGiContext: OdGiContext): number;
  invalidate(): number;
  invalidate1(screenRect: OdGsDCRect): number;
  isValid(): boolean;
  update(pUpdatedRect: OdGsDCRect): number;
  onSize(outputRect: OdGsDCRect): number;
  onSize1(outputRect: OdGsDCRectDouble): number;
  getSize(outputRect: OdGsDCRect): number;
  getSize1(outputRect: OdGsDCRectDouble): number;
  onRealizeForegroundPalette(): number;
  onRealizeBackgroundPalette(): number;
  onDisplayChange(bitsPerPixel: number, xPixels: number, yPixels: number): number;
  createView(pViewInfo: OdGsClientViewInfo, enableLayerVisibilityPerView: boolean): number;
  addView(pView: OdGsView): number;
  createModel(): number;
  isModelCompatible(pModel: OdGsModel): boolean;
  saveDeviceState(pFiler: OdGsFiler): boolean;
  loadDeviceState(pFiler: OdGsFiler): boolean;
  insertView(viewIndex: number, pView: OdGsView): number;
  eraseView(pView: OdGsView): boolean;
  eraseView1(viewIndex: number): boolean;
  eraseAllViews(): number;
  numViews(): number;
  viewAt(viewIndex: number): OdGsView;
  setBackgroundColor(backgroundColor: number): boolean;
  getBackgroundColor(): number;
  getSnapShot(pImage: OdGiRasterImagePtr, region: OdGsDCRect): number;
  getUpdateManager(createIfNotExist: boolean): number;
  setUpdateManager(pManager: OdGsUpdateManagerPtr): number;
};

class OdGsModelArray extends OdArray<OdGsModel> { };

enum ViewportFlags {
  kDependentViewport = 1,
  kDependentGeometry = 2,
  kHelperView = 4,
  kSetViewportId = 8
};

enum Projection {
  kParallel = 0,
  kPerspective = 1
};

enum DefaultLightingType {
  kOneLight = 0,
  kTwoLights = 1,
  kBackLight = 2
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

enum ViewUpdateFlags {
  kCameraChanged = 1
};

enum ClearColor {
  kTransparent = 0,
  kDeviceBackground = 1,
  kPaletteBackground = 2
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

class OdDbObjectIdArray extends OdArray<OdDbObjectId> { };

class OdTypedIdsArray extends OdArray<OdDbTypedId> { };

class OdSoftPtrIdArray extends OdArray<OdDbSoftPointerId> { };

class OdHardPtrIdArray extends OdArray<OdDbHardPointerId> { };

class OdHardOwnIdArray extends OdArray<OdDbHardOwnershipId> { };

class OdSoftOwnIdArray extends OdArray<OdDbSoftOwnershipId> { };

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

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdStreamBuf.html} Additional documentation.
 */
class OdStreamBuf extends OdRxObject {
  static cast(pObj: OdRxObject): OdStreamBuf;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdStreamBuf;
  static rxInit(): number;
  static rxUninit(): number;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  fileName(): number;
  isEof(): boolean;
  tell(): number;
  length(): number;
  truncate(): number;
  rewind(): number;
  seek(offset: number, seekType: FilerSeekType): number;
  getByte(): number;
  putByte(value: number): number;
  copyDataTo(pDestination: OdStreamBuf, sourceStart: number, sourceEnd: number): number;
  getShareMode(): number;
  getShareMode1(): FileShareMode;
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

enum PlotStyleNameType {
  kPlotStyleNameByLayer = 0,
  kPlotStyleNameByBlock = 1,
  kPlotStyleNameIsDictDefault = 2,
  kPlotStyleNameById = 3
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

enum Intersect {
  kOnBothOperands = 0,
  kExtendThis = 1,
  kExtendArg = 2,
  kExtendBoth = 3
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

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/RText.html} Additional documentation.
 */
class RText extends OdDbEntity {
  constructor(arg0: RText);
  static cast(pObj: OdRxObject): RText;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): RText;
  static rxInit(): number;
  static rxUninit(): number;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  normal(): OdGeVector3d;
  setNormal(normal: OdGeVector3d): number;
  getPoint(): OdGePoint3d;
  setPoint(point: OdGePoint3d): number;
  getRotAngle(): number;
  setRotAngle(rotAngle: number): number;
  getHeight(): number;
  setHeight(height: number): number;
  isStringExpression(): boolean;
  setToExpression(isExpression: boolean): number;
  enabledMTextSequences(): boolean;
  enableMTextSequences(enable: boolean): number;
  getStringContents(): number;
  setStringContents(stringContents: OdString): number;
  textStyleId(): OdDbObjectId;
  textStyleName(): number;
  setTextStyle(textStyleId: OdDbObjectId): number;
  setTextStyle1(name: OdString): number;
  dwgInFields(pFiler: OdDbDwgFiler): OdResult;
  dwgOutFields(pFiler: OdDbDwgFiler): number;
  dxfInFields(pFiler: OdDbDxfFiler): OdResult;
  dxfOutFields(pFiler: OdDbDxfFiler): number;
  subWorldDraw(pWd: OdGiWorldDraw): boolean;
  subTransformBy(xfm: OdGeMatrix3d): OdResult;
  subGetTransformedCopy(mat: OdGeMatrix3d, pCopy: OdDbEntityPtr): OdResult;
  subClose(): number;
  subExplode(entitySet: OdRxObjectPtrArray): OdResult;
  explodeGeometry(entitySet: OdRxObjectPtrArray): OdResult;
};

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdRxModule.html} Additional documentation.
 */
class OdRxModule extends OdRxObject {
  static cast(pObj: OdRxObject): OdRxModule;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdRxModule;
  static rxInit(): number;
  static rxUninit(): number;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  deleteModule(): number;
  initApp(): number;
  uninitApp(): number;
  moduleName(): number;
};

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdRxObjectPtr.html} Additional documentation.
 */
class OdRxObjectPtr extends OdBaseObjectPtr {
  constructor();
  constructor(pSource: OdRxObject, arg1: OdRxObjMod);
  constructor(pSource: OdRxObject);
  attach(pObject: OdRxObject): number;
  release(): number;
  detach(): OdRxObject;
  get(): OdRxObject;
  get1(): OdRxObject;
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

enum OdRxObjMod {
  kOdRxObjAttach = 0
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
  static rxInit(): number;
  static rxUninit(): number;
  queryX(pClass: OdRxClass): OdRxObject;
  x(pClass: OdRxClass): OdRxObject;
  isA(): OdRxClass;
  addRef(): number;
  release(): number;
  numRefs(): number;
  isKindOf(pClass: OdRxClass): boolean;
  clone(): OdRxObjectPtr;
  copyFrom(pSource: OdRxObject): number;
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
  static rxInit(): number;
  static rxUninit(): number;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  addX(pProtocolClass: OdRxClass, pProtocolObject: OdRxObject): OdRxObjectPtr;
  getX(pProtocolClass: OdRxClass): OdRxObjectPtr;
  delX(pProtocolClass: OdRxClass): OdRxObjectPtr;
  create(): OdRxObjectPtr;
  appName(): number;
  dxfName(): number;
  name(): number;
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

enum Mode {
  kPoint = 0,
  kBox = 1,
  kWindow = 2,
  kCrossing = 3,
  kFence = 4,
  kWPoly = 5,
  kCPoly = 6
};

enum SubentSelectionMode {
  kDisableSubents = 0,
  kEnableSubents = 1,
  kIncludeViewport = 2,
  kNestedEntities = 4
};

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdDbSelectionMethod.html} Additional documentation.
 */
class OdDbSelectionMethod extends OdRxObject {
  static cast(pObj: OdRxObject): OdDbSelectionMethod;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdDbSelectionMethod;
  static rxInit(): number;
  static rxUninit(): number;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
};

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdSelectionSetIterator.html} Additional documentation.
 */
class OdSelectionSetIterator extends OdRxObject {
  static cast(pObj: OdRxObject): OdSelectionSetIterator;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdSelectionSetIterator;
  static rxInit(): number;
  static rxUninit(): number;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  method(): number;
  done(): boolean;
  next(): boolean;
  subentCount(): number;
  getSubentity(i: number, path: OdDbBaseFullSubentPath): boolean;
  id(): OdDbStub;
};

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdDbVisualSelection.html} Additional documentation.
 */
class OdDbVisualSelection extends OdDbSelectionMethod {
  static cast(pObj: OdRxObject): OdDbVisualSelection;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdDbVisualSelection;
  static rxInit(): number;
  static rxUninit(): number;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  viewport(): OdDbStub;
  points(): number;
  mode(): Mode;
};

/**
 * @see {@link https://docs.opendesign.com/tkernel_api_cpp//OdSelectionSet.html} Additional documentation.
 */
class OdSelectionSet extends OdRxObject {
  static cast(pObj: OdRxObject): OdSelectionSet;
  static desc(): OdRxClass;
  static pseudoConstructor(): OdRxObjectPtr;
  static createObject(): OdSelectionSet;
  static rxInit(): number;
  static rxUninit(): number;
  isA(): OdRxClass;
  queryX(protocolClass: OdRxClass): OdRxObject;
  baseDatabase(): OdRxObject;
  newIterator(): number;
  numEntities(): number;
  subentCount(arg0: OdDbStub): number;
  append(entityId: OdDbStub, pMethod: OdDbSelectionMethod): number;
  append1(subent: OdDbBaseFullSubentPath, pMethod: OdDbSelectionMethod): number;
  append2(pSSet: OdSelectionSet): number;
  remove(entityId: OdDbStub): number;
  remove1(subent: OdDbBaseFullSubentPath): number;
  remove2(pSSet: OdSelectionSet): number;
  isMember(entityId: OdDbStub): boolean;
  isMember1(subent: OdDbBaseFullSubentPath): boolean;
  method(entityId: OdDbStub): number;
  clear(): number;
};

enum LineSpacingStyle {
  kAtLeast = 1,
  kExactly = 2
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
  static unload(pBTR: OdDbBlockTableRecord): number;
  static unload1(xrefBTRids: OdDbObjectIdArray): number;
  static unloadAll(pHostDb: OdDbDatabase): number;
  static bind(pBTR: OdDbBlockTableRecord, insertBind: boolean): OdResult;
  static detach(pBTR: OdDbBlockTableRecord): OdResult;
  static setOverlaid(pBTR: OdDbBlockTableRecord, overlaid: boolean): number;
};

/**
 * @see {@link https://docs.opendesign.com/td_api_cpp/OdDbXRefManExt.html} Additional documentation.
 */
class OdDbXRefManExt {
  constructor();
  constructor(arg0: OdDbXRefManExt);
  static addNewXRefDefBlock(pDb: OdDbDatabase, pathName: OdString, blockName: OdString, overlaid: boolean, password: OdPassword, handle: OdDbHandle): number;
  static addNewXRefDependentLayer(pXRefBlock: OdDbBlockTableRecord, layerName: OdString): number;
  static addNewXRefDependentLayer1(xRefBlockId: OdDbObjectId, layerName: OdString): number;
  static addNewXRefDependentLinetype(pXRefBlock: OdDbBlockTableRecord, linetypeName: OdString): number;
  static addNewXRefDependentLinetype1(xRefBlockId: OdDbObjectId, linetypeName: OdString): number;
  static addNewXRefDependentTextStyle(pXRefBlock: OdDbBlockTableRecord, textStyleName: OdString): number;
  static addNewXRefDependentTextStyle1(xRefBlockId: OdDbObjectId, textStyleName: OdString): number;
  static addNestedXRefId(pXRefBlock: OdDbBlockTableRecord, nestedBlockId: OdDbObjectId): number;
  static getNestedXRefIds(pXRefBlock: OdDbBlockTableRecord, ids: OdDbObjectIdArray): number;
  static getSymbolTableRecordXrefBlockId(pRec: OdDbSymbolTableRecord): OdDbObjectId;
  static bindRecords(ids: OdDbObjectIdArray, pHostDatabase: OdDbDatabase): OdResult;
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
