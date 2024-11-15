// apiService.ts
import axios from 'axios';
import dotenv from 'dotenv';

// Carregar variáveis de ambiente do arquivo .env
dotenv.config();

// Configuração da instância do axios
const api = axios.create({
  baseURL: process.env.API_URL, // URL base da sua API
  timeout: 1000,
  headers: { 'Content-Type': 'application/json' }
});

// Função para obter dados
export const getData = async () => {
  try {
    const response = await api.get('/endpoint'); // Substitua '/endpoint' pelo endpoint real
    return response.data;
  } catch (error) {
    console.error('Erro ao obter dados:', error);
    throw error;
  }
};