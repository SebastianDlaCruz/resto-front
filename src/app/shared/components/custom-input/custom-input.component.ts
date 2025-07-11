
import { Component, input, signal } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { featherEye, featherEyeOff } from '@ng-icons/feather-icons';
import { CustomInputConfig, CustomInputType, CustomInputValidatorsType } from './model/custom-input.model';

/**
 * componente input personalizado
 * input recibe un objeto de configuración para establecer las propiedades del input
 * config : CustomInputConfig
 * @example {
 * label: 'Nombre',
 *   placeholder: 'Ingrese su nombre',
 *   type: CustomInputType.Text,
 *   validators: [Validators.required]
 * }
 *
 */


@Component({
  selector: 'app-custom-input',
  imports: [NgIcon, ReactiveFormsModule],
  templateUrl: './custom-input.component.html',
  styleUrl: './custom-input.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: CustomInputComponent,
      multi: true
    },
    provideIcons({ featherEye, featherEyeOff })
  ]
})
export class CustomInputComponent implements ControlValueAccessor {

  config = input.required<CustomInputConfig>()

  value: any = "";
  type = CustomInputType;
  iconEyed = featherEye;
  iconEyeOff = featherEyeOff;
  typeValid = CustomInputValidatorsType;

  visiblePassword = signal(false);

  onChange: (value: any) => void = () => { };
  onTouched: () => void = () => { };


  writeValue(value: any): void {
    this.config().control.setValue(value, { emitEvent: true });
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
