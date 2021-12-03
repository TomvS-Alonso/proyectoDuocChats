import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMensaje } from './IMensaje';

@Injectable({
  providedIn: 'root'
})
export class MensajeServicioService {
  private url: string = 'http://localhost:3000/mensajes';
  private httpClient: HttpClient;

  constructor(client: HttpClient) {
    this.httpClient = client
  }

  public obtenerMensaje(): Observable<Array<IMensaje>> {
    return this.httpClient.get<Array<IMensaje>>(this.url, {
      headers: {
        "Content-Type": "application/json"
      }
    });
  }

  public agregarMensaje(nuevoMensaje: IMensaje): Observable<IMensaje> {
    return this.httpClient.post<IMensaje>(this.url, JSON.stringify(nuevoMensaje), {
      headers: {
        "Content-Type":"application/json"
      }
    })
  }

}