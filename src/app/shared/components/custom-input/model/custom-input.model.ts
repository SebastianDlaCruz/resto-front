import { FormControl } from "@angular/forms";

export enum CustomInputType {
  TEXT = 'text',
  PASSWORD = 'password',
  EMAIL = 'email',
  NUMBER = 'number',
  TEL = 'tel',
}


export enum CustomInputValidatorsType {
  REQUERID = 'touched',
  EMAIL = 'email'
}


interface CustomInputValidators {
  valid: string;
  message: string;

}

export interface CustomInputConfig {
  type: CustomInputType,
  label: string;
  ref: string;
  placeholder?: string;
  value?: string;
  disabled?: boolean;
  required?: boolean;
  pattern?: string;
  min?: number;
  max?: number;
  visible?: boolean;
  minLength?: number;
  maxLength?: number;
  formControlName: string;
  control: FormControl;
  validators?: CustomInputValidators[];
}
