import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular'; // Importando IonicModule
import { CommonModule } from '@angular/common'; // Importando CommonModule para *ngIf
import { FormsModule } from '@angular/forms'; // Importando FormsModule para ngModel
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true, // Mantém como componente standalone
  imports: [IonicModule, CommonModule, FormsModule], // Adicionando FormsModule aqui
  templateUrl: './login.component.html',  // Certifique-se de que o caminho está correto
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  onLogin() {
    // Verifica se o usuário está registrado no localStorage
    const storedUser = localStorage.getItem(this.email);
    if (!storedUser) {
      this.errorMessage = 'Usuário não encontrado. Faça o registro!';
      return;
    }

    const user = JSON.parse(storedUser);
    if (user.password !== this.password) {
      this.errorMessage = 'Senha incorreta!';
      return;
    }

    // Se as credenciais forem corretas, redireciona para a página de viagens
    this.router.navigate(['/travels']);
  }
}
