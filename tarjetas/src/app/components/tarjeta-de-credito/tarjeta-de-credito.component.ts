import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarjeta-de-credito',
  templateUrl: './tarjeta-de-credito.component.html',
  styleUrls: ['./tarjeta-de-credito.component.css']
})
export class TarjetaDeCreditoComponent implements OnInit {
  listaDeTarjetas: any[] = [
    { titular:"Juan Hernández", numeroDeTarjeta:"1234 5678", fechaDeVencimiento:"11/21", cvv:"123"},
    { titular:"María Hernández", numeroDeTarjeta:"1234 5678", fechaDeVencimiento:"11/22", cvv:"789"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
