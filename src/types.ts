// src/types.ts

export interface Category {
    id: string;
    name: string;
    tag: string;
    cor: string;
    despesa: boolean;
}

export interface Item {
  id: string;
  nome: string;
  valor: number;
  categoria: Category;
  dataRegistro: string;
}