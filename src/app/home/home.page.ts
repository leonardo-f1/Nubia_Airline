import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';  // Importando o IonicModule
import { RouterModule } from '@angular/router'; // Importando o RouterModule

@Component({
  selector: 'app-home',
  standalone: true,  // Tornando o componente standalone
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  imports: [IonicModule, RouterModule], // Adicionando o IonicModule e RouterModule
})
export class HomePage {

  constructor() {}

  // Definindo o método irParaLogin
  irParaLogin() {
    console.log('Redirecionando para Login');
    // Aqui você pode adicionar a navegação para a página de Login
  }
}
