# ionic-login-firebase-email-social
Ejemplo de aplicacion Ionic 3 con login con Email, Facebook, Google+, utilizando Firebase como backend y plugins de Cordova.

npm install -g cordova
npm install -g ionic
ionic start ionic-login-firebase blank
cd ionic-login-firebase
npm install angularfire2 firebase --save

Crear proyecto en consola Firebase, obtener credencales para aplicacion web:

export const firebaseConfig = {
  apiKey: "xxxxxxxxxx",
  authDomain: "your-domain-name.firebaseapp.com",
  databaseURL: "https://your-domain-name.firebaseio.com",
  storageBucket: "your-domain-name.appspot.com",
  messagingSenderId: '<your-messaging-sender-id>'
};

TODO: Agregar Login G+

# Requiere:

ionic info

global packages:

    @ionic/cli-utils : 1.1.2
    Cordova CLI      : 7.0.0
    Ionic CLI        : 3.1.2

local packages:

    @ionic/app-scripts              : 1.3.7
    @ionic/cli-plugin-cordova       : 1.1.2
    @ionic/cli-plugin-ionic-angular : 1.1.2
    Ionic Framework                 : ionic-angular 3.2.1
    
# package.json

  "dependencies": {
    "@angular/common": "4.1.0",
    "@angular/compiler": "4.1.0",
    "@angular/compiler-cli": "4.1.0",
    "@angular/core": "4.1.0",
    "@angular/forms": "4.1.0",
    "@angular/http": "4.1.0",
    "@angular/platform-browser": "4.1.0",
    "@angular/platform-browser-dynamic": "4.1.0",
    "@ionic-native/core": "^3.6.1",
    "@ionic-native/facebook": "^3.10.0",
    "@ionic-native/geolocation": "^3.6.1",
    "@ionic-native/keyboard": "^3.6.1",
    "@ionic-native/network": "^3.6.1",
    "@ionic-native/splash-screen": "^3.6.1",
    "@ionic-native/status-bar": "^3.6.1",
    "angularfire2": "^4.0.0-rc.0",
    "cordova-android": "^6.2.3",
    "cordova-plugin-console": "^1.0.5",
    "cordova-plugin-device": "^1.1.4",
    "cordova-plugin-facebook4": "^1.9.0",
    "cordova-plugin-splashscreen": "^4.0.3",
    "cordova-plugin-statusbar": "^2.2.2",
    "cordova-plugin-whitelist": "^1.3.1",
    "firebase": "^3.9.0",
    "ionic-angular": "3.2.1",
    "ionic-plugin-keyboard": "^2.2.1",
    "ionicons": "3.0.0",
    "rxjs": "5.1.1",
    "sw-toolbox": "3.6.0",
    "zone.js": "0.8.10"
  },
  "devDependencies": {
    "@ionic/app-scripts": "1.3.7",
    "@ionic/cli-plugin-cordova": "1.1.2",
    "@ionic/cli-plugin-ionic-angular": "1.1.2",
    "typescript": "~2.2.1"
  },
