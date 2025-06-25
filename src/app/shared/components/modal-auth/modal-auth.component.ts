import { Component, ElementRef, inject, signal, ViewChild } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthHttpService } from '@core/http';
import { SingIn } from '@core/models';
import { setStateAuth } from '@core/store';
import { NgIcon, provideIcons, provideNgIconsConfig } from '@ng-icons/core';
import { featherX } from '@ng-icons/feather-icons';
import { Store } from '@ngrx/store';
import { CustomInputConfig, CustomInputType, CustomInputValidatorsType } from '../custom-input';
import { CustomInputComponent } from '../custom-input/custom-input.component';


@Component({
  selector: 'app-modal-auth',
  imports: [NgIcon, CustomInputComponent, ReactiveFormsModule],
  templateUrl: './modal-auth.component.html',
  styleUrl: './modal-auth.component.css',
  providers: [provideIcons({ featherX }), provideNgIconsConfig({
    color: "black",
    size: "1.7rem"
  })]
})
export class ModalAuthComponent {

  @ViewChild('modal', { static: true }) modal!: ElementRef<HTMLDialogElement>;

  private readonly authHttp = inject(AuthHttpService);
  private readonly store = inject<Store<{ stateAuth: boolean }>>(Store)

  iconX = featherX;

  formSignIn = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.email, Validators.required]),
  })


  formSingUp = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    name: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required]),
  });



  inputsSingIn: CustomInputConfig[] = [
    {
      ref: 'email',
      label: 'Correo electrónico',
      type: CustomInputType.EMAIL,
      formControlName: 'email',
      control: this.formSignIn.get('email') as FormControl,
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
      control: this.formSignIn.get('password') as FormControl,
      validators: [
        {
          valid: CustomInputValidatorsType.REQUERID,
          message: 'El password  es requerido.'
        }
      ]
    }
  ];

  inputsSignUp: CustomInputConfig[] = [
    {
      ref: 'email',
      label: 'Correo ',
      type: CustomInputType.EMAIL,
      formControlName: 'email',
      control: this.formSingUp.get('email') as FormControl
    },
    {
      ref: 'name',
      label: 'Nombre',
      type: CustomInputType.TEXT,
      formControlName: 'name',
      control: this.formSingUp.get('name') as FormControl
    },
    {
      ref: 'password',
      label: 'Contraseña',
      type: CustomInputType.PASSWORD,
      formControlName: 'password',
      control: this.formSingUp.get('password') as FormControl
    },
    {
      ref: 'confirmPassword',
      label: 'Confirmar Contraseña',
      type: CustomInputType.PASSWORD,
      formControlName: 'confirmPassword',
      control: this.formSingUp.get('confirmPassword') as FormControl
    }
  ]


  isSignIn = signal(true);

  validSingIn(name: string) {
    return this.formSignIn.get(name)
  }

  validSingUp(name: string) {
    return this.formSingUp.get(name)
  }


  onSignIn() {
    this.isSignIn.set(true);
  }

  onSignUp() {
    this.isSignIn.set(false);
  }

  open() {
    if (this.modal) {
      this.modal.nativeElement.showModal();
    }
  }

  close() {
    if (this.modal) {
      this.modal.nativeElement.close();
      this.onSignIn();
    }
  }

  onSubmit() {

    if (this.isSignIn()) {

      if (this.formSignIn.valid) {

        this.authHttp.singIng(this.formSignIn.value as SingIn).subscribe({
          next: (value) => {
            this.store.dispatch(setStateAuth({
              stateAuth: true
            }))
          }
        })

      } else {
        this.formSignIn.markAllAsTouched();
      }

    }


    if (!this.isSignIn()) {

      if (this.formSingUp.valid) {

      } else {
        this.formSingUp.markAllAsTouched();
      }

    }

  }
}
