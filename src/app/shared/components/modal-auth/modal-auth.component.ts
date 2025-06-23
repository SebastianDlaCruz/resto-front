import { Component, ElementRef, signal, ViewChild } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIcon, provideIcons, provideNgIconsConfig } from '@ng-icons/core';
import { featherX } from '@ng-icons/feather-icons';
import { CustomInputConfig, CustomInputType } from '../custom-input';
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
    },
    {
      ref: 'password',
      label: 'Contraseña',
      type: CustomInputType.PASSWORD,
    }
  ];

  inputsSignUp: CustomInputConfig[] = [
    {
      ref: 'email',
      label: 'Correo ',
      type: CustomInputType.EMAIL,
    },
    {
      ref: 'name',
      label: 'Nombre',
      type: CustomInputType.TEXT,
    },
    {
      ref: 'password',
      label: 'Contraseña',
      type: CustomInputType.PASSWORD,
    },
    {
      ref: 'confirmPassword',
      label: 'Confirmar Contraseña',
      type: CustomInputType.PASSWORD,
    },
  ]


  isSignIn = signal(true);

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

    } else {


    }

  }
}
