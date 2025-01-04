// src/pages/Transactions.tsx
import React, { useState, useEffect } from 'react';
import { getItems, createItem, getCategories } from '../services/api';
import { Item, Category } from '../types';
import styled from 'styled-components';

const TransactionsContainer = styled.div`
    padding: 20px;
`;

const TransactionsHeader = styled.h1`
    font-size: 2em;
    margin-bottom: 20px;
    color: #333;
`;

const TransactionList = styled.ul`
    list-style: none;
    padding: 0;
    margin-bottom: 20px;
`;

const TransactionItem = styled.li`
    background-color: #f9f9f9;
    border: 1px solid #eee;
    border-radius: 8px;
    padding: 10px 15px;
    margin-bottom: 10px;
`;

const TransactionForm = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 300px;
    margin-bottom: 20px;
`;

const TransactionLabel = styled.label`
    margin-bottom: 5px;
    font-size: 1.1em;
    color: #555;
`;

 const TransactionInput = styled.input`
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 10px;
    font-size: 1em;
`;

const TransactionSelect = styled.select`
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 10px;
    font-size: 1em;
`;

 const TransactionButton = styled.button`
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 15px;
    cursor: pointer;
    transition: background-color 0.3s;
    font-size: 1em;

    &:hover {
        background-color: #0056b3;
    }
`;

const Transactions: React.FC = () => {
    const [transactions, setTransactions] = useState<Item[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    const [newTransactionName, setNewTransactionName] = useState<string>('');
    const [newTransactionValue, setNewTransactionValue] = useState<number>(0);
    const [newTransactionCategory, setNewTransactionCategory] = useState<string>('');


    useEffect(() => {
        const fetchTransactions = async () => {
            try {
                const data = await getItems();
                setTransactions(data);
            } catch (error) {
                console.error('Erro ao buscar transações:', error);
            }
        };
        const fetchCategories = async () => {
            try {
                const data = await getCategories();
                setCategories(data);
            } catch (error) {
                console.error('Erro ao buscar categorias:', error)
            }
        }
        fetchTransactions();
        fetchCategories();
    }, []);

     const handleCreateTransaction = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const newTransaction = {
                nome: newTransactionName,
                valor: newTransactionValue,
                categoryId: newTransactionCategory,
            }
            await createItem(newTransaction);
            setNewTransactionName('');
            setNewTransactionValue(0);
            setNewTransactionCategory('');
            const data = await getItems();
            setTransactions(data);
        } catch (error) {
            console.error('Erro ao criar transação:', error);
        }
    }

    return (
        <TransactionsContainer>
            <TransactionsHeader>Transações</TransactionsHeader>
            <TransactionForm>
                <TransactionLabel htmlFor="name">Nome da Transação</TransactionLabel>
                <TransactionInput
                    type="text"
                    id="name"
                    value={newTransactionName}
                    onChange={e => setNewTransactionName(e.target.value)}
                />
                <TransactionLabel htmlFor="value">Valor da Transação</TransactionLabel>
                <TransactionInput
                    type="number"
                    id="value"
                    value={newTransactionValue}
                    onChange={e => setNewTransactionValue(Number(e.target.value))}
                />
                <TransactionLabel htmlFor="category">Categoria da Transação</TransactionLabel>
                <TransactionSelect
                    id="category"
                    onChange={e => setNewTransactionCategory(e.target.value)}
                >
                     <option value="">Selecione uma categoria</option>
                    {categories.map(category => (
                        <option key={category.id} value={category.id}>{category.titulo}</option>
                    ))}
                </TransactionSelect>
                <TransactionButton onClick={handleCreateTransaction}>Criar Transação</TransactionButton>
            </TransactionForm>
            <TransactionList>
                {transactions.map(transaction => (
                    <TransactionItem key={transaction.id}>{transaction.nome}</TransactionItem>
                ))}
            </TransactionList>
        </TransactionsContainer>
    );
};

export default Transactions;