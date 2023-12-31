goog.provide("SLD_1_0_0");

var SLD_1_0_0_Module_Factory = function () {
  var SLD_1_0_0 = {
    n: "SLD_1_0_0",
    dens: "http://www.opengis.net/sld",
    dans: "http://www.w3.org/1999/xlink",
    tis: [
      {
        ln: "RemoteOWS",
        ps: [
          {
            n: "service",
            en: "Service"
          },
          {
            n: "onlineResource",
            en: "OnlineResource",
            ti: "SLD_1_0_0.OnlineResource"
          }
        ]
      },
      {
        ln: "OnlineResource",
        ps: [
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
        ln: "UserStyle",
        ps: [
          {
            n: "name",
            en: "Name"
          },
          {
            n: "title",
            en: "Title"
          },
          {
            n: "_abstract",
            en: "Abstract"
          },
          {
            n: "isDefault",
            en: "IsDefault",
            ti: "Boolean"
          },
          {
            n: "featureTypeStyle",
            col: true,
            en: "FeatureTypeStyle",
            ti: "SLD_1_0_0.FeatureTypeStyle"
          }
        ]
      },
      {
        ln: "FeatureTypeStyle",
        ps: [
          {
            n: "name",
            en: "Name"
          },
          {
            n: "title",
            en: "Title"
          },
          {
            n: "_abstract",
            en: "Abstract"
          },
          {
            n: "featureTypeName",
            en: "FeatureTypeName"
          },
          {
            n: "semanticTypeIdentifier",
            col: true,
            en: "SemanticTypeIdentifier"
          },
          {
            n: "rule",
            col: true,
            en: "Rule",
            ti: "SLD_1_0_0.Rule"
          }
        ]
      },
      {
        ln: "Rule",
        ps: [
          {
            n: "name",
            en: "Name"
          },
          {
            n: "title",
            en: "Title"
          },
          {
            n: "_abstract",
            en: "Abstract"
          },
          {
            n: "legendGraphic",
            en: "LegendGraphic",
            ti: "SLD_1_0_0.LegendGraphic"
          },
          {
            n: "filter",
            en: {
              lp: "Filter",
              ns: "http://www.opengis.net/ogc"
            },
            ti: "Filter_1_0_0.FilterType"
          },
          {
            n: "elseFilter",
            en: "ElseFilter",
            ti: "SLD_1_0_0.ElseFilter"
          },
          {
            n: "minScaleDenominator",
            en: "MinScaleDenominator",
            ti: "Double"
          },
          {
            n: "maxScaleDenominator",
            en: "MaxScaleDenominator",
            ti: "Double"
          },
          {
            n: "symbolizer",
            col: true,
            mx: false,
            dom: false,
            typed: false,
            en: "Symbolizer",
            ti: "SLD_1_0_0.SymbolizerType",
            t: "er"
          }
        ]
      },
      {
        ln: "LegendGraphic",
        ps: [
          {
            n: "graphic",
            en: "Graphic",
            ti: "SLD_1_0_0.Graphic"
          }
        ]
      },
      {
        ln: "Graphic",
        ps: [
          {
            n: "externalGraphicOrMark",
            col: true,
            etis: [
              {
                en: "ExternalGraphic",
                ti: "SLD_1_0_0.ExternalGraphic"
              },
              {
                en: "Mark",
                ti: "SLD_1_0_0.Mark"
              }
            ],
            t: "es"
          },
          {
            n: "opacity",
            en: "Opacity",
            ti: "SLD_1_0_0.ParameterValueType"
          },
          {
            n: "size",
            en: "Size",
            ti: "SLD_1_0_0.ParameterValueType"
          },
          {
            n: "rotation",
            en: "Rotation",
            ti: "SLD_1_0_0.ParameterValueType"
          }
        ]
      },
      {
        ln: "ExternalGraphic",
        ps: [
          {
            n: "onlineResource",
            en: "OnlineResource",
            ti: "SLD_1_0_0.OnlineResource"
          },
          {
            n: "format",
            en: "Format"
          }
        ]
      },
      {
        ln: "Mark",
        ps: [
          {
            n: "wellKnownName",
            en: "WellKnownName"
          },
          {
            n: "fill",
            en: "Fill",
            ti: "SLD_1_0_0.Fill"
          },
          {
            n: "stroke",
            en: "Stroke",
            ti: "SLD_1_0_0.Stroke"
          }
        ]
      },
      {
        ln: "Fill",
        ps: [
          {
            n: "graphicFill",
            en: "GraphicFill",
            ti: "SLD_1_0_0.GraphicFill"
          },
          {
            n: "cssParameter",
            col: true,
            en: "CssParameter",
            ti: "SLD_1_0_0.CssParameter"
          }
        ]
      },
      {
        ln: "GraphicFill",
        ps: [
          {
            n: "graphic",
            en: "Graphic",
            ti: "SLD_1_0_0.Graphic"
          }
        ]
      },
      {
        ln: "CssParameter",
        bti: "SLD_1_0_0.ParameterValueType",
        ps: [
          {
            n: "name",
            an: {
              lp: "name"
            },
            t: "a"
          }
        ]
      },
      {
        ln: "ParameterValueType",
        ps: [
          {
            n: "content",
            col: true,
            dom: false,
            typed: false,
            en: {
              lp: "expression",
              ns: "http://www.opengis.net/ogc"
            },
            ti: "Filter_1_0_0.ExpressionType",
            t: "er"
          }
        ]
      },
      {
        ln: "Stroke",
        ps: [
          {
            n: "graphicFill",
            en: "GraphicFill",
            ti: "SLD_1_0_0.GraphicFill"
          },
          {
            n: "graphicStroke",
            en: "GraphicStroke",
            ti: "SLD_1_0_0.GraphicStroke"
          },
          {
            n: "cssParameter",
            col: true,
            en: "CssParameter",
            ti: "SLD_1_0_0.CssParameter"
          }
        ]
      },
      {
        ln: "GraphicStroke",
        ps: [
          {
            n: "graphic",
            en: "Graphic",
            ti: "SLD_1_0_0.Graphic"
          }
        ]
      },
      {
        ln: "ElseFilter"
      },
      {
        ln: "SymbolizerType"
      },
      {
        ln: "PointPlacement",
        ps: [
          {
            n: "anchorPoint",
            en: "AnchorPoint",
            ti: "SLD_1_0_0.AnchorPoint"
          },
          {
            n: "displacement",
            en: "Displacement",
            ti: "SLD_1_0_0.Displacement"
          },
          {
            n: "rotation",
            en: "Rotation",
            ti: "SLD_1_0_0.ParameterValueType"
          }
        ]
      },
      {
        ln: "AnchorPoint",
        ps: [
          {
            n: "anchorPointX",
            en: "AnchorPointX",
            ti: "SLD_1_0_0.ParameterValueType"
          },
          {
            n: "anchorPointY",
            en: "AnchorPointY",
            ti: "SLD_1_0_0.ParameterValueType"
          }
        ]
      },
      {
        ln: "Displacement",
        ps: [
          {
            n: "displacementX",
            en: "DisplacementX",
            ti: "SLD_1_0_0.ParameterValueType"
          },
          {
            n: "displacementY",
            en: "DisplacementY",
            ti: "SLD_1_0_0.ParameterValueType"
          }
        ]
      },
      {
        ln: "Histogram"
      },
      {
        ln: "ImageOutline",
        ps: [
          {
            n: "lineSymbolizer",
            en: "LineSymbolizer",
            ti: "SLD_1_0_0.LineSymbolizer"
          },
          {
            n: "polygonSymbolizer",
            en: "PolygonSymbolizer",
            ti: "SLD_1_0_0.PolygonSymbolizer"
          }
        ]
      },
      {
        ln: "LineSymbolizer",
        bti: "SLD_1_0_0.SymbolizerType",
        ps: [
          {
            n: "geometry",
            en: "Geometry",
            ti: "SLD_1_0_0.Geometry"
          },
          {
            n: "stroke",
            en: "Stroke",
            ti: "SLD_1_0_0.Stroke"
          }
        ]
      },
      {
        ln: "PolygonSymbolizer",
        bti: "SLD_1_0_0.SymbolizerType",
        ps: [
          {
            n: "geometry",
            en: "Geometry",
            ti: "SLD_1_0_0.Geometry"
          },
          {
            n: "fill",
            en: "Fill",
            ti: "SLD_1_0_0.Fill"
          },
          {
            n: "stroke",
            en: "Stroke",
            ti: "SLD_1_0_0.Stroke"
          }
        ]
      },
      {
        ln: "LayerFeatureConstraints",
        ps: [
          {
            n: "featureTypeConstraint",
            col: true,
            en: "FeatureTypeConstraint",
            ti: "SLD_1_0_0.FeatureTypeConstraint"
          }
        ]
      },
      {
        ln: "FeatureTypeConstraint",
        ps: [
          {
            n: "featureTypeName",
            en: "FeatureTypeName"
          },
          {
            n: "filter",
            en: {
              lp: "Filter",
              ns: "http://www.opengis.net/ogc"
            },
            ti: "Filter_1_0_0.FilterType"
          },
          {
            n: "extent",
            col: true,
            en: "Extent",
            ti: "SLD_1_0_0.Extent"
          }
        ]
      },
      {
        ln: "Extent",
        ps: [
          {
            n: "name",
            en: "Name"
          },
          {
            n: "value",
            en: "Value"
          }
        ]
      },
      {
        ln: "StyledLayerDescriptor",
        ps: [
          {
            n: "name",
            en: "Name"
          },
          {
            n: "title",
            en: "Title"
          },
          {
            n: "_abstract",
            en: "Abstract"
          },
          {
            n: "namedLayerOrUserLayer",
            col: true,
            etis: [
              {
                en: "NamedLayer",
                ti: "SLD_1_0_0.NamedLayer"
              },
              {
                en: "UserLayer",
                ti: "SLD_1_0_0.UserLayer"
              }
            ],
            t: "es"
          },
          {
            n: "version",
            an: {
              lp: "version"
            },
            t: "a"
          }
        ]
      },
      {
        ln: "NamedLayer",
        ps: [
          {
            n: "name",
            en: "Name"
          },
          {
            n: "layerFeatureConstraints",
            en: "LayerFeatureConstraints",
            ti: "SLD_1_0_0.LayerFeatureConstraints"
          },
          {
            n: "namedStyleOrUserStyle",
            col: true,
            etis: [
              {
                en: "NamedStyle",
                ti: "SLD_1_0_0.NamedStyle"
              },
              {
                en: "UserStyle",
                ti: "SLD_1_0_0.UserStyle"
              }
            ],
            t: "es"
          }
        ]
      },
      {
        ln: "NamedStyle",
        ps: [
          {
            n: "name",
            en: "Name"
          }
        ]
      },
      {
        ln: "UserLayer",
        ps: [
          {
            n: "name",
            en: "Name"
          },
          {
            n: "remoteOWS",
            en: "RemoteOWS",
            ti: "SLD_1_0_0.RemoteOWS"
          },
          {
            n: "layerFeatureConstraints",
            en: "LayerFeatureConstraints",
            ti: "SLD_1_0_0.LayerFeatureConstraints"
          },
          {
            n: "userStyle",
            col: true,
            en: "UserStyle",
            ti: "SLD_1_0_0.UserStyle"
          }
        ]
      },
      {
        ln: "LATESTONTOP"
      },
      {
        ln: "RasterSymbolizer",
        bti: "SLD_1_0_0.SymbolizerType",
        ps: [
          {
            n: "geometry",
            en: "Geometry",
            ti: "SLD_1_0_0.Geometry"
          },
          {
            n: "opacity",
            en: "Opacity",
            ti: "SLD_1_0_0.ParameterValueType"
          },
          {
            n: "channelSelection",
            en: "ChannelSelection",
            ti: "SLD_1_0_0.ChannelSelection"
          },
          {
            n: "overlapBehavior",
            en: "OverlapBehavior",
            ti: "SLD_1_0_0.OverlapBehavior"
          },
          {
            n: "colorMap",
            en: "ColorMap",
            ti: "SLD_1_0_0.ColorMap"
          },
          {
            n: "contrastEnhancement",
            en: "ContrastEnhancement",
            ti: "SLD_1_0_0.ContrastEnhancement"
          },
          {
            n: "shadedRelief",
            en: "ShadedRelief",
            ti: "SLD_1_0_0.ShadedRelief"
          },
          {
            n: "imageOutline",
            en: "ImageOutline",
            ti: "SLD_1_0_0.ImageOutline"
          }
        ]
      },
      {
        ln: "ChannelSelection",
        ps: [
          {
            n: "redChannel",
            en: "RedChannel",
            ti: "SLD_1_0_0.SelectedChannelType"
          },
          {
            n: "greenChannel",
            en: "GreenChannel",
            ti: "SLD_1_0_0.SelectedChannelType"
          },
          {
            n: "blueChannel",
            en: "BlueChannel",
            ti: "SLD_1_0_0.SelectedChannelType"
          },
          {
            n: "grayChannel",
            en: "GrayChannel",
            ti: "SLD_1_0_0.SelectedChannelType"
          }
        ]
      },
      {
        ln: "SelectedChannelType",
        ps: [
          {
            n: "sourceChannelName",
            en: "SourceChannelName"
          },
          {
            n: "contrastEnhancement",
            en: "ContrastEnhancement",
            ti: "SLD_1_0_0.ContrastEnhancement"
          }
        ]
      },
      {
        ln: "EARLIESTONTOP"
      },
      {
        ln: "ColorMap",
        ps: [
          {
            n: "colorMapEntry",
            col: true,
            en: "ColorMapEntry",
            ti: "SLD_1_0_0.ColorMapEntry"
          }
        ]
      },
      {
        ln: "ColorMapEntry",
        ps: [
          {
            n: "color",
            an: {
              lp: "color"
            },
            t: "a"
          },
          {
            n: "opacity",
            ti: "Double",
            an: {
              lp: "opacity"
            },
            t: "a"
          },
          {
            n: "quantity",
            ti: "Double",
            an: {
              lp: "quantity"
            },
            t: "a"
          },
          {
            n: "label",
            an: {
              lp: "label"
            },
            t: "a"
          }
        ]
      },
      {
        ln: "Font",
        ps: [
          {
            n: "cssParameter",
            col: true,
            en: "CssParameter",
            ti: "SLD_1_0_0.CssParameter"
          }
        ]
      },
      {
        ln: "AVERAGE"
      },
      {
        ln: "LinePlacement",
        ps: [
          {
            n: "perpendicularOffset",
            en: "PerpendicularOffset",
            ti: "SLD_1_0_0.ParameterValueType"
          }
        ]
      },
      {
        ln: "PointSymbolizer",
        bti: "SLD_1_0_0.SymbolizerType",
        ps: [
          {
            n: "geometry",
            en: "Geometry",
            ti: "SLD_1_0_0.Geometry"
          },
          {
            n: "graphic",
            en: "Graphic",
            ti: "SLD_1_0_0.Graphic"
          }
        ]
      },
      {
        ln: "Normalize"
      },
      {
        ln: "RANDOM"
      },
      {
        ln: "ShadedRelief",
        ps: [
          {
            n: "brightnessOnly",
            en: "BrightnessOnly",
            ti: "Boolean"
          },
          {
            n: "reliefFactor",
            en: "ReliefFactor",
            ti: "Double"
          }
        ]
      },
      {
        ln: "Geometry",
        ps: [
          {
            n: "propertyName",
            en: {
              lp: "PropertyName",
              ns: "http://www.opengis.net/ogc"
            },
            ti: "Filter_1_0_0.PropertyNameType"
          }
        ]
      },
      {
        ln: "ContrastEnhancement",
        ps: [
          {
            n: "normalize",
            en: "Normalize",
            ti: "SLD_1_0_0.Normalize"
          },
          {
            n: "histogram",
            en: "Histogram",
            ti: "SLD_1_0_0.Histogram"
          },
          {
            n: "gammaValue",
            en: "GammaValue",
            ti: "Double"
          }
        ]
      },
      {
        ln: "LabelPlacement",
        ps: [
          {
            n: "pointPlacement",
            en: "PointPlacement",
            ti: "SLD_1_0_0.PointPlacement"
          },
          {
            n: "linePlacement",
            en: "LinePlacement",
            ti: "SLD_1_0_0.LinePlacement"
          }
        ]
      },
      {
        ln: "TextSymbolizer",
        bti: "SLD_1_0_0.SymbolizerType",
        ps: [
          {
            n: "geometry",
            en: "Geometry",
            ti: "SLD_1_0_0.Geometry"
          },
          {
            n: "label",
            en: "Label",
            ti: "SLD_1_0_0.ParameterValueType"
          },
          {
            n: "font",
            en: "Font",
            ti: "SLD_1_0_0.Font"
          },
          {
            n: "labelPlacement",
            en: "LabelPlacement",
            ti: "SLD_1_0_0.LabelPlacement"
          },
          {
            n: "halo",
            en: "Halo",
            ti: "SLD_1_0_0.Halo"
          },
          {
            n: "fill",
            en: "Fill",
            ti: "SLD_1_0_0.Fill"
          }
        ]
      },
      {
        ln: "Halo",
        ps: [
          {
            n: "radius",
            en: "Radius",
            ti: "SLD_1_0_0.ParameterValueType"
          },
          {
            n: "fill",
            en: "Fill",
            ti: "SLD_1_0_0.Fill"
          }
        ]
      },
      {
        ln: "OverlapBehavior",
        ps: [
          {
            n: "latestontop",
            en: "LATEST_ON_TOP",
            ti: "SLD_1_0_0.LATESTONTOP"
          },
          {
            n: "earliestontop",
            en: "EARLIEST_ON_TOP",
            ti: "SLD_1_0_0.EARLIESTONTOP"
          },
          {
            n: "average",
            en: "AVERAGE",
            ti: "SLD_1_0_0.AVERAGE"
          },
          {
            n: "random",
            en: "RANDOM",
            ti: "SLD_1_0_0.RANDOM"
          }
        ]
      }
    ],
    eis: [
      {
        en: "RemoteOWS",
        ti: "SLD_1_0_0.RemoteOWS"
      },
      {
        en: "OnlineResource",
        ti: "SLD_1_0_0.OnlineResource"
      },
      {
        en: "UserStyle",
        ti: "SLD_1_0_0.UserStyle"
      },
      {
        en: "FeatureTypeStyle",
        ti: "SLD_1_0_0.FeatureTypeStyle"
      },
      {
        en: "Rule",
        ti: "SLD_1_0_0.Rule"
      },
      {
        en: "LegendGraphic",
        ti: "SLD_1_0_0.LegendGraphic"
      },
      {
        en: "Graphic",
        ti: "SLD_1_0_0.Graphic"
      },
      {
        en: "ExternalGraphic",
        ti: "SLD_1_0_0.ExternalGraphic"
      },
      {
        en: "Mark",
        ti: "SLD_1_0_0.Mark"
      },
      {
        en: "Fill",
        ti: "SLD_1_0_0.Fill"
      },
      {
        en: "GraphicFill",
        ti: "SLD_1_0_0.GraphicFill"
      },
      {
        en: "CssParameter",
        ti: "SLD_1_0_0.CssParameter"
      },
      {
        en: "Stroke",
        ti: "SLD_1_0_0.Stroke"
      },
      {
        en: "GraphicStroke",
        ti: "SLD_1_0_0.GraphicStroke"
      },
      {
        en: "ElseFilter",
        ti: "SLD_1_0_0.ElseFilter"
      },
      {
        en: "PointPlacement",
        ti: "SLD_1_0_0.PointPlacement"
      },
      {
        en: "AnchorPoint",
        ti: "SLD_1_0_0.AnchorPoint"
      },
      {
        en: "Displacement",
        ti: "SLD_1_0_0.Displacement"
      },
      {
        en: "Histogram",
        ti: "SLD_1_0_0.Histogram"
      },
      {
        en: "ImageOutline",
        ti: "SLD_1_0_0.ImageOutline"
      },
      {
        en: "LayerFeatureConstraints",
        ti: "SLD_1_0_0.LayerFeatureConstraints"
      },
      {
        en: "FeatureTypeConstraint",
        ti: "SLD_1_0_0.FeatureTypeConstraint"
      },
      {
        en: "Extent",
        ti: "SLD_1_0_0.Extent"
      },
      {
        en: "StyledLayerDescriptor",
        ti: "SLD_1_0_0.StyledLayerDescriptor"
      },
      {
        en: "NamedLayer",
        ti: "SLD_1_0_0.NamedLayer"
      },
      {
        en: "NamedStyle",
        ti: "SLD_1_0_0.NamedStyle"
      },
      {
        en: "UserLayer",
        ti: "SLD_1_0_0.UserLayer"
      },
      {
        en: "LATEST_ON_TOP",
        ti: "SLD_1_0_0.LATESTONTOP"
      },
      {
        en: "ChannelSelection",
        ti: "SLD_1_0_0.ChannelSelection"
      },
      {
        en: "EARLIEST_ON_TOP",
        ti: "SLD_1_0_0.EARLIESTONTOP"
      },
      {
        en: "ColorMap",
        ti: "SLD_1_0_0.ColorMap"
      },
      {
        en: "ColorMapEntry",
        ti: "SLD_1_0_0.ColorMapEntry"
      },
      {
        en: "Font",
        ti: "SLD_1_0_0.Font"
      },
      {
        en: "AVERAGE",
        ti: "SLD_1_0_0.AVERAGE"
      },
      {
        en: "LinePlacement",
        ti: "SLD_1_0_0.LinePlacement"
      },
      {
        en: "Normalize",
        ti: "SLD_1_0_0.Normalize"
      },
      {
        en: "RANDOM",
        ti: "SLD_1_0_0.RANDOM"
      },
      {
        en: "ShadedRelief",
        ti: "SLD_1_0_0.ShadedRelief"
      },
      {
        en: "Geometry",
        ti: "SLD_1_0_0.Geometry"
      },
      {
        en: "ContrastEnhancement",
        ti: "SLD_1_0_0.ContrastEnhancement"
      },
      {
        en: "LabelPlacement",
        ti: "SLD_1_0_0.LabelPlacement"
      },
      {
        en: "Halo",
        ti: "SLD_1_0_0.Halo"
      },
      {
        en: "OverlapBehavior",
        ti: "SLD_1_0_0.OverlapBehavior"
      },
      {
        en: "Name"
      },
      {
        en: "Label",
        ti: "SLD_1_0_0.ParameterValueType"
      },
      {
        en: "DisplacementY",
        ti: "SLD_1_0_0.ParameterValueType"
      },
      {
        en: "GammaValue",
        ti: "Double"
      },
      {
        en: "SemanticTypeIdentifier"
      },
      {
        en: "DisplacementX",
        ti: "SLD_1_0_0.ParameterValueType"
      },
      {
        en: "MaxScaleDenominator",
        ti: "Double"
      },
      {
        en: "PolygonSymbolizer",
        ti: "SLD_1_0_0.PolygonSymbolizer",
        sh: "Symbolizer"
      },
      {
        en: "Size",
        ti: "SLD_1_0_0.ParameterValueType"
      },
      {
        en: "Radius",
        ti: "SLD_1_0_0.ParameterValueType"
      },
      {
        en: "GrayChannel",
        ti: "SLD_1_0_0.SelectedChannelType"
      },
      {
        en: "MinScaleDenominator",
        ti: "Double"
      },
      {
        en: "WellKnownName"
      },
      {
        en: "ReliefFactor",
        ti: "Double"
      },
      {
        en: "Opacity",
        ti: "SLD_1_0_0.ParameterValueType"
      },
      {
        en: "Format"
      },
      {
        en: "Rotation",
        ti: "SLD_1_0_0.ParameterValueType"
      },
      {
        en: "RedChannel",
        ti: "SLD_1_0_0.SelectedChannelType"
      },
      {
        en: "Symbolizer",
        ti: "SLD_1_0_0.SymbolizerType"
      },
      {
        en: "SourceChannelName"
      },
      {
        en: "Service"
      },
      {
        en: "Title"
      },
      {
        en: "Abstract"
      },
      {
        en: "IsDefault",
        ti: "Boolean"
      },
      {
        en: "PointSymbolizer",
        ti: "SLD_1_0_0.PointSymbolizer",
        sh: "Symbolizer"
      },
      {
        en: "PerpendicularOffset",
        ti: "SLD_1_0_0.ParameterValueType"
      },
      {
        en: "FeatureTypeName"
      },
      {
        en: "Value"
      },
      {
        en: "BlueChannel",
        ti: "SLD_1_0_0.SelectedChannelType"
      },
      {
        en: "GreenChannel",
        ti: "SLD_1_0_0.SelectedChannelType"
      },
      {
        en: "TextSymbolizer",
        ti: "SLD_1_0_0.TextSymbolizer",
        sh: "Symbolizer"
      },
      {
        en: "LineSymbolizer",
        ti: "SLD_1_0_0.LineSymbolizer",
        sh: "Symbolizer"
      },
      {
        en: "AnchorPointX",
        ti: "SLD_1_0_0.ParameterValueType"
      },
      {
        en: "RasterSymbolizer",
        ti: "SLD_1_0_0.RasterSymbolizer",
        sh: "Symbolizer"
      },
      {
        en: "BrightnessOnly",
        ti: "Boolean"
      },
      {
        en: "AnchorPointY",
        ti: "SLD_1_0_0.ParameterValueType"
      }
    ]
  };
  return {
    SLD_1_0_0: SLD_1_0_0
  };
};
if (typeof define === "function" && define.amd) {
  define([], SLD_1_0_0_Module_Factory);
} else {
  if (typeof module !== "undefined" && module.exports) {
    /**
     *
     * @type {{n: string, dens: string, dans: string, tis: *[], eis: *[]}|SLD_1_0_0}
     */
    module.exports.SLD_1_0_0 = SLD_1_0_0_Module_Factory().SLD_1_0_0;
  } else {
    var SLD_1_0_0 = SLD_1_0_0_Module_Factory().SLD_1_0_0;
  }
}
