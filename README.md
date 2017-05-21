# ionic-login-firebase-email-social
Ejemplo de aplicacion Ionic 3 con login con Email, Facebook, Google+, utilizando Firebase como backend y plugins de Cordova.

Agradecimientos a: https://github.com/angular https://github.com/rodrigoreal/ https://github.com/javebratt/

Si se utiliza un proyecto previamente creado verificar que se este usando CLI 3.

Utiliza
* Ionic 3
* AngularFire2 4.0
* Lazy Loading

TODO
- [x] Email
- [x] Facebook
- [ ] Google+ 
- [ ] Twitter


## Instalacion
1. cli> npm install -g cordova
2. cli> npm install -g ionic@latest
3. cli> ionic start ionic-login-firebase blank
4. cli> cd ionic-login-firebase
5. cli> copiar contenidos de este repositorio, sustituyendo carpeta src y archivo package.json
6. cli> npm install
7. Crear proyecto en consola Firebase, obtener credencales para aplicacion web y sustituir en app.module.ts

> export const firebaseConfig = {  
>  apiKey: "xxxxxxxxxx",  
>  authDomain: "your-domain-name.firebaseapp.com",  
>  databaseURL: "https://your-domain-name.firebaseio.com",  
>  storageBucket: "your-domain-name.appspot.com",  
>  messagingSenderId: '<your-messaging-sender-id>'  
> };  
8. Configurar en consola de firebase tipo de autenticacion, activar Facebook e Email. Necesitamos para metodo Facebook el ID y secreto de la app que obtendremos en los siguientes pasos.
9. Crear app en Facebook: https://developers.facebook.com/apps
10. Activar servicio de Inicio de Sesion para la app en Facebook, en ir a Agregar Producto.
11. Activar las tres opciones de OAuth. Pegar URL de Firebase para callback de login en campo de URL de redireccionamiento y Guardar Cambios. Esta URL la obtenemos desde la consola de Firebase al editar el metodo Facebook.
12. Copiamos desde el Panel de App de Facebook el ID (Identificados de la aplicacion, APP_ID) y Clave secreta, pegamos ambos valores en consola de Firebase y guardamos. En el siguiente paso ingresaremos el mismo ID y el nombre de la App (NO es el secreto de la App de Facebook) que aparece en el Panel de inicio.
13. cli> cordova plugin add cordova-plugin-facebook4 --variable APP_ID="123456789" --variable APP_NAME="myApplication" --save
14. Obtener ID y alias de la app
15. cli> ionic serve
16. Profit!

Con esto podemos probar la app desde nuestro navegador en forma local, para poder publicar la app debemos agregar en la Configuracion de la App en Facebook la plataforma Android en Configuracion y luego agregar el nombre de la App con la que publicamos en Android (identificador definido en config.xml en Ionic) y el hash de la clave con la cual firmamos el release de la app para poder subir a Play Store. Para terminar debemos publicar la app en el panel de Facebook ya que por defecto viene en modo desarrollo.

## Requiere

Ejecutar para verificar el siguiente comando en CLI. En caso de no contar con CLI 3 instalar y actualizar luego al correr ionic info.

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
    
## package.json

Utilizar el que viene en el repo:

>  "dependencies": {  
>    "@angular/common": "4.1.0",  
>    "@angular/compiler": "4.1.0",  
>    "@angular/compiler-cli": "4.1.0",  
>    "@angular/core": "4.1.0",  
>    "@angular/forms": "4.1.0",  
>    "@angular/http": "4.1.0",  
>    "@angular/platform-browser": "4.1.0",  
>    "@angular/platform-browser-dynamic": "4.1.0",  
>    "@ionic-native/core": "^3.6.1",  
>    "@ionic-native/facebook": "^3.10.0", 
>    "@ionic-native/geolocation": "^3.6.1",  
>    "@ionic-native/keyboard": "^3.6.1",  
>    "@ionic-native/network": "^3.6.1",  
>    "@ionic-native/splash-screen": "^3.6.1",  
>    "@ionic-native/status-bar": "^3.6.1",  
>    "angularfire2": "^4.0.0-rc.0",  
>    "cordova-android": "^6.2.3",  
>    "cordova-plugin-console": "^1.0.5",  
>    "cordova-plugin-device": "^1.1.4",  
>    "cordova-plugin-facebook4": "^1.9.0",  
>    "cordova-plugin-splashscreen": "^4.0.3",  
>    "cordova-plugin-statusbar": "^2.2.2",  
>    "cordova-plugin-whitelist": "^1.3.1",  
>    "firebase": "^3.9.0",  
>    "ionic-angular": "3.2.1",  
>    "ionic-plugin-keyboard": "^2.2.1",  
>    "ionicons": "3.0.0",  
>    "rxjs": "5.1.1",  
>    "sw-toolbox": "3.6.0",  
>    "zone.js": "0.8.10"  
>  },  
>  "devDependencies": {  
>   "@ionic/app-scripts": "1.3.7",  
>   "@ionic/cli-plugin-cordova": "1.1.2",  
>    "@ionic/cli-plugin-ionic-angular": "1.1.2",  
>    "typescript": "~2.2.1"  
>  },  
