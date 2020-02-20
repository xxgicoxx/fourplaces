const request = require('request-promise-native');

const apiConfig = require('../configs/api');

class VenuesService {
  constructor(config) {
    this._config = config;
  }

  /**
    * /venues/search
    *
    * @see https://developer.foursquare.com/docs/api/venues/details
    * @param {!Object} options request params
    * @returns {Promise} return Promise
    */
  async search(options = {}) {
    try {
      const qs = { ...this._config, ...options };

      const search = await request({
        url: (`${apiConfig.url}${apiConfig.venues.search}`), method: 'GET', json: true, qs,
      });

      return search;
    } catch (ex) {
      throw new Error(ex);
    }
  }

  /**
    * /venues/explore
    *
    * @see https://developer.foursquare.com/docs/api/venues/explore
    * @param {!Object} options request params
    * @returns {Promise} return Promise
    */
  async explore(options = {}) {
    try {
      const qs = { ...this._config, ...options };

      const explore = await request({
        url: (`${apiConfig.url}${apiConfig.venues.explore}`), method: 'GET', json: true, qs,
      });

      return explore;
    } catch (ex) {
      throw new Error(ex);
    }
  }

  /**
    * /venues/trending
    *
    * @see https://developer.foursquare.com/docs/api/venues/trending
    * @param {!Object} options request params
    * @returns {Promise} return Promise
    */
  async trending(options = {}) {
    try {
      const qs = { ...this._config, ...options };

      const trending = await request({
        url: (`${apiConfig.url}${apiConfig.venues.trending}`), method: 'GET', json: true, qs,
      });

      return trending;
    } catch (ex) {
      throw new Error(ex);
    }
  }

  /**
    * /venues/suggestcompletion
    *
    * @see https://developer.foursquare.com/docs/api/venues/suggestcompletion
    * @param {!Object} options request params
    * @returns {Promise} return Promise
    */
  async suggestcompletion(options = {}) {
    try {
      const qs = { ...this._config, ...options };

      const suggestcompletion = await request({
        url: (`${apiConfig.url}${apiConfig.venues.suggestcompletion}`), method: 'GET', json: true, qs,
      });

      return suggestcompletion;
    } catch (ex) {
      throw new Error(ex);
    }
  }

  /**
    * /venues/categories
    *
    * @see https://developer.foursquare.com/docs/api/venues/categories
    * @param {!Object} options request params
    * @returns {Promise} return Promise
    */
  async categories(options = {}) {
    try {
      const qs = { ...this._config, ...options };

      const categories = await request({
        url: (`${apiConfig.url}${apiConfig.venues.categories}`), method: 'GET', json: true, qs,
      });

      return categories;
    } catch (ex) {
      throw new Error(ex);
    }
  }

  /**
    * /venues/VENUE_ID/select
    *
    * @see https://developer.foursquare.com/docs/api/venues/select
    * @param {!string} venueId
    * @param {Object} options request params
    * @returns {Promise} return Promise
    */
  async select(venueId, options) {
    try {
      const qs = { ...this._config, ...options };

      const select = await request({
        url: (`${apiConfig.url}${apiConfig.venues.select}`).replace('VENUE_ID', venueId), method: 'GET', json: true, qs,
      });

      return select;
    } catch (ex) {
      throw new Error(ex);
    }
  }

  /**
    * /venues/VENUE_ID/likes
    *
    * @see https://developer.foursquare.com/docs/api/venues/likes
    * @param {!string} venueId
    * @param {Object} options request params
    * @returns {Promise} return Promise
    */
  async likes(venueId, options) {
    try {
      const qs = { ...this._config, ...options };

      const likes = await request({
        url: (`${apiConfig.url}${apiConfig.venues.likes}`).replace('VENUE_ID', venueId), method: 'GET', json: true, qs,
      });

      return likes;
    } catch (ex) {
      throw new Error(ex);
    }
  }

  /**
    * /venues/VENUE_ID/similar
    *
    * @see https://developer.foursquare.com/docs/api/venues/similar
    * @param {!string} venueId
    * @param {Object} options request params
    * @returns {Promise} return Promise
    */
  async similar(venueId, options) {
    try {
      const qs = { ...this._config, ...options };

      const similar = await request({
        url: (`${apiConfig.url}${apiConfig.venues.similar}`).replace('VENUE_ID', venueId), method: 'GET', json: true, qs,
      });

      return similar;
    } catch (ex) {
      throw new Error(ex);
    }
  }

  /**
    * /venues/VENUE_ID/nextvenues
    *
    * @see https://developer.foursquare.com/docs/api/venues/nextvenues
    * @param {!string} venueId
    * @param {Object} options request params
    * @returns {Promise} return Promise
    */
  async nextvenues(venueId, options) {
    try {
      const qs = { ...this._config, ...options };

      const nextvenues = await request({
        url: (`${apiConfig.url}${apiConfig.venues.nextvenues}`).replace('VENUE_ID', venueId), method: 'GET', json: true, qs,
      });

      return nextvenues;
    } catch (ex) {
      throw new Error(ex);
    }
  }

  /**
    * /venues/VENUE_ID/listed
    *
    * @see https://developer.foursquare.com/docs/api/venues/listed
    * @param {!string} venueId
    * @param {Object} options request params
    * @returns {Promise} return Promise
    */
  async listed(venueId, options) {
    try {
      const qs = { ...this._config, ...options };

      const listed = await request({
        url: (`${apiConfig.url}${apiConfig.venues.listed}`).replace('VENUE_ID', venueId), method: 'GET', json: true, qs,
      });

      return listed;
    } catch (ex) {
      throw new Error(ex);
    }
  }

  /**
    * /venues/VENUE_ID
    *
    * @see https://developer.foursquare.com/docs/api/venues/details
    * @param {!string} venueId
    * @param {Object} options request params
    * @returns {Promise} return Promise
    */
  async details(venueId, options) {
    try {
      const qs = { ...this._config, ...options };

      const details = await request({
        url: (`${apiConfig.url}${apiConfig.venues.details}`).replace('VENUE_ID', venueId), method: 'GET', json: true, qs,
      });

      return details;
    } catch (ex) {
      throw new Error(ex);
    }
  }

  /**
    * /venues/VENUE_ID/photos
    *
    * @see https://developer.foursquare.com/docs/api/venues/photos
    * @param {!string} venueId
    * @param {Object} options request params
    * @returns {Promise} return Promise
    */
  async photos(venueId, options) {
    try {
      const qs = { ...this._config, ...options };

      const photos = await request({
        url: (`${apiConfig.url}${apiConfig.venues.photos}`).replace('VENUE_ID', venueId), method: 'GET', json: true, qs,
      });

      return photos;
    } catch (ex) {
      throw new Error(ex);
    }
  }

  /**
    * /venues/VENUE_ID/tips
    *
    * @see https://developer.foursquare.com/docs/api/venues/tips
    * @param {!string} venueId
    * @param {Object} options request params
    * @returns {Promise} return Promise
    */
  async tips(venueId, options) {
    try {
      const qs = { ...this._config, ...options };

      const tips = await request({
        url: (`${apiConfig.url}${apiConfig.venues.tips}`).replace('VENUE_ID', venueId), method: 'GET', json: true, qs,
      });

      return tips;
    } catch (ex) {
      throw new Error(ex);
    }
  }

  /**
    * /venues/VENUE_ID/hours
    *
    * @see https://developer.foursquare.com/docs/api/venues/hours
    * @param {!string} venueId
    * @param {Object} options request params
    * @returns {Promise} return Promise
    */
  async hours(venueId, options) {
    try {
      const qs = { ...this._config, ...options };

      const hours = await request({
        url: (`${apiConfig.url}${apiConfig.venues.hours}`).replace('VENUE_ID', venueId), method: 'GET', json: true, qs,
      });

      return hours;
    } catch (ex) {
      throw new Error(ex);
    }
  }

  /**
    * /venues/VENUE_ID/menu
    *
    * @see https://developer.foursquare.com/docs/api/venues/menu
    * @param {!string} venueId
    * @param {Object} options request params
    * @returns {Promise} return Promise
    */
  async menu(venueId, options) {
    try {
      const qs = { ...this._config, ...options };

      const menu = await request({
        url: (`${apiConfig.url}${apiConfig.venues.menu}`).replace('VENUE_ID', venueId), method: 'GET', json: true, qs,
      });

      return menu;
    } catch (ex) {
      throw new Error(ex);
    }
  }

  /**
    * /venues/VENUE_ID/links
    *
    * @see https://developer.foursquare.com/docs/api/venues/links
    * @param {!string} venueId
    * @param {Object} options request params
    * @returns {Promise} return Promise
    */
  async links(venueId, options) {
    try {
      const qs = { ...this._config, ...options };

      const links = await request({
        url: (`${apiConfig.url}${apiConfig.venues.links}`).replace('VENUE_ID', venueId), method: 'GET', json: true, qs,
      });

      return links;
    } catch (ex) {
      throw new Error(ex);
    }
  }

  /**
    * /venues/VENUE_ID/events
    *
    * @see https://developer.foursquare.com/docs/api/venues/events
    * @param {!string} venueId
    * @param {Object} options request params
    * @returns {Promise} return Promise
    */
  async events(venueId, options) {
    try {
      const qs = { ...this._config, ...options };

      const events = await request({
        url: (`${apiConfig.url}${apiConfig.venues.events}`).replace('VENUE_ID', venueId), method: 'GET', json: true, qs,
      });

      return events;
    } catch (ex) {
      throw new Error(ex);
    }
  }

  /**
    * /venues/timeseries
    *
    * @see https://developer.foursquare.com/docs/api/venues/timeseries
    * @param {!Object} options request params
    * @returns {Promise} return Promise
    */
  async timeseries(options = {}) {
    try {
      const qs = { ...this._config, ...options };

      const timeseries = await request({
        url: (`${apiConfig.url}${apiConfig.venues.timeseries}`), method: 'GET', json: true, qs,
      });

      return timeseries;
    } catch (ex) {
      throw new Error(ex);
    }
  }

  /**
    * /venues/VENUE_ID/stats
    *
    * @see https://developer.foursquare.com/docs/api/venues/stats
    * @param {!string} venueId
    * @param {Object} options request params
    * @returns {Promise} return Promise
    */
  async stats(options = {}) {
    try {
      const qs = { ...this._config, ...options };

      const stats = await request({
        url: (`${apiConfig.url}${apiConfig.venues.stats}`), method: 'GET', json: true, qs,
      });

      return stats;
    } catch (ex) {
      throw new Error(ex);
    }
  }

  /**
    * /venues/managed
    *
    * @see https://developer.foursquare.com/docs/api/venues/managed
    * @param {!Object} options request params
    * @returns {Promise} return Promise
    */
  async managed(options = {}) {
    try {
      const qs = { ...this._config, ...options };

      const managed = await request({
        url: (`${apiConfig.url}${apiConfig.venues.managed}`), method: 'GET', json: true, qs,
      });

      return managed;
    } catch (ex) {
      throw new Error(ex);
    }
  }

  /**
    * /venues/add
    *
    * @see https://developer.foursquare.com/docs/api/venues/add
    * @param {!Object} options request params
    * @returns {Promise} return Promise
    */
  async add(options = {}) {
    try {
      const qs = { ...this._config, ...options };

      const add = await request({
        url: (`${apiConfig.url}${apiConfig.venues.add}`), method: 'GET', json: true, qs,
      });

      return add;
    } catch (ex) {
      throw new Error(ex);
    }
  }

  /**
    * /venues/VENUE_ID/claim
    *
    * @see https://developer.foursquare.com/docs/api/venues/claim
    * @param {!string} venueId
    * @param {Object} options request params
    * @returns {Promise} return Promise
    */
  async claim(venueId, options) {
    try {
      const qs = { ...this._config, ...options };

      const claim = await request({
        url: (`${apiConfig.url}${apiConfig.venues.claim}`).replace('VENUE_ID', venueId), method: 'GET', json: true, qs,
      });

      return claim;
    } catch (ex) {
      throw new Error(ex);
    }
  }

  /**
    * /venues/VENUE_ID/flag
    *
    * @see https://developer.foursquare.com/docs/api/venues/flag
    * @param {!string} venueId
    * @param {Object} options request params
    * @returns {Promise} return Promise
    */
  async flag(venueId, options) {
    try {
      const qs = { ...this._config, ...options };

      const flag = await request({
        url: (`${apiConfig.url}${apiConfig.venues.flag}`).replace('VENUE_ID', venueId), method: 'GET', json: true, qs,
      });

      return flag;
    } catch (ex) {
      throw new Error(ex);
    }
  }

  /**
    * /venues/VENUE_ID/proposeedit
    *
    * @see https://developer.foursquare.com/docs/api/venues/proposededit
    * @param {!string} venueId
    * @param {Object} options request params
    * @returns {Promise} return Promise
    */
  async proposeedit(venueId, options) {
    try {
      const qs = { ...this._config, ...options };

      const proposeedit = await request({
        url: (`${apiConfig.url}${apiConfig.venues.proposeedit}`).replace('VENUE_ID', venueId), method: 'POST', json: true, qs,
      });

      return proposeedit;
    } catch (ex) {
      throw new Error(ex);
    }
  }

  /**
    * /venues/VENUE_ID/like
    *
    * @see https://developer.foursquare.com/docs/api/venues/like
    * @param {!string} venueId
    * @param {Object} options request params
    * @returns {Promise} return Promise
    */
  async like(venueId, options) {
    try {
      const qs = { ...this._config, ...options };

      const like = await request({
        url: (`${apiConfig.url}${apiConfig.venues.like}`).replace('VENUE_ID', venueId), method: 'GET', json: true, qs,
      });

      return like;
    } catch (ex) {
      throw new Error(ex);
    }
  }
}

module.exports = VenuesService;
