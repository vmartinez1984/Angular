import { Component, OnInit } from '@angular/core';
import { Presupuesto } from '../modelos/presupuesto.model';
import { ServicioDePresupuestoService } from '../servicios/servicio-de-presupuesto.service';

@Component({
  selector: 'app-egresos',
  templateUrl: './egresos.component.html',
  styleUrls: ['./egresos.component.css']
})
export class EgresosComponent implements OnInit {
  public lista : Array<Presupuesto> = [];

  constructor(private servicio: ServicioDePresupuestoService) { }

  ngOnInit(): void {
    this.servicio.disparadorEgreso.subscribe(()=>{
      this.lista = this.servicio.listaDeEgresos;      
    });
  }

  eliminar(index: number){
    this.lista.splice(index,1);    
    this.servicio.listaDeEgresos = this.lista;
    this.servicio.disparadorEgreso.emit();
  }
}
