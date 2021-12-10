import { Component, OnInit } from '@angular/core';
import { Egreso } from '../egreso/egreso.model';
import { EgresoServicio } from '../egreso/egreso.servicio';
import { Ingreso } from '../ingreso/ingreso.model';
import { IngresoServicio } from '../ingreso/ingreso.servicio';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  descripcionInput: string;
  valorInput: number;
  tipo: string = "egreso";

  constructor(private servicioDeIngreso: IngresoServicio, private servicioDeEgreso: EgresoServicio) { }

  ngOnInit(): void {
  }

  cambiarTipo(evento){
    this.tipo = evento.target.value;
  }

  guardar(){
    console.log(this.tipo);
    if(this.tipo === "egreso"){
      this.servicioDeEgreso.egresos.push(new Egreso(this.descripcionInput, this.valorInput));
    }else{
      this.servicioDeIngreso.ingresos.push(new Ingreso(this.descripcionInput, this.valorInput));
    }
  }
}
