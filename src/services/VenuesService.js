const { request } = require('../utils');

const { apiConfig } = require('../configs');

class VenuesService {
  constructor(config) {
    this._config = config;
  }

  /**
   * /venues/search
   *
   * @see https://developer.foursquare.com/docs/api-reference/venues/details
   * @param {Object} options Request params
   * @returns {Promise} Promise
   */
  async search(options) {
    try {
      const qs = Object.assign(this._config, options);

      const search = await request({
        url: (`${apiConfig.url}${apiConfig.venues.search}`), qs,
      });

      return search;
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * /venues/explore
   *
   * @see https://developer.foursquare.com/docs/api-reference/venues/explore
   * @param {Object} options Request params
   * @returns {Promise} Promise
   */
  async explore(options) {
    try {
      const qs = Object.assign(this._config, options);

      const explore = await request({
        url: (`${apiConfig.url}${apiConfig.venues.explore}`), qs,
      });

      return explore;
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * /venues/trending
   *
   * @see https://developer.foursquare.com/docs/api-reference/venues/trending
   * @param {Object} options Request params
   * @returns {Promise} Promise
   */
  async trending(options) {
    try {
      const qs = Object.assign(this._config, options);

      const trending = await request({
        url: (`${apiConfig.url}${apiConfig.venues.trending}`), qs,
      });

      return trending;
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * /venues/suggestcompletion
   *
   * @see https://developer.foursquare.com/docs/api-reference/venues/suggestcompletion
   * @param {Object} options Request params
   * @returns {Promise} Promise
   */
  async suggestcompletion(options) {
    try {
      const qs = Object.assign(this._config, options);

      const suggestcompletion = await request({
        url: (`${apiConfig.url}${apiConfig.venues.suggestcompletion}`), qs,
      });

      return suggestcompletion;
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * /venues/categories
   *
   * @see https://developer.foursquare.com/docs/api-reference/venues/categories
   * @param {Object} options Request params
   * @returns {Promise} Promise
   */
  async categories(options) {
    try {
      const qs = Object.assign(this._config, options);

      const categories = await request({
        url: (`${apiConfig.url}${apiConfig.venues.categories}`), qs,
      });

      return categories;
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * /venues/VENUE_ID/select
   *
   * @see https://developer.foursquare.com/docs/api-reference/venues/select
   * @param {string} venueId Venue ID
   * @param {Object} options Request params
   * @returns {Promise} Promise
   */
  async select(venueId, options) {
    try {
      const qs = Object.assign(this._config, options);

      const select = await request({
        url: (`${apiConfig.url}${apiConfig.venues.select}`).replace('VENUE_ID', venueId), qs,
      });

      return select;
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * /venues/VENUE_ID/likes
   *
   * @see https://developer.foursquare.com/docs/api-reference/venues/likes
   * @param {string} venueId Venue ID
   * @param {Object} options Request params
   * @returns {Promise} Promise
   */
  async likes(venueId, options) {
    try {
      const qs = Object.assign(this._config, options);

      const likes = await request({
        url: (`${apiConfig.url}${apiConfig.venues.likes}`).replace('VENUE_ID', venueId), qs,
      });

      return likes;
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * /venues/VENUE_ID/similar
   *
   * @see https://developer.foursquare.com/docs/api-reference/venues/similar
   * @param {string} venueId Venue ID
   * @param {Object} options Request params
   * @returns {Promise} Promise
   */
  async similar(venueId, options) {
    try {
      const qs = Object.assign(this._config, options);

      const similar = await request({
        url: (`${apiConfig.url}${apiConfig.venues.similar}`).replace('VENUE_ID', venueId), qs,
      });

      return similar;
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * /venues/VENUE_ID/nextvenues
   *
   * @see https://developer.foursquare.com/docs/api-reference/venues/nextvenues
   * @param {string} venueId Venue ID
   * @param {Object} options Request params
   * @returns {Promise} Promise
   */
  async nextvenues(venueId, options) {
    try {
      const qs = Object.assign(this._config, options);

      const nextvenues = await request({
        url: (`${apiConfig.url}${apiConfig.venues.nextvenues}`).replace('VENUE_ID', venueId), qs,
      });

      return nextvenues;
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * /venues/VENUE_ID/listed
   *
   * @see https://developer.foursquare.com/docs/api-reference/venues/listed
   * @param {string} venueId Venue ID
   * @param {Object} options Request params
   * @returns {Promise} Promise
   */
  async listed(venueId, options) {
    try {
      const qs = Object.assign(this._config, options);

      const listed = await request({
        url: (`${apiConfig.url}${apiConfig.venues.listed}`).replace('VENUE_ID', venueId), qs,
      });

      return listed;
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * /venues/VENUE_ID
   *
   * @see https://developer.foursquare.com/docs/api-reference/venues/details
   * @param {string} venueId Venue ID
   * @param {Object} options Request params
   * @returns {Promise} Promise
   */
  async details(venueId, options) {
    try {
      const qs = Object.assign(this._config, options);

      const details = await request({
        url: (`${apiConfig.url}${apiConfig.venues.details}`).replace('VENUE_ID', venueId), qs,
      });

      return details;
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * /venues/VENUE_ID/photos
   *
   * @see https://developer.foursquare.com/docs/api-reference/venues/photos
   * @param {string} venueId Venue ID
   * @param {Object} options Request params
   * @returns {Promise} Promise
   */
  async photos(venueId, options) {
    try {
      const qs = Object.assign(this._config, options);

      const photos = await request({
        url: (`${apiConfig.url}${apiConfig.venues.photos}`).replace('VENUE_ID', venueId), qs,
      });

      return photos;
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * /venues/VENUE_ID/tips
   *
   * @see https://developer.foursquare.com/docs/api-reference/venues/tips
   * @param {string} venueId Venue ID
   * @param {Object} options Request params
   * @returns {Promise} Promise
   */
  async tips(venueId, options) {
    try {
      const qs = Object.assign(this._config, options);

      const tips = await request({
        url: (`${apiConfig.url}${apiConfig.venues.tips}`).replace('VENUE_ID', venueId), qs,
      });

      return tips;
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * /venues/VENUE_ID/hours
   *
   * @see https://developer.foursquare.com/docs/api-reference/venues/hours
   * @param {string} venueId Venue ID
   * @param {Object} options Request params
   * @returns {Promise} Promise
   */
  async hours(venueId, options) {
    try {
      const qs = Object.assign(this._config, options);

      const hours = await request({
        url: (`${apiConfig.url}${apiConfig.venues.hours}`).replace('VENUE_ID', venueId), qs,
      });

      return hours;
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * /venues/VENUE_ID/menu
   *
   * @see https://developer.foursquare.com/docs/api-reference/venues/menu
   * @param {string} venueId Venue ID
   * @param {Object} options Request params
   * @returns {Promise} Promise
   */
  async menu(venueId, options) {
    try {
      const qs = Object.assign(this._config, options);

      const menu = await request({
        url: (`${apiConfig.url}${apiConfig.venues.menu}`).replace('VENUE_ID', venueId), qs,
      });

      return menu;
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * /venues/VENUE_ID/links
   *
   * @see https://developer.foursquare.com/docs/api-reference/venues/links
   * @param {string} venueId Venue ID
   * @param {Object} options Request params
   * @returns {Promise} Promise
   */
  async links(venueId, options) {
    try {
      const qs = Object.assign(this._config, options);

      const links = await request({
        url: (`${apiConfig.url}${apiConfig.venues.links}`).replace('VENUE_ID', venueId), qs,
      });

      return links;
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * /venues/VENUE_ID/events
   *
   * @see https://developer.foursquare.com/docs/api-reference/venues/events
   * @param {string} venueId Venue ID
   * @param {Object} options Request params
   * @returns {Promise} Promise
   */
  async events(venueId, options) {
    try {
      const qs = Object.assign(this._config, options);

      const events = await request({
        url: (`${apiConfig.url}${apiConfig.venues.events}`).replace('VENUE_ID', venueId), qs,
      });

      return events;
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * /venues/timeseries
   *
   * @see https://developer.foursquare.com/docs/api-reference/venues/timeseries
   * @param {Object} options Request params
   * @returns {Promise} Promise
   */
  async timeseries(options) {
    try {
      const qs = Object.assign(this._config, options);

      const timeseries = await request({
        url: (`${apiConfig.url}${apiConfig.venues.timeseries}`), qs,
      });

      return timeseries;
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * /venues/VENUE_ID/stats
   *
   * @see https://developer.foursquare.com/docs/api-reference/venues/stats
   * @param {string} venueId Venue ID
   * @param {Object} options Request params
   * @returns {Promise} Promise
   */
  async stats(options) {
    try {
      const qs = Object.assign(this._config, options);

      const stats = await request({
        url: (`${apiConfig.url}${apiConfig.venues.stats}`), qs,
      });

      return stats;
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * /venues/managed
   *
   * @see https://developer.foursquare.com/docs/api-reference/venues/managed
   * @param {Object} options Request params
   * @returns {Promise} Promise
   */
  async managed(options) {
    try {
      const qs = Object.assign(this._config, options);

      const managed = await request({
        url: (`${apiConfig.url}${apiConfig.venues.managed}`), qs,
      });

      return managed;
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * /venues/add
   *
   * @see https://developer.foursquare.com/docs/api-reference/venues/add
   * @param {Object} options Request params
   * @returns {Promise} Promise
   */
  async add(options) {
    try {
      const qs = Object.assign(this._config, options);

      const add = await request({
        url: (`${apiConfig.url}${apiConfig.venues.add}`), qs,
      });

      return add;
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * /venues/VENUE_ID/claim
   *
   * @see https://developer.foursquare.com/docs/api-reference/venues/claim
   * @param {string} venueId Venue ID
   * @param {Object} options Request params
   * @returns {Promise} Promise
   */
  async claim(venueId, options) {
    try {
      const qs = Object.assign(this._config, options);

      const claim = await request({
        url: (`${apiConfig.url}${apiConfig.venues.claim}`).replace('VENUE_ID', venueId), qs,
      });

      return claim;
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * /venues/VENUE_ID/flag
   *
   * @see https://developer.foursquare.com/docs/api-reference/venues/flag
   * @param {string} venueId Venue ID
   * @param {Object} options Request params
   * @returns {Promise} Promise
   */
  async flag(venueId, options) {
    try {
      const qs = Object.assign(this._config, options);

      const flag = await request({
        url: (`${apiConfig.url}${apiConfig.venues.flag}`).replace('VENUE_ID', venueId), qs,
      });

      return flag;
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * /venues/VENUE_ID/proposeedit
   *
   * @see https://developer.foursquare.com/docs/api-reference/venues/proposeedit
   * @param {string} venueId Venue ID
   * @param {Object} options Request params
   * @returns {Promise} Promise
   */
  async proposeedit(venueId, options) {
    try {
      const qs = Object.assign(this._config, options);

      const proposeedit = await request({
        url: (`${apiConfig.url}${apiConfig.venues.proposeedit}`).replace('VENUE_ID', venueId), method: 'POST', qs,
      });

      return proposeedit;
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * /venues/VENUE_ID/like
   *
   * @see https://developer.foursquare.com/docs/api-reference/venues/like
   * @param {string} venueId Venue ID
   * @param {Object} options Request params
   * @returns {Promise} Promise
   */
  async like(venueId, options) {
    try {
      const qs = Object.assign(this._config, options);

      const like = await request({
        url: (`${apiConfig.url}${apiConfig.venues.like}`).replace('VENUE_ID', venueId), qs,
      });

      return like;
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = VenuesService;
