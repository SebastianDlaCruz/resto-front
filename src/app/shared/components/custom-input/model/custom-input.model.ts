export enum CustomInputType {
  TEXT = 'text',
  PASSWORD = 'password',
  EMAIL = 'email',
  NUMBER = 'number',
  TEL = 'tel',
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
}
