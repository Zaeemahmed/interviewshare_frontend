# dashport-ui

## Project setup

```
npm install

npm start  # start dev server
npm run build  # build prod version
```

The development server uses HTTPS with a self signed certificate.
This is needed to use OAuth.
Chrome rejects the certificate by default and needs to be configured to accept it.
To do this, go to `chrome://flags/#allow-insecure-localhost`, enable `Allow invalid certificates for resources loaded from localhost.` and relaunch Chrome.


### Compiles and hot-reloads for development

```
npm start
```

### Run your tests

```
npm run test
```

### Lints and fixes files

```
npm run lint
```

### (Unfinished) Compiles and minifies for production

```
npm build
```

### Other Notes

`REACT_APP_STAGE` should be set to `production` when building.
