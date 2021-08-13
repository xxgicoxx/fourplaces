# Fourplaces
Foursquare Places API wrapper for Node.js.

<p align="center">
  <img src="https://i.imgur.com/18CztaR.png">
</p>

# Docs
[Documentation](https://developer.foursquare.com/docs/places-api/endpoints)

[Authentication](https://developer.foursquare.com/docs/places-api/authentication)

[Internationalization](https://developer.foursquare.com/docs/places-api/internationalization)

[Versioning](https://developer.foursquare.com/docs/places-api/versioning)

# Prerequisites
* [Node.js](https://nodejs.org/en/)

# Installation
````
npm install fourplaces
````

# Credentials
### 1. Foursquare
````
# Account
Create an Foursquare account on https://foursquare.com/developers/signup.

# Create App
Create A New Foursquare App on https://pt.foursquare.com/developers/apps.

# Client ID and Secret
Obtain an Client ID and Secret on https://pt.foursquare.com/developers/apps.
````

# Examples
```javascript
const Fourplaces = require('fourplaces');

const fourplaces = new Fourplaces({
    client_id: 'CLIENT_ID',
    client_secret: 'CLIENT_SECRET',
    redirect_uri: 'REDIRECT_URI',
    locale: 'LOCALE',
    version: 'VERSION'
});

(async () => {
  try {
    const venues = await fourplaces.venues().explore({
      query: 'Café',
      near: 'Pato Branco, PR',
    });

    console.log(venues);
  } catch (error) {
    console.error(error);
  }
})();
```

# Built With
* [Node.js](https://nodejs.org/en/)

# Authors
* [xxgicoxx](https://github.com/xxgicoxx)

# Acknowledgments
* [FlatIcon](https://www.flaticon.com/)