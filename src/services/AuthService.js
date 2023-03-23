const { request } = require('../utils');

const { apiConfig } = require('../configs');

class AuthService {
  constructor(config) {
    this.config = config;
  }

  /**
   * /authenticate?client_id=CLIENT_ID&response_type=code&redirect_uri=REDIRECT_URI
   *
   * @see https://developer.foursquare.com/docs/places-api/authentication/
   *
   * @returns {Promise} Promise
   */
  async authenticate() {
    return { url: `${apiConfig.authenticate}?client_id=${this.config.client_id}&response_type=code&redirect_uri=${this.config.redirect_uri}` };
  }

  /**
   * /access_token?client_id=CLIENT_ID&client_secret=CLIENT_SECRET&grant_type=authorization_code&redirect_uri=REDIRECT_URI&code=CODE
   *
   * @see https://developer.foursquare.com/docs/places-api/authentication/
   * @param {Object} options Query parameters
   *
   * @returns {Promise} Promise
   */
  async accessToken(options) {
    const qs = { ...this.config, ...options };

    const accessToken = await request({
      url: (`${apiConfig.access_token}`), qs,
    });

    return accessToken;
  }
}

module.exports = AuthService;
