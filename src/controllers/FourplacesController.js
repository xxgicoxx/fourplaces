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
    * Fourplaces config
    *
    * @param {!Object} config configs
    * @param {!string} config.client_id client id
    * @param {!string} config.client_secret client secret
    * @param {string} [config.redirect_uri = ''] redirect uri
    * @param {string} [config.registered_redirect_uri = ''] registered redirect uri
    * @param {string} [config.locale = 'en'] locale
    * @param {string} [config.v = '20180323'] version
    */
  constructor(config = {}) {
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
    * This is used when you require a Foursquare user e.g. to get all the checkins for a given user
    */
  auth() {
    return this._authService;
  }

  /**
    * This is used when you require a Foursquare checkins e.g. to get details of a check-in
    *
    */
  checkins() {
    return this._checkinsService;
  }

  /**
    * This is used when you require a Foursquare lists e.g. to get details of a list
    */
  lists() {
    return this._listsService;
  }

  /**
    * This is used when you require a Foursquare photos e.g. to get the details of a photo
    */
  photos() {
    return this._photosService;
  }

  /**
    * This is used when you require a Foursquare tips e.g. to get details of a tip
    */
  tips() {
    return this._tipsService;
  }

  /**
    * This is used when you require a Foursquare users e.g. to get details of a user
    */
  users() {
    return this._usersService;
  }

  /**
    * This is used when you require a Foursquare venues e.g. to get details of a venue
    */
  venues() {
    return this._venuesService;
  }
}

module.exports = FourplacesController;
