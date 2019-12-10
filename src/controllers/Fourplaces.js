const AuthService = require('../services/Auth');
const CheckinsService = require('../services/Checkins');
const ListsService = require('../services/Lists');
const PhotosService = require('../services/Photos');
const TipsService = require('../services/Tips');
const UsersService = require('../services/Users');
const VenuesService = require('../services/Venues');

class Fourplaces {
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