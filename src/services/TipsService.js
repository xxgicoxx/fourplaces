const request = require('request-promise-native');

const { apiConfig } = require('../configs');

class TipsService {
  constructor(config) {
    this._config = config;
  }

  /**
    * /tips/TIP_ID
    *
    * @see https://developer.foursquare.com/docs/api/tips/details
    * @param {!string} tipId
    * @param {Object} options request params
    * @returns {Promise} return Promise
    */
  async details(tipId, options) {
    try {
      const qs = { ...this._config, ...options };

      const details = await request({
        url: (`${apiConfig.url}${apiConfig.tips.details}`).replace('TIP_ID', tipId), method: 'GET', json: true, qs,
      });

      return details;
    } catch (ex) {
      throw new Error(ex);
    }
  }

  /**
    * /tips/add
    *
    * @see https://developer.foursquare.com/docs/api/tips/add
    * @param {!Object} options request params
    * @returns {Promise} return Promise
    */
  async add(options = {}) {
    try {
      const qs = { ...this._config, ...options };

      const add = await request({
        url: (`${apiConfig.url}${apiConfig.tips.add}`), method: 'POST', json: true, qs,
      });

      return add;
    } catch (ex) {
      throw new Error(ex);
    }
  }
}

module.exports = TipsService;
