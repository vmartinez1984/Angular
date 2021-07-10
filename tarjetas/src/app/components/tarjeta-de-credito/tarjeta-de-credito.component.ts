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

  constructor(private fb: FormBuilder, private toastr: ToastrService, private tarjetaService: TarjetaService) {
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
      titular: this.form.get('titular')?.value,
      numeroDeTarjeta: this.form.get('numeroDeTarjeta')?.value,
      fechaDeVencimiento: this.form.get('fechaDeVencimiento')?.value,
      cvv: this.form.get('cvv')?.value
    }
    //console.log(tarjeta);
    this.listaDeTarjetas.push(tarjeta);
    this.toastr.success("La tarjeta ha sido registrada", "Tarjeta registrada");
    this.form.reset();
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

}
