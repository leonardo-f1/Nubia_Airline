import { Component } from '@angular/core';

@Component({
  selector: 'app-travels',
  templateUrl: './travels.page.html',
  styleUrls: ['./travels.page.scss'],
})
export class TravelsPage {
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
