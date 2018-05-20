import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DescricaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-descricao',
  templateUrl: 'descricao.html',
})
export class DescricaoPage {
  public Pais;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.Pais = this.navParams.get("paisNome");
    console.log(this.Pais);

    

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DescricaoPage');
    
  }

}
