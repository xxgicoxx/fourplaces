const { request } = require('../utils');

const { apiConfig } = require('../configs');

class VenuesService {
  constructor(config) {
    this.config = config;
  }

  /**
   * /venues/search
   *
   * @see https://developer.foursquare.com/docs/api-reference/venues/details
   * @param {Object} options Request params
   * @returns {Promise} Promise
   */
  async search(options) {
    const qs = { ...this.config, ...options };

    const search = await request({
      url: (`${apiConfig.url}${apiConfig.venues.search}`), qs,
    });

    return search;
  }

  /**
   * /venues/explore
   *
   * @see https://developer.foursquare.com/docs/api-reference/venues/explore
   * @param {Object} options Request params
   * @returns {Promise} Promise
   */
  async explore(options) {
    const qs = { ...this.config, ...options };

    const explore = await request({
      url: (`${apiConfig.url}${apiConfig.venues.explore}`), qs,
    });

    return explore;
  }

  /**
   * /venues/trending
   *
   * @see https://developer.foursquare.com/docs/api-reference/venues/trending
   * @param {Object} options Request params
   * @returns {Promise} Promise
   */
  async trending(options) {
    const qs = { ...this.config, ...options };

    const trending = await request({
      url: (`${apiConfig.url}${apiConfig.venues.trending}`), qs,
    });

    return trending;
  }

  /**
   * /venues/suggestcompletion
   *
   * @see https://developer.foursquare.com/docs/api-reference/venues/suggestcompletion
   * @param {Object} options Request params
   * @returns {Promise} Promise
   */
  async suggestcompletion(options) {
    const qs = { ...this.config, ...options };

    const suggestcompletion = await request({
      url: (`${apiConfig.url}${apiConfig.venues.suggestcompletion}`), qs,
    });

    return suggestcompletion;
  }

  /**
   * /venues/categories
   *
   * @see https://developer.foursquare.com/docs/api-reference/venues/categories
   * @param {Object} options Request params
   * @returns {Promise} Promise
   */
  async categories(options) {
    const qs = { ...this.config, ...options };

    const categories = await request({
      url: (`${apiConfig.url}${apiConfig.venues.categories}`), qs,
    });

    return categories;
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
    const qs = { ...this.config, ...options };

    const select = await request({
      url: (`${apiConfig.url}${apiConfig.venues.select}`).replace('VENUE_ID', venueId), qs,
    });

    return select;
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
    const qs = { ...this.config, ...options };

    const likes = await request({
      url: (`${apiConfig.url}${apiConfig.venues.likes}`).replace('VENUE_ID', venueId), qs,
    });

    return likes;
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
    const qs = { ...this.config, ...options };

    const similar = await request({
      url: (`${apiConfig.url}${apiConfig.venues.similar}`).replace('VENUE_ID', venueId), qs,
    });

    return similar;
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
    const qs = { ...this.config, ...options };

    const nextvenues = await request({
      url: (`${apiConfig.url}${apiConfig.venues.nextvenues}`).replace('VENUE_ID', venueId), qs,
    });

    return nextvenues;
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
    const qs = { ...this.config, ...options };

    const listed = await request({
      url: (`${apiConfig.url}${apiConfig.venues.listed}`).replace('VENUE_ID', venueId), qs,
    });

    return listed;
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
    const qs = { ...this.config, ...options };

    const details = await request({
      url: (`${apiConfig.url}${apiConfig.venues.details}`).replace('VENUE_ID', venueId), qs,
    });

    return details;
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
    const qs = { ...this.config, ...options };

    const photos = await request({
      url: (`${apiConfig.url}${apiConfig.venues.photos}`).replace('VENUE_ID', venueId), qs,
    });

    return photos;
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
    const qs = { ...this.config, ...options };

    const tips = await request({
      url: (`${apiConfig.url}${apiConfig.venues.tips}`).replace('VENUE_ID', venueId), qs,
    });

    return tips;
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
    const qs = { ...this.config, ...options };

    const hours = await request({
      url: (`${apiConfig.url}${apiConfig.venues.hours}`).replace('VENUE_ID', venueId), qs,
    });

    return hours;
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
    const qs = { ...this.config, ...options };

    const menu = await request({
      url: (`${apiConfig.url}${apiConfig.venues.menu}`).replace('VENUE_ID', venueId), qs,
    });

    return menu;
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
    const qs = { ...this.config, ...options };

    const links = await request({
      url: (`${apiConfig.url}${apiConfig.venues.links}`).replace('VENUE_ID', venueId), qs,
    });

    return links;
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
    const qs = { ...this.config, ...options };

    const events = await request({
      url: (`${apiConfig.url}${apiConfig.venues.events}`).replace('VENUE_ID', venueId), qs,
    });

    return events;
  }

  /**
   * /venues/timeseries
   *
   * @see https://developer.foursquare.com/docs/api-reference/venues/timeseries
   * @param {Object} options Request params
   * @returns {Promise} Promise
   */
  async timeseries(options) {
    const qs = { ...this.config, ...options };

    const timeseries = await request({
      url: (`${apiConfig.url}${apiConfig.venues.timeseries}`), qs,
    });

    return timeseries;
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
    const qs = { ...this.config, ...options };

    const stats = await request({
      url: (`${apiConfig.url}${apiConfig.venues.stats}`), qs,
    });

    return stats;
  }

  /**
   * /venues/managed
   *
   * @see https://developer.foursquare.com/docs/api-reference/venues/managed
   * @param {Object} options Request params
   * @returns {Promise} Promise
   */
  async managed(options) {
    const qs = { ...this.config, ...options };

    const managed = await request({
      url: (`${apiConfig.url}${apiConfig.venues.managed}`), qs,
    });

    return managed;
  }

  /**
   * /venues/add
   *
   * @see https://developer.foursquare.com/docs/api-reference/venues/add
   * @param {Object} options Request params
   * @returns {Promise} Promise
   */
  async add(options) {
    const qs = { ...this.config, ...options };

    const add = await request({
      url: (`${apiConfig.url}${apiConfig.venues.add}`), qs,
    });

    return add;
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
    const qs = { ...this.config, ...options };

    const claim = await request({
      url: (`${apiConfig.url}${apiConfig.venues.claim}`).replace('VENUE_ID', venueId), qs,
    });

    return claim;
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
    const qs = { ...this.config, ...options };

    const flag = await request({
      url: (`${apiConfig.url}${apiConfig.venues.flag}`).replace('VENUE_ID', venueId), qs,
    });

    return flag;
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
    const qs = { ...this.config, ...options };

    const proposeedit = await request({
      url: (`${apiConfig.url}${apiConfig.venues.proposeedit}`).replace('VENUE_ID', venueId), method: 'POST', qs,
    });

    return proposeedit;
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
    const qs = { ...this.config, ...options };

    const like = await request({
      url: (`${apiConfig.url}${apiConfig.venues.like}`).replace('VENUE_ID', venueId), qs,
    });

    return like;
  }
}

module.exports = VenuesService;
