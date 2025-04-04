var Color = {
  kRed: 0,
  kGreen: 1,
  kBlue: 2
}
var ColorMethod = {
  kByLayer: 192,
  kByBlock: 193,
  kByColor: 194,
  kByACI: 195,
  kByPen: 196,
  kForeground: 197,
  kByDgnIndex: 199,
  kNone: 200
}
var ACIcolorMethod = {
  kACIbyBlock: 0,
  kACIforeground: 7,
  kACIbyLayer: 256,
  kACIclear: 0,
  kACIRed: 1,
  kACIYellow: 2,
  kACIGreen: 3,
  kACICyan: 4,
  kACIBlue: 5,
  kACIMagenta: 6,
  kACIWhite: 7,
  kACIstandard: 7,
  kACImaximum: 255,
  kACInone: 257,
  kACIminimum: -255
}
var transparencyMethod = {
  kByLayer: 0,
  kByBlock: 1,
  kByAlpha: 2,
  kErrorValue: 3
}
var Poly2dType = {
  k2dSimplePoly: 0,
  k2dFitCurvePoly: 1,
  k2dQuadSplinePoly: 2,
  k2dCubicSplinePoly: 3
}
var Vertex2dType = {
  k2dVertex: 0,
  k2dSplineCtlVertex: 1,
  k2dSplineFitVertex: 2,
  k2dCurveFitVertex: 3
}
var Poly3dType = {
  k3dSimplePoly: 0,
  k3dQuadSplinePoly: 1,
  k3dCubicSplinePoly: 2
}
var GeomType = {
  eUndefinedType: 0,
  eSphere: 1,
  eTorus: 2,
  eCylinder: 3,
  eCone: 4,
  eBox: 5,
  eWedge: 6,
  ePyramid: 7,
  eExtrusion: 8,
  eSweep: 9,
  eLoft: 10,
  eRevolve: 11
}
var ProdIdCode = {
  kProd_ACAD: 1,
  kProd_LT: 2,
  kProd_OEM: 3,
  kProd_OdDb: 4
}
var FindFileHint = {
  kDefault: 0,
  kFontFile: 1,
  kCompiledShapeFile: 2,
  kTrueTypeFontFile: 3,
  kEmbeddedImageFile: 4,
  kXRefDrawing: 5,
  kPatternFile: 6,
  kTXApplication: 7,
  kFontMapFile: 8,
  kUnderlayFile: 9,
  kTextureMapFile: 10,
  kPhotometricWebFile: 11,
  kAssetLibXMLFile: 12,
  kTemplateFile: 13,
  kSchemaFile: 14
}
var OdSDIValues = {
  kMDIEnabled: 0,
  kSDIUserEnforced: 1,
  kSDIAppEnforced: 2,
  kSDIUserAndAppEnforced: 3
}
var GsBitmapDeviceFlags = {
  kUseSoftwareHLR: 1,
  kFor2dExportRender: 2,
  kFor2dExportRenderHLR: 4,
  kForThumbnail: 8
}
var RemapFileContext = {
  kDrawingOpen: 0,
  kXrefResolution: 1,
  kRasterResolution: 2
}
var BlockScaling = {
  kAny: 0,
  kUniform: 1
}
var JoinStyle = {
  kJnStylNone: 0,
  kJnStylRound: 1,
  kJnStylAngle: 2,
  kJnStylFlat: 3
}
var EndCaps = {
  kEndCapNone: 0,
  kEndCapRound: 1,
  kEndCapAngle: 2,
  kEndCapSquare: 3
}
var TimeZone = {
  kInternationalDateLine: -12000,
  kMidwayIsland: -11000,
  kHawaii: -10000,
  kAlaska: -9000,
  kPacific: -8000,
  kMountain: -7000,
  kArizona: -7001,
  kMazatlan: -7002,
  kCentral: -6000,
  kCentralAmerica: -6001,
  kMexicoCity: -6002,
  kSaskatchewan: -6003,
  kEastern: -5000,
  kIndiana: -5001,
  kBogota: -5002,
  kAtlanticCanada: -4000,
  kCaracas: -4001,
  kSantiago: -4002,
  kNewfoundland: -3300,
  kBrasilia: -3000,
  kBuenosAires: -3001,
  kGreenland: -3002,
  kMidAtlantic: -2000,
  kAzores: -1000,
  kCapeVerde: -1001,
  kUTC: 0,
  kGMT: 1,
  kMonrovia: 2,
  kBerlin: 1000,
  kParis: 1001,
  kPrague: 1002,
  kSarajevo: 1003,
  kWestCentralAfrica: 1004,
  kAthens: 2000,
  kEasternEurope: 2001,
  kCairo: 2002,
  kHarare: 2003,
  kHelsinki: 2004,
  kJerusalem: 2005,
  kMoscow: 3000,
  kRiyadh: 3001,
  kBaghdad: 3002,
  kEastAfrica: 3003,
  kTehran: 3300,
  kAbuDhabi: 4000,
  kCaucasus: 4001,
  kKabul: 4300,
  kEkaterinburg: 5000,
  kIslamabad: 5001,
  kKolkata: 5300,
  kKathmandu: 5450,
  kAlmaty: 6000,
  kDhaka: 6001,
  kSriLanka: 6002,
  kRangoon: 6300,
  kBangkok: 7000,
  kKrasnoyarsk: 7001,
  kBeijing: 8000,
  kSingapore: 8001,
  kTaipei: 8002,
  kIrkutsk: 8003,
  kPerth: 8004,
  kTokyo: 9000,
  kSeoul: 9001,
  kYakutsk: 9002,
  kAdelaide: 9300,
  kDarwin: 9301,
  kSydney: 10000,
  kGuam: 10001,
  kBrisbane: 10002,
  kHobart: 10003,
  kVladivostock: 10004,
  kMagadan: 11000,
  kWellington: 12000,
  kFiji: 12001,
  kTonga: 13000
}
var LoftParamType = {
  kLoftNoParam: 0,
  kLoftNoTwist: 1,
  kLoftAlignDirection: 2,
  kLoftSimplify: 4,
  kLoftClose: 8,
  kLoftPeriodic: 16,
  kLoftDefault: 7
}
var DuplicateLinetypeLoading = {
  kDltNotApplicable: 0,
  kDltIgnore: 1,
  kDltReplace: 2
}
var ProxyImage = {
  kProxyNotShow: 0,
  kProxyShow: 1,
  kProxyBoundingBox: 2
}
var LayerAdskType = {
  kLayerSystemLights: 0,
  kLayerConstraints: 1
}
var LoftNormalsType = {
  kLoftRuled: 0,
  kLoftSmooth: 1,
  kLoftFirstNormal: 2,
  kLoftLastNormal: 3,
  kLoftEndsNormal: 4,
  kLoftAllNormal: 5,
  kLoftUseDraftAngles: 6
}
var VerticalApplicationType = {
  kArchitecture: 1,
  kCivil: 2,
  kMechanical: 4
}
var IndexingModeFlags = {
  kNoIndexing: 0,
  kUpdateBlockIndexOnSave: 1,
  kUseBlockChangeIterator: 2,
  kUseAll: 3
}
var VerticalApplicationMode = {
  kEnabler: 0,
  kEditor: 1
}
var FilletTrimMode = {
  kTrimNone: 0,
  kTrimFirst: 1,
  kTrimSecond: 2,
  kTrimBoth: 3
}
var TextFileEncoding = {
  kTextFileEncodingDefault: 0,
  kTextFileEncodingANSI: 1,
  kTextFileEncodingUTF8: 11,
  kTextFileEncodingUTF16: 21,
  kTextFileEncodingUTF16LE: 22,
  kTextFileEncodingUTF16BE: 23,
  kTextFileEncodingUTF32: 31,
  kTextFileEncodingUTF32LE: 32,
  kTextFileEncodingUTF32BE: 33
}
var CollisionType = {
  kCollisionTypeNone: 0,
  kCollisionTypeSolid: 1
}
var PointType = {
  kXline1Point: 0,
  kXline2Point: 1,
  kOriginPoint: 0,
  kDefiningPoint: 1,
  kXline1Start: 0,
  kXline1End: 1,
  kXline2Start: 2,
  kXline2End: 3,
  kVertexPoint: 2,
  kChordPoint: 0,
  kCenterPoint: 1,
  kFarChordPoint: 1,
  kOverrideCenterPoint: 2,
  kAngLineStart: 2,
  kJogPoint: 3,
  kAngLineEnd: 3,
  kLeaderPoint: 0
}
var AssocFlags = {
  kFirstPointRef: 1,
  kSecondPointRef: 2,
  kThirdPointRef: 4,
  kFourthPointRef: 8
}
var RotatedDimType = {
  kUnknown: 0,
  kParallel: 1,
  kPerpendicular: 2
}
var DimInspect = {
  kShapeRemove: 0,
  kShapeRound: 1,
  kShapeAngular: 2,
  kShapeNone: 4,
  kShapeLabel: 16,
  kShapeRate: 32
}
var Planarity = {
  kNonPlanar: 0,
  kPlanar: 1,
  kLinear: 2
}
var VisualStyleType = {
  kFullVisualStyle: 0,
  kFaceVisualStyle: 1,
  kEdgeVisualStyle: 2
}
var EntSaveAsType = {
  kNoSave: 0,
  kSaveAsR12: 1,
  kSaveAsR13: 2,
  kSaveAsR14: 3
}
var DrawType = {
  kWarmGrip: 0,
  kHoverGrip: 1,
  kHotGrip: 2,
  kDragImageGrip: 3
}
var DragStat = {
  kDragStart: 0,
  kDragEnd: 1,
  kDragAbort: 2
}
var GripFlags = {
  kSkipWhenShared: 1,
  kDisableRubberBandLine: 2,
  kDisableModeKeywords: 4,
  kDrawAtDragImageGripPoint: 8,
  kTriggerGrip: 16,
  kTurnOnForcedPick: 32,
  kMapGripHotToRtClk: 64,
  kGizmosEnabled: 128,
  kGripIsPerViewport: 256
}
var GripStat = {
  kGripsDone: 0,
  kGripsToBeDeleted: 1,
  kDimDataToBeDeleted: 2
}
var MoveGripPointsFlags = {
  kOsnapped: 1,
  kPolar: 2,
  kOtrack: 4,
  kZdir: 8,
  kKeyboard: 16
}
var GetGripPointsFlags = {
  kGripPointsOnly: 1,
  kCyclableGripsOnly: 2,
  kDynamicDimMode: 4
}
var OsnapMask = {
  kOsMaskEnd: 1,
  kOsMaskMid: 2,
  kOsMaskCen: 4,
  kOsMaskNode: 8,
  kOsMaskQuad: 16,
  kOsMaskInt: 32,
  kOsMaskIns: 64,
  kOsMaskPerp: 128,
  kOsMaskTan: 256,
  kOsMaskNear: 512,
  kOsMaskQuick: 1024,
  kOsMaskApint: 2048,
  kOsMaskImmediate: 65536,
  kOsMaskAllowTan: 131072,
  kOsMaskDisablePerp: 262144,
  kOsMaskRelCartesian: 524288,
  kOsMaskRelPolar: 1048576,
  kOsMaskNoneOverride: 2097152
}
var GripContextFlags = {
  kSharedGrip: 1,
  kMultiHotGrip: 2
}
var GripStatus = {
  kGripStart: 0,
  kGripEnd: 1,
  kGripAbort: 2,
  kStretch: 3,
  kMove: 4,
  kRotate: 5,
  kScale: 6,
  kMirror: 7,
  kDimFocusChanged: 8,
  kPopUpMenu: 9
}
var HatchObjectType = {
  kHatchObject: 0,
  kGradientObject: 1
}
var HatchLoopType = {
  kDefault: 0,
  kExternal: 1,
  kPolyline: 2,
  kDerived: 4,
  kTextbox: 8,
  kOutermost: 16,
  kNotClosed: 32,
  kSelfIntersecting: 64,
  kTextIsland: 128,
  kDuplicate: 256,
  kIsAnnotative: 512,
  kDoesNotSupportScale: 1024,
  kForceAnnoAllVisible: 2048,
  kOrientToPaper: 4096,
  kIsAnnotativeBlock: 8192
}
var HatchEdgeType = {
  kNone: 0,
  kLine: 1,
  kCirArc: 2,
  kEllArc: 3,
  kSpline: 4
}
var GradientPatternType = {
  kPreDefinedGradient: 0,
  kUserDefinedGradient: 1
}
var HatchStyle = {
  kNormal: 0,
  kOuter: 1,
  kIgnore: 2
}
var HatchPatternType = {
  kUserDefined: 0,
  kPreDefined: 1,
  kCustomDefined: 2
}
var DeepCloneType = {
  kDcCopy: 0,
  kDcExplode: 1,
  kDcBlock: 2,
  kDcXrefBind: 3,
  kDcSymTableMerge: 4,
  kDcInsert: 6,
  kDcWblock: 7,
  kDcObjects: 8,
  kDcXrefInsert: 9,
  kDcInsertCopy: 10,
  kDcWblkObjects: 11
}
var AnnoType = {
  kMText: 0,
  kFcf: 1,
  kBlockRef: 2,
  kNoAnno: 3
}
var gsMarkType = {
  kArrowMark: 3,
  kLeaderLineMark: 4
}
var MoveType = {
  kMoveAllPoints: 0,
  kMoveAllExceptArrowHeaderPoints: 1,
  kMoveContentAndDoglegPoints: 2
}
var gsMarkType = {
  kNone: 0,
  kArrowMark: 1,
  kLeaderLineMark: 5001,
  kDoglegMark: 10001,
  kMTextMark: 15001,
  kMTextUnderLineMark: 15002,
  kToleranceMark: 15003,
  kBlockMark: 15004,
  kBlockAttribute: 15005
}
var LeaderLineOverrideType = {
  kOverrideLeaderType: 0,
  kOverrideLineColor: 1,
  kOverrideLineTypeId: 2,
  kOverrideLineWeight: 3,
  kOverrideArrowSize: 4,
  kOverrideArrowSymbolId: 5
}
var PropertyOverrideType = {
  kLeaderLineType: 0,
  kLeaderLineColor: 1,
  kLeaderLineTypeId: 2,
  kLeaderLineWeight: 3,
  kEnableLanding: 4,
  kLandingGap: 5,
  kEnableDogleg: 6,
  kDoglegLength: 7,
  kArrowSymbolId: 8,
  kArrowSize: 9,
  kContentType: 10,
  kTextStyleId: 11,
  kTextLeftAttachmentType: 12,
  kTextAngleType: 13,
  kTextAlignmentType: 14,
  kTextColor: 15,
  kTextHeight: 16,
  kEnableFrameText: 17,
  kDefaultMText: 18,
  kBlockId: 19,
  kBlockColor: 20,
  kBlockScale: 21,
  kBlockRotation: 22,
  kBlockConnectionType: 23,
  kScale: 24,
  kTextRightAttachmentType: 25,
  kTextSwitchAlignmentType: 26,
  kTextAttachmentDirection: 27,
  kTextTopAttachmentType: 28,
  kTextBottomAttachmentType: 29,
  kExtendLeaderToText: 30,
  kSize: 31
}
var SegmentAngleType = {
  kAny: 0,
  k15: 1,
  k30: 2,
  k45: 3,
  k60: 4,
  k90: 6,
  kHorz: 12
}
var LeaderType = {
  kInVisibleLeader: 0,
  kStraightLeader: 1,
  kSplineLeader: 2
}
var ContentType = {
  kNoneContent: 0,
  kBlockContent: 1,
  kMTextContent: 2,
  kToleranceContent: 3
}
var TextAlignmentType = {
  kLeftAlignment: 0,
  kCenterAlignment: 1,
  kRightAlignment: 2
}
var LeaderDirectionType = {
  kUnknownLeader: 0,
  kLeftLeader: 1,
  kRightLeader: 2,
  kTopLeader: 3,
  kBottomLeader: 4
}
var BlockConnectionType = {
  kConnectExtents: 0,
  kConnectBase: 1
}
var DrawMLeaderOrderType = {
  kDrawContentFirst: 0,
  kDrawLeaderFirst: 1
}
var DrawLeaderOrderType = {
  kDrawLeaderHeadFirst: 0,
  kDrawLeaderTailFirst: 1
}
var TextAttachmentDirection = {
  kAttachmentHorizontal: 0,
  kAttachmentVertical: 1
}
var TextAttachmentType = {
  kAttachmentTopOfTop: 0,
  kAttachmentMiddleOfTop: 1,
  kAttachmentMiddle: 2,
  kAttachmentMiddleOfBottom: 3,
  kAttachmentBottomOfBottom: 4,
  kAttachmentBottomLine: 5,
  kAttachmentBottomOfTopLine: 6,
  kAttachmentBottomOfTop: 7,
  kAttachmentAllLine: 8,
  kAttachmentCenter: 9,
  kAttachmentLinedCenter: 10
}
var TextAngleType = {
  kInsertAngle: 0,
  kHorizontalAngle: 1,
  kAlwaysRightReadingAngle: 2
}
var AttachmentPoint = {
  kTopLeft: 1,
  kTopCenter: 2,
  kTopRight: 3,
  kMiddleLeft: 4,
  kMiddleCenter: 5,
  kMiddleRight: 6,
  kBottomLeft: 7,
  kBottomCenter: 8,
  kBottomRight: 9,
  kBaseLeft: 10,
  kBaseCenter: 11,
  kBaseRight: 12,
  kBaseAlign: 13,
  kBottomAlign: 14,
  kMiddleAlign: 15,
  kTopAlign: 16,
  kBaseFit: 17,
  kBottomFit: 18,
  kMiddleFit: 19,
  kTopFit: 20,
  kBaseMid: 21,
  kBottomMid: 22,
  kMiddleMid: 23,
  kTopMid: 24
}
var FlowDirection = {
  kLtoR: 1,
  kRtoL: 2,
  kTtoB: 3,
  kBtoT: 4,
  kByStyle: 5
}
var ColumnType = {
  kNoColumns: 0,
  kStaticColumns: 1,
  kDynamicColumns: 2
}
var Visibility = {
  kInvisible: 1,
  kVisible: 0
}
var DuplicateRecordCloning = {
  kDrcNotApplicable: 0,
  kDrcIgnore: 1,
  kDrcReplace: 2,
  kDrcXrefMangleName: 3,
  kDrcMangleName: 4,
  kDrcUnmangleName: 5,
  kDrcMax: 5
}
var SaveType = {
  kDwg: 0,
  kDxf: 1,
  kDxb: 2,
  kUnknown: -1
}
var OpenMode = {
  kNotOpen: -1,
  kForRead: 0,
  kForWrite: 1,
  kForNotify: 2
}
var PlotRotation = {
  k0degrees: 0,
  k90degrees: 1,
  k180degrees: 2,
  k270degrees: 3
}
var PlotType = {
  kDisplay: 0,
  kExtents: 1,
  kLimits: 2,
  kView: 3,
  kWindow: 4,
  kLayout: 5
}
var PlotPaperUnits = {
  kInches: 0,
  kMillimeters: 1,
  kPixels: 2
}
var StdScaleType = {
  kScaleToFit: 0,
  k1_128in_1ft: 1,
  k1_64in_1ft: 2,
  k1_32in_1ft: 3,
  k1_16in_1ft: 4,
  k3_32in_1ft: 5,
  k1_8in_1ft: 6,
  k3_16in_1ft: 7,
  k1_4in_1ft: 8,
  k3_8in_1ft: 9,
  k1_2in_1ft: 10,
  k3_4in_1ft: 11,
  k1in_1ft: 12,
  k3in_1ft: 13,
  k6in_1ft: 14,
  k1ft_1ft: 15,
  k1_1: 16,
  k1_2: 17,
  k1_4: 18,
  k1_5: 19,
  k1_8: 20,
  k1_10: 21,
  k1_16: 22,
  k1_20: 23,
  k1_30: 24,
  k1_40: 25,
  k1_50: 26,
  k1_100: 27,
  k2_1: 28,
  k4_1: 29,
  k8_1: 30,
  k10_1: 31,
  k100_1: 32,
  k1000_1: 33,
  k1and1_2in_1ft: 34
}
var ShadePlotResLevel = {
  kDraft: 0,
  kPreview: 1,
  kNormal: 2,
  kPresentation: 3,
  kMaximum: 4,
  kCustom: 5
}
var ShadePlotType = {
  kAsDisplayed: 0,
  kWireframe: 1,
  kHidden: 2,
  kRendered: 3,
  kVisualStyle: 4,
  kRenderPreset: 5
}
var PolyMeshType = {
  kSimpleMesh: 0,
  kQuadSurfaceMesh: 5,
  kCubicSurfaceMesh: 6,
  kBezierSurfaceMesh: 8
}
var SegType = {
  kLine: 0,
  kArc: 1,
  kCoincident: 2,
  kPoint: 3,
  kEmpty: 4
}
var SplineType = {
  kFitPoints: 0,
  kControlPoints: 1
}
var EdgeExtensionType = {
  kExtendEdge: 0,
  kStretchEdge: 1
}
var TableBreakOption = {
  kTableBreakNone: 0,
  kTableBreakEnableBreaking: 1,
  kTableBreakRepeatTopLabels: 2,
  kTableBreakRepeatBottomLabels: 4,
  kTableBreakAllowManualPositions: 8,
  kTableBreakAllowManualHeights: 16
}
var TableHitItem = {
  kTableHitNone: 0,
  kTableHitCell: 1,
  kTableHitRowIndicator: 2,
  kTableHitColumnIndicator: 4,
  kTableHitGridLine: 8
}
var TableBreakFlowDirection = {
  kTableBreakFlowRight: 1,
  kTableBreakFlowDownOrUp: 2,
  kTableBreakFlowLeft: 4
}
var TableStyleOverrides = {
  kTitleSuppressed: 1,
  kHeaderSuppressed: 2,
  kFlowDirection: 3,
  kHorzCellMargin: 4,
  kVertCellMargin: 5,
  kTitleRowColor: 6,
  kHeaderRowColor: 7,
  kDataRowColor: 8,
  kTitleRowFillNone: 9,
  kHeaderRowFillNone: 10,
  kDataRowFillNone: 11,
  kTitleRowFillColor: 12,
  kHeaderRowFillColor: 13,
  kDataRowFillColor: 14,
  kTitleRowAlignment: 15,
  kHeaderRowAlignment: 16,
  kDataRowAlignment: 17,
  kTitleRowTextStyle: 18,
  kHeaderRowTextStyle: 19,
  kDataRowTextStyle: 20,
  kTitleRowTextHeight: 21,
  kHeaderRowTextHeight: 22,
  kDataRowTextHeight: 23,
  kTitleRowDataType: 24,
  kHeaderRowDataType: 25,
  kDataRowDataType: 26,
  kTitleHorzTopColor: 40,
  kTitleHorzInsideColor: 41,
  kTitleHorzBottomColor: 42,
  kTitleVertLeftColor: 43,
  kTitleVertInsideColor: 44,
  kTitleVertRightColor: 45,
  kHeaderHorzTopColor: 46,
  kHeaderHorzInsideColor: 47,
  kHeaderHorzBottomColor: 48,
  kHeaderVertLeftColor: 49,
  kHeaderVertInsideColor: 50,
  kHeaderVertRightColor: 51,
  kDataHorzTopColor: 52,
  kDataHorzInsideColor: 53,
  kDataHorzBottomColor: 54,
  kDataVertLeftColor: 55,
  kDataVertInsideColor: 56,
  kDataVertRightColor: 57,
  kTitleHorzTopLineWeight: 70,
  kTitleHorzInsideLineWeight: 71,
  kTitleHorzBottomLineWeight: 72,
  kTitleVertLeftLineWeight: 73,
  kTitleVertInsideLineWeight: 74,
  kTitleVertRightLineWeight: 75,
  kHeaderHorzTopLineWeight: 76,
  kHeaderHorzInsideLineWeight: 77,
  kHeaderHorzBottomLineWeight: 78,
  kHeaderVertLeftLineWeight: 79,
  kHeaderVertInsideLineWeight: 80,
  kHeaderVertRightLineWeight: 81,
  kDataHorzTopLineWeight: 82,
  kDataHorzInsideLineWeight: 83,
  kDataHorzBottomLineWeight: 84,
  kDataVertLeftLineWeight: 85,
  kDataVertInsideLineWeight: 86,
  kDataVertRightLineWeight: 87,
  kTitleHorzTopVisibility: 100,
  kTitleHorzInsideVisibility: 101,
  kTitleHorzBottomVisibility: 102,
  kTitleVertLeftVisibility: 103,
  kTitleVertInsideVisibility: 104,
  kTitleVertRightVisibility: 105,
  kHeaderHorzTopVisibility: 106,
  kHeaderHorzInsideVisibility: 107,
  kHeaderHorzBottomVisibility: 108,
  kHeaderVertLeftVisibility: 109,
  kHeaderVertInsideVisibility: 110,
  kHeaderVertRightVisibility: 111,
  kDataHorzTopVisibility: 112,
  kDataHorzInsideVisibility: 113,
  kDataHorzBottomVisibility: 114,
  kDataVertLeftVisibility: 115,
  kDataVertInsideVisibility: 116,
  kDataVertRightVisibility: 117,
  kCellAlignment: 130,
  kCellBackgroundFillNone: 131,
  kCellBackgroundColor: 132,
  kCellContentColor: 133,
  kCellTextStyle: 134,
  kCellTextHeight: 135,
  kCellTopGridColor: 136,
  kCellRightGridColor: 137,
  kCellBottomGridColor: 138,
  kCellLeftGridColor: 139,
  kCellTopGridLineWeight: 140,
  kCellRightGridLineWeight: 141,
  kCellBottomGridLineWeight: 142,
  kCellLeftGridLineWeight: 143,
  kCellTopVisibility: 144,
  kCellRightVisibility: 145,
  kCellBottomVisibility: 146,
  kCellLeftVisibility: 147,
  kCellDataType: 148
}
var Vertex3dType = {
  k3dSimpleVertex: 0,
  k3dControlVertex: 1,
  k3dFitVertex: 2
}
var StandardScaleType = {
  kScaleToFit: 0,
  kCustomScale: 1,
  k1_1: 2,
  k1_2: 3,
  k1_4: 4,
  k1_5: 5,
  k1_8: 6,
  k1_10: 7,
  k1_16: 8,
  k1_20: 9,
  k1_30: 10,
  k1_40: 11,
  k1_50: 12,
  k1_100: 13,
  k2_1: 14,
  k4_1: 15,
  k8_1: 16,
  k10_1: 17,
  k100_1: 18,
  k1_128in_1ft: 19,
  k1_64in_1ft: 20,
  k1_32in_1ft: 21,
  k1_16in_1ft: 22,
  k3_32in_1ft: 23,
  k1_8in_1ft: 24,
  k3_16in_1ft: 25,
  k1_4in_1ft: 26,
  k3_8in_1ft: 27,
  k1_2in_1ft: 28,
  k3_4in_1ft: 29,
  k1in_1ft: 30,
  k1and1_2in_1ft: 31,
  k3in_1ft: 32,
  k6in_1ft: 33,
  k1ft_1ft: 34
}
var ShadePlotType = {
  kAsDisplayed: 0,
  kWireframe: 1,
  kHidden: 2,
  kRendered: 3,
  kVisualStyle: 4,
  kRenderPreset: 5
}
var NurbSurfaceProperties = {
  kUninit: 0,
  kOpen: 1,
  kClosed: 2,
  kPeriodic: 4,
  kRational: 8,
  kNoPoles: 16,
  kPoleAtMin: 32,
  kPoleAtMax: 64,
  kPoleAtBoth: 128
}
var OffsetCrvExtType = {
  kFillet: 0,
  kChamfer: 1,
  kExtend: 2
}
var ClipCondition = {
  kInvalid: 0,
  kAllSegmentsInside: 1,
  kSegmentsIntersect: 2,
  kAllSegmentsOutsideZeroWinds: 3,
  kAllSegmentsOutsideOddWinds: 4,
  kAllSegmentsOutsideEvenWinds: 5
}
var OdGeXConfig = {
  kNotDefined: 1,
  kUnknown: 2,
  kLeftRight: 4,
  kRightLeft: 8,
  kLeftLeft: 16,
  kRightRight: 32,
  kPointLeft: 64,
  kPointRight: 128,
  kLeftOverlap: 256,
  kOverlapLeft: 512,
  kRightOverlap: 1024,
  kOverlapRight: 2048,
  kOverlapStart: 4096,
  kOverlapEnd: 8192,
  kOverlapOverlap: 16384
}
var ClipError = {
  eOk: 0,
  eInvalidClipBoundary: 1,
  eNotInitialized: 2
}
var OdGeIntersectError = {
  kXXOk: 0,
  kXXIndexOutOfRange: 1,
  kXXWrongDimensionAtIndex: 2,
  kXXUnknown: 3
}
var BooleanType = {
  kUnion: 0,
  kSubtract: 1,
  kCommon: 2
}
var PointContainment = {
  kInside: 0,
  kOutside: 1,
  kOnBoundary: 2
}
var csiConfig = {
  kXUnknown: 0,
  kXOut: 1,
  kXIn: 2,
  kXTanOut: 3,
  kXTanIn: 4,
  kXCoincident: 5,
  kXCoincidentUnbounded: 6
}
var ssiType = {
  kSSITransverse: 0,
  kSSITangent: 1,
  kSSIAntiTangent: 2
}
var ExternalEntityKind = {
  kAcisEntity: 0,
  kGe3dCurveEntity: 1,
  kGeSurfaceEntity: 2,
  kExternalEntityUndefined: 3,
  kBimEntity: 4,
  kIfcEntity: 5
}
var ssiConfig = {
  kSSIUnknown: 0,
  kSSIOut: 1,
  kSSIIn: 2,
  kSSICoincident: 3
}
var OdGeKnotParameterization = {
  kChord: 0,
  kSqrtChord: 1,
  kUniform: 2,
  kCustomParameterization: 15,
  kNotDefinedKnotParam: 16
}
var ErrorCondition = {
  kOk: 0,
  k0This: 1,
  k0Arg1: 2,
  k0Arg2: 3,
  kPerpendicularArg1Arg2: 4,
  kEqualArg1Arg2: 5,
  kEqualArg1Arg3: 6,
  kEqualArg2Arg3: 7,
  kLinearlyDependentArg1Arg2Arg3: 8,
  kArg1TooBig: 9,
  kArg1OnThis: 10,
  kArg1InsideThis: 11,
  kNonCoplanarGeometry: 12,
  kDegenerateGeometry: 13,
  kSingularPoint: 14
}
var EntityId = {
  kEntity2d: 0,
  kEntity3d: 1,
  kPointEnt2d: 2,
  kPointEnt3d: 3,
  kPosition2d: 4,
  kPosition3d: 5,
  kPointOnCurve2d: 6,
  kPointOnCurve3d: 7,
  kPointOnSurface: 8,
  kBoundedPlane: 9,
  kCircArc2d: 10,
  kCircArc3d: 11,
  kConic2d: 12,
  kConic3d: 13,
  kCurve2d: 14,
  kCurve3d: 15,
  kEllipArc2d: 16,
  kEllipArc3d: 17,
  kLine2d: 18,
  kLine3d: 19,
  kLinearEnt2d: 20,
  kLinearEnt3d: 21,
  kLineSeg2d: 22,
  kLineSeg3d: 23,
  kPlanarEnt: 24,
  kPlane: 25,
  kRay2d: 26,
  kRay3d: 27,
  kSurface: 28,
  kSphere: 29,
  kCylinder: 30,
  kTorus: 31,
  kCone: 32,
  kSplineEnt2d: 33,
  kPolyline2d: 34,
  kAugPolyline2d: 35,
  kNurbCurve2d: 36,
  kDSpline2d: 37,
  kCubicSplineCurve2d: 38,
  kSplineEnt3d: 39,
  kPolyline3d: 40,
  kAugPolyline3d: 41,
  kNurbCurve3d: 42,
  kDSpline3d: 43,
  kCubicSplineCurve3d: 44,
  kTrimmedCrv2d: 45,
  kCompositeCrv2d: 46,
  kCompositeCrv3d: 47,
  kExternalSurface: 48,
  kNurbSurface: 49,
  kTrimmedSurface: 50,
  kOffsetSurface: 51,
  kEnvelope2d: 52,
  kCurveBoundedSurface: 53,
  kExternalCurve3d: 54,
  kExternalCurve2d: 55,
  kSurfaceCurve2dTo3d: 56,
  kSurfaceCurve3dTo2d: 57,
  kExternalBoundedSurface: 58,
  kCurveCurveInt2d: 59,
  kCurveCurveInt3d: 60,
  kBoundBlock2d: 61,
  kBoundBlock3d: 62,
  kOffsetCurve2d: 63,
  kOffsetCurve3d: 64,
  kPolynomCurve3d: 65,
  kBezierCurve3d: 66,
  kObject: 67,
  kFitData3d: 68,
  kHatch: 69,
  kTrimmedCurve2d: 70,
  kTrimmedCurve3d: 71,
  kCurveSampleData: 72,
  kEllipCone: 73,
  kEllipCylinder: 74,
  kIntervalBoundBlock: 75,
  kClipBoundary2d: 76,
  kExternalObject: 77,
  kCurveSurfaceInt: 78,
  kSurfaceSurfaceInt: 79,
  kHelix: 80,
  kSpunSurface: 81,
  kSegmentChain2d: 82,
  kRevolvedSurface: 83,
  kRuled: 84,
  kEdgeCurve: 85,
  kInvalidEntity: 86,
  kDummy1: 87,
  kDummy2: 88,
  kDummy3: 89,
  kDummy4: 90,
  kDummy5: 91,
  kDummy6: 92,
  kDummy7: 93,
  kDummy8: 94,
  kDummy9: 95
}
var IntersectionStatus = {
  kIntersectUnknown: 0,
  kIntersectNot: 1,
  kIntersectOpIn: 2,
  kIntersectOpOut: 3,
  kIntersectOk: 4
}
var Convert2dPlane = {
  kConvert2dPlaneXY: 4,
  kConvert2dPlaneXZ: 8,
  kConvert2dPlaneYX: 1,
  kConvert2dPlaneYZ: 9,
  kConvert2dPlaneZX: 2,
  kConvert2dPlaneZY: 6
}
var IntersectionStatus = {
  kIntersectUnknown: 0,
  kIntersectNot: 1,
  kIntersectOpIn: 2,
  kIntersectOpOut: 3,
  kIntersectOk: 4
}
var LoopType = {
  kLUndefined: 0,
  kLOuter: 1,
  kLInner: 2
}
var ConnectionSide = {
  kLowerU: 1,
  kUpperU: 2,
  kLowerV: 3,
  kUpperV: 4
}
var OwnershipFlag = {
  kCurveCopy: 1,
  kCurveOwn: 2,
  kCurveReference: 3,
  kSurfaceCopy: 4,
  kSurfaceOwn: 8,
  kSurfaceReference: 12,
  kCopy: 5,
  kOwn: 10,
  kReference: 15,
  kCurveMask: 3,
  kSurfaceMask: 12
}
var DrawableType = {
  kGeometry: 0,
  kDistantLight: 1,
  kPointLight: 2,
  kSpotLight: 3,
  kAmbientLight: 4,
  kSolidBackground: 5,
  kGradientBackground: 6,
  kImageBackground: 7,
  kGroundPlaneBackground: 8,
  kViewport: 9,
  kWebLight: 10,
  kSkyBackground: 11,
  kImageBasedLightingBackground: 12,
  kEnvironmentBackground: 16,
  kCustomBackground: 17
}
var SetAttributesFlags = {
  kDrawableNone: 0,
  kDrawableIsAnEntity: 1,
  kDrawableUsesNesting: 2,
  kDrawableIsCompoundObject: 4,
  kDrawableViewIndependentViewportDraw: 8,
  kDrawableIsInvisible: 16,
  kDrawableHasAttributes: 32,
  kDrawableRegenTypeDependantGeometry: 64,
  kDrawableIsDimension: 133,
  kDrawableRegenDraw: 256,
  kDrawableStandardDisplaySingleLOD: 512,
  kDrawableShadedDisplaySingleLOD: 1024,
  kDrawableViewDependentViewportDraw: 2048,
  kDrawableBlockDependentViewportDraw: 4096,
  kDrawableIsExternalReference: 8192,
  kDrawableNotPlottable: 16384,
  kDrawableNotAllowLCS: 32768,
  kDrawableMergeControlOff: 65536,
  kLastFlag: 65536
}
var ViewportFlags = {
  kDependentViewport: 1,
  kDependentGeometry: 2,
  kHelperView: 4,
  kSetViewportId: 8
}
var Projection = {
  kParallel: 0,
  kPerspective: 1
}
var DefaultLightingType = {
  kOneLight: 0,
  kTwoLights: 1,
  kBackLight: 2
}
var RenderMode = {
  kBoundingBox: -1,
  k2DOptimized: 0,
  kWireframe: 1,
  kHiddenLine: 2,
  kFlatShaded: 3,
  kGouraudShaded: 4,
  kFlatShadedWithWireframe: 5,
  kGouraudShadedWithWireframe: 6,
  kNone: 7
}
var ViewUpdateFlags = {
  kCameraChanged: 1
}
var ClearColor = {
  kTransparent: 0,
  kDeviceBackground: 1,
  kPaletteBackground: 2
}
var SelectionMode = {
  kWindow: 0,
  kCrossing: 1,
  kFence: 2,
  kWPoly: 3,
  kCPoly: 4,
  kPoint: 16,
  kPointLast: 17
}
var FileAccessMode = {
  kFileRead: -2147483648,
  kFileWrite: 1073741824,
  kFileTmp: 536870912,
  kFileDelete: 268435456,
  kNoFlushWhenClosed: 134217728,
  kFileReadWrite: -1073741824
}
var FileCreationDisposition = {
  kCreateNew: 1,
  kCreateAlways: 2,
  kOpenExisting: 3,
  kOpenAlways: 4,
  kTruncateExisting: 5
}
var FileShareMode = {
  kShareDenyReadWrite: 16,
  kShareDenyWrite: 32,
  kShareDenyRead: 48,
  kShareDenyNo: 64
}
var FilerSeekType = {
  kSeekFromStart: 0,
  kSeekFromCurrent: 1,
  kSeekFromEnd: 2
}
var MultiThreadedMode = {
  kSTMode: 0,
  kMTLoading: 1,
  kMTRendering: 2
}
var MeasurementValue = {
  kEnglish: 0,
  kMetric: 1
}
var PlotStyleNameType = {
  kPlotStyleNameByLayer: 0,
  kPlotStyleNameByBlock: 1,
  kPlotStyleNameIsDictDefault: 2,
  kPlotStyleNameById: 3
}
var DwgVersion = {
  kDHL_MC0_0: 0,
  kDHL_AC1_2: 1,
  kDHL_AC1_40: 2,
  kDHL_AC1_50: 3,
  kDHL_AC2_20: 4,
  kDHL_AC2_10: 5,
  kDHL_AC2_21: 6,
  kDHL_AC2_22: 7,
  kDHL_1001: 8,
  kDHL_1002: 9,
  vAC025: 9,
  kDHL_1003: 10,
  vAC026: 10,
  kDHL_1004: 11,
  vAC09: 11,
  kDHL_1005: 12,
  kDHL_1006: 13,
  vAC10: 13,
  kDHL_1007: 14,
  kDHL_1008: 15,
  kDHL_1009: 16,
  vAC12: 16,
  kDHL_1010: 17,
  kDHL_1011: 18,
  kDHL_1012: 19,
  vAC13: 19,
  kDHL_1013: 20,
  vAC14beta: 20,
  kDHL_1014: 21,
  vAC14: 21,
  kDHL_1500: 22,
  kDHL_1015: 23,
  vAC15: 23,
  kDHL_1800a: 24,
  kDHL_1800: 25,
  vAC18: 25,
  kDHL_2100a: 26,
  kDHL_1021: 27,
  vAC21: 27,
  kDHL_2400a: 28,
  kDHL_1024: 29,
  vAC24: 29,
  kDHL_2700a: 30,
  kDHL_1027: 31,
  vAC27: 31,
  kDHL_3200a: 32,
  kDHL_1032: 33,
  vAC32: 33,
  kDHL_PRECURR: 31,
  kDHL_CURRENT: 33,
  kDHL_Unknown: 32766,
  kDHL_Max: 32767
}
var UnitsValue = {
  kUnitsUndefined: 0,
  kUnitsInches: 1,
  kUnitsFeet: 2,
  kUnitsMiles: 3,
  kUnitsMillimeters: 4,
  kUnitsCentimeters: 5,
  kUnitsMeters: 6,
  kUnitsKilometers: 7,
  kUnitsMicroinches: 8,
  kUnitsMils: 9,
  kUnitsYards: 10,
  kUnitsAngstroms: 11,
  kUnitsNanometers: 12,
  kUnitsMicrons: 13,
  kUnitsDecimeters: 14,
  kUnitsDekameters: 15,
  kUnitsHectometers: 16,
  kUnitsGigameters: 17,
  kUnitsAstronomical: 18,
  kUnitsLightYears: 19,
  kUnitsParsecs: 20,
  kUnitsUSSurveyFeet: 21,
  kUnitsUSSurveyInch: 22,
  kUnitsUSSurveyYard: 23,
  kUnitsUSSurveyMile: 24,
  kUnitsMax: 24
}
var OsnapMode = {
  kOsModeEnd: 1,
  kOsModeMid: 2,
  kOsModeCen: 3,
  kOsModeNode: 4,
  kOsModeQuad: 5,
  kOsModeIntersec: 6,
  kOsModeIns: 7,
  kOsModePerp: 8,
  kOsModeTan: 9,
  kOsModeNear: 10,
  kOsModeApint: 11,
  kOsModePar: 12,
  kOsModeStart: 13
}
var ReferenceType = {
  kSoftPointerRef: 0,
  kHardPointerRef: 1,
  kSoftOwnershipRef: 2,
  kHardOwnershipRef: 3
}
var Intersect = {
  kOnBothOperands: 0,
  kExtendThis: 1,
  kExtendArg: 2,
  kExtendBoth: 3
}
var LineWeight = {
  kLnWt000: 0,
  kLnWt005: 5,
  kLnWt009: 9,
  kLnWt013: 13,
  kLnWt015: 15,
  kLnWt018: 18,
  kLnWt020: 20,
  kLnWt025: 25,
  kLnWt030: 30,
  kLnWt035: 35,
  kLnWt040: 40,
  kLnWt050: 50,
  kLnWt053: 53,
  kLnWt060: 60,
  kLnWt070: 70,
  kLnWt080: 80,
  kLnWt090: 90,
  kLnWt100: 100,
  kLnWt106: 106,
  kLnWt120: 120,
  kLnWt140: 140,
  kLnWt158: 158,
  kLnWt200: 200,
  kLnWt211: 211,
  kLnWtByLayer: -1,
  kLnWtByBlock: -2,
  kLnWtByLwDefault: -3
}
var MaintReleaseVer = {
  kMRelease0: 0,
  kMRelease1: 1,
  kMRelease2: 2,
  kMRelease3: 3,
  kMRelease4: 4,
  kMRelease5: 5,
  kMRelease6: 6,
  kMRelease7: 7,
  kMRelease8: 8,
  kMRelease9: 9,
  kMRelease10: 10,
  kMRelease11: 11,
  kMRelease12: 12,
  kMRelease13: 13,
  kMRelease14: 14,
  kMRelease15: 15,
  kMRelease16: 16,
  kMRelease17: 17,
  kMRelease18: 18,
  kMRelease19: 19,
  kMRelease20: 20,
  kMRelease21: 21,
  kMRelease22: 22,
  kMRelease23: 23,
  kMRelease24: 24,
  kMRelease25: 25,
  kMRelease26: 26,
  kMRelease27: 27,
  kMRelease28: 28,
  kMRelease29: 29,
  kMRelease30: 30,
  kMRelease31: 31,
  kMRelease32: 32,
  kMRelease33: 33,
  kMRelease34: 34,
  kMRelease35: 35,
  kMRelease36: 36,
  kMRelease37: 37,
  kMRelease38: 38,
  kMRelease39: 39,
  kMRelease40: 40,
  kMRelease41: 41,
  kMRelease42: 42,
  kMRelease43: 43,
  kMRelease44: 44,
  kMRelease45: 45,
  kMRelease46: 46,
  kMRelease47: 47,
  kMRelease48: 48,
  kMRelease49: 49,
  kMRelease50: 50,
  kMRelease51: 51,
  kMRelease52: 52,
  kMRelease53: 53,
  kMRelease54: 54,
  kMRelease55: 55,
  kMRelease56: 56,
  kMRelease57: 57,
  kMRelease58: 58,
  kMRelease59: 59,
  kMRelease60: 60,
  kMRelease61: 61,
  kMRelease62: 62,
  kMRelease63: 63,
  kMRelease64: 64,
  kMRelease65: 65,
  kMRelease66: 66,
  kMRelease67: 67,
  kMRelease68: 68,
  kMRelease69: 69,
  kMRelease70: 70,
  kMRelease71: 71,
  kMRelease72: 72,
  kMRelease73: 73,
  kMRelease74: 74,
  kMRelease75: 75,
  kMRelease76: 76,
  kMRelease77: 77,
  kMRelease78: 78,
  kMRelease79: 79,
  kMRelease80: 80,
  kMRelease81: 81,
  kMRelease82: 82,
  kMRelease83: 83,
  kMRelease84: 84,
  kMRelease85: 85,
  kMRelease86: 86,
  kMRelease87: 87,
  kMRelease88: 88,
  kMRelease89: 89,
  kMRelease90: 90,
  kMRelease91: 91,
  kMRelease92: 92,
  kMRelease93: 93,
  kMRelease94: 94,
  kMRelease95: 95,
  kMRelease96: 96,
  kMRelease97: 97,
  kMRelease98: 98,
  kMRelease99: 99,
  kMRelease100: 100,
  kMRelease101: 101,
  kMRelease102: 102,
  kMRelease103: 103,
  kMRelease104: 104,
  kMRelease105: 105,
  kMRelease106: 106,
  kMRelease107: 107,
  kMRelease108: 108,
  kMRelease109: 109,
  kMRelease110: 110,
  kMRelease111: 111,
  kMRelease112: 112,
  kMRelease113: 113,
  kMRelease114: 114,
  kMRelease115: 115,
  kMRelease116: 116,
  kMRelease117: 117,
  kMRelease118: 118,
  kMRelease119: 119,
  kMRelease120: 120,
  kMRelease121: 121,
  kMRelease122: 122,
  kMRelease123: 123,
  kMRelease124: 124,
  kMRelease125: 125,
  kMRelease126: 126,
  kMRelease127: 127,
  kMRelease128: 128,
  kMRelease129: 129,
  kMRelease130: 130,
  kMRelease131: 131,
  kMRelease132: 132,
  kMRelease133: 133,
  kMRelease134: 134,
  kMRelease135: 135,
  kMRelease136: 136,
  kMRelease137: 137,
  kMRelease138: 138,
  kMRelease139: 139,
  kMRelease140: 140,
  kMRelease141: 141,
  kMRelease142: 142,
  kMRelease143: 143,
  kMRelease144: 144,
  kMRelease145: 145,
  kMRelease146: 146,
  kMRelease147: 147,
  kMRelease148: 148,
  kMRelease149: 149,
  kMRelease150: 150,
  kMRelease151: 151,
  kMRelease152: 152,
  kMRelease153: 153,
  kMRelease154: 154,
  kMRelease155: 155,
  kMRelease156: 156,
  kMRelease157: 157,
  kMRelease158: 158,
  kMRelease159: 159,
  kMRelease160: 160,
  kMRelease161: 161,
  kMRelease162: 162,
  kMRelease163: 163,
  kMRelease164: 164,
  kMRelease165: 165,
  kMRelease166: 166,
  kMRelease167: 167,
  kMRelease168: 168,
  kMRelease169: 169,
  kMRelease170: 170,
  kMRelease171: 171,
  kMRelease172: 172,
  kMRelease173: 173,
  kMRelease174: 174,
  kMRelease175: 175,
  kMRelease176: 176,
  kMRelease177: 177,
  kMRelease178: 178,
  kMRelease179: 179,
  kMRelease180: 180,
  kMRelease181: 181,
  kMRelease182: 182,
  kMRelease183: 183,
  kMRelease184: 184,
  kMRelease185: 185,
  kMRelease186: 186,
  kMRelease187: 187,
  kMRelease188: 188,
  kMRelease189: 189,
  kMRelease190: 190,
  kMRelease191: 191,
  kMRelease192: 192,
  kMRelease193: 193,
  kMRelease194: 194,
  kMRelease195: 195,
  kMRelease196: 196,
  kMRelease197: 197,
  kMRelease198: 198,
  kMRelease199: 199,
  kMRelease200: 200,
  kMRelease201: 201,
  kMRelease202: 202,
  kMRelease203: 203,
  kMRelease204: 204,
  kMRelease205: 205,
  kMRelease206: 206,
  kMRelease207: 207,
  kMRelease208: 208,
  kMRelease209: 209,
  kMRelease210: 210,
  kMRelease211: 211,
  kMRelease212: 212,
  kMRelease213: 213,
  kMRelease214: 214,
  kMRelease215: 215,
  kMRelease216: 216,
  kMRelease217: 217,
  kMRelease218: 218,
  kMRelease219: 219,
  kMRelease220: 220,
  kMRelease221: 221,
  kMRelease222: 222,
  kMRelease223: 223,
  kMRelease224: 224,
  kMRelease225: 225,
  kMRelease226: 226,
  kMRelease227: 227,
  kMRelease228: 228,
  kMRelease229: 229,
  kMRelease230: 230,
  kMRelease231: 231,
  kMRelease232: 232,
  kMRelease233: 233,
  kMRelease234: 234,
  kMRelease235: 235,
  kMRelease236: 236,
  kMRelease237: 237,
  kMRelease238: 238,
  kMRelease239: 239,
  kMRelease240: 240,
  kMRelease241: 241,
  kMRelease242: 242,
  kMRelease243: 243,
  kMRelease244: 244,
  kMRelease245: 245,
  kMRelease246: 246,
  kMRelease247: 247,
  kMRelease248: 248,
  kMRelease249: 249,
  kMRelease250: 250,
  kMRelease251: 251,
  kMRelease252: 252,
  kMRelease253: 253,
  kMRelease254: 254,
  kMRelease255: 255,
  kMReleaseFirstValid1500: 41,
  kMReleaseCurrent: 55,
  kMReleaseUnknown: 126,
  kMReleaseMax: 127,
  kMRelease2010Max: 255
}
var Ordering = {
  kLessThan: -1,
  kEqual: 0,
  kGreaterThan: 1,
  kNotOrderable: 2
}
var MTSupport = {
  kMTRender: 1,
  kMTRenderInBlock: 2,
  kMTRenderNested: 4,
  kMTRenderReserved: 8,
  kMTRenderMask: 15,
  kMTLoading: 128,
  kHistoryAware: 256
}
var OdRxObjMod = {
  kOdRxObjAttach: 0
}
var OverrulingType = {
  kDrawableOverrule: 0,
  kObjectOverrule: 1,
  kPropertiesOverrule: 2,
  kGeometryOverrule: 3,
  kHighlightOverrule: 4,
  kSubentityOverrule: 5,
  kGripOverrule: 6,
  kTransformOverrule: 7,
  kOsnapOverrule: 8,
  kVisibilityOverrule: 9,
  kTotalOverrules: 10
}
var Mode = {
  kPoint: 0,
  kBox: 1,
  kWindow: 2,
  kCrossing: 3,
  kFence: 4,
  kWPoly: 5,
  kCPoly: 6
}
var SubentSelectionMode = {
  kDisableSubents: 0,
  kEnableSubents: 1,
  kIncludeViewport: 2,
  kNestedEntities: 4
}
var LineSpacingStyle = {
  kAtLeast: 1,
  kExactly: 2
}
var TextHorzMode = {
  kTextLeft: 0,
  kTextCenter: 1,
  kTextRight: 2,
  kTextAlign: 3,
  kTextMid: 4,
  kTextFit: 5
}
var TextVertMode = {
  kTextBase: 0,
  kTextBottom: 1,
  kTextVertMid: 2,
  kTextTop: 3
}