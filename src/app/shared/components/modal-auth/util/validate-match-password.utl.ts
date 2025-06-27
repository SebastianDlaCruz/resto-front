import { AbstractControl, ValidationErrors } from "@angular/forms";

export const validateMatchPassword = (control: AbstractControl): ValidationErrors | null => {

  const password = control.get('password')?.value;
  const confirmPassword = control.get('confirmPassword')?.value;


  if (!password || !confirmPassword) return null;

  return password !== confirmPassword
    ? { passwordMismatch: true }
    : null;
}
