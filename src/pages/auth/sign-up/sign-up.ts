import { IonicPage, NavController, LoadingController } from 'ionic-angular';
import { Component } from '@angular/core';

import { AuthProvider } from '../../../providers/auth';

@IonicPage()
@Component({
  templateUrl: 'sign-up.html',
  selector: 'sign-up',
})

export class SignUpPage {
  error: any;
  form: any;

  constructor(private navCtrl: NavController,
    private auth: AuthProvider,
    private loadingCtrl: LoadingController,
  ) {
    this.form = {
      email: '',
      password: ''
    }
  }

  openForgotPasswordPage(): void {
    this.navCtrl.push('ForgotPasswordPage');
  }

  openLoginPage(): void {
    this.navCtrl.push('LoginEmailPage');
  }

  register() {
    let loading = this.loadingCtrl.create({
      content: 'Por favor espera...'
    });
    loading.present();

    this.auth.registerUser(this.form).subscribe(registerData => {
      this.auth.loginWithEmail(registerData).subscribe(loginData => {
        setTimeout(() => {
          loading.dismiss();
          this.navCtrl.setRoot('TabsPage');
        }, 1000);
      }, loginError => {
        setTimeout(() => {
          loading.dismiss();
          this.error = loginError;
        }, 1000);
      });
    }, registerError => {
      setTimeout(() => {
        loading.dismiss();
        if (registerError.code == "auth/invalid-email") {
          this.error = "Ingresa un email válido.";
        } else if (registerError.code == "auth/weak-password") {
          this.error = "La contraseña debe tener al menos 6 caracteres.";
        } else if (registerError.code == "auth/email-already-in-use") {
          this.error = "Ya existe un usuario con la direccion de correo.";          
        } else {
          this.error = registerError;
        }
        
      }, 1000);
    });
  }
}
