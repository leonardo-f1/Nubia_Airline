import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TravelService {
  private apiUrl = 'https://mobile-api-one.vercel.app/api/travels';

  // 🔹 Use variáveis de ambiente para credenciais em produção!
  private username = 'leonardo.f@ipvc.pt';
  private password = 'M5@yTp3N';

  private getHttpOptions() {
    const authToken = btoa(`${this.username}:${this.password}`);
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Basic ${authToken}`
      })
    };
  }

  constructor(private http: HttpClient) {}

  // 🔹 Buscar todas as viagens
  getAllTravels(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl, this.getHttpOptions()).pipe(
      catchError(this.handleError)
    );
  }

  // 🔹 Buscar uma viagem por ID
  getTravelById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`, this.getHttpOptions()).pipe(
      catchError(this.handleError)
    );
  }

  // 🔹 Criar uma nova viagem
  createTravel(travelData: any): Observable<any> {
    const formattedData = this.formatTravelData(travelData);
    console.log('📤 Enviando dados para API:', JSON.stringify(formattedData, null, 2));

    return this.http.post<any>(this.apiUrl, formattedData, this.getHttpOptions()).pipe(
      catchError(this.handleError)
    );
  }

  // 🔹 Atualizar uma viagem existente
  updateTravel(id: string, travelData: any): Observable<any> {
    const formattedData = this.formatTravelData(travelData);
    console.log('🔄 Atualizando viagem:', JSON.stringify(formattedData, null, 2));

    return this.http.put<any>(`${this.apiUrl}/${id}`, formattedData, this.getHttpOptions()).pipe(
      catchError(this.handleError)
    );
  }

  // 🔹 Deletar uma viagem
  deleteTravel(id: string): Observable<any> {
    console.log(`🗑️ Removendo viagem com ID: ${id}`);
    return this.http.delete<any>(`${this.apiUrl}/${id}`, this.getHttpOptions()).pipe(
      catchError(this.handleError)
    );
  }

  // 🔹 Tratamento de erros aprimorado
  private handleError(error: HttpErrorResponse) {
    console.error('❌ Erro na API:', error);

    let errorMessage = 'Erro ao processar a requisição.';
    if (error.error && typeof error.error === 'object') {
      errorMessage = error.error.message || JSON.stringify(error.error);
    } else if (error.status === 400) {
      errorMessage = 'Requisição inválida (400). Verifique os dados enviados.';
    } else if (error.status === 401) {
      errorMessage = 'Acesso não autorizado (401). Verifique suas credenciais.';
    } else if (error.status === 404) {
      errorMessage = 'Recurso não encontrado (404).';
    } else if (error.status === 500) {
      errorMessage = 'Erro no servidor (500). Tente novamente mais tarde.';
    }

    return throwError(() => new Error(errorMessage));
  }

  // 🔹 Formatar os dados antes de enviar para a API
  private formatTravelData(data: any) {
    return {
      description: data.description || '',
      type: data.type || '',
      status: data.status || '',
      location: data.location || '',
      startDate: data.startDate ? new Date(data.startDate).toISOString().split('T')[0] : '',
      endDate: data.endDate ? new Date(data.endDate).toISOString().split('T')[0] : '',
      comments: data.comments || ''
    };
  }
}
