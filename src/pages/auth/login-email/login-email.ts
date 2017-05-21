import { IonicPage, NavController, LoadingController } from 'ionic-angular';
import { Component } from '@angular/core';

import { AuthProvider } from '../../../providers/auth';

@IonicPage()
@Component({
  templateUrl: 'login-email.html',
  selector: 'login-email',
})

export class LoginEmailPage {
  error: any;
  form: any;

  constructor(private navCtrl: NavController, private auth: AuthProvider,
    private loadingCtrl: LoadingController
  ) {
    this.form = {
      email: '',
      password: ''
    }
  }

  openForgotPasswordPage(): void {
    this.navCtrl.push('ForgotPasswordPage');
  }

  openSignUpPage(): void {
    this.navCtrl.push('SignUpPage');
  }

  login() {
    let loading = this.loadingCtrl.create({
      content: 'Por favor espera...'
    });
    loading.present();

    this.auth.loginWithEmail(this.form).subscribe(data => {
      setTimeout(() => {
        loading.dismiss();
        this.navCtrl.setRoot('TabsPage');
        // The auth subscribe method inside the app.ts will handle the page switch to home
      }, 1000);
    }, err => {
      setTimeout(() => {
        loading.dismiss();
        if (err.code == "auth/invalid-email") {
          this.error = "Ingresa un email válido.";
        } else if (err.code == "auth/weak-password") {
          this.error = "La contraseña debe tener al menos 6 caracteres.";
        } else if (err.code == "auth/email-already-in-use") {
          this.error = "Ya existe un usuario con la direccion de correo.";          
        } else {
          this.error = err;
        }
      }, 1000);
    });
  }
}
