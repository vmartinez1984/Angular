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
    this.personas = this.service.personas;
  }

  agregar(){
    this.router.navigate(["personas/agregar"])
  }
}
