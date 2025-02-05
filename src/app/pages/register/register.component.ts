import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule], 
  templateUrl: './register.component.html', // ✅ Aponta para register.component.html
  styleUrls: ['./register.component.scss'], // ✅ Agora aponta para register.component.scss
})
export class RegisterComponent {}
