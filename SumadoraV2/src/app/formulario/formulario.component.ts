import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  @Output() resultado = new EventEmitter<number>();
  sumandoA: number;
  sumandoB: number;
  constructor() { }

  ngOnInit(): void {
  }

  sumar(){
    let suma;
    suma = this.sumandoA + this.sumandoB;
    //console.log(suma); 
    this.resultado.emit(suma);    
  }
}
