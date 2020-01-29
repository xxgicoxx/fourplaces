const request = require('request-promise-native');

/**
 * @param {*} url
 * @param {*} method
 * @param {*} qs
 */
function req(url, method, qs) {
  return request({
    url, method, json: true, qs,
  });
}

module.exports = req;
