import {createAsyncThunk} from '@reduxjs/toolkit';
import {ApiCategories, ApiCategory, Category} from '../../types';
import axiosApi from '../../axiosApi';

export const createCategory = createAsyncThunk<void, ApiCategory>(
  'category/create',
  async (category: ApiCategory) => {
    await axiosApi.post('/categories.json', category);
  }
);

export const fetchAllCategories = createAsyncThunk<Category[], undefined>(
  'category/fetchAll',
  async () => {
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
    
    return fetchedCategories;
  }
);

export const deleteCategory = createAsyncThunk<void, string>(
  'category/delete',
  async (id: string) => {
    await axiosApi.delete('/categories/' + id + '.json');
  }
);