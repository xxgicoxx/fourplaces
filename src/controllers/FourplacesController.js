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
    this._config = config;

    this._config.v = config.v || apiConfig.version;
    this._config.response_type = config.response_type || apiConfig.response_type;
    this._config.grant_type = config.grant_type || apiConfig.grant_type;

    this._authService = new AuthService(this._config);
    this._checkinsService = new CheckinsService(this._config);
    this._listsService = new ListsService(this._config);
    this._photosService = new PhotosService(this._config);
    this._tipsService = new TipsService(this._config);
    this._usersService = new UsersService(this._config);
    this._venuesService = new VenuesService(this._config);
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
