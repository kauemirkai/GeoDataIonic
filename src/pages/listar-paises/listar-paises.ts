import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Pais } from '../../model/pais';

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

  var l1 = {nome: 'Pais teste',
      fullName: 'Pais teste',
      code:'Pais teste',
      listCodes:'Pais teste',
      currency:'Pais teste',
      language:'Pais teste',
      capital:'Pais teste',
      calling:'Pais teste',
      region:'Pais teste',
      regionalBlock:'Pais teste'};

      var l2 = {nome: 'Pais teste',
      fullName: 'Pais teste',
      code:'Pais teste',
      listCodes:'Pais teste',
      currency:'Pais teste',
      language:'Pais teste',
      capital:'Pais teste',
      calling:'Pais teste',
      region:'Pais teste',
      regionalBlock:'Pais teste'};


      var l3 = {nome: 'Pais teste',
      fullName: 'Pais teste',
      code:'Pais teste',
      listCodes:'Pais teste',
      currency:'Pais teste',
      language:'Pais teste',
      capital:'Pais teste',
      calling:'Pais teste',
      region:'Pais teste',
      regionalBlock:'Pais teste'};


      var l4 = {nome: 'Pais teste',
      fullName: 'Pais teste',
      code:'Pais teste',
      listCodes:'Pais teste',
      currency:'Pais teste',
      language:'Pais teste',
      capital:'Pais teste',
      calling:'Pais teste',
      region:'Pais teste',
      regionalBlock:'Pais teste'};


      var l5 = {nome: 'Pais teste',
      fullName: 'Pais teste',
      code:'Pais teste',
      listCodes:'Pais teste',
      currency:'Pais teste',
      language:'Pais teste',
      capital:'Pais teste',
      calling:'Pais teste',
      region:'Pais teste',
      regionalBlock:'Pais teste'};
   
    this.Paises = [l1, l2, l3, l4, l5];
  
  
  }
  
  public Paises : Pais[];
  
  ionViewDidLoad() {
    
  }

}
