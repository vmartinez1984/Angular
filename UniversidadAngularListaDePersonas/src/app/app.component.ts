import { Component } from '@angular/core';
import { Persona } from './models/persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Listado de personas';
  nombreInput: string = '';
  apellidoInput: string = '';
  personas: Persona[] = [
    new Persona('Víctor', 'Mtz'),
    new Persona('Nancy', 'Marin'),
  ];

  agregarPersona() {
    if (this.nombreInput != '' && this.apellidoInput != '') {
      this.personas.push(new Persona(this.nombreInput, this.apellidoInput));
      this.nombreInput = '';
      this.apellidoInput = '';
    }
  }
}
