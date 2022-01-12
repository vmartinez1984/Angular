import { EventEmitter, Injectable } from '@angular/core';
import { DataServices } from './data.services';
import { LoggingService } from './LoggingService.service';
import { Persona } from './persona.model';

@Injectable()
export class PersonasService {
  personas: Persona[] = []; 
  
  saludar = new EventEmitter<number>();
  
  constructor(
    private loggingService:LoggingService
    ,private dataServices: DataServices
  ){}

  eliminarPersona(index: number) {
    this.personas.splice(index,1);
    this.dataServices.eliminar(index);
    if(this.personas != null)
      this.dataServices.guardarPersonas(this.personas);
  }
  modificar(index: number, persona: Persona) {
    let persona1 = this.personas[index];
    persona1.nombre = persona.nombre;
    persona1.apellido = persona.apellido;
    this.dataServices.actualizarPersona(index, persona);
  }

  
  colocarPersonas(personas:Persona[]){
    this.personas = personas;
  }

  cargarPersonas(){
    return this.dataServices.cargarPersonas();
  }

  agregarPersona(persona: Persona) {
    this.loggingService.enviaMensajeAConsola('agregamos persona:' + persona.nombre);
    if(this.personas == null)
      this.personas = [];
    this.personas.push(persona);
    this.dataServices.guardarPersonas(this.personas);
  }
 
  encontrarPersona(index: number) {
    let persona;

    persona = this.personas[index];

    return persona;
  }
}
