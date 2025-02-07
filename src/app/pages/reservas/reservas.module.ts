import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';  // Certifique-se de importar o IonicModule
import { ReservasPage } from './reservas.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule  // Adiciona o IonicModule
  ],
  // Remover a declaração da página aqui:
  // declarations: [ReservasPage]
})
export class ReservasPageModule {}
