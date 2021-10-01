import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/servicio/crud.service';

@Component({
  selector: 'app-listar-empleado',
  templateUrl: './listar-empleado.component.html',
  styleUrls: ['./listar-empleado.component.css']
})
export class ListarEmpleadoComponent implements OnInit {

  Empleados: any;
  constructor(private crudService: CrudService) { 

  }

  ngOnInit(): void {
    this.crudService.ListarEmpleados().subscribe(respuesta=>{
      console.log(respuesta);
      this.Empleados = respuesta;
    });
  }

  borrar(id:number, index:number):void{
    //console.log(id);
    if(window.confirm("¿Desea borrar el registro?"))
    this.crudService.borrar(id).subscribe(respuesta=>{
      this.Empleados.splice(index);
    },
    error=>{
      console.error(error);
    });        
  }
}
