const { api } = require('../configs/api');
const request = require('../helpers/request');

const version = {v: api.version};

class Checkins {
    constructor(config) {
        this.config = config;
	}
    
	/**
     * https://api.foursquare.com/v2/checkins/CHECKIN_ID
     * 
     * @param {*} checkin_id 
     * @param {*} options 
     */
	details(checkin_id, options) {
		return new Promise((resolve, reject) => {
			const qs = Object.assign(version, this.config, options);
			request((`${api.url}${api.checkins.details}`).replace('CHECKIN_ID', checkin_id), 'GET', qs).then((res) => {
				resolve(res);
			}).catch((err) => {
				reject(err);
			});
		});
    }
    
    /**
     * https://api.foursquare.com/v2/checkins/resolve
     * 
     * @param {*} options 
     */
	resolve(options) {
		return new Promise((resolve, reject) => {
			const qs = Object.assign(version, this.config, options);
			request((`${api.url}${api.checkins.resolve}`), 'GET', qs).then((res) => {
				resolve(res);
			}).catch((err) => {
				reject(err);
			});
		});
	}

	/**
     * https://api.foursquare.com/v2/checkins/add
     * 
     * @param {*} options 
     */
	add(options) {
		return new Promise((resolve, reject) => {
			const qs = Object.assign(version, this.config, options);
			request((`${api.url}${api.checkins.add}`), 'POST', qs).then((res) => {
				resolve(res);
			}).catch((err) => {
				reject(err);
			});
		});
    }
    
    /**
     * https://api.foursquare.com/v2/checkins/CHECKIN_ID/like
     * 
     * @param {*} options 
     */
	like(checkin_id, options) {
		return new Promise((resolve, reject) => {
			const qs = Object.assign(version, this.config, options);
			request((`${api.url}${api.checkins.like}`).replace('CHECKIN_ID', checkin_id), 'POST', qs).then((res) => {
				resolve(res);
			}).catch((err) => {
				reject(err);
			});
		});
    }
    
    /**
     * https://api.foursquare.com/v2/checkins/CHECKIN_ID/addpost
     * 
     * @param {*} options 
     */
	addpost(checkin_id, options) {
		return new Promise((resolve, reject) => {
			const qs = Object.assign(version, this.config, options);
			request((`${api.url}${api.checkins.addpost}`).replace('CHECKIN_ID', checkin_id), 'POST', qs).then((res) => {
				resolve(res);
			}).catch((err) => {
				reject(err);
			});
		});
	}
}

module.exports = Checkins;