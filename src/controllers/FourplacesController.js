const { apiConfig } = require('../configs');

const {
  AuthService,
  CheckinsService,
  ListsService,
  PhotosService,
  TipsService,
  UsersService,
  VenuesService,
} = require('../services');

class FourplacesController {
  /**
   * @param {Object} config Configs
   * @param {string} config.client_id Client id
   * @param {string} config.client_secret Client secret
   * @param {string} [config.redirect_uri = ''] Redirect uri
   * @param {string} [config.locale = 'en'] Locale
   * @param {string} [config.v = '20180323'] Version
   */
  constructor(config) {
    this.config = config;

    this.config.v = config.v || apiConfig.version;
    this.config.response_type = config.response_type || apiConfig.response_type;
    this.config.grant_type = config.grant_type || apiConfig.grant_type;

    this._authService = new AuthService(this.config);
    this._checkinsService = new CheckinsService(this.config);
    this._listsService = new ListsService(this.config);
    this._photosService = new PhotosService(this.config);
    this._tipsService = new TipsService(this.config);
    this._usersService = new UsersService(this.config);
    this._venuesService = new VenuesService(this.config);
  }

  /**
   * This is used when you require a Foursquare user
   */
  auth() {
    return this._authService;
  }

  /**
   * This is used when you require a Foursquare checkins
   */
  checkins() {
    return this._checkinsService;
  }

  /**
   * This is used when you require a Foursquare lists
   */
  lists() {
    return this._listsService;
  }

  /**
   * This is used when you require a Foursquare photos
   */
  photos() {
    return this._photosService;
  }

  /**
   * This is used when you require a Foursquare tips
   */
  tips() {
    return this._tipsService;
  }

  /**
   * This is used when you require a Foursquare users
   */
  users() {
    return this._usersService;
  }

  /**
   * This is used when you require a Foursquare venues
   */
  venues() {
    return this._venuesService;
  }
}

module.exports = FourplacesController;
