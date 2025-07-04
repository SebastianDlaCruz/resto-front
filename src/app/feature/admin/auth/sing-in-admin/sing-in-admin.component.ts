import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CustomInputComponent } from '@shared/components';
import { CustomInputConfig, CustomInputType, CustomInputValidatorsType } from '@shared/components/custom-input';

/**
 * Componente de autenticación de administradores
 */

@Component({
  selector: 'app-sing-in-admin',
  imports: [CustomInputComponent, ReactiveFormsModule],
  templateUrl: './sing-in-admin.component.html',
  styleUrl: './sing-in-admin.component.css'
})
export class SingInAdminComponent {

  form = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.email, Validators.required])
  })

  inputs: CustomInputConfig[] = [

    {
      ref: 'email',
      label: 'Correo electrónico',
      type: CustomInputType.EMAIL,
      formControlName: 'email',
      control: this.form.get('email') as FormControl,
      validators: [
        {
          valid: CustomInputValidatorsType.REQUERID,
          message: 'El correo electrónico es requerido.'
        },
        {
          valid: CustomInputValidatorsType.EMAIL,
          message: 'El campo tiene que ser un correo electrónico.'
        }
      ]
    },
    {
      ref: 'password',
      label: 'Contraseña',
      type: CustomInputType.PASSWORD,
      formControlName: 'password',
      control: this.form.get('password') as FormControl,
      validators: [
        {
          valid: CustomInputValidatorsType.REQUERID,
          message: 'El password  es requerido.'
        }
      ]

    }
  ]

  onSubmit() {
    console.log(this.form.value);
  }
}
