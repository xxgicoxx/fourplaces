const api = require('../configs/api');
const request = require('../helpers/request');

class Checkins {
  constructor(config) {
    this.version = { v: api.version };
    this.config = config;
  }

  /**
    * https://api.foursquare.com/v2/checkins/CHECKIN_ID
    *
    * @param {*} checkinId
    * @param {*} options
    */
  details(checkinId, options) {
    const qs = Object.assign(this.version, this.config, options);
    return request((`${api.url}${api.checkins.details}`).replace('CHECKIN_ID', checkinId), 'GET', qs);
  }

  /**
    * https://api.foursquare.com/v2/checkins/resolve
    *
    * @param {*} options
    */
  resolve(options) {
    const qs = Object.assign(this.version, this.config, options);
    return request((`${api.url}${api.checkins.resolve}`), 'GET', qs);
  }

  /**
    * https://api.foursquare.com/v2/checkins/add
    *
    * @param {*} options
    */
  add(options) {
    const qs = Object.assign(this.version, this.config, options);
    return request((`${api.url}${api.checkins.add}`), 'POST', qs);
  }

  /**
    * https://api.foursquare.com/v2/checkins/CHECKIN_ID/like
    *
    * @param {*} options
    */
  like(checkinId, options) {
    const qs = Object.assign(this.version, this.config, options);
    return request((`${api.url}${api.checkins.like}`).replace('CHECKIN_ID', checkinId), 'POST', qs);
  }

  /**
    * https://api.foursquare.com/v2/checkins/CHECKIN_ID/addpost
    *
    * @param {*} options
    */
  addpost(checkinId, options) {
    const qs = Object.assign(this.version, this.config, options);
    return request((`${api.url}${api.checkins.addpost}`).replace('CHECKIN_ID', checkinId), 'POST', qs);
  }
}

module.exports = Checkins;
