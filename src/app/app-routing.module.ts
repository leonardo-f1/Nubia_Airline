import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPage } from './pages/login/login.page'; 
import { HomePage } from './home/home.page';
import { RegisterComponent } from './pages/register/register.component';
import { Travelscomponent } from './pages/travels/travels.component';  // Corrigido para TravelsComponent
import { LocationsComponent } from './pages/locations/locations.component';
import { CheckInComponent } from './pages/check-in/check-in.component';  
import { AvaliacoesComponent } from './pages/avaliacoes/avaliacoes.component';  

const routes: Routes = [
  { path: 'login', component: LoginPage },
  { path: 'home', component: HomePage },
  { path: 'register', component: RegisterComponent },
  { path: 'travels', component: Travelscomponent },  // Corrigido para TravelsComponent
  { path: 'gerenciar-localizacoes', component: LocationsComponent },
  { path: 'check-in', component: CheckInComponent },
  { path: 'avaliacoes', component: AvaliacoesComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }  // O redirecionamento agora leva à página 'home'
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
