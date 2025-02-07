import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular'; // Importa o IonicModule
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-avaliacoes',
  standalone: true,  // Certifique-se de que o componente é standalone
  imports: [IonicModule, CommonModule, RouterModule],  // Adiciona o IonicModule nos imports
  templateUrl: './avaliacoes.component.html',
  styleUrls: ['./avaliacoes.component.scss'],
})
export class AvaliacoesComponent {
  constructor() {}
}
