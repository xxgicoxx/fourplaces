const { request } = require('../utils');

const { apiConfig } = require('../configs');

class UsersService {
  constructor(config) {
    this._config = config;
  }

  /**
   * /users/USER_ID
   *
   * @see https://developer.foursquare.com/docs/api-reference/users/details
   * @param {string} userId User ID
   * @param {Object} options Request params
   * @returns {Promise} Promise
   */
  async details(userId, options) {
    try {
      const qs = Object.assign(this._config, options);

      const details = await request({
        url: (`${apiConfig.url}${apiConfig.users.details}`).replace('USER_ID', userId), qs,
      });

      return details;
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * /users/USER_ID/checkins
   *
   * @see https://developer.foursquare.com/docs/api-reference/users/checkins
   * @param {string} userId User ID
   * @param {Object} options Request params
   * @returns {Promise} Promise
   */
  async checkins(userId, options) {
    try {
      const qs = Object.assign(this._config, options);

      const checkins = await request({
        url: (`${apiConfig.url}${apiConfig.users.checkins}`).replace('USER_ID', userId), qs,
      });

      return checkins;
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * /users/USER_ID/photos
   *
   * @see https://developer.foursquare.com/docs/api-reference/users/photos
   * @param {string} userId User ID
   * @param {Object} options Request params
   * @returns {Promise} Promise
   */
  async photos(userId, options) {
    try {
      const qs = Object.assign(this._config, options);

      const photos = await request({
        url: (`${apiConfig.url}${apiConfig.users.photos}`).replace('USER_ID', userId), qs,
      });

      return photos;
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * /users/USER_ID/venuehistory
   *
   * @see https://developer.foursquare.com/docs/api-reference/users/venuehistory
   * @param {string} userId User ID
   * @param {Object} options Request params
   * @returns {Promise} Promise
   */
  async venuehistory(userId, options) {
    try {
      const qs = Object.assign(this._config, options);

      const venuehistory = await request({
        url: (`${apiConfig.url}${apiConfig.users.venuehistory}`).replace('USER_ID', userId), qs,
      });

      return venuehistory;
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * /users/USER_ID/venuelikes
   *
   * @see https://developer.foursquare.com/docs/api-reference/users/venuelikes
   * @param {string} userId User ID
   * @param {Object} options Request params
   * @returns {Promise} Promise
   */
  async venuelikes(userId, options) {
    try {
      const qs = Object.assign(this._config, options);

      const venuelikes = await request({
        url: (`${apiConfig.url}${apiConfig.users.venuelikes}`).replace('USER_ID', userId), qs,
      });

      return venuelikes;
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * /users/USER_ID/lists
   *
   * @see https://developer.foursquare.com/docs/api-reference/users/lists
   * @param {string} userId User ID
   * @param {Object} options Request params
   * @returns {Promise} Promise
   */
  async lists(userId, options) {
    try {
      const qs = Object.assign(this._config, options);

      const lists = await request({
        url: (`${apiConfig.url}${apiConfig.users.lists}`).replace('USER_ID', userId), qs,
      });

      return lists;
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = UsersService;
