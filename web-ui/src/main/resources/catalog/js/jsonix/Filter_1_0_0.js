goog.provide("Filter_1_0_0");

var Filter_1_0_0_Module_Factory = function () {
  var Filter_1_0_0 = {
    n: "Filter_1_0_0",
    dens: "http://www.opengis.net/ogc",
    tis: [
      {
        ln: "BinaryOperatorType",
        bti: "Filter_1_0_0.ExpressionType",
        ps: [
          {
            n: "expression",
            col: true,
            mx: false,
            dom: false,
            typed: false,
            ti: "Filter_1_0_0.ExpressionType",
            t: "er"
          }
        ]
      },
      {
        ln: "ExpressionType"
      },
      {
        ln: "BinarySpatialOpType",
        bti: "Filter_1_0_0.SpatialOpsType",
        ps: [
          {
            n: "propertyName",
            en: "PropertyName",
            ti: "Filter_1_0_0.PropertyNameType"
          },
          {
            n: "geometry",
            mx: false,
            dom: false,
            typed: false,
            en: {
              lp: "_Geometry",
              ns: "http://www.opengis.net/gml"
            },
            ti: "GML_2_1_2.AbstractGeometryType",
            t: "er"
          },
          {
            n: "box",
            en: {
              lp: "Box",
              ns: "http://www.opengis.net/gml"
            },
            ti: "GML_2_1_2.BoxType"
          }
        ]
      },
      {
        ln: "SpatialOpsType"
      },
      {
        ln: "BinaryLogicOpType",
        bti: "Filter_1_0_0.LogicOpsType",
        ps: [
          {
            n: "comparisonOpsOrSpatialOpsOrLogicOps",
            col: true,
            mx: false,
            dom: false,
            typed: false,
            etis: [
              {
                en: "comparisonOps",
                ti: "Filter_1_0_0.ComparisonOpsType"
              },
              {
                en: "spatialOps",
                ti: "Filter_1_0_0.SpatialOpsType"
              },
              {
                en: "logicOps",
                ti: "Filter_1_0_0.LogicOpsType"
              }
            ],
            t: "ers"
          }
        ]
      },
      {
        ln: "LogicOpsType"
      },
      {
        ln: "BinaryComparisonOpType",
        bti: "Filter_1_0_0.ComparisonOpsType",
        ps: [
          {
            n: "expression",
            col: true,
            mx: false,
            dom: false,
            typed: false,
            ti: "Filter_1_0_0.ExpressionType",
            t: "er"
          }
        ]
      },
      {
        ln: "ComparisonOpsType"
      },
      {
        ln: "SortByType",
        ps: [
          {
            n: "sortProperty",
            col: true,
            en: "SortProperty",
            ti: "Filter_1_0_0.SortPropertyType"
          }
        ]
      },
      {
        ln: "DistanceBufferType",
        bti: "Filter_1_0_0.SpatialOpsType",
        ps: [
          {
            n: "propertyName",
            en: "PropertyName",
            ti: "Filter_1_0_0.PropertyNameType"
          },
          {
            n: "geometry",
            mx: false,
            dom: false,
            typed: false,
            en: {
              lp: "_Geometry",
              ns: "http://www.opengis.net/gml"
            },
            ti: "GML_2_1_2.AbstractGeometryType",
            t: "er"
          },
          {
            n: "distance",
            en: "Distance",
            ti: "Filter_1_0_0.DistanceType"
          }
        ]
      },
      {
        ln: "FunctionType",
        bti: "Filter_1_0_0.ExpressionType",
        ps: [
          {
            n: "expression",
            col: true,
            mx: false,
            dom: false,
            typed: false,
            ti: "Filter_1_0_0.ExpressionType",
            t: "er"
          },
          {
            n: "name",
            t: "a"
          }
        ]
      },
      {
        ln: "LiteralType",
        ps: [
          {
            n: "content",
            col: true,
            dom: false,
            t: "ae"
          }
        ]
      },
      {
        ln: "PropertyIsBetweenType",
        bti: "Filter_1_0_0.ComparisonOpsType",
        ps: [
          {
            n: "expression",
            mx: false,
            dom: false,
            typed: false,
            ti: "Filter_1_0_0.ExpressionType",
            t: "er"
          },
          {
            n: "lowerBoundary",
            en: "LowerBoundary",
            ti: "Filter_1_0_0.LowerBoundaryType"
          },
          {
            n: "upperBoundary",
            en: "UpperBoundary",
            ti: "Filter_1_0_0.UpperBoundaryType"
          }
        ]
      },
      {
        ln: "PropertyNameType",
        bti: "Filter_1_0_0.ExpressionType"
      },
      {
        ln: "PropertyIsLikeType",
        bti: "Filter_1_0_0.ComparisonOpsType",
        ps: [
          {
            n: "propertyName",
            en: "PropertyName",
            ti: "Filter_1_0_0.PropertyNameType"
          },
          {
            n: "literal",
            en: "Literal",
            ti: "Filter_1_0_0.LiteralType"
          },
          {
            n: "wildCard",
            t: "a"
          },
          {
            n: "singleChar",
            t: "a"
          },
          {
            n: "escape",
            t: "a"
          }
        ]
      },
      {
        ln: "FeatureIdType",
        ps: [
          {
            n: "fid",
            t: "a"
          }
        ]
      },
      {
        ln: "UnaryLogicOpType",
        bti: "Filter_1_0_0.LogicOpsType",
        ps: [
          {
            n: "comparisonOps",
            mx: false,
            dom: false,
            typed: false,
            ti: "Filter_1_0_0.ComparisonOpsType",
            t: "er"
          },
          {
            n: "spatialOps",
            mx: false,
            dom: false,
            typed: false,
            ti: "Filter_1_0_0.SpatialOpsType",
            t: "er"
          },
          {
            n: "logicOps",
            mx: false,
            dom: false,
            typed: false,
            ti: "Filter_1_0_0.LogicOpsType",
            t: "er"
          }
        ]
      },
      {
        ln: "PropertyIsNullType",
        bti: "Filter_1_0_0.ComparisonOpsType",
        ps: [
          {
            n: "propertyName",
            en: "PropertyName",
            ti: "Filter_1_0_0.PropertyNameType"
          },
          {
            n: "literal",
            en: "Literal",
            ti: "Filter_1_0_0.LiteralType"
          }
        ]
      },
      {
        ln: "FilterType",
        ps: [
          {
            n: "spatialOps",
            mx: false,
            dom: false,
            typed: false,
            ti: "Filter_1_0_0.SpatialOpsType",
            t: "er"
          },
          {
            n: "comparisonOps",
            mx: false,
            dom: false,
            typed: false,
            ti: "Filter_1_0_0.ComparisonOpsType",
            t: "er"
          },
          {
            n: "logicOps",
            mx: false,
            dom: false,
            typed: false,
            ti: "Filter_1_0_0.LogicOpsType",
            t: "er"
          },
          {
            n: "featureId",
            col: true,
            en: "FeatureId",
            ti: "Filter_1_0_0.FeatureIdType"
          }
        ]
      },
      {
        ln: "BBOXType",
        bti: "Filter_1_0_0.SpatialOpsType",
        ps: [
          {
            n: "propertyName",
            en: "PropertyName",
            ti: "Filter_1_0_0.PropertyNameType"
          },
          {
            n: "box",
            en: {
              lp: "Box",
              ns: "http://www.opengis.net/gml"
            },
            ti: "GML_2_1_2.BoxType"
          }
        ]
      },
      {
        ln: "DistanceType",
        ps: [
          {
            n: "content",
            t: "v"
          },
          {
            n: "units",
            t: "a"
          }
        ]
      },
      {
        ln: "SortPropertyType",
        ps: [
          {
            n: "propertyName",
            en: "PropertyName",
            ti: "Filter_1_0_0.PropertyNameType"
          },
          {
            n: "sortOrder",
            en: "SortOrder"
          }
        ]
      },
      {
        ln: "UpperBoundaryType",
        ps: [
          {
            n: "expression",
            mx: false,
            dom: false,
            typed: false,
            ti: "Filter_1_0_0.ExpressionType",
            t: "er"
          }
        ]
      },
      {
        ln: "LowerBoundaryType",
        ps: [
          {
            n: "expression",
            mx: false,
            dom: false,
            typed: false,
            ti: "Filter_1_0_0.ExpressionType",
            t: "er"
          }
        ]
      },
      {
        t: "enum",
        ln: "SortOrderType",
        vs: ["DESC", "ASC"]
      }
    ],
    eis: [
      {
        en: "Mul",
        ti: "Filter_1_0_0.BinaryOperatorType",
        sh: "expression"
      },
      {
        en: "Sub",
        ti: "Filter_1_0_0.BinaryOperatorType",
        sh: "expression"
      },
      {
        en: "PropertyName",
        ti: "Filter_1_0_0.PropertyNameType",
        sh: "expression"
      },
      {
        en: "PropertyIsLike",
        ti: "Filter_1_0_0.PropertyIsLikeType",
        sh: "comparisonOps"
      },
      {
        en: "expression",
        ti: "Filter_1_0_0.ExpressionType"
      },
      {
        en: "logicOps",
        ti: "Filter_1_0_0.LogicOpsType"
      },
      {
        en: "PropertyIsGreaterThan",
        ti: "Filter_1_0_0.BinaryComparisonOpType",
        sh: "comparisonOps"
      },
      {
        en: "PropertyIsLessThan",
        ti: "Filter_1_0_0.BinaryComparisonOpType",
        sh: "comparisonOps"
      },
      {
        en: "Within",
        ti: "Filter_1_0_0.BinarySpatialOpType",
        sh: "spatialOps"
      },
      {
        en: "Contains",
        ti: "Filter_1_0_0.BinarySpatialOpType",
        sh: "spatialOps"
      },
      {
        en: "Filter",
        ti: "Filter_1_0_0.FilterType"
      },
      {
        en: "PropertyIsNotEqualTo",
        ti: "Filter_1_0_0.BinaryComparisonOpType",
        sh: "comparisonOps"
      },
      {
        en: "BBOX",
        ti: "Filter_1_0_0.BBOXType",
        sh: "spatialOps"
      },
      {
        en: "And",
        ti: "Filter_1_0_0.BinaryLogicOpType",
        sh: "logicOps"
      },
      {
        en: "Div",
        ti: "Filter_1_0_0.BinaryOperatorType",
        sh: "expression"
      },
      {
        en: "FeatureId",
        ti: "Filter_1_0_0.FeatureIdType"
      },
      {
        en: "Equals",
        ti: "Filter_1_0_0.BinarySpatialOpType",
        sh: "spatialOps"
      },
      {
        en: "Not",
        ti: "Filter_1_0_0.UnaryLogicOpType",
        sh: "logicOps"
      },
      {
        en: "PropertyIsNull",
        ti: "Filter_1_0_0.PropertyIsNullType",
        sh: "comparisonOps"
      },
      {
        en: "Beyond",
        ti: "Filter_1_0_0.DistanceBufferType",
        sh: "spatialOps"
      },
      {
        en: "comparisonOps",
        ti: "Filter_1_0_0.ComparisonOpsType"
      },
      {
        en: "PropertyIsLessThanOrEqualTo",
        ti: "Filter_1_0_0.BinaryComparisonOpType",
        sh: "comparisonOps"
      },
      {
        en: "SortBy",
        ti: "Filter_1_0_0.SortByType"
      },
      {
        en: "spatialOps",
        ti: "Filter_1_0_0.SpatialOpsType"
      },
      {
        en: "Add",
        ti: "Filter_1_0_0.BinaryOperatorType",
        sh: "expression"
      },
      {
        en: "Overlaps",
        ti: "Filter_1_0_0.BinarySpatialOpType",
        sh: "spatialOps"
      },
      {
        en: "Or",
        ti: "Filter_1_0_0.BinaryLogicOpType",
        sh: "logicOps"
      },
      {
        en: "Disjoint",
        ti: "Filter_1_0_0.BinarySpatialOpType",
        sh: "spatialOps"
      },
      {
        en: "Touches",
        ti: "Filter_1_0_0.BinarySpatialOpType",
        sh: "spatialOps"
      },
      {
        en: "PropertyIsBetween",
        ti: "Filter_1_0_0.PropertyIsBetweenType",
        sh: "comparisonOps"
      },
      {
        en: "PropertyIsEqualTo",
        ti: "Filter_1_0_0.BinaryComparisonOpType",
        sh: "comparisonOps"
      },
      {
        en: "DWithin",
        ti: "Filter_1_0_0.DistanceBufferType",
        sh: "spatialOps"
      },
      {
        en: "Literal",
        ti: "Filter_1_0_0.LiteralType",
        sh: "expression"
      },
      {
        en: "Intersects",
        ti: "Filter_1_0_0.BinarySpatialOpType",
        sh: "spatialOps"
      },
      {
        en: "PropertyIsGreaterThanOrEqualTo",
        ti: "Filter_1_0_0.BinaryComparisonOpType",
        sh: "comparisonOps"
      },
      {
        en: "Function",
        ti: "Filter_1_0_0.FunctionType",
        sh: "expression"
      },
      {
        en: "Crosses",
        ti: "Filter_1_0_0.BinarySpatialOpType",
        sh: "spatialOps"
      }
    ]
  };
  return {
    Filter_1_0_0: Filter_1_0_0
  };
};
if (typeof define === "function" && define.amd) {
  define([], Filter_1_0_0_Module_Factory);
} else {
  if (typeof module !== "undefined" && module.exports) {
    /**
     *
     * @type {{n: string, dens: string, tis: *[], eis: *[]}|Filter_1_0_0}
     */
    module.exports.Filter_1_0_0 = Filter_1_0_0_Module_Factory().Filter_1_0_0;
  } else {
    var Filter_1_0_0 = Filter_1_0_0_Module_Factory().Filter_1_0_0;
  }
}
