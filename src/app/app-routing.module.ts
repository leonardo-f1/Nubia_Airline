import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPage } from './pages/login/login.page'; 
import { HomePage } from './home/home.page';
import { RegisterComponent } from './pages/register/register.component';
import { Travelscomponent } from './pages/travels/travels.component';
import { LocationsComponent } from './pages/locations/locations.component';
import { CheckInComponent } from './pages/check-in/check-in.component';  // Importando o CheckInComponent
import { AvaliacoesComponent } from './pages/avaliacoes/avaliacoes.component';  // Importando AvaliacoesComponent

const routes: Routes = [
  { path: 'login', component: LoginPage },  // Rota para a página de login
  { path: 'home', component: HomePage },  // Rota para a página inicial
  { path: 'register', component: RegisterComponent },  // Rota para a página de registro
  { path: 'travels', component: Travelscomponent },  // Rota para a página de viagens
  { path: 'gerenciar-localizacoes', component: LocationsComponent },  // Rota para gerenciar localizações
  { path: 'check-in', component: CheckInComponent },  // Rota para o check-in
  { path: 'avaliacoes', component: AvaliacoesComponent },  // Rota para avaliações
  { path: '', redirectTo: 'home', pathMatch: 'full' }  // Alterado o redirecionamento para a página 'home' como padrão
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

