import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TravelService } from '../../services/travel.service'; // Importa o serviço de viagens

@Component({
  selector: 'app-check-in',
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule, FormsModule],
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.scss'],
})
export class CheckInComponent implements OnInit {
  reserva: any = {}; // Para armazenar os detalhes da reserva
  viagens: any[] = []; // Lista de viagens carregadas da API
  editando: boolean = false; // Define se está editando ou criando uma nova viagem

  // Objeto para criar/editar viagens (usando os nomes corretos)
  novaViagem = {
    id: '',          // ✅ Adicionado ID para edição
    description: '', // ✅ Corrigido para "description"
    type: '',        // ✅ Corrigido para "type"
    status: '',      // ✅ Corrigido para "status"
    location: '',    // ✅ Corrigido para "location"
    startDate: '',   // ✅ Corrigido para "startDate"
    endDate: '',     // ✅ Corrigido para "endDate"
    comments: '',    // ✅ Corrigido para "comments"
  };

  constructor(private route: ActivatedRoute, private travelService: TravelService) {}

  ngOnInit() {
    // Captura os parâmetros da URL (queryParams)
    this.route.queryParams.subscribe((params) => {
      if (Object.keys(params).length > 0) {
        this.reserva = {
          departure: params['departure'],
          destination: params['destination'],
          departureDate: params['departureDate'],
          returnDate: params['returnDate'],
          departureTime: params['departureTime'],
          arrivalTime: params['arrivalTime'],
        };
      }
    });

    // Carrega a lista de viagens ao iniciar
    this.carregarViagens();
  }

  // 🔹 Buscar todas as viagens da API
  carregarViagens() {
    this.travelService.getAllTravels().subscribe(
      (data) => {
        this.viagens = data;
      },
      (error) => {
        console.error('❌ Erro ao carregar viagens:', error);
      }
    );
  }

  // 🔹 Criar uma nova viagem
  salvarViagem() {
    if (!this.novaViagem.description || !this.novaViagem.type) {
      alert('Por favor, preencha os campos obrigatórios!');
      return;
    }

    // Formata as datas corretamente para "YYYY-MM-DD"
    this.novaViagem.startDate = this.formatarData(this.novaViagem.startDate);
    this.novaViagem.endDate = this.formatarData(this.novaViagem.endDate);

    console.log('📤 Criando nova viagem:', JSON.stringify(this.novaViagem, null, 2));

    this.travelService.createTravel(this.novaViagem).subscribe(
      () => {
        this.carregarViagens();
        this.limparFormulario();
      },
      (error) => {
        console.error('❌ Erro ao salvar viagem:', error);
        alert('Erro ao salvar a viagem. Verifique os dados e tente novamente.');
      }
    );
  }

  // 🔹 Editar viagem existente (preenche o formulário com os dados da viagem)
  editarViagem(viagem: any) {
    this.novaViagem = { ...viagem }; // Copia os dados da viagem para edição
    this.editando = true; // Define o estado de edição
  }

  // 🔹 Atualizar viagem já existente
  atualizarViagem() {
    if (!this.novaViagem.id) {
      alert('Erro: A viagem não possui um ID válido.');
      return;
    }

    // Formata as datas corretamente antes de enviar
    this.novaViagem.startDate = this.formatarData(this.novaViagem.startDate);
    this.novaViagem.endDate = this.formatarData(this.novaViagem.endDate);

    console.log('📤 Atualizando viagem:', JSON.stringify(this.novaViagem, null, 2));

    this.travelService.updateTravel(this.novaViagem.id, this.novaViagem).subscribe(
      () => {
        this.carregarViagens();
        this.limparFormulario();
      },
      (error) => {
        console.error('❌ Erro ao atualizar viagem:', error);
        alert('Erro ao atualizar a viagem. Tente novamente.');
      }
    );
  }

  // 🔹 Remover viagem
  removerViagem(viagem: any) {
    if (confirm('Tem certeza que deseja excluir esta viagem?')) {
      this.travelService.deleteTravel(viagem.id).subscribe(
        () => this.carregarViagens(),
        (error) => console.error('❌ Erro ao remover viagem:', error)
      );
    }
  }

  // 🔹 Limpa os campos do formulário
  limparFormulario() {
    this.novaViagem = {
      id: '',
      description: '',
      type: '',
      status: '',
      location: '',
      startDate: '',
      endDate: '',
      comments: '',
    };
    this.editando = false; // Sai do modo de edição
  }

  // 🔹 Formatar datas para "YYYY-MM-DD"
  private formatarData(data: string): string {
    return data ? new Date(data).toISOString().split('T')[0] : '';
  }
}
