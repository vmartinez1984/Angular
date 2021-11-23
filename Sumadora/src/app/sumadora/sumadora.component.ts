import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sumadora',
  templateUrl: './sumadora.component.html',
  styleUrls: ['./sumadora.component.css']
})
export class SumadoraComponent implements OnInit {
  sumandoA: number = 0;
  sumandoB: number = 0;
  resultado: any;
  constructor() { }

  ngOnInit(): void {
  }

  sumar(){
    this.resultado = this.sumandoA + this.sumandoB;
  }
}
