const request = require('request-promise-native');

const apiConfig = require('../configs/api');

class CheckinsService {
  constructor(config) {
    this._config = config;
  }

  /**
    * /checkins/CHECKIN_ID
    *
    * @see https://developer.foursquare.com/docs/api/checkins/details
    * @param {!string} checkinId
    * @param {Object} options request params
    * @returns {Promise} return Promise
    */
  async details(checkinId, options) {
    try {
      const qs = Object.assign(this._config, options);

      const details = await request({
        url: (`${apiConfig.url}${apiConfig.checkins.details}`).replace('CHECKIN_ID', checkinId), method: 'GET', json: true, qs,
      });

      return details;
    } catch (ex) {
      throw new Error(ex);
    }
  }

  /**
    * /checkins/resolve
    *
    * @see https://developer.foursquare.com/docs/api/checkins/resolve
    * @param {!Object} options request params
    * @returns {Promise} return Promise
    */
  async resolve(options = {}) {
    try {
      const qs = Object.assign(this._configthis._config, options);

      const resolve = await request({
        url: (`${apiConfig.url}${apiConfig.checkins.resolve}`), method: 'GET', json: true, qs,
      });

      return resolve;
    } catch (ex) {
      throw new Error(ex);
    }
  }

  /**
    * /checkins/add
    *
    * @see https://developer.foursquare.com/docs/api/checkins/add
    * @param {!Object} options request params
    * @returns {Promise} return Promise
    */
  async add(options = {}) {
    try {
      const qs = Object.assign(this._configthis._config, options);

      const add = await request({
        url: (`${apiConfig.url}${apiConfig.checkins.add}`), method: 'POST', json: true, qs,
      });

      return add;
    } catch (ex) {
      throw new Error(ex);
    }
  }

  /**
    * /checkins/CHECKIN_ID/like
    *
    * @see https://developer.foursquare.com/docs/api/checkins/like
    * @param {!string} checkinId
    * @param {Object} options request params
    * @returns {Promise} return Promise
    */
  async like(checkinId, options) {
    try {
      const qs = Object.assign(this._configthis._config, options);

      const like = await request({
        url: (`${apiConfig.url}${apiConfig.checkins.like}`).replace('CHECKIN_ID', checkinId), method: 'POST', json: true, qs,
      });

      return like;
    } catch (ex) {
      throw new Error(ex);
    }
  }

  /**
    * /checkins/CHECKIN_ID/addpost
    *
    * @see https://developer.foursquare.com/docs/api/checkins/addpost
    * @param {!string} checkinId
    * @param {Object} options request params
    * @returns {Promise} return Promise
    */
  async addpost(checkinId, options) {
    try {
      const qs = Object.assign(this._configthis._config, options);

      const addpost = await request({
        url: (`${apiConfig.url}${apiConfig.checkins.addpost}`).replace('CHECKIN_ID', checkinId), method: 'POST', json: true, qs,
      });

      return addpost;
    } catch (ex) {
      throw new Error(ex);
    }
  }
}

module.exports = CheckinsService;
