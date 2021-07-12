import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TarjetaService } from 'src/app/services/tarjeta.service';

@Component({
  selector: 'app-tarjeta-de-credito',
  templateUrl: './tarjeta-de-credito.component.html',
  styleUrls: ['./tarjeta-de-credito.component.css']
})
export class TarjetaDeCreditoComponent implements OnInit {
  listaDeTarjetas: any[] = []
  form: FormGroup;
  accion = 'Agregar';

  constructor(private fb: FormBuilder, private toastr: ToastrService, private tarjetaService: TarjetaService) {
    this.form = this.fb.group({
      id:[0],
      titular: ['', Validators.required],
      numeroDeTarjeta: ['',
        [
          Validators.required,
          Validators.maxLength(16),
          Validators.minLength(16)
        ]
      ],
      fechaDeVencimiento: ['',
        [
          Validators.required,
          Validators.maxLength(5),
          Validators.minLength(5)
        ]
      ],
      cvv: ['',
        [
          Validators.required,
          Validators.maxLength(3),
          Validators.minLength(3)
        ]
      ]
    });
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.tarjetaService.getAll().subscribe(
      data => {
        console.log(data);
        this.listaDeTarjetas = data;
      },
      error => {
        console.log(error);
      }
    );
  }
  agregarTarjeta() {
    //console.log(this.form);
    const tarjeta: any = {
      id: this.form.get('id')?.value,
      titular: this.form.get('titular')?.value,
      numeroDeTarjeta: this.form.get('numeroDeTarjeta')?.value,
      fechaDeVencimiento: this.form.get('fechaDeVencimiento')?.value,
      cvv: this.form.get('cvv')?.value
    }
    console.log(tarjeta);
    if(tarjeta.id == 0){
      //this.listaDeTarjetas.push(tarjeta);
      this.tarjetaService.Add(tarjeta).subscribe(data=>{
        this.toastr.success("La tarjeta ha sido registrada", "Tarjeta registrada");
        this.getAll();
        this.form.reset();
      },error =>{
        this.toastr.error("Ocurrio un error", error);
      });
    }else{
      this.tarjetaService.Update(tarjeta).subscribe(data=>{
        this.form.reset();
        this.accion = "Agregar";
        this.toastr.info("La tarjeta fue actualizada con exito", "Tarjeta actualizada");
        this.getAll();
      },error =>{
        this.toastr.error("Ocurrio un error", error);
      });
    }
   
  }

  eliminarTarjeta(id: number) {
    console.log(id);
    //this.listaDeTarjetas.splice(index,1);
    this.tarjetaService.delete(id).subscribe(data => {
      this.getAll();
      this.toastr.error("Tarjeta eliminada con exito", "Tarjeta eliminada");
    },
      error => {
        console.log(error);
      }
    );
  }

  editarTarjeta(tarjeta :any){
    console.log(tarjeta);
    this.accion = "Editar";
    this.form.patchValue({
      id: tarjeta.id,
      titular: tarjeta.titular,
      numeroDeTarjeta: tarjeta.numeroDeTarjeta,
      fechaDeVencimiento: tarjeta.fechaDeVencimiento,
      cvv: tarjeta.cvv
    });    
  }
}
