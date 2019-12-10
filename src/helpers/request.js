const request = require('request');

/**
 * @param {*} url 
 * @param {*} method 
 * @param {*} qs 
 */
req = (url, method, qs) => {
    return new Promise((resolve, reject) => {
        request({
            url: url,
            method: method,
            json: true,
            qs: qs
        }, function(err, res, body) {
            if (err) {
                reject(err);
            } else {
                resolve(body);
            }
        });
    });
}

module.exports = req;