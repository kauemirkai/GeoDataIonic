import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the PaisProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PaisProvider {
  private baseApiPath = "https://restcountries.eu/rest/v1/"

  constructor(public http: Http) {
    console.log('Hello PaisProvider Provider');
  }

  getContinente(Continente) {
    if (Continente == 'all'){
      return this.http.get(this.baseApiPath + Continente);
      
    }
    return this.http.get(this.baseApiPath + "region/" + Continente);
    }


    getSinglePais(Pais){
      return this.http.get(this.baseApiPath + "name/" + Pais + "?fullText=true")

    }

}
