import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListarPaisesPage } from './listar-paises';

@NgModule({
  declarations: [
    ListarPaisesPage,
  ],
  imports: [
    IonicPageModule.forChild(ListarPaisesPage),
  ],
})
export class ListarPaisesPageModule {}
