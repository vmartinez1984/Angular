import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ngOnInit(): void {
    setTimeout(() => {

      this.peliculasEnCines = [
        {
          titulo: "Spider-Man",
          fechaDeLanzamiento: new Date(),
          precio: 100.00
        },
        {
          titulo: "¿Quienes son los Miller?",
          fechaDeLanzamiento: new Date(),
          precio: 100.00
        }
      ]

      this.peliculasProximosEstrenos = [
        {
          titulo: "Un lugar en silencio 2",
          fechaDeLanzamiento: new Date(),
          precio: 100.00
        },
        {
          titulo: "Mobile suit gundam 1",
          fechaDeLanzamiento: new Date(),
          precio: 100.00
        },
        {
          titulo: "Mobile suit gundam 1",
          fechaDeLanzamiento: new Date(),
          precio: 100.00
        }
      ]
    }, 1500);
  }
  title = 'ejercicio01';
  peliculasEnCines: any;
  peliculasProximosEstrenos: any;  
}
