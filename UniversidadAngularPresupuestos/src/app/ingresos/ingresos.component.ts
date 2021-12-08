import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})
export class IngresosComponent implements OnInit {

  nombre:string;
  cantidad:number;
  constructor() { }

  ngOnInit(): void {
  }

  eliminar(){
    
  }
}
