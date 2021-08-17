const { request } = require('../utils');

const { apiConfig } = require('../configs');

class CheckinsService {
  constructor(config) {
    this.config = config;
  }

  /**
   * /checkins/CHECKIN_ID
   *
   * @see https://developer.foursquare.com/docs/api-reference/checkins/details
   * @param {string} checkinId Check-in ID
   * @param {Object} options Query parameters
   *
   * @returns {Promise} Promise
   */
  async details(checkinId, options) {
    const qs = { ...this.config, ...options };

    const details = await request({
      url: (`${apiConfig.url}${apiConfig.checkins.details}`).replace('CHECKIN_ID', checkinId), qs,
    });

    return details;
  }

  /**
   * /checkins/resolve
   *
   * @see https://developer.foursquare.com/docs/api-reference/checkins/resolve
   * @param {Object} options Query parameters
   *
   * @returns {Promise} Promise
   */
  async resolve(options) {
    const qs = { ...this.config, ...options };

    const resolve = await request({
      url: (`${apiConfig.url}${apiConfig.checkins.resolve}`), qs,
    });

    return resolve;
  }

  /**
   * /checkins/add
   *
   * @see https://developer.foursquare.com/docs/api-reference/checkins/add
   * @param {Object} options Query parameters
   *
   * @returns {Promise} Promise
   */
  async add(options) {
    const qs = { ...this.config, ...options };

    const add = await request({
      url: (`${apiConfig.url}${apiConfig.checkins.add}`), method: 'POST', qs,
    });

    return add;
  }

  /**
   * /checkins/CHECKIN_ID/like
   *
   * @see https://developer.foursquare.com/docs/api-reference/checkins/like
   * @param {string} checkinId Check-in ID
   * @param {Object} options Query parameters
   *
   * @returns {Promise} Promise
   */
  async like(checkinId, options) {
    const qs = { ...this.config, ...options };

    const like = await request({
      url: (`${apiConfig.url}${apiConfig.checkins.like}`).replace('CHECKIN_ID', checkinId), method: 'POST', qs,
    });

    return like;
  }

  /**
   * /checkins/CHECKIN_ID/addpost
   *
   * @see https://developer.foursquare.com/docs/api-reference/checkins/addpost
   * @param {string} checkinId Check-in ID
   * @param {Object} options Query parameters
   *
   * @returns {Promise} Promise
   */
  async addpost(checkinId, options) {
    const qs = { ...this.config, ...options };

    const addpost = await request({
      url: (`${apiConfig.url}${apiConfig.checkins.addpost}`).replace('CHECKIN_ID', checkinId), method: 'POST', qs,
    });

    return addpost;
  }
}

module.exports = CheckinsService;
