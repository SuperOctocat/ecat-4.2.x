goog.provide("OWS_1_1_0");

var OWS_1_1_0_Module_Factory = function () {
  var OWS_1_1_0 = {
    n: "OWS_1_1_0",
    dens: "http://www.opengis.net/ows/1.1",
    dans: "http://www.w3.org/1999/xlink",
    deps: ["XLink_1_0"],
    tis: [
      {
        ln: "GetResourceByIdType",
        ps: [
          {
            n: "resourceID",
            col: true,
            en: "ResourceID"
          },
          {
            n: "outputFormat",
            en: "OutputFormat"
          },
          {
            n: "service",
            an: {
              lp: "service"
            },
            t: "a"
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
        ln: "RequestMethodType",
        bti: ".OnlineResourceType",
        ps: [
          {
            n: "constraint",
            col: true,
            en: "Constraint",
            ti: ".DomainType"
          }
        ]
      },
      {
        ln: "ValuesReference",
        ps: [
          {
            n: "value",
            t: "v"
          },
          {
            n: "reference",
            an: {
              lp: "reference",
              ns: "http://www.opengis.net/ows/1.1"
            },
            t: "a"
          }
        ]
      },
      {
        ln: "AcceptFormatsType",
        ps: [
          {
            n: "outputFormat",
            col: true,
            en: "OutputFormat"
          }
        ]
      },
      {
        ln: "ReferenceGroupType",
        bti: ".BasicIdentificationType",
        ps: [
          {
            n: "abstractReferenceBase",
            col: true,
            mx: false,
            dom: false,
            typed: true,
            en: "AbstractReferenceBase",
            ti: ".AbstractReferenceBaseType",
            t: "er"
          }
        ]
      },
      {
        ln: "DomainMetadataType",
        ps: [
          {
            n: "value",
            t: "v"
          },
          {
            n: "reference",
            an: {
              lp: "reference",
              ns: "http://www.opengis.net/ows/1.1"
            },
            t: "a"
          }
        ]
      },
      {
        ln: "SectionsType",
        ps: [
          {
            n: "section",
            col: true,
            en: "Section"
          }
        ]
      },
      {
        ln: "ServiceReferenceType",
        bti: ".ReferenceType",
        ps: [
          {
            n: "requestMessage",
            en: "RequestMessage",
            ti: "AnyType"
          },
          {
            n: "requestMessageReference",
            en: "RequestMessageReference"
          }
        ]
      },
      {
        ln: "OperationsMetadata",
        ps: [
          {
            n: "operation",
            col: true,
            en: "Operation",
            ti: ".Operation"
          },
          {
            n: "parameter",
            col: true,
            en: "Parameter",
            ti: ".DomainType"
          },
          {
            n: "constraint",
            col: true,
            en: "Constraint",
            ti: ".DomainType"
          },
          {
            n: "extendedCapabilities",
            en: "ExtendedCapabilities",
            ti: "AnyType"
          }
        ]
      },
      {
        ln: "ResponsiblePartyType",
        ps: [
          {
            n: "individualName",
            en: "IndividualName"
          },
          {
            n: "organisationName",
            en: "OrganisationName"
          },
          {
            n: "positionName",
            en: "PositionName"
          },
          {
            n: "contactInfo",
            en: "ContactInfo",
            ti: ".ContactType"
          },
          {
            n: "role",
            en: "Role",
            ti: ".CodeType"
          }
        ]
      },
      {
        ln: "TelephoneType",
        ps: [
          {
            n: "voice",
            col: true,
            en: "Voice"
          },
          {
            n: "facsimile",
            col: true,
            en: "Facsimile"
          }
        ]
      },
      {
        ln: "CapabilitiesBaseType",
        ps: [
          {
            n: "serviceIdentification",
            en: "ServiceIdentification",
            ti: ".ServiceIdentification"
          },
          {
            n: "serviceProvider",
            en: "ServiceProvider",
            ti: ".ServiceProvider"
          },
          {
            n: "operationsMetadata",
            en: "OperationsMetadata",
            ti: ".OperationsMetadata"
          },
          {
            n: "version",
            an: {
              lp: "version"
            },
            t: "a"
          },
          {
            n: "updateSequence",
            an: {
              lp: "updateSequence"
            },
            t: "a"
          }
        ]
      },
      {
        ln: "ExceptionType",
        ps: [
          {
            n: "exceptionText",
            col: true,
            en: "ExceptionText"
          },
          {
            n: "exceptionCode",
            an: {
              lp: "exceptionCode"
            },
            t: "a"
          },
          {
            n: "locator",
            an: {
              lp: "locator"
            },
            t: "a"
          }
        ]
      },
      {
        ln: "ValueType",
        ps: [
          {
            n: "value",
            t: "v"
          }
        ]
      },
      {
        ln: "ServiceProvider",
        ps: [
          {
            n: "providerName",
            en: "ProviderName"
          },
          {
            n: "providerSite",
            en: "ProviderSite",
            ti: ".OnlineResourceType"
          },
          {
            n: "serviceContact",
            en: "ServiceContact",
            ti: ".ResponsiblePartySubsetType"
          }
        ]
      },
      {
        ln: "DomainType",
        bti: ".UnNamedDomainType",
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
        ln: "ManifestType",
        bti: ".BasicIdentificationType",
        ps: [
          {
            n: "referenceGroup",
            col: true,
            en: "ReferenceGroup",
            ti: ".ReferenceGroupType"
          }
        ]
      },
      {
        ln: "ReferenceType",
        bti: ".AbstractReferenceBaseType",
        ps: [
          {
            n: "identifier",
            en: "Identifier",
            ti: ".CodeType"
          },
          {
            n: "_abstract",
            col: true,
            en: "Abstract",
            ti: ".LanguageStringType"
          },
          {
            n: "format",
            en: "Format"
          },
          {
            n: "metadata",
            col: true,
            en: "Metadata",
            ti: ".MetadataType"
          }
        ]
      },
      {
        ln: "LanguageStringType",
        ps: [
          {
            n: "value",
            t: "v"
          },
          {
            n: "lang",
            an: {
              lp: "lang",
              ns: "http://www.w3.org/XML/1998/namespace"
            },
            t: "a"
          }
        ]
      },
      {
        ln: "DescriptionType",
        ps: [
          {
            n: "title",
            col: true,
            en: "Title",
            ti: ".LanguageStringType"
          },
          {
            n: "_abstract",
            col: true,
            en: "Abstract",
            ti: ".LanguageStringType"
          },
          {
            n: "keywords",
            col: true,
            en: "Keywords",
            ti: ".KeywordsType"
          }
        ]
      },
      {
        ln: "RangeType",
        ps: [
          {
            n: "minimumValue",
            en: "MinimumValue",
            ti: ".ValueType"
          },
          {
            n: "maximumValue",
            en: "MaximumValue",
            ti: ".ValueType"
          },
          {
            n: "spacing",
            en: "Spacing",
            ti: ".ValueType"
          },
          {
            n: "rangeClosure",
            ti: {
              t: "l"
            },
            an: {
              lp: "rangeClosure",
              ns: "http://www.opengis.net/ows/1.1"
            },
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
        ln: "ResponsiblePartySubsetType",
        ps: [
          {
            n: "individualName",
            en: "IndividualName"
          },
          {
            n: "positionName",
            en: "PositionName"
          },
          {
            n: "contactInfo",
            en: "ContactInfo",
            ti: ".ContactType"
          },
          {
            n: "role",
            en: "Role",
            ti: ".CodeType"
          }
        ]
      },
      {
        ln: "OnlineResourceType",
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
        ln: "BasicIdentificationType",
        bti: ".DescriptionType",
        ps: [
          {
            n: "identifier",
            en: "Identifier",
            ti: ".CodeType"
          },
          {
            n: "metadata",
            col: true,
            en: "Metadata",
            ti: ".MetadataType"
          }
        ]
      },
      {
        ln: "MetadataType",
        ps: [
          {
            n: "abstractMetaData",
            en: "AbstractMetaData",
            ti: "AnyType"
          },
          {
            n: "about",
            an: {
              lp: "about"
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
        ln: "IdentificationType",
        bti: ".BasicIdentificationType",
        ps: [
          {
            n: "boundingBox",
            col: true,
            mx: false,
            dom: false,
            typed: true,
            en: "BoundingBox",
            ti: ".BoundingBoxType",
            t: "er"
          },
          {
            n: "outputFormat",
            col: true,
            en: "OutputFormat"
          },
          {
            n: "availableCRS",
            col: true,
            mx: false,
            dom: false,
            typed: true,
            en: "AvailableCRS",
            t: "er"
          }
        ]
      },
      {
        ln: "WGS84BoundingBoxType",
        bti: ".BoundingBoxType"
      },
      {
        ln: "ContactType",
        ps: [
          {
            n: "phone",
            en: "Phone",
            ti: ".TelephoneType"
          },
          {
            n: "address",
            en: "Address",
            ti: ".AddressType"
          },
          {
            n: "onlineResource",
            en: "OnlineResource",
            ti: ".OnlineResourceType"
          },
          {
            n: "hoursOfService",
            en: "HoursOfService"
          },
          {
            n: "contactInstructions",
            en: "ContactInstructions"
          }
        ]
      },
      {
        ln: "HTTP",
        ps: [
          {
            n: "getOrPost",
            col: true,
            mx: false,
            dom: false,
            typed: true,
            etis: [
              {
                en: "Get",
                ti: ".RequestMethodType"
              },
              {
                en: "Post",
                ti: ".RequestMethodType"
              }
            ],
            t: "ers"
          }
        ]
      },
      {
        ln: "DCP",
        ps: [
          {
            n: "http",
            en: "HTTP",
            ti: ".HTTP"
          }
        ]
      },
      {
        ln: "AbstractReferenceBaseType",
        ps: [
          {
            n: "type",
            an: {
              lp: "type",
              ns: "http://www.opengis.net/ows/1.1"
            },
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
        ln: "ExceptionReport",
        ps: [
          {
            n: "exception",
            col: true,
            en: "Exception",
            ti: ".ExceptionType"
          },
          {
            n: "version",
            an: {
              lp: "version"
            },
            t: "a"
          },
          {
            n: "lang",
            an: {
              lp: "lang",
              ns: "http://www.w3.org/XML/1998/namespace"
            },
            t: "a"
          }
        ]
      },
      {
        ln: "AllowedValues",
        ps: [
          {
            n: "valueOrRange",
            col: true,
            etis: [
              {
                en: "Value",
                ti: ".ValueType"
              },
              {
                en: "Range",
                ti: ".RangeType"
              }
            ],
            t: "es"
          }
        ]
      },
      {
        ln: "AnyValue"
      },
      {
        ln: "ContentsBaseType",
        ps: [
          {
            n: "datasetDescriptionSummary",
            col: true,
            en: "DatasetDescriptionSummary",
            ti: ".DatasetDescriptionSummaryBaseType"
          },
          {
            n: "otherSource",
            col: true,
            en: "OtherSource",
            ti: ".MetadataType"
          }
        ]
      },
      {
        ln: "DatasetDescriptionSummaryBaseType",
        bti: ".DescriptionType",
        ps: [
          {
            n: "wgs84BoundingBox",
            col: true,
            en: "WGS84BoundingBox",
            ti: ".WGS84BoundingBoxType"
          },
          {
            n: "identifier",
            en: "Identifier",
            ti: ".CodeType"
          },
          {
            n: "boundingBox",
            col: true,
            mx: false,
            dom: false,
            typed: true,
            en: "BoundingBox",
            ti: ".BoundingBoxType",
            t: "er"
          },
          {
            n: "metadata",
            col: true,
            en: "Metadata",
            ti: ".MetadataType"
          },
          {
            n: "datasetDescriptionSummary",
            col: true,
            en: "DatasetDescriptionSummary",
            ti: ".DatasetDescriptionSummaryBaseType"
          }
        ]
      },
      {
        ln: "AddressType",
        ps: [
          {
            n: "deliveryPoint",
            col: true,
            en: "DeliveryPoint"
          },
          {
            n: "city",
            en: "City"
          },
          {
            n: "administrativeArea",
            en: "AdministrativeArea"
          },
          {
            n: "postalCode",
            en: "PostalCode"
          },
          {
            n: "country",
            en: "Country"
          },
          {
            n: "electronicMailAddress",
            col: true,
            en: "ElectronicMailAddress"
          }
        ]
      },
      {
        ln: "AcceptVersionsType",
        ps: [
          {
            n: "version",
            col: true,
            en: "Version"
          }
        ]
      },
      {
        ln: "UnNamedDomainType",
        ps: [
          {
            n: "allowedValues",
            en: "AllowedValues",
            ti: ".AllowedValues"
          },
          {
            n: "anyValue",
            en: "AnyValue",
            ti: ".AnyValue"
          },
          {
            n: "noValues",
            en: "NoValues",
            ti: ".NoValues"
          },
          {
            n: "valuesReference",
            en: "ValuesReference",
            ti: ".ValuesReference"
          },
          {
            n: "defaultValue",
            en: "DefaultValue",
            ti: ".ValueType"
          },
          {
            n: "meaning",
            en: "Meaning",
            ti: ".DomainMetadataType"
          },
          {
            n: "dataType",
            en: "DataType",
            ti: ".DomainMetadataType"
          },
          {
            n: "uom",
            en: "UOM",
            ti: ".DomainMetadataType"
          },
          {
            n: "referenceSystem",
            en: "ReferenceSystem",
            ti: ".DomainMetadataType"
          },
          {
            n: "metadata",
            col: true,
            en: "Metadata",
            ti: ".MetadataType"
          }
        ]
      },
      {
        ln: "GetCapabilitiesType",
        ps: [
          {
            n: "acceptVersions",
            en: "AcceptVersions",
            ti: ".AcceptVersionsType"
          },
          {
            n: "sections",
            en: "Sections",
            ti: ".SectionsType"
          },
          {
            n: "acceptFormats",
            en: "AcceptFormats",
            ti: ".AcceptFormatsType"
          },
          {
            n: "updateSequence",
            an: {
              lp: "updateSequence"
            },
            t: "a"
          }
        ]
      },
      {
        ln: "KeywordsType",
        ps: [
          {
            n: "keyword",
            col: true,
            en: "Keyword",
            ti: ".LanguageStringType"
          },
          {
            n: "type",
            en: "Type",
            ti: ".CodeType"
          }
        ]
      },
      {
        ln: "Operation",
        ps: [
          {
            n: "dcp",
            col: true,
            en: "DCP",
            ti: ".DCP"
          },
          {
            n: "parameter",
            col: true,
            en: "Parameter",
            ti: ".DomainType"
          },
          {
            n: "constraint",
            col: true,
            en: "Constraint",
            ti: ".DomainType"
          },
          {
            n: "metadata",
            col: true,
            en: "Metadata",
            ti: ".MetadataType"
          },
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
        ln: "NoValues"
      },
      {
        ln: "BoundingBoxType",
        ps: [
          {
            n: "lowerCorner",
            en: "LowerCorner",
            ti: {
              t: "l",
              bti: "Double"
            }
          },
          {
            n: "upperCorner",
            en: "UpperCorner",
            ti: {
              t: "l",
              bti: "Double"
            }
          },
          {
            n: "crs",
            an: {
              lp: "crs"
            },
            t: "a"
          },
          {
            n: "dimensions",
            ti: "Integer",
            an: {
              lp: "dimensions"
            },
            t: "a"
          }
        ]
      },
      {
        ln: "ServiceIdentification",
        bti: ".DescriptionType",
        ps: [
          {
            n: "serviceType",
            en: "ServiceType",
            ti: ".CodeType"
          },
          {
            n: "serviceTypeVersion",
            col: true,
            en: "ServiceTypeVersion"
          },
          {
            n: "profile",
            col: true,
            en: "Profile"
          },
          {
            n: "fees",
            en: "Fees"
          },
          {
            n: "accessConstraints",
            col: true,
            en: "AccessConstraints"
          }
        ]
      }
    ],
    eis: [
      {
        en: "OutputFormat"
      },
      {
        en: "OtherSource",
        ti: ".MetadataType"
      },
      {
        en: "Reference",
        ti: ".ReferenceType",
        sh: "AbstractReferenceBase"
      },
      {
        en: "Metadata",
        ti: ".MetadataType"
      },
      {
        en: "Role",
        ti: ".CodeType"
      },
      {
        en: "MaximumValue",
        ti: ".ValueType"
      },
      {
        en: "PositionName"
      },
      {
        en: "Exception",
        ti: ".ExceptionType"
      },
      {
        en: "OrganisationName"
      },
      {
        en: "PointOfContact",
        ti: ".ResponsiblePartyType"
      },
      {
        en: "IndividualName"
      },
      {
        en: "Spacing",
        ti: ".ValueType"
      },
      {
        en: "Identifier",
        ti: ".CodeType"
      },
      {
        en: "ExceptionReport",
        ti: ".ExceptionReport"
      },
      {
        en: "Meaning",
        ti: ".DomainMetadataType"
      },
      {
        en: "Title",
        ti: ".LanguageStringType"
      },
      {
        en: "ServiceReference",
        ti: ".ServiceReferenceType",
        sh: "Reference"
      },
      {
        en: "Operation",
        ti: ".Operation"
      },
      {
        en: "Fees"
      },
      {
        en: "GetCapabilities",
        ti: ".GetCapabilitiesType"
      },
      {
        en: "ReferenceSystem",
        ti: ".DomainMetadataType"
      },
      {
        en: "DataType",
        ti: ".DomainMetadataType"
      },
      {
        en: "SupportedCRS",
        sh: "AvailableCRS"
      },
      {
        en: "MinimumValue",
        ti: ".ValueType"
      },
      {
        en: "NoValues",
        ti: ".NoValues"
      },
      {
        en: "OperationsMetadata",
        ti: ".OperationsMetadata"
      },
      {
        en: "AvailableCRS"
      },
      {
        en: "WGS84BoundingBox",
        ti: ".WGS84BoundingBoxType",
        sh: "BoundingBox"
      },
      {
        en: "AnyValue",
        ti: ".AnyValue"
      },
      {
        en: "DefaultValue",
        ti: ".ValueType"
      },
      {
        en: "ReferenceGroup",
        ti: ".ReferenceGroupType"
      },
      {
        en: "AccessConstraints"
      },
      {
        en: "Get",
        ti: ".RequestMethodType",
        sc: ".HTTP"
      },
      {
        en: "InputData",
        ti: ".ManifestType"
      },
      {
        en: "Manifest",
        ti: ".ManifestType"
      },
      {
        en: "Language"
      },
      {
        en: "Post",
        ti: ".RequestMethodType",
        sc: ".HTTP"
      },
      {
        en: "BoundingBox",
        ti: ".BoundingBoxType"
      },
      {
        en: "AbstractMetaData",
        ti: "AnyType"
      },
      {
        en: "ServiceIdentification",
        ti: ".ServiceIdentification"
      },
      {
        en: "OperationResponse",
        ti: ".ManifestType"
      },
      {
        en: "ValuesReference",
        ti: ".ValuesReference"
      },
      {
        en: "HTTP",
        ti: ".HTTP"
      },
      {
        en: "ServiceProvider",
        ti: ".ServiceProvider"
      },
      {
        en: "AllowedValues",
        ti: ".AllowedValues"
      },
      {
        en: "Resource",
        ti: "AnyType"
      },
      {
        en: "Keywords",
        ti: ".KeywordsType"
      },
      {
        en: "DCP",
        ti: ".DCP"
      },
      {
        en: "AbstractReferenceBase",
        ti: ".AbstractReferenceBaseType"
      },
      {
        en: "DatasetDescriptionSummary",
        ti: ".DatasetDescriptionSummaryBaseType"
      },
      {
        en: "Abstract",
        ti: ".LanguageStringType"
      },
      {
        en: "ContactInfo",
        ti: ".ContactType"
      },
      {
        en: "GetResourceByID",
        ti: ".GetResourceByIdType"
      },
      {
        en: "Range",
        ti: ".RangeType"
      },
      {
        en: "ExtendedCapabilities",
        ti: "AnyType"
      },
      {
        en: "Value",
        ti: ".ValueType"
      },
      {
        en: "UOM",
        ti: ".DomainMetadataType"
      }
    ]
  };
  return {
    OWS_1_1_0: OWS_1_1_0
  };
};
if (typeof define === "function" && define.amd) {
  define([], OWS_1_1_0_Module_Factory);
} else {
  var OWS_1_1_0_Module = OWS_1_1_0_Module_Factory();
  if (typeof module !== "undefined" && module.exports) {
    /**
     *
     * @type {{n: string, dens: string, dans: string, deps: string[], tis: *[], eis: *[]}|OWS_1_1_0}
     */
    module.exports.OWS_1_1_0 = OWS_1_1_0_Module.OWS_1_1_0;
  } else {
    var OWS_1_1_0 = OWS_1_1_0_Module.OWS_1_1_0;
  }
}
