import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [
    IonicModule, 
    CommonModule, 
    RouterModule
  ],
})
export class AppComponent implements OnInit {  
  constructor(private router: Router) {}

  ngOnInit() {
    this.router.navigate(['/home']);
  }
}
