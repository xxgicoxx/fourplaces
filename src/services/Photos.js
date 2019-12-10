const { api } = require('../configs/api');
const request = require('../helpers/request');

const version = {v: api.version};

class Photos {
    constructor(config) {
        this.config = config;
	}
	
	/**
     * https://api.foursquare.com/v2/photos/PHOTO_ID
     * 
     * @param {*} photo_id 
     * @param {*} options 
     */
	details(photo_id, options) {
		return new Promise((resolve, reject) => {
			const qs = Object.assign(version, this.config, options);
			request((`${api.url}${api.photos.details}`).replace('PHOTO_ID', photo_id), 'GET', qs).then((res) => {
				resolve(res);
			}).catch((err) => {
				reject(err);
			});
		});
	}

	/**
     * https://api.foursquare.com/v2/photos/add
     * 
     * @param {*} options 
     */
	add(options) {
		return new Promise((resolve, reject) => {
			const qs = Object.assign(version, this.config, options);
			request((`${api.url}${api.photos.add}`), 'POST', qs).then((res) => {
				resolve(res);
			}).catch((err) => {
				reject(err);
			});
		});
	}
}

module.exports = Photos;