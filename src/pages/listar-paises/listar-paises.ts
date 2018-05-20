import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ListarPaisesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listar-paises',
  templateUrl: 'listar-paises.html',
})
export class ListarPaisesPage {
  public Countries;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.Countries = this.navParams.get("Countries");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListarPaisesPage');
  }

}
