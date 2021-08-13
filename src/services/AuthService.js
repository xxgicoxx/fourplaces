const { request } = require('../utils');

const { apiConfig } = require('../configs');

class AuthService {
  constructor(config) {
    this._config = config;
  }

  /**
   * /authenticate?client_id=CLIENT_ID&response_type=code&redirect_uri=REDIRECT_URI
   *
   * @see https://developer.foursquare.com/docs/places-api/authentication/
   * @returns {Promise} Promise
   */
  async authenticate() {
    try {
      return { url: `https://foursquare.com/oauth2/authenticate?client_id=${this._config.client_id}&response_type=code&redirect_uri=${this._config.redirect_uri}` };
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * /access_token?client_id=CLIENT_ID&client_secret=CLIENT_SECRET&grant_type=authorization_code&redirect_uri=REDIRECT_URI&code=CODE
   *
   * @see https://developer.foursquare.com/docs/places-api/authentication/
   * @param {Object} options Request params
   * @returns {Promise} Promise
   */
  async accessToken(options) {
    try {
      const qs = Object.assign(this._config, options);

      const accessToken = await request({
        url: (`${apiConfig.access_token}`), qs,
      });

      return accessToken;
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = AuthService;
