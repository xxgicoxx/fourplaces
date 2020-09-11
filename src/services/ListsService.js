const request = require('request-promise-native');

const { apiConfig } = require('../configs');

class ListsService {
  constructor(config) {
    this._config = config;
  }

  /**
    * /lists/LIST_ID
    *
    * @see https://developer.foursquare.com/docs/api/lists/details
    * @param {!string} listId
    * @param {Object} options request params
    * @returns {Promise} return Promise
    */
  async details(listId, options) {
    try {
      const qs = { ...this._config, ...options };

      const details = await request({
        url: (`${apiConfig.url}${apiConfig.lists.details}`).replace('LIST_ID', listId), method: 'GET', json: true, qs,
      });

      return details;
    } catch (ex) {
      throw new Error(ex);
    }
  }

  /**
    * /lists/add
    *
    * @see https://developer.foursquare.com/docs/api/lists/add
    * @param {Object} options request params
    * @returns {Promise} return Promise
    */
  async add(options = {}) {
    try {
      const qs = { ...this._config, ...options };

      const add = await request({
        url: (`${apiConfig.url}${apiConfig.lists.add}`), method: 'POST', json: true, qs,
      });

      return add;
    } catch (ex) {
      throw new Error(ex);
    }
  }

  /**
    * /lists/LIST_ID/additem
    *
    * @see https://developer.foursquare.com/docs/api/lists/additem
    * @param {!string} listId
    * @param {Object} options request params
    * @returns {Promise} return Promise
    */
  async additem(listId, options) {
    try {
      const qs = { ...this._config, ...options };

      const additem = await request({
        url: (`${apiConfig.url}${apiConfig.lists.additem}`).replace('LIST_ID', listId), method: 'POST', json: true, qs,
      });

      return additem;
    } catch (ex) {
      throw new Error(ex);
    }
  }

  /**
    * /lists/LIST_ID/share
    *
    * @see https://developer.foursquare.com/docs/api/lists/share
    * @param {!string} listId
    * @param {Object} options request params
    * @returns {Promise} return Promise
    */
  async share(listId, options) {
    try {
      const qs = { ...this._config, ...options };

      const share = await request({
        url: (`${apiConfig.url}${apiConfig.lists.share}`).replace('LIST_ID', listId), method: 'POST', json: true, qs,
      });

      return share;
    } catch (ex) {
      throw new Error(ex);
    }
  }
}

module.exports = ListsService;
