type Config = { [key: string]: any }

export const config: Config = {
  app: {
    siteURLOrigin: "https://ordsprak.sls.fi",
    projectNameDB: "ordsprak",
    projectId: 5,
    backendBaseURL: "https://api.sls.fi/digitaledition",
    alternateFacsimileBaseURL: "",
    i18n: {
      languages: [
        { code: "sv", label: "Svenska", region: "FI" }
      ],
      defaultLanguage: "sv",
      multilingualCollectionTableOfContents: false,
      multilingualReadingTextLanguages: [],
      multilingualNamedEntityData: false
    },
    enableRouterLoadingBar: true,
    openGraphMetaTags: {
      enabled: true,
      image: {
        sv: {
          altText: "Illustration med två rader av stiliserade citattecken i pastellfärger. Översta raden är gul och grön, nedersta raden orange och blå. Centrerad text på illustrationen: Finlandssvenska ordspråk och talesätt.",
          URL: "assets/images/open-graph/finlandssvenska_ordsprak_och_talesatt-og.jpg"
        }
      }
    },
    prebuild: {
      sitemap: true,
      staticCollectionMenus: true
    },
    ssr: {
      collectionSideMenu: false
    }
  },
  collections: {
    addTEIClassNames: false,
    replaceImageAssetsPaths: false,
    enableLegacyIDs: false,
    enableMathJax: false,
    firstTextItem: {
      54: "54_6040", 74: "74_7051", 53: "53_6017", 56: "56_6176", 86: "86_7443",
      85: "85_7432", 73: "73_7009", 70: "70_6905", 62: "62_6470", 64: "64_6570",
      50: "50_5954", 77: "77_7152", 59: "59_6325", 79: "79_7242", 84: "84_7416",
      52: "52_5989", 78: "78_7178", 51: "51_5972", 66: "66_6687", 69: "69_6806",
      87: "87_7622", 71: "71_6957", 75: "75_7075", 63: "63_6503", 81: "81_7304",
      58: "58_6296", 61: "61_6418", 68: "68_6790", 83: "83_7397", 88: "88_7819",
      55: "55_6118", 89: "89_8059", 57: "57_6265", 60: "60_6353", 76: "76_7115",
      67: "67_6771", 82: "82_7383", 65: "65_6630", 72: "72_7000", 80: "80_7251",
      49: "49_5904"
    },
    frontMatterPages: {
      cover: false,
      title: false,
      foreword: false,
      introduction: false
    },
    highlightSearchMatches: true,
    inlineIllustrations: [],
    mediaCollectionMappings: {},
    order: [
      [
        54, 74, 53, 56, 86,
        85, 73, 70, 62, 64,
        50, 77, 59, 79, 84,
        52, 78, 51, 66, 69,
        87, 71, 75, 63, 81,
        58, 61, 68, 83, 88,
        55, 89, 57, 60, 76,
        67, 82, 65, 72, 80,
        49
      ]
    ]
  },
  ebooks: [
    {
      title: "Ordspråken – urgamla och internationella",
      filename: "ekrem-ordspraken-urgamla-och-internationella-2017.pdf",
      externalFileURL: "",
      coverURL: "",
      downloadOptions: [
        {
          url: "assets/ebooks/ekrem-ordspraken-urgamla-och-internationella-2017.pdf",
          label: "PDF"
        }
      ]
    }
  ],
  page: {
    about: {
      initialPageNode: "01"
    },
    elasticSearch: {
      enableFilters: true,
      enableSortOptions: false,
      filterGroupsOpenByDefault: ["Collection", "Region"],
      hitsPerPage: 15,
      indices: ["ordsprak"],
      openReadingTextWithComments: false,
      textHighlightFragmentSize: 75,
      textHighlightType: "fvh",
      textTitleHighlightType: "fvh",
      typeFilterGroupOptions: [],
      fixedFilters: [
        {
          terms: {
            deleted: ["0"]
          }
        },
        {
          terms: {
            published: ["2"]
          }
        }
      ],
      additionalSourceFields: [],
      aggregations: {
        Collection: {
          terms: {
            field: "publication_data.collection_name.keyword",
            size: 45,
            order: {_key: "asc"}
          }
        },
        Region: {
          terms: {
            field: "region",
            size: 30,
            order: {_key: "asc"}
          }
        },
        Signum: {
          terms: {
            field: "signum",
            size: 160
          }
        }
      }
    },
    foreword: {
      showURNButton: true,
      showViewOptionsButton: true
    },
    home: {
      bannerImage: {
        altTexts: {
          sv: "Illustration med två rader av stiliserade citattecken i pastellfärger. Översta raden är gul och grön, nedersta raden orange och blå."
        },
        intrinsicSize: {
          height: 467,
          width: 1920
        },
        orientationPortrait: false,
        alternateSources: [
          {
            srcset: "assets/images/ordsprak_1920_467.avif 1920w",
            type: "image/avif"
          },
          {
            srcset: "assets/images/ordsprak_1920_467.jpg 1920w",
            type: "image/jpeg"
          }
        ],
        URL: "assets/images/ordsprak_1920_467.jpg"
      },
      portraitOrientationSettings: {
        imagePlacement: {
          onRight: false,
          squareCroppedVerticalOffset: "10%"
        },
        siteTitleOnImageOnSmallScreens: false
      },
      showContentGrid: false,
      showFooter: true,
      showSearchbar: false
    },
    index: {
      keywords: {
        maxFetchSize: 500,
        showFilter: false,
        publishedStatus: 2
      },
      persons: {
        database: "elastic",
        maxFetchSize: 500,
        showFilter: true,
        publishedStatus: 2
      },
      places: {
        maxFetchSize: 500,
        showFilter: false,
        publishedStatus: 2
      },
      works: {
        publishedStatus: 2
      }
    },
    introduction: {
      hasSeparateTOC: true,
      showTextDownloadButton: true,
      showURNButton: true,
      showViewOptionsButton: true,
      viewOptions: {
        personInfo: true,
        placeInfo: false,
        workInfo: true,
        paragraphNumbering: true,
        pageBreakEdition: true
      }
    },
    mediaCollection: {
      showURNButton: true
    },
    text: {
      defaultViews: ["readingtext"],
      defaultViewOptions: [],
      showTextDownloadButton: false,
      showURNButton: false,
      showViewOptionsButton: true,
      viewOptions: {
        comments: false,
        personInfo: false,
        placeInfo: false,
        emendations: false,
        normalisations: false,
        workInfo: false,
        abbreviations: false,
        paragraphNumbering: false,
        pageBreakOriginal: false,
        pageBreakEdition: false
      },
      viewTypes: {
        showAll: false,
        readingtext: true,
        comments: false,
        facsimiles: false,
        manuscripts: false,
        variants: false,
        illustrations: false,
        legend: false,
        metadata: false
      }
    },
    title: {
      loadContentFromMarkdown: false,
      showURNButton: true,
      showViewOptionsButton: true
    }
  },
  component: {
    collectionSideMenu: {
      sortableCollectionsAlphabetical: [],
      sortableCollectionsChronological: [],
      sortableCollectionsCategorical: [],
      categoricalSortingPrimaryKey: "",
      categoricalSortingSecondaryKey: ""
    },
    contentGrid: {
      includeEbooks: false,
      includeMediaCollection: false,
      mediaCollectionCoverURL: "",
      mediaCollectionCoverAltTexts: {
        sv: "Alt-text",
        fi: "Alt-teksti"
      },
      showTitles: true
    },
    epub: {
      showTOCButton: true,
      showURNButton: false,
      showViewOptionsButton: true
    },
    facsimiles: {
      imageQuality: 4,
      showTitle: true
    },
    mainSideMenu: {
      items: {
        home: false,
        about: true,
        ebooks: true,
        collections: true,
        mediaCollections: false,
        indexKeywords: true,
        indexPersons: false,
        indexPlaces: true,
        indexWorks: false
      }
    },
    manuscripts: {
      showTitle: true,
      showNormalizedToggle: true,
      showOpenLegendButton: true
    },
    topMenu: {
      showAboutButton: true,
      showContentButton: true,
      showElasticSearchButton: true,
      showURNButton: false,
      showLanguageButton: false,
      showSiteLogo: true,
      siteLogoDefaultImageURL: "assets/images/logo/SLS_logo_full_black_346x112.png",
      siteLogoMobileImageURL: "assets/images/logo/SLS_logo_symbol_black_112x112.png",
      siteLogoLinkURL: "https://www.sls.fi/",
      siteLogoDimensions: {
        default: {
          height: 56,
          width: 173
        },
        mobile: {
          height: 56,
          width: 56
        }
      }
    },
    variants: {
      showOpenLegendButton: true
    }
  },
  modal: {
    downloadTexts: {
      introductionFormats: {
        xml: true,
        html: false,
        xhtml: false,
        txt: false,
        print: true
      },
      readingTextFormats: {
        xml: true,
        html: false,
        xhtml: false,
        txt: false,
        print: true
      },
      commentsFormats: {
        xml: true,
        html: false,
        xhtml: false,
        txt: false,
        print: true
      },
      manuscriptsFormats: {
        xml: false,
        html: false,
        xhtml: false,
        txt: false,
        print: true
      }
    },
    fullscreenImageViewer: {
      imageQuality: 4
    },
    referenceData: {
      URNResolverURL: "https://urn.fi/",
    },
    namedEntity: {
      showAliasAndPrevLastName: false,
      showArticleData: false,
      showCityRegionCountry: true,
      showDescriptionLabel: false,
      showGalleryOccurrences: false,
      showMediaData: false,
      showOccupation: false,
      showOccurrences: true,
      showType: false,
      useSimpleWorkMetadata: true
    }
  }
}
