import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface Avaliacao {
  viagemNome: string;
  imagem: string | null;
  pontuacao: number;
  comentario: string;
  nome: string;
}

@Component({
  selector: 'app-avaliacoes',
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule, FormsModule],
  templateUrl: './avaliacoes.component.html',
  styleUrls: ['./avaliacoes.component.scss'],
})
export class AvaliacoesComponent {
  minhasAvaliacoes: Avaliacao[] = [];
  novaAvaliacao: Avaliacao = { pontuacao: 0, comentario: '', viagemNome: '', imagem: null, nome: 'Usuário' };

  // Caso precise do carrossel
  viagens = [
    { titulo: 'Nova York', imagemUrl: 'assets/imagens/Y.jpg', pontuacao: 5, comentarios: [{ nome: 'Carlos Mendes', texto: 'Cidade incrível!' }] },
    { titulo: 'Paris', imagemUrl: 'assets/imagens/P.jpg', pontuacao: 4, comentarios: [{ nome: 'Ana Silva', texto: 'Cidade linda, mas os preços são altos!' }] },
    { titulo: 'Londres', imagemUrl: 'assets/imagens/I.jpg', pontuacao: 4, comentarios: [{ nome: 'Bruno Ferreira', texto: 'História e cultura por toda parte!' }] },
    { titulo: 'Tóquio', imagemUrl: 'assets/imagens/J.jpg', pontuacao: 5, comentarios: [{ nome: 'Mariana Souza', texto: 'Tecnologia e tradição em perfeita harmonia!' }] },
    { titulo: 'Roma', imagemUrl: 'assets/imagens/RM.jpg', pontuacao: 5, comentarios: [{ nome: 'João Pedro', texto: 'Comida incrível e monumentos históricos!' }] }
  ];
  viagensVisiveis: any[] = [];
  indexViagensAtual = 0;

  constructor() {
    this.atualizarViagensVisiveis();
    this.carregarAvaliacoes();
  }

  prevSlide() {
    this.indexViagensAtual = (this.indexViagensAtual - 1 + this.viagens.length) % this.viagens.length;
    this.atualizarViagensVisiveis();
  }

  nextSlide() {
    this.indexViagensAtual = (this.indexViagensAtual + 1) % this.viagens.length;
    this.atualizarViagensVisiveis();
  }

  atualizarViagensVisiveis() {
    this.viagensVisiveis = [
      this.viagens[this.indexViagensAtual % this.viagens.length],
      this.viagens[(this.indexViagensAtual + 1) % this.viagens.length]
    ];
  }

  selecionarPontuacao(pontuacao: number) {
    this.novaAvaliacao.pontuacao = pontuacao;
  }

  adicionarAvaliacao() {
    if (!this.novaAvaliacao.pontuacao || !this.novaAvaliacao.comentario.trim() || !this.novaAvaliacao.imagem || !this.novaAvaliacao.viagemNome.trim()) {
      alert('Preencha todos os campos antes de enviar.');
      return;
    }

    this.minhasAvaliacoes.push({ ...this.novaAvaliacao });
    this.salvarAvaliacoes();

    this.novaAvaliacao = { pontuacao: 0, comentario: '', viagemNome: '', imagem: null, nome: 'Usuário' };
  }

  removerAvaliacao(index: number) {
    if (index >= 0 && index < this.minhasAvaliacoes.length) {
      this.minhasAvaliacoes.splice(index, 1);
      this.salvarAvaliacoes();
    }
  }

  carregarAvaliacoes() {
    const avaliacoesSalvas = localStorage.getItem('avaliacoes');
    if (avaliacoesSalvas) {
      try {
        this.minhasAvaliacoes = JSON.parse(avaliacoesSalvas) || [];
      } catch (e) {
        console.error('Erro ao carregar avaliações:', e);
        this.minhasAvaliacoes = [];
      }
    }
  }

  salvarAvaliacoes() {
    localStorage.setItem('avaliacoes', JSON.stringify(this.minhasAvaliacoes));
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.novaAvaliacao.imagem = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  onImageError(event: any) {
    event.target.src = 'assets/imagens/placeholder.png'; // Substitui a imagem com um placeholder se falhar
  }
}
