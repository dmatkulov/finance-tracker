import {CategoryMutation, Transaction} from '../../types';
import {createSlice} from '@reduxjs/toolkit';
import {fetchCategoryPreview} from './transactionThunks';
import {RootState} from '../../app/store';

interface TransactionState {
  transactions: Transaction[];
  categoryPreview: CategoryMutation[];
  fetchPreviewLoading: boolean;
}

const initialState: TransactionState = {
  transactions: [],
  categoryPreview: [],
  fetchPreviewLoading: false,
};

export const transactionSlice = createSlice({
  name: 'transaction',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchCategoryPreview.pending, (state) => {
      state.fetchPreviewLoading = true;
    });
    builder.addCase(fetchCategoryPreview.fulfilled, (state, {payload: categories}) => {
      state.fetchPreviewLoading = false;
      state.categoryPreview = categories;
    });
    builder.addCase(fetchCategoryPreview.rejected, (state) => {
      state.fetchPreviewLoading = false;
    });
  }
});


export const transactionReducer = transactionSlice.reducer;

export const selectCategoryPreview = (state: RootState) => state.transaction.categoryPreview;
export const selectPreviewLoading = (state: RootState) => state.transaction.fetchPreviewLoading;