const api = require('../configs/api');
const request = require('../helpers/request');

class Venues {
  constructor(config) {
    this.version = { v: api.version };
    this.config = config;
  }

  /**
    * https://api.foursquare.com/v2/venues/search
    *
    * @param {*} options
    */
  search(options) {
    const qs = Object.assign(this.version, this.config, options);
    return request((`${api.url}${api.venues.search}`), 'GET', qs);
  }

  /**
    * https://api.foursquare.com/v2/venues/explore
    *
    * @param {*} options
    */
  explore(options) {
    const qs = Object.assign(this.version, this.config, options);
    return request((`${api.url}${api.venues.explore}`), 'GET', qs);
  }

  /**
    * https://api.foursquare.com/v2/venues/trending
    *
    * @param {*} options
    */
  trending(options) {
    const qs = Object.assign(this.version, this.config, options);
    return request((`${api.url}${api.venues.trending}`), 'GET', qs);
  }

  /**
    * https://api.foursquare.com/v2/venues/suggestcompletion
    *
    * @param {*} options
    */
  suggestcompletion(options) {
    const qs = Object.assign(this.version, this.config, options);
    return request((`${api.url}${api.venues.suggestcompletion}`), 'GET', qs);
  }

  /**
    * https://api.foursquare.com/v2/venues/categories
    *
    * @param {*} options
    */
  categories(options) {
    const qs = Object.assign(this.version, this.config, options);
    return request((`${api.url}${api.venues.categories}`), 'GET', qs);
  }

  /**
    * https://api.foursquare.com/v2/venues/VENUE_ID/select
    *
    * @param {*} venueId
    * @param {*} options
    */
  select(venueId, options) {
    const qs = Object.assign(this.version, this.config, options);
    return request((`${api.url}${api.venues.select}`).replace('VENUE_ID', venueId), 'GET', qs);
  }

  /**
    * https://api.foursquare.com/v2/venues/VENUE_ID/likes
    *
    * @param {*} venueId
    * @param {*} options
    */
  likes(venueId, options) {
    const qs = Object.assign(this.version, this.config, options);
    return request((`${api.url}${api.venues.likes}`).replace('VENUE_ID', venueId), 'GET', qs);
  }

  /**
    * https://api.foursquare.com/v2/venues/VENUE_ID/similar
    *
    * @param {*} venueId
    * @param {*} options
    */
  similar(venueId, options) {
    const qs = Object.assign(this.version, this.config, options);
    return request((`${api.url}${api.venues.similar}`).replace('VENUE_ID', venueId), 'GET', qs);
  }

  /**
    * https://api.foursquare.com/v2/venues/VENUE_ID/nextvenues
    *
    * @param {*} venueId
    * @param {*} options
    */
  nextvenues(venueId, options) {
    const qs = Object.assign(this.version, this.config, options);
    return request((`${api.url}${api.venues.nextvenues}`).replace('VENUE_ID', venueId), 'GET', qs);
  }

  /**
    * https://api.foursquare.com/v2/venues/VENUE_ID/listed
    *
    * @param {*} venueId
    * @param {*} options
    */
  listed(venueId, options) {
    const qs = Object.assign(this.version, this.config, options);
    return request((`${api.url}${api.venues.listed}`).replace('VENUE_ID', venueId), 'GET', qs);
  }

  /**
    * https://api.foursquare.com/v2/venues/VENUE_ID
    *
    * @param {*} venueId
    * @param {*} options
    */
  details(venueId, options) {
    const qs = Object.assign(this.version, this.config, options);
    return request((`${api.url}${api.venues.details}`).replace('VENUE_ID', venueId), 'GET', qs);
  }

  /**
    * https://api.foursquare.com/v2/venues/VENUE_ID/photos
    *
    * @param {*} venueId
    * @param {*} options
    */
  photos(venueId, options) {
    const qs = Object.assign(this.version, this.config, options);
    return request((`${api.url}${api.venues.photos}`).replace('VENUE_ID', venueId), 'GET', qs);
  }

  /**
    * https://api.foursquare.com/v2/venues/VENUE_ID/tips
    *
    * @param {*} venueId
    * @param {*} options
    */
  tips(venueId, options) {
    const qs = Object.assign(this.version, this.config, options);
    return request((`${api.url}${api.venues.tips}`).replace('VENUE_ID', venueId), 'GET', qs);
  }

  /**
    * https://api.foursquare.com/v2/venues/VENUE_ID/hours
    *
    * @param {*} venueId
    * @param {*} options
    */
  hours(venueId, options) {
    const qs = Object.assign(this.version, this.config, options);
    return request((`${api.url}${api.venues.hours}`).replace('VENUE_ID', venueId), 'GET', qs);
  }

  /**
    * https://api.foursquare.com/v2/venues/VENUE_ID/menu
    *
    * @param {*} venueId
    * @param {*} options
    */
  menu(venueId, options) {
    const qs = Object.assign(this.version, this.config, options);
    return request((`${api.url}${api.venues.menu}`).replace('VENUE_ID', venueId), 'GET', qs);
  }

  /**
    * https://api.foursquare.com/v2/venues/VENUE_ID/links
    *
    * @param {*} venueId
    * @param {*} options
    */
  links(venueId, options) {
    const qs = Object.assign(this.version, this.config, options);
    return request((`${api.url}${api.venues.links}`).replace('VENUE_ID', venueId), 'GET', qs);
  }

  /**
    * https://api.foursquare.com/v2/venues/VENUE_ID/events
    *
    * @param {*} venueId
    * @param {*} options
    */
  events(venueId, options) {
    const qs = Object.assign(this.version, this.config, options);
    return request((`${api.url}${api.venues.events}`).replace('VENUE_ID', venueId), 'GET', qs);
  }

  /**
    * https://api.foursquare.com/v2/venues/timeseries
    *
    * @param {*} options
    */
  timeseries(options) {
    const qs = Object.assign(this.version, this.config, options);
    return request((`${api.url}${api.venues.timeseries}`), 'GET', qs);
  }

  /**
    * https://api.foursquare.com/v2/venues/VENUE_ID/stats
    *
    * @param {*} venueId
    * @param {*} options
    */
  stats(options) {
    const qs = Object.assign(this.version, this.config, options);
    return request((`${api.url}${api.venues.stats}`), 'GET', qs);
  }

  /**
    * https://api.foursquare.com/v2/venues/managed
    *
    * @param {*} options
    */
  managed(options) {
    const qs = Object.assign(this.version, this.config, options);
    return request((`${api.url}${api.venues.managed}`), 'GET', qs);
  }

  /**
    * https://api.foursquare.com/v2/venues/add
    *
    * @param {*} options
    */
  add(options) {
    const qs = Object.assign(this.version, this.config, options);
    return request((`${api.url}${api.venues.add}`), 'POST', qs);
  }

  /**
    * https://api.foursquare.com/v2/venues/VENUE_ID/claim
    *
    * @param {*} venueId
    * @param {*} options
    */
  claim(venueId, options) {
    const qs = Object.assign(this.version, this.config, options);
    return request((`${api.url}${api.venues.claim}`).replace('VENUE_ID', venueId), 'POST', qs);
  }

  /**
    * https://api.foursquare.com/v2/venues/VENUE_ID/flag
    *
    * @param {*} venueId
    * @param {*} options
    */
  flag(venueId, options) {
    const qs = Object.assign(this.version, this.config, options);
    return request((`${api.url}${api.venues.flag}`).replace('VENUE_ID', venueId), 'POST', qs);
  }

  /**
    * https://api.foursquare.com/v2/venues/VENUE_ID/proposeedit
    *
    * @param {*} venueId
    * @param {*} options
    */
  proposeedit(venueId, options) {
    const qs = Object.assign(this.version, this.config, options);
    return request((`${api.url}${api.venues.proposeedit}`).replace('VENUE_ID', venueId), 'POST', qs);
  }

  /**
    * https://api.foursquare.com/v2/venues/VENUE_ID/like
    *
    * @param {*} venueId
    * @param {*} options
    */
  like(venueId, options) {
    const qs = Object.assign(this.version, this.config, options);
    return request((`${api.url}${api.venues.like}`).replace('VENUE_ID', venueId), 'GET', qs);
  }
}

module.exports = Venues;
