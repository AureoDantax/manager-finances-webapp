/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from 'react';
import { getCategories, createCategory } from '../services/api';
import { Category } from '../types';
import {
  Box,
  Typography,
  List,
  ListItem,
  TextField,
  Button,
  FormControlLabel,
  Switch,
} from '@mui/material';
import { styled } from '@mui/system';
import { SketchPicker } from 'react-color';
import Modal from '../components/Modal';
import Notification from '../components/Notification';
import { motion } from 'framer-motion'

const CategoriesContainer = styled(Box)({
  padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
});

const CategoryList = styled(List)({
  marginBottom: '20px',
  width: '100%',
    maxWidth: '600px',
});

const CategoryItem = styled(ListItem)<{ categoryColor?: string }>(({categoryColor}) => ({
  backgroundColor: categoryColor,
  border: '1px solid #eee',
  borderRadius: '8px',
  padding: '10px 15px',
  marginBottom: '10px',
   '& .MuiTypography-root':{
        color: 'white',
        fontWeight: 'bold',
    }
}));

const AddCategoryButton = styled(Button)`
    margin-bottom: 20px;
    color: #ffffff;
`;

const CategoryForm = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '300px',
  marginBottom: '20px',
});

const Categories: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [newCategoryName, setNewCategoryName] = useState<string>('');
  const [newCategoryTag, setNewCategoryTag] = useState<string>('');
  const [newCategoryColor, setNewCategoryColor] = useState<string>('#ffffff');
  const [newCategoryIsExpense, setNewCategoryIsExpense] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');
  const [isNotificationVisible, setIsNotificationVisible] = useState(false);
    const [notificationType, setNotificationType] = useState< 'success' | 'error'>('success');

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getCategories();
        setCategories(data);
      } catch (error) {
        console.error('Erro ao buscar categorias:', error);
      }
    };
    fetchCategories();
  }, []);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleColorChange = (color: any) => {
    setNewCategoryColor(color.hex);
  };

  const handleCloseNotification = () => {
    setIsNotificationVisible(false);
  };
  const handleCreateCategory = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const newCategory = {
        titulo: newCategoryName,
        tag: newCategoryTag,
        cor: newCategoryColor,
        despesa: newCategoryIsExpense,
      };
      await createCategory(newCategory);
       setNewCategoryName('');
        setNewCategoryTag('');
       setNewCategoryColor('#ffffff');
      setNewCategoryIsExpense(false)
      const data = await getCategories();
      setCategories(data);
      handleCloseModal();
       setNotificationMessage("Categoria criada com sucesso!");
       setNotificationType('success');
     setIsNotificationVisible(true);
    } catch (error: any) {
      setNotificationMessage(`Erro ao criar categoria: ${error.message}`);
     setNotificationType('error');
        setIsNotificationVisible(true);
    }
  };

  return (
    <>
    <CategoriesContainer>
      
      <Notification
        message={notificationMessage}
        isVisible={isNotificationVisible}
        onClose={handleCloseNotification}
          type={notificationType}
      />
      <Typography variant="h4" component="h1" sx={{ marginBottom: '20px' }}>
        Categorias
      </Typography>
       <AddCategoryButton  variant="contained" color="primary" onClick={handleOpenModal}>Adicionar Categoria</AddCategoryButton>
      <Modal title="Criar Categoria" isOpen={isModalOpen} onClose={handleCloseModal}>
        <CategoryForm onSubmit={handleCreateCategory}>
          <TextField
            label="Nome da Categoria"
            value={newCategoryName}
            onChange={(e) => setNewCategoryName(e.target.value)}
            sx={{ marginBottom: '10px' }}
          />
            <TextField
             label="Tag da Categoria"
            value={newCategoryTag}
            onChange={(e) => setNewCategoryTag(e.target.value)}
            sx={{ marginBottom: '10px' }}
          />
          <Box sx={{marginBottom: '10px'}}>
            <Typography variant="subtitle1" sx={{marginBottom: '5px'}}>Cor da Categoria</Typography>
             <SketchPicker
            color={newCategoryColor}
             onChange={handleColorChange}
               />
          </Box>
            <FormControlLabel
              control={
                  <Switch
                      checked={newCategoryIsExpense}
                      onChange={(e) => setNewCategoryIsExpense(e.target.checked)}
                      color="primary"
                  />
               }
              label="É despesa?"
            />
            <Button type="submit" variant="contained" color="primary">
              Criar Categoria
           </Button>
        </CategoryForm>
      </Modal>
      <CategoryList>
        {categories.map((category) => (
             <motion.div whileHover={{ scale: 1.05}}>
            <CategoryItem key={category.id} categoryColor={category.cor}>
              <Typography variant="body1">{category.titulo}</Typography>
            </CategoryItem>
            </motion.div>
        ))}
      </CategoryList>
    </CategoriesContainer>
    </>
  );
};

export default Categories;