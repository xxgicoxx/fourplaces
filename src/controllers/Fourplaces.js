const AuthService = require('../services/Auth');
const CheckinsService = require('../services/Checkins');
const ListsService = require('../services/Lists');
const PhotosService = require('../services/Photos');
const TipsService = require('../services/Tips');
const UsersService = require('../services/Users');
const VenuesService = require('../services/Venues');

class Fourplaces {
  /**
    * Foursquare config.
    * @param {!string} config.client_id - client id
    * @param {!string} config.client_secret - client secret
    * @param {!string} config.redirect_uri - redirect uri
    * @param {!string} config.registered_redirect_uri - registered redirect uri
    * @param {string} [config.locale = 'en'] - locale
    * @param {string} [config.version = '20180323'] - version
    */
  constructor(config) {
    this.config = config;
  }

  auth() {
    const authService = new AuthService(this.config);
    return authService;
  }

  checkins() {
    const checkinsService = new CheckinsService(this.config);
    return checkinsService;
  }

  lists() {
    const listsService = new ListsService(this.config);
    return listsService;
  }

  photos() {
    const photosService = new PhotosService(this.config);
    return photosService;
  }

  tips() {
    const tipsService = new TipsService(this.config);
    return tipsService;
  }

  users() {
    const usersService = new UsersService(this.config);
    return usersService;
  }

  venues() {
    const venuesService = new VenuesService(this.config);
    return venuesService;
  }
}

module.exports = Fourplaces;
