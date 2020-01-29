const api = require('../configs/api');
const request = require('../helpers/request');

class Photos {
  constructor(config) {
    this.version = { v: api.version };
    this.config = config;
  }

  /**
    * https://api.foursquare.com/v2/photos/PHOTO_ID
    *
    * @param {*} photoId
    * @param {*} options
    */
  details(photoId, options) {
    const qs = Object.assign(this.version, this.config, options);
    return request((`${api.url}${api.photos.details}`).replace('PHOTO_ID', photoId), 'GET', qs);
  }

  /**
    * https://api.foursquare.com/v2/photos/add
    *
    * @param {*} options
    */
  add(options) {
    const qs = Object.assign(this.version, this.config, options);
    return request((`${api.url}${api.photos.add}`), 'POST', qs);
  }
}

module.exports = Photos;
