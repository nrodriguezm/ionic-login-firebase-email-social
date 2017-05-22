import { IonicPage, NavController } from 'ionic-angular';
import { Component } from '@angular/core';

import { AuthProvider } from '../../../providers/auth';

@IonicPage()
@Component({
  templateUrl: 'home.html',
  selector: 'auth-home',
})

export class AuthPage {
  error: any;

  constructor(private navCtrl: NavController, private auth: AuthProvider) {}

  ngOnInit() {

  }

  openSignUpPage() {
    this.navCtrl.push('SignUpPage');
  }

  openLoginPage() {
    this.navCtrl.push('LoginEmailPage');
  }

  openTermsOfService() {
    this.navCtrl.push('TermsOfServicePage');
  }
  
  loginUserWithFacebook() {
    this.auth.loginWithFacebook().subscribe(data => {
      this.navCtrl.setRoot('TabsPage');
    }, err => {
      this.error = err;
    });
  }

  loginUserWithGoogle() {
    this.auth.loginWithGoogle().subscribe(data => {
      this.navCtrl.setRoot('TabsPage');
    }, err => {
      this.error = err;
    });
  }
  
}
