import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';  // Importe o IonicModule
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';  // Importe ActivatedRoute para capturar queryParams

@Component({
  selector: 'app-check-in',
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule],  // Adicionando RouterModule aos imports
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.scss'],
})
export class CheckInComponent implements OnInit {
  reserva: any = {};  // Para armazenar os detalhes da reserva

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Captura os dados passados via queryParams
    this.route.queryParams.subscribe(params => {
      console.log(params);  // Verifique se os params estão sendo recebidos no console
      this.reserva = { // Aqui recebemos os dados e armazenamos na variável 'reserva'
        departure: params['departure'],
        destination: params['destination'],
        departureDate: params['departureDate'],
        returnDate: params['returnDate'],
        departureTime: params['departureTime'],
        arrivalTime: params['arrivalTime']
      };
    });
  }
}

