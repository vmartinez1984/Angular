import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {
  deshabilitar = false;
  mensaje = "No se ha agregado ninguna persona";
  titulo = "VMtz";
  constructor() { }

  ngOnInit(): void {
  }

  agregarPersona(){
    this.mensaje = "Persona agregada";
  }

  modificarTitulo(event : Event){
    this.titulo = (<HTMLInputElement> event.target).value;
  }
}
