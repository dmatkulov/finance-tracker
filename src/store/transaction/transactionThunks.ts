import {createAsyncThunk} from '@reduxjs/toolkit';
import axiosApi from '../../axiosApi';
import {ApiCategories, Category, CategoryMutation} from '../../types';

export const fetchCategoryPreview = createAsyncThunk<CategoryMutation[], string>(
  'transaction/fetchCategoryId',
  async (inputType) => {
    const response = await axiosApi.get<ApiCategories | null>('/categories.json');
    const categories = response.data;
    
    if (!categories) {
      return [];
    }
    
    const fetchedCategories: Category[] = Object.keys(categories).map((id) => {
      const category = categories[id];
      return {
        id,
        ...category
      };
    });
    
    const newCategories = fetchedCategories.filter((category) => category.type === inputType);
    
    return newCategories.map((category) => {
      return {
        id: category.id,
        name: category.name
      };
    });
  }
);