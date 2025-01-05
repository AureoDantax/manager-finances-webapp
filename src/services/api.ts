import axios from 'axios';
import { Category } from '../types';


const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL, 
  timeout: 5000,
  headers: { 'Content-Type': 'application/json' }
});



export const getCategories = async () => {
    try {
        const response = await api.get('/categoria/list');
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar categorias:', error);
        throw error;
    }
};

export const createCategory = async (category: {name: string}) => {
  try {
    const response = await api.post('categoria/create', category);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar categoria:', error);
    throw error;
  }
}

export const getItems = async () => {
    try {
        const response = await api.get('/item/list');
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar itens:', error);
        throw error;
    }
};

export const createItem = async (item: {nome: string, categoria: Category, valor: number, dataRegistro:string}) => {
    try {
      console.log('Item criado:', item);
        const response = await api.post('item/create', item);
        return response.data;
    } catch (error) {
      console.error('Erro ao criar item:', error);
      throw error;
    }
};

export const getBalance = async () => {
  try {
    const response = await api.get('/balanco');
    return response.data
  } catch (error) {
    console.error('Erro ao buscar o balanço:', error);
    throw error;
  }
}

export default api;