import { EventEmitter, Injectable } from '@angular/core';
import { LoggingService } from './LoggingService.service';
import { Persona } from './persona.model';

@Injectable()
export class PersonasService {
  eliminarPersona(index: number) {
    this.personas.splice(index,1);
  }
  modificar(index: number, persona: Persona) {
    let persona1 = this.personas[index];
    persona1.nombre = persona.nombre;
    persona1.apellido = persona.apellido;
  }

  personas: Persona[] = [
    new Persona('Juan', 'Perez'),
    new Persona('Laura', 'Juarez')
  ]; 
  
  saludar = new EventEmitter<number>();
  
  constructor(private loggingService:LoggingService){}
  
  agregarPersona(persona: Persona) {
    this.loggingService.enviaMensajeAConsola('agregamos persona:' + persona.nombre)
    this.personas.push(persona);
  }
 
  encontrarPersona(index: number) {
    let persona;

    persona = this.personas[index];

    return persona;
  }
}
