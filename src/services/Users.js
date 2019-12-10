const { api } = require('../configs/api');
const request = require('../helpers/request');

const version = {v: api.version};

class Users {
    constructor(config) {
        this.config = config;
	}
	
	/**
	 * https://api.foursquare.com/v2/users/USER_ID
	 * 
	 * @param {*} user_id 
	 * @param {*} options 
	 */
	details(user_id, options) {
		return new Promise((resolve, reject) => {
			const qs = Object.assign(version, this.config, options);
			request((`${api.url}${api.users.details}`).replace('USER_ID', user_id), 'GET', qs).then((res) => {
				resolve(res);
			}).catch((err) => {
				reject(err);
			});
		});
    }

    /**
	 * https://api.foursquare.com/v2/users/USER_ID/checkins
	 * 
	 * @param {*} user_id 
	 * @param {*} options 
	 */
	checkins(user_id, options) {
		return new Promise((resolve, reject) => {
			const qs = Object.assign(version, this.config, options);
			request((`${api.url}${api.users.checkins}`).replace('USER_ID', user_id), 'GET', qs).then((res) => {
				resolve(res);
			}).catch((err) => {
				reject(err);
			});
		});
    }

    /**
	 * https://api.foursquare.com/v2/users/USER_ID/friends
	 * 
	 * @param {*} user_id 
	 * @param {*} options 
	 */
	friends(user_id, options) {
		return new Promise((resolve, reject) => {
			const qs = Object.assign(version, this.config, options);
			request((`${api.url}${api.users.friends}`).replace('USER_ID', user_id), 'GET', qs).then((res) => {
				resolve(res);
			}).catch((err) => {
				reject(err);
			});
		});
    }

    /**
	 * https://api.foursquare.com/v2/users/USER_ID/photos
	 * 
	 * @param {*} user_id 
	 * @param {*} options 
	 */
	photos(user_id, options) {
		return new Promise((resolve, reject) => {
			const qs = Object.assign(version, this.config, options);
			request((`${api.url}${api.users.photos}`).replace('USER_ID', user_id), 'GET', qs).then((res) => {
				resolve(res);
			}).catch((err) => {
				reject(err);
			});
		});
    }

    /**
	 * https://api.foursquare.com/v2/users/USER_ID/venuehistory
	 * 
	 * @param {*} user_id 
	 * @param {*} options 
	 */
	venuehistory(user_id, options) {
		return new Promise((resolve, reject) => {
			const qs = Object.assign(version, this.config, options);
			request((`${api.url}${api.users.venuehistory}`).replace('USER_ID', user_id), 'GET', qs).then((res) => {
				resolve(res);
			}).catch((err) => {
				reject(err);
			});
		});
    }
    
    /**
	 * https://api.foursquare.com/v2/users/USER_ID/tastes
	 * 
	 * @param {*} user_id 
	 * @param {*} options 
	 */
	tastes(user_id, options) {
		return new Promise((resolve, reject) => {
			const qs = Object.assign(version, this.config, options);
			request((`${api.url}${api.users.tastes}`).replace('USER_ID', user_id), 'GET', qs).then((res) => {
				resolve(res);
			}).catch((err) => {
				reject(err);
			});
		});
    }

    /**
	 * https://api.foursquare.com/v2/users/USER_ID/venuelikes
	 * 
	 * @param {*} user_id 
	 * @param {*} options 
	 */
	venuelikes(user_id, options) {
		return new Promise((resolve, reject) => {
			const qs = Object.assign(version, this.config, options);
			request((`${api.url}${api.users.venuelikes}`).replace('USER_ID', user_id), 'GET', qs).then((res) => {
				resolve(res);
			}).catch((err) => {
				reject(err);
			});
		});
    }
    
    /**
	 * https://api.foursquare.com/v2/users/USER_ID/lists
	 * 
	 * @param {*} user_id 
	 * @param {*} options 
	 */
	lists(user_id, options) {
		return new Promise((resolve, reject) => {
			const qs = Object.assign(version, this.config, options);
			request((`${api.url}${api.users.lists}`).replace('USER_ID', user_id), 'GET', qs).then((res) => {
				resolve(res);
			}).catch((err) => {
				reject(err);
			});
		});
	}
}

module.exports = Users;