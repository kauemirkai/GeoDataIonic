import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListarPaisesPage } from '../listar-paises/listar-paises';
import { Pais } from '../../model/pais';
import { Continente } from '../../model/continente';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    console.log("Countries");

  }
  public Continente : Continente[];

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


