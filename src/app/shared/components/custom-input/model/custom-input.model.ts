import { FormControl } from "@angular/forms";


/**
 * tipos de input
 */
export enum CustomInputType {
  TEXT = 'text',
  PASSWORD = 'password',
  EMAIL = 'email',
  NUMBER = 'number',
  TEL = 'tel'
}

/**
 * tipos de validaciones
 */
export enum CustomInputValidatorsType {
  REQUERID = 'touched',
  EMAIL = 'email',

}

/**
 *  tipos de validaciones
 */
interface CustomInputValidators {
  valid: string;
  message: string;

}


/**
 * configuración de input
 */
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
  hasError?: boolean;
}
