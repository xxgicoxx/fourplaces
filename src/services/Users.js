const api = require('../configs/api');
const request = require('../helpers/request');

class Users {
  constructor(config) {
    this.version = { v: api.version };
    this.config = config;
  }

  /**
    * https://api.foursquare.com/v2/users/USER_ID
    *
    * @param {*} userId
    * @param {*} options
    */
  details(userId, options) {
    const qs = Object.assign(this.version, this.config, options);
    return request((`${api.url}${api.users.details}`).replace('USER_ID', userId), 'GET', qs);
  }

  /**
    * https://api.foursquare.com/v2/users/USER_ID/checkins
    *
    * @param {*} userId
    * @param {*} options
    */
  checkins(userId, options) {
    const qs = Object.assign(this.version, this.config, options);
    return request((`${api.url}${api.users.checkins}`).replace('USER_ID', userId), 'GET', qs);
  }

  /**
    * https://api.foursquare.com/v2/users/USER_ID/friends
    *
    * @param {*} userId
    * @param {*} options
    */
  friends(userId, options) {
    const qs = Object.assign(this.version, this.config, options);
    return request((`${api.url}${api.users.friends}`).replace('USER_ID', userId), 'GET', qs);
  }

  /**
    * https://api.foursquare.com/v2/users/USER_ID/photos
    *
    * @param {*} userId
    * @param {*} options
    */
  photos(userId, options) {
    const qs = Object.assign(this.version, this.config, options);
    return request((`${api.url}${api.users.photos}`).replace('USER_ID', userId), 'GET', qs);
  }

  /**
    * https://api.foursquare.com/v2/users/USER_ID/venuehistory
    *
    * @param {*} userId
    * @param {*} options
    */
  venuehistory(userId, options) {
    const qs = Object.assign(this.version, this.config, options);
    return request((`${api.url}${api.users.venuehistory}`).replace('USER_ID', userId), 'GET', qs);
  }

  /**
    * https://api.foursquare.com/v2/users/USER_ID/tastes
    *
    * @param {*} userId
    * @param {*} options
    */
  tastes(userId, options) {
    const qs = Object.assign(this.version, this.config, options);
    return request((`${api.url}${api.users.tastes}`).replace('USER_ID', userId), 'GET', qs);
  }

  /**
    * https://api.foursquare.com/v2/users/USER_ID/venuelikes
    *
    * @param {*} userId
    * @param {*} options
    */
  venuelikes(userId, options) {
    const qs = Object.assign(this.version, this.config, options);
    return request((`${api.url}${api.users.venuelikes}`).replace('USER_ID', userId), 'GET', qs);
  }

  /**
    * https://api.foursquare.com/v2/users/USER_ID/lists
    *
    * @param {*} userId
    * @param {*} options
    */
  lists(userId, options) {
    const qs = Object.assign(this.version, this.config, options);
    return request((`${api.url}${api.users.lists}`).replace('USER_ID', userId), 'GET', qs);
  }
}

module.exports = Users;
