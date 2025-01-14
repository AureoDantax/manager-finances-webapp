/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    Box,
    Button,
    List,
    ListItem,
    MenuItem,
    Select,
    TextField,
    Typography,
} from '@mui/material';
import { styled } from '@mui/system';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import Modal from '../components/Modal';
import Notification from '../components/Notification';
import { createItem, getCategories, getItems } from '../services/api';
import { Category, Item } from '../types';

const TransactionsContainer = styled(Box)({
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
});

const TransactionList = styled(List)({
    marginBottom: '20px',
    width: '100%',
    maxWidth: '600px',
});

const TransactionItem = styled(ListItem)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#2196f31a' : '#f9f9f9',
    border: '1px solid #eee',
    borderRadius: '8px',
    padding: '10px 15px',
    marginBottom: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& .MuiTypography-root': {
        fontWeight: 'bold',
    },
}));

const TransactionForm = styled('form')({
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '300px',
    marginBottom: '20px',
});

const AddTransactionButton = styled(Button)({
    marginBottom: '20px',
    color: '#ffffff',
    
});


const Transactions: React.FC = () => {
    const [transactions, setTransactions] = useState<Item[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    const [newTransactionName, setNewTransactionName] = useState<string>('');
    const [newTransactionValue, setNewTransactionValue] = useState<number>(0);
    const [newTransactionCategory, setNewTransactionCategory] = useState<string>('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [notificationMessage, setNotificationMessage] = useState('');
    const [isNotificationVisible, setIsNotificationVisible] = useState(false);
    const [notificationType, setNotificationType] = useState<'success' | 'error'>('success');

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

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleCloseNotification = () => {
        setIsNotificationVisible(false);
    };

    const handleCreateTransaction = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const selectedCategory = categories.find((category) => category.id === newTransactionCategory);
            if (selectedCategory) {
                const newTransaction = {
                    name: newTransactionName,
                    value: newTransactionValue,
                    category: selectedCategory,
                    registerDate: new Date().toISOString().split('T')[0],
                };
                await createItem(newTransaction);
                setNewTransactionName('');
                setNewTransactionValue(0);
                setNewTransactionCategory('');
                const data = await getItems();
                setTransactions(data);
                handleCloseModal();
                setNotificationMessage('Transação criada com sucesso!');
                setNotificationType('success');
                setIsNotificationVisible(true);
            }
        } catch (error: any) {
            setNotificationMessage(`Erro ao criar transação: ${error.message}`);
            setNotificationType('error');
            setIsNotificationVisible(true);
        }
    };

    return (
        <TransactionsContainer>
            <Notification
                message={notificationMessage}
                isVisible={isNotificationVisible}
                onClose={handleCloseNotification}
                type={notificationType}
            />
            <Typography variant="h4" component="h1" sx={{ marginBottom: '20px' }}>
                Transações
            </Typography>
            <AddTransactionButton variant="contained" color="primary" onClick={handleOpenModal}>
                Adicionar Transação
            </AddTransactionButton>
            <Modal title="Criar Transação" isOpen={isModalOpen} onClose={handleCloseModal}>
                <TransactionForm onSubmit={handleCreateTransaction}>
                    <TextField
                        label="Nome da Transação"
                        value={newTransactionName}
                        onChange={(e) => setNewTransactionName(e.target.value)}
                        sx={{ marginBottom: '10px' }}
                    />
                    <TextField
                        label="Valor da Transação"
                        type="number"
                        value={newTransactionValue}
                        onChange={(e) => setNewTransactionValue(Number(e.target.value))}
                        sx={{ marginBottom: '10px' }}
                    />
                    <Select
                        label="Categoria da Transação"
                        value={newTransactionCategory}
                        onChange={(e) => setNewTransactionCategory(e.target.value)}
                        sx={{ marginBottom: '10px' }}
                    >
                        <MenuItem value="">Selecione uma categoria</MenuItem>
                        {categories.map((category) => (
                            <MenuItem key={category.id} value={category.id}>
                                {category.name}
                            </MenuItem>
                        ))}
                    </Select>
                    <Button type="submit" variant="contained" color="primary">
                        Criar Transação
                    </Button>
                </TransactionForm>
            </Modal>
            <TransactionList>
                {transactions.map((transaction) => (
                    <motion.div whileHover={{ scale: 1.05 }}>
                        <TransactionItem key={transaction.id}>
                            <Typography variant="body1">{transaction.name}</Typography>
                            <Typography variant="body2">{transaction.categoria.name}</Typography>
                        </TransactionItem>
                    </motion.div>
                ))}
            </TransactionList>
        </TransactionsContainer>
    );
};

export default Transactions;