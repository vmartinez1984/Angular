import { Component, Input, OnInit } from '@angular/core';
import { Egreso } from './egreso.model';
import { EgresoServicio } from './egreso.servicio';

@Component({
  selector: 'app-egreso',
  templateUrl: './egreso.component.html',
  styleUrls: ['./egreso.component.css']
})
export class EgresoComponent implements OnInit {
  egresos: Egreso[]=[];
  @Input() ingresoTotal:number;

  constructor(private servicio : EgresoServicio) { }

  ngOnInit(): void {
    this.egresos = this.servicio.egresos;
  }

  eliminar(egreso:Egreso){
    this.servicio.eliminar(egreso);
  }

  calcularPorcentaje(egreso:Egreso){
    return egreso.valor / this.ingresoTotal;
  }
}
