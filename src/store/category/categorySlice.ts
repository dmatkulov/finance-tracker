import {Category} from '../../types';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../../app/store';
import {createCategory, deleteCategory, fetchAllCategories} from './categoryThunks';

interface CategoryState {
  categories: Category[];
  createLoading: boolean;
  fetchLoading: boolean;
  updateLoading: boolean;
  deleteLoading: false | string;
  show: boolean;
}

const initialState: CategoryState = {
  categories: [],
  createLoading: false,
  fetchLoading: false,
  updateLoading: false,
  deleteLoading: false,
  show: false,
};

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    showCategoryModal: (state, action: PayloadAction<boolean>) => {
      state.show = action.payload;
    }
  },
  extraReducers: builder => {
    builder.addCase(createCategory.pending, (state) => {
      state.createLoading = true;
    });
    builder.addCase(createCategory.fulfilled, (state) => {
      state.createLoading = false;
    });
    builder.addCase(createCategory.rejected, (state) => {
      state.createLoading = false;
    });
    
    builder.addCase(fetchAllCategories.pending, (state) => {
      state.fetchLoading = true;
    });
    builder.addCase(fetchAllCategories.fulfilled, (state, {payload: categories}) => {
      state.fetchLoading = false;
      state.categories = categories;
    });
    builder.addCase(fetchAllCategories.rejected, (state) => {
      state.fetchLoading = false;
    });
    
    builder.addCase(deleteCategory.pending, (state, {meta}) => {
      state.deleteLoading = meta.arg;
    });
    builder.addCase(deleteCategory.fulfilled, (state) => {
      state.deleteLoading = false;
    });
    builder.addCase(deleteCategory.rejected, (state) => {
      state.deleteLoading = false;
    });
  }
});

export const categoryReducer = categorySlice.reducer;
export const {
  showCategoryModal,
} = categorySlice.actions;

export const selectCategories = (state: RootState) => state.categories.categories;
export const selectCategoryModal = (state: RootState) => state.categories.show;
export const selectCreateLoading = (state: RootState) => state.categories.createLoading;
export const selectFetchLoading = (state: RootState) => state.categories.fetchLoading;
export const selectUpdateLoading = (state: RootState) => state.categories.updateLoading;
export const selectDeleteLoading = (state: RootState) => state.categories.deleteLoading;