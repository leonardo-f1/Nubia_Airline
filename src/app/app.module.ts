import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { IonicModule } from '@ionic/angular';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [AppComponent], 
  imports: [BrowserModule, AppRoutingModule, IonicModule.forRoot()],
  bootstrap: [AppComponent] 
})
export class AppModule {}
