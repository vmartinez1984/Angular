import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Persona } from '../models/persona.model';
import { PersonaService } from '../services/persona.service';

@Component({
  selector: 'app-formulario-persona',
  templateUrl: './formulario-persona.component.html',
  styleUrls: ['./formulario-persona.component.css']
})
export class FormularioPersonaComponent implements OnInit {

  //@Output() personaCreada = new EventEmitter<Persona>();
  nombreInput: string = '';
  apellidoInput: string = '';

  constructor(private service: PersonaService) { }

  ngOnInit(): void {
  }
  
  agregarPersona() {
    if (this.nombreInput != '' && this.apellidoInput != '') {
      //this.personaCreada.emit(new Persona(this.nombreInput, this.apellidoInput));
      this.service.Agregar(new Persona(this.nombreInput, this.apellidoInput));
      this.nombreInput = '';
      this.apellidoInput = '';
    }
  }
}
