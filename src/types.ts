// src/types.ts

export interface Category {
    id: string;
    name: string;
    tag: string;
    color: string;
    expense: boolean;
}

export interface Item {
  id: string;
  name: string;
  value: number;
  category: Category;
  registerDate: string;
}