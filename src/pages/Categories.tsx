// src/pages/Categories.tsx
import React, { useState, useEffect } from 'react';
import { getCategories, createCategory } from '../services/api';
import { Category } from '../types';
import styled from 'styled-components';
import { SketchPicker } from 'react-color';

const CategoriesContainer = styled.div`
    padding: 20px;
`;

const CategoriesHeader = styled.h1`
    font-size: 2em;
    margin-bottom: 20px;
    color: #333;
`;

const CategoryList = styled.ul`
    list-style: none;
    padding: 0;
    margin-bottom: 20px;
`;

const CategoryItem = styled.li`
    background-color: #f9f9f9;
    border: 1px solid #eee;
    border-radius: 8px;
    padding: 10px 15px;
    margin-bottom: 10px;
`;

const CategoryForm = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 300px;
    margin-bottom: 20px;
`;

const CategoryLabel = styled.label`
    margin-bottom: 5px;
    font-size: 1.1em;
    color: #555;
`

const CategoryInput = styled.input`
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 10px;
    font-size: 1em;
`;

const CategoryButton = styled.button`
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

const Categories: React.FC = () => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [newCategoryName, setNewCategoryName] = useState<string>('');
    const [newCategoryTag, setNewCategoryTag] = useState<string>('');
    const [newCategoryColor, setNewCategoryColor] = useState<string>('#ffffff');
    const [newCategoryIsExpense, setNewCategoryIsExpense] = useState<boolean>(false);

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

    const handleColorChange = (color: any) => {
        setNewCategoryColor(color.hex);
    }

    const handleCreateCategory = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const newCategory = {
                titulo: newCategoryName,
                tag: newCategoryTag,
                cor: newCategoryColor,
                despesa: newCategoryIsExpense
            }
            await createCategory(newCategory);
            setNewCategoryName('');
            setNewCategoryTag('');
            setNewCategoryColor('#ffffff');
            setNewCategoryIsExpense(false)
            const data = await getCategories();
            setCategories(data);
        } catch (error) {
            console.error("Erro ao criar categoria: ", error)
        }
    }

    return (
        <CategoriesContainer>
            <CategoriesHeader>Categorias</CategoriesHeader>
            <CategoryForm>
                <CategoryLabel htmlFor='name'>Nome da Categoria</CategoryLabel>
                <CategoryInput
                    type="text"
                    id="name"
                    value={newCategoryName}
                    onChange={e => setNewCategoryName(e.target.value)}
                />
                <CategoryLabel htmlFor='tag'>Tag da Categoria</CategoryLabel>
                <CategoryInput
                    type="text"
                    id="tag"
                    value={newCategoryTag}
                    onChange={e => setNewCategoryTag(e.target.value)}
                />
                 <CategoryLabel htmlFor='color'>Cor da Categoria</CategoryLabel>
                <SketchPicker
                    color={newCategoryColor}
                    onChange={handleColorChange}
                />
                <label>
                    <input
                        type="checkbox"
                        checked={newCategoryIsExpense}
                        onChange={e => setNewCategoryIsExpense(e.target.checked)}
                    />
                     É despesa?
                </label>
                <CategoryButton onClick={handleCreateCategory}>Criar Categoria</CategoryButton>
            </CategoryForm>
            <CategoryList>
                {categories.map(category => (
                    <CategoryItem key={category.id}>{category.titulo}</CategoryItem>
                ))}
            </CategoryList>
        </CategoriesContainer>
    );
};

export default Categories;