const { api } = require('../configs/api');
const request = require('../helpers/request');

const version = {v: api.version};
const response_type = {response_type: 'code'};
const grant_type = {grant_type: 'authorization_code'};

class Auth {
    constructor(config) {
        this.config = config;
	}
	
	/**
	 * https://foursquare.com/oauth2/authenticate?client_id=YOUR_CLIENT_ID&response_type=code&redirect_uri=YOUR_REGISTERED_REDIRECT_URI
	 */
	authenticate(options) {
		return new Promise((resolve, reject) => {
            const qs = Object.assign(version, response_type, this.config, options);
            
            request((`${api.authenticate}`), 'GET', qs).then((res) => {
				resolve(res);
			}).catch((err) => {
				reject(err);
			});
		});
    }

    /**
	 * https://foursquare.com/oauth2/access_token?client_id=YOUR_CLIENT_ID&client_secret=YOUR_CLIENT_SECRET&grant_type=authorization_code&redirect_uri=YOUR_REGISTERED_REDIRECT_URI&code=CODE
	 * 
	 * @param {*} code 
	 * @param {*} options 
	 */
	access_token(code, options) {
		return new Promise((resolve, reject) => {
            const qs = Object.assign(version, grant_type, this.config, options);
            
            request((`${api.access_token}?code=${code}`), 'GET', qs).then((res) => {
				resolve(res);
			}).catch((err) => {
				reject(err);
			});
		});
    }
}

module.exports = Auth;