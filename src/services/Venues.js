const { api } = require('../configs/api');
const request = require('../helpers/request');

const version = {v: api.version};

class Venues {
    constructor(config) {
        this.config = config;
	}
	
	/**
	 * https://api.foursquare.com/v2/venues/search
	 * 
	 * @param {*} options 
	 */
	search(options) {
		return new Promise((resolve, reject) => {
			const qs = Object.assign(version, this.config, options);
			request((`${api.url}${api.venues.search}`), 'GET', qs).then((res) => {
				resolve(res);
			}).catch((err) => {
				reject(err);
			});
		});
	}

	/**
	 * https://api.foursquare.com/v2/venues/explore
	 * 
	 * @param {*} options 
	 */
	explore (options) {	
		return new Promise((resolve, reject) => {
			const qs = Object.assign(version, this.config, options);
			request((`${api.url}${api.venues.explore}`), 'GET', qs).then((res) => {
				resolve(res);
			}).catch((err) => {
				reject(err);
			});
		});
	}

	/**
	 * https://api.foursquare.com/v2/venues/trending
	 * 
	 * @param {*} options 
	 */
	trending(options) {
		return new Promise((resolve, reject) => {
			const qs = Object.assign(version, this.config, options);
			request((`${api.url}${api.venues.trending}`), 'GET', qs).then((res) => {
				resolve(res);
			}).catch((err) => {
				reject(err);
			});
		});
	}

	/**
	 * https://api.foursquare.com/v2/venues/suggestcompletion
	 * 
	 * @param {*} options 
	 */
	suggestcompletion(options) {
		return new Promise((resolve, reject) => {
			const qs = Object.assign(version, this.config, options);
			request((`${api.url}${api.venues.suggestcompletion}`), 'GET', qs).then((res) => {
				resolve(res);
			}).catch((err) => {
				reject(err);
			});
		});
	}

	/**
	 * https://api.foursquare.com/v2/venues/categories
	 * 
	 * @param {*} options 
	 */
	categories(options) {
		return new Promise((resolve, reject) => {
			const qs = Object.assign(version, this.config, options);
			request((`${api.url}${api.venues.categories}`), 'GET', qs).then((res) => {
				resolve(res);
			}).catch((err) => {
				reject(err);
			});
		});
	}

	/**
	 * https://api.foursquare.com/v2/venues/VENUE_ID/select
	 * 
	 * @param {*} venue_id 
	 * @param {*} options 
	 */
	select(venue_id, options) {
		return new Promise((resolve, reject) => {
			const qs = Object.assign(version, this.config, options);
			request((`${api.url}${api.venues.select}`).replace('VENUE_ID', venue_id), 'GET', qs).then((res) => {
				resolve(res);
			}).catch((err) => {
				reject(err);
			});
		});
	}

	/**
	 * https://api.foursquare.com/v2/venues/VENUE_ID/likes
	 * 
	 * @param {*} venue_id 
	 * @param {*} options 
	 */
	likes(venue_id, options) {
		return new Promise((resolve, reject) => {
			const qs = Object.assign(version, this.config, options);
			request((`${api.url}${api.venues.likes}`).replace('VENUE_ID', venue_id), 'GET', qs).then((res) => {
				resolve(res);
			}).catch((err) => {
				reject(err);
			});
		});
	}

	/**
	 * https://api.foursquare.com/v2/venues/VENUE_ID/similar
	 * 
	 * @param {*} venue_id 
	 * @param {*} options 
	 */
	similar(venue_id, options) {
		return new Promise((resolve, reject) => {
			const qs = Object.assign(version, this.config, options);
			request((`${api.url}${api.venues.similar}`).replace('VENUE_ID', venue_id), 'GET', qs).then((res) => {
				resolve(res);
			}).catch((err) => {
				reject(err);
			});
		});
	}

	/**
	 * https://api.foursquare.com/v2/venues/VENUE_ID/nextvenues
	 * 
	 * @param {*} venue_id 
	 * @param {*} options 
	 */
	nextvenues(venue_id, options) {
		return new Promise((resolve, reject) => {
			const qs = Object.assign(version, this.config, options);
			request((`${api.url}${api.venues.nextvenues}`).replace('VENUE_ID', venue_id), 'GET', qs).then((res) => {
				resolve(res);
			}).catch((err) => {
				reject(err);
			});
		});
	}

	/**
	 * https://api.foursquare.com/v2/venues/VENUE_ID/listed
	 * 
	 * @param {*} venue_id 
	 * @param {*} options 
	 */
	listed(venue_id, options) {
		return new Promise((resolve, reject) => {
			const qs = Object.assign(version, this.config, options);
			request((`${api.url}${api.venues.listed}`).replace('VENUE_ID', venue_id), 'GET', qs).then((res) => {
				resolve(res);
			}).catch((err) => {
				reject(err);
			});
		});
	}

	/**
	 * https://api.foursquare.com/v2/venues/VENUE_ID
	 * 
	 * @param {*} venue_id 
	 * @param {*} options 
	 */
	details(venue_id, options) {
		return new Promise((resolve, reject) => {
			const qs = Object.assign(version, this.config, options);
			request((`${api.url}${api.venues.details}`).replace('VENUE_ID', venue_id), 'GET', qs).then((res) => {
				resolve(res);
			}).catch((err) => {
				reject(err);
			});
		});
	}

	/**
	 * https://api.foursquare.com/v2/venues/VENUE_ID/photos
	 * 
	 * @param {*} venue_id 
	 * @param {*} options 
	 */
	photos(venue_id, options) {
		return new Promise((resolve, reject) => {
			const qs = Object.assign(version, this.config, options);
			request((`${api.url}${api.venues.photos}`).replace('VENUE_ID', venue_id), 'GET', qs).then((res) => {
				resolve(res);
			}).catch((err) => {
				reject(err);
			});
		});
	}

	/**
	 * https://api.foursquare.com/v2/venues/VENUE_ID/tips
	 * 
	 * @param {*} venue_id 
	 * @param {*} options 
	 */
	tips(venue_id, options) {
		return new Promise((resolve, reject) => {
			const qs = Object.assign(version, this.config, options);
			request((`${api.url}${api.venues.tips}`).replace('VENUE_ID', venue_id), 'GET', qs).then((res) => {
				resolve(res);
			}).catch((err) => {
				reject(err);
			});
		});
	}

	/**
	 * https://api.foursquare.com/v2/venues/VENUE_ID/hours
	 * 
	 * @param {*} venue_id 
	 * @param {*} options 
	 */
	hours(venue_id, options) {
		return new Promise((resolve, reject) => {
			const qs = Object.assign(version, this.config, options);
			request((`${api.url}${api.venues.hours}`).replace('VENUE_ID', venue_id), 'GET', qs).then((res) => {
				resolve(res);
			}).catch((err) => {
				reject(err);
			});
		});
	}

	/**
	 * https://api.foursquare.com/v2/venues/VENUE_ID/menu
	 * 
	 * @param {*} venue_id 
	 * @param {*} options 
	 */
	menu(venue_id, options) {
		return new Promise((resolve, reject) => {
			const qs = Object.assign(version, this.config, options);
			request((`${api.url}${api.venues.menu}`).replace('VENUE_ID', venue_id), 'GET', qs).then((res) => {
				resolve(res);
			}).catch((err) => {
				reject(err);
			});
		});
	}

	/**
	 * https://api.foursquare.com/v2/venues/VENUE_ID/links
	 * 
	 * @param {*} venue_id 
	 * @param {*} options 
	 */
	links(venue_id, options) {
		return new Promise((resolve, reject) => {
			const qs = Object.assign(version, this.config, options);
			request((`${api.url}${api.venues.links}`).replace('VENUE_ID', venue_id), 'GET', qs).then((res) => {
				resolve(res);
			}).catch((err) => {
				reject(err);
			});
		});
	}

	/**
	 * https://api.foursquare.com/v2/venues/VENUE_ID/events
	 * 
	 * @param {*} venue_id 
	 * @param {*} options 
	 */
	events(venue_id, options) {
		return new Promise((resolve, reject) => {
			const qs = Object.assign(version, this.config, options);
			request((`${api.url}${api.venues.events}`).replace('VENUE_ID', venue_id), 'GET', qs).then((res) => {
				resolve(res);
			}).catch((err) => {
				reject(err);
			});
		});
	}

	/**
	 * https://api.foursquare.com/v2/venues/timeseries
	 * 
	 * @param {*} options 
	 */
	timeseries(options) {
		return new Promise((resolve, reject) => {
			const qs = Object.assign(version, this.config, options);
			request((`${api.url}${api.venues.timeseries}`), 'GET', qs).then((res) => {
				resolve(res);
			}).catch((err) => {
				reject(err);
			});
		});
	}

	/**
	 * https://api.foursquare.com/v2/venues/VENUE_ID/stats
	 * 
	 * @param {*} venue_id 
	 * @param {*} options 
	 */
	stats(options) {
		return new Promise((resolve, reject) => {
			const qs = Object.assign(version, this.config, options);
			request((`${api.url}${api.venues.stats}`), 'GET', qs).then((res) => {
				resolve(res);
			}).catch((err) => {
				reject(err);
			});
		});
	}

	/**
	 * https://api.foursquare.com/v2/venues/managed
	 * 
	 * @param {*} options 
	 */
	managed(options) {
		return new Promise((resolve, reject) => {
			const qs = Object.assign(version, this.config, options);
			request((`${api.url}${api.venues.managed}`), 'GET', qs).then((res) => {
				resolve(res);
			}).catch((err) => {
				reject(err);
			});
		});
	}

	/**
	 * https://api.foursquare.com/v2/venues/add
	 * 
	 * @param {*} options 
	 */
	add(options) {
		return new Promise((resolve, reject) => {
			const qs = Object.assign(version, this.config, options);
			request((`${api.url}${api.venues.add}`), 'POST', qs).then((res) => {
				resolve(res);
			}).catch((err) => {
				reject(err);
			});
		});
	}

	/**
	 * https://api.foursquare.com/v2/venues/VENUE_ID/claim
	 * 
	 * @param {*} venue_id 
	 * @param {*} options 
	 */
	claim(venue_id, options) {
		return new Promise((resolve, reject) => {
			const qs = Object.assign(version, this.config, options);
			request((`${api.url}${api.venues.claim}`).replace('VENUE_ID', venue_id), 'POST', qs).then((res) => {
				resolve(res);
			}).catch((err) => {
				reject(err);
			});
		});
	}

	/**
	 * https://api.foursquare.com/v2/venues/VENUE_ID/flag
	 * 
	 * @param {*} venue_id 
	 * @param {*} options 
	 */
	flag(venue_id, options) {
		return new Promise((resolve, reject) => {
			const qs = Object.assign(version, this.config, options);
			request((`${api.url}${api.venues.flag}`).replace('VENUE_ID', venue_id), 'POST', qs).then((res) => {
				resolve(res);
			}).catch((err) => {
				reject(err);
			});
		});
	}

	/**
	 * https://api.foursquare.com/v2/venues/VENUE_ID/proposeedit
	 * 
	 * @param {*} venue_id 
	 * @param {*} options 
	 */
	proposeedit(venue_id, options) {
		return new Promise((resolve, reject) => {
			const qs = Object.assign(version, this.config, options);
			request((`${api.url}${api.venues.proposeedit}`).replace('VENUE_ID', venue_id), 'POST', qs).then((res) => {
				resolve(res);
			}).catch((err) => {
				reject(err);
			});
		});
	}

	/**
	 * https://api.foursquare.com/v2/venues/VENUE_ID/like
	 * 
	 * @param {*} venue_id 
	 * @param {*} options 
	 */
	like(venue_id, options) {
		return new Promise((resolve, reject) => {
			const qs = Object.assign(version, this.config, options);
			request((`${api.url}${api.venues.like}`).replace('VENUE_ID', venue_id), 'GET', qs).then((res) => {
				resolve(res);
			}).catch((err) => {
				reject(err);
			});
		});
	}
}

module.exports = Venues;