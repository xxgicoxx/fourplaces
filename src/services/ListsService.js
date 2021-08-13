const { request } = require('../utils');

const { apiConfig } = require('../configs');

class ListsService {
  constructor(config) {
    this._config = config;
  }

  /**
   * /lists/LIST_ID
   *
   * @see https://developer.foursquare.com/docs/api-reference/lists/details
   * @param {string} listId List ID
   * @param {Object} options Request params
   * @returns {Promise} Promise
   */
  async details(listId, options) {
    try {
      const qs = Object.assign(this._config, options);

      const details = await request({
        url: (`${apiConfig.url}${apiConfig.lists.details}`).replace('LIST_ID', listId), qs,
      });

      return details;
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * /lists/add
   *
   * @see https://developer.foursquare.com/docs/api-reference/lists/add
   * @param {Object} options Request params
   * @returns {Promise} Promise
   */
  async add(options) {
    try {
      const qs = Object.assign(this._config, options);

      const add = await request({
        url: (`${apiConfig.url}${apiConfig.lists.add}`), method: 'POST', qs,
      });

      return add;
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * /lists/LIST_ID/additem
   *
   * @see https://developer.foursquare.com/docs/api-reference/lists/additem
   * @param {string} listId List ID
   * @param {Object} options Request params
   * @returns {Promise} Promise
   */
  async additem(listId, options) {
    try {
      const qs = Object.assign(this._config, options);

      const additem = await request({
        url: (`${apiConfig.url}${apiConfig.lists.additem}`).replace('LIST_ID', listId), method: 'POST', qs,
      });

      return additem;
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * /lists/LIST_ID/share
   *
   * @see https://developer.foursquare.com/docs/api-reference/lists/share
   * @param {string} listId List ID
   * @param {Object} options Request params
   * @returns {Promise} Promise
   */
  async share(listId, options) {
    try {
      const qs = Object.assign(this._config, options);

      const share = await request({
        url: (`${apiConfig.url}${apiConfig.lists.share}`).replace('LIST_ID', listId), method: 'POST', qs,
      });

      return share;
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = ListsService;
