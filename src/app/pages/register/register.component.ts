import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular'; // Importando IonicModule
import { CommonModule } from '@angular/common'; // Importando CommonModule para *ngIf
import { FormsModule } from '@angular/forms'; // Importando FormsModule para ngModel
import { RouterModule } from '@angular/router'; // Importando RouterModule para navegação

@Component({
  selector: 'app-register',
  standalone: true, // Definindo como componente standalone
  imports: [IonicModule, CommonModule, FormsModule, RouterModule], // Importando os módulos necessários
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  nome: string = '';
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  onSignUp() {
    // Verifica se todos os campos foram preenchidos
    if (!this.nome || !this.email || !this.password) {
      this.errorMessage = 'Por favor, preencha todos os campos.';
      return;
    }

    // Verifica se já existe um registro com o mesmo e-mail
    const existingUser = localStorage.getItem(this.email);
    if (existingUser) {
      this.errorMessage = 'Já existe uma conta com esse e-mail. Faça login!';
      this.router.navigate(['/login']);
      return;
    }

    // Se for um novo registro, salva os dados no localStorage
    const user = {
      nome: this.nome,
      email: this.email,
      password: this.password,
    };
    localStorage.setItem(this.email, JSON.stringify(user));

    // Após o sucesso do registro, redireciona para a página de viagens
    this.router.navigate(['/travels']);
  }
}
