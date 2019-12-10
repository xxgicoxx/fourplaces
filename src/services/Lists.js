const { api } = require('../configs/api');
const request = require('../helpers/request');

const version = {v: api.version};

class Photos {
    constructor(config) {
        this.config = config;
	}
	
	/**
	 * https://api.foursquare.com/v2/lists/LIST_ID
	 * 
	 * @param {*} list_id 
	 * @param {*} options 
	 */
	details(list_id, options) {
		return new Promise((resolve, reject) => {
			const qs = Object.assign(version, this.config, options);
			request((`${api.url}${api.lists.details}`).replace('LIST_ID', list_id), 'GET', qs).then((res) => {
				resolve(res);
			}).catch((err) => {
				reject(err);
			});
		});
	}

	/**
	 * https://api.foursquare.com/v2/lists/add
	 * 
	 * @param {*} options 
	 */
	add(options) {
		return new Promise((resolve, reject) => {
			const qs = Object.assign(version, this.config, options);
			request((`${api.url}${api.lists.add}`), 'POST', qs).then((res) => {
				resolve(res);
			}).catch((err) => {
				reject(err);
			});
		});
	}

	/**
	 * https://api.foursquare.com/v2/lists/LIST_ID/additem
	 * 
	 * @param {*} list_id 
	 * @param {*} options 
	 */
	additem(list_id, options) {
		return new Promise((resolve, reject) => {
			const qs = Object.assign(version, this.config, options);
			request((`${api.url}${api.lists.additem}`).replace('LIST_ID', list_id), 'POST', qs).then((res) => {
				resolve(res);
			}).catch((err) => {
				reject(err);
			});
		});
	}

	/**
	 * https://api.foursquare.com/v2/lists/LIST_ID/share
	 * 
	 * @param {*} list_id 
	 * @param {*} options 
	 */
	share(list_id, options) {
		return new Promise((resolve, reject) => {
			const qs = Object.assign(version, this.config, options);
			request((`${api.url}${api.lists.share}`).replace('LIST_ID', list_id), 'POST', qs).then((res) => {
				resolve(res);
			}).catch((err) => {
				reject(err);
			});
		});
	}
}

module.exports = Photos;