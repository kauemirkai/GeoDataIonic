import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListarPaisesPage } from '../listar-paises/listar-paises';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    console.log("Countries");

  }

  optionsFn(Countries) { 
    console.log("Countries", Countries);
    console.log("Countries", Countries);
    console.log("Countries", Countries);
    console.log("Countries", Countries);
    console.log("Countries", Countries);
    console.log("Countries", Countries);
    console.log("Countries", Countries);
    console.log("Countries", Countries);
    console.log("Countries", Countries);
    console.log("Countries", Countries);
    console.log("Countries", Countries);
    this.navCtrl.push(ListarPaisesPage, {Countries: Countries});

}
}


