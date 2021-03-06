import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoggingService } from '../../LoggingService.service';
import { Persona } from '../../persona.model';
import { PersonasService } from '../../persona.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})

export class FormularioComponent implements OnInit{
  nombreInput: string;
  apellidoInput: string;
  index:number;

  constructor(
    private personaService: PersonasService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.index = this.activateRoute.snapshot.params['id'];
    if(this.index){
      let persona: Persona;

      persona = this.personaService.encontrarPersona(this.index);

      this.nombreInput = persona.nombre;
      this.apellidoInput = persona.apellido;
    }
  }
  
  onGuardarPersona() {
    let persona1 = new Persona(this.nombreInput, this.apellidoInput);
    if(this.index){      
      this.personaService.modificar(this.index, persona1);
    }else{
      this.personaService.agregarPersona(persona1);
    }
    
    this.router.navigate(['personas']);
  }

  eliminarPersona(){
    if(this.index != null){
      this.personaService.eliminarPersona(this.index);
    }
    this.router.navigate(['personas']);
  }
}
