import { CommonModule } from '@angular/common';
import { Component, ChangeDetectorRef } from '@angular/core';

import {
  ReactiveFormsModule,
  FormBuilder,
  Validators,
  FormGroup
} from '@angular/forms';

import {
  RsvpService
} from '../../core/services/rsvp';

@Component({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  selector: 'app-rsvp',
  standalone: true,
  styleUrls: ['./rsvp.scss'],
  templateUrl: './rsvp.html'
})
export class Rsvp {

  loading = false;

  success = false;

  error = false;

  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private rsvp: RsvpService,
    private cdr: ChangeDetectorRef
  ) {

    this.form = this.fb.group({

      nombre: [
        '',
        Validators.required
      ],

      telefono: [
        ''
      ],

      mensaje: [
        ''
      ]

    });

  }

  submit(): void {

    if (this.loading) {
      return;
    }

    this.success = false;
    this.error = false;

    if (this.form.invalid) {

      this.form.markAllAsTouched();

      return;

    }

    this.loading = true;

    const formData = new FormData();

    formData.append(
      'nombre',
      this.form.value.nombre ?? ''
    );

    formData.append(
      'telefono',
      this.form.value.telefono ?? ''
    );

    formData.append(
      'mensaje',
      this.form.value.mensaje ?? ''
    );

    this.rsvp
      .submit(formData)
      .subscribe({

        next: () => {

          this.loading = false;

          this.success = true;

          this.error = false;

          this.form.reset({

            nombre: '',
            telefono: '',
            mensaje: ''

          });

          setTimeout(() => {

            console.log(
              'ANTES:',
              this.success
            );

            this.success = false;
            this.cdr.detectChanges();
            console.log(
              'DESPUÉS:',
              this.success
            );

          }, 6000);
        },

        error: (err) => {

          console.error(err);

          this.loading = false;

          this.success = false;

          this.error = true;

          setTimeout(() => {
          this.cdr.detectChanges();
          this.error = false;

        }, 6000);

        }

      });

  }

}
