import { Component, ViewChild} from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  isAppInitialized: boolean = false;

  rootPage: any = 'AuthPage';
  
  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,
    protected afAuth: AngularFireAuth) {  

    afAuth.authState.subscribe( user => {
      console.log('En comp: ', user);
      if (!user) { 
        this.rootPage = 'AuthPage';        
      } else {
        this.rootPage = 'TabsPage';        
      }
    });    

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

  }

}
