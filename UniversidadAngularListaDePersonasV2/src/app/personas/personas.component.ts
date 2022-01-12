import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from '../persona.model';
import { PersonasService } from '../persona.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {
  personas: Persona[] = [];
  constructor(private router: Router, private service : PersonasService) { }

  ngOnInit(): void {
    this.service.cargarPersonas()
    .subscribe(
      (personas :Persona[])=>{
        this.personas = personas;
        this.service.colocarPersonas(personas);
        console.log(this.personas);
      }
    );
  }

  agregar(){
    this.router.navigate(["personas/agregar"])
  }
}
