import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PaisProvider } from '../../providers/pais/pais';

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
  public pais;
  public lista_pais = new Array<any>();
  constructor(public navCtrl: NavController, public navParams: NavParams, private PaisProvider: PaisProvider) {
    this.pais = this.navParams.get("paisNome");
    console.log(this.pais);

    

    this.PaisProvider.getSinglePais(this.pais).subscribe(
      data => {
        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);
        this.lista_pais = objeto_retorno;
        console.log(this.lista_pais);
        console.log(objeto_retorno);
        
      }, error => {
        console.log(error);
      }
    )

    

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DescricaoPage');
    console.log(this.pais);
    
  }

}
