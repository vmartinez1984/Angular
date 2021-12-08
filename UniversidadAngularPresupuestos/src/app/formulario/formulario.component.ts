import { Component, OnInit } from '@angular/core';
import { Presupuesto } from '../modelos/presupuesto.model';
import { ServicioDePresupuestoService } from '../servicios/servicio-de-presupuesto.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  nombreInput: string;
  cantidadInput: number;
  tipoInput: string;
  constructor(private servicio: ServicioDePresupuestoService) {}

  ngOnInit(): void {}

  agregarPresupuesto() {
    let presupuesto: Presupuesto;

    presupuesto = new Presupuesto(this.nombreInput, this.cantidadInput);
    //console.log(ingreso);
    //this.servicioDePresupuesto.disparador.emit({ data: this.cantidadInput });
    //this.servicioDePresupuesto.disparador.emit(ingreso);
    console.log(this.tipoInput);
    if (this.tipoInput == '') {
      console.log('Complete los campos');
    } else {
      if (this.tipoInput == 'egreso') {
        this.servicio.disparadorEgreso.emit(presupuesto);
      }
      else if(this.tipoInput == "ingreso"){
        this.servicio.disparadorIngreso.emit(presupuesto);
      }
    }
  }
}
