import { AbstractControl, ValidationErrors } from "@angular/forms";

export const validateMatchPassword = (control: AbstractControl): ValidationErrors | null => {

  if (!control.parent) return null;

  const password = control.parent.get('password')?.value as string;
  const confirmPassword = control.parent.get('confirmPassword')?.value;


  return password !== confirmPassword
    ? { passwordMismatch: true }
    : null;
}
