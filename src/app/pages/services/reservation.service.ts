import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private flightDetails: any = null;

  constructor() {}

  // Salvar os detalhes do voo
  saveReservation(flightDetails: any) {
    this.flightDetails = flightDetails;
  }

  // Obter os detalhes do voo
  getReservation() {
    return this.flightDetails;
  }
}
