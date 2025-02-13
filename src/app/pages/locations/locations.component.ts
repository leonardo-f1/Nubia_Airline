import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TravelService } from '../../services/travel.service';

@Component({
  selector: 'app-locations',
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule, RouterModule],
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss'],
})
export class LocationsComponent {
  departure: string = '';
  destination: string = '';
  departureDate: string = '';
  returnDate: string = '';
  departureTime: string = '11:00';
  arrivalTime: string = '17:30';

  flightDetails: any = null;
  minDate: string = new Date().toISOString().split('T')[0]; // 🔹 Define data mínima para hoje

  constructor(private travelService: TravelService) {}

  searchFlights() {
    if (!this.isValidInput(this.departure) || !this.isValidInput(this.destination)) {
      alert('As cidades de origem e destino devem conter apenas letras!');
      return;
    }

    if (!this.departureDate || !this.returnDate) {
      alert('Por favor, preencha as datas corretamente.');
      return;
    }

    console.log('✈️ Pesquisando voos...');
    this.flightDetails = {
      departure: this.departure.trim(),
      destination: this.destination.trim(),
      departureDate: this.departureDate,
      returnDate: this.returnDate,
      departureTime: this.departureTime,
      arrivalTime: this.arrivalTime,
    };

    console.log('🔹 Detalhes do voo:', this.flightDetails);
  }

  reserveFlight() {
    if (!this.flightDetails) {
      alert('Faça a pesquisa antes de reservar!');
      return;
    }

    const reservation = {
      description: `Voo de ${this.departure.trim()} para ${this.destination.trim()}`,
      type: 'flight',
      state: 'confirmed',
      startAt: this.departureDate ? new Date(this.departureDate + 'T00:00:00Z').toISOString() : null,
      endAt: this.returnDate ? new Date(this.returnDate + 'T00:00:00Z').toISOString() : null,
      prop1: this.departureTime,
      prop2: this.arrivalTime,
      prop3: '',
    };

    console.log('📡 Enviando reserva para API:', reservation);

    this.travelService.createTravel(reservation).subscribe(
      (response) => {
        console.log('✅ Viagem criada com sucesso:', response);
        alert('Voo reservado com sucesso!');
      },
      (error) => {
        console.error('❌ Erro ao criar viagem:', error);
        alert('Erro ao criar viagem. Verifique o console para mais detalhes.');
      }
    );
  }

  private isValidInput(value: string): boolean {
    return /^[A-Za-zÀ-ÿ\s]+$/.test(value.trim()); // Permite apenas letras e espaços
  }
}
