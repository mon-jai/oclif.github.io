/*
 * AUTOGENERATED - DON'T EDIT
 * Your edits in this file will be overwritten in the next build!
 * Modify the docusaurus.config.js file at your site's root instead.
 */
export default {
  "title": "oclif: The Open CLI Framework",
  "tagline": "Create command line tools your users love",
  "url": "https://oclif.github.io",
  "baseUrl": "/",
  "organizationName": "oclif",
  "projectName": "oclif.github.io",
  "scripts": [
    "https://buttons.github.io/buttons.js"
  ],
  "stylesheets": [
    "https://fonts.googleapis.com/css?family=Roboto:400,700|Roboto+Mono"
  ],
  "favicon": "img/oclif_rev.svg",
  "customFields": {
    "disableHeaderTitle": true,
    "fonts": {
      "myFont": [
        "Roboto",
        "sans-serif"
      ],
      "myOtherFont": [
        "-apple-system",
        "system-ui"
      ]
    },
    "repoUrl": "https://github.com/oclif/oclif",
    "presets": [
      [
        "@docusaurus/preset-classic",
        {
          "blog": {
            "feedOptions": {
              "type": "all",
              "title": "oclif.io Blog",
              "description": "The oclif.io Blog Feed",
              "copyright": "Copyright © 2023 Salesforce"
            }
          }
        }
      ]
    ],
    "blogSidebarCount": "ALL"
  },
  "onBrokenLinks": "log",
  "onBrokenMarkdownLinks": "log",
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "showLastUpdateAuthor": true,
          "showLastUpdateTime": true,
          "editUrl": "https://github.com/oclif/oclif.github.io/tree/docs/docs/",
          "path": "../docs",
          "sidebarPath": "../website/sidebars.json"
        },
        "blog": {
          "path": "blog"
        },
        "theme": {
          "customCss": "../website/src/css/custom.css"
        }
      }
    ]
  ],
  "plugins": [],
  "themeConfig": {
    "navbar": {
      "logo": {
        "src": "img/oclif.svg",
        "srcDark": "img/oclif_rev.svg",
        "alt": "oclif",
        "href": "/",
        "target": "_self"
      },
      "items": [
        {
          "to": "docs/introduction",
          "label": "Getting Started",
          "position": "right"
        },
        {
          "to": "docs/commands",
          "label": "API Reference",
          "position": "right"
        },
        {
          "to": "blog",
          "label": "Blog",
          "position": "right"
        },
        {
          "href": "https://github.com/oclif/oclif",
          "label": "GitHub",
          "position": "right"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "links": [],
      "copyright": "Copyright © 2023 Salesforce",
      "logo": {
        "src": "img/salesforce.svg",
        "alt": "Salesforce",
        "href": "https://developer.salesforce.com",
        "width": 160,
        "height": 51
      },
      "style": "light"
    },
    "algolia": {
      "apiKey": "6032dd3bbb99cdcfacc285354871966c",
      "indexName": "oclifio",
      "appId": "Q04FC8Q6OZ",
      "contextualSearch": false,
      "searchParameters": {},
      "searchPagePath": "search"
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false
    },
    "docs": {
      "versionPersistence": "localStorage",
      "sidebar": {
        "hideable": false,
        "autoCollapseCategories": false
      }
    },
    "metadata": [],
    "prism": {
      "additionalLanguages": [],
      "theme": {
        "plain": {
          "color": "#bfc7d5",
          "backgroundColor": "#292d3e"
        },
        "styles": [
          {
            "types": [
              "comment"
            ],
            "style": {
              "color": "rgb(105, 112, 152)",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "string",
              "inserted"
            ],
            "style": {
              "color": "rgb(195, 232, 141)"
            }
          },
          {
            "types": [
              "number"
            ],
            "style": {
              "color": "rgb(247, 140, 108)"
            }
          },
          {
            "types": [
              "builtin",
              "char",
              "constant",
              "function"
            ],
            "style": {
              "color": "rgb(130, 170, 255)"
            }
          },
          {
            "types": [
              "punctuation",
              "selector"
            ],
            "style": {
              "color": "rgb(199, 146, 234)"
            }
          },
          {
            "types": [
              "variable"
            ],
            "style": {
              "color": "rgb(191, 199, 213)"
            }
          },
          {
            "types": [
              "class-name",
              "attr-name"
            ],
            "style": {
              "color": "rgb(255, 203, 107)"
            }
          },
          {
            "types": [
              "tag",
              "deleted"
            ],
            "style": {
              "color": "rgb(255, 85, 114)"
            }
          },
          {
            "types": [
              "operator"
            ],
            "style": {
              "color": "rgb(137, 221, 255)"
            }
          },
          {
            "types": [
              "boolean"
            ],
            "style": {
              "color": "rgb(255, 88, 116)"
            }
          },
          {
            "types": [
              "keyword"
            ],
            "style": {
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "doctype"
            ],
            "style": {
              "color": "rgb(199, 146, 234)",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "namespace"
            ],
            "style": {
              "color": "rgb(178, 204, 214)"
            }
          },
          {
            "types": [
              "url"
            ],
            "style": {
              "color": "rgb(221, 221, 221)"
            }
          }
        ]
      },
      "magicComments": [
        {
          "className": "theme-code-block-highlighted-line",
          "line": "highlight-next-line",
          "block": {
            "start": "highlight-start",
            "end": "highlight-end"
          }
        }
      ]
    },
    "tableOfContents": {
      "minHeadingLevel": 2,
      "maxHeadingLevel": 3
    }
  },
  "baseUrlIssueBanner": true,
  "i18n": {
    "defaultLocale": "en",
    "path": "i18n",
    "locales": [
      "en"
    ],
    "localeConfigs": {}
  },
  "onDuplicateRoutes": "warn",
  "staticDirectories": [
    "static"
  ],
  "themes": [],
  "headTags": [],
  "clientModules": [],
  "titleDelimiter": "|",
  "noIndex": false,
  "markdown": {
    "mermaid": false
  }
};
