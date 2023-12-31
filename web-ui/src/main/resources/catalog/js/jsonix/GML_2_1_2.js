goog.provide("GML_2_1_2");

var GML_2_1_2_Module_Factory = function () {
  var GML_2_1_2 = {
    n: "GML_2_1_2",
    dens: "http://www.opengis.net/gml",
    dans: "http://www.w3.org/1999/xlink",
    tis: [
      {
        ln: "MultiPointType",
        bti: "GML_2_1_2.GeometryCollectionType"
      },
      {
        ln: "AbstractGeometryType",
        ps: [
          {
            n: "gid",
            ti: "ID",
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
          }
        ]
      },
      {
        ln: "MultiLineStringType",
        bti: "GML_2_1_2.GeometryCollectionType"
      },
      {
        ln: "LinearRingMemberType",
        bti: "GML_2_1_2.GeometryAssociationType"
      },
      {
        ln: "GeometryAssociationType",
        ps: [
          {
            n: "geometry",
            mx: false,
            dom: false,
            typed: false,
            en: "_Geometry",
            ti: "GML_2_1_2.AbstractGeometryType",
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
        ln: "LineStringMemberType",
        bti: "GML_2_1_2.GeometryAssociationType"
      },
      {
        ln: "AbstractFeatureCollectionType",
        bti: "GML_2_1_2.AbstractFeatureCollectionBaseType",
        ps: [
          {
            n: "featureMember",
            col: true,
            ti: "GML_2_1_2.FeatureAssociationType"
          }
        ]
      },
      {
        ln: "AbstractFeatureType",
        ps: [
          {
            n: "description"
          },
          {
            n: "name"
          },
          {
            n: "boundedBy",
            ti: "GML_2_1_2.BoundingShapeType"
          },
          {
            n: "fid",
            ti: "ID",
            an: {
              lp: "fid"
            },
            t: "a"
          }
        ]
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
        ln: "GeometryCollectionType",
        bti: "GML_2_1_2.AbstractGeometryCollectionBaseType",
        ps: [
          {
            n: "geometryMember",
            col: true,
            mx: false,
            dom: false,
            typed: false,
            ti: "GML_2_1_2.GeometryAssociationType",
            t: "er"
          }
        ]
      },
      {
        ln: "PolygonPropertyType",
        bti: "GML_2_1_2.GeometryAssociationType"
      },
      {
        ln: "MultiLineStringPropertyType",
        bti: "GML_2_1_2.GeometryAssociationType"
      },
      {
        ln: "MultiPolygonPropertyType",
        bti: "GML_2_1_2.GeometryAssociationType"
      },
      {
        ln: "PolygonType",
        bti: "GML_2_1_2.AbstractGeometryType",
        ps: [
          {
            n: "outerBoundaryIs",
            ti: "GML_2_1_2.LinearRingMemberType"
          },
          {
            n: "innerBoundaryIs",
            col: true,
            ti: "GML_2_1_2.LinearRingMemberType"
          }
        ]
      },
      {
        ln: "MultiPointPropertyType",
        bti: "GML_2_1_2.GeometryAssociationType"
      },
      {
        ln: "PointPropertyType",
        bti: "GML_2_1_2.GeometryAssociationType"
      },
      {
        ln: "MultiGeometryPropertyType",
        bti: "GML_2_1_2.GeometryAssociationType"
      },
      {
        ln: "LineStringPropertyType",
        bti: "GML_2_1_2.GeometryAssociationType"
      },
      {
        ln: "BoundingShapeType",
        ps: [
          {
            n: "box",
            en: "Box",
            ti: "GML_2_1_2.BoxType"
          },
          {
            n: "_null",
            en: "null"
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
        ln: "BoxType",
        bti: "GML_2_1_2.AbstractGeometryType",
        ps: [
          {
            n: "coord",
            col: true,
            ti: "GML_2_1_2.CoordType"
          },
          {
            n: "coordinates",
            ti: "GML_2_1_2.CoordinatesType"
          }
        ]
      },
      {
        ln: "PointType",
        bti: "GML_2_1_2.AbstractGeometryType",
        ps: [
          {
            n: "coord",
            ti: "GML_2_1_2.CoordType"
          },
          {
            n: "coordinates",
            ti: "GML_2_1_2.CoordinatesType"
          }
        ]
      },
      {
        ln: "FeatureAssociationType",
        ps: [
          {
            n: "feature",
            mx: false,
            dom: false,
            typed: false,
            en: "_Feature",
            ti: "GML_2_1_2.AbstractFeatureType",
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
        ln: "LineStringType",
        bti: "GML_2_1_2.AbstractGeometryType",
        ps: [
          {
            n: "coord",
            col: true,
            ti: "GML_2_1_2.CoordType"
          },
          {
            n: "coordinates",
            ti: "GML_2_1_2.CoordinatesType"
          }
        ]
      },
      {
        ln: "MultiPolygonType",
        bti: "GML_2_1_2.GeometryCollectionType"
      },
      {
        ln: "PointMemberType",
        bti: "GML_2_1_2.GeometryAssociationType"
      },
      {
        ln: "LinearRingType",
        bti: "GML_2_1_2.AbstractGeometryType",
        ps: [
          {
            n: "coord",
            col: true,
            ti: "GML_2_1_2.CoordType"
          },
          {
            n: "coordinates",
            ti: "GML_2_1_2.CoordinatesType"
          }
        ]
      },
      {
        ln: "PolygonMemberType",
        bti: "GML_2_1_2.GeometryAssociationType"
      },
      {
        ln: "AbstractFeatureCollectionBaseType",
        bti: "GML_2_1_2.AbstractFeatureType"
      },
      {
        ln: "AbstractGeometryCollectionBaseType",
        bti: "GML_2_1_2.AbstractGeometryType"
      },
      {
        ln: "GeometryPropertyType",
        ps: [
          {
            n: "geometry",
            mx: false,
            dom: false,
            typed: false,
            en: "_Geometry",
            ti: "GML_2_1_2.AbstractGeometryType",
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
        t: "enum",
        ln: "NullType",
        vs: ["inapplicable", "unknown", "unavailable", "missing"]
      }
    ],
    eis: [
      {
        en: "multiPointProperty",
        ti: "GML_2_1_2.MultiPointPropertyType",
        sh: "_geometryProperty"
      },
      {
        en: "coverage",
        ti: "GML_2_1_2.PolygonPropertyType",
        sh: "polygonProperty"
      },
      {
        en: "geometryMember",
        ti: "GML_2_1_2.GeometryAssociationType"
      },
      {
        en: "pointProperty",
        ti: "GML_2_1_2.PointPropertyType",
        sh: "_geometryProperty"
      },
      {
        en: "multiGeometryProperty",
        ti: "GML_2_1_2.MultiGeometryPropertyType",
        sh: "_geometryProperty"
      },
      {
        en: "boundedBy",
        ti: "GML_2_1_2.BoundingShapeType"
      },
      {
        en: "multiCenterLineOf",
        ti: "GML_2_1_2.MultiLineStringPropertyType",
        sh: "multiLineStringProperty"
      },
      {
        en: "centerLineOf",
        ti: "GML_2_1_2.LineStringPropertyType",
        sh: "lineStringProperty"
      },
      {
        en: "coordinates",
        ti: "GML_2_1_2.CoordinatesType"
      },
      {
        en: "Point",
        ti: "GML_2_1_2.PointType",
        sh: "_Geometry"
      },
      {
        en: "Box",
        ti: "GML_2_1_2.BoxType"
      },
      {
        en: "_geometryProperty",
        ti: "GML_2_1_2.GeometryAssociationType"
      },
      {
        en: "multiCoverage",
        ti: "GML_2_1_2.MultiPolygonPropertyType",
        sh: "multiPolygonProperty"
      },
      {
        en: "featureMember",
        ti: "GML_2_1_2.FeatureAssociationType"
      },
      {
        en: "multiPolygonProperty",
        ti: "GML_2_1_2.MultiPolygonPropertyType",
        sh: "_geometryProperty"
      },
      {
        en: "LineString",
        ti: "GML_2_1_2.LineStringType",
        sh: "_Geometry"
      },
      {
        en: "MultiPolygon",
        ti: "GML_2_1_2.MultiPolygonType",
        sh: "_Geometry"
      },
      {
        en: "_Geometry",
        ti: "GML_2_1_2.AbstractGeometryType"
      },
      {
        en: "multiLocation",
        ti: "GML_2_1_2.MultiPointPropertyType",
        sh: "multiPointProperty"
      },
      {
        en: "pointMember",
        ti: "GML_2_1_2.PointMemberType",
        sh: "geometryMember"
      },
      {
        en: "multiPosition",
        ti: "GML_2_1_2.MultiPointPropertyType",
        sh: "multiPointProperty"
      },
      {
        en: "name"
      },
      {
        en: "MultiGeometry",
        ti: "GML_2_1_2.GeometryCollectionType",
        sh: "_Geometry"
      },
      {
        en: "position",
        ti: "GML_2_1_2.PointPropertyType",
        sh: "pointProperty"
      },
      {
        en: "multiEdgeOf",
        ti: "GML_2_1_2.MultiLineStringPropertyType",
        sh: "multiLineStringProperty"
      },
      {
        en: "location",
        ti: "GML_2_1_2.PointPropertyType",
        sh: "pointProperty"
      },
      {
        en: "_Feature",
        ti: "GML_2_1_2.AbstractFeatureType"
      },
      {
        en: "polygonProperty",
        ti: "GML_2_1_2.PolygonPropertyType",
        sh: "_geometryProperty"
      },
      {
        en: "centerOf",
        ti: "GML_2_1_2.PointPropertyType",
        sh: "pointProperty"
      },
      {
        en: "LinearRing",
        ti: "GML_2_1_2.LinearRingType",
        sh: "_Geometry"
      },
      {
        en: "lineStringProperty",
        ti: "GML_2_1_2.LineStringPropertyType",
        sh: "_geometryProperty"
      },
      {
        en: "polygonMember",
        ti: "GML_2_1_2.PolygonMemberType",
        sh: "geometryMember"
      },
      {
        en: "outerBoundaryIs",
        ti: "GML_2_1_2.LinearRingMemberType"
      },
      {
        en: "multiCenterOf",
        ti: "GML_2_1_2.MultiPointPropertyType",
        sh: "multiPointProperty"
      },
      {
        en: "edgeOf",
        ti: "GML_2_1_2.LineStringPropertyType",
        sh: "lineStringProperty"
      },
      {
        en: "MultiLineString",
        ti: "GML_2_1_2.MultiLineStringType",
        sh: "_Geometry"
      },
      {
        en: "MultiPoint",
        ti: "GML_2_1_2.MultiPointType",
        sh: "_Geometry"
      },
      {
        en: "innerBoundaryIs",
        ti: "GML_2_1_2.LinearRingMemberType"
      },
      {
        en: "geometryProperty",
        ti: "GML_2_1_2.GeometryAssociationType"
      },
      {
        en: "description"
      },
      {
        en: "lineStringMember",
        ti: "GML_2_1_2.LineStringMemberType",
        sh: "geometryMember"
      },
      {
        en: "_FeatureCollection",
        ti: "GML_2_1_2.AbstractFeatureCollectionType",
        sh: "_Feature"
      },
      {
        en: "coord",
        ti: "GML_2_1_2.CoordType"
      },
      {
        en: "_GeometryCollection",
        ti: "GML_2_1_2.GeometryCollectionType",
        sh: "_Geometry"
      },
      {
        en: "multiLineStringProperty",
        ti: "GML_2_1_2.MultiLineStringPropertyType",
        sh: "_geometryProperty"
      },
      {
        en: "extentOf",
        ti: "GML_2_1_2.PolygonPropertyType",
        sh: "polygonProperty"
      },
      {
        en: "multiExtentOf",
        ti: "GML_2_1_2.MultiPolygonPropertyType",
        sh: "multiPolygonProperty"
      },
      {
        en: "Polygon",
        ti: "GML_2_1_2.PolygonType",
        sh: "_Geometry"
      }
    ]
  };
  return {
    GML_2_1_2: GML_2_1_2
  };
};
if (typeof define === "function" && define.amd) {
  define([], GML_2_1_2_Module_Factory);
} else {
  if (typeof module !== "undefined" && module.exports) {
    /**
     *
     * @type {{n: string, dens: string, dans: string, tis: *[], eis: *[]}|GML_2_1_2}
     */
    module.exports.GML_2_1_2 = GML_2_1_2_Module_Factory().GML_2_1_2;
  } else {
    var GML_2_1_2 = GML_2_1_2_Module_Factory().GML_2_1_2;
  }
}
