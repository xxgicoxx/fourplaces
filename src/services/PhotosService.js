const request = require('request-promise-native');

const apiConfig = require('../configs/api');

class PhotosService {
  constructor(config) {
    this._config = config;
  }

  /**
    * /photos/PHOTO_ID
    *
    * @see https://developer.foursquare.com/docs/api/photos/details
    * @param {!string} photoId
    * @param {Object} options request params
    * @returns {Promise} return Promise
    */
  async details(photoId, options) {
    try {
      const qs = { ...this._config, ...options };

      const details = await request({
        url: (`${apiConfig.url}${apiConfig.photos.details}`).replace('PHOTO_ID', photoId), method: 'GET', json: true, qs,
      });

      return details;
    } catch (ex) {
      throw new Error(ex);
    }
  }

  /**
    * /photos/add
    *
    * @see https://developer.foursquare.com/docs/api/photos/add
    * @param {!Object} options request params
    * @returns {Promise} return Promise
    */
  async add(options = {}) {
    try {
      const qs = { ...this._config, ...options };

      const add = await request({
        url: (`${apiConfig.url}${apiConfig.photos.add}`), method: 'POST', json: true, qs,
      });

      return add;
    } catch (ex) {
      throw new Error(ex);
    }
  }
}

module.exports = PhotosService;
