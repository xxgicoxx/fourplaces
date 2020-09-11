const request = require('request-promise-native');

const { apiConfig } = require('../configs');

class UsersService {
  constructor(config) {
    this._config = config;
  }

  /**
    * /users/USER_ID
    *
    * @see https://developer.foursquare.com/docs/api/users/details
    * @param {!string} userId
    * @param {Object} options request params
    * @returns {Promise} return Promise
    */
  async details(userId, options) {
    try {
      const qs = { ...this._config, ...options };

      const details = await request({
        url: (`${apiConfig.url}${apiConfig.users.details}`).replace('USER_ID', userId), method: 'GET', json: true, qs,
      });

      return details;
    } catch (ex) {
      throw new Error(ex);
    }
  }

  /**
    * /users/USER_ID/checkins
    *
    * @see https://developer.foursquare.com/docs/api/users/checkins
    * @param {!string} userId
    * @param {Object} options request params
    * @returns {Promise} return Promise
    */
  async checkins(userId, options) {
    try {
      const qs = { ...this._config, ...options };

      const checkins = await request({
        url: (`${apiConfig.url}${apiConfig.users.checkins}`).replace('USER_ID', userId), method: 'GET', json: true, qs,
      });

      return checkins;
    } catch (ex) {
      throw new Error(ex);
    }
  }

  /**
    * /users/USER_ID/friends
    *
    * @see https://developer.foursquare.com/docs/api/users/friends
    * @param {!string} userId
    * @param {Object} options request params
    * @returns {Promise} return Promise
    */
  async friends(userId, options) {
    try {
      const qs = { ...this._config, ...options };

      const friends = await request({
        url: (`${apiConfig.url}${apiConfig.users.friends}`).replace('USER_ID', userId), method: 'GET', json: true, qs,
      });

      return friends;
    } catch (ex) {
      throw new Error(ex);
    }
  }

  /**
    * /users/USER_ID/photos
    *
    * @see https://developer.foursquare.com/docs/api/users/photos
    * @param {!string} userId
    * @param {Object} options request params
    * @returns {Promise} return Promise
    */
  async photos(userId, options) {
    try {
      const qs = { ...this._config, ...options };

      const photos = await request({
        url: (`${apiConfig.url}${apiConfig.users.photos}`).replace('USER_ID', userId), method: 'GET', json: true, qs,
      });

      return photos;
    } catch (ex) {
      throw new Error(ex);
    }
  }

  /**
    * /users/USER_ID/venuehistory
    *
    * @see https://developer.foursquare.com/docs/api/users/venuehistory
    * @param {!string} userId
    * @param {Object} options request params
    * @returns {Promise} return Promise
    */
  async venuehistory(userId, options) {
    try {
      const qs = { ...this._config, ...options };

      const venuehistory = await request({
        url: (`${apiConfig.url}${apiConfig.users.venuehistory}`).replace('USER_ID', userId), method: 'GET', json: true, qs,
      });

      return venuehistory;
    } catch (ex) {
      throw new Error(ex);
    }
  }

  /**
    * /users/USER_ID/tastes
    *
    * @see https://developer.foursquare.com/docs/api/users/tastes
    * @param {!string} userId
    * @param {Object} options request params
    * @returns {Promise} return Promise
    */
  async tastes(userId, options) {
    try {
      const qs = { ...this._config, ...options };

      const tastes = await request({
        url: (`${apiConfig.url}${apiConfig.users.tastes}`).replace('USER_ID', userId), method: 'GET', json: true, qs,
      });

      return tastes;
    } catch (ex) {
      throw new Error(ex);
    }
  }

  /**
    * /users/USER_ID/venuelikes
    *
    * @see https://developer.foursquare.com/docs/api/users/venuelikes
    * @param {!string} userId
    * @param {Object} options request params
    * @returns {Promise} return Promise
    */
  async venuelikes(userId, options) {
    try {
      const qs = { ...this._config, ...options };

      const venuelikes = await request({
        url: (`${apiConfig.url}${apiConfig.users.venuelikes}`).replace('USER_ID', userId), method: 'GET', json: true, qs,
      });

      return venuelikes;
    } catch (ex) {
      throw new Error(ex);
    }
  }

  /**
    * /users/USER_ID/lists
    *
    * @see https://developer.foursquare.com/docs/api/users/lists
    * @param {!string} userId
    * @param {Object} options request params
    * @returns {Promise} return Promise
    */
  async lists(userId, options) {
    try {
      const qs = { ...this._config, ...options };

      const lists = await request({
        url: (`${apiConfig.url}${apiConfig.users.lists}`).replace('USER_ID', userId), method: 'GET', json: true, qs,
      });

      return lists;
    } catch (ex) {
      throw new Error(ex);
    }
  }
}

module.exports = UsersService;
