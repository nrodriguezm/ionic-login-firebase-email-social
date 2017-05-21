import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Facebook } from '@ionic-native/facebook';
import firebase from 'firebase';

// Providers
import {DataProvider} from './data';

@Injectable()
export class AuthProvider {
  user: any;
  constructor(private af: AngularFireAuth, private afDatabase: AngularFireDatabase, private data: DataProvider, private platform: Platform, private Facebook: Facebook) {

  }

  getUserData() {
    return Observable.create(observer => {
      this.af.authState.subscribe(authData => {
        if (authData) {
          console.log(authData);
          this.user = authData;
          observer.next(authData);
          /*this.data.object('users/' + authData.uid).subscribe(userData => {
            console.log(userData);
            this.user = userData;
            observer.next(userData);
          });*/
        } else {
          observer.error();
        }
      });
    });
  }

  registerUser(credentials: any) {
    return Observable.create(observer => {
      this.af.auth.createUserWithEmailAndPassword(credentials.email, credentials.password).then((authData: any) => {
        this.afDatabase.list('users').update(authData.uid, {
          name: authData.auth.email,
          email: authData.auth.email,
          emailVerified: false,
          provider: 'email',
          image: 'https://freeiconshop.com/files/edd/person-solid.png'
        });
        credentials.created = true;
        observer.next(credentials);
      }).catch((error: any) => {
        if (error) {
          switch (error.code) {
            case 'INVALID_EMAIL':
              observer.error('E-mail inválido.');
              break;
            case 'EMAIL_TAKEN':
              observer.error('Este e-mail já está sendo utilizado.');
              break;
            case 'NETWORK_ERROR':
              observer.error('Aconteceu algum erro ao tentar se conectar ao servidor, tente novamente mais tarde.');
              break;
            default:
              observer.error(error);
          }
        }
      });
    });
  }

  loginWithEmail(credentials) {
    return Observable.create(observer => {
      this.af.auth.signInWithEmailAndPassword(credentials.email, credentials.password).then((authData) => {
        observer.next(authData);
      }).catch((error) => {
        observer.error(error);
      });
    });
  }
  
  loginWithFacebook() {
    return Observable.create(observer => {
      if (this.platform.is('cordova')) {
        this.Facebook.login(['public_profile', 'email']).then(facebookData => {
          let provider = firebase.auth.FacebookAuthProvider.credential(facebookData.authResponse.accessToken);
          firebase.auth().signInWithCredential(provider).then(firebaseData => {
            this.afDatabase.list('users').update(firebaseData.uid, {
              name: firebaseData.displayName,
              email: firebaseData.email,
              provider: 'facebook',
              image: firebaseData.photoURL
            });
            observer.next();
          });
        }, error => {
          observer.error(error);
        });
      } else {
        this.af.auth
          .signInWithPopup(new firebase.auth.FacebookAuthProvider()).then(
            res => console.log(res)          
          ).catch((error) => {
            console.info("error", error);
            observer.error(error);
          });
      }
    });
  }
  

  sendPasswordResetEmail(email) {
    return Observable.create(observer => {
      firebase.auth().sendPasswordResetEmail(email).then(function() {
        observer.next();
        // Email sent.
      }, function(error) {
        observer.error(error);
        // An error happened.
      });
    });
  }

  logout() {
    this.af.auth.signOut();
  }
}
