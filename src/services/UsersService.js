const { constants, request } = require('../utils');

const { apiConfig } = require('../configs');

class UsersService {
  constructor(config) {
    this.config = config;
  }

  /**
   * /users/USER_ID
   *
   * @see https://developer.foursquare.com/docs/api-reference/users/details
   * @param {string} userId User ID
   * @param {Object} options Query parameters
   *
   * @returns {Promise} Promise
   */
  async details(userId, options) {
    const qs = { ...this.config, ...options };

    const details = await request({
      url: (`${apiConfig.url}${apiConfig.users.details}`).replace(constants.USER_ID, userId), qs,
    });

    return details;
  }

  /**
   * /users/USER_ID/checkins
   *
   * @see https://developer.foursquare.com/docs/api-reference/users/checkins
   * @param {string} userId User ID
   * @param {Object} options Query parameters
   *
   * @returns {Promise} Promise
   */
  async checkins(userId, options) {
    const qs = { ...this.config, ...options };

    const checkins = await request({
      url: (`${apiConfig.url}${apiConfig.users.checkins}`).replace(constants.USER_ID, userId), qs,
    });

    return checkins;
  }

  /**
   * /users/USER_ID/photos
   *
   * @see https://developer.foursquare.com/docs/api-reference/users/photos
   * @param {string} userId User ID
   * @param {Object} options Query parameters
   *
   * @returns {Promise} Promise
   */
  async photos(userId, options) {
    const qs = { ...this.config, ...options };

    const photos = await request({
      url: (`${apiConfig.url}${apiConfig.users.photos}`).replace(constants.USER_ID, userId), qs,
    });

    return photos;
  }

  /**
   * /users/USER_ID/venuehistory
   *
   * @see https://developer.foursquare.com/docs/api-reference/users/venuehistory
   * @param {string} userId User ID
   * @param {Object} options Query parameters
   *
   * @returns {Promise} Promise
   */
  async venuehistory(userId, options) {
    const qs = { ...this.config, ...options };

    const venuehistory = await request({
      url: (`${apiConfig.url}${apiConfig.users.venuehistory}`).replace(constants.USER_ID, userId), qs,
    });

    return venuehistory;
  }

  /**
   * /users/USER_ID/venuelikes
   *
   * @see https://developer.foursquare.com/docs/api-reference/users/venuelikes
   * @param {string} userId User ID
   * @param {Object} options Query parameters
   *
   * @returns {Promise} Promise
   */
  async venuelikes(userId, options) {
    const qs = { ...this.config, ...options };

    const venuelikes = await request({
      url: (`${apiConfig.url}${apiConfig.users.venuelikes}`).replace(constants.USER_ID, userId), qs,
    });

    return venuelikes;
  }

  /**
   * /users/USER_ID/lists
   *
   * @see https://developer.foursquare.com/docs/api-reference/users/lists
   * @param {string} userId User ID
   * @param {Object} options Query parameters
   *
   * @returns {Promise} Promise
   */
  async lists(userId, options) {
    const qs = { ...this.config, ...options };

    const lists = await request({
      url: (`${apiConfig.url}${apiConfig.users.lists}`).replace(constants.USER_ID, userId), qs,
    });

    return lists;
  }
}

module.exports = UsersService;
