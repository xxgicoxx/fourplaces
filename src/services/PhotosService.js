const { request } = require('../utils');

const { apiConfig } = require('../configs');

class PhotosService {
  constructor(config) {
    this._config = config;
  }

  /**
   * /photos/PHOTO_ID
   *
   * @see https://developer.foursquare.com/docs/api-reference/photos/details
   * @param {string} photoId Photo ID
   * @param {Object} options request params
   * @returns {Promise} return Promise
   */
  async details(photoId, options) {
    try {
      const qs = Object.assign(this._config, options);

      const details = await request({
        url: (`${apiConfig.url}${apiConfig.photos.details}`).replace('PHOTO_ID', photoId), qs,
      });

      return details;
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * /photos/add
   *
   * @see https://developer.foursquare.com/docs/api-reference/photos/add
   * @param {Object} options request params
   * @returns {Promise} return Promise
   */
  async add(options) {
    try {
      const qs = Object.assign(this._config, options);

      const add = await request({
        url: (`${apiConfig.url}${apiConfig.photos.add}`), method: 'POST', qs,
      });

      return add;
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = PhotosService;
