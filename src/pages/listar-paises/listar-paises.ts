import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Pais } from '../../model/pais';
import { DescricaoPage } from '../descricao/descricao';
import { PaisProvider } from '../../providers/pais/pais';
import { PaisDbProvider } from '../../providers/pais-db/pais-db';


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
    PaisProvider,
    PaisDbProvider
  ]
})
export class ListarPaisesPage {

  public paises = new Array<any>();
  public Continente: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private paisProvider: PaisProvider, private paisDbProvider: PaisDbProvider) {

    this.Continente = navParams.get("Continente");

  }



  ionViewDidLoad() {


    // Um século procurando depois..
    if (navigator.onLine) {
      console.log("TestJson.");
      // Se tem internet, busca REST
      this.paisProvider.getContinente(this.Continente).subscribe(
        data => {
          const response = (data as any);
          this.paises = JSON.parse(response._body);
        }, error => {
          console.log(error);
        }
      );
      // E insere no SQLite os países buscados
      this.paisDbProvider.inserirPaises(this.paises);
    } else {
      console.log("SQLITE");
      // Busca no SQLite
      this.paisDbProvider.listarPaises().then((paises: Pais[]) => {
        this.paises = paises;
      });
    }
    





  }


  listarDetalhes(paisNome) {
    console.log("Passou por aqui! listarDetalhes");
    this.navCtrl.push(DescricaoPage, { paisNome: paisNome });


  }

}
