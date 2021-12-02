import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogginService {

  constructor() { }

  mostrar(mensaje: string){
    console.log(mensaje);
  }
}
