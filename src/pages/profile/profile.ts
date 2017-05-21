import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth';
import { AuthProvider } from './../../providers/auth';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  userId: any;
  userEmail: any;
  userName: any;

  constructor(public af: AngularFireAuth, public auth: AuthProvider) {

    this.auth.getUserData().subscribe(data => {
      this.userId = data.uid;
      this.userEmail = data.email;
      this.userName = data.displayName;
    });
    //console.log(user);
  }

  logout() {
    // Login Code here
    this.af.auth.signOut();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
