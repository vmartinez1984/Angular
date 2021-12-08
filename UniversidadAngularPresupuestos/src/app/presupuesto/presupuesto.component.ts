import { Component, Input, OnInit, Output } from '@angular/core';
import { ServicioDePresupuestoService } from '../servicios/servicio-de-presupuesto.service';

@Component({
  selector: 'app-presupuesto',
  templateUrl: './presupuesto.component.html',
  styleUrls: ['./presupuesto.component.css'],
})
export class PresupuestoComponent implements OnInit {
  ingreso: number;
  egreso: number;
  egresoEnPorcentaje: number;  

  constructor(private servicio: ServicioDePresupuestoService) {
    this.ingreso = 0;
    this.egreso = 0;
  }

  ngOnInit(): void {
    this.servicio.disparadorIngreso.subscribe(data => {
      this.servicio.listaDeIngresos.push(data);
      this.ingreso = this.servicio.obtenerTotalDeIngresos();
    });
    this.servicio.disparadorEgreso.subscribe(data=>{
      this.servicio.listaDeEgresos.push(data);
      this.egreso = this.servicio.obtenerTotalDeEgresos();
    });    
  }
}
