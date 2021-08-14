const { request } = require('../utils');

const { apiConfig } = require('../configs');

class PhotosService {
  constructor(config) {
    this.config = config;
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
    const qs = { ...this.config, ...options };

    const details = await request({
      url: (`${apiConfig.url}${apiConfig.photos.details}`).replace('PHOTO_ID', photoId), qs,
    });

    return details;
  }

  /**
   * /photos/add
   *
   * @see https://developer.foursquare.com/docs/api-reference/photos/add
   * @param {Object} options request params
   * @returns {Promise} return Promise
   */
  async add(options) {
    const qs = { ...this.config, ...options };

    const add = await request({
      url: (`${apiConfig.url}${apiConfig.photos.add}`), method: 'POST', qs,
    });

    return add;
  }
}

module.exports = PhotosService;
