export interface SingIn {
  email: string;
  password: string;
}

export interface SingUp extends SingIn {
  name: string;
}


export interface AuthRol {
  authRol: string;
}
