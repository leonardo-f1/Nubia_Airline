import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';  // Importa o IonicModule diretamente

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.page.html',
  styleUrls: ['./reservas.page.scss'],
  standalone: true,  // Marca como stand-alone
  imports: [IonicModule]  // Importa o IonicModule aqui
})
export class ReservasPage {
  // Seu código da página
}
