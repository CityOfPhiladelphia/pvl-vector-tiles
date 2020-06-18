export default {
  id: 'test-style',
  type: 'http-get',
  dependent: 'none',
  resettable: false,
  url: 'https://www.arcgis.com/sharing/rest/content/items/f455d84d5aab4d64b1191e0d2eed42b1/resources/styles/root.json',
  options: {
    params: {
      f: 'json',
    },
  },
};
