# Fourplaces
Foursquare Places API wrapper for Node JS.

[Auth Docs](https://developer.foursquare.com/docs/api/configuration/authentication)
[Endpoints Docs](https://developer.foursquare.com/docs/api/endpoints)
[I18n](https://developer.foursquare.com/docs/api/configuration/internationalization)
[Versioning](https://developer.foursquare.com/docs/api/configuration/versioning)

### Installation
````
npm install fourplaces
````

### Examples
```javascript
const Fourplaces = require('fourplaces');

const fp = new Fourplaces({
    client_id: 'CLIENT_ID', //Required
    client_secret: 'CLIENT_SECRET', //Required
    redirect_uri: 'REDIRECT_URI', //Required for auth endpoints
    registered_redirect_uri: 'REGISTERED_REDIRECT_URI', //Required for auth endpoints
    locale: 'LOCALE', //Default 'en'
    version: 'VERSION' //Default '20180323'
});

fp.auth().authenticate().then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

fp.auth().access_token('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

fp.venues().explore({ 
    query: 'Café',
    near: "Pato Branco, PR"
}).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

fp.venues().search({
    query: 'Café',
    near: "Pato Branco, PR"
}).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

fp.venues().categories({
    name: 'Café'
}).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

fp.venues().suggestcompletion({
    query: 'Café',
    near: "Pato Branco, PR"
}).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

fp.venues().trending({
    near: "Pato Branco, PR"
}).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

fp.venues().likes('xxxxxxxxxxxxxxxxxxxxxxxx').then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

fp.venues().similar('xxxxxxxxxxxxxxxxxxxxxxxx').then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

fp.venues().nextvenues('xxxxxxxxxxxxxxxxxxxxxxxx').then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

fp.venues().listed('xxxxxxxxxxxxxxxxxxxxxxxx').then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

fp.venues().details('xxxxxxxxxxxxxxxxxxxxxxxx').then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

fp.venues().photos('xxxxxxxxxxxxxxxxxxxxxxxx').then((response) => {
    console.log(res.response.photos);
}).catch((error) => {
    console.log(error);
});

fp.venues().tips('xxxxxxxxxxxxxxxxxxxxxxxx').then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

fp.venues().hours('xxxxxxxxxxxxxxxxxxxxxxxx').then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

fp.venues().menu('xxxxxxxxxxxxxxxxxxxxxxxx').then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

fp.venues().links('xxxxxxxxxxxxxxxxxxxxxxxx').then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

fp.venues().events('xxxxxxxxxxxxxxxxxxxxxxxx').then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

fp.photos().details('xxxxxxxxxxxxxxxxxxxxxxxx').then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

fp.lists().details('0000000').then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});
```

### Built With
* [Node.js](https://nodejs.org/en/)

### Authors
* **Giovani de Oliveira** - [xxgicoxx](https://github.com/xxgicoxx)