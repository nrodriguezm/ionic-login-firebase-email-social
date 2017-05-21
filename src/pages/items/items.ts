import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-items',
  templateUrl: 'items.html'
})
export class ItemsPage {

  constructor() {

  } 

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemsPage');
  }

}
