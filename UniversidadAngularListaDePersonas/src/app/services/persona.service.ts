import { Injectable } from '@angular/core';
import { Persona } from '../models/persona.model';
import { LogginService } from './loggin.service';

@Injectable({
  providedIn: 'root',
})
export class PersonaService {
  private personas: Persona[] = [
    new Persona('Víctor', 'Mtz'),
    new Persona('Nancy', 'Marin'),
  ];

  constructor(private logginSevice: LogginService) {}

  Agregar(persona: Persona) {
    this.logginSevice.mostrar('Se agrego persona: ' + persona.nombre);
    this.personas.push(persona);
  }

  Obtener() {
    return this.personas;
  }
}
