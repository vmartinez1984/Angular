import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TarjetaService {
  myAppUrl = 'https://localhost:5001';
  myApiUrl = '/Api/TarjetasDeCredito/';
  constructor(private httpClient: HttpClient) { }

  getAll():Observable<any>{
    return this.httpClient.get(this.myAppUrl+this.myApiUrl);
  }

  delete(id:number):Observable<any>{
    return this.httpClient.delete(this.myAppUrl + this.myApiUrl + id);
  }

  Add(tarjeta: any): Observable<any>{
    return this.httpClient.post(this.myAppUrl + this.myApiUrl, tarjeta);
  }

  Update(tarjeta: any): Observable<any>{
    return this.httpClient.put(this.myAppUrl + this.myApiUrl, tarjeta);
  }
}
