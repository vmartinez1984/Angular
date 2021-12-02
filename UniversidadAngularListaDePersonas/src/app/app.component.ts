import { Component, OnInit } from '@angular/core';
import { Persona } from './models/persona.model';
import { PersonaService } from './services/persona.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit  {
  title = 'Listado de personas';

  personas: Persona[] = [];

  constructor(private servicio :PersonaService) { }

  ngOnInit(): void {
    this.personas = this.servicio.Obtener();
  }

  personaAgregada(persona:Persona){
    //this.personas.push(persona);
    this.servicio.Agregar(persona)
  }
}
