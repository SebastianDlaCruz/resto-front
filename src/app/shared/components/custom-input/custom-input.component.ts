
import { Component, input, signal } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALUE_ACCESSOR, ValidationErrors, Validator, Validators } from '@angular/forms';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { featherEye, featherEyeOff } from '@ng-icons/feather-icons';
import { CustomInputConfig, CustomInputType } from './model/custom-input.model';

@Component({
  selector: 'app-custom-input',
  imports: [NgIcon],
  templateUrl: './custom-input.component.html',
  styleUrl: './custom-input.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: CustomInputComponent,
      multi: true
    },
    {
      provide: Validators,
      useExisting: CustomInputComponent,
      multi: true
    },
    provideIcons({ featherEye, featherEyeOff })
  ]
})
export class CustomInputComponent implements ControlValueAccessor, Validator {

  config = input.required<CustomInputConfig>()

  value: any = "";
  type = CustomInputType;
  iconEyed = featherEye;
  iconEyeOff = featherEyeOff;

  visiblePassword = signal(false);

  onChange: (value: any) => void = () => { };
  onTouched: () => void = () => { };
  onValidatorChange: () => void = () => { };

  errors: ValidationErrors | null = null;


  validate(control: AbstractControl): ValidationErrors | null {
    const validators = [];

    if (this.config().required) {
      validators.push(Validators.required);

    }

    if (this.config().pattern) {
      validators.push(Validators.pattern(this.config().pattern ?? ''));
    }

    if (this.config().minLength) {
      validators.push(Validators.minLength(this.config().minLength ?? 0));
    }

    if (this.config().maxLength) {
      validators.push(Validators.maxLength(this.config().maxLength ?? Infinity));
    }

    if (this.config().min !== undefined) {
      validators.push(Validators.min(this.config().min ?? -Infinity));
    }

    if (this.config().max !== undefined) {
      validators.push(Validators.max(this.config().max ?? Infinity));
    }

    if (this.config().type === 'email') {
      validators.push(Validators.email);
    }

    const validatorFn = Validators.compose(validators);
    this.errors = validatorFn ? validatorFn(control) : null;

    return this.errors;

  }

  registerOnValidatorChange?(fn: () => void): void {
    this.onValidatorChange = fn;
  }

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: (value: any) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.config().disabled = isDisabled;
  }

  onInputChange(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.value = value;
    this.onChange(value);
    this.onTouched();
  }


  onVisibilityToggle(): void {
    this.visiblePassword.set(!this.visiblePassword());
  }

}
