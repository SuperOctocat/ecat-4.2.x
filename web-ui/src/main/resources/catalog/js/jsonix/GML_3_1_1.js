goog.provide("GML_3_1_1");

var GML_3_1_1_Module_Factory = function () {
  var GML_3_1_1 = {
    n: "GML_3_1_1",
    dens: "http://www.opengis.net/gml",
    dans: "http://www.w3.org/1999/xlink",
    deps: ["XLink_1_0", "SMIL_2_0_Language"],
    tis: [
      {
        ln: "EnvelopeType",
        ps: [
          {
            n: "lowerCorner",
            ti: ".DirectPositionType"
          },
          {
            n: "upperCorner",
            ti: ".DirectPositionType"
          },
          {
            n: "coord",
            col: true,
            ti: ".CoordType"
          },
          {
            n: "pos",
            col: true,
            ti: ".DirectPositionType"
          },
          {
            n: "coordinates",
            ti: ".CoordinatesType"
          },
          {
            n: "srsName",
            an: {
              lp: "srsName"
            },
            t: "a"
          },
          {
            n: "srsDimension",
            ti: "Integer",
            an: {
              lp: "srsDimension"
            },
            t: "a"
          },
          {
            n: "axisLabels",
            ti: {
              t: "l"
            },
            an: {
              lp: "axisLabels"
            },
            t: "a"
          },
          {
            n: "uomLabels",
            ti: {
              t: "l"
            },
            an: {
              lp: "uomLabels"
            },
            t: "a"
          }
        ]
      },
      {
        ln: "SymbolType",
        ps: [
          {
            n: "any",
            col: true,
            typed: false,
            mx: false,
            t: "ae"
          },
          {
            n: "symbolType",
            an: {
              lp: "symbolType"
            },
            t: "a"
          },
          {
            n: "transform",
            an: {
              lp: "transform",
              ns: "http://www.opengis.net/gml"
            },
            t: "a"
          },
          {
            n: "about",
            an: {
              lp: "about"
            },
            t: "a"
          },
          {
            n: "remoteSchema",
            an: {
              lp: "remoteSchema",
              ns: "http://www.opengis.net/gml"
            },
            t: "a"
          },
          {
            n: "type",
            ti: "XLink_1_0.TypeType",
            t: "a"
          },
          {
            n: "href",
            t: "a"
          },
          {
            n: "role",
            t: "a"
          },
          {
            n: "arcrole",
            t: "a"
          },
          {
            n: "title",
            t: "a"
          },
          {
            n: "show",
            ti: "XLink_1_0.ShowType",
            t: "a"
          },
          {
            n: "actuate",
            ti: "XLink_1_0.ActuateType",
            t: "a"
          }
        ]
      },
      {
        ln: "DirectedObservationType",
        bti: ".ObservationType",
        ps: [
          {
            n: "direction",
            ti: ".DirectionPropertyType"
          }
        ]
      },
      {
        ln: "TopologyStylePropertyType",
        ps: [
          {
            n: "topologyStyle",
            en: "TopologyStyle",
            ti: ".TopologyStyleType"
          },
          {
            n: "about",
            an: {
              lp: "about"
            },
            t: "a"
          },
          {
            n: "remoteSchema",
            an: {
              lp: "remoteSchema",
              ns: "http://www.opengis.net/gml"
            },
            t: "a"
          },
          {
            n: "type",
            ti: "XLink_1_0.TypeType",
            t: "a"
          },
          {
            n: "href",
            t: "a"
          },
          {
            n: "role",
            t: "a"
          },
          {
            n: "arcrole",
            t: "a"
          },
          {
            n: "title",
            t: "a"
          },
          {
            n: "show",
            ti: "XLink_1_0.ShowType",
            t: "a"
          },
          {
            n: "actuate",
            ti: "XLink_1_0.ActuateType",
            t: "a"
          }
        ]
      },
      {
        ln: "GeodesicType",
        bti: ".GeodesicStringType"
      },
      {
        ln: "AbstractCoordinateOperationType",
        bti: ".AbstractCoordinateOperationBaseType",
        ps: [
          {
            n: "coordinateOperationID",
            col: true,
            ti: ".IdentifierType"
          },
          {
            n: "remarks",
            ti: ".StringOrRefType"
          },
          {
            n: "operationVersion"
          },
          {
            n: "validArea",
            ti: ".ExtentType"
          },
          {
            n: "scope"
          },
          {
            n: "positionalAccuracy",
            col: true,
            mx: false,
            dom: false,
            en: "_positionalAccuracy",
            ti: ".AbstractPositionalAccuracyType",
            t: "er"
          },
          {
            n: "sourceCRS",
            ti: ".CRSRefType"
          },
          {
            n: "targetCRS",
            ti: ".CRSRefType"
          }
        ]
      },
      {
        ln: "MultiCurveDomainType",
        bti: ".DomainSetType"
      },
      {
        ln: "ReferenceSystemRefType",
        ps: [
          {
            n: "referenceSystem",
            mx: false,
            dom: false,
            en: "_ReferenceSystem",
            ti: ".AbstractReferenceSystemType",
            t: "er"
          },
          {
            n: "remoteSchema",
            an: {
              lp: "remoteSchema",
              ns: "http://www.opengis.net/gml"
            },
            t: "a"
          },
          {
            n: "type",
            ti: "XLink_1_0.TypeType",
            t: "a"
          },
          {
            n: "href",
            t: "a"
          },
          {
            n: "role",
            t: "a"
          },
          {
            n: "arcrole",
            t: "a"
          },
          {
            n: "title",
            t: "a"
          },
          {
            n: "show",
            ti: "XLink_1_0.ShowType",
            t: "a"
          },
          {
            n: "actuate",
            ti: "XLink_1_0.ActuateType",
            t: "a"
          }
        ]
      },
      {
        ln: "TopoComplexMemberType",
        ps: [
          {
            n: "topoComplex",
            en: "TopoComplex",
            ti: ".TopoComplexType"
          },
          {
            n: "remoteSchema",
            an: {
              lp: "remoteSchema",
              ns: "http://www.opengis.net/gml"
            },
            t: "a"
          },
          {
            n: "type",
            ti: "XLink_1_0.TypeType",
            t: "a"
          },
          {
            n: "href",
            t: "a"
          },
          {
            n: "role",
            t: "a"
          },
          {
            n: "arcrole",
            t: "a"
          },
          {
            n: "title",
            t: "a"
          },
          {
            n: "show",
            ti: "XLink_1_0.ShowType",
            t: "a"
          },
          {
            n: "actuate",
            ti: "XLink_1_0.ActuateType",
            t: "a"
          }
        ]
      },
      {
        ln: "GeneralConversionRefType",
        ps: [
          {
            n: "generalConversion",
            mx: false,
            dom: false,
            en: "_GeneralConversion",
            ti: ".AbstractGeneralConversionType",
            t: "er"
          },
          {
            n: "remoteSchema",
            an: {
              lp: "remoteSchema",
              ns: "http://www.opengis.net/gml"
            },
            t: "a"
          },
          {
            n: "type",
            ti: "XLink_1_0.TypeType",
            t: "a"
          },
          {
            n: "href",
            t: "a"
          },
          {
            n: "role",
            t: "a"
          },
          {
            n: "arcrole",
            t: "a"
          },
          {
            n: "title",
            t: "a"
          },
          {
            n: "show",
            ti: "XLink_1_0.ShowType",
            t: "a"
          },
          {
            n: "actuate",
            ti: "XLink_1_0.ActuateType",
            t: "a"
          }
        ]
      },
      {
        ln: "LinearRingType",
        bti: ".AbstractRingType",
        ps: [
          {
            n: "posOrPointPropertyOrPointRep",
            col: true,
            mx: false,
            dom: false,
            etis: [
              {
                en: "pointRep",
                ti: ".PointPropertyType"
              },
              {
                en: "pointProperty",
                ti: ".PointPropertyType"
              },
              {
                en: "pos",
                ti: ".DirectPositionType"
              }
            ],
            t: "ers"
          },
          {
            n: "posList",
            ti: ".DirectPositionListType"
          },
          {
            n: "coordinates",
            ti: ".CoordinatesType"
          },
          {
            n: "coord",
            col: true,
            ti: ".CoordType"
          }
        ]
      },
      {
        ln: "CompositeSurfacePropertyType",
        ps: [
          {
            n: "compositeSurface",
            en: "CompositeSurface",
            ti: ".CompositeSurfaceType"
          },
          {
            n: "remoteSchema",
            an: {
              lp: "remoteSchema",
              ns: "http://www.opengis.net/gml"
            },
            t: "a"
          },
          {
            n: "type",
            ti: "XLink_1_0.TypeType",
            t: "a"
          },
          {
            n: "href",
            t: "a"
          },
          {
            n: "role",
            t: "a"
          },
          {
            n: "arcrole",
            t: "a"
          },
          {
            n: "title",
            t: "a"
          },
          {
            n: "show",
            ti: "XLink_1_0.ShowType",
            t: "a"
          },
          {
            n: "actuate",
            ti: "XLink_1_0.ActuateType",
            t: "a"
          }
        ]
      },
      {
        ln: "TinType.ControlPoint",
        tn: null,
        ps: [
          {
            n: "posList",
            ti: ".DirectPositionListType"
          },
          {
            n: "geometricPositionGroup",
            col: true,
            etis: [
              {
                en: "pos",
                ti: ".DirectPositionType"
              },
              {
                en: "pointProperty",
                ti: ".PointPropertyType"
              }
            ],
            t: "es"
          }
        ]
      },
      {
        ln: "ArrayType",
        bti: ".AbstractGMLType",
        ps: [
          {
            n: "members",
            ti: ".ArrayAssociationType"
          }
        ]
      },
      {
        ln: "LineStringSegmentArrayPropertyType",
        ps: [
          {
            n: "lineStringSegment",
            col: true,
            en: "LineStringSegment",
            ti: ".LineStringSegmentType"
          }
        ]
      },
      {
        ln: "AbstractGeneralParameterValueType"
      },
      {
        ln: "DirectedEdgePropertyType",
        ps: [
          {
            n: "edge",
            en: "Edge",
            ti: ".EdgeType"
          },
          {
            n: "orientation",
            an: {
              lp: "orientation"
            },
            t: "a"
          },
          {
            n: "remoteSchema",
            an: {
              lp: "remoteSchema",
              ns: "http://www.opengis.net/gml"
            },
            t: "a"
          },
          {
            n: "type",
            ti: "XLink_1_0.TypeType",
            t: "a"
          },
          {
            n: "href",
            t: "a"
          },
          {
            n: "role",
            t: "a"
          },
          {
            n: "arcrole",
            t: "a"
          },
          {
            n: "title",
            t: "a"
          },
          {
            n: "show",
            ti: "XLink_1_0.ShowType",
            t: "a"
          },
          {
            n: "actuate",
            ti: "XLink_1_0.ActuateType",
            t: "a"
          }
        ]
      },
      {
        ln: "TemporalCSType",
        bti: ".AbstractCoordinateSystemType"
      },
      {
        ln: "TimeNodePropertyType",
        ps: [
          {
            n: "timeNode",
            en: "TimeNode",
            ti: ".TimeNodeType"
          },
          {
            n: "remoteSchema",
            an: {
              lp: "remoteSchema",
              ns: "http://www.opengis.net/gml"
            },
            t: "a"
          },
          {
            n: "type",
            ti: "XLink_1_0.TypeType",
            t: "a"
          },
          {
            n: "href",
            t: "a"
          },
          {
            n: "role",
            t: "a"
          },
          {
            n: "arcrole",
            t: "a"
          },
          {
            n: "title",
            t: "a"
          },
          {
            n: "show",
            ti: "XLink_1_0.ShowType",
            t: "a"
          },
          {
            n: "actuate",
            ti: "XLink_1_0.ActuateType",
            t: "a"
          }
        ]
      },
      {
        ln: "MultiCurveCoverageType",
        bti: ".AbstractDiscreteCoverageType"
      },
      {
        ln: "MultiSolidCoverageType",
        bti: ".AbstractDiscreteCoverageType"
      },
      {
        ln: "DynamicFeatureType",
        bti: ".AbstractFeatureType",
        ps: [
          {
            n: "validTime",
            ti: ".TimePrimitivePropertyType"
          },
          {
            n: "history",
            mx: false,
            dom: false,
            ti: ".HistoryPropertyType",
            t: "er"
          },
          {
            n: "dataSource",
            ti: ".StringOrRefType"
          }
        ]
      },
      {
        ln: "MultiPointDomainType",
        bti: ".DomainSetType"
      },
      {
        ln: "AbstractFeatureCollectionType",
        bti: ".AbstractFeatureType",
        ps: [
          {
            n: "featureMember",
            col: true,
            ti: ".FeaturePropertyType"
          },
          {
            n: "featureMembers",
            ti: ".FeatureArrayPropertyType"
          }
        ]
      },
      {
        ln: "TopoVolumePropertyType",
        ps: [
          {
            n: "topoVolume",
            en: "TopoVolume",
            ti: ".TopoVolumeType"
          }
        ]
      },
      {
        ln: "AbstractCoverageType",
        bti: ".AbstractFeatureType",
        ps: [
          {
            n: "domainSet",
            mx: false,
            dom: false,
            ti: ".DomainSetType",
            t: "er"
          },
          {
            n: "rangeSet",
            ti: ".RangeSetType"
          },
          {
            n: "dimension",
            ti: "Integer",
            an: {
              lp: "dimension"
            },
            t: "a"
          }
        ]
      },
      {
        ln: "GridFunctionType",
        ps: [
          {
            n: "sequenceRule",
            ti: ".SequenceRuleType"
          },
          {
            n: "startPoint",
            ti: {
              t: "l",
              bti: "Integer"
            }
          }
        ]
      },
      {
        ln: "DictionaryEntryType",
        ps: [
          {
            n: "definition",
            mx: false,
            dom: false,
            en: "Definition",
            ti: ".DefinitionType",
            t: "er"
          },
          {
            n: "remoteSchema",
            an: {
              lp: "remoteSchema",
              ns: "http://www.opengis.net/gml"
            },
            t: "a"
          },
          {
            n: "type",
            ti: "XLink_1_0.TypeType",
            t: "a"
          },
          {
            n: "href",
            t: "a"
          },
          {
            n: "role",
            t: "a"
          },
          {
            n: "arcrole",
            t: "a"
          },
          {
            n: "title",
            t: "a"
          },
          {
            n: "show",
            ti: "XLink_1_0.ShowType",
            t: "a"
          },
          {
            n: "actuate",
            ti: "XLink_1_0.ActuateType",
            t: "a"
          }
        ]
      },
      {
        ln: "ArrayAssociationType",
        ps: [
          {
            n: "object",
            col: true,
            mx: false,
            dom: false,
            en: "_Object",
            ti: "AnyType",
            t: "er"
          }
        ]
      },
      {
        ln: "TimeCalendarPropertyType",
        ps: [
          {
            n: "timeCalendar",
            en: "TimeCalendar",
            ti: ".TimeCalendarType"
          },
          {
            n: "remoteSchema",
            an: {
              lp: "remoteSchema",
              ns: "http://www.opengis.net/gml"
            },
            t: "a"
          },
          {
            n: "type",
            ti: "XLink_1_0.TypeType",
            t: "a"
          },
          {
            n: "href",
            t: "a"
          },
          {
            n: "role",
            t: "a"
          },
          {
            n: "arcrole",
            t: "a"
          },
          {
            n: "title",
            t: "a"
          },
          {
            n: "show",
            ti: "XLink_1_0.ShowType",
            t: "a"
          },
          {
            n: "actuate",
            ti: "XLink_1_0.ActuateType",
            t: "a"
          }
        ]
      },
      {
        ln: "CoordinatesType",
        ps: [
          {
            n: "value",
            t: "v"
          },
          {
            n: "decimal",
            an: {
              lp: "decimal"
            },
            t: "a"
          },
          {
            n: "cs",
            an: {
              lp: "cs"
            },
            t: "a"
          },
          {
            n: "ts",
            an: {
              lp: "ts"
            },
            t: "a"
          }
        ]
      },
      {
        ln: "CRSRefType",
        ps: [
          {
            n: "crs",
            mx: false,
            dom: false,
            en: "_CRS",
            ti: ".AbstractReferenceSystemType",
            t: "er"
          },
          {
            n: "remoteSchema",
            an: {
              lp: "remoteSchema",
              ns: "http://www.opengis.net/gml"
            },
            t: "a"
          },
          {
            n: "type",
            ti: "XLink_1_0.TypeType",
            t: "a"
          },
          {
            n: "href",
            t: "a"
          },
          {
            n: "role",
            t: "a"
          },
          {
            n: "arcrole",
            t: "a"
          },
          {
            n: "title",
            t: "a"
          },
          {
            n: "show",
            ti: "XLink_1_0.ShowType",
            t: "a"
          },
          {
            n: "actuate",
            ti: "XLink_1_0.ActuateType",
            t: "a"
          }
        ]
      },
      {
        ln: "AbstractRingType",
        bti: ".AbstractGeometryType"
      },
      {
        ln: "GraphStylePropertyType",
        ps: [
          {
            n: "graphStyle",
            en: "GraphStyle",
            ti: ".GraphStyleType"
          },
          {
            n: "about",
            an: {
              lp: "about"
            },
            t: "a"
          },
          {
            n: "remoteSchema",
            an: {
              lp: "remoteSchema",
              ns: "http://www.opengis.net/gml"
            },
            t: "a"
          },
          {
            n: "type",
            ti: "XLink_1_0.TypeType",
            t: "a"
          },
          {
            n: "href",
            t: "a"
          },
          {
            n: "role",
            t: "a"
          },
          {
            n: "arcrole",
            t: "a"
          },
          {
            n: "title",
            t: "a"
          },
          {
            n: "show",
            ti: "XLink_1_0.ShowType",
            t: "a"
          },
          {
            n: "actuate",
            ti: "XLink_1_0.ActuateType",
            t: "a"
          }
        ]
      },
      {
        ln: "IdentifierType",
        ps: [
          {
            n: "name",
            mx: false,
            dom: false,
            ti: ".CodeType",
            t: "er"
          },
          {
            n: "version"
          },
          {
            n: "remarks",
            ti: ".StringOrRefType"
          }
        ]
      },
      {
        ln: "ClothoidType",
        bti: ".AbstractCurveSegmentType",
        ps: [
          {
            n: "refLocation",
            ti: ".ClothoidType.RefLocation"
          },
          {
            n: "scaleFactor",
            ti: "Decimal"
          },
          {
            n: "startParameter",
            ti: "Double"
          },
          {
            n: "endParameter",
            ti: "Double"
          }
        ]
      },
      {
        ln: "MultiSolidDomainType",
        bti: ".DomainSetType"
      },
      {
        ln: "TemporalCRSRefType",
        ps: [
          {
            n: "temporalCRS",
            en: "TemporalCRS",
            ti: ".TemporalCRSType"
          },
          {
            n: "remoteSchema",
            an: {
              lp: "remoteSchema",
              ns: "http://www.opengis.net/gml"
            },
            t: "a"
          },
          {
            n: "type",
            ti: "XLink_1_0.TypeType",
            t: "a"
          },
          {
            n: "href",
            t: "a"
          },
          {
            n: "role",
            t: "a"
          },
          {
            n: "arcrole",
            t: "a"
          },
          {
            n: "title",
            t: "a"
          },
          {
            n: "show",
            ti: "XLink_1_0.ShowType",
            t: "a"
          },
          {
            n: "actuate",
            ti: "XLink_1_0.ActuateType",
            t: "a"
          }
        ]
      },
      {
        ln: "CurveArrayPropertyType",
        ps: [
          {
            n: "curve",
            col: true,
            mx: false,
            dom: false,
            en: "_Curve",
            ti: ".AbstractCurveType",
            t: "er"
          }
        ]
      },
      {
        ln: "SurfacePropertyType",
        ps: [
          {
            n: "surface",
            mx: false,
            dom: false,
            en: "_Surface",
            ti: ".AbstractSurfaceType",
            t: "er"
          },
          {
            n: "remoteSchema",
            an: {
              lp: "remoteSchema",
              ns: "http://www.opengis.net/gml"
            },
            t: "a"
          },
          {
            n: "type",
            ti: "XLink_1_0.TypeType",
            t: "a"
          },
          {
            n: "href",
            t: "a"
          },
          {
            n: "role",
            t: "a"
          },
          {
            n: "arcrole",
            t: "a"
          },
          {
            n: "title",
            t: "a"
          },
          {
            n: "show",
            ti: "XLink_1_0.ShowType",
            t: "a"
          },
          {
            n: "actuate",
            ti: "XLink_1_0.ActuateType",
            t: "a"
          }
        ]
      },
      {
        ln: "GeocentricCRSRefType",
        ps: [
          {
            n: "geocentricCRS",
            en: "GeocentricCRS",
            ti: ".GeocentricCRSType"
          },
          {
            n: "remoteSchema",
            an: {
              lp: "remoteSchema",
              ns: "http://www.opengis.net/gml"
            },
            t: "a"
          },
          {
            n: "type",
            ti: "XLink_1_0.TypeType",
            t: "a"
          },
          {
            n: "href",
            t: "a"
          },
          {
            n: "role",
            t: "a"
          },
          {
            n: "arcrole",
            t: "a"
          },
          {
            n: "title",
            t: "a"
          },
          {
            n: "show",
            ti: "XLink_1_0.ShowType",
            t: "a"
          },
          {
            n: "actuate",
            ti: "XLink_1_0.ActuateType",
            t: "a"
          }
        ]
      },
      {
        ln: "ArcStringType",
        bti: ".AbstractCurveSegmentType",
        ps: [
          {
            n: "posOrPointPropertyOrPointRep",
            col: true,
            mx: false,
            dom: false,
            etis: [
              {
                en: "pointRep",
                ti: ".PointPropertyType"
              },
              {
                en: "pointProperty",
                ti: ".PointPropertyType"
              },
              {
                en: "pos",
                ti: ".DirectPositionType"
              }
            ],
            t: "ers"
          },
          {
            n: "posList",
            ti: ".DirectPositionListType"
          },
          {
            n: "coordinates",
            ti: ".CoordinatesType"
          },
          {
            n: "interpolation",
            an: {
              lp: "interpolation"
            },
            t: "a"
          },
          {
            n: "numArc",
            ti: "Integer",
            an: {
              lp: "numArc"
            },
            t: "a"
          }
        ]
      },
      {
        ln: "LabelType",
        ps: [
          {
            n: "content",
            col: true,
            dom: false,
            en: "LabelExpression",
            t: "er"
          },
          {
            n: "transform",
            an: {
              lp: "transform",
              ns: "http://www.opengis.net/gml"
            },
            t: "a"
          }
        ]
      },
      {
        ln: "SpeedType",
        bti: ".MeasureType"
      },
      {
        ln: "SequenceRuleType",
        ps: [
          {
            n: "value",
            t: "v"
          },
          {
            n: "order",
            an: {
              lp: "order"
            },
            t: "a"
          }
        ]
      },
      {
        ln: "TimeType",
        bti: ".MeasureType"
      },
      {
        ln: "TimeEdgePropertyType",
        ps: [
          {
            n: "timeEdge",
            en: "TimeEdge",
            ti: ".TimeEdgeType"
          },
          {
            n: "remoteSchema",
            an: {
              lp: "remoteSchema",
              ns: "http://www.opengis.net/gml"
            },
            t: "a"
          },
          {
            n: "type",
            ti: "XLink_1_0.TypeType",
            t: "a"
          },
          {
            n: "href",
            t: "a"
          },
          {
            n: "role",
            t: "a"
          },
          {
            n: "arcrole",
            t: "a"
          },
          {
            n: "title",
            t: "a"
          },
          {
            n: "show",
            ti: "XLink_1_0.ShowType",
            t: "a"
          },
          {
            n: "actuate",
            ti: "XLink_1_0.ActuateType",
            t: "a"
          }
        ]
      },
      {
        ln: "CartesianCSType",
        bti: ".AbstractCoordinateSystemType"
      },
      {
        ln: "CylinderType",
        bti: ".AbstractGriddedSurfaceType",
        ps: [
          {
            n: "horizontalCURVETYPE",
            an: {
              lp: "horizontalCurveType"
            },
            t: "a"
          },
          {
            n: "verticalCURVETYPE",
            an: {
              lp: "verticalCurveType"
            },
            t: "a"
          }
        ]
      },
      {
        ln: "DirectedFacePropertyType",
        ps: [
          {
            n: "face",
            en: "Face",
            ti: ".FaceType"
          },
          {
            n: "orientation",
            an: {
              lp: "orientation"
            },
            t: "a"
          },
          {
            n: "remoteSchema",
            an: {
              lp: "remoteSchema",
              ns: "http://www.opengis.net/gml"
            },
            t: "a"
          },
          {
            n: "type",
            ti: "XLink_1_0.TypeType",
            t: "a"
          },
          {
            n: "href",
            t: "a"
          },
          {
            n: "role",
            t: "a"
          },
          {
            n: "arcrole",
            t: "a"
          },
          {
            n: "title",
            t: "a"
          },
          {
            n: "show",
            ti: "XLink_1_0.ShowType",
            t: "a"
          },
          {
            n: "actuate",
            ti: "XLink_1_0.ActuateType",
            t: "a"
          }
        ]
      },
      {
        ln: "SolidArrayPropertyType",
        ps: [
          {
            n: "solid",
            col: true,
            mx: false,
            dom: false,
            en: "_Solid",
            ti: ".AbstractSolidType",
            t: "er"
          }
        ]
      },
      {
        ln: "AbstractMetaDataType",
        ps: [
          {
            n: "content",
            col: true,
            dom: false,
            t: "ers"
          },
          {
            n: "id",
            ti: "ID",
            an: {
              lp: "id",
              ns: "http://www.opengis.net/gml"
            },
            t: "a"
          }
        ]
      },
      {
        ln: "LabelStylePropertyType",
        ps: [
          {
            n: "labelStyle",
            en: "LabelStyle",
            ti: ".LabelStyleType"
          },
          {
            n: "about",
            an: {
              lp: "about"
            },
            t: "a"
          },
          {
            n: "remoteSchema",
            an: {
              lp: "remoteSchema",
              ns: "http://www.opengis.net/gml"
            },
            t: "a"
          },
          {
            n: "type",
            ti: "XLink_1_0.TypeType",
            t: "a"
          },
          {
            n: "href",
            t: "a"
          },
          {
            n: "role",
            t: "a"
          },
          {
            n: "arcrole",
            t: "a"
          },
          {
            n: "title",
            t: "a"
          },
          {
            n: "show",
            ti: "XLink_1_0.ShowType",
            t: "a"
          },
          {
            n: "actuate",
            ti: "XLink_1_0.ActuateType",
            t: "a"
          }
        ]
      },
      {
        ln: "IsolatedPropertyType",
        ps: [
          {
            n: "node",
            en: "Node",
            ti: ".NodeType"
          },
          {
            n: "edge",
            en: "Edge",
            ti: ".EdgeType"
          },
          {
            n: "remoteSchema",
            an: {
              lp: "remoteSchema",
              ns: "http://www.opengis.net/gml"
            },
            t: "a"
          },
          {
            n: "type",
            ti: "XLink_1_0.TypeType",
            t: "a"
          },
          {
            n: "href",
            t: "a"
          },
          {
            n: "role",
            t: "a"
          },
          {
            n: "arcrole",
            t: "a"
          },
          {
            n: "title",
            t: "a"
          },
          {
            n: "show",
            ti: "XLink_1_0.ShowType",
            t: "a"
          },
          {
            n: "actuate",
            ti: "XLink_1_0.ActuateType",
            t: "a"
          }
        ]
      },
      {
        ln: "AbstractCoordinateOperationBaseType",
        bti: ".DefinitionType"
      },
      {
        ln: "AbstractTopologyType",
        bti: ".AbstractGMLType"
      },
      {
        ln: "DirectPositionListType",
        ps: [
          {
            n: "value",
            ti: {
              t: "l",
              bti: "Double"
            },
            t: "v"
          },
          {
            n: "count",
            ti: "Integer",
            an: {
              lp: "count"
            },
            t: "a"
          },
          {
            n: "srsName",
            an: {
              lp: "srsName"
            },
            t: "a"
          },
          {
            n: "srsDimension",
            ti: "Integer",
            an: {
              lp: "srsDimension"
            },
            t: "a"
          },
          {
            n: "axisLabels",
            ti: {
              t: "l"
            },
            an: {
              lp: "axisLabels"
            },
            t: "a"
          },
          {
            n: "uomLabels",
            ti: {
              t: "l"
            },
            an: {
              lp: "uomLabels"
            },
            t: "a"
          }
        ]
      },
      {
        ln: "AbstractTimePrimitiveType",
        bti: ".AbstractTimeObjectType",
        ps: [
          {
            n: "relatedTime",
            col: true,
            ti: ".RelatedTimeType"
          }
        ]
      },
      {
        ln: "GraphStyleType",
        bti: ".BaseStyleDescriptorType",
        ps: [
          {
            n: "planar",
            ti: "Boolean"
          },
          {
            n: "directed",
            ti: "Boolean"
          },
          {
            n: "grid",
            ti: "Boolean"
          },
          {
            n: "minDistance",
            ti: "Double"
          },
          {
            n: "minAngle",
            ti: "Double"
          },
          {
            n: "graphType"
          },
          {
            n: "drawingType"
          },
          {
            n: "lineType"
          },
          {
            n: "aestheticCriteria",
            col: true
          }
        ]
      },
      {
        ln: "FaceType",
        bti: ".AbstractTopoPrimitiveType",
        ps: [
          {
            n: "directedEdge",
            col: true,
            ti: ".DirectedEdgePropertyType"
          },
          {
            n: "directedTopoSolid",
            col: true,
            ti: ".DirectedTopoSolidPropertyType"
          },
          {
            n: "surfaceProperty",
            ti: ".SurfacePropertyType"
          }
        ]
      },
      {
        ln: "DirectionVectorType",
        ps: [
          {
            n: "vector",
            ti: ".VectorType"
          },
          {
            n: "horizontalAngle",
            ti: ".AngleType"
          },
          {
            n: "verticalAngle",
            ti: ".AngleType"
          }
        ]
      },
      {
        ln: "KnotType",
        ps: [
          {
            n: "value",
            ti: "Double"
          },
          {
            n: "multiplicity",
            ti: "Integer"
          },
          {
            n: "weight",
            ti: "Double"
          }
        ]
      },
      {
        ln: "GeometryStylePropertyType",
        ps: [
          {
            n: "geometryStyle",
            en: "GeometryStyle",
            ti: ".GeometryStyleType"
          },
          {
            n: "about",
            an: {
              lp: "about"
            },
            t: "a"
          },
          {
            n: "remoteSchema",
            an: {
              lp: "remoteSchema",
              ns: "http://www.opengis.net/gml"
            },
            t: "a"
          },
          {
            n: "type",
            ti: "XLink_1_0.TypeType",
            t: "a"
          },
          {
            n: "href",
            t: "a"
          },
          {
            n: "role",
            t: "a"
          },
          {
            n: "arcrole",
            t: "a"
          },
          {
            n: "title",
            t: "a"
          },
          {
            n: "show",
            ti: "XLink_1_0.ShowType",
            t: "a"
          },
          {
            n: "actuate",
            ti: "XLink_1_0.ActuateType",
            t: "a"
          }
        ]
      },
      {
        ln: "LineStringPropertyType",
        ps: [
          {
            n: "lineString",
            en: "LineString",
            ti: ".LineStringType"
          },
          {
            n: "remoteSchema",
            an: {
              lp: "remoteSchema",
              ns: "http://www.opengis.net/gml"
            },
            t: "a"
          },
          {
            n: "type",
            ti: "XLink_1_0.TypeType",
            t: "a"
          },
          {
            n: "href",
            t: "a"
          },
          {
            n: "role",
            t: "a"
          },
          {
            n: "arcrole",
            t: "a"
          },
          {
            n: "title",
            t: "a"
          },
          {
            n: "show",
            ti: "XLink_1_0.ShowType",
            t: "a"
          },
          {
            n: "actuate",
            ti: "XLink_1_0.ActuateType",
            t: "a"
          }
        ]
      },
      {
        ln: "CylindricalCSType",
        bti: ".AbstractCoordinateSystemType"
      },
      {
        ln: "DerivedCRSRefType",
        ps: [
          {
            n: "derivedCRS",
            en: "DerivedCRS",
            ti: ".DerivedCRSType"
          },
          {
            n: "remoteSchema",
            an: {
              lp: "remoteSchema",
              ns: "http://www.opengis.net/gml"
            },
            t: "a"
          },
          {
            n: "type",
            ti: "XLink_1_0.TypeType",
            t: "a"
          },
          {
            n: "href",
            t: "a"
          },
          {
            n: "role",
            t: "a"
          },
          {
            n: "arcrole",
            t: "a"
          },
          {
            n: "title",
            t: "a"
          },
          {
            n: "show",
            ti: "XLink_1_0.ShowType",
            t: "a"
          },
          {
            n: "actuate",
            ti: "XLink_1_0.ActuateType",
            t: "a"
          }
        ]
      },
      {
        ln: "NodeType",
        bti: ".AbstractTopoPrimitiveType",
        ps: [
          {
            n: "directedEdge",
            col: true,
            ti: ".DirectedEdgePropertyType"
          },
          {
            n: "pointProperty",
            ti: ".PointPropertyType"
          }
        ]
      },
      {
        ln: "TimeInstantPropertyType",
        ps: [
          {
            n: "timeInstant",
            en: "TimeInstant",
            ti: ".TimeInstantType"
          },
          {
            n: "remoteSchema",
            an: {
              lp: "remoteSchema",
              ns: "http://www.opengis.net/gml"
            },
            t: "a"
          },
          {
            n: "type",
            ti: "XLink_1_0.TypeType",
            t: "a"
          },
          {
            n: "href",
            t: "a"
          },
          {
            n: "role",
            t: "a"
          },
          {
            n: "arcrole",
            t: "a"
          },
          {
            n: "title",
            t: "a"
          },
          {
            n: "show",
            ti: "XLink_1_0.ShowType",
            t: "a"
          },
          {
            n: "actuate",
            ti: "XLink_1_0.ActuateType",
            t: "a"
          }
        ]
      },
      {
        ln: "MultiSurfaceType",
        bti: ".AbstractGeometricAggregateType",
        ps: [
          {
            n: "surfaceMember",
            col: true,
            ti: ".SurfacePropertyType"
          },
          {
            n: "surfaceMembers",
            ti: ".SurfaceArrayPropertyType"
          }
        ]
      },
      {
        ln: "CompositeSolidPropertyType",
        ps: [
          {
            n: "compositeSolid",
            en: "CompositeSolid",
            ti: ".CompositeSolidType"
          },
          {
            n: "remoteSchema",
            an: {
              lp: "remoteSchema",
              ns: "http://www.opengis.net/gml"
            },
            t: "a"
          },
          {
            n: "type",
            ti: "XLink_1_0.TypeType",
            t: "a"
          },
          {
            n: "href",
            t: "a"
          },
          {
            n: "role",
            t: "a"
          },
          {
            n: "arcrole",
            t: "a"
          },
          {
            n: "title",
            t: "a"
          },
          {
            n: "show",
            ti: "XLink_1_0.ShowType",
            t: "a"
          },
          {
            n: "actuate",
            ti: "XLink_1_0.ActuateType",
            t: "a"
          }
        ]
      },
      {
        ln: "DatumRefType",
        ps: [
          {
            n: "datum",
            mx: false,
            dom: false,
            en: "_Datum",
            ti: ".AbstractDatumType",
            t: "er"
          },
          {
            n: "remoteSchema",
            an: {
              lp: "remoteSchema",
              ns: "http://www.opengis.net/gml"
            },
            t: "a"
          },
          {
            n: "type",
            ti: "XLink_1_0.TypeType",
            t: "a"
          },
          {
            n: "href",
            t: "a"
          },
          {
            n: "role",
            t: "a"
          },
          {
            n: "arcrole",
            t: "a"
          },
          {
            n: "title",
            t: "a"
          },
          {
            n: "show",
            ti: "XLink_1_0.ShowType",
            t: "a"
          },
          {
            n: "actuate",
            ti: "XLink_1_0.ActuateType",
            t: "a"
          }
        ]
      },
      {
        ln: "BoundingShapeType",
        ps: [
          {
            n: "envelope",
            mx: false,
            dom: false,
            en: "Envelope",
            ti: ".EnvelopeType",
            t: "er"
          },
          {
            n: "_null",
            en: "Null",
            ti: {
              t: "l"
            }
          }
        ]
      },
      {
        ln: "TemporalDatumBaseType",
        bti: ".AbstractDatumType"
      },
      {
        ln: "BaseUnitType",
        bti: ".UnitDefinitionType",
        ps: [
          {
            n: "unitsSystem",
            ti: ".ReferenceType"
          }
        ]
      },
      {
        ln: "CubicSplineType",
        bti: ".AbstractCurveSegmentType",
        ps: [
          {
            n: "posOrPointPropertyOrPointRep",
            col: true,
            mx: false,
            dom: false,
            etis: [
              {
                en: "pointRep",
                ti: ".PointPropertyType"
              },
              {
                en: "pointProperty",
                ti: ".PointPropertyType"
              },
              {
                en: "pos",
                ti: ".DirectPositionType"
              }
            ],
            t: "ers"
          },
          {
            n: "posList",
            ti: ".DirectPositionListType"
          },
          {
            n: "coordinates",
            ti: ".CoordinatesType"
          },
          {
            n: "vectorAtStart",
            ti: ".VectorType"
          },
          {
            n: "vectorAtEnd",
            ti: ".VectorType"
          },
          {
            n: "interpolation",
            an: {
              lp: "interpolation"
            },
            t: "a"
          },
          {
            n: "degree",
            ti: "Integer",
            an: {
              lp: "degree"
            },
            t: "a"
          }
        ]
      },
      {
        ln: "TopoVolumeType",
        bti: ".AbstractTopologyType",
        ps: [
          {
            n: "directedTopoSolid",
            col: true,
            ti: ".DirectedTopoSolidPropertyType"
          }
        ]
      },
      {
        ln: "AbstractGeometricAggregateType",
        bti: ".AbstractGeometryType"
      },
      {
        ln: "GeographicCRSRefType",
        ps: [
          {
            n: "geographicCRS",
            en: "GeographicCRS",
            ti: ".GeographicCRSType"
          },
          {
            n: "remoteSchema",
            an: {
              lp: "remoteSchema",
              ns: "http://www.opengis.net/gml"
            },
            t: "a"
          },
          {
            n: "type",
            ti: "XLink_1_0.TypeType",
            t: "a"
          },
          {
            n: "href",
            t: "a"
          },
          {
            n: "role",
            t: "a"
          },
          {
            n: "arcrole",
            t: "a"
          },
          {
            n: "title",
            t: "a"
          },
          {
            n: "show",
            ti: "XLink_1_0.ShowType",
            t: "a"
          },
          {
            n: "actuate",
            ti: "XLink_1_0.ActuateType",
            t: "a"
          }
        ]
      },
      {
        ln: "CovarianceElementType",
        ps: [
          {
            n: "rowIndex",
            ti: "Integer"
          },
          {
            n: "columnIndex",
            ti: "Integer"
          },
          {
            n: "covariance",
            ti: "Double"
          }
        ]
      },
      {
        ln: "CodeOrNullListType",
        ps: [
          {
            n: "value",
            ti: {
              t: "l"
            },
            t: "v"
          },
          {
            n: "codeSpace",
            an: {
              lp: "codeSpace"
            },
            t: "a"
          }
        ]
      },
      {
        ln: "AbstractRingPropertyType",
        ps: [
          {
            n: "ring",
            mx: false,
            dom: false,
            en: "_Ring",
            ti: ".AbstractRingType",
            t: "er"
          }
        ]
      },
      {
        ln: "CompositeValueType",
        bti: ".AbstractGMLType",
        ps: [
          {
            n: "valueComponent",
            col: true,
            ti: ".ValuePropertyType"
          },
          {
            n: "valueComponents",
            ti: ".ValueArrayPropertyType"
          }
        ]
      },
      {
        ln: "VerticalCSRefType",
        ps: [
          {
            n: "verticalCS",
            en: "VerticalCS",
            ti: ".VerticalCSType"
          },
          {
            n: "remoteSchema",
            an: {
              lp: "remoteSchema",
              ns: "http://www.opengis.net/gml"
            },
            t: "a"
          },
          {
            n: "type",
            ti: "XLink_1_0.TypeType",
            t: "a"
          },
          {
            n: "href",
            t: "a"
          },
          {
            n: "role",
            t: "a"
          },
          {
            n: "arcrole",
            t: "a"
          },
          {
            n: "title",
            t: "a"
          },
          {
            n: "show",
            ti: "XLink_1_0.ShowType",
            t: "a"
          },
          {
            n: "actuate",
            ti: "XLink_1_0.ActuateType",
            t: "a"
          }
        ]
      },
      {
        ln: "TopoPointType",
        bti: ".AbstractTopologyType",
        ps: [
          {
            n: "directedNode",
            ti: ".DirectedNodePropertyType"
          }
        ]
      },
      {
        ln: "TimeNodeType",
        bti: ".AbstractTimeTopologyPrimitiveType",
        ps: [
          {
            n: "previousEdge",
            col: true,
            ti: ".TimeEdgePropertyType"
          },
          {
            n: "nextEdge",
            col: true,
            ti: ".TimeEdgePropertyType"
          },
          {
            n: "position",
            ti: ".TimeInstantPropertyType"
          }
        ]
      },
      {
        ln: "LinearRingPropertyType",
        ps: [
          {
            n: "linearRing",
            en: "LinearRing",
            ti: ".LinearRingType"
          }
        ]
      },
      {
        ln: "TimeInstantType",
        bti: ".AbstractTimeGeometricPrimitiveType",
        ps: [
          {
            n: "timePosition",
            ti: ".TimePositionType"
          }
        ]
      },
      {
        ln: "UserDefinedCSRefType",
        ps: [
          {
            n: "userDefinedCS",
            en: "UserDefinedCS",
            ti: ".UserDefinedCSType"
          },
          {
            n: "remoteSchema",
            an: {
              lp: "remoteSchema",
              ns: "http://www.opengis.net/gml"
            },
            t: "a"
          },
          {
            n: "type",
            ti: "XLink_1_0.TypeType",
            t: "a"
          },
          {
            n: "href",
            t: "a"
          },
          {
            n: "role",
            t: "a"
          },
          {
            n: "arcrole",
            t: "a"
          },
          {
            n: "title",
            t: "a"
          },
          {
            n: "show",
            ti: "XLink_1_0.ShowType",
            t: "a"
          },
          {
            n: "actuate",
            ti: "XLink_1_0.ActuateType",
            t: "a"
          }
        ]
      },
      {
        ln: "VectorType",
        ps: [
          {
            n: "value",
            ti: {
              t: "l",
              bti: "Double"
            },
            t: "v"
          },
          {
            n: "srsName",
            an: {
              lp: "srsName"
            },
            t: "a"
          },
          {
            n: "srsDimension",
            ti: "Integer",
            an: {
              lp: "srsDimension"
            },
            t: "a"
          },
          {
            n: "axisLabels",
            ti: {
              t: "l"
            },
            an: {
              lp: "axisLabels"
            },
            t: "a"
          },
          {
            n: "uomLabels",
            ti: {
              t: "l"
            },
            an: {
              lp: "uomLabels"
            },
            t: "a"
          }
        ]
      },
      {
        ln: "DerivedUnitType",
        bti: ".UnitDefinitionType",
        ps: [
          {
            n: "derivationUnitTerm",
            col: true,
            ti: ".DerivationUnitTermType"
          }
        ]
      },
      {
        ln: "MetaDataPropertyType",
        ps: [
          {
            n: "any",
            mx: false,
            t: "ae"
          },
          {
            n: "about",
            an: {
              lp: "about"
            },
            t: "a"
          },
          {
            n: "remoteSchema",
            an: {
              lp: "remoteSchema",
              ns: "http://www.opengis.net/gml"
            },
            t: "a"
          },
          {
            n: "type",
            ti: "XLink_1_0.TypeType",
            t: "a"
          },
          {
            n: "href",
            t: "a"
          },
          {
            n: "role",
            t: "a"
          },
          {
            n: "arcrole",
            t: "a"
          },
          {
            n: "title",
            t: "a"
          },
          {
            n: "show",
            ti: "XLink_1_0.ShowType",
            t: "a"
          },
          {
            n: "actuate",
            ti: "XLink_1_0.ActuateType",
            t: "a"
          }
        ]
      },
      {
        ln: "PointPropertyType",
        ps: [
          {
            n: "point",
            en: "Point",
            ti: ".PointType"
          },
          {
            n: "remoteSchema",
            an: {
              lp: "remoteSchema",
              ns: "http://www.opengis.net/gml"
            },
            t: "a"
          },
          {
            n: "type",
            ti: "XLink_1_0.TypeType",
            t: "a"
          },
          {
            n: "href",
            t: "a"
          },
          {
            n: "role",
            t: "a"
          },
          {
            n: "arcrole",
            t: "a"
          },
          {
            n: "title",
            t: "a"
          },
          {
            n: "show",
            ti: "XLink_1_0.ShowType",
            t: "a"
          },
          {
            n: "actuate",
            ti: "XLink_1_0.ActuateType",
            t: "a"
          }
        ]
      },
      {
        ln: "EnvelopeWithTimePeriodType",
        bti: ".EnvelopeType",
        ps: [
          {
            n: "timePosition",
            col: true,
            ti: ".TimePositionType"
          },
          {
            n: "frame",
            an: {
              lp: "frame"
            },
            t: "a"
          }
        ]
      },
      {
        ln: "PointType",
        bti: ".AbstractGeometricPrimitiveType",
        ps: [
          {
            n: "pos",
            ti: ".DirectPositionType"
          },
          {
            n: "coordinates",
            ti: ".CoordinatesType"
          },
          {
            n: "coord",
            ti: ".CoordType"
          }
        ]
      },
      {
        ln: "DomainSetType",
        ps: [
          {
            n: "geometry",
            mx: false,
            dom: false,
            en: "_Geometry",
            ti: ".AbstractGeometryType",
            t: "er"
          },
          {
            n: "timeObject",
            mx: false,
            dom: false,
            en: "_TimeObject",
            ti: ".AbstractTimeObjectType",
            t: "er"
          },
          {
            n: "remoteSchema",
            an: {
              lp: "remoteSchema",
              ns: "http://www.opengis.net/gml"
            },
            t: "a"
          },
          {
            n: "type",
            ti: "XLink_1_0.TypeType",
            t: "a"
          },
          {
            n: "href",
            t: "a"
          },
          {
            n: "role",
            t: "a"
          },
          {
            n: "arcrole",
            t: "a"
          },
          {
            n: "title",
            t: "a"
          },
          {
            n: "show",
            ti: "XLink_1_0.ShowType",
            t: "a"
          },
          {
            n: "actuate",
            ti: "XLink_1_0.ActuateType",
            t: "a"
          }
        ]
      },
      {
        ln: "GeneralTransformationRefType",
        ps: [
          {
            n: "generalTransformation",
            mx: false,
            dom: false,
            en: "_GeneralTransformation",
            ti: ".AbstractGeneralTransformationType",
            t: "er"
          },
          {
            n: "remoteSchema",
            an: {
              lp: "remoteSchema",
              ns: "http://www.opengis.net/gml"
            },
            t: "a"
          },
          {
            n: "type",
            ti: "XLink_1_0.TypeType",
            t: "a"
          },
          {
            n: "href",
            t: "a"
          },
          {
            n: "role",
            t: "a"
          },
          {
            n: "arcrole",
            t: "a"
          },
          {
            n: "title",
            t: "a"
          },
          {
            n: "show",
            ti: "XLink_1_0.ShowType",
            t: "a"
          },
          {
            n: "actuate",
            ti: "XLink_1_0.ActuateType",
            t: "a"
          }
        ]
      },
      {
        ln: "AbstractTimeComplexType",
        bti: ".AbstractTimeObjectType"
      },
      {
        ln: "OperationMethodType",
        bti: ".OperationMethodBaseType",
        ps: [
          {
            n: "methodID",
            col: true,
            ti: ".IdentifierType"
          },
          {
            n: "remarks",
            ti: ".StringOrRefType"
          },
          {
            n: "methodFormula",
            ti: ".CodeType"
          },
          {
            n: "sourceDimensions",
            ti: "Integer"
          },
          {
            n: "targetDimensions",
            ti: "Integer"
          },
          {
            n: "usesParameter",
            col: true,
            ti: ".AbstractGeneralOperationParameterRefType"
          }
        ]
      },
      {
        ln: "AbstractSolidType",
        bti: ".AbstractGeometricPrimitiveType"
      },
      {
        ln: "TimeCalendarEraPropertyType",
        ps: [
          {
            n: "timeCalendarEra",
            en: "TimeCalendarEra",
            ti: ".TimeCalendarEraType"
          },
          {
            n: "remoteSchema",
            an: {
              lp: "remoteSchema",
              ns: "http://www.opengis.net/gml"
            },
            t: "a"
          },
          {
            n: "type",
            ti: "XLink_1_0.TypeType",
            t: "a"
          },
          {
            n: "href",
            t: "a"
          },
          {
            n: "role",
            t: "a"
          },
          {
            n: "arcrole",
            t: "a"
          },
          {
            n: "title",
            t: "a"
          },
          {
            n: "show",
            ti: "XLink_1_0.ShowType",
            t: "a"
          },
          {
            n: "actuate",
            ti: "XLink_1_0.ActuateType",
            t: "a"
          }
        ]
      },
      {
        ln: "VerticalDatumRefType",
        ps: [
          {
            n: "verticalDatum",
            en: "VerticalDatum",
            ti: ".VerticalDatumType"
          },
          {
            n: "remoteSchema",
            an: {
              lp: "remoteSchema",
              ns: "http://www.opengis.net/gml"
            },
            t: "a"
          },
          {
            n: "type",
            ti: "XLink_1_0.TypeType",
            t: "a"
          },
          {
            n: "href",
            t: "a"
          },
          {
            n: "role",
            t: "a"
          },
          {
            n: "arcrole",
            t: "a"
          },
          {
            n: "title",
            t: "a"
          },
          {
            n: "show",
            ti: "XLink_1_0.ShowType",
            t: "a"
          },
          {
            n: "actuate",
            ti: "XLink_1_0.ActuateType",
            t: "a"
          }
        ]
      },
      {
        ln: "DerivedCRSType",
        bti: ".AbstractGeneralDerivedCRSType",
        ps: [
          {
            n: "derivedCRSType",
            ti: ".DerivedCRSTypeType"
          },
          {
            n: "usesCS",
            ti: ".CoordinateSystemRefType"
          }
        ]
      },
      {
        ln: "MultiCurveType",
        bti: ".AbstractGeometricAggregateType",
        ps: [
          {
            n: "curveMember",
            col: true,
            ti: ".CurvePropertyType"
          },
          {
            n: "curveMembers",
            ti: ".CurveArrayPropertyType"
          }
        ]
      },
      {
        ln: "TopoSolidType",
        bti: ".AbstractTopoPrimitiveType",
        ps: [
          {
            n: "directedFace",
            col: true,
            ti: ".DirectedFacePropertyType"
          }
        ]
      },
      {
        ln: "DictionaryType",
        bti: ".DefinitionType",
        ps: [
          {
            n: "dictionaryEntryOrIndirectEntry",
            col: true,
            mx: false,
            dom: false,
            etis: [
              {
                en: "dictionaryEntry",
                ti: ".DictionaryEntryType"
              },
              {
                en: "indirectEntry",
                ti: ".IndirectEntryType"
              }
            ],
            t: "ers"
          }
        ]
      },
      {
        ln: "TimeClockPropertyType",
        ps: [
          {
            n: "timeClock",
            en: "TimeClock",
            ti: ".TimeClockType"
          },
          {
            n: "remoteSchema",
            an: {
              lp: "remoteSchema",
              ns: "http://www.opengis.net/gml"
            },
            t: "a"
          },
          {
            n: "type",
            ti: "XLink_1_0.TypeType",
            t: "a"
          },
          {
            n: "href",
            t: "a"
          },
          {
            n: "role",
            t: "a"
          },
          {
            n: "arcrole",
            t: "a"
          },
          {
            n: "title",
            t: "a"
          },
          {
            n: "show",
            ti: "XLink_1_0.ShowType",
            t: "a"
          },
          {
            n: "actuate",
            ti: "XLink_1_0.ActuateType",
            t: "a"
          }
        ]
      },
      {
        ln: "GeometryPropertyType",
        ps: [
          {
            n: "geometry",
            mx: false,
            dom: false,
            en: "_Geometry",
            ti: ".AbstractGeometryType",
            t: "er"
          },
          {
            n: "remoteSchema",
            an: {
              lp: "remoteSchema",
              ns: "http://www.opengis.net/gml"
            },
            t: "a"
          },
          {
            n: "type",
            ti: "XLink_1_0.TypeType",
            t: "a"
          },
          {
            n: "href",
            t: "a"
          },
          {
            n: "role",
            t: "a"
          },
          {
            n: "arcrole",
            t: "a"
          },
          {
            n: "title",
            t: "a"
          },
          {
            n: "show",
            ti: "XLink_1_0.ShowType",
            t: "a"
          },
          {
            n: "actuate",
            ti: "XLink_1_0.ActuateType",
            t: "a"
          }
        ]
      },
      {
        ln: "ProjectedCRSType",
        bti: ".AbstractGeneralDerivedCRSType",
        ps: [
          {
            n: "usesCartesianCS",
            ti: ".CartesianCSRefType"
          }
        ]
      },
      {
        ln: "VerticalCRSType",
        bti: ".AbstractReferenceSystemType",
        ps: [
          {
            n: "usesVerticalCS",
            ti: ".VerticalCSRefType"
          },
          {
            n: "usesVerticalDatum",
            ti: ".VerticalDatumRefType"
          }
        ]
      },
      {
        ln: "CylindricalCSRefType",
        ps: [
          {
            n: "cylindricalCS",
            en: "CylindricalCS",
            ti: ".CylindricalCSType"
          },
          {
            n: "remoteSchema",
            an: {
              lp: "remoteSchema",
              ns: "http://www.opengis.net/gml"
            },
            t: "a"
          },
          {
            n: "type",
            ti: "XLink_1_0.TypeType",
            t: "a"
          },
          {
            n: "href",
            t: "a"
          },
          {
            n: "role",
            t: "a"
          },
          {
            n: "arcrole",
            t: "a"
          },
          {
            n: "title",
            t: "a"
          },
          {
            n: "show",
            ti: "XLink_1_0.ShowType",
            t: "a"
          },
          {
            n: "actuate",
            ti: "XLink_1_0.ActuateType",
            t: "a"
          }
        ]
      },
      {
        ln: "PassThroughOperationType",
        bti: ".AbstractCoordinateOperationType",
        ps: [
          {
            n: "modifiedCoordinate",
            col: true,
            ti: "Integer"
          },
          {
            n: "usesOperation",
            ti: ".OperationRefType"
          }
        ]
      },
      {
        ln: "AbstractGeneralOperationParameterRefType",
        ps: [
          {
            n: "generalOperationParameter",
            mx: false,
            dom: false,
            en: "_GeneralOperationParameter",
            ti: ".AbstractGeneralOperationParameterType",
            t: "er"
          },
          {
            n: "remoteSchema",
            an: {
              lp: "remoteSchema",
              ns: "http://www.opengis.net/gml"
            },
            t: "a"
          },
          {
            n: "type",
            ti: "XLink_1_0.TypeType",
            t: "a"
          },
          {
            n: "href",
            t: "a"
          },
          {
            n: "role",
            t: "a"
          },
          {
            n: "arcrole",
            t: "a"
          },
          {
            n: "title",
            t: "a"
          },
          {
            n: "show",
            ti: "XLink_1_0.ShowType",
            t: "a"
          },
          {
            n: "actuate",
            ti: "XLink_1_0.ActuateType",
            t: "a"
          }
        ]
      },
      {
        ln: "TimeEdgeType",
        bti: ".AbstractTimeTopologyPrimitiveType",
        ps: [
          {
            n: "start",
            ti: ".TimeNodePropertyType"
          },
          {
            n: "end",
            ti: ".TimeNodePropertyType"
          },
          {
            n: "extent",
            ti: ".TimePeriodPropertyType"
          }
        ]
      },
      {
        ln: "LocationPropertyType",
        ps: [
          {
            n: "geometry",
            mx: false,
            dom: false,
            en: "_Geometry",
            ti: ".AbstractGeometryType",
            t: "er"
          },
          {
            n: "locationKeyWord",
            en: "LocationKeyWord",
            ti: ".CodeType"
          },
          {
            n: "locationString",
            en: "LocationString",
            ti: ".StringOrRefType"
          },
          {
            n: "_null",
            en: "Null",
            ti: {
              t: "l"
            }
          },
          {
            n: "remoteSchema",
            an: {
              lp: "remoteSchema",
              ns: "http://www.opengis.net/gml"
            },
            t: "a"
          },
          {
            n: "type",
            ti: "XLink_1_0.TypeType",
            t: "a"
          },
          {
            n: "href",
            t: "a"
          },
          {
            n: "role",
            t: "a"
          },
          {
            n: "arcrole",
            t: "a"
          },
          {
            n: "title",
            t: "a"
          },
          {
            n: "show",
            ti: "XLink_1_0.ShowType",
            t: "a"
          },
          {
            n: "actuate",
            ti: "XLink_1_0.ActuateType",
            t: "a"
          }
        ]
      },
      {
        ln: "QuantityPropertyType",
        bti: ".ValuePropertyType"
      },
      {
        ln: "OperationMethodRefType",
        ps: [
          {
            n: "operationMethod",
            en: "OperationMethod",
            ti: ".OperationMethodType"
          },
          {
            n: "remoteSchema",
            an: {
              lp: "remoteSchema",
              ns: "http://www.opengis.net/gml"
            },
            t: "a"
          },
          {
            n: "type",
            ti: "XLink_1_0.TypeType",
            t: "a"
          },
          {
            n: "href",
            t: "a"
          },
          {
            n: "role",
            t: "a"
          },
          {
            n: "arcrole",
            t: "a"
          },
          {
            n: "title",
            t: "a"
          },
          {
            n: "show",
            ti: "XLink_1_0.ShowType",
            t: "a"
          },
          {
            n: "actuate",
            ti: "XLink_1_0.ActuateType",
            t: "a"
          }
        ]
      },
      {
        ln: "MeasureOrNullListType",
        ps: [
          {
            n: "value",
            ti: {
              t: "l"
            },
            t: "v"
          },
          {
            n: "uom",
            an: {
              lp: "uom"
            },
            t: "a"
          }
        ]
      },
      {
        ln: "CurveType",
        bti: ".AbstractCurveType",
        ps: [
          {
            n: "segments",
            ti: ".CurveSegmentArrayPropertyType"
          }
        ]
      },
      {
        ln: "CompositeCurveType",
        bti: ".AbstractCurveType",
        ps: [
          {
            n: "curveMember",
            col: true,
            ti: ".CurvePropertyType"
          }
        ]
      },
      {
        ln: "ConcatenatedOperationRefType",
        ps: [
          {
            n: "concatenatedOperation",
            en: "ConcatenatedOperation",
            ti: ".ConcatenatedOperationType"
          },
          {
            n: "remoteSchema",
            an: {
              lp: "remoteSchema",
              ns: "http://www.opengis.net/gml"
            },
            t: "a"
          },
          {
            n: "type",
            ti: "XLink_1_0.TypeType",
            t: "a"
          },
          {
            n: "href",
            t: "a"
          },
          {
            n: "role",
            t: "a"
          },
          {
            n: "arcrole",
            t: "a"
          },
          {
            n: "title",
            t: "a"
          },
          {
            n: "show",
            ti: "XLink_1_0.ShowType",
            t: "a"
          },
          {
            n: "actuate",
            ti: "XLink_1_0.ActuateType",
            t: "a"
          }
        ]
      },
      {
        ln: "ValueArrayType",
        bti: ".CompositeValueType",
        ps: [
          {
            n: "codeSpace",
            an: {
              lp: "codeSpace"
            },
            t: "a"
          },
          {
            n: "uom",
            an: {
              lp: "uom"
            },
            t: "a"
          }
        ]
      },
      {
        ln: "RangeParametersType",
        ps: [
          {
            n: "_boolean",
            en: "Boolean",
            ti: "Boolean"
          },
          {
            n: "category",
            en: "Category",
            ti: ".CodeType"
          },
          {
            n: "quantity",
            en: "Quantity",
            ti: ".MeasureType"
          },
          {
            n: "count",
            en: "Count",
            ti: "Integer"
          },
          {
            n: "booleanList",
            en: "BooleanList",
            ti: {
              t: "l"
            }
          },
          {
            n: "categoryList",
            en: "CategoryList",
            ti: ".CodeOrNullListType"
          },
          {
            n: "quantityList",
            en: "QuantityList",
            ti: ".MeasureOrNullListType"
          },
          {
            n: "countList",
            en: "CountList",
            ti: {
              t: "l"
            }
          },
          {
            n: "categoryExtent",
            en: "CategoryExtent",
            ti: ".CategoryExtentType"
          },
          {
            n: "quantityExtent",
            en: "QuantityExtent",
            ti: ".QuantityExtentType"
          },
          {
            n: "countExtent",
            en: "CountExtent",
            ti: {
              t: "l"
            }
          },
          {
            n: "compositeValue",
            mx: false,
            dom: false,
            en: "CompositeValue",
            ti: ".CompositeValueType",
            t: "er"
          },
          {
            n: "remoteSchema",
            an: {
              lp: "remoteSchema",
              ns: "http://www.opengis.net/gml"
            },
            t: "a"
          },
          {
            n: "type",
            ti: "XLink_1_0.TypeType",
            t: "a"
          },
          {
            n: "href",
            t: "a"
          },
          {
            n: "role",
            t: "a"
          },
          {
            n: "arcrole",
            t: "a"
          },
          {
            n: "title",
            t: "a"
          },
          {
            n: "show",
            ti: "XLink_1_0.ShowType",
            t: "a"
          },
          {
            n: "actuate",
            ti: "XLink_1_0.ActuateType",
            t: "a"
          }
        ]
      },
      {
        ln: "AbstractGeneralDerivedCRSType",
        bti: ".AbstractReferenceSystemType",
        ps: [
          {
            n: "baseCRS",
            ti: ".CoordinateReferenceSystemRefType"
          },
          {
            n: "definedByConversion",
            ti: ".GeneralConversionRefType"
          }
        ]
      },
      {
        ln: "CategoryExtentType",
        bti: ".CodeOrNullListType"
      },
      {
        ln: "AbstractFeatureType",
        bti: ".AbstractGMLType",
        ps: [
          {
            n: "boundedBy",
            ti: ".BoundingShapeType"
          },
          {
            n: "location",
            mx: false,
            dom: false,
            ti: ".LocationPropertyType",
            t: "er"
          }
        ]
      },
      {
        ln: "LinearCSRefType",
        ps: [
          {
            n: "linearCS",
            en: "LinearCS",
            ti: ".LinearCSType"
          },
          {
            n: "remoteSchema",
            an: {
              lp: "remoteSchema",
              ns: "http://www.opengis.net/gml"
            },
            t: "a"
          },
          {
            n: "type",
            ti: "XLink_1_0.TypeType",
            t: "a"
          },
          {
            n: "href",
            t: "a"
          },
          {
            n: "role",
            t: "a"
          },
          {
            n: "arcrole",
            t: "a"
          },
          {
            n: "title",
            t: "a"
          },
          {
            n: "show",
            ti: "XLink_1_0.ShowType",
            t: "a"
          },
          {
            n: "actuate",
            ti: "XLink_1_0.ActuateType",
            t: "a"
          }
        ]
      },
      {
        ln: "MultiPolygonType",
        bti: ".AbstractGeometricAggregateType",
        ps: [
          {
            n: "polygonMember",
            col: true,
            ti: ".PolygonPropertyType"
          }
        ]
      },
      {
        ln: "BagType",
        bti: ".AbstractGMLType",
        ps: [
          {
            n: "member",
            col: true,
            ti: ".AssociationType"
          },
          {
            n: "members",
            ti: ".ArrayAssociationType"
          }
        ]
      },
      {
        ln: "MeasureListType",
        ps: [
          {
            n: "value",
            ti: {
              t: "l",
              bti: "Double"
            },
            t: "v"
          },
          {
            n: "uom",
            an: {
              lp: "uom"
            },
            t: "a"
          }
        ]
      },
      {
        ln: "BezierType",
        bti: ".BSplineType"
      },
      {
        ln: "CountPropertyType",
        bti: ".ValuePropertyType"
      },
      {
        ln: "ConversionType",
        bti: ".AbstractGeneralConversionType",
        ps: [
          {
            n: "usesMethod",
            ti: ".OperationMethodRefType"
          },
          {
            n: "usesValue",
            col: true,
            ti: ".ParameterValueType"
          }
        ]
      },
      {
        ln: "AssociationType",
        ps: [
          {
            n: "object",
            mx: false,
            dom: false,
            en: "_Object",
            ti: "AnyType",
            t: "er"
          },
          {
            n: "remoteSchema",
            an: {
              lp: "remoteSchema",
              ns: "http://www.opengis.net/gml"
            },
            t: "a"
          },
          {
            n: "type",
            ti: "XLink_1_0.TypeType",
            t: "a"
          },
          {
            n: "href",
            t: "a"
          },
          {
            n: "role",
            t: "a"
          },
          {
            n: "arcrole",
            t: "a"
          },
          {
            n: "title",
            t: "a"
          },
          {
            n: "show",
            ti: "XLink_1_0.ShowType",
            t: "a"
          },
          {
            n: "actuate",
            ti: "XLink_1_0.ActuateType",
            t: "a"
          }
        ]
      },
      {
        ln: "RelativeInternalPositionalAccuracyType",
        bti: ".AbstractPositionalAccuracyType",
        ps: [
          {
            n: "result",
            ti: ".MeasureType"
          }
        ]
      },
      {
        ln: "PassThroughOperationRefType",
        ps: [
          {
            n: "passThroughOperation",
            en: "PassThroughOperation",
            ti: ".PassThroughOperationType"
          },
          {
            n: "remoteSchema",
            an: {
              lp: "remoteSchema",
              ns: "http://www.opengis.net/gml"
            },
            t: "a"
          },
          {
            n: "type",
            ti: "XLink_1_0.TypeType",
            t: "a"
          },
          {
            n: "href",
            t: "a"
          },
          {
            n: "role",
            t: "a"
          },
          {
            n: "arcrole",
            t: "a"
          },
          {
            n: "title",
            t: "a"
          },
          {
            n: "show",
            ti: "XLink_1_0.ShowType",
            t: "a"
          },
          {
            n: "actuate",
            ti: "XLink_1_0.ActuateType",
            t: "a"
          }
        ]
      },
      {
        ln: "TimePeriodPropertyType",
        ps: [
          {
            n: "timePeriod",
            en: "TimePeriod",
            ti: ".TimePeriodType"
          },
          {
            n: "remoteSchema",
            an: {
              lp: "remoteSchema",
              ns: "http://www.opengis.net/gml"
            },
            t: "a"
          },
          {
            n: "type",
            ti: "XLink_1_0.TypeType",
            t: "a"
          },
          {
            n: "href",
            t: "a"
          },
          {
            n: "role",
            t: "a"
          },
          {
            n: "arcrole",
            t: "a"
          },
          {
            n: "title",
            t: "a"
          },
          {
            n: "show",
            ti: "XLink_1_0.ShowType",
            t: "a"
          },
          {
            n: "actuate",
            ti: "XLink_1_0.ActuateType",
            t: "a"
          }
        ]
      },
      {
        ln: "GeodeticDatumRefType",
        ps: [
          {
            n: "geodeticDatum",
            en: "GeodeticDatum",
            ti: ".GeodeticDatumType"
          },
          {
            n: "remoteSchema",
            an: {
              lp: "remoteSchema",
              ns: "http://www.opengis.net/gml"
            },
            t: "a"
          },
          {
            n: "type",
            ti: "XLink_1_0.TypeType",
            t: "a"
          },
          {
            n: "href",
            t: "a"
          },
          {
            n: "role",
            t: "a"
          },
          {
            n: "arcrole",
            t: "a"
          },
          {
            n: "title",
            t: "a"
          },
          {
            n: "show",
            ti: "XLink_1_0.ShowType",
            t: "a"
          },
          {
            n: "actuate",
            ti: "XLink_1_0.ActuateType",
            t: "a"
          }
        ]
      },
      {
        ln: "ConventionalUnitType",
        bti: ".UnitDefinitionType",
        ps: [
          {
            n: "conversionToPreferredUnit",
            ti: ".ConversionToPreferredUnitType"
          },
          {
            n: "roughConversionToPreferredUnit",
            ti: ".ConversionToPreferredUnitType"
          },
          {
            n: "derivationUnitTerm",
            col: true,
            ti: ".DerivationUnitTermType"
          }
        ]
      },
      {
        ln: "TopoPointPropertyType",
        ps: [
          {
            n: "topoPoint",
            en: "TopoPoint",
            ti: ".TopoPointType"
          }
        ]
      },
      {
        ln: "PrimeMeridianBaseType",
        bti: ".DefinitionType"
      },
      {
        ln: "ClothoidType.RefLocation",
        tn: null,
        ps: [
          {
            n: "affinePlacement",
            en: "AffinePlacement",
            ti: ".AffinePlacementType"
          }
        ]
      },
      {
        ln: "GridEnvelopeType",
        ps: [
          {
            n: "low",
            ti: {
              t: "l",
              bti: "Integer"
            }
          },
          {
            n: "high",
            ti: {
              t: "l",
              bti: "Integer"
            }
          }
        ]
      },
      {
        ln: "MultiPolygonPropertyType",
        ps: [
          {
            n: "multiPolygon",
            en: "MultiPolygon",
            ti: ".MultiPolygonType"
          },
          {
            n: "remoteSchema",
            an: {
              lp: "remoteSchema",
              ns: "http://www.opengis.net/gml"
            },
            t: "a"
          },
          {
            n: "type",
            ti: "XLink_1_0.TypeType",
            t: "a"
          },
          {
            n: "href",
            t: "a"
          },
          {
            n: "role",
            t: "a"
          },
          {
            n: "arcrole",
            t: "a"
          },
          {
            n: "title",
            t: "a"
          },
          {
            n: "show",
            ti: "XLink_1_0.ShowType",
            t: "a"
          },
          {
            n: "actuate",
            ti: "XLink_1_0.ActuateType",
            t: "a"
          }
        ]
      },
      {
        ln: "PolygonPatchType",
        bti: ".AbstractSurfacePatchType",
        ps: [
          {
            n: "exterior",
            mx: false,
            dom: false,
            ti: ".AbstractRingPropertyType",
            t: "er"
          },
          {
            n: "interior",
            col: true,
            mx: false,
            dom: false,
            ti: ".AbstractRingPropertyType",
            t: "er"
          },
          {
            n: "interpolation",
            an: {
              lp: "interpolation"
            },
            t: "a"
          }
        ]
      },
      {
        ln: "CartesianCSRefType",
        ps: [
          {
            n: "cartesianCS",
            en: "CartesianCS",
            ti: ".CartesianCSType"
          },
          {
            n: "remoteSchema",
            an: {
              lp: "remoteSchema",
              ns: "http://www.opengis.net/gml"
            },
            t: "a"
          },
          {
            n: "type",
            ti: "XLink_1_0.TypeType",
            t: "a"
          },
          {
            n: "href",
            t: "a"
          },
          {
            n: "role",
            t: "a"
          },
          {
            n: "arcrole",
            t: "a"
          },
          {
            n: "title",
            t: "a"
          },
          {
            n: "show",
            ti: "XLink_1_0.ShowType",
            t: "a"
          },
          {
            n: "actuate",
            ti: "XLink_1_0.ActuateType",
            t: "a"
          }
        ]
      },
      {
        ln: "StringOrRefType",
        ps: [
          {
            n: "value",
            t: "v"
          },
          {
            n: "remoteSchema",
            an: {
              lp: "remoteSchema",
              ns: "http://www.opengis.net/gml"
            },
            t: "a"
          },
          {
            n: "type",
            ti: "XLink_1_0.TypeType",
            t: "a"
          },
          {
            n: "href",
            t: "a"
          },
          {
            n: "role",
            t: "a"
          },
          {
            n: "arcrole",
            t: "a"
          },
          {
            n: "title",
            t: "a"
          },
          {
            n: "show",
            ti: "XLink_1_0.ShowType",
            t: "a"
          },
          {
            n: "actuate",
            ti: "XLink_1_0.ActuateType",
            t: "a"
          }
        ]
      },
      {
        ln: "StyleVariationType",
        ps: [
          {
            n: "value",
            t: "v"
          },
          {
            n: "styleProperty",
            an: {
              lp: "styleProperty"
            },
            t: "a"
          },
          {
            n: "featurePropertyRange",
            an: {
              lp: "featurePropertyRange"
            },
            t: "a"
          }
        ]
      },
      {
        ln: "PixelInCellType",
        bti: ".CodeType"
      },
      {
        ln: "SolidPropertyType",
        ps: [
          {
            n: "solid",
            mx: false,
            dom: false,
            en: "_Solid",
            ti: ".AbstractSolidType",
            t: "er"
          },
          {
            n: "remoteSchema",
            an: {
              lp: "remoteSchema",
              ns: "http://www.opengis.net/gml"
            },
            t: "a"
          },
          {
            n: "type",
            ti: "XLink_1_0.TypeType",
            t: "a"
          },
          {
            n: "href",
            t: "a"
          },
          {
            n: "role",
            t: "a"
          },
          {
            n: "arcrole",
            t: "a"
          },
          {
            n: "title",
            t: "a"
          },
          {
            n: "show",
            ti: "XLink_1_0.ShowType",
            t: "a"
          },
          {
            n: "actuate",
            ti: "XLink_1_0.ActuateType",
            t: "a"
          }
        ]
      },
      {
        ln: "PolygonPropertyType",
        ps: [
          {
            n: "polygon",
            en: "Polygon",
            ti: ".PolygonType"
          },
          {
            n: "remoteSchema",
            an: {
              lp: "remoteSchema",
              ns: "http://www.opengis.net/gml"
            },
            t: "a"
          },
          {
            n: "type",
            ti: "XLink_1_0.TypeType",
            t: "a"
          },
          {
            n: "href",
            t: "a"
          },
          {
            n: "role",
            t: "a"
          },
          {
            n: "arcrole",
            t: "a"
          },
          {
            n: "title",
            t: "a"
          },
          {
            n: "show",
            ti: "XLink_1_0.ShowType",
            t: "a"
          },
          {
            n: "actuate",
            ti: "XLink_1_0.ActuateType",
            t: "a"
          }
        ]
      },
      {
        ln: "ValuePropertyType",
        ps: [
          {
            n: "_boolean",
            en: "Boolean",
            ti: "Boolean"
          },
          {
            n: "category",
            en: "Category",
            ti: ".CodeType"
          },
          {
            n: "quantity",
            en: "Quantity",
            ti: ".MeasureType"
          },
          {
            n: "count",
            en: "Count",
            ti: "Integer"
          },
          {
            n: "booleanList",
            en: "BooleanList",
            ti: {
              t: "l"
            }
          },
          {
            n: "categoryList",
            en: "CategoryList",
            ti: ".CodeOrNullListType"
          },
          {
            n: "quantityList",
            en: "QuantityList",
            ti: ".MeasureOrNullListType"
          },
          {
            n: "countList",
            en: "CountList",
            ti: {
              t: "l"
            }
          },
          {
            n: "categoryExtent",
            en: "CategoryExtent",
            ti: ".CategoryExtentType"
          },
          {
            n: "quantityExtent",
            en: "QuantityExtent",
            ti: ".QuantityExtentType"
          },
          {
            n: "countExtent",
            en: "CountExtent",
            ti: {
              t: "l"
            }
          },
          {
            n: "compositeValue",
            mx: false,
            dom: false,
            en: "CompositeValue",
            ti: ".CompositeValueType",
            t: "er"
          },
          {
            n: "object",
            mx: false,
            dom: false,
            en: "_Object",
            ti: "AnyType",
            t: "er"
          },
          {
            n: "_null",
            en: "Null",
            ti: {
              t: "l"
            }
          },
          {
            n: "remoteSchema",
            an: {
              lp: "remoteSchema",
              ns: "http://www.opengis.net/gml"
            },
            t: "a"
          },
          {
            n: "type",
            ti: "XLink_1_0.TypeType",
            t: "a"
          },
          {
            n: "href",
            t: "a"
          },
          {
            n: "role",
            t: "a"
          },
          {
            n: "arcrole",
            t: "a"
          },
          {
            n: "title",
            t: "a"
          },
          {
            n: "show",
            ti: "XLink_1_0.ShowType",
            t: "a"
          },
          {
            n: "actuate",
            ti: "XLink_1_0.ActuateType",
            t: "a"
          }
        ]
      },
      {
        ln: "OperationParameterGroupType",
        bti: ".OperationParameterGroupBaseType",
        ps: [
          {
            n: "groupID",
            col: true,
            ti: ".IdentifierType"
          },
          {
            n: "remarks",
            ti: ".StringOrRefType"
          },
          {
            n: "maximumOccurs",
            ti: "Integer"
          },
          {
            n: "includesParameter",
            col: true,
            ti: ".AbstractGeneralOperationParameterRefType"
          }
        ]
      },
      {
        ln: "TriangleType",
        bti: ".AbstractSurfacePatchType",
        ps: [
          {
            n: "exterior",
            mx: false,
            dom: false,
            ti: ".AbstractRingPropertyType",
            t: "er"
          },
          {
            n: "interpolation",
            an: {
              lp: "interpolation"
            },
            t: "a"
          }
        ]
      },
      {
        ln: "TopoPrimitiveArrayAssociationType",
        ps: [
          {
            n: "topoPrimitive",
            col: true,
            mx: false,
            dom: false,
            en: "_TopoPrimitive",
            ti: ".AbstractTopoPrimitiveType",
            t: "er"
          }
        ]
      },
      {
        ln: "CompositeSurfaceType",
        bti: ".AbstractSurfaceType",
        ps: [
          {
            n: "surfaceMember",
            col: true,
            ti: ".SurfacePropertyType"
          }
        ]
      },
      {
        ln: "CircleByCenterPointType",
        bti: ".ArcByCenterPointType"
      },
      {
        ln: "CoverageFunctionType",
        ps: [
          {
            n: "mappingRule",
            en: "MappingRule",
            ti: ".StringOrRefType"
          },
          {
            n: "gridFunction",
            mx: false,
            dom: false,
            en: "GridFunction",
            ti: ".GridFunctionType",
            t: "er"
          }
        ]
      },
      {
        ln: "CurveSegmentArrayPropertyType",
        ps: [
          {
            n: "curveSegment",
            col: true,
            mx: false,
            dom: false,
            en: "_CurveSegment",
            ti: ".AbstractCurveSegmentType",
            t: "er"
          }
        ]
      },
      {
        ln: "PointArrayPropertyType",
        ps: [
          {
            n: "point",
            col: true,
            en: "Point",
            ti: ".PointType"
          }
        ]
      },
      {
        ln: "GenericMetaDataType",
        bti: ".AbstractMetaDataType",
        ps: [
          {
            n: "contentOverrideForGenericMetaDataType",
            t: "ae"
          }
        ]
      },
      {
        ln: "SurfacePatchArrayPropertyType",
        ps: [
          {
            n: "surfacePatch",
            col: true,
            mx: false,
            dom: false,
            en: "_SurfacePatch",
            ti: ".AbstractSurfacePatchType",
            t: "er"
          }
        ]
      },
      {
        ln: "DefinitionType",
        bti: ".AbstractGMLType"
      },
      {
        ln: "CodeListType",
        ps: [
          {
            n: "value",
            ti: {
              t: "l"
            },
            t: "v"
          },
          {
            n: "codeSpace",
            an: {
              lp: "codeSpace"
            },
            t: "a"
          }
        ]
      },
      {
        ln: "EngineeringCRSType",
        bti: ".AbstractReferenceSystemType",
        ps: [
          {
            n: "usesCS",
            ti: ".CoordinateSystemRefType"
          },
          {
            n: "usesEngineeringDatum",
            ti: ".EngineeringDatumRefType"
          }
        ]
      },
      {
        ln: "TargetPropertyType",
        ps: [
          {
            n: "feature",
            mx: false,
            en: "_Feature",
            ti: ".AbstractFeatureType",
            t: "er"
          },
          {
            n: "geometry",
            mx: false,
            dom: false,
            en: "_Geometry",
            ti: ".AbstractGeometryType",
            t: "er"
          },
          {
            n: "remoteSchema",
            an: {
              lp: "remoteSchema",
              ns: "http://www.opengis.net/gml"
            },
            t: "a"
          },
          {
            n: "type",
            ti: "XLink_1_0.TypeType",
            t: "a"
          },
          {
            n: "href",
            t: "a"
          },
          {
            n: "role",
            t: "a"
          },
          {
            n: "arcrole",
            t: "a"
          },
          {
            n: "title",
            t: "a"
          },
          {
            n: "show",
            ti: "XLink_1_0.ShowType",
            t: "a"
          },
          {
            n: "actuate",
            ti: "XLink_1_0.ActuateType",
            t: "a"
          }
        ]
      },
      {
        ln: "GeographicCRSType",
        bti: ".AbstractReferenceSystemType",
        ps: [
          {
            n: "usesEllipsoidalCS",
            ti: ".EllipsoidalCSRefType"
          },
          {
            n: "usesGeodeticDatum",
            ti: ".GeodeticDatumRefType"
          }
        ]
      },
      {
        ln: "AbstractStyleType",
        bti: ".AbstractGMLType"
      },
      {
        ln: "GeometricPrimitivePropertyType",
        ps: [
          {
            n: "geometricPrimitive",
            mx: false,
            dom: false,
            en: "_GeometricPrimitive",
            ti: ".AbstractGeometricPrimitiveType",
            t: "er"
          },
          {
            n: "remoteSchema",
            an: {
              lp: "remoteSchema",
              ns: "http://www.opengis.net/gml"
            },
            t: "a"
          },
          {
            n: "type",
            ti: "XLink_1_0.TypeType",
            t: "a"
          },
          {
            n: "href",
            t: "a"
          },
          {
            n: "role",
            t: "a"
          },
          {
            n: "arcrole",
            t: "a"
          },
          {
            n: "title",
            t: "a"
          },
          {
            n: "show",
            ti: "XLink_1_0.ShowType",
            t: "a"
          },
          {
            n: "actuate",
            ti: "XLink_1_0.ActuateType",
            t: "a"
          }
        ]
      },
      {
        ln: "SurfaceArrayPropertyType",
        ps: [
          {
            n: "surface",
            col: true,
            mx: false,
            dom: false,
            en: "_Surface",
            ti: ".AbstractSurfaceType",
            t: "er"
          }
        ]
      },
      {
        ln: "OperationRefType",
        ps: [
          {
            n: "operation",
            mx: false,
            dom: false,
            en: "_Operation",
            ti: ".AbstractCoordinateOperationType",
            t: "er"
          },
          {
            n: "remoteSchema",
            an: {
              lp: "remoteSchema",
              ns: "http://www.opengis.net/gml"
            },
            t: "a"
          },
          {
            n: "type",
            ti: "XLink_1_0.TypeType",
            t: "a"
          },
          {
            n: "href",
            t: "a"
          },
          {
            n: "role",
            t: "a"
          },
          {
            n: "arcrole",
            t: "a"
          },
          {
            n: "title",
            t: "a"
          },
          {
            n: "show",
            ti: "XLink_1_0.ShowType",
            t: "a"
          },
          {
            n: "actuate",
            ti: "XLink_1_0.ActuateType",
            t: "a"
          }
        ]
      },
      {
        ln: "AbstractCoordinateSystemBaseType",
        bti: ".DefinitionType"
      },
      {
        ln: "DynamicFeatureCollectionType",
        bti: ".FeatureCollectionType",
        ps: [
          {
            n: "validTime",
            ti: ".TimePrimitivePropertyType"
          },
          {
            n: "history",
            mx: false,
            dom: false,
            ti: ".HistoryPropertyType",
            t: "er"
          },
          {
            n: "dataSource",
            ti: ".StringOrRefType"
          }
        ]
      },
      {
        ln: "FeatureStylePropertyType",
        ps: [
          {
            n: "featureStyle",
            en: "FeatureStyle",
            ti: ".FeatureStyleType"
          },
          {
            n: "about",
            an: {
              lp: "about"
            },
            t: "a"
          },
          {
            n: "remoteSchema",
            an: {
              lp: "remoteSchema",
              ns: "http://www.opengis.net/gml"
            },
            t: "a"
          },
          {
            n: "type",
            ti: "XLink_1_0.TypeType",
            t: "a"
          },
          {
            n: "href",
            t: "a"
          },
          {
            n: "role",
            t: "a"
          },
          {
            n: "arcrole",
            t: "a"
          },
          {
            n: "title",
            t: "a"
          },
          {
            n: "show",
            ti: "XLink_1_0.ShowType",
            t: "a"
          },
          {
            n: "actuate",
            ti: "XLink_1_0.ActuateType",
            t: "a"
          }
        ]
      },
      {
        ln: "ScaleType",
        bti: ".MeasureType"
      },
      {
        ln: "CategoryPropertyType",
        bti: ".ValuePropertyType"
      },
      {
        ln: "AbstractGeometricPrimitiveType",
        bti: ".AbstractGeometryType"
      },
      {
        ln: "TimePeriodType",
        bti: ".AbstractTimeGeometricPrimitiveType",
        ps: [
          {
            n: "beginPosition",
            ti: ".TimePositionType"
          },
          {
            n: "begin",
            ti: ".TimeInstantPropertyType"
          },
          {
            n: "endPosition",
            ti: ".TimePositionType"
          },
          {
            n: "end",
            ti: ".TimeInstantPropertyType"
          },
          {
            n: "duration"
          },
          {
            n: "timeInterval",
            ti: ".TimeIntervalLengthType"
          }
        ]
      },
      {
        ln: "GeometryStyleType",
        bti: ".BaseStyleDescriptorType",
        ps: [
          {
            n: "symbol",
            ti: ".SymbolType"
          },
          {
            n: "style"
          },
          {
            n: "labelStyle",
            ti: ".LabelStylePropertyType"
          },
          {
            n: "geometryProperty",
            an: {
              lp: "geometryProperty"
            },
            t: "a"
          },
          {
            n: "geometryType",
            an: {
              lp: "geometryType"
            },
            t: "a"
          }
        ]
      },
      {
        ln: "LinearCSType",
        bti: ".AbstractCoordinateSystemType"
      },
      {
        ln: "CoordinateSystemAxisType",
        bti: ".CoordinateSystemAxisBaseType",
        ps: [
          {
            n: "axisID",
            col: true,
            ti: ".IdentifierType"
          },
          {
            n: "remarks",
            ti: ".StringOrRefType"
          },
          {
            n: "axisAbbrev",
            ti: ".CodeType"
          },
          {
            n: "axisDirection",
            ti: ".CodeType"
          },
          {
            n: "uom",
            an: {
              lp: "uom",
              ns: "http://www.opengis.net/gml"
            },
            t: "a"
          }
        ]
      },
      {
        ln: "ReferenceType",
        ps: [
          {
            n: "remoteSchema",
            an: {
              lp: "remoteSchema",
              ns: "http://www.opengis.net/gml"
            },
            t: "a"
          },
          {
            n: "type",
            ti: "XLink_1_0.TypeType",
            t: "a"
          },
          {
            n: "href",
            t: "a"
          },
          {
            n: "role",
            t: "a"
          },
          {
            n: "arcrole",
            t: "a"
          },
          {
            n: "title",
            t: "a"
          },
          {
            n: "show",
            ti: "XLink_1_0.ShowType",
            t: "a"
          },
          {
            n: "actuate",
            ti: "XLink_1_0.ActuateType",
            t: "a"
          }
        ]
      },
      {
        ln: "SphereType",
        bti: ".AbstractGriddedSurfaceType",
        ps: [
          {
            n: "horizontalCURVETYPE",
            an: {
              lp: "horizontalCurveType"
            },
            t: "a"
          },
          {
            n: "verticalCURVETYPE",
            an: {
              lp: "verticalCurveType"
            },
            t: "a"
          }
        ]
      },
      {
        ln: "OrientableCurveType",
        bti: ".AbstractCurveType",
        ps: [
          {
            n: "baseCurve",
            ti: ".CurvePropertyType"
          },
          {
            n: "orientation",
            an: {
              lp: "orientation"
            },
            t: "a"
          }
        ]
      },
      {
        ln: "SolidType",
        bti: ".AbstractSolidType",
        ps: [
          {
            n: "exterior",
            ti: ".SurfacePropertyType"
          },
          {
            n: "interior",
            col: true,
            ti: ".SurfacePropertyType"
          }
        ]
      },
      {
        ln: "TinType",
        bti: ".TriangulatedSurfaceType",
        ps: [
          {
            n: "stopLines",
            col: true,
            ti: ".LineStringSegmentArrayPropertyType"
          },
          {
            n: "breakLines",
            col: true,
            ti: ".LineStringSegmentArrayPropertyType"
          },
          {
            n: "maxLength",
            ti: ".LengthType"
          },
          {
            n: "controlPoint",
            ti: ".TinType.ControlPoint"
          }
        ]
      },
      {
        ln: "TimeTopologyComplexType",
        bti: ".AbstractTimeComplexType",
        ps: [
          {
            n: "primitive",
            col: true,
            ti: ".TimeTopologyPrimitivePropertyType"
          }
        ]
      },
      {
        ln: "TimePositionType",
        ps: [
          {
            n: "value",
            ti: {
              t: "l"
            },
            t: "v"
          },
          {
            n: "frame",
            an: {
              lp: "frame"
            },
            t: "a"
          },
          {
            n: "calendarEraName",
            an: {
              lp: "calendarEraName"
            },
            t: "a"
          },
          {
            n: "indeterminatePosition",
            an: {
              lp: "indeterminatePosition"
            },
            t: "a"
          }
        ]
      },
      {
        ln: "TimeCoordinateSystemType",
        bti: ".AbstractTimeReferenceSystemType",
        ps: [
          {
            n: "originPosition",
            ti: ".TimePositionType"
          },
          {
            n: "origin",
            ti: ".TimeInstantPropertyType"
          },
          {
            n: "interval",
            ti: ".TimeIntervalLengthType"
          }
        ]
      },
      {
        ln: "DegreesType",
        ps: [
          {
            n: "value",
            ti: "Int",
            t: "v"
          },
          {
            n: "direction",
            an: {
              lp: "direction"
            },
            t: "a"
          }
        ]
      },
      {
        ln: "AbstractDatumBaseType",
        bti: ".DefinitionType"
      },
      {
        ln: "RectifiedGridCoverageType",
        bti: ".AbstractDiscreteCoverageType"
      },
      {
        ln: "TriangulatedSurfaceType",
        bti: ".SurfaceType"
      },
      {
        ln: "BoundedFeatureType",
        bti: ".AbstractFeatureType"
      },
      {
        ln: "AbstractGeometryType",
        bti: ".AbstractGMLType",
        ps: [
          {
            n: "gid",
            an: {
              lp: "gid"
            },
            t: "a"
          },
          {
            n: "srsName",
            an: {
              lp: "srsName"
            },
            t: "a"
          },
          {
            n: "srsDimension",
            ti: "Integer",
            an: {
              lp: "srsDimension"
            },
            t: "a"
          },
          {
            n: "axisLabels",
            ti: {
              t: "l"
            },
            an: {
              lp: "axisLabels"
            },
            t: "a"
          },
          {
            n: "uomLabels",
            ti: {
              t: "l"
            },
            an: {
              lp: "uomLabels"
            },
            t: "a"
          }
        ]
      },
      {
        ln: "HistoryPropertyType",
        ps: [
          {
            n: "timeSlice",
            col: true,
            mx: false,
            dom: false,
            en: "_TimeSlice",
            ti: ".AbstractTimeSliceType",
            t: "er"
          }
        ]
      },
      {
        ln: "SurfaceType",
        bti: ".AbstractSurfaceType",
        ps: [
          {
            n: "patches",
            mx: false,
            dom: false,
            ti: ".SurfacePatchArrayPropertyType",
            t: "er"
          }
        ]
      },
      {
        ln: "AbstractGriddedSurfaceType",
        bti: ".AbstractParametricCurveSurfaceType",
        ps: [
          {
            n: "row",
            col: true,
            ti: ".AbstractGriddedSurfaceType.Row"
          },
          {
            n: "rows",
            ti: "Integer"
          },
          {
            n: "columns",
            ti: "Integer"
          }
        ]
      },
      {
        ln: "TimeCalendarEraType",
        bti: ".DefinitionType",
        ps: [
          {
            n: "referenceEvent",
            ti: ".StringOrRefType"
          },
          {
            n: "referenceDate",
            ti: "Calendar"
          },
          {
            n: "julianReference",
            ti: "Decimal"
          },
          {
            n: "epochOfUse",
            ti: ".TimePeriodPropertyType"
          }
        ]
      },
      {
        ln: "ArcType",
        bti: ".ArcStringType"
      },
      {
        ln: "GridLengthType",
        bti: ".MeasureType"
      },
      {
        ln: "DirectedTopoSolidPropertyType",
        ps: [
          {
            n: "topoSolid",
            en: "TopoSolid",
            ti: ".TopoSolidType"
          },
          {
            n: "orientation",
            an: {
              lp: "orientation"
            },
            t: "a"
          },
          {
            n: "remoteSchema",
            an: {
              lp: "remoteSchema",
              ns: "http://www.opengis.net/gml"
            },
            t: "a"
          },
          {
            n: "type",
            ti: "XLink_1_0.TypeType",
            t: "a"
          },
          {
            n: "href",
            t: "a"
          },
          {
            n: "role",
            t: "a"
          },
          {
            n: "arcrole",
            t: "a"
          },
          {
            n: "title",
            t: "a"
          },
          {
            n: "show",
            ti: "XLink_1_0.ShowType",
            t: "a"
          },
          {
            n: "actuate",
            ti: "XLink_1_0.ActuateType",
            t: "a"
          }
        ]
      },
      {
        ln: "AbstractContinuousCoverageType",
        bti: ".AbstractCoverageType",
        ps: [
          {
            n: "coverageFunction",
            ti: ".CoverageFunctionType"
          }
        ]
      },
      {
        ln: "DefinitionProxyType",
        bti: ".DefinitionType",
        ps: [
          {
            n: "definitionRef",
            ti: ".ReferenceType"
          }
        ]
      },
      {
        ln: "UnitOfMeasureType",
        ps: [
          {
            n: "uom",
            an: {
              lp: "uom"
            },
            t: "a"
          }
        ]
      },
      {
        ln: "DirectedNodePropertyType",
        ps: [
          {
            n: "node",
            en: "Node",
            ti: ".NodeType"
          },
          {
            n: "orientation",
            an: {
              lp: "orientation"
            },
            t: "a"
          },
          {
            n: "remoteSchema",
            an: {
              lp: "remoteSchema",
              ns: "http://www.opengis.net/gml"
            },
            t: "a"
          },
          {
            n: "type",
            ti: "XLink_1_0.TypeType",
            t: "a"
          },
          {
            n: "href",
            t: "a"
          },
          {
            n: "role",
            t: "a"
          },
          {
            n: "arcrole",
            t: "a"
          },
          {
            n: "title",
            t: "a"
          },
          {
            n: "show",
            ti: "XLink_1_0.ShowType",
            t: "a"
          },
          {
            n: "actuate",
            ti: "XLink_1_0.ActuateType",
            t: "a"
          }
        ]
      },
      {
        ln: "DerivationUnitTermType",
        bti: ".UnitOfMeasureType",
        ps: [
          {
            n: "exponent",
            ti: "Integer",
            an: {
              lp: "exponent"
            },
            t: "a"
          }
        ]
      },
      {
        ln: "RingType",
        bti: ".AbstractRingType",
        ps: [
          {
            n: "curveMember",
            col: true,
            ti: ".CurvePropertyType"
          }
        ]
      },
      {
        ln: "MultiPointType",
        bti: ".AbstractGeometricAggregateType",
        ps: [
          {
            n: "pointMember",
            col: true,
            ti: ".PointPropertyType"
          },
          {
            n: "pointMembers",
            ti: ".PointArrayPropertyType"
          }
        ]
      },
      {
        ln: "CovarianceMatrixType",
        bti: ".AbstractPositionalAccuracyType",
        ps: [
          {
            n: "unitOfMeasure",
            col: true,
            ti: ".UnitOfMeasureType"
          },
          {
            n: "includesElement",
            col: true,
            ti: ".CovarianceElementType"
          }
        ]
      },
      {
        ln: "CoordinateSystemAxisRefType",
        ps: [
          {
            n: "coordinateSystemAxis",
            en: "CoordinateSystemAxis",
            ti: ".CoordinateSystemAxisType"
          },
          {
            n: "remoteSchema",
            an: {
              lp: "remoteSchema",
              ns: "http://www.opengis.net/gml"
            },
            t: "a"
          },
          {
            n: "type",
            ti: "XLink_1_0.TypeType",
            t: "a"
          },
          {
            n: "href",
            t: "a"
          },
          {
            n: "role",
            t: "a"
          },
          {
            n: "arcrole",
            t: "a"
          },
          {
            n: "title",
            t: "a"
          },
          {
            n: "show",
            ti: "XLink_1_0.ShowType",
            t: "a"
          },
          {
            n: "actuate",
            ti: "XLink_1_0.ActuateType",
            t: "a"
          }
        ]
      },
      {
        ln: "GeometricComplexType",
        bti: ".AbstractGeometryType",
        ps: [
          {
            n: "element",
            col: true,
            ti: ".GeometricPrimitivePropertyType"
          }
        ]
      },
      {
        ln: "AbstractReferenceSystemType",
        bti: ".AbstractReferenceSystemBaseType",
        ps: [
          {
            n: "srsID",
            col: true,
            ti: ".IdentifierType"
          },
          {
            n: "remarks",
            ti: ".StringOrRefType"
          },
          {
            n: "validArea",
            ti: ".ExtentType"
          },
          {
            n: "scope"
          }
        ]
      },
      {
        ln: "OperationParameterRefType",
        ps: [
          {
            n: "operationParameter",
            en: "OperationParameter",
            ti: ".OperationParameterType"
          },
          {
            n: "remoteSchema",
            an: {
              lp: "remoteSchema",
              ns: "http://www.opengis.net/gml"
            },
            t: "a"
          },
          {
            n: "type",
            ti: "XLink_1_0.TypeType",
            t: "a"
          },
          {
            n: "href",
            t: "a"
          },
          {
            n: "role",
            t: "a"
          },
          {
            n: "arcrole",
            t: "a"
          },
          {
            n: "title",
            t: "a"
          },
          {
            n: "show",
            ti: "XLink_1_0.ShowType",
            t: "a"
          },
          {
            n: "actuate",
            ti: "XLink_1_0.ActuateType",
            t: "a"
          }
        ]
      },
      {
        ln: "AbstractSurfaceType",
        bti: ".AbstractGeometricPrimitiveType"
      },
      {
        ln: "SingleOperationRefType",
        ps: [
          {
            n: "singleOperation",
            mx: false,
            dom: false,
            en: "_SingleOperation",
            ti: ".AbstractCoordinateOperationType",
            t: "er"
          },
          {
            n: "remoteSchema",
            an: {
              lp: "remoteSchema",
              ns: "http://www.opengis.net/gml"
            },
            t: "a"
          },
          {
            n: "type",
            ti: "XLink_1_0.TypeType",
            t: "a"
          },
          {
            n: "href",
            t: "a"
          },
          {
            n: "role",
            t: "a"
          },
          {
            n: "arcrole",
            t: "a"
          },
          {
            n: "title",
            t: "a"
          },
          {
            n: "show",
            ti: "XLink_1_0.ShowType",
            t: "a"
          },
          {
            n: "actuate",
            ti: "XLink_1_0.ActuateType",
            t: "a"
          }
        ]
      },
      {
        ln: "ConcatenatedOperationType",
        bti: ".AbstractCoordinateOperationType",
        ps: [
          {
            n: "usesSingleOperation",
            col: true,
            ti: ".SingleOperationRefType"
          }
        ]
      },
      {
        ln: "OrientableSurfaceType",
        bti: ".AbstractSurfaceType",
        ps: [
          {
            n: "baseSurface",
            ti: ".SurfacePropertyType"
          },
          {
            n: "orientation",
            an: {
              lp: "orientation"
            },
            t: "a"
          }
        ]
      },
      {
        ln: "AbstractSurfacePatchType"
      },
      {
        ln: "MultiSolidPropertyType",
        ps: [
          {
            n: "multiSolid",
            en: "MultiSolid",
            ti: ".MultiSolidType"
          },
          {
            n: "remoteSchema",
            an: {
              lp: "remoteSchema",
              ns: "http://www.opengis.net/gml"
            },
            t: "a"
          },
          {
            n: "type",
            ti: "XLink_1_0.TypeType",
            t: "a"
          },
          {
            n: "href",
            t: "a"
          },
          {
            n: "role",
            t: "a"
          },
          {
            n: "arcrole",
            t: "a"
          },
          {
            n: "title",
            t: "a"
          },
          {
            n: "show",
            ti: "XLink_1_0.ShowType",
            t: "a"
          },
          {
            n: "actuate",
            ti: "XLink_1_0.ActuateType",
            t: "a"
          }
        ]
      },
      {
        ln: "CompoundCRSType",
        bti: ".AbstractReferenceSystemType",
        ps: [
          {
            n: "includesCRS",
            col: true,
            ti: ".CoordinateReferenceSystemRefType"
          }
        ]
      },
      {
        ln: "GridLimitsType",
        ps: [
          {
            n: "gridEnvelope",
            en: "GridEnvelope",
            ti: ".GridEnvelopeType"
          }
        ]
      },
      {
        ln: "ScalarValuePropertyType",
        bti: ".ValuePropertyType"
      },
      {
        ln: "UnitDefinitionType",
        bti: ".DefinitionType",
        ps: [
          {
            n: "quantityType",
            ti: ".StringOrRefType"
          },
          {
            n: "catalogSymbol",
            ti: ".CodeType"
          }
        ]
      },
      {
        ln: "TimeCalendarType",
        bti: ".AbstractTimeReferenceSystemType",
        ps: [
          {
            n: "referenceFrame",
            col: true,
            ti: ".TimeCalendarEraPropertyType"
          }
        ]
      },
      {
        ln: "AbstractCurveType",
        bti: ".AbstractGeometricPrimitiveType"
      },
      {
        ln: "MultiPointCoverageType",
        bti: ".AbstractDiscreteCoverageType"
      },
      {
        ln: "AbstractGeneralConversionType",
        bti: ".AbstractCoordinateOperationType"
      },
      {
        ln: "PolygonPatchArrayPropertyType",
        bti: ".SurfacePatchArrayPropertyType"
      },
      {
        ln: "ImageCRSType",
        bti: ".AbstractReferenceSystemType",
        ps: [
          {
            n: "usesCartesianCS",
            ti: ".CartesianCSRefType"
          },
          {
            n: "usesObliqueCartesianCS",
            ti: ".ObliqueCartesianCSRefType"
          },
          {
            n: "usesImageDatum",
            ti: ".ImageDatumRefType"
          }
        ]
      },
      {
        ln: "AbstractCurveSegmentType",
        ps: [
          {
            n: "numDerivativesAtStart",
            ti: "Integer",
            an: {
              lp: "numDerivativesAtStart"
            },
            t: "a"
          },
          {
            n: "numDerivativesAtEnd",
            ti: "Integer",
            an: {
              lp: "numDerivativesAtEnd"
            },
            t: "a"
          },
          {
            n: "numDerivativeInterior",
            ti: "Integer",
            an: {
              lp: "numDerivativeInterior"
            },
            t: "a"
          }
        ]
      },
      {
        ln: "EllipsoidalCSType",
        bti: ".AbstractCoordinateSystemType"
      },
      {
        ln: "EngineeringCRSRefType",
        ps: [
          {
            n: "engineeringCRS",
            en: "EngineeringCRS",
            ti: ".EngineeringCRSType"
          },
          {
            n: "remoteSchema",
            an: {
              lp: "remoteSchema",
              ns: "http://www.opengis.net/gml"
            },
            t: "a"
          },
          {
            n: "type",
            ti: "XLink_1_0.TypeType",
            t: "a"
          },
          {
            n: "href",
            t: "a"
          },
          {
            n: "role",
            t: "a"
          },
          {
            n: "arcrole",
            t: "a"
          },
          {
            n: "title",
            t: "a"
          },
          {
            n: "show",
            ti: "XLink_1_0.ShowType",
            t: "a"
          },
          {
            n: "actuate",
            ti: "XLink_1_0.ActuateType",
            t: "a"
          }
        ]
      },
      {
        ln: "RingPropertyType",
        ps: [
          {
            n: "ring",
            en: "Ring",
            ti: ".RingType"
          }
        ]
      },
      {
        ln: "GeodeticDatumType",
        bti: ".AbstractDatumType",
        ps: [
          {
            n: "usesPrimeMeridian",
            ti: ".PrimeMeridianRefType"
          },
          {
            n: "usesEllipsoid",
            ti: ".EllipsoidRefType"
          }
        ]
      },
      {
        ln: "ConversionToPreferredUnitType",
        bti: ".UnitOfMeasureType",
        ps: [
          {
            n: "factor",
            ti: "Double"
          },
          {
            n: "formula",
            ti: ".FormulaType"
          }
        ]
      },
      {
        ln: "EllipsoidBaseType",
        bti: ".DefinitionType"
      },
      {
        ln: "AffinePlacementType",
        ps: [
          {
            n: "location",
            ti: ".DirectPositionType"
          },
          {
            n: "refDirection",
            col: true,
            ti: ".VectorType"
          },
          {
            n: "inDimension",
            ti: "Integer"
          },
          {
            n: "outDimension",
            ti: "Integer"
          }
        ]
      },
      {
        ln: "ImageDatumRefType",
        ps: [
          {
            n: "imageDatum",
            en: "ImageDatum",
            ti: ".ImageDatumType"
          },
          {
            n: "remoteSchema",
            an: {
              lp: "remoteSchema",
              ns: "http://www.opengis.net/gml"
            },
            t: "a"
          },
          {
            n: "type",
            ti: "XLink_1_0.TypeType",
            t: "a"
          },
          {
            n: "href",
            t: "a"
          },
          {
            n: "role",
            t: "a"
          },
          {
            n: "arcrole",
            t: "a"
          },
          {
            n: "title",
            t: "a"
          },
          {
            n: "show",
            ti: "XLink_1_0.ShowType",
            t: "a"
          },
          {
            n: "actuate",
            ti: "XLink_1_0.ActuateType",
            t: "a"
          }
        ]
      },
      {
        ln: "KnotPropertyType",
        ps: [
          {
            n: "knot",
            en: "Knot",
            ti: ".KnotType"
          }
        ]
      },
      {
        ln: "RangeSetType",
        ps: [
          {
            n: "valueArray",
            col: true,
            en: "ValueArray",
            ti: ".ValueArrayType"
          },
          {
            n: "scalarValueList",
            col: true,
            mx: false,
            dom: false,
            etis: [
              {
                en: "CountList",
                ti: {
                  t: "l"
                }
              },
              {
                en: "BooleanList",
                ti: {
                  t: "l"
                }
              },
              {
                en: "QuantityList",
                ti: ".MeasureOrNullListType"
              },
              {
                en: "CategoryList",
                ti: ".CodeOrNullListType"
              }
            ],
            t: "ers"
          },
          {
            n: "dataBlock",
            en: "DataBlock",
            ti: ".DataBlockType"
          },
          {
            n: "file",
            en: "File",
            ti: ".FileType"
          }
        ]
      },
      {
        ln: "AngleChoiceType",
        ps: [
          {
            n: "angle",
            ti: ".MeasureType"
          },
          {
            n: "dmsAngle",
            ti: ".DMSAngleType"
          }
        ]
      },
      {
        ln: "RectifiedGridDomainType",
        bti: ".DomainSetType"
      },
      {
        ln: "GeometryArrayPropertyType",
        ps: [
          {
            n: "geometry",
            col: true,
            mx: false,
            dom: false,
            en: "_Geometry",
            ti: ".AbstractGeometryType",
            t: "er"
          }
        ]
      },
      {
        ln: "OperationParameterBaseType",
        bti: ".AbstractGeneralOperationParameterType"
      },
      {
        ln: "TimeOrdinalReferenceSystemType",
        bti: ".AbstractTimeReferenceSystemType",
        ps: [
          {
            n: "component",
            col: true,
            ti: ".TimeOrdinalEraPropertyType"
          }
        ]
      },
      {
        ln: "AbstractTimeTopologyPrimitiveType",
        bti: ".AbstractTimePrimitiveType",
        ps: [
          {
            n: "complex",
            ti: ".ReferenceType"
          }
        ]
      },
      {
        ln: "EngineeringDatumRefType",
        ps: [
          {
            n: "engineeringDatum",
            en: "EngineeringDatum",
            ti: ".EngineeringDatumType"
          },
          {
            n: "remoteSchema",
            an: {
              lp: "remoteSchema",
              ns: "http://www.opengis.net/gml"
            },
            t: "a"
          },
          {
            n: "type",
            ti: "XLink_1_0.TypeType",
            t: "a"
          },
          {
            n: "href",
            t: "a"
          },
          {
            n: "role",
            t: "a"
          },
          {
            n: "arcrole",
            t: "a"
          },
          {
            n: "title",
            t: "a"
          },
          {
            n: "show",
            ti: "XLink_1_0.ShowType",
            t: "a"
          },
          {
            n: "actuate",
            ti: "XLink_1_0.ActuateType",
            t: "a"
          }
        ]
      },
      {
        ln: "VerticalDatumTypeType",
        bti: ".CodeType"
      },
      {
        ln: "CurvePropertyType",
        ps: [
          {
            n: "curve",
            mx: false,
            dom: false,
            en: "_Curve",
            ti: ".AbstractCurveType",
            t: "er"
          },
          {
            n: "remoteSchema",
            an: {
              lp: "remoteSchema",
              ns: "http://www.opengis.net/gml"
            },
            t: "a"
          },
          {
            n: "type",
            ti: "XLink_1_0.TypeType",
            t: "a"
          },
          {
            n: "href",
            t: "a"
          },
          {
            n: "role",
            t: "a"
          },
          {
            n: "arcrole",
            t: "a"
          },
          {
            n: "title",
            t: "a"
          },
          {
            n: "show",
            ti: "XLink_1_0.ShowType",
            t: "a"
          },
          {
            n: "actuate",
            ti: "XLink_1_0.ActuateType",
            t: "a"
          }
        ]
      },
      {
        ln: "TopoSurfacePropertyType",
        ps: [
          {
            n: "topoSurface",
            en: "TopoSurface",
            ti: ".TopoSurfaceType"
          }
        ]
      },
      {
        ln: "TemporalCRSType",
        bti: ".AbstractReferenceSystemType",
        ps: [
          {
            n: "usesTemporalCS",
            ti: ".TemporalCSRefType"
          },
          {
            n: "usesTemporalDatum",
            ti: ".TemporalDatumRefType"
          }
        ]
      },
      {
        ln: "AbstractGMLType",
        ps: [
          {
            n: "metaDataProperty",
            col: true,
            ti: ".MetaDataPropertyType"
          },
          {
            n: "description",
            ti: ".StringOrRefType"
          },
          {
            n: "name",
            col: true,
            mx: false,
            dom: false,
            ti: ".CodeType",
            t: "er"
          },
          {
            n: "id",
            ti: "ID",
            an: {
              lp: "id",
              ns: "http://www.opengis.net/gml"
            },
            t: "a"
          }
        ]
      },
      {
        ln: "MultiSurfaceCoverageType",
        bti: ".AbstractDiscreteCoverageType"
      },
      {
        ln: "ObliqueCartesianCSType",
        bti: ".AbstractCoordinateSystemType"
      },
      {
        ln: "DataBlockType",
        ps: [
          {
            n: "rangeParameters",
            ti: ".RangeParametersType"
          },
          {
            n: "tupleList",
            ti: ".CoordinatesType"
          },
          {
            n: "doubleOrNullTupleList",
            ti: {
              t: "l"
            }
          }
        ]
      },
      {
        ln: "AbstractTimeReferenceSystemType",
        bti: ".DefinitionType",
        ps: [
          {
            n: "domainOfValidity"
          }
        ]
      },
      {
        ln: "AbstractCoordinateSystemType",
        bti: ".AbstractCoordinateSystemBaseType",
        ps: [
          {
            n: "csID",
            col: true,
            ti: ".IdentifierType"
          },
          {
            n: "remarks",
            ti: ".StringOrRefType"
          },
          {
            n: "usesAxis",
            col: true,
            ti: ".CoordinateSystemAxisRefType"
          }
        ]
      },
      {
        ln: "DefaultStylePropertyType",
        ps: [
          {
            n: "style",
            mx: false,
            dom: false,
            en: "_Style",
            ti: ".AbstractStyleType",
            t: "er"
          },
          {
            n: "about",
            an: {
              lp: "about"
            },
            t: "a"
          },
          {
            n: "remoteSchema",
            an: {
              lp: "remoteSchema",
              ns: "http://www.opengis.net/gml"
            },
            t: "a"
          },
          {
            n: "type",
            ti: "XLink_1_0.TypeType",
            t: "a"
          },
          {
            n: "href",
            t: "a"
          },
          {
            n: "role",
            t: "a"
          },
          {
            n: "arcrole",
            t: "a"
          },
          {
            n: "title",
            t: "a"
          },
          {
            n: "show",
            ti: "XLink_1_0.ShowType",
            t: "a"
          },
          {
            n: "actuate",
            ti: "XLink_1_0.ActuateType",
            t: "a"
          }
        ]
      },
      {
        ln: "VerticalCRSRefType",
        ps: [
          {
            n: "verticalCRS",
            en: "VerticalCRS",
            ti: ".VerticalCRSType"
          },
          {
            n: "remoteSchema",
            an: {
              lp: "remoteSchema",
              ns: "http://www.opengis.net/gml"
            },
            t: "a"
          },
          {
            n: "type",
            ti: "XLink_1_0.TypeType",
            t: "a"
          },
          {
            n: "href",
            t: "a"
          },
          {
            n: "role",
            t: "a"
          },
          {
            n: "arcrole",
            t: "a"
          },
          {
            n: "title",
            t: "a"
          },
          {
            n: "show",
            ti: "XLink_1_0.ShowType",
            t: "a"
          },
          {
            n: "actuate",
            ti: "XLink_1_0.ActuateType",
            t: "a"
          }
        ]
      },
      {
        ln: "AbsoluteExternalPositionalAccuracyType",
        bti: ".AbstractPositionalAccuracyType",
        ps: [
          {
            n: "result",
            ti: ".MeasureType"
          }
        ]
      },
      {
        ln: "AbstractGriddedSurfaceType.Row",
        tn: null,
        ps: [
          {
            n: "posList",
            ti: ".DirectPositionListType"
          },
          {
            n: "geometricPositionGroup",
            col: true,
            etis: [
              {
                en: "pos",
                ti: ".DirectPositionType"
              },
              {
                en: "pointProperty",
                ti: ".PointPropertyType"
              }
            ],
            t: "es"
          }
        ]
      },
      {
        ln: "MultiPointPropertyType",
        ps: [
          {
            n: "multiPoint",
            en: "MultiPoint",
            ti: ".MultiPointType"
          },
          {
            n: "remoteSchema",
            an: {
              lp: "remoteSchema",
              ns: "http://www.opengis.net/gml"
            },
            t: "a"
          },
          {
            n: "type",
            ti: "XLink_1_0.TypeType",
            t: "a"
          },
          {
            n: "href",
            t: "a"
          },
          {
            n: "role",
            t: "a"
          },
          {
            n: "arcrole",
            t: "a"
          },
          {
            n: "title",
            t: "a"
          },
          {
            n: "show",
            ti: "XLink_1_0.ShowType",
            t: "a"
          },
          {
            n: "actuate",
            ti: "XLink_1_0.ActuateType",
            t: "a"
          }
        ]
      },
      {
        ln: "ArcByBulgeType",
        bti: ".ArcStringByBulgeType"
      },
      {
        ln: "EngineeringDatumType",
        bti: ".AbstractDatumType"
      },
      {
        ln: "CoordinateReferenceSystemRefType",
        ps: [
          {
            n: "coordinateReferenceSystem",
            mx: false,
            dom: false,
            en: "_CoordinateReferenceSystem",
            ti: ".AbstractReferenceSystemType",
            t: "er"
          },
          {
            n: "remoteSchema",
            an: {
              lp: "remoteSchema",
              ns: "http://www.opengis.net/gml"
            },
            t: "a"
          },
          {
            n: "type",
            ti: "XLink_1_0.TypeType",
            t: "a"
          },
          {
            n: "href",
            t: "a"
          },
          {
            n: "role",
            t: "a"
          },
          {
            n: "arcrole",
            t: "a"
          },
          {
            n: "title",
            t: "a"
          },
          {
            n: "show",
            ti: "XLink_1_0.ShowType",
            t: "a"
          },
          {
            n: "actuate",
            ti: "XLink_1_0.ActuateType",
            t: "a"
          }
        ]
      },
      {
        ln: "PolyhedralSurfaceType",
        bti: ".SurfaceType"
      },
      {
        ln: "GeometricComplexPropertyType",
        ps: [
          {
            n: "geometricComplex",
            en: "GeometricComplex",
            ti: ".GeometricComplexType"
          },
          {
            n: "compositeCurve",
            en: "CompositeCurve",
            ti: ".CompositeCurveType"
          },
          {
            n: "compositeSurface",
            en: "CompositeSurface",
            ti: ".CompositeSurfaceType"
          },
          {
            n: "compositeSolid",
            en: "CompositeSolid",
            ti: ".CompositeSolidType"
          },
          {
            n: "remoteSchema",
            an: {
              lp: "remoteSchema",
              ns: "http://www.opengis.net/gml"
            },
            t: "a"
          },
          {
            n: "type",
            ti: "XLink_1_0.TypeType",
            t: "a"
          },
          {
            n: "href",
            t: "a"
          },
          {
            n: "role",
            t: "a"
          },
          {
            n: "arcrole",
            t: "a"
          },
          {
            n: "title",
            t: "a"
          },
          {
            n: "show",
            ti: "XLink_1_0.ShowType",
            t: "a"
          },
          {
            n: "actuate",
            ti: "XLink_1_0.ActuateType",
            t: "a"
          }
        ]
      },
      {
        ln: "DirectPositionType",
        ps: [
          {
            n: "value",
            ti: {
              t: "l",
              bti: "Double"
            },
            t: "v"
          },
          {
            n: "srsName",
            an: {
              lp: "srsName"
            },
            t: "a"
          },
          {
            n: "srsDimension",
            ti: "Integer",
            an: {
              lp: "srsDimension"
            },
            t: "a"
          },
          {
            n: "axisLabels",
            ti: {
              t: "l"
            },
            an: {
              lp: "axisLabels"
            },
            t: "a"
          },
          {
            n: "uomLabels",
            ti: {
              t: "l"
            },
            an: {
              lp: "uomLabels"
            },
            t: "a"
          }
        ]
      },
      {
        ln: "SecondDefiningParameterType",
        ps: [
          {
            n: "inverseFlattening",
            ti: ".MeasureType"
          },
          {
            n: "semiMinorAxis",
            ti: ".MeasureType"
          },
          {
            n: "isSphere"
          }
        ]
      },
      {
        ln: "TimeGeometricPrimitivePropertyType",
        ps: [
          {
            n: "timeGeometricPrimitive",
            mx: false,
            dom: false,
            en: "_TimeGeometricPrimitive",
            ti: ".AbstractTimeGeometricPrimitiveType",
            t: "er"
          },
          {
            n: "remoteSchema",
            an: {
              lp: "remoteSchema",
              ns: "http://www.opengis.net/gml"
            },
            t: "a"
          },
          {
            n: "type",
            ti: "XLink_1_0.TypeType",
            t: "a"
          },
          {
            n: "href",
            t: "a"
          },
          {
            n: "role",
            t: "a"
          },
          {
            n: "arcrole",
            t: "a"
          },
          {
            n: "title",
            t: "a"
          },
          {
            n: "show",
            ti: "XLink_1_0.ShowType",
            t: "a"
          },
          {
            n: "actuate",
            ti: "XLink_1_0.ActuateType",
            t: "a"
          }
        ]
      },
      {
        ln: "VerticalDatumType",
        bti: ".AbstractDatumType",
        ps: [
          {
            n: "verticalDatumType",
            ti: ".VerticalDatumTypeType"
          }
        ]
      },
      {
        ln: "MultiLineStringType",
        bti: ".AbstractGeometricAggregateType",
        ps: [
          {
            n: "lineStringMember",
            col: true,
            ti: ".LineStringPropertyType"
          }
        ]
      },
      {
        ln: "FormulaType",
        ps: [
          {
            n: "a",
            ti: "Double"
          },
          {
            n: "b",
            ti: "Double"
          },
          {
            n: "c",
            ti: "Double"
          },
          {
            n: "d",
            ti: "Double"
          }
        ]
      },
      {
        ln: "BooleanPropertyType",
        bti: ".ValuePropertyType"
      },
      {
        ln: "PolarCSType",
        bti: ".AbstractCoordinateSystemType"
      },
      {
        ln: "CoordinateSystemRefType",
        ps: [
          {
            n: "coordinateSystem",
            mx: false,
            dom: false,
            en: "_CoordinateSystem",
            ti: ".AbstractCoordinateSystemType",
            t: "er"
          },
          {
            n: "remoteSchema",
            an: {
              lp: "remoteSchema",
              ns: "http://www.opengis.net/gml"
            },
            t: "a"
          },
          {
            n: "type",
            ti: "XLink_1_0.TypeType",
            t: "a"
          },
          {
            n: "href",
            t: "a"
          },
          {
            n: "role",
            t: "a"
          },
          {
            n: "arcrole",
            t: "a"
          },
          {
            n: "title",
            t: "a"
          },
          {
            n: "show",
            ti: "XLink_1_0.ShowType",
            t: "a"
          },
          {
            n: "actuate",
            ti: "XLink_1_0.ActuateType",
            t: "a"
          }
        ]
      },
      {
        ln: "TopoPrimitiveMemberType",
        ps: [
          {
            n: "topoPrimitive",
            mx: false,
            dom: false,
            en: "_TopoPrimitive",
            ti: ".AbstractTopoPrimitiveType",
            t: "er"
          },
          {
            n: "remoteSchema",
            an: {
              lp: "remoteSchema",
              ns: "http://www.opengis.net/gml"
            },
            t: "a"
          },
          {
            n: "type",
            ti: "XLink_1_0.TypeType",
            t: "a"
          },
          {
            n: "href",
            t: "a"
          },
          {
            n: "role",
            t: "a"
          },
          {
            n: "arcrole",
            t: "a"
          },
          {
            n: "title",
            t: "a"
          },
          {
            n: "show",
            ti: "XLink_1_0.ShowType",
            t: "a"
          },
          {
            n: "actuate",
            ti: "XLink_1_0.ActuateType",
            t: "a"
          }
        ]
      },
      {
        ln: "TimeOrdinalEraType",
        bti: ".DefinitionType",
        ps: [
          {
            n: "relatedTime",
            col: true,
            ti: ".RelatedTimeType"
          },
          {
            n: "start",
            ti: ".TimeNodePropertyType"
          },
          {
            n: "end",
            ti: ".TimeNodePropertyType"
          },
          {
            n: "extent",
            ti: ".TimePeriodPropertyType"
          },
          {
            n: "member",
            col: true,
            ti: ".TimeOrdinalEraPropertyType"
          },
          {
            n: "group",
            ti: ".ReferenceType"
          }
        ]
      },
      {
        ln: "ArcByCenterPointType",
        bti: ".AbstractCurveSegmentType",
        ps: [
          {
            n: "pos",
            ti: ".DirectPositionType"
          },
          {
            n: "pointProperty",
            ti: ".PointPropertyType"
          },
          {
            n: "pointRep",
            ti: ".PointPropertyType"
          },
          {
            n: "posList",
            ti: ".DirectPositionListType"
          },
          {
            n: "coordinates",
            ti: ".CoordinatesType"
          },
          {
            n: "radius",
            ti: ".LengthType"
          },
          {
            n: "startAngle",
            ti: ".AngleType"
          },
          {
            n: "endAngle",
            ti: ".AngleType"
          },
          {
            n: "interpolation",
            an: {
              lp: "interpolation"
            },
            t: "a"
          },
          {
            n: "numARC",
            ti: "Integer",
            an: {
              lp: "numArc"
            },
            t: "a"
          }
        ]
      },
      {
        ln: "BSplineType",
        bti: ".AbstractCurveSegmentType",
        ps: [
          {
            n: "posOrPointPropertyOrPointRep",
            col: true,
            mx: false,
            dom: false,
            etis: [
              {
                en: "pointRep",
                ti: ".PointPropertyType"
              },
              {
                en: "pointProperty",
                ti: ".PointPropertyType"
              },
              {
                en: "pos",
                ti: ".DirectPositionType"
              }
            ],
            t: "ers"
          },
          {
            n: "posList",
            ti: ".DirectPositionListType"
          },
          {
            n: "coordinates",
            ti: ".CoordinatesType"
          },
          {
            n: "degree",
            ti: "Integer"
          },
          {
            n: "knot",
            col: true,
            ti: ".KnotPropertyType"
          },
          {
            n: "interpolation",
            an: {
              lp: "interpolation"
            },
            t: "a"
          },
          {
            n: "isPolynomial",
            ti: "Boolean",
            an: {
              lp: "isPolynomial"
            },
            t: "a"
          },
          {
            n: "knotType",
            an: {
              lp: "knotType"
            },
            t: "a"
          }
        ]
      },
      {
        ln: "SphericalCSRefType",
        ps: [
          {
            n: "sphericalCS",
            en: "SphericalCS",
            ti: ".SphericalCSType"
          },
          {
            n: "remoteSchema",
            an: {
              lp: "remoteSchema",
              ns: "http://www.opengis.net/gml"
            },
            t: "a"
          },
          {
            n: "type",
            ti: "XLink_1_0.TypeType",
            t: "a"
          },
          {
            n: "href",
            t: "a"
          },
          {
            n: "role",
            t: "a"
          },
          {
            n: "arcrole",
            t: "a"
          },
          {
            n: "title",
            t: "a"
          },
          {
            n: "show",
            ti: "XLink_1_0.ShowType",
            t: "a"
          },
          {
            n: "actuate",
            ti: "XLink_1_0.ActuateType",
            t: "a"
          }
        ]
      },
      {
        ln: "RectangleType",
        bti: ".AbstractSurfacePatchType",
        ps: [
          {
            n: "exterior",
            mx: false,
            dom: false,
            ti: ".AbstractRingPropertyType",
            t: "er"
          },
          {
            n: "interpolation",
            an: {
              lp: "interpolation"
            },
            t: "a"
          }
        ]
      },
      {
        ln: "OffsetCurveType",
        bti: ".AbstractCurveSegmentType",
        ps: [
          {
            n: "offsetBase",
            ti: ".CurvePropertyType"
          },
          {
            n: "distance",
            ti: ".LengthType"
          },
          {
            n: "refDirection",
            ti: ".VectorType"
          }
        ]
      },
      {
        ln: "AbstractTopoPrimitiveType",
        bti: ".AbstractTopologyType",
        ps: [
          {
            n: "isolated",
            col: true,
            ti: ".IsolatedPropertyType"
          },
          {
            n: "container",
            ti: ".ContainerPropertyType"
          }
        ]
      },
      {
        ln: "FeatureStyleType",
        bti: ".AbstractGMLType",
        ps: [
          {
            n: "featureConstraint"
          },
          {
            n: "geometryStyle",
            col: true,
            ti: ".GeometryStylePropertyType"
          },
          {
            n: "topologyStyle",
            col: true,
            ti: ".TopologyStylePropertyType"
          },
          {
            n: "labelStyle",
            ti: ".LabelStylePropertyType"
          },
          {
            n: "featureType",
            an: {
              lp: "featureType"
            },
            t: "a"
          },
          {
            n: "baseType",
            an: {
              lp: "baseType"
            },
            t: "a"
          },
          {
            n: "queryGrammar",
            an: {
              lp: "queryGrammar"
            },
            t: "a"
          }
        ]
      },
      {
        ln: "TemporalDatumRefType",
        ps: [
          {
            n: "temporalDatum",
            en: "TemporalDatum",
            ti: ".TemporalDatumType"
          },
          {
            n: "remoteSchema",
            an: {
              lp: "remoteSchema",
              ns: "http://www.opengis.net/gml"
            },
            t: "a"
          },
          {
            n: "type",
            ti: "XLink_1_0.TypeType",
            t: "a"
          },
          {
            n: "href",
            t: "a"
          },
          {
            n: "role",
            t: "a"
          },
          {
            n: "arcrole",
            t: "a"
          },
          {
            n: "title",
            t: "a"
          },
          {
            n: "show",
            ti: "XLink_1_0.ShowType",
            t: "a"
          },
          {
            n: "actuate",
            ti: "XLink_1_0.ActuateType",
            t: "a"
          }
        ]
      },
      {
        ln: "LineStringSegmentType",
        bti: ".AbstractCurveSegmentType",
        ps: [
          {
            n: "posOrPointPropertyOrPointRep",
            col: true,
            mx: false,
            dom: false,
            etis: [
              {
                en: "pointRep",
                ti: ".PointPropertyType"
              },
              {
                en: "pointProperty",
                ti: ".PointPropertyType"
              },
              {
                en: "pos",
                ti: ".DirectPositionType"
              }
            ],
            t: "ers"
          },
          {
            n: "posList",
            ti: ".DirectPositionListType"
          },
          {
            n: "coordinates",
            ti: ".CoordinatesType"
          },
          {
            n: "interpolation",
            an: {
              lp: "interpolation"
            },
            t: "a"
          }
        ]
      },
      {
        ln: "GridCoverageType",
        bti: ".AbstractDiscreteCoverageType"
      },
      {
        ln: "OperationParameterGroupRefType",
        ps: [
          {
            n: "operationParameterGroup",
            en: "OperationParameterGroup",
            ti: ".OperationParameterGroupType"
          },
          {
            n: "remoteSchema",
            an: {
              lp: "remoteSchema",
              ns: "http://www.opengis.net/gml"
            },
            t: "a"
          },
          {
            n: "type",
            ti: "XLink_1_0.TypeType",
            t: "a"
          },
          {
            n: "href",
            t: "a"
          },
          {
            n: "role",
            t: "a"
          },
          {
            n: "arcrole",
            t: "a"
          },
          {
            n: "title",
            t: "a"
          },
          {
            n: "show",
            ti: "XLink_1_0.ShowType",
            t: "a"
          },
          {
            n: "actuate",
            ti: "XLink_1_0.ActuateType",
            t: "a"
          }
        ]
      },
      {
        ln: "AbstractPositionalAccuracyType",
        ps: [
          {
            n: "measureDescription",
            ti: ".CodeType"
          }
        ]
      },
      {
        ln: "AbstractDatumType",
        bti: ".AbstractDatumBaseType",
        ps: [
          {
            n: "datumID",
            col: true,
            ti: ".IdentifierType"
          },
          {
            n: "remarks",
            ti: ".StringOrRefType"
          },
          {
            n: "anchorPoint",
            ti: ".CodeType"
          },
          {
            n: "realizationEpoch",
            ti: "Calendar"
          },
          {
            n: "validArea",
            ti: ".ExtentType"
          },
          {
            n: "scope"
          }
        ]
      },
      {
        ln: "MultiSolidType",
        bti: ".AbstractGeometricAggregateType",
        ps: [
          {
            n: "solidMember",
            col: true,
            ti: ".SolidPropertyType"
          },
          {
            n: "solidMembers",
            ti: ".SolidArrayPropertyType"
          }
        ]
      },
      {
        ln: "MultiGeometryType",
        bti: ".AbstractGeometricAggregateType",
        ps: [
          {
            n: "geometryMember",
            col: true,
            ti: ".GeometryPropertyType"
          },
          {
            n: "geometryMembers",
            ti: ".GeometryArrayPropertyType"
          }
        ]
      },
      {
        ln: "TimeIntervalLengthType",
        ps: [
          {
            n: "value",
            ti: "Decimal",
            t: "v"
          },
          {
            n: "unit",
            an: {
              lp: "unit"
            },
            t: "a"
          },
          {
            n: "radix",
            ti: "Integer",
            an: {
              lp: "radix"
            },
            t: "a"
          },
          {
            n: "factor",
            ti: "Integer",
            an: {
              lp: "factor"
            },
            t: "a"
          }
        ]
      },
      {
        ln: "PrimeMeridianType",
        bti: ".PrimeMeridianBaseType",
        ps: [
          {
            n: "meridianID",
            col: true,
            ti: ".IdentifierType"
          },
          {
            n: "remarks",
            ti: ".StringOrRefType"
          },
          {
            n: "greenwichLongitude",
            ti: ".AngleChoiceType"
          }
        ]
      },
      {
        ln: "TrackType",
        bti: ".HistoryPropertyType"
      },
      {
        ln: "AbstractReferenceSystemBaseType",
        bti: ".DefinitionType"
      },
      {
        ln: "CompoundCRSRefType",
        ps: [
          {
            n: "compoundCRS",
            en: "CompoundCRS",
            ti: ".CompoundCRSType"
          },
          {
            n: "remoteSchema",
            an: {
              lp: "remoteSchema",
              ns: "http://www.opengis.net/gml"
            },
            t: "a"
          },
          {
            n: "type",
            ti: "XLink_1_0.TypeType",
            t: "a"
          },
          {
            n: "href",
            t: "a"
          },
          {
            n: "role",
            t: "a"
          },
          {
            n: "arcrole",
            t: "a"
          },
          {
            n: "title",
            t: "a"
          },
          {
            n: "show",
            ti: "XLink_1_0.ShowType",
            t: "a"
          },
          {
            n: "actuate",
            ti: "XLink_1_0.ActuateType",
            t: "a"
          }
        ]
      },
      {
        ln: "PrimeMeridianRefType",
        ps: [
          {
            n: "primeMeridian",
            en: "PrimeMeridian",
            ti: ".PrimeMeridianType"
          },
          {
            n: "remoteSchema",
            an: {
              lp: "remoteSchema",
              ns: "http://www.opengis.net/gml"
            },
            t: "a"
          },
          {
            n: "type",
            ti: "XLink_1_0.TypeType",
            t: "a"
          },
          {
            n: "href",
            t: "a"
          },
          {
            n: "role",
            t: "a"
          },
          {
            n: "arcrole",
            t: "a"
          },
          {
            n: "title",
            t: "a"
          },
          {
            n: "show",
            ti: "XLink_1_0.ShowType",
            t: "a"
          },
          {
            n: "actuate",
            ti: "XLink_1_0.ActuateType",
            t: "a"
          }
        ]
      },
      {
        ln: "MovingObjectStatusType",
        bti: ".AbstractTimeSliceType",
        ps: [
          {
            n: "location",
            mx: false,
            dom: false,
            ti: ".LocationPropertyType",
            t: "er"
          },
          {
            n: "speed",
            ti: ".MeasureType"
          },
          {
            n: "bearing",
            ti: ".DirectionPropertyType"
          },
          {
            n: "acceleration",
            ti: ".MeasureType"
          },
          {
            n: "elevation",
            ti: ".MeasureType"
          },
          {
            n: "status",
            ti: ".StringOrRefType"
          }
        ]
      },
      {
        ln: "TopoCurveType",
        bti: ".AbstractTopologyType",
        ps: [
          {
            n: "directedEdge",
            col: true,
            ti: ".DirectedEdgePropertyType"
          }
        ]
      },
      {
        ln: "AbstractParametricCurveSurfaceType",
        bti: ".AbstractSurfacePatchType"
      },
      {
        ln: "AbstractTimeObjectType",
        bti: ".AbstractGMLType"
      },
      {
        ln: "IndexMapType",
        bti: ".GridFunctionType",
        ps: [
          {
            n: "lookUpTable",
            ti: {
              t: "l",
              bti: "Integer"
            }
          }
        ]
      },
      {
        ln: "PolygonType",
        bti: ".AbstractSurfaceType",
        ps: [
          {
            n: "exterior",
            mx: false,
            dom: false,
            ti: ".AbstractRingPropertyType",
            t: "er"
          },
          {
            n: "interior",
            col: true,
            mx: false,
            dom: false,
            ti: ".AbstractRingPropertyType",
            t: "er"
          }
        ]
      },
      {
        ln: "TemporalDatumType",
        bti: ".TemporalDatumBaseType",
        ps: [
          {
            n: "origin",
            ti: "Calendar"
          }
        ]
      },
      {
        ln: "EllipsoidRefType",
        ps: [
          {
            n: "ellipsoid",
            en: "Ellipsoid",
            ti: ".EllipsoidType"
          },
          {
            n: "remoteSchema",
            an: {
              lp: "remoteSchema",
              ns: "http://www.opengis.net/gml"
            },
            t: "a"
          },
          {
            n: "type",
            ti: "XLink_1_0.TypeType",
            t: "a"
          },
          {
            n: "href",
            t: "a"
          },
          {
            n: "role",
            t: "a"
          },
          {
            n: "arcrole",
            t: "a"
          },
          {
            n: "title",
            t: "a"
          },
          {
            n: "show",
            ti: "XLink_1_0.ShowType",
            t: "a"
          },
          {
            n: "actuate",
            ti: "XLink_1_0.ActuateType",
            t: "a"
          }
        ]
      },
      {
        ln: "IndirectEntryType",
        ps: [
          {
            n: "definitionProxy",
            en: "DefinitionProxy",
            ti: ".DefinitionProxyType"
          }
        ]
      },
      {
        ln: "ArcStringByBulgeType",
        bti: ".AbstractCurveSegmentType",
        ps: [
          {
            n: "posOrPointPropertyOrPointRep",
            col: true,
            mx: false,
            dom: false,
            etis: [
              {
                en: "pointRep",
                ti: ".PointPropertyType"
              },
              {
                en: "pointProperty",
                ti: ".PointPropertyType"
              },
              {
                en: "pos",
                ti: ".DirectPositionType"
              }
            ],
            t: "ers"
          },
          {
            n: "posList",
            ti: ".DirectPositionListType"
          },
          {
            n: "coordinates",
            ti: ".CoordinatesType"
          },
          {
            n: "bulge",
            col: true,
            ti: "Double"
          },
          {
            n: "normal",
            col: true,
            ti: ".VectorType"
          },
          {
            n: "interpolation",
            an: {
              lp: "interpolation"
            },
            t: "a"
          },
          {
            n: "numArc",
            ti: "Integer",
            an: {
              lp: "numArc"
            },
            t: "a"
          }
        ]
      },
      {
        ln: "MultiLineStringPropertyType",
        ps: [
          {
            n: "multiLineString",
            en: "MultiLineString",
            ti: ".MultiLineStringType"
          },
          {
            n: "remoteSchema",
            an: {
              lp: "remoteSchema",
              ns: "http://www.opengis.net/gml"
            },
            t: "a"
          },
          {
            n: "type",
            ti: "XLink_1_0.TypeType",
            t: "a"
          },
          {
            n: "href",
            t: "a"
          },
          {
            n: "role",
            t: "a"
          },
          {
            n: "arcrole",
            t: "a"
          },
          {
            n: "title",
            t: "a"
          },
          {
            n: "show",
            ti: "XLink_1_0.ShowType",
            t: "a"
          },
          {
            n: "actuate",
            ti: "XLink_1_0.ActuateType",
            t: "a"
          }
        ]
      },
      {
        ln: "DerivedCRSTypeType",
        bti: ".CodeType"
      },
      {
        ln: "ParameterValueType",
        bti: ".AbstractGeneralParameterValueType",
        ps: [
          {
            n: "value",
            ti: ".MeasureType"
          },
          {
            n: "dmsAngleValue",
            ti: ".DMSAngleType"
          },
          {
            n: "stringValue"
          },
          {
            n: "integerValue",
            ti: "Integer"
          },
          {
            n: "booleanValue",
            ti: "Boolean"
          },
          {
            n: "valueList",
            ti: ".MeasureListType"
          },
          {
            n: "integerValueList",
            ti: {
              t: "l",
              bti: "Integer"
            }
          },
          {
            n: "valueFile"
          },
          {
            n: "valueOfParameter",
            ti: ".OperationParameterRefType"
          }
        ]
      },
      {
        ln: "AbstractTimeSliceType",
        bti: ".AbstractGMLType",
        ps: [
          {
            n: "validTime",
            ti: ".TimePrimitivePropertyType"
          },
          {
            n: "dataSource",
            ti: ".StringOrRefType"
          }
        ]
      },
      {
        ln: "LengthType",
        bti: ".MeasureType"
      },
      {
        ln: "FeatureArrayPropertyType",
        ps: [
          {
            n: "feature",
            col: true,
            mx: false,
            en: "_Feature",
            ti: ".AbstractFeatureType",
            t: "er"
          }
        ]
      },
      {
        ln: "MultiSurfacePropertyType",
        ps: [
          {
            n: "multiSurface",
            en: "MultiSurface",
            ti: ".MultiSurfaceType"
          },
          {
            n: "remoteSchema",
            an: {
              lp: "remoteSchema",
              ns: "http://www.opengis.net/gml"
            },
            t: "a"
          },
          {
            n: "type",
            ti: "XLink_1_0.TypeType",
            t: "a"
          },
          {
            n: "href",
            t: "a"
          },
          {
            n: "role",
            t: "a"
          },
          {
            n: "arcrole",
            t: "a"
          },
          {
            n: "title",
            t: "a"
          },
          {
            n: "show",
            ti: "XLink_1_0.ShowType",
            t: "a"
          },
          {
            n: "actuate",
            ti: "XLink_1_0.ActuateType",
            t: "a"
          }
        ]
      },
      {
        ln: "EllipsoidalCSRefType",
        ps: [
          {
            n: "ellipsoidalCS",
            en: "EllipsoidalCS",
            ti: ".EllipsoidalCSType"
          },
          {
            n: "remoteSchema",
            an: {
              lp: "remoteSchema",
              ns: "http://www.opengis.net/gml"
            },
            t: "a"
          },
          {
            n: "type",
            ti: "XLink_1_0.TypeType",
            t: "a"
          },
          {
            n: "href",
            t: "a"
          },
          {
            n: "role",
            t: "a"
          },
          {
            n: "arcrole",
            t: "a"
          },
          {
            n: "title",
            t: "a"
          },
          {
            n: "show",
            ti: "XLink_1_0.ShowType",
            t: "a"
          },
          {
            n: "actuate",
            ti: "XLink_1_0.ActuateType",
            t: "a"
          }
        ]
      },
      {
        ln: "PriorityLocationPropertyType",
        bti: ".LocationPropertyType",
        ps: [
          {
            n: "priority",
            an: {
              lp: "priority"
            },
            t: "a"
          }
        ]
      },
      {
        ln: "GeocentricCRSType",
        bti: ".AbstractReferenceSystemType",
        ps: [
          {
            n: "usesCartesianCS",
            ti: ".CartesianCSRefType"
          },
          {
            n: "usesSphericalCS",
            ti: ".SphericalCSRefType"
          },
          {
            n: "usesGeodeticDatum",
            ti: ".GeodeticDatumRefType"
          }
        ]
      },
      {
        ln: "ValueArrayPropertyType",
        ps: [
          {
            n: "value",
            col: true,
            mx: false,
            dom: false,
            etis: [
              {
                en: "CountList",
                ti: {
                  t: "l"
                }
              },
              {
                en: "Null",
                ti: {
                  t: "l"
                }
              },
              {
                en: "Category",
                ti: ".CodeType"
              },
              {
                en: "BooleanList",
                ti: {
                  t: "l"
                }
              },
              {
                en: "QuantityList",
                ti: ".MeasureOrNullListType"
              },
              {
                en: "Boolean",
                ti: "Boolean"
              },
              {
                en: "CategoryList",
                ti: ".CodeOrNullListType"
              },
              {
                en: "_Object",
                ti: "AnyType"
              },
              {
                en: "Quantity",
                ti: ".MeasureType"
              },
              {
                en: "Count",
                ti: "Integer"
              },
              {
                en: "QuantityExtent",
                ti: ".QuantityExtentType"
              },
              {
                en: "CompositeValue",
                ti: ".CompositeValueType"
              },
              {
                en: "CategoryExtent",
                ti: ".CategoryExtentType"
              },
              {
                en: "CountExtent",
                ti: {
                  t: "l"
                }
              }
            ],
            t: "ers"
          }
        ]
      },
      {
        ln: "FeaturePropertyType",
        ps: [
          {
            n: "feature",
            mx: false,
            en: "_Feature",
            ti: ".AbstractFeatureType",
            t: "er"
          },
          {
            n: "remoteSchema",
            an: {
              lp: "remoteSchema",
              ns: "http://www.opengis.net/gml"
            },
            t: "a"
          },
          {
            n: "type",
            ti: "XLink_1_0.TypeType",
            t: "a"
          },
          {
            n: "href",
            t: "a"
          },
          {
            n: "role",
            t: "a"
          },
          {
            n: "arcrole",
            t: "a"
          },
          {
            n: "title",
            t: "a"
          },
          {
            n: "show",
            ti: "XLink_1_0.ShowType",
            t: "a"
          },
          {
            n: "actuate",
            ti: "XLink_1_0.ActuateType",
            t: "a"
          }
        ]
      },
      {
        ln: "ContainerPropertyType",
        ps: [
          {
            n: "face",
            en: "Face",
            ti: ".FaceType"
          },
          {
            n: "topoSolid",
            en: "TopoSolid",
            ti: ".TopoSolidType"
          },
          {
            n: "remoteSchema",
            an: {
              lp: "remoteSchema",
              ns: "http://www.opengis.net/gml"
            },
            t: "a"
          },
          {
            n: "type",
            ti: "XLink_1_0.TypeType",
            t: "a"
          },
          {
            n: "href",
            t: "a"
          },
          {
            n: "role",
            t: "a"
          },
          {
            n: "arcrole",
            t: "a"
          },
          {
            n: "title",
            t: "a"
          },
          {
            n: "show",
            ti: "XLink_1_0.ShowType",
            t: "a"
          },
          {
            n: "actuate",
            ti: "XLink_1_0.ActuateType",
            t: "a"
          }
        ]
      },
      {
        ln: "FeatureCollectionType",
        bti: ".AbstractFeatureCollectionType"
      },
      {
        ln: "ObliqueCartesianCSRefType",
        ps: [
          {
            n: "obliqueCartesianCS",
            en: "ObliqueCartesianCS",
            ti: ".ObliqueCartesianCSType"
          },
          {
            n: "remoteSchema",
            an: {
              lp: "remoteSchema",
              ns: "http://www.opengis.net/gml"
            },
            t: "a"
          },
          {
            n: "type",
            ti: "XLink_1_0.TypeType",
            t: "a"
          },
          {
            n: "href",
            t: "a"
          },
          {
            n: "role",
            t: "a"
          },
          {
            n: "arcrole",
            t: "a"
          },
          {
            n: "title",
            t: "a"
          },
          {
            n: "show",
            ti: "XLink_1_0.ShowType",
            t: "a"
          },
          {
            n: "actuate",
            ti: "XLink_1_0.ActuateType",
            t: "a"
          }
        ]
      },
      {
        ln: "CodeType",
        ps: [
          {
            n: "value",
            t: "v"
          },
          {
            n: "codeSpace",
            an: {
              lp: "codeSpace"
            },
            t: "a"
          }
        ]
      },
      {
        ln: "VolumeType",
        bti: ".MeasureType"
      },
      {
        ln: "ObservationType",
        bti: ".AbstractFeatureType",
        ps: [
          {
            n: "validTime",
            ti: ".TimePrimitivePropertyType"
          },
          {
            n: "using",
            ti: ".FeaturePropertyType"
          },
          {
            n: "target",
            mx: false,
            dom: false,
            ti: ".TargetPropertyType",
            t: "er"
          },
          {
            n: "resultOf",
            ti: ".AssociationType"
          }
        ]
      },
      {
        ln: "MeasureType",
        ps: [
          {
            n: "value",
            ti: "Double",
            t: "v"
          },
          {
            n: "uom",
            an: {
              lp: "uom"
            },
            t: "a"
          }
        ]
      },
      {
        ln: "UserDefinedCSType",
        bti: ".AbstractCoordinateSystemType"
      },
      {
        ln: "AbstractGeneralOperationParameterType",
        bti: ".DefinitionType",
        ps: [
          {
            n: "minimumOccurs",
            ti: "Integer"
          }
        ]
      },
      {
        ln: "ImageDatumType",
        bti: ".AbstractDatumType",
        ps: [
          {
            n: "pixelInCell",
            ti: ".PixelInCellType"
          }
        ]
      },
      {
        ln: "GridType",
        bti: ".AbstractGeometryType",
        ps: [
          {
            n: "limits",
            ti: ".GridLimitsType"
          },
          {
            n: "axisName",
            col: true
          },
          {
            n: "dimension",
            ti: "Integer",
            an: {
              lp: "dimension"
            },
            t: "a"
          }
        ]
      },
      {
        ln: "AbstractTimeGeometricPrimitiveType",
        bti: ".AbstractTimePrimitiveType",
        ps: [
          {
            n: "frame",
            an: {
              lp: "frame"
            },
            t: "a"
          }
        ]
      },
      {
        ln: "TopoComplexType",
        bti: ".AbstractTopologyType",
        ps: [
          {
            n: "maximalComplex",
            ti: ".TopoComplexMemberType"
          },
          {
            n: "superComplex",
            col: true,
            ti: ".TopoComplexMemberType"
          },
          {
            n: "subComplex",
            col: true,
            ti: ".TopoComplexMemberType"
          },
          {
            n: "topoPrimitiveMember",
            col: true,
            ti: ".TopoPrimitiveMemberType"
          },
          {
            n: "topoPrimitiveMembers",
            ti: ".TopoPrimitiveArrayAssociationType"
          },
          {
            n: "isMaximal",
            ti: "Boolean",
            an: {
              lp: "isMaximal"
            },
            t: "a"
          }
        ]
      },
      {
        ln: "GridDomainType",
        bti: ".DomainSetType"
      },
      {
        ln: "AbstractDiscreteCoverageType",
        bti: ".AbstractCoverageType",
        ps: [
          {
            n: "coverageFunction",
            ti: ".CoverageFunctionType"
          }
        ]
      },
      {
        ln: "MultiCurvePropertyType",
        ps: [
          {
            n: "multiCurve",
            en: "MultiCurve",
            ti: ".MultiCurveType"
          },
          {
            n: "remoteSchema",
            an: {
              lp: "remoteSchema",
              ns: "http://www.opengis.net/gml"
            },
            t: "a"
          },
          {
            n: "type",
            ti: "XLink_1_0.TypeType",
            t: "a"
          },
          {
            n: "href",
            t: "a"
          },
          {
            n: "role",
            t: "a"
          },
          {
            n: "arcrole",
            t: "a"
          },
          {
            n: "title",
            t: "a"
          },
          {
            n: "show",
            ti: "XLink_1_0.ShowType",
            t: "a"
          },
          {
            n: "actuate",
            ti: "XLink_1_0.ActuateType",
            t: "a"
          }
        ]
      },
      {
        ln: "DirectedObservationAtDistanceType",
        bti: ".DirectedObservationType",
        ps: [
          {
            n: "distance",
            ti: ".MeasureType"
          }
        ]
      },
      {
        ln: "ParameterValueGroupType",
        bti: ".AbstractGeneralParameterValueType",
        ps: [
          {
            n: "includesValue",
            col: true,
            ti: ".AbstractGeneralParameterValueType"
          },
          {
            n: "valuesOfGroup",
            ti: ".OperationParameterGroupRefType"
          }
        ]
      },
      {
        ln: "TimePrimitivePropertyType",
        ps: [
          {
            n: "timePrimitive",
            mx: false,
            dom: false,
            en: "_TimePrimitive",
            ti: ".AbstractTimePrimitiveType",
            t: "er"
          },
          {
            n: "remoteSchema",
            an: {
              lp: "remoteSchema",
              ns: "http://www.opengis.net/gml"
            },
            t: "a"
          },
          {
            n: "type",
            ti: "XLink_1_0.TypeType",
            t: "a"
          },
          {
            n: "href",
            t: "a"
          },
          {
            n: "role",
            t: "a"
          },
          {
            n: "arcrole",
            t: "a"
          },
          {
            n: "title",
            t: "a"
          },
          {
            n: "show",
            ti: "XLink_1_0.ShowType",
            t: "a"
          },
          {
            n: "actuate",
            ti: "XLink_1_0.ActuateType",
            t: "a"
          }
        ]
      },
      {
        ln: "StyleType",
        bti: ".AbstractStyleType",
        ps: [
          {
            n: "featureStyle",
            col: true,
            ti: ".FeatureStylePropertyType"
          },
          {
            n: "graphStyle",
            ti: ".GraphStylePropertyType"
          }
        ]
      },
      {
        ln: "OperationParameterType",
        bti: ".OperationParameterBaseType",
        ps: [
          {
            n: "parameterID",
            col: true,
            ti: ".IdentifierType"
          },
          {
            n: "remarks",
            ti: ".StringOrRefType"
          }
        ]
      },
      {
        ln: "OperationMethodBaseType",
        bti: ".DefinitionType"
      },
      {
        ln: "DirectionPropertyType",
        ps: [
          {
            n: "directionVector",
            en: "DirectionVector",
            ti: ".DirectionVectorType"
          },
          {
            n: "compassPoint",
            en: "CompassPoint"
          },
          {
            n: "directionKeyword",
            en: "DirectionKeyword",
            ti: ".CodeType"
          },
          {
            n: "directionString",
            en: "DirectionString",
            ti: ".StringOrRefType"
          },
          {
            n: "remoteSchema",
            an: {
              lp: "remoteSchema",
              ns: "http://www.opengis.net/gml"
            },
            t: "a"
          },
          {
            n: "type",
            ti: "XLink_1_0.TypeType",
            t: "a"
          },
          {
            n: "href",
            t: "a"
          },
          {
            n: "role",
            t: "a"
          },
          {
            n: "arcrole",
            t: "a"
          },
          {
            n: "title",
            t: "a"
          },
          {
            n: "show",
            ti: "XLink_1_0.ShowType",
            t: "a"
          },
          {
            n: "actuate",
            ti: "XLink_1_0.ActuateType",
            t: "a"
          }
        ]
      },
      {
        ln: "TopoSurfaceType",
        bti: ".AbstractTopologyType",
        ps: [
          {
            n: "directedFace",
            col: true,
            ti: ".DirectedFacePropertyType"
          }
        ]
      },
      {
        ln: "AngleType",
        bti: ".MeasureType"
      },
      {
        ln: "ImageCRSRefType",
        ps: [
          {
            n: "imageCRS",
            en: "ImageCRS",
            ti: ".ImageCRSType"
          },
          {
            n: "remoteSchema",
            an: {
              lp: "remoteSchema",
              ns: "http://www.opengis.net/gml"
            },
            t: "a"
          },
          {
            n: "type",
            ti: "XLink_1_0.TypeType",
            t: "a"
          },
          {
            n: "href",
            t: "a"
          },
          {
            n: "role",
            t: "a"
          },
          {
            n: "arcrole",
            t: "a"
          },
          {
            n: "title",
            t: "a"
          },
          {
            n: "show",
            ti: "XLink_1_0.ShowType",
            t: "a"
          },
          {
            n: "actuate",
            ti: "XLink_1_0.ActuateType",
            t: "a"
          }
        ]
      },
      {
        ln: "QuantityExtentType",
        bti: ".MeasureOrNullListType"
      },
      {
        ln: "MultiGeometryPropertyType",
        ps: [
          {
            n: "geometricAggregate",
            mx: false,
            dom: false,
            en: "_GeometricAggregate",
            ti: ".AbstractGeometricAggregateType",
            t: "er"
          },
          {
            n: "remoteSchema",
            an: {
              lp: "remoteSchema",
              ns: "http://www.opengis.net/gml"
            },
            t: "a"
          },
          {
            n: "type",
            ti: "XLink_1_0.TypeType",
            t: "a"
          },
          {
            n: "href",
            t: "a"
          },
          {
            n: "role",
            t: "a"
          },
          {
            n: "arcrole",
            t: "a"
          },
          {
            n: "title",
            t: "a"
          },
          {
            n: "show",
            ti: "XLink_1_0.ShowType",
            t: "a"
          },
          {
            n: "actuate",
            ti: "XLink_1_0.ActuateType",
            t: "a"
          }
        ]
      },
      {
        ln: "GeodesicStringType",
        bti: ".AbstractCurveSegmentType",
        ps: [
          {
            n: "posList",
            ti: ".DirectPositionListType"
          },
          {
            n: "geometricPositionGroup",
            col: true,
            etis: [
              {
                en: "pos",
                ti: ".DirectPositionType"
              },
              {
                en: "pointProperty",
                ti: ".PointPropertyType"
              }
            ],
            t: "es"
          },
          {
            n: "interpolation",
            an: {
              lp: "interpolation"
            },
            t: "a"
          }
        ]
      },
      {
        ln: "ExtentType",
        ps: [
          {
            n: "description",
            ti: ".StringOrRefType"
          },
          {
            n: "boundingBox",
            col: true,
            ti: ".EnvelopeType"
          },
          {
            n: "boundingPolygon",
            col: true,
            ti: ".PolygonType"
          },
          {
            n: "verticalExtent",
            col: true,
            ti: ".EnvelopeType"
          },
          {
            n: "temporalExtent",
            col: true,
            ti: ".TimePeriodType"
          }
        ]
      },
      {
        ln: "VerticalCSType",
        bti: ".AbstractCoordinateSystemType"
      },
      {
        ln: "SphericalCSType",
        bti: ".AbstractCoordinateSystemType"
      },
      {
        ln: "TrianglePatchArrayPropertyType",
        bti: ".SurfacePatchArrayPropertyType"
      },
      {
        ln: "DMSAngleType",
        ps: [
          {
            n: "degrees",
            ti: ".DegreesType"
          },
          {
            n: "decimalMinutes",
            ti: "Decimal"
          },
          {
            n: "minutes",
            ti: "Int"
          },
          {
            n: "seconds",
            ti: "Decimal"
          }
        ]
      },
      {
        ln: "CompositeSolidType",
        bti: ".AbstractSolidType",
        ps: [
          {
            n: "solidMember",
            col: true,
            ti: ".SolidPropertyType"
          }
        ]
      },
      {
        ln: "TimeTopologyComplexPropertyType",
        ps: [
          {
            n: "timeTopologyComplex",
            en: "TimeTopologyComplex",
            ti: ".TimeTopologyComplexType"
          },
          {
            n: "remoteSchema",
            an: {
              lp: "remoteSchema",
              ns: "http://www.opengis.net/gml"
            },
            t: "a"
          },
          {
            n: "type",
            ti: "XLink_1_0.TypeType",
            t: "a"
          },
          {
            n: "href",
            t: "a"
          },
          {
            n: "role",
            t: "a"
          },
          {
            n: "arcrole",
            t: "a"
          },
          {
            n: "title",
            t: "a"
          },
          {
            n: "show",
            ti: "XLink_1_0.ShowType",
            t: "a"
          },
          {
            n: "actuate",
            ti: "XLink_1_0.ActuateType",
            t: "a"
          }
        ]
      },
      {
        ln: "TimeClockType",
        bti: ".AbstractTimeReferenceSystemType",
        ps: [
          {
            n: "referenceEvent",
            ti: ".StringOrRefType"
          },
          {
            n: "referenceTime",
            ti: "Calendar"
          },
          {
            n: "utcReference",
            ti: "Calendar"
          },
          {
            n: "dateBasis",
            col: true,
            ti: ".TimeCalendarPropertyType"
          }
        ]
      },
      {
        ln: "CompositeCurvePropertyType",
        ps: [
          {
            n: "compositeCurve",
            en: "CompositeCurve",
            ti: ".CompositeCurveType"
          },
          {
            n: "remoteSchema",
            an: {
              lp: "remoteSchema",
              ns: "http://www.opengis.net/gml"
            },
            t: "a"
          },
          {
            n: "type",
            ti: "XLink_1_0.TypeType",
            t: "a"
          },
          {
            n: "href",
            t: "a"
          },
          {
            n: "role",
            t: "a"
          },
          {
            n: "arcrole",
            t: "a"
          },
          {
            n: "title",
            t: "a"
          },
          {
            n: "show",
            ti: "XLink_1_0.ShowType",
            t: "a"
          },
          {
            n: "actuate",
            ti: "XLink_1_0.ActuateType",
            t: "a"
          }
        ]
      },
      {
        ln: "CoordinateSystemAxisBaseType",
        bti: ".DefinitionType"
      },
      {
        ln: "RectifiedGridType",
        bti: ".GridType",
        ps: [
          {
            n: "origin",
            ti: ".PointPropertyType"
          },
          {
            n: "offsetVector",
            col: true,
            ti: ".VectorType"
          }
        ]
      },
      {
        ln: "TransformationType",
        bti: ".AbstractGeneralTransformationType",
        ps: [
          {
            n: "usesMethod",
            ti: ".OperationMethodRefType"
          },
          {
            n: "usesValue",
            col: true,
            ti: ".ParameterValueType"
          }
        ]
      },
      {
        ln: "TimeOrdinalEraPropertyType",
        ps: [
          {
            n: "timeOrdinalEra",
            en: "TimeOrdinalEra",
            ti: ".TimeOrdinalEraType"
          },
          {
            n: "remoteSchema",
            an: {
              lp: "remoteSchema",
              ns: "http://www.opengis.net/gml"
            },
            t: "a"
          },
          {
            n: "type",
            ti: "XLink_1_0.TypeType",
            t: "a"
          },
          {
            n: "href",
            t: "a"
          },
          {
            n: "role",
            t: "a"
          },
          {
            n: "arcrole",
            t: "a"
          },
          {
            n: "title",
            t: "a"
          },
          {
            n: "show",
            ti: "XLink_1_0.ShowType",
            t: "a"
          },
          {
            n: "actuate",
            ti: "XLink_1_0.ActuateType",
            t: "a"
          }
        ]
      },
      {
        ln: "EllipsoidType",
        bti: ".EllipsoidBaseType",
        ps: [
          {
            n: "ellipsoidID",
            col: true,
            ti: ".IdentifierType"
          },
          {
            n: "remarks",
            ti: ".StringOrRefType"
          },
          {
            n: "semiMajorAxis",
            ti: ".MeasureType"
          },
          {
            n: "secondDefiningParameter",
            ti: ".SecondDefiningParameterType"
          }
        ]
      },
      {
        ln: "CircleType",
        bti: ".ArcType"
      },
      {
        ln: "TopoCurvePropertyType",
        ps: [
          {
            n: "topoCurve",
            en: "TopoCurve",
            ti: ".TopoCurveType"
          }
        ]
      },
      {
        ln: "BaseStyleDescriptorType",
        bti: ".AbstractGMLType",
        ps: [
          {
            n: "spatialResolution",
            ti: ".ScaleType"
          },
          {
            n: "styleVariation",
            col: true,
            ti: ".StyleVariationType"
          },
          {
            n: "animate",
            col: true,
            en: {
              lp: "animate",
              ns: "http://www.w3.org/2001/SMIL20/"
            },
            ti: "SMIL_2_0_Language.AnimateType"
          },
          {
            n: "animateMotion",
            col: true,
            en: {
              lp: "animateMotion",
              ns: "http://www.w3.org/2001/SMIL20/"
            },
            ti: "SMIL_2_0_Language.AnimateMotionType"
          },
          {
            n: "animateColor",
            col: true,
            en: {
              lp: "animateColor",
              ns: "http://www.w3.org/2001/SMIL20/"
            },
            ti: "SMIL_2_0_Language.AnimateColorType"
          },
          {
            n: "set",
            col: true,
            en: {
              lp: "set",
              ns: "http://www.w3.org/2001/SMIL20/"
            },
            ti: "SMIL_2_0_Language.SetType"
          }
        ]
      },
      {
        ln: "AreaType",
        bti: ".MeasureType"
      },
      {
        ln: "ConversionRefType",
        ps: [
          {
            n: "conversion",
            en: "Conversion",
            ti: ".ConversionType"
          },
          {
            n: "remoteSchema",
            an: {
              lp: "remoteSchema",
              ns: "http://www.opengis.net/gml"
            },
            t: "a"
          },
          {
            n: "type",
            ti: "XLink_1_0.TypeType",
            t: "a"
          },
          {
            n: "href",
            t: "a"
          },
          {
            n: "role",
            t: "a"
          },
          {
            n: "arcrole",
            t: "a"
          },
          {
            n: "title",
            t: "a"
          },
          {
            n: "show",
            ti: "XLink_1_0.ShowType",
            t: "a"
          },
          {
            n: "actuate",
            ti: "XLink_1_0.ActuateType",
            t: "a"
          }
        ]
      },
      {
        ln: "TimeTopologyPrimitivePropertyType",
        ps: [
          {
            n: "timeTopologyPrimitive",
            mx: false,
            dom: false,
            en: "_TimeTopologyPrimitive",
            ti: ".AbstractTimeTopologyPrimitiveType",
            t: "er"
          },
          {
            n: "remoteSchema",
            an: {
              lp: "remoteSchema",
              ns: "http://www.opengis.net/gml"
            },
            t: "a"
          },
          {
            n: "type",
            ti: "XLink_1_0.TypeType",
            t: "a"
          },
          {
            n: "href",
            t: "a"
          },
          {
            n: "role",
            t: "a"
          },
          {
            n: "arcrole",
            t: "a"
          },
          {
            n: "title",
            t: "a"
          },
          {
            n: "show",
            ti: "XLink_1_0.ShowType",
            t: "a"
          },
          {
            n: "actuate",
            ti: "XLink_1_0.ActuateType",
            t: "a"
          }
        ]
      },
      {
        ln: "FileType",
        ps: [
          {
            n: "rangeParameters",
            ti: ".RangeParametersType"
          },
          {
            n: "fileName"
          },
          {
            n: "fileStructure"
          },
          {
            n: "mimeType"
          },
          {
            n: "compression"
          }
        ]
      },
      {
        ln: "ProjectedCRSRefType",
        ps: [
          {
            n: "projectedCRS",
            en: "ProjectedCRS",
            ti: ".ProjectedCRSType"
          },
          {
            n: "remoteSchema",
            an: {
              lp: "remoteSchema",
              ns: "http://www.opengis.net/gml"
            },
            t: "a"
          },
          {
            n: "type",
            ti: "XLink_1_0.TypeType",
            t: "a"
          },
          {
            n: "href",
            t: "a"
          },
          {
            n: "role",
            t: "a"
          },
          {
            n: "arcrole",
            t: "a"
          },
          {
            n: "title",
            t: "a"
          },
          {
            n: "show",
            ti: "XLink_1_0.ShowType",
            t: "a"
          },
          {
            n: "actuate",
            ti: "XLink_1_0.ActuateType",
            t: "a"
          }
        ]
      },
      {
        ln: "PolarCSRefType",
        ps: [
          {
            n: "polarCS",
            en: "PolarCS",
            ti: ".PolarCSType"
          },
          {
            n: "remoteSchema",
            an: {
              lp: "remoteSchema",
              ns: "http://www.opengis.net/gml"
            },
            t: "a"
          },
          {
            n: "type",
            ti: "XLink_1_0.TypeType",
            t: "a"
          },
          {
            n: "href",
            t: "a"
          },
          {
            n: "role",
            t: "a"
          },
          {
            n: "arcrole",
            t: "a"
          },
          {
            n: "title",
            t: "a"
          },
          {
            n: "show",
            ti: "XLink_1_0.ShowType",
            t: "a"
          },
          {
            n: "actuate",
            ti: "XLink_1_0.ActuateType",
            t: "a"
          }
        ]
      },
      {
        ln: "AbstractGeneralTransformationType",
        bti: ".AbstractCoordinateOperationType"
      },
      {
        ln: "ConeType",
        bti: ".AbstractGriddedSurfaceType",
        ps: [
          {
            n: "horizontalCURVETYPE",
            an: {
              lp: "horizontalCurveType"
            },
            t: "a"
          },
          {
            n: "verticalCURVETYPE",
            an: {
              lp: "verticalCurveType"
            },
            t: "a"
          }
        ]
      },
      {
        ln: "LabelStyleType",
        bti: ".BaseStyleDescriptorType",
        ps: [
          {
            n: "style"
          },
          {
            n: "label",
            ti: ".LabelType"
          }
        ]
      },
      {
        ln: "TopologyStyleType",
        bti: ".BaseStyleDescriptorType",
        ps: [
          {
            n: "symbol",
            ti: ".SymbolType"
          },
          {
            n: "style"
          },
          {
            n: "labelStyle",
            ti: ".LabelStylePropertyType"
          },
          {
            n: "topologyProperty",
            an: {
              lp: "topologyProperty"
            },
            t: "a"
          },
          {
            n: "topologyType",
            an: {
              lp: "topologyType"
            },
            t: "a"
          }
        ]
      },
      {
        ln: "OperationParameterGroupBaseType",
        bti: ".AbstractGeneralOperationParameterType"
      },
      {
        ln: "TemporalCSRefType",
        ps: [
          {
            n: "temporalCS",
            en: "TemporalCS",
            ti: ".TemporalCSType"
          },
          {
            n: "remoteSchema",
            an: {
              lp: "remoteSchema",
              ns: "http://www.opengis.net/gml"
            },
            t: "a"
          },
          {
            n: "type",
            ti: "XLink_1_0.TypeType",
            t: "a"
          },
          {
            n: "href",
            t: "a"
          },
          {
            n: "role",
            t: "a"
          },
          {
            n: "arcrole",
            t: "a"
          },
          {
            n: "title",
            t: "a"
          },
          {
            n: "show",
            ti: "XLink_1_0.ShowType",
            t: "a"
          },
          {
            n: "actuate",
            ti: "XLink_1_0.ActuateType",
            t: "a"
          }
        ]
      },
      {
        ln: "EdgeType",
        bti: ".AbstractTopoPrimitiveType",
        ps: [
          {
            n: "directedNode",
            col: true,
            ti: ".DirectedNodePropertyType"
          },
          {
            n: "directedFace",
            col: true,
            ti: ".DirectedFacePropertyType"
          },
          {
            n: "curveProperty",
            ti: ".CurvePropertyType"
          }
        ]
      },
      {
        ln: "CoordinateOperationRefType",
        ps: [
          {
            n: "coordinateOperation",
            mx: false,
            dom: false,
            en: "_CoordinateOperation",
            ti: ".AbstractCoordinateOperationType",
            t: "er"
          },
          {
            n: "remoteSchema",
            an: {
              lp: "remoteSchema",
              ns: "http://www.opengis.net/gml"
            },
            t: "a"
          },
          {
            n: "type",
            ti: "XLink_1_0.TypeType",
            t: "a"
          },
          {
            n: "href",
            t: "a"
          },
          {
            n: "role",
            t: "a"
          },
          {
            n: "arcrole",
            t: "a"
          },
          {
            n: "title",
            t: "a"
          },
          {
            n: "show",
            ti: "XLink_1_0.ShowType",
            t: "a"
          },
          {
            n: "actuate",
            ti: "XLink_1_0.ActuateType",
            t: "a"
          }
        ]
      },
      {
        ln: "TransformationRefType",
        ps: [
          {
            n: "transformation",
            en: "Transformation",
            ti: ".TransformationType"
          },
          {
            n: "remoteSchema",
            an: {
              lp: "remoteSchema",
              ns: "http://www.opengis.net/gml"
            },
            t: "a"
          },
          {
            n: "type",
            ti: "XLink_1_0.TypeType",
            t: "a"
          },
          {
            n: "href",
            t: "a"
          },
          {
            n: "role",
            t: "a"
          },
          {
            n: "arcrole",
            t: "a"
          },
          {
            n: "title",
            t: "a"
          },
          {
            n: "show",
            ti: "XLink_1_0.ShowType",
            t: "a"
          },
          {
            n: "actuate",
            ti: "XLink_1_0.ActuateType",
            t: "a"
          }
        ]
      },
      {
        ln: "LineStringType",
        bti: ".AbstractCurveType",
        ps: [
          {
            n: "posOrPointPropertyOrPointRep",
            col: true,
            mx: false,
            dom: false,
            etis: [
              {
                en: "pointRep",
                ti: ".PointPropertyType"
              },
              {
                en: "coord",
                ti: ".CoordType"
              },
              {
                en: "pointProperty",
                ti: ".PointPropertyType"
              },
              {
                en: "pos",
                ti: ".DirectPositionType"
              }
            ],
            t: "ers"
          },
          {
            n: "posList",
            ti: ".DirectPositionListType"
          },
          {
            n: "coordinates",
            ti: ".CoordinatesType"
          }
        ]
      },
      {
        ln: "RelatedTimeType",
        bti: ".TimePrimitivePropertyType",
        ps: [
          {
            n: "relativePosition",
            an: {
              lp: "relativePosition"
            },
            t: "a"
          }
        ]
      },
      {
        ln: "MultiSurfaceDomainType",
        bti: ".DomainSetType"
      },
      {
        ln: "CoordType",
        ps: [
          {
            n: "x",
            en: "X",
            ti: "Decimal"
          },
          {
            n: "y",
            en: "Y",
            ti: "Decimal"
          },
          {
            n: "z",
            en: "Z",
            ti: "Decimal"
          }
        ]
      },
      {
        t: "enum",
        ln: "AesheticCriteriaType",
        vs: [
          "MIN_CROSSINGS",
          "MIN_AREA",
          "MIN_BENDS",
          "MAX_BENDS",
          "UNIFORM_BENDS",
          "MIN_SLOPES",
          "MIN_EDGE_LENGTH",
          "MAX_EDGE_LENGTH",
          "UNIFORM_EDGE_LENGTH",
          "MAX_ANGULAR_RESOLUTION",
          "MIN_ASPECT_RATIO",
          "MAX_SYMMETRIES"
        ]
      },
      {
        t: "enum",
        ln: "SurfaceInterpolationType",
        vs: [
          "none",
          "planar",
          "spherical",
          "elliptical",
          "conic",
          "tin",
          "parametricCurve",
          "polynomialSpline",
          "rationalSpline",
          "triangulatedSpline"
        ]
      },
      {
        t: "enum",
        ln: "SuccessionType",
        vs: ["substitution", "division", "fusion", "initiation"]
      },
      {
        t: "enum",
        ln: "FileValueModelType",
        vs: ["Record Interleaved"]
      },
      {
        t: "enum",
        ln: "QueryGrammarEnumeration",
        vs: ["xpath", "xquery", "other"]
      },
      {
        t: "enum",
        ln: "IncrementOrder",
        vs: ["+x+y", "+y+x", "+x-y", "-x-y"]
      },
      {
        t: "enum",
        ln: "LineTypeType",
        vs: ["STRAIGHT", "BENT"]
      },
      {
        t: "enum",
        ln: "DrawingTypeType",
        vs: ["POLYLINE", "ORTHOGONAL"]
      },
      {
        t: "enum",
        ln: "CurveInterpolationType",
        vs: [
          "linear",
          "geodesic",
          "circularArc3Points",
          "circularArc2PointWithBulge",
          "circularArcCenterPointWithRadius",
          "elliptical",
          "clothoid",
          "conic",
          "polynomialSpline",
          "cubicSpline",
          "rationalSpline"
        ]
      },
      {
        t: "enum",
        ln: "KnotTypesType",
        vs: ["uniform", "quasiUniform", "piecewiseBezier"]
      },
      {
        t: "enum",
        ln: "SequenceRuleNames",
        vs: [
          "Linear",
          "Boustrophedonic",
          "Cantor-diagonal",
          "Spiral",
          "Morton",
          "Hilbert"
        ]
      },
      {
        t: "enum",
        ln: "TimeIndeterminateValueType",
        vs: ["after", "before", "now", "unknown"]
      },
      {
        t: "enum",
        ln: "GraphTypeType",
        vs: ["TREE", "BICONNECTED"]
      },
      {
        t: "enum",
        ln: "SignType",
        vs: ["-", "+"]
      },
      {
        t: "enum",
        ln: "SymbolTypeEnumeration",
        vs: ["svg", "xpath", "other"]
      },
      {
        t: "enum",
        ln: "CompassPointEnumeration",
        vs: [
          "N",
          "NNE",
          "NE",
          "ENE",
          "E",
          "ESE",
          "SE",
          "SSE",
          "S",
          "SSW",
          "SW",
          "WSW",
          "W",
          "WNW",
          "NW",
          "NNW"
        ]
      }
    ],
    eis: [
      {
        en: "semiMinorAxis",
        ti: ".MeasureType"
      },
      {
        en: "origin",
        ti: "Calendar"
      },
      {
        en: "valueList",
        ti: ".MeasureListType"
      },
      {
        en: "result",
        ti: ".MeasureType"
      },
      {
        en: "GraphStyle",
        ti: ".GraphStyleType",
        sh: "_GML"
      },
      {
        en: "ObliqueCartesianCS",
        ti: ".ObliqueCartesianCSType",
        sh: "_CoordinateSystem"
      },
      {
        en: "linearCSRef",
        ti: ".LinearCSRefType"
      },
      {
        en: "relativeInternalPositionalAccuracy",
        ti: ".RelativeInternalPositionalAccuracyType",
        sh: "_positionalAccuracy"
      },
      {
        en: "centerOf",
        ti: ".PointPropertyType"
      },
      {
        en: "topoVolumeProperty",
        ti: ".TopoVolumePropertyType"
      },
      {
        en: "multiGeometryProperty",
        ti: ".MultiGeometryPropertyType"
      },
      {
        en: "multiCenterLineOf",
        ti: ".MultiCurvePropertyType"
      },
      {
        en: "polarCSRef",
        ti: ".PolarCSRefType"
      },
      {
        en: "TimeOrdinalReferenceSystem",
        ti: ".TimeOrdinalReferenceSystemType",
        sh: "_TimeReferenceSystem"
      },
      {
        en: "domainSet",
        ti: ".DomainSetType"
      },
      {
        en: "verticalCSRef",
        ti: ".VerticalCSRefType"
      },
      {
        en: "Category",
        ti: ".CodeType"
      },
      {
        en: "imageCRSRef",
        ti: ".ImageCRSRefType"
      },
      {
        en: "includesCRS",
        ti: ".CoordinateReferenceSystemRefType"
      },
      {
        en: "BaseUnit",
        ti: ".BaseUnitType",
        sh: "UnitDefinition"
      },
      {
        en: "BooleanList",
        ti: {
          t: "l"
        }
      },
      {
        en: "CylindricalCS",
        ti: ".CylindricalCSType",
        sh: "_CoordinateSystem"
      },
      {
        en: "_TopoPrimitive",
        ti: ".AbstractTopoPrimitiveType",
        sh: "_Topology"
      },
      {
        en: "ArcStringByBulge",
        ti: ".ArcStringByBulgeType",
        sh: "_CurveSegment"
      },
      {
        en: "MultiPolygon",
        ti: ".MultiPolygonType",
        sh: "_GeometricAggregate"
      },
      {
        en: "valueFile"
      },
      {
        en: "srsID",
        ti: ".IdentifierType"
      },
      {
        en: "coordinateSystemRef",
        ti: ".CoordinateSystemRefType"
      },
      {
        en: "ConventionalUnit",
        ti: ".ConventionalUnitType",
        sh: "UnitDefinition"
      },
      {
        en: "IndexMap",
        ti: ".IndexMapType",
        sh: "GridFunction"
      },
      {
        en: "_GeneralConversion",
        ti: ".AbstractGeneralConversionType",
        sh: "_Operation"
      },
      {
        en: "CircleByCenterPoint",
        ti: ".CircleByCenterPointType",
        sh: "ArcByCenterPoint"
      },
      {
        en: "coordinateOperationRef",
        ti: ".CoordinateOperationRefType"
      },
      {
        en: "Clothoid",
        ti: ".ClothoidType",
        sh: "_CurveSegment"
      },
      {
        en: "_GeneralDerivedCRS",
        ti: ".AbstractGeneralDerivedCRSType",
        sh: "_CoordinateReferenceSystem"
      },
      {
        en: "CountExtent",
        ti: {
          t: "l"
        }
      },
      {
        en: "coverageFunction",
        ti: ".CoverageFunctionType"
      },
      {
        en: "GeometryStyle",
        ti: ".GeometryStyleType",
        sh: "_GML"
      },
      {
        en: "Cone",
        ti: ".ConeType",
        sh: "_GriddedSurface"
      },
      {
        en: "sourceCRS",
        ti: ".CRSRefType"
      },
      {
        en: "ArcByCenterPoint",
        ti: ".ArcByCenterPointType",
        sh: "_CurveSegment"
      },
      {
        en: "using",
        ti: ".FeaturePropertyType"
      },
      {
        en: "UnitDefinition",
        ti: ".UnitDefinitionType",
        sh: "Definition"
      },
      {
        en: "TopoSurface",
        ti: ".TopoSurfaceType"
      },
      {
        en: "AffinePlacement",
        ti: ".AffinePlacementType"
      },
      {
        en: "temporalCSRef",
        ti: ".TemporalCSRefType"
      },
      {
        en: "extentOf",
        ti: ".SurfacePropertyType"
      },
      {
        en: "_Coverage",
        ti: ".AbstractCoverageType",
        sh: "_Feature"
      },
      {
        en: "UserDefinedCS",
        ti: ".UserDefinedCSType",
        sh: "_CoordinateSystem"
      },
      {
        en: "Count",
        ti: "Integer"
      },
      {
        en: "pointProperty",
        ti: ".PointPropertyType"
      },
      {
        en: "coordinateOperationName",
        ti: ".CodeType",
        sh: "name"
      },
      {
        en: "TopoComplex",
        ti: ".TopoComplexType",
        sh: "_Topology"
      },
      {
        en: "DerivedUnit",
        ti: ".DerivedUnitType",
        sh: "UnitDefinition"
      },
      {
        en: "GenericMetaData",
        ti: ".GenericMetaDataType",
        sh: "_MetaData"
      },
      {
        en: "GridFunction",
        ti: ".GridFunctionType"
      },
      {
        en: "OperationParameterGroup",
        ti: ".OperationParameterGroupType",
        sh: "_GeneralOperationParameter"
      },
      {
        en: "exterior",
        ti: ".AbstractRingPropertyType"
      },
      {
        en: "measure",
        ti: ".MeasureType"
      },
      {
        en: "multiSurfaceDomain",
        ti: ".MultiSurfaceDomainType",
        sh: "domainSet"
      },
      {
        en: "surfaceProperty",
        ti: ".SurfacePropertyType"
      },
      {
        en: "solidMember",
        ti: ".SolidPropertyType"
      },
      {
        en: "_CoordinateSystem",
        ti: ".AbstractCoordinateSystemType",
        sh: "Definition"
      },
      {
        en: "CompassPoint"
      },
      {
        en: "pointRep",
        ti: ".PointPropertyType"
      },
      {
        en: "quantityType",
        ti: ".StringOrRefType"
      },
      {
        en: "members",
        ti: ".ArrayAssociationType"
      },
      {
        en: "featureMembers",
        ti: ".FeatureArrayPropertyType"
      },
      {
        en: "CompoundCRS",
        ti: ".CompoundCRSType",
        sh: "_CRS"
      },
      {
        en: "minutes",
        ti: "Int"
      },
      {
        en: "decimalMinutes",
        ti: "Decimal"
      },
      {
        en: "polygonPatches",
        ti: ".PolygonPatchArrayPropertyType",
        sh: "patches"
      },
      {
        en: "interior",
        ti: ".AbstractRingPropertyType"
      },
      {
        en: "edgeOf",
        ti: ".CurvePropertyType"
      },
      {
        en: "TriangulatedSurface",
        ti: ".TriangulatedSurfaceType",
        sh: "Surface"
      },
      {
        en: "ConcatenatedOperation",
        ti: ".ConcatenatedOperationType",
        sh: "_CoordinateOperation"
      },
      {
        en: "_Topology",
        ti: ".AbstractTopologyType",
        sh: "_GML"
      },
      {
        en: "topologyStyle",
        ti: ".TopologyStylePropertyType"
      },
      {
        en: "multiPointDomain",
        ti: ".MultiPointDomainType",
        sh: "domainSet"
      },
      {
        en: "boundedBy",
        ti: ".BoundingShapeType"
      },
      {
        en: "_Operation",
        ti: ".AbstractCoordinateOperationType",
        sh: "_SingleOperation"
      },
      {
        en: "temporalCRSRef",
        ti: ".TemporalCRSRefType"
      },
      {
        en: "ellipsoidalCSRef",
        ti: ".EllipsoidalCSRefType"
      },
      {
        en: "_TimeComplex",
        ti: ".AbstractTimeComplexType",
        sh: "_TimeObject"
      },
      {
        en: "vector",
        ti: ".VectorType"
      },
      {
        en: "_Geometry",
        ti: ".AbstractGeometryType",
        sh: "_GML"
      },
      {
        en: "definitionRef",
        ti: ".ReferenceType"
      },
      {
        en: "usesOperation",
        ti: ".OperationRefType"
      },
      {
        en: "LinearRing",
        ti: ".LinearRingType",
        sh: "_Ring"
      },
      {
        en: "EngineeringDatum",
        ti: ".EngineeringDatumType",
        sh: "_Datum"
      },
      {
        en: "labelStyle",
        ti: ".LabelStylePropertyType"
      },
      {
        en: "solidArrayProperty",
        ti: ".SolidArrayPropertyType"
      },
      {
        en: "multiCurveProperty",
        ti: ".MultiCurvePropertyType"
      },
      {
        en: "featureProperty",
        ti: ".FeaturePropertyType"
      },
      {
        en: "axisDirection",
        ti: ".CodeType"
      },
      {
        en: "TimeNode",
        ti: ".TimeNodeType",
        sh: "_TimeTopologyPrimitive"
      },
      {
        en: "DerivedCRS",
        ti: ".DerivedCRSType",
        sh: "_GeneralDerivedCRS"
      },
      {
        en: "MultiSurface",
        ti: ".MultiSurfaceType",
        sh: "_GeometricAggregate"
      },
      {
        en: "absoluteExternalPositionalAccuracy",
        ti: ".AbsoluteExternalPositionalAccuracyType",
        sh: "_positionalAccuracy"
      },
      {
        en: "measureDescription",
        ti: ".CodeType"
      },
      {
        en: "baseCurve",
        ti: ".CurvePropertyType"
      },
      {
        en: "temporalExtent",
        ti: ".TimePeriodType"
      },
      {
        en: "geometryStyle",
        ti: ".GeometryStylePropertyType"
      },
      {
        en: "pointArrayProperty",
        ti: ".PointArrayPropertyType"
      },
      {
        en: "topoCurveProperty",
        ti: ".TopoCurvePropertyType"
      },
      {
        en: "targetCRS",
        ti: ".CRSRefType"
      },
      {
        en: "CompositeSurface",
        ti: ".CompositeSurfaceType",
        sh: "_Surface"
      },
      {
        en: "Geodesic",
        ti: ".GeodesicType",
        sh: "GeodesicString"
      },
      {
        en: "operationParameterGroupRef",
        ti: ".OperationParameterRefType"
      },
      {
        en: "axisID",
        ti: ".IdentifierType"
      },
      {
        en: "targetDimensions",
        ti: "Integer"
      },
      {
        en: "graphStyle",
        ti: ".GraphStylePropertyType"
      },
      {
        en: "topoPointProperty",
        ti: ".TopoPointPropertyType"
      },
      {
        en: "engineeringCRSRef",
        ti: ".EngineeringCRSRefType"
      },
      {
        en: "usesPrimeMeridian",
        ti: ".PrimeMeridianRefType"
      },
      {
        en: "_GeometricPrimitive",
        ti: ".AbstractGeometricPrimitiveType",
        sh: "_Geometry"
      },
      {
        en: "TimeCalendar",
        ti: ".TimeCalendarType",
        sh: "_TimeReferenceSystem"
      },
      {
        en: "solidMembers",
        ti: ".SolidArrayPropertyType"
      },
      {
        en: "version"
      },
      {
        en: "FeatureCollection",
        ti: ".FeatureCollectionType",
        sh: "_Feature"
      },
      {
        en: "LocationString",
        ti: ".StringOrRefType"
      },
      {
        en: "concatenatedOperationRef",
        ti: ".ConcatenatedOperationRefType"
      },
      {
        en: "GeodesicString",
        ti: ".GeodesicStringType",
        sh: "_CurveSegment"
      },
      {
        en: "usesTemporalCS",
        ti: ".TemporalCSRefType"
      },
      {
        en: "trianglePatches",
        ti: ".TrianglePatchArrayPropertyType",
        sh: "patches"
      },
      {
        en: "usesVerticalCS",
        ti: ".VerticalCSRefType"
      },
      {
        en: "_ReferenceSystem",
        ti: ".AbstractReferenceSystemType",
        sh: "Definition"
      },
      {
        en: "Sphere",
        ti: ".SphereType",
        sh: "_GriddedSurface"
      },
      {
        en: "cartesianCSRef",
        ti: ".CartesianCSRefType"
      },
      {
        en: "greenwichLongitude",
        ti: ".AngleChoiceType"
      },
      {
        en: "includesElement",
        ti: ".CovarianceElementType"
      },
      {
        en: "pos",
        ti: ".DirectPositionType"
      },
      {
        en: "LineStringSegment",
        ti: ".LineStringSegmentType",
        sh: "_CurveSegment"
      },
      {
        en: "QuantityList",
        ti: ".MeasureOrNullListType"
      },
      {
        en: "roughConversionToPreferredUnit",
        ti: ".ConversionToPreferredUnitType"
      },
      {
        en: "usesImageDatum",
        ti: ".ImageDatumRefType"
      },
      {
        en: "Style",
        ti: ".StyleType",
        sh: "_Style"
      },
      {
        en: "_CoordinateReferenceSystem",
        ti: ".AbstractReferenceSystemType",
        sh: "_CRS"
      },
      {
        en: "Polygon",
        ti: ".PolygonType",
        sh: "_Surface"
      },
      {
        en: "TimeCoordinateSystem",
        ti: ".TimeCoordinateSystemType",
        sh: "_TimeReferenceSystem"
      },
      {
        en: "columnIndex",
        ti: "Integer"
      },
      {
        en: "Edge",
        ti: ".EdgeType",
        sh: "_TopoPrimitive"
      },
      {
        en: "indirectEntry",
        ti: ".IndirectEntryType"
      },
      {
        en: "conversionRef",
        ti: ".ConversionRefType"
      },
      {
        en: "PassThroughOperation",
        ti: ".PassThroughOperationType",
        sh: "_SingleOperation"
      },
      {
        en: "OrientableSurface",
        ti: ".OrientableSurfaceType",
        sh: "_Surface"
      },
      {
        en: "Ring",
        ti: ".RingType",
        sh: "_Ring"
      },
      {
        en: "segments",
        ti: ".CurveSegmentArrayPropertyType"
      },
      {
        en: "unitOfMeasure",
        ti: ".UnitOfMeasureType"
      },
      {
        en: "integerValue",
        ti: "Integer"
      },
      {
        en: "topoComplexProperty",
        ti: ".TopoComplexMemberType"
      },
      {
        en: "usesSingleOperation",
        ti: ".SingleOperationRefType"
      },
      {
        en: "_ParametricCurveSurface",
        ti: ".AbstractParametricCurveSurfaceType",
        sh: "_SurfacePatch"
      },
      {
        en: "usesValue",
        ti: ".ParameterValueType"
      },
      {
        en: "multiCurveDomain",
        ti: ".MultiCurveDomainType",
        sh: "domainSet"
      },
      {
        en: "multiSurfaceProperty",
        ti: ".MultiSurfacePropertyType"
      },
      {
        en: "OperationMethod",
        ti: ".OperationMethodType",
        sh: "Definition"
      },
      {
        en: "_Curve",
        ti: ".AbstractCurveType",
        sh: "_GeometricPrimitive"
      },
      {
        en: "covariance",
        ti: "Double"
      },
      {
        en: "value",
        ti: ".MeasureType"
      },
      {
        en: "geocentricCRSRef",
        ti: ".GeocentricCRSRefType"
      },
      {
        en: "directedTopoSolid",
        ti: ".DirectedTopoSolidPropertyType"
      },
      {
        en: "EnvelopeWithTimePeriod",
        ti: ".EnvelopeWithTimePeriodType",
        sh: "Envelope"
      },
      {
        en: "_GriddedSurface",
        ti: ".AbstractGriddedSurfaceType",
        sh: "_ParametricCurveSurface"
      },
      {
        en: "CompositeCurve",
        ti: ".CompositeCurveType",
        sh: "_Curve"
      },
      {
        en: "symbol",
        ti: ".SymbolType"
      },
      {
        en: "usesMethod",
        ti: ".OperationMethodRefType"
      },
      {
        en: "pointMembers",
        ti: ".PointArrayPropertyType"
      },
      {
        en: "multiLocation",
        ti: ".MultiPointPropertyType"
      },
      {
        en: "name",
        ti: ".CodeType"
      },
      {
        en: "secondDefiningParameter",
        ti: ".SecondDefiningParameterType"
      },
      {
        en: "_GML",
        ti: ".AbstractGMLType",
        sh: "_Object"
      },
      {
        en: "OrientableCurve",
        ti: ".OrientableCurveType",
        sh: "_Curve"
      },
      {
        en: "Arc",
        ti: ".ArcType",
        sh: "ArcString"
      },
      {
        en: "methodName",
        ti: ".CodeType",
        sh: "name"
      },
      {
        en: "defaultStyle",
        ti: ".DefaultStylePropertyType"
      },
      {
        en: "MultiSurfaceCoverage",
        ti: ".MultiSurfaceCoverageType",
        sh: "_DiscreteCoverage"
      },
      {
        en: "includesValue",
        ti: ".AbstractGeneralParameterValueType",
        sh: "_generalParameterValue"
      },
      {
        en: "csID",
        ti: ".IdentifierType"
      },
      {
        en: "methodFormula",
        ti: ".CodeType"
      },
      {
        en: "Array",
        ti: ".ArrayType",
        sh: "_GML"
      },
      {
        en: "multiCoverage",
        ti: ".MultiSurfacePropertyType"
      },
      {
        en: "engineeringDatumRef",
        ti: ".EngineeringDatumRefType"
      },
      {
        en: "compoundCRSRef",
        ti: ".CompoundCRSRefType"
      },
      {
        en: "GeographicCRS",
        ti: ".GeographicCRSType",
        sh: "_CoordinateReferenceSystem"
      },
      {
        en: "MultiCurveCoverage",
        ti: ".MultiCurveCoverageType",
        sh: "_DiscreteCoverage"
      },
      {
        en: "posList",
        ti: ".DirectPositionListType"
      },
      {
        en: "usesAxis",
        ti: ".CoordinateSystemAxisRefType"
      },
      {
        en: "projectedCRSRef",
        ti: ".ProjectedCRSRefType"
      },
      {
        en: "dmsAngle",
        ti: ".DMSAngleType"
      },
      {
        en: "GeodeticDatum",
        ti: ".GeodeticDatumType",
        sh: "_Datum"
      },
      {
        en: "definitionMember",
        ti: ".DictionaryEntryType",
        sh: "dictionaryEntry"
      },
      {
        en: "PolyhedralSurface",
        ti: ".PolyhedralSurfaceType",
        sh: "Surface"
      },
      {
        en: "Conversion",
        ti: ".ConversionType",
        sh: "_GeneralConversion"
      },
      {
        en: "DataBlock",
        ti: ".DataBlockType"
      },
      {
        en: "multiPosition",
        ti: ".MultiPointPropertyType"
      },
      {
        en: "topoPrimitiveMembers",
        ti: ".TopoPrimitiveArrayAssociationType"
      },
      {
        en: "_Style",
        ti: ".AbstractStyleType",
        sh: "_GML"
      },
      {
        en: "verticalDatumRef",
        ti: ".VerticalDatumRefType"
      },
      {
        en: "TemporalCS",
        ti: ".TemporalCSType",
        sh: "_CoordinateSystem"
      },
      {
        en: "featureStyle",
        ti: ".FeatureStylePropertyType"
      },
      {
        en: "_association",
        ti: ".AssociationType"
      },
      {
        en: "singleOperationRef",
        ti: ".SingleOperationRefType"
      },
      {
        en: "referenceSystemRef",
        ti: ".ReferenceSystemRefType"
      },
      {
        en: "CompositeSolid",
        ti: ".CompositeSolidType",
        sh: "_Solid"
      },
      {
        en: "_TimeReferenceSystem",
        ti: ".AbstractTimeReferenceSystemType",
        sh: "Definition"
      },
      {
        en: "_Datum",
        ti: ".AbstractDatumType",
        sh: "Definition"
      },
      {
        en: "outerBoundaryIs",
        ti: ".AbstractRingPropertyType",
        sh: "exterior"
      },
      {
        en: "rectifiedGridDomain",
        ti: ".RectifiedGridDomainType",
        sh: "domainSet"
      },
      {
        en: "ellipsoidRef",
        ti: ".EllipsoidRefType"
      },
      {
        en: "member",
        ti: ".AssociationType"
      },
      {
        en: "parameterValue",
        ti: ".ParameterValueType",
        sh: "_generalParameterValue"
      },
      {
        en: "csName",
        ti: ".CodeType",
        sh: "name"
      },
      {
        en: "usesCS",
        ti: ".CoordinateSystemRefType"
      },
      {
        en: "parameterValueGroup",
        ti: ".ParameterValueGroupType",
        sh: "_generalParameterValue"
      },
      {
        en: "dataSource",
        ti: ".StringOrRefType"
      },
      {
        en: "Circle",
        ti: ".CircleType",
        sh: "Arc"
      },
      {
        en: "groupName",
        ti: ".CodeType",
        sh: "name"
      },
      {
        en: "userDefinedCSRef",
        ti: ".UserDefinedCSRefType"
      },
      {
        en: "DirectedObservation",
        ti: ".DirectedObservationType",
        sh: "Observation"
      },
      {
        en: "_TimeGeometricPrimitive",
        ti: ".AbstractTimeGeometricPrimitiveType",
        sh: "_TimePrimitive"
      },
      {
        en: "datumRef",
        ti: ".DatumRefType"
      },
      {
        en: "abstractGeneralOperationParameterRef",
        ti: ".AbstractGeneralOperationParameterRefType"
      },
      {
        en: "VerticalDatum",
        ti: ".VerticalDatumType",
        sh: "_Datum"
      },
      {
        en: "MovingObjectStatus",
        ti: ".MovingObjectStatusType",
        sh: "_TimeSlice"
      },
      {
        en: "_DiscreteCoverage",
        ti: ".AbstractDiscreteCoverageType",
        sh: "_Coverage"
      },
      {
        en: "OperationParameter",
        ti: ".OperationParameterType",
        sh: "_GeneralOperationParameter"
      },
      {
        en: "curveMembers",
        ti: ".CurveArrayPropertyType"
      },
      {
        en: "duration"
      },
      {
        en: "isolated",
        ti: ".IsolatedPropertyType"
      },
      {
        en: "generalConversionRef",
        ti: ".GeneralConversionRefType"
      },
      {
        en: "usesGeodeticDatum",
        ti: ".GeodeticDatumRefType"
      },
      {
        en: "validTime",
        ti: ".TimePrimitivePropertyType"
      },
      {
        en: "MultiSolid",
        ti: ".MultiSolidType",
        sh: "_GeometricAggregate"
      },
      {
        en: "Observation",
        ti: ".ObservationType",
        sh: "_Feature"
      },
      {
        en: "pointMember",
        ti: ".PointPropertyType"
      },
      {
        en: "status",
        ti: ".StringOrRefType"
      },
      {
        en: "DefinitionProxy",
        ti: ".DefinitionProxyType",
        sh: "Definition"
      },
      {
        en: "derivationUnitTerm",
        ti: ".DerivationUnitTermType"
      },
      {
        en: "_CoordinateOperation",
        ti: ".AbstractCoordinateOperationType",
        sh: "Definition"
      },
      {
        en: "subject",
        ti: ".TargetPropertyType",
        sh: "target"
      },
      {
        en: "datumID",
        ti: ".IdentifierType"
      },
      {
        en: "PolarCS",
        ti: ".PolarCSType",
        sh: "_CoordinateSystem"
      },
      {
        en: "LabelExpression",
        sc: ".LabelType"
      },
      {
        en: "SphericalCS",
        ti: ".SphericalCSType",
        sh: "_CoordinateSystem"
      },
      {
        en: "maximalComplex",
        ti: ".TopoComplexMemberType"
      },
      {
        en: "parameterID",
        ti: ".IdentifierType"
      },
      {
        en: "Tin",
        ti: ".TinType",
        sh: "TriangulatedSurface"
      },
      {
        en: "CompositeValue",
        ti: ".CompositeValueType"
      },
      {
        en: "Node",
        ti: ".NodeType",
        sh: "_TopoPrimitive"
      },
      {
        en: "_Object",
        ti: "AnyType"
      },
      {
        en: "multiPointProperty",
        ti: ".MultiPointPropertyType"
      },
      {
        en: "DirectedObservationAtDistance",
        ti: ".DirectedObservationAtDistanceType",
        sh: "DirectedObservation"
      },
      {
        en: "primeMeridianRef",
        ti: ".PrimeMeridianRefType"
      },
      {
        en: "CategoryExtent",
        ti: ".CategoryExtentType"
      },
      {
        en: "history",
        ti: ".HistoryPropertyType"
      },
      {
        en: "RectifiedGrid",
        ti: ".RectifiedGridType",
        sh: "_ImplicitGeometry"
      },
      {
        en: "methodID",
        ti: ".IdentifierType"
      },
      {
        en: "DirectionVector",
        ti: ".DirectionVectorType"
      },
      {
        en: "timeInterval",
        ti: ".TimeIntervalLengthType"
      },
      {
        en: "operationVersion"
      },
      {
        en: "VerticalCRS",
        ti: ".VerticalCRSType",
        sh: "_CoordinateReferenceSystem"
      },
      {
        en: "_Feature",
        ti: ".AbstractFeatureType",
        sh: "_GML"
      },
      {
        en: "geometryMembers",
        ti: ".GeometryArrayPropertyType"
      },
      {
        en: "featureMember",
        ti: ".FeaturePropertyType"
      },
      {
        en: "PrimeMeridian",
        ti: ".PrimeMeridianType",
        sh: "Definition"
      },
      {
        en: "BSpline",
        ti: ".BSplineType",
        sh: "_CurveSegment"
      },
      {
        en: "definedByConversion",
        ti: ".GeneralConversionRefType"
      },
      {
        en: "Point",
        ti: ".PointType",
        sh: "_GeometricPrimitive"
      },
      {
        en: "Curve",
        ti: ".CurveType",
        sh: "_Curve"
      },
      {
        en: "verticalDatumType",
        ti: ".VerticalDatumTypeType"
      },
      {
        en: "Envelope",
        ti: ".EnvelopeType"
      },
      {
        en: "_GeneralOperationParameter",
        ti: ".AbstractGeneralOperationParameterType",
        sh: "Definition"
      },
      {
        en: "geodeticDatumRef",
        ti: ".GeodeticDatumRefType"
      },
      {
        en: "usesTemporalDatum",
        ti: ".TemporalDatumRefType"
      },
      {
        en: "_TimeTopologyPrimitive",
        ti: ".AbstractTimeTopologyPrimitiveType",
        sh: "_TimePrimitive"
      },
      {
        en: "modifiedCoordinate",
        ti: "Integer"
      },
      {
        en: "scope"
      },
      {
        en: "rangeParameters",
        ti: ".RangeParametersType"
      },
      {
        en: "EngineeringCRS",
        ti: ".EngineeringCRSType",
        sh: "_CoordinateReferenceSystem"
      },
      {
        en: "boundingBox",
        ti: ".EnvelopeType"
      },
      {
        en: "ellipsoidName",
        ti: ".CodeType",
        sh: "name"
      },
      {
        en: "coord",
        ti: ".CoordType"
      },
      {
        en: "ellipsoidID",
        ti: ".IdentifierType"
      },
      {
        en: "File",
        ti: ".FileType"
      },
      {
        en: "curveProperty",
        ti: ".CurvePropertyType"
      },
      {
        en: "_CRS",
        ti: ".AbstractReferenceSystemType",
        sh: "_ReferenceSystem"
      },
      {
        en: "verticalCRSRef",
        ti: ".VerticalCRSRefType"
      },
      {
        en: "MappingRule",
        ti: ".StringOrRefType"
      },
      {
        en: "meridianID",
        ti: ".IdentifierType"
      },
      {
        en: "ImageCRS",
        ti: ".ImageCRSType",
        sh: "_CoordinateReferenceSystem"
      },
      {
        en: "TopologyStyle",
        ti: ".TopologyStyleType",
        sh: "_GML"
      },
      {
        en: "integerValueList",
        ti: {
          t: "l",
          bti: "Integer"
        }
      },
      {
        en: "inverseFlattening",
        ti: ".MeasureType"
      },
      {
        en: "innerBoundaryIs",
        ti: ".AbstractRingPropertyType",
        sh: "interior"
      },
      {
        en: "surfaceMembers",
        ti: ".SurfaceArrayPropertyType"
      },
      {
        en: "metaDataProperty",
        ti: ".MetaDataPropertyType"
      },
      {
        en: "MultiCurve",
        ti: ".MultiCurveType",
        sh: "_GeometricAggregate"
      },
      {
        en: "Boolean",
        ti: "Boolean"
      },
      {
        en: "TemporalCRS",
        ti: ".TemporalCRSType",
        sh: "_CoordinateReferenceSystem"
      },
      {
        en: "ArcByBulge",
        ti: ".ArcByBulgeType",
        sh: "ArcStringByBulge"
      },
      {
        en: "sphericalCSRef",
        ti: ".SphericalCSRefType"
      },
      {
        en: "Bezier",
        ti: ".BezierType",
        sh: "BSpline"
      },
      {
        en: "patches",
        ti: ".SurfacePatchArrayPropertyType"
      },
      {
        en: "_strictAssociation",
        ti: ".AssociationType"
      },
      {
        en: "_FeatureCollection",
        ti: ".AbstractFeatureCollectionType",
        sh: "_Feature"
      },
      {
        en: "MultiPoint",
        ti: ".MultiPointType",
        sh: "_GeometricAggregate"
      },
      {
        en: "catalogSymbol",
        ti: ".CodeType"
      },
      {
        en: "rowIndex",
        ti: "Integer"
      },
      {
        en: "_TimeObject",
        ti: ".AbstractTimeObjectType",
        sh: "_GML"
      },
      {
        en: "remarks",
        ti: ".StringOrRefType"
      },
      {
        en: "sourceDimensions",
        ti: "Integer"
      },
      {
        en: "surfaceArrayProperty",
        ti: ".SurfaceArrayPropertyType"
      },
      {
        en: "baseSurface",
        ti: ".SurfacePropertyType"
      },
      {
        en: "polygonMember",
        ti: ".PolygonPropertyType"
      },
      {
        en: "directedFace",
        ti: ".DirectedFacePropertyType"
      },
      {
        en: "valueProperty",
        ti: ".ValuePropertyType"
      },
      {
        en: "ValueArray",
        ti: ".ValueArrayType",
        sh: "CompositeValue"
      },
      {
        en: "LineString",
        ti: ".LineStringType",
        sh: "_Curve"
      },
      {
        en: "derivedCRSRef",
        ti: ".DerivedCRSRefType"
      },
      {
        en: "directedNode",
        ti: ".DirectedNodePropertyType"
      },
      {
        en: "geometryMember",
        ti: ".GeometryPropertyType"
      },
      {
        en: "polygonProperty",
        ti: ".PolygonPropertyType"
      },
      {
        en: "cylindricalCSRef",
        ti: ".CylindricalCSRefType"
      },
      {
        en: "tupleList",
        ti: ".CoordinatesType"
      },
      {
        en: "TimeCalendarEra",
        ti: ".TimeCalendarEraType",
        sh: "Definition"
      },
      {
        en: "usesEllipsoid",
        ti: ".EllipsoidRefType"
      },
      {
        en: "CoordinateSystemAxis",
        ti: ".CoordinateSystemAxisType",
        sh: "Definition"
      },
      {
        en: "_ContinuousCoverage",
        ti: ".AbstractContinuousCoverageType",
        sh: "_Coverage"
      },
      {
        en: "datumName",
        ti: ".CodeType",
        sh: "name"
      },
      {
        en: "derivedCRSType",
        ti: ".DerivedCRSTypeType"
      },
      {
        en: "TimeTopologyComplex",
        ti: ".TimeTopologyComplexType",
        sh: "_TimeComplex"
      },
      {
        en: "operationRef",
        ti: ".OperationRefType"
      },
      {
        en: "degrees",
        ti: ".DegreesType"
      },
      {
        en: "Definition",
        ti: ".DefinitionType",
        sh: "_GML"
      },
      {
        en: "multiExtentOf",
        ti: ".MultiSurfacePropertyType"
      },
      {
        en: "QuantityExtent",
        ti: ".QuantityExtentType"
      },
      {
        en: "TimeOrdinalEra",
        ti: ".TimeOrdinalEraType"
      },
      {
        en: "Surface",
        ti: ".SurfaceType",
        sh: "_Surface"
      },
      {
        en: "usesEngineeringDatum",
        ti: ".EngineeringDatumRefType"
      },
      {
        en: "baseCRS",
        ti: ".CoordinateReferenceSystemRefType"
      },
      {
        en: "EllipsoidalCS",
        ti: ".EllipsoidalCSType",
        sh: "_CoordinateSystem"
      },
      {
        en: "LocationKeyWord",
        ti: ".CodeType"
      },
      {
        en: "Dictionary",
        ti: ".DictionaryType",
        sh: "Definition"
      },
      {
        en: "srsName",
        ti: ".CodeType",
        sh: "name"
      },
      {
        en: "passThroughOperationRef",
        ti: ".PassThroughOperationRefType"
      },
      {
        en: "dmsAngleValue",
        ti: ".DMSAngleType"
      },
      {
        en: "ImageDatum",
        ti: ".ImageDatumType",
        sh: "_Datum"
      },
      {
        en: "CartesianCS",
        ti: ".CartesianCSType",
        sh: "_CoordinateSystem"
      },
      {
        en: "topoPrimitiveMember",
        ti: ".TopoPrimitiveMemberType"
      },
      {
        en: "angle",
        ti: ".MeasureType"
      },
      {
        en: "realizationEpoch",
        ti: "Calendar"
      },
      {
        en: "Transformation",
        ti: ".TransformationType",
        sh: "_GeneralTransformation"
      },
      {
        en: "ProjectedCRS",
        ti: ".ProjectedCRSType",
        sh: "_GeneralDerivedCRS"
      },
      {
        en: "generalTransformationRef",
        ti: ".GeneralTransformationRefType"
      },
      {
        en: "anchorPoint",
        ti: ".CodeType"
      },
      {
        en: "_TimeSlice",
        ti: ".AbstractTimeSliceType",
        sh: "_GML"
      },
      {
        en: "crsRef",
        ti: ".CRSRefType"
      },
      {
        en: "coordinateReferenceSystemRef",
        ti: ".CoordinateReferenceSystemRefType"
      },
      {
        en: "includesParameter",
        ti: ".AbstractGeneralOperationParameterRefType"
      },
      {
        en: "subComplex",
        ti: ".TopoComplexMemberType"
      },
      {
        en: "Quantity",
        ti: ".MeasureType"
      },
      {
        en: "direction",
        ti: ".DirectionPropertyType"
      },
      {
        en: "position",
        ti: ".PointPropertyType"
      },
      {
        en: "conversionToPreferredUnit",
        ti: ".ConversionToPreferredUnitType"
      },
      {
        en: "meridianName",
        ti: ".CodeType",
        sh: "name"
      },
      {
        en: "doubleOrNullTupleList",
        ti: {
          t: "l"
        }
      },
      {
        en: "Face",
        ti: ".FaceType",
        sh: "_TopoPrimitive"
      },
      {
        en: "directedEdge",
        ti: ".DirectedEdgePropertyType"
      },
      {
        en: "MultiGeometry",
        ti: ".MultiGeometryType",
        sh: "_GeometricAggregate"
      },
      {
        en: "curveArrayProperty",
        ti: ".CurveArrayPropertyType"
      },
      {
        en: "valueOfParameter",
        ti: ".OperationParameterRefType"
      },
      {
        en: "_MetaData",
        ti: ".AbstractMetaDataType",
        sh: "_Object"
      },
      {
        en: "topoSurfaceProperty",
        ti: ".TopoSurfacePropertyType"
      },
      {
        en: "CountList",
        ti: {
          t: "l"
        }
      },
      {
        en: "operationMethodRef",
        ti: ".OperationMethodRefType"
      },
      {
        en: "axisAbbrev",
        ti: ".CodeType"
      },
      {
        en: "transformationRef",
        ti: ".TransformationRefType"
      },
      {
        en: "_GeneralTransformation",
        ti: ".AbstractGeneralTransformationType",
        sh: "_Operation"
      },
      {
        en: "resultOf",
        ti: ".AssociationType"
      },
      {
        en: "Rectangle",
        ti: ".RectangleType",
        sh: "_SurfacePatch"
      },
      {
        en: "seconds",
        ti: "Decimal"
      },
      {
        en: "Cylinder",
        ti: ".CylinderType",
        sh: "_GriddedSurface"
      },
      {
        en: "TopoSolid",
        ti: ".TopoSolidType",
        sh: "_TopoPrimitive"
      },
      {
        en: "parameterName",
        ti: ".CodeType",
        sh: "name"
      },
      {
        en: "usesParameter",
        ti: ".AbstractGeneralOperationParameterRefType"
      },
      {
        en: "coordinates",
        ti: ".CoordinatesType"
      },
      {
        en: "LinearCS",
        ti: ".LinearCSType",
        sh: "_CoordinateSystem"
      },
      {
        en: "GeometricComplex",
        ti: ".GeometricComplexType",
        sh: "_Geometry"
      },
      {
        en: "usesSphericalCS",
        ti: ".SphericalCSRefType"
      },
      {
        en: "FeatureStyle",
        ti: ".FeatureStyleType",
        sh: "_GML"
      },
      {
        en: "dictionaryEntry",
        ti: ".DictionaryEntryType"
      },
      {
        en: "_ImplicitGeometry",
        ti: ".AbstractGeometryType",
        sh: "_Geometry"
      },
      {
        en: "PolygonPatch",
        ti: ".PolygonPatchType",
        sh: "_SurfacePatch"
      },
      {
        en: "groupID",
        ti: ".IdentifierType"
      },
      {
        en: "coordinateSystemAxisRef",
        ti: ".CoordinateSystemAxisRefType"
      },
      {
        en: "verticalExtent",
        ti: ".EnvelopeType"
      },
      {
        en: "description",
        ti: ".StringOrRefType"
      },
      {
        en: "validArea",
        ti: ".ExtentType"
      },
      {
        en: "semiMajorAxis",
        ti: ".MeasureType"
      },
      {
        en: "TimePeriod",
        ti: ".TimePeriodType",
        sh: "_TimeGeometricPrimitive"
      },
      {
        en: "boundingPolygon",
        ti: ".PolygonType"
      },
      {
        en: "TimeInstant",
        ti: ".TimeInstantType",
        sh: "_TimeGeometricPrimitive"
      },
      {
        en: "container",
        ti: ".ContainerPropertyType"
      },
      {
        en: "surfaceMember",
        ti: ".SurfacePropertyType"
      },
      {
        en: "_Surface",
        ti: ".AbstractSurfaceType",
        sh: "_GeometricPrimitive"
      },
      {
        en: "TopoCurve",
        ti: ".TopoCurveType"
      },
      {
        en: "MultiSolidCoverage",
        ti: ".MultiSolidCoverageType",
        sh: "_DiscreteCoverage"
      },
      {
        en: "_reference",
        ti: ".ReferenceType"
      },
      {
        en: "_GeometricAggregate",
        ti: ".AbstractGeometricAggregateType",
        sh: "_Geometry"
      },
      {
        en: "stringValue"
      },
      {
        en: "location",
        ti: ".LocationPropertyType"
      },
      {
        en: "obliqueCartesianCSRef",
        ti: ".ObliqueCartesianCSRefType"
      },
      {
        en: "usesCartesianCS",
        ti: ".CartesianCSRefType"
      },
      {
        en: "MultiPointCoverage",
        ti: ".MultiPointCoverageType",
        sh: "_DiscreteCoverage"
      },
      {
        en: "multiSolidDomain",
        ti: ".MultiSolidDomainType",
        sh: "domainSet"
      },
      {
        en: "_Ring",
        ti: ".AbstractRingType",
        sh: "_Geometry"
      },
      {
        en: "GridCoverage",
        ti: ".GridCoverageType",
        sh: "_DiscreteCoverage"
      },
      {
        en: "Null",
        ti: {
          t: "l"
        }
      },
      {
        en: "imageDatumRef",
        ti: ".ImageDatumRefType"
      },
      {
        en: "Ellipsoid",
        ti: ".EllipsoidType",
        sh: "Definition"
      },
      {
        en: "valueComponents",
        ti: ".ValueArrayPropertyType"
      },
      {
        en: "lineStringProperty",
        ti: ".LineStringPropertyType"
      },
      {
        en: "MultiLineString",
        ti: ".MultiLineStringType",
        sh: "_GeometricAggregate"
      },
      {
        en: "multiSolidProperty",
        ti: ".MultiSolidPropertyType"
      },
      {
        en: "OffsetCurve",
        ti: ".OffsetCurveType",
        sh: "_CurveSegment"
      },
      {
        en: "multiEdgeOf",
        ti: ".MultiCurvePropertyType"
      },
      {
        en: "operationParameterRef",
        ti: ".OperationParameterRefType"
      },
      {
        en: "curveMember",
        ti: ".CurvePropertyType"
      },
      {
        en: "target",
        ti: ".TargetPropertyType"
      },
      {
        en: "covarianceMatrix",
        ti: ".CovarianceMatrixType",
        sh: "_positionalAccuracy"
      },
      {
        en: "VerticalCS",
        ti: ".VerticalCSType",
        sh: "_CoordinateSystem"
      },
      {
        en: "_SurfacePatch",
        ti: ".AbstractSurfacePatchType"
      },
      {
        en: "geographicCRSRef",
        ti: ".GeographicCRSRefType"
      },
      {
        en: "Grid",
        ti: ".GridType",
        sh: "_ImplicitGeometry"
      },
      {
        en: "_TimePrimitive",
        ti: ".AbstractTimePrimitiveType",
        sh: "_TimeObject"
      },
      {
        en: "DefinitionCollection",
        ti: ".DictionaryType",
        sh: "Definition"
      },
      {
        en: "track",
        ti: ".TrackType",
        sh: "history"
      },
      {
        en: "LabelStyle",
        ti: ".LabelStyleType",
        sh: "_GML"
      },
      {
        en: "usesVerticalDatum",
        ti: ".VerticalDatumRefType"
      },
      {
        en: "TimeEdge",
        ti: ".TimeEdgeType",
        sh: "_TimeTopologyPrimitive"
      },
      {
        en: "Solid",
        ti: ".SolidType",
        sh: "_Solid"
      },
      {
        en: "TopoPoint",
        ti: ".TopoPointType"
      },
      {
        en: "multiCenterOf",
        ti: ".MultiPointPropertyType"
      },
      {
        en: "_generalParameterValue",
        ti: ".AbstractGeneralParameterValueType"
      },
      {
        en: "timePosition",
        ti: ".TimePositionType"
      },
      {
        en: "TopoVolume",
        ti: ".TopoVolumeType"
      },
      {
        en: "Triangle",
        ti: ".TriangleType",
        sh: "_SurfacePatch"
      },
      {
        en: "ArcString",
        ti: ".ArcStringType",
        sh: "_CurveSegment"
      },
      {
        en: "_CurveSegment",
        ti: ".AbstractCurveSegmentType"
      },
      {
        en: "GeocentricCRS",
        ti: ".GeocentricCRSType",
        sh: "_CoordinateReferenceSystem"
      },
      {
        en: "booleanValue",
        ti: "Boolean"
      },
      {
        en: "pixelInCell",
        ti: ".PixelInCellType"
      },
      {
        en: "temporalDatumRef",
        ti: ".TemporalDatumRefType"
      },
      {
        en: "maximumOccurs",
        ti: "Integer"
      },
      {
        en: "isSphere"
      },
      {
        en: "superComplex",
        ti: ".TopoComplexMemberType"
      },
      {
        en: "valuesOfGroup",
        ti: ".OperationParameterGroupRefType"
      },
      {
        en: "centerLineOf",
        ti: ".CurvePropertyType"
      },
      {
        en: "usesEllipsoidalCS",
        ti: ".EllipsoidalCSRefType"
      },
      {
        en: "CubicSpline",
        ti: ".CubicSplineType",
        sh: "_CurveSegment"
      },
      {
        en: "RectifiedGridCoverage",
        ti: ".RectifiedGridCoverageType",
        sh: "_DiscreteCoverage"
      },
      {
        en: "priorityLocation",
        ti: ".PriorityLocationPropertyType",
        sh: "location"
      },
      {
        en: "valueComponent",
        ti: ".ValuePropertyType"
      },
      {
        en: "usesObliqueCartesianCS",
        ti: ".ObliqueCartesianCSRefType"
      },
      {
        en: "TimeClock",
        ti: ".TimeClockType",
        sh: "_TimeReferenceSystem"
      },
      {
        en: "gridDomain",
        ti: ".GridDomainType",
        sh: "domainSet"
      },
      {
        en: "minimumOccurs",
        ti: "Integer"
      },
      {
        en: "_Solid",
        ti: ".AbstractSolidType",
        sh: "_GeometricPrimitive"
      },
      {
        en: "solidProperty",
        ti: ".SolidPropertyType"
      },
      {
        en: "_positionalAccuracy",
        ti: ".AbstractPositionalAccuracyType"
      },
      {
        en: "CategoryList",
        ti: ".CodeOrNullListType"
      },
      {
        en: "rangeSet",
        ti: ".RangeSetType"
      },
      {
        en: "_SingleOperation",
        ti: ".AbstractCoordinateOperationType",
        sh: "_CoordinateOperation"
      },
      {
        en: "TemporalDatum",
        ti: ".TemporalDatumType",
        sh: "_Datum"
      },
      {
        en: "lineStringMember",
        ti: ".LineStringPropertyType"
      },
      {
        en: "Bag",
        ti: ".BagType",
        sh: "_GML"
      },
      {
        en: "coordinateOperationID",
        ti: ".IdentifierType"
      }
    ]
  };
  return {
    GML_3_1_1: GML_3_1_1
  };
};
if (typeof define === "function" && define.amd) {
  define([], GML_3_1_1_Module_Factory);
} else {
  var GML_3_1_1_Module = GML_3_1_1_Module_Factory();
  if (typeof module !== "undefined" && module.exports) {
    /**
     *
     * @type {{n: string, dens: string, dans: string, deps: string[], tis: *[], eis: *[]}|GML_3_1_1}
     */
    module.exports.GML_3_1_1 = GML_3_1_1_Module.GML_3_1_1;
  } else {
    var GML_3_1_1 = GML_3_1_1_Module.GML_3_1_1;
  }
}
