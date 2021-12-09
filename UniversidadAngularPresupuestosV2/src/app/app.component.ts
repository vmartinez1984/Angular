import { Component } from '@angular/core';
import { Egreso } from './egreso/egreso.model';
import { EgresoServicio } from './egreso/egreso.servicio';
import { Ingreso } from './ingreso/ingreso.model';
import { IngresoServicio } from './ingreso/ingreso.servicio';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'presupuesto-app';
  ingresos: Ingreso[] = [];
  egresos: Egreso[] = [];
  constructor(
    private ingresoServicio: IngresoServicio,
    private egresoServicio: EgresoServicio
  ) {
    this.ingresos = ingresoServicio.ingresos;
    this.egresos = egresoServicio.egresos;
  }

  obtenerIngresoTotal() {
    let ingresoTotal: number = 0;

    this.ingresos.forEach((ingreso) => {
      ingresoTotal += ingreso.valor;
    });

    return ingresoTotal;
  }

  obtenerEgresoTotal(){
    let total: number= 0;

    this.egresos.forEach(egreso=>{
      total += egreso.valor;
    });

    return total;
  }

  obtenerPorcentajeTotal(){
    return this.obtenerEgresoTotal()/this.obtenerIngresoTotal();
  }

  obtenerPresupuestoTotal(){
    return this.obtenerIngresoTotal() - this.obtenerEgresoTotal();
  }
}
