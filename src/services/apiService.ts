import api from '../config/axiosConfig';
import { Category } from '../types';






export const getCategories = async () => {
    try {
        const response = await api.get('/categories');
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar categorias:', error);
        throw error;
    }
};

export const createCategory = async (category: {name: string}) => {
  try {
    const response = await api.post('/categories', category);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar categoria:', error);
    throw error;
  }
}

export const getItems = async () => {
    try {
        const response = await api.get('/transactions');
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar itens:', error);
        throw error;
    }
};

export const createItem = async (item: {description: string, category: Category, value: number, registerDate:string}) => {
    try {
        const response = await api.post('/transactions', item);
        return response.data;
    } catch (error) {
      console.error('Erro ao criar item:', error);
      throw error;
    }
};

export const getBalance = async () => {
  try {
    const response = await api.get('/transactions/balance');
    return response.data
  } catch (error) {
    console.error('Erro ao buscar o balanço:', error);
    throw error;
  }
}

export const authWithEmailPassword = async (email: string, password: string) => {
  try {
    const response = await api.post('/auth/login', { email, password });
    return response;
  } catch (error) {
    console.error('Erro ao autenticar com email/senha:', error);
    throw error;
  }
}
export const signUpWithEmailPassword = async (firstName: string, lastName: string, email: string, password: string) => {
  try {
    const response = await api.post('/auth/sign-up', { firstName, lastName, email, password });
    return response;
  } catch (error) {
    console.error('Erro ao cadastrar com email/senha:', error);
    throw error;
  }
}

export default api;
