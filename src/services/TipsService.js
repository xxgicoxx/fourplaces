const { constants, request } = require('../utils');

const { apiConfig } = require('../configs');

class TipsService {
  constructor(config) {
    this.config = config;
  }

  /**
   * /tips/TIP_ID
   *
   * @see https://developer.foursquare.com/docs/api-reference/tips/details
   * @param {string} tipId Tip ID
   * @param {Object} options Query parameters
   *
   * @returns {Promise} Promise
   */
  async details(tipId, options) {
    const qs = { ...this.config, ...options };

    const details = await request({
      url: (`${apiConfig.url}${apiConfig.tips.details}`).replace(constants.TIP_ID, tipId), qs,
    });

    return details;
  }

  /**
   * /tips/add
   *
   * @see https://developer.foursquare.com/docs/api-reference/tips/add
   * @param {Object} options Query parameters
   *
   * @returns {Promise} Promise
   */
  async add(options) {
    const qs = { ...this.config, ...options };

    const add = await request({
      url: (`${apiConfig.url}${apiConfig.tips.add}`), method: constants.POST, qs,
    });

    return add;
  }
}

module.exports = TipsService;
