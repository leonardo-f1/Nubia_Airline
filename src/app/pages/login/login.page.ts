import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true, // Mantém como componente standalone
  imports: [IonicModule, CommonModule], // Mantém os módulos necessários
  templateUrl: './login.component.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  constructor(private router: Router) {}

  irParaLogin() {
    this.router.navigate(['/login']); // Redireciona para a página de login
  }
}
