import { IonicPage, LoadingController } from 'ionic-angular';
import { Component } from '@angular/core';

// Providers
import { AuthProvider } from '../../../providers/auth';

@IonicPage()
@Component({
  templateUrl: 'forgot-password.html',
  selector: 'forgot-password',
})

export class ForgotPasswordPage {
  error: any;
  form: any;

  constructor(private loadingCtrl: LoadingController, private auth: AuthProvider) {
    this.form = {
      email: ''
    }
  }

  reset() {
    let loading = this.loadingCtrl.create({
      content: 'Por favor espera...'
    });
    loading.present();

    this.auth.sendPasswordResetEmail(this.form.email).subscribe(data => {
      this.error = 'Verifica tu correo para reestablecer tu contraseña.';
      loading.dismiss();
    }, error => {
      console.log(error);
      if (error.code == "auth/invalid-email") {
        this.error = "Ingresa un email válido.";
      } else if (error.code == "auth/weak-password") {
        this.error = "La contraseña debe tener al menos 6 caracteres.";
      } else if (error.code == "auth/email-already-in-use") {
        this.error = "Ya existe un usuario con la direccion de correo.";          
      } else {
        this.error = error;
      }
      loading.dismiss();
    })
  }
}
