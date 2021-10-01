import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudService } from 'src/app/servicio/crud.service';

@Component({
  selector: 'app-editar-empleado',
  templateUrl: './editar-empleado.component.html',
  styleUrls: ['./editar-empleado.component.css']
})
export class EditarEmpleadoComponent implements OnInit {
  formularioDeEmpleado: FormGroup;
  id: any;

  constructor(private activateRoute:ActivatedRoute, 
    private serviceEmpleados: CrudService, formulario: FormBuilder, 
    private router:Router
  ) { 
    this.id = this.activateRoute.snapshot.paramMap.get('id');
    // console.log(this.id);
    this.serviceEmpleados.obtener(this.id).subscribe(data=>{
      console.log(data);
      this.formularioDeEmpleado.setValue({
        id: data[0]["id"],
        nombre:data[0]['nombre'],
        correo:data[0]['correo']
      });
    },error=>{
      console.log("Chingo su madre");
      console.log(error);
    });
    this.formularioDeEmpleado = formulario.group(
      {
        id:[''],
        nombre:[''],
        correo: ['']
      }
    );
  }

  ngOnInit(): void {
  }

  actualizar():any{
    //console.log(this.formularioDeEmpleado.value);
    this.serviceEmpleados.actualizar(this.formularioDeEmpleado.value).subscribe(data=>{
      alert("Datos registrados correctamente");
      this.router.navigateByUrl("listar-empleado");
    },error=>{

    });
  }
}
