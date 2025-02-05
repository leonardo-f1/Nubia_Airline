import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular'; // ✅ Importa o IonicModule
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-success',
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule], // ✅ Agora o IonicModule está incluído
  templateUrl: './success.page.html',
  styleUrls: ['./success.page.scss'],
})
export class SuccessPage {}
