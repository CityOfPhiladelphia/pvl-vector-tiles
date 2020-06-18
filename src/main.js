
let pictApiKey, pictSecretKey;
const host = window.location.hostname;
if (host === 'atlas-dev.phila.gov.s3-website-us-east-1.amazonaws.com') {
  pictApiKey = process.env.VUE_APP_ATLASDEV_PICTOMETRY_API_KEY;
  pictSecretKey = process.env.VUE_APP_ATLASDEV_PICTOMETRY_SECRET_KEY;
} else {
  pictApiKey = process.env.VUE_APP_PICTOMETRY_API_KEY;
  pictSecretKey = process.env.VUE_APP_PICTOMETRY_SECRET_KEY;
}

import viewerboard from '@phila/viewerboard/src/main.js';

import testStyle from './data-sources/test-style.js';

import mapToolTip from './components/MapToolTip'

const customComps = {
  'mapToolTip': mapToolTip,
};

viewerboard({
  customComps,
  // initialTiledOverlays: ['fullMarathon'],
  app: {
    title: 'Vector Tile Demo',
    tagLine: '',
  },
  // baseConfig: BASE_CONFIG_URL,
  cyclomedia: {
    enabled: true,
    // orientation: 'horizontal',
    measurementAllowed: false,
    popoutAble: true,
    recordingsUrl: 'https://atlas.cyclomedia.com/Recordings/wfs',
    username: process.env.VUE_APP_CYCLOMEDIA_USERNAME,
    password: process.env.VUE_APP_CYCLOMEDIA_PASSWORD,
    apiKey: process.env.VUE_APP_CYCLOMEDIA_API_KEY,
  },
  pictometry: {
    enabled: false,
    // orientation: 'horizontal',
    iframeId: 'pictometry-ipa',
    apiKey: pictApiKey,
    secretKey: pictSecretKey,
  },
  initialView: ['map'],
  geocoder: {
    url: function (input) {
      var inputEncoded = encodeURIComponent(input);
      return 'https://api.phila.gov/ais/v1/search/' + inputEncoded;
    },
    params: {
      gatekeeperKey: process.env.VUE_APP_GATEKEEPER_KEY,
      include_units: true,
      opa_only: true,
    },
  },
  geolocation: {
    enabled: true,
    icon: [ 'far', 'dot-circle' ],
  },
  router: {
    enabled: true,
    type: 'vue'
  },
  // dataSources: {
  //   testStyle,
  // },
  // addressInput: {
  //   width: 350,
  //   mapWidth: 300,
  //   // position: 'right',
  //   autocompleteEnabled: false,
  //   autocompleteMax: 15,
  //   placeholder: 'Search for an address',
  // },
  map: {
    type: 'mapbox',
    // tiles: 'hosted',
    containerClass: 'map-container',
    containerClassWCyclo: 'map-container',
    center: [-75.174820, 39.961120],
    minZoom: 11,
    maxZoom: 25,
    shouldInitialize: true,
    zoom: 13,
    // marathonToggle: true,
    basemapToggle: false,
  },

  // mbStyle: 'test',
  // mbStyle: 'mapbox://styles/mapbox/streets-v11',
  mbStyle: {
    version: 8,
    sources: {
      streetsVectorSource: {
        type: "vector",
        tiles: [
          'https://tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/PVL_Original/VectorTileServer/tile/{z}/{y}/{x}.pbf',
        ],
        maxzoom: 22,
      },
      pwd: {
        tiles: [
          '//tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityBasemap/MapServer/tile/{z}/{y}/{x}',
        ],
        type: 'raster',
        tileSize: 256,
      },
    },
    layers: [
      {
        id: 'pwd',
        type: 'raster',
        source: 'pwd',
      },
      // {
      //   id: 'Type0',
      //   type: 'line',
      //   source: 'streetsVectorSource',
      //   'source-layer': 'Street_Centerline_PVL',
      //   'filter': [
      //     '==',
      //     '_symbol',
      //     0
      //   ],
      //   layout: {
      //     'line-cap': 'butt',
      //     'line-join': 'miter'
      //   },
      //   paint: {
      //     'line-color': '#A3FF73',
      //     'line-width': 2
      //   }
      // },
      // {
      //   id: 'Type1',
      //   type: 'line',
      //   source: 'streetsVectorSource',
      //   'source-layer': 'Street_Centerline_PVL',
      //   'filter': [
      //     '==',
      //     '_symbol',
      //     1
      //   ],
      //   layout: {
      //     'line-cap': 'butt',
      //     'line-join': 'miter'
      //   },
      //   paint: {
      //     'line-color': '#FFFF00',
      //     'line-width': 2
      //   }
      // },
      // {
      //   id: 'Type2',
      //   type: 'line',
      //   source: 'streetsVectorSource',
      //   'source-layer': 'Street_Centerline_PVL',
      //   'filter': [
      //     '==',
      //     '_symbol',
      //     2
      //   ],
      //   layout: {
      //     'line-cap': 'butt',
      //     'line-join': 'miter'
      //   },
      //   paint: {
      //     'line-color': '#FCB3B4',
      //     'line-width': 2
      //   }
      // },
      // {
      //   id: 'Type3',
      //   type: 'line',
      //   source: 'streetsVectorSource',
      //   'source-layer': 'Street_Centerline_PVL',
      //   'filter': [
      //     '==',
      //     '_symbol',
      //     3
      //   ],
      //   layout: {
      //     'line-cap': 'butt',
      //     'line-join': 'miter'
      //   },
        // paint: {
        //   'line-color': [
        //     'case',
        //     ['boolean', ['feature-state', 'hover'], false],
        //     '#000000',
        //     '#C5E3FC',
        //   ],
        //   'line-width': 2
        // }
      // },
    ],
  },

  vectorTilesSources: {
    streetsVectorSource: {
      type: "vector",
      tiles: [
        'https://tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/PVL_Original/VectorTileServer/tile/{z}/{y}/{x}.pbf',
      ],
      maxzoom: 22,
    },
  },
  vectorTilesLayers: [
    {
      id: 'Type0',
      type: 'line',
      source: 'streetsVectorSource',
      'source-layer': 'Street_Centerline_PVL',
      'filter': [
        '==',
        '_symbol',
        0
      ],
      layout: {
        'line-cap': 'butt',
        'line-join': 'miter'
      },
      paint: {
        'line-color': '#A3FF73',
        'line-width': [
          'interpolate',
          ['exponential', 2],
          ['zoom'],
          5, 1,
          16, 8
        ],
      }
    },
    {
      id: 'Type1',
      type: 'line',
      source: 'streetsVectorSource',
      'source-layer': 'Street_Centerline_PVL',
      'filter': [
        '==',
        '_symbol',
        1
      ],
      layout: {
        'line-cap': 'butt',
        'line-join': 'miter'
      },
      paint: {
        'line-color': '#FFFF00',
        'line-width': [
          'interpolate',
          ['exponential', 2],
          ['zoom'],
          5, 1,
          16, 8
        ],
      }
    },
    {
      id: 'Type2',
      type: 'line',
      source: 'streetsVectorSource',
      'source-layer': 'Street_Centerline_PVL',
      'filter': [
        '==',
        '_symbol',
        2
      ],
      layout: {
        'line-cap': 'butt',
        'line-join': 'miter'
      },
      paint: {
        'line-color': [
          'case',
          ['boolean', ['feature-state', 'hover'], false],
          '#000000',
          '#FCB3B4',
        ],
        'line-width': [
          'interpolate',
          ['exponential', 2],
          ['zoom'],
          5, 1,
          16, 8
        ],
      }
    },
    {
      id: 'Type3',
      type: 'line',
      source: 'streetsVectorSource',
      'source-layer': 'Street_Centerline_PVL',
      'filter': [
        '==',
        '_symbol',
        3
      ],
      layout: {
        'line-cap': 'butt',
        'line-join': 'miter'
      },
      paint: {
        'line-color': [
          'case',
          ['boolean', ['feature-state', 'hover'], false],
          '#000000',
          '#C5E3FC',
        ],
        'line-width': [
          'interpolate',
          ['exponential', 2],
          ['zoom'],
          5, 1,
          16, 8
        ],
      }
    },
  ],

  basemapSources: {
    pwd: {
      source: {
        tiles: [
          '//tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityBasemap/MapServer/tile/{z}/{y}/{x}',
          // '//tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityBasemap_Labels/MapServer/tile/{z}/{y}/{x}'
        ],
        type: 'raster',
        tileSize: 256,
      },
      layer: {
        id: 'pwd',
        type: 'raster',
      },
    },
    imagery2019: {
      source: {
        tiles: [
          'https://tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityImagery_2019_3in/MapServer/tile/{z}/{y}/{x}',
          // '//tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityBasemap_Labels/MapServer/tile/{z}/{y}/{x}'
        ],
        type: 'raster',
        tileSize: 256,
      },
      layer: {
        id: 'imagery2019',
        type: 'raster',
      },
    },
  },

  basemapLabelSources:{
    cityBasemapLabels: {
      source: {
        tiles: ['//tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityBasemap_Labels/MapServer/tile/{z}/{y}/{x}'],
        type: 'raster',
        tileSize: 256,
      },
      layer: {
        id: 'cityBasemapLabels',
        type: 'raster',
      },
    },
    imageryBasemapLabels: {
      source: {
        tiles: ['//tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityImagery_Labels/MapServer/tile/{z}/{y}/{x}'],
        type: 'raster',
        tileSize: 256,
      },
      layer: {
        id: 'imageryBasemapLabels',
        type: 'raster',
      },
    },
  },

  // parcels: {
  //   source: {
  //     tiles: ['//tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/PWDParcel_ImageryOverlay/MapServer/tile/{z}/{y}/{x}'],
  //     type: 'raster',
  //     tileSize: 256,
  //   },
  //   layer: {
  //     id: 'parcels',
  //     type: 'raster',
  //   },
  // },

  overlaySources: {},
});
