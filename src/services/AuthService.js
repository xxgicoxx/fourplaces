const request = require('request-promise-native');

const apiConfig = require('../configs/api');

class AuthService {
  constructor(config) {
    this._config = config;
  }

  /**
    * /authenticate?client_id=YOUR_CLIENT_ID&response_type=code&redirect_uri=YOUR_REGISTERED_REDIRECT_URI
    *
    * @see https://developer.foursquare.com/docs/api/configuration/authentication
    * @param {!Object} options options
    * @returns {Promise} return Promise
    */
  async authenticate(options = {}) {
    try {
      const qs = { ...this._config, ...options };

      const authenticate = await request({
        url: (`${apiConfig.authenticate}`), method: 'GET', json: true, qs,
      });

      return authenticate;
    } catch (ex) {
      throw new Error(ex);
    }
  }

  /**
    * /access_token?client_id=YOUR_CLIENT_ID&client_secret=YOUR_CLIENT_SECRET&grant_type=authorization_code&redirect_uri=YOUR_REGISTERED_REDIRECT_URI&code=CODE
    *
    * @see https://developer.foursquare.com/docs/api/configuration/authentication
    * @param {!string} code code
    * @param {!Object} options options
    * @returns {Promise} return Promise
    */
  async accessToken(code, options) {
    try {
      const qs = { ...this._config, ...options };

      const accessToken = await request({
        url: (`${apiConfig.access_token}?code=${code}`), method: 'GET', json: true, qs,
      });

      return accessToken;
    } catch (ex) {
      throw new Error(ex);
    }
  }
}

module.exports = AuthService;
