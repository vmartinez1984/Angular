import { EventEmitter, Injectable, Output } from '@angular/core';
import { Presupuesto } from '../modelos/presupuesto.model';

@Injectable({
  providedIn: 'root',
})
export class ServicioDePresupuestoService {
  public listaDeIngresos: Array<Presupuesto> = [];
  public listaDeEgresos: Array<Presupuesto> = [];

  @Output()
  disparadorIngreso: EventEmitter<any> = new EventEmitter();
  @Output()
  disparadorEgreso: EventEmitter<any> = new EventEmitter();

  constructor() {}

  obtenerTotalDeIngresos(){
   let total;

   total = 0;
   for(let i=0; i<this.listaDeIngresos.length; i++){
     total += this.listaDeIngresos[i].cantidad;
   }

   return total;
  }

  obtenerTotalDeEgresos(){
    let total;
 
    total = 0;
    for(let i=0; i<this.listaDeEgresos.length; i++){
      total += this.listaDeEgresos[i].cantidad;
    }
 
    return total;
   }
}
