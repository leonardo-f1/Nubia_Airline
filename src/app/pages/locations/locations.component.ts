import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';  // Importando RouterModule

@Component({
  selector: 'app-locations',
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule, RouterModule],  // Adicionando RouterModule aos imports
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss'],
})
export class LocationsComponent {
  departure: string = '';  // Cidade de origem
  destination: string = '';  // Cidade de destino
  departureDate: string = '';  // Data da ida
  returnDate: string = '';  // Data da volta
  departureTime: string = '11:00';  // Hora de partida
  arrivalTime: string = '17:30';  // Hora de chegada

  // Propriedade para armazenar os detalhes do voo
  flightDetails: any = null;

  // Definindo a data mínima para 2025
  minDate: string = '2025-01-01'; // Definindo o primeiro dia de 2025

  // Função chamada ao clicar no botão "Pesquisar"
  searchFlights() {
    if (this.containsNumbers(this.departure) || this.containsNumbers(this.destination)) {
      alert('As cidades de origem e destino não podem conter números!');
      return;
    }

    console.log('Pesquisando voos...');
    console.log(`Origem: ${this.departure}`);
    console.log(`Destino: ${this.destination}`);
    console.log(`Data de ida: ${this.departureDate}`);
    console.log(`Data de volta: ${this.returnDate}`);

    // Exemplo de como os detalhes do voo podem ser atribuídos
    this.flightDetails = {
      departure: this.departure,
      destination: this.destination,
      departureDate: this.departureDate,
      returnDate: this.returnDate,
      departureTime: this.departureTime,
      arrivalTime: this.arrivalTime,
    };
  }

  // Função que verifica se a string contém números
  containsNumbers(str: string): boolean {
    return /\d/.test(str); // Verifica se a string contém qualquer número
  }

  // Função chamada ao clicar no botão "Reservar Voo"
  reserveFlight() {
    if (this.containsNumbers(this.departure) || this.containsNumbers(this.destination)) {
      alert('As cidades de origem e destino não podem conter números!');
      return;  // Se algum campo tiver números, impede a reserva
    }

    // Verificando se todos os campos necessários foram preenchidos
    if (!this.departure || !this.destination || !this.departureDate || !this.returnDate) {
      alert('Por favor, preencha todos os campos antes de fazer a reserva!');
      return;  // Se algum campo estiver vazio, não prossegue com a reserva
    }

    // Se todos os campos estiverem preenchidos, prossegue com a reserva
    console.log('Reserva de voo iniciada...');
    alert('Reserva de voo realizada com sucesso!');

    // Armazenando a reserva no localStorage
    const reservation = {
      departure: this.departure,
      destination: this.destination,
      departureDate: this.departureDate,
      returnDate: this.returnDate,
      departureTime: this.departureTime,
      arrivalTime: this.arrivalTime,
    };

    localStorage.setItem('flightReservation', JSON.stringify(reservation)); // Armazenando a reserva
  }
}
