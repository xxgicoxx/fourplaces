const api = require('../configs/api');
const request = require('../helpers/request');

class Auth {
  constructor(config) {
    this.version = { v: api.version };
    this.responseType = { response_type: 'code' };
    this.grantType = { grant_type: 'authorization_code' };
    this.config = config;
  }

  /**
    * https://foursquare.com/oauth2/authenticate?client_id=YOUR_CLIENT_ID&response_type=code&redirect_uri=YOUR_REGISTERED_REDIRECT_URI
    */
  authenticate(options) {
    const qs = Object.assign(this.version, this.responseType, this.config, options);
    return request((`${api.authenticate}`), 'GET', qs);
  }

  /**
    * https://foursquare.com/oauth2/access_token?client_id=YOUR_CLIENT_ID&client_secret=YOUR_CLIENT_SECRET&grant_type=authorization_code&redirect_uri=YOUR_REGISTERED_REDIRECT_URI&code=CODE
    *
    * @param {*} code
    * @param {*} options
    */
  accessToken(code, options) {
    const qs = Object.assign(this.version, this.grantType, this.config, options);
    return request((`${api.access_token}?code=${code}`), 'GET', qs);
  }
}

module.exports = Auth;
