import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SumadoraV2';
  resultado : any;
  mostrarResultado( resultado:number){
    this.resultado = resultado;
  }
}
