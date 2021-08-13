const { request } = require('../utils');

const { apiConfig } = require('../configs');

class TipsService {
  constructor(config) {
    this._config = config;
  }

  /**
   * /tips/TIP_ID
   *
   * @see https://developer.foursquare.com/docs/api-reference/tips/details
   * @param {string} tipId Tip ID
   * @param {Object} options Request params
   * @returns {Promise} Promise
   */
  async details(tipId, options) {
    try {
      const qs = Object.assign(this._config, options);

      const details = await request({
        url: (`${apiConfig.url}${apiConfig.tips.details}`).replace('TIP_ID', tipId), qs,
      });

      return details;
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * /tips/add
   *
   * @see https://developer.foursquare.com/docs/api-reference/tips/add
   * @param {Object} options Request params
   * @returns {Promise} Promise
   */
  async add(options) {
    try {
      const qs = Object.assign(this._config, options);

      const add = await request({
        url: (`${apiConfig.url}${apiConfig.tips.add}`), method: 'POST', qs,
      });

      return add;
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = TipsService;
