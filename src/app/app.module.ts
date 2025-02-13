import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { IonicModule } from '@ionic/angular';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'; // Import para requisições HTTP

@NgModule({
  declarations: [
    AppComponent, // Declaração do componente principal
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    IonicModule.forRoot(), // Inicializa o Ionic corretamente
    HttpClientModule, // Importação para integração com APIs
  ],
  providers: [], // Espaço reservado para serviços futuros
  bootstrap: [AppComponent], // Componente principal que inicia a aplicação
})
export class AppModule {}
