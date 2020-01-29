const api = require('../configs/api');
const request = require('../helpers/request');

class Lists {
  constructor(config) {
    this.version = { v: api.version };
    this.config = config;
  }

  /**
    * https://api.foursquare.com/v2/lists/LIST_ID
    *
    * @param {*} listId
    * @param {*} options
    */
  details(listId, options) {
    const qs = Object.assign(this.version, this.config, options);
    return request((`${api.url}${api.lists.details}`).replace('LIST_ID', listId), 'GET', qs);
  }

  /**
    * https://api.foursquare.com/v2/lists/add
    *
    * @param {*} options
    */
  add(options) {
    const qs = Object.assign(this.version, this.config, options);
    return request((`${api.url}${api.lists.add}`), 'POST', qs);
  }

  /**
    * https://api.foursquare.com/v2/lists/LIST_ID/additem
    *
    * @param {*} listId
    * @param {*} options
    */
  additem(listId, options) {
    const qs = Object.assign(this.version, this.config, options);
    return request((`${api.url}${api.lists.additem}`).replace('LIST_ID', listId), 'POST', qs);
  }

  /**
    * https://api.foursquare.com/v2/lists/LIST_ID/share
    *
    * @param {*} listId
    * @param {*} options
    */
  share(listId, options) {
    const qs = Object.assign(this.version, this.config, options);
    return request((`${api.url}${api.lists.share}`).replace('LIST_ID', listId), 'POST', qs);
  }
}

module.exports = Lists;
