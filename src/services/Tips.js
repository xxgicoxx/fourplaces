const api = require('../configs/api');
const request = require('../helpers/request');

class Tips {
  constructor(config) {
    this.version = { v: api.version };
    this.config = config;
  }

  /**
    * https://api.foursquare.com/v2/tips/TIP_ID
    *
    * @param {*} tipId
    * @param {*} options
    */
  details(tipId, options) {
    const qs = Object.assign(this.version, this.config, options);
    return request((`${api.url}${api.tips.details}`).replace('TIP_ID', tipId), 'GET', qs);
  }

  /**
    * https://api.foursquare.com/v2/tips/add
    *
    * @param {*} options
    */
  add(options) {
    const qs = Object.assign(this.version, this.config, options);
    return request((`${api.url}${api.tips.add}`), 'POST', qs);
  }
}

module.exports = Tips;
