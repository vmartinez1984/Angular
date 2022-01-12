import { HttpClient } from '@angular/common/http'
import { Persona } from './persona.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class DataServices{
    private url: string = "https://listado-personas-54593-default-rtdb.firebaseio.com/datos.json";
    constructor(private httpClient: HttpClient){
    }

    guardarPersonas(personas: Persona[]){
        this.httpClient.put(this.url, personas)
        .subscribe(
            response=>{
                console.log("Resultado: "+ response)
            },
            error => console.log("Error al guardar personas: "+ error)        
        );
    }

    cargarPersonas(): Observable<any>{
       return this.httpClient.get(this.url);
    }

    actualizarPersona(index:number, persona:Persona){
        let url: string;
        url = "https://listado-personas-54593-default-rtdb.firebaseio.com/datos/" + index + ".json";
        this.httpClient.put(url, persona)
        .subscribe(
            response=>{
                console.log("Actualización: "+ response)
            },
            error => console.log("Error al guardar personas: " + error)        
        );
    }

    eliminar(index:number){
        let url: string;
        url = "https://listado-personas-54593-default-rtdb.firebaseio.com/datos/" + index + ".json";
        this.httpClient.delete(url)
        .subscribe(
            response=>{
                console.log("Eliminar: "+ response)
            },
            error => console.log("Error al eliminar personas: " + error)        
        );
    }
}