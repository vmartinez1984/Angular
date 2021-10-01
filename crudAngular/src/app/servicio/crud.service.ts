import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empleado } from './Empleado';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  API: string = "http://localhost/empleados/api/";
  constructor(private clienteHttp: HttpClient) { }

  AgregarEmpleado(datosEmpleado: Empleado): Observable<any> {
    return this.clienteHttp.post(this.API + "?insertar=1", datosEmpleado);
  }

  ListarEmpleados(): Observable<any> {
    return this.clienteHttp.get(this.API);
  }

  borrar(id: number): Observable<any> {
    return this.clienteHttp.get(this.API + "?borrar=" + id);
  }

  obtener(id:number):Observable<any>{
    return this.clienteHttp.get(this.API + "?consultar=" + id);
  }

  actualizar(datosEmpleado: Empleado): Observable<any> {
    return this.clienteHttp.post(this.API + "?actualizar=1", datosEmpleado);
  }
}