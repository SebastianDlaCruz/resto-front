/**
 * Modelo del body del para loguearse - singIn
 */

export interface SingIn {
  email: string;
  password: string;
}

/**
 * Modelo del body del para crear un nuevo usuario - singUp
 */

export interface SingUp extends SingIn {
  name: string;
}

/**
 * Modelo de autenticación - rol
 */

export interface AuthRol {
  authRol: string;
}
