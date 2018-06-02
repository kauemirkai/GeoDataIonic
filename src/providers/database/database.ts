import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatabaseProvider {
  any
  constructor(private db: SQLite) {
    console.log('Hello DatabaseProvider Provider');
  }

  openDatabase() {
    return this.db.create({
      name: "paises.db",
      location: "default"
    });
  }

  createDatabase() {
    return this.openDatabase().
      then((db: SQLiteObject) => {
        this.createTabelaClientes(db);
      });
  }
  createTabelaClientes(db: SQLiteObject) {
    let sql: string = "CREATE	TABLE	IF	NOT	EXISTS	paises	(id	INTEGER	PRIMARY	KEY	AUTOINCREMENT,	" +
      "	name	VARCHAR	(200))";
    db.executeSql(sql, {});//{poderia	conter	parâmetros,	por	isso	o	{}}
  }

}

