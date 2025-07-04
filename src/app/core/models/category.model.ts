/**
 * Modelo categoria
 */

export interface Category {
  img: string;
  name: string;
}


export interface CategoryCreate {
  img: File;
  name: string;
}