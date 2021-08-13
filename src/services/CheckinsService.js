const { request } = require('../utils');

const { apiConfig } = require('../configs');

class CheckinsService {
  constructor(config) {
    this._config = config;
  }

  /**
   * /checkins/CHECKIN_ID
   *
   * @see https://developer.foursquare.com/docs/api-reference/checkins/details
   * @param {string} checkinId Check-in ID
   * @param {Object} options Request params
   * @returns {Promise} Promise
   */
  async details(checkinId, options) {
    try {
      const qs = Object.assign(this._config, options);

      const details = await request({
        url: (`${apiConfig.url}${apiConfig.checkins.details}`).replace('CHECKIN_ID', checkinId), qs,
      });

      return details;
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * /checkins/resolve
   *
   * @see https://developer.foursquare.com/docs/api-reference/checkins/resolve
   * @param {Object} options Request params
   * @returns {Promise} Promise
   */
  async resolve(options) {
    try {
      const qs = Object.assign(this._config, options);

      const resolve = await request({
        url: (`${apiConfig.url}${apiConfig.checkins.resolve}`), qs,
      });

      return resolve;
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * /checkins/add
   *
   * @see https://developer.foursquare.com/docs/api-reference/checkins/add
   * @param {Object} options Request params
   * @returns {Promise} Promise
   */
  async add(options) {
    try {
      const qs = Object.assign(this._config, options);

      const add = await request({
        url: (`${apiConfig.url}${apiConfig.checkins.add}`), method: 'POST', qs,
      });

      return add;
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * /checkins/CHECKIN_ID/like
   *
   * @see https://developer.foursquare.com/docs/api-reference/checkins/like
   * @param {string} checkinId Check-in ID
   * @param {Object} options Request params
   * @returns {Promise} Promise
   */
  async like(checkinId, options) {
    try {
      const qs = Object.assign(this._config, options);

      const like = await request({
        url: (`${apiConfig.url}${apiConfig.checkins.like}`).replace('CHECKIN_ID', checkinId), method: 'POST', qs,
      });

      return like;
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * /checkins/CHECKIN_ID/addpost
   *
   * @see https://developer.foursquare.com/docs/api-reference/checkins/addpost
   * @param {string} checkinId Check-in ID
   * @param {Object} options Request params
   * @returns {Promise} Promise
   */
  async addpost(checkinId, options) {
    try {
      const qs = Object.assign(this._config, options);

      const addpost = await request({
        url: (`${apiConfig.url}${apiConfig.checkins.addpost}`).replace('CHECKIN_ID', checkinId), method: 'POST', qs,
      });

      return addpost;
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = CheckinsService;
