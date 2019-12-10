const { api } = require('../configs/api');
const request = require('../helpers/request');

const version = {v: api.version};

class Tips {
    constructor(config) {
        this.config = config;
	}
	
	/**
     * https://api.foursquare.com/v2/tips/TIP_ID
     * 
     * @param {*} tip_id 
     * @param {*} options 
     */
	details(tip_id, options) {
		return new Promise((resolve, reject) => {
			const qs = Object.assign(version, this.config, options);
			request((`${api.url}${api.tips.details}`).replace('TIP_ID', tip_id), 'GET', qs).then((res) => {
				resolve(res);
			}).catch((err) => {
				reject(err);
			});
		});
	}

	/**
     * https://api.foursquare.com/v2/tips/add
     * 
     * @param {*} options 
     */
	add(options) {
		return new Promise((resolve, reject) => {
			const qs = Object.assign(version, this.config, options);
			request((`${api.url}${api.tips.add}`), 'POST', qs).then((res) => {
				resolve(res);
			}).catch((err) => {
				reject(err);
			});
		});
	}
}

module.exports = Tips;