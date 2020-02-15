# Fourplaces
Foursquare Places API wrapper for Node JS.

<p align="center">
  <img src="https://i.imgur.com/18CztaR.png">
</p>

[Documentation](https://developer.foursquare.com/docs/api/endpoints)

[Authentication](https://developer.foursquare.com/docs/api/configuration/authentication)

[Internationalization](https://developer.foursquare.com/docs/api/configuration/internationalization)

[Versioning](https://developer.foursquare.com/docs/api/configuration/versioning)

### Installation
````
npm install fourplaces
````

### Examples
```javascript
const Fourplaces = require('fourplaces');

const fourplaces = new Fourplaces({
    client_id: 'CLIENT_ID',
    client_secret: 'CLIENT_SECRET',
    redirect_uri: 'REDIRECT_URI',
    registered_redirect_uri: 'REGISTERED_REDIRECT_URI',
    locale: 'LOCALE',
    version: 'VERSION'
});

fp.venues().explore({
  query: 'Café',
  near: 'Pato Branco, PR',
}).then((response) => {
  console.log(response);
}).catch((error) => {
  console.error(error);
});
```

### Response example
```json
{
  "meta": { 
    "code": 200, 
    "requestId": "5e46a32971c428001b1bc663" 
  },
  "response": {
    "suggestedFilters": { 
      "header": "Tap to show:", 
      "filters": [Array] 
    },
    "geocode": {
      "what": "",
      "where": "pato branco pr",
      "center": [Object],
      "displayString": "Pato Branco, PR, Brazil",
      "cc": "BR",
      "geometry": [Object],
      "slug": "pato-branco-estado-do-parana-brazil",
      "longId": "72057594041382754"
    },
    "headerLocation": "Pato Branco",
    "headerFullLocation": "Pato Branco",
    "headerLocationGranularity": "city",
    "query": "cafe",
    "totalResults": "39",
    "suggestedBounds": { 
      "ne": [Object], 
      "sw": [Object] 
    },
    "groups": [ 
      [Object] 
    ]
  }
}
````

### Built With
* [Node.js](https://nodejs.org/en/)

### Authors
* **Giovani de Oliveira** - [xxgicoxx](https://github.com/xxgicoxx)

### Acknowledgments
* [FlatIcon](https://www.flaticon.com/) - Icon