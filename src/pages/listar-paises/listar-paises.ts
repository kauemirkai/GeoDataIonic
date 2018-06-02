import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Pais } from '../../model/pais';
import { DescricaoPage } from '../descricao/descricao';
import { PaisProvider } from '../../providers/pais/pais';
import { PaisDbProvider } from '../../providers/pais-db/pais-db';
import { DatabaseProvider } from '../../providers/database/database';


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
  providers: [
    PaisProvider
  ]
})
export class ListarPaisesPage {
  PaisDbProvider: any;
  public Pais;
  public Continente;
  public lista_paises = new Array<any>();
  public test:Pais;

  constructor(public navCtrl: NavController, public navParams: NavParams, private PaisProvider: PaisProvider,private dbProvider:DatabaseProvider) {
    this.Continente = this.navParams.get("Continente");
  }


  

  ionViewDidLoad() {
    

   this.PaisProvider.getContinente(this.Continente).subscribe(
    

      data => {
        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);
        this.lista_paises = objeto_retorno;
        console.log(this.lista_paises);
        console.log(objeto_retorno);
        
      }, error => {
        console.log(error);
        
      }
    )
    



  }

  carregarSqlite(){
    this.PaisDbProvider.inserir(this.test);
    this.PaisDbProvider.listar();

  }

  listarDetalhes(paisNome) {
    console.log("Passou por aqui! listarDetalhes");
    this.navCtrl.push(DescricaoPage, { paisNome: paisNome });


  }

}
