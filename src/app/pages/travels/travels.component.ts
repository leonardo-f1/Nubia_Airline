import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { IonicModule } from '@ionic/angular';   
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-travels',
  standalone: true,  
  imports: [CommonModule, IonicModule, RouterModule],  
  templateUrl: './travels.component.html',
  styleUrls: ['./travels.component.scss'],
})
export class Travelscomponent {  // Nome correto do componente
  travels = [
    { description: 'Viagem a Paris', location: 'Paris, França', startDate: new Date('2025-05-15'), endDate: new Date('2025-05-20') },
    { description: 'Viagem a Londres', location: 'Londres, Reino Unido', startDate: new Date('2025-06-10'), endDate: new Date('2025-06-15') },
  ];

  deleteTravel(index: number) {
    this.travels.splice(index, 1);
  }

  editTravel(index: number) {
    const travel = this.travels[index];
    console.log('Editando viagem:', travel);
  }
}
