import {createAsyncThunk} from '@reduxjs/toolkit';
import axiosApi from '../../axiosApi';
import {ApiCategories, ApiTransaction, ApiTransactions, Category, CategoryMutation, Transaction} from '../../types';

export const createTransaction = createAsyncThunk<void, ApiTransaction>(
  'transaction/create',
  async (transaction) => {
    await axiosApi.post('/transactions.json', transaction);
  }
);

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


export const fetchAllTransactions = createAsyncThunk<Transaction[], Category[]>(
  'transaction/fetchAll',
  async (categories) => {
    const response = await axiosApi.get<ApiTransactions | null>('/transactions.json');
    const transactions = response.data;
    
    if (!transactions) {
      return [];
    }
    
    const transformedTransactions: Transaction[] = Object.keys(transactions).flatMap((id) => {
      const transaction = transactions[id];
      
      return categories
        .filter((category) => category.id === transaction.category)
        .map((category) => ({
          id,
          amount: transaction.amount,
          createdAt: transaction.createdAt,
          category: category.name,
          type: category.type,
        }));
    });
    
    return transformedTransactions;
    
    // const activeTrans: Transaction[] = [];
    //
    // const fetchedTransaction = Object.keys(transactions).map((id) => {
    //   const transaction = transactions[id];
    //
    //   const newTransactions = categories.filter((category) => category.id === transaction.category);
    //
    //   newTransactions.map((t) => {
    //     activeTrans.push({
    //       id,
    //       amount: transaction.amount,
    //       createdAt: transaction.createdAt,
    //       category: t.name,
    //       type: t.type
    //     });
    //   });
    //
    // });
    //
    // return activeTrans;
  }
);