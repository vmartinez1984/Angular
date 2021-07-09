import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-tarjeta-de-credito',
  templateUrl: './tarjeta-de-credito.component.html',
  styleUrls: ['./tarjeta-de-credito.component.css']
})
export class TarjetaDeCreditoComponent implements OnInit {
  listaDeTarjetas: any[] = [
    { titular: "Juan Hernández", numeroDeTarjeta: "1234 5678", fechaDeVencimiento: "11/21", cvv: "123" },
    { titular: "María Hernández", numeroDeTarjeta: "1234 5678", fechaDeVencimiento: "11/22", cvv: "789" }
  ]
  form: FormGroup;

  constructor(private fb: FormBuilder, private toastr: ToastrService) {
    this.form = this.fb.group({
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
  }

  agregarTarjeta() {
    //console.log(this.form);
    const tarjeta: any = {
      titular: this.form.get('titular')?.value,
      numeroDeTarjeta: this.form.get('numeroDeTarjeta')?.value,
      fechaDeVencimiento: this.form.get('fechaDeVencimiento')?.value,
      cvv: this.form.get('cvv')?.value
    }
    //console.log(tarjeta);
    this.listaDeTarjetas.push(tarjeta);
    this.toastr.success("La tarjeta ha sido registrada","Tarjeta registrada");
    this.form.reset();
  }

  eliminarTarjeta(index:number){
    console.log(index);
    this.listaDeTarjetas.splice(index,1);
    this.toastr.error("Tarjeta eliminada con exito","Tarjeta eliminada");
  }

}
