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

  optionsFn(Continente) { 
    console.log("Countries", Continente);
    console.log("Countries", Continente);
    console.log("Countries", Continente);
    console.log("Countries", Continente);
    console.log("Countries", Continente);
    console.log("Countries", Continente);
    console.log("Countries", Continente);
    console.log("Countries", Continente);
    console.log("Countries", Continente);
    console.log("Countries", Continente);
    console.log("Countries", Continente);

    
    this.navCtrl.push(ListarPaisesPage, {Continente: Continente});

}
}


