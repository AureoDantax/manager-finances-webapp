// src/types.ts

export interface Category {
    id: string;
    titulo: string;
    tag: string;
    cor: string;
    despesa: boolean;
}

export interface Item {
  id: string;
  name: string;
  value: number;
  categoryId: string;
  date: string;
}