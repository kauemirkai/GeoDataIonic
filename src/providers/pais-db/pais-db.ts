import { DatabaseProvider } from '../database/database';
import { Pais } from '../../model/pais';
import { constructor } from 'localforage';
import { SQLiteObject } from '@ionic-native/sqlite';

/*
  Generated class for the PaisDbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

export class PaisDbProvider {


  constructor(private dbProvider: DatabaseProvider) {
    console.log('Hello PaisDbProvider Provider');
  }


  

  public inserir(pais: Pais) {




    


    return this.dbProvider.openDatabase().
      then((db: SQLiteObject) => {
        let sql = "INSERT	INTO	paises	(name,	capital,	callingCodes, timezones, region, subregion, population)	VALUES	(?,	?, ?, ?, ?, ?, ?)";
        let parametros = [pais.name, pais.capital, pais.callingCodes, pais.timezones, pais.region, pais.subregion, pais.population];
        return db.executeSql(sql, parametros).
          catch((e) => {
            console.log(e);
          });
      }).catch((e) => {
        console.log(e);
      });
  }

  public listar() {
    //abre	a	base
    return this.dbProvider.openDatabase().
      then((db: SQLiteObject) => {
        //faz	o	select
        let sql = "SELECT	*	FROM	paises";
        return db.executeSql(sql, []).
          then((data: any) => {
            //se	tiver	alguma	linha	na	tabela
            if (data.rows.length > 0) {
              let paises: Pais[] = [];
              //pega	cada	linha	e	coloca	num	vetor
              for (let i = 0; i < data.rows.length; i++) {
                paises.push(data.rows.item(i));
              }
              return paises;
            }
            else
              //devolve	vetor	vazio	se	a	tabela	estiver	vazia
              return [];
          });
      }).catch((e) => {
        console.log(e);
      });
  }





  

}
