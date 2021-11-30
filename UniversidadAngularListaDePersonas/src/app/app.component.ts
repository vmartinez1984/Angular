import { Component } from '@angular/core';
import { Persona } from './models/persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Listado de personas';

  personas: Persona[] = [
    new Persona('Víctor', 'Mtz'),
    new Persona('Nancy', 'Marin'),
  ];

  personaAgregada(persona:Persona){
    this.personas.push(persona);
  }
}
