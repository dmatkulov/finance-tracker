import React, {useEffect} from 'react';
import CategoryItem from './CategoryItem';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {selectCategories, selectDeleteLoading, selectFetchLoading} from '../../store/category/categorySlice';
import Spinner from '../Spinner/Spinner';
import {deleteCategory, fetchAllCategories} from '../../store/category/categoryThunks';

const CategoryList: React.FC = () => {
  const dispatch = useAppDispatch();
  const categories = useAppSelector(selectCategories);
  const loading = useAppSelector(selectFetchLoading);
  const deleteLoading = useAppSelector(selectDeleteLoading);
  
  useEffect(() => {
    void dispatch(fetchAllCategories());
  }, [dispatch]);
  
  const onDeleteCategory = async (id: string) => {
    if (window.confirm('Do you want to delete category')) {
      await dispatch(deleteCategory(id));
    }
    await dispatch(fetchAllCategories());
  };
  
  return (
    <div>
      {loading && <Spinner/>}
      {categories.map((category) => (
        <CategoryItem
          key={category.id}
          category={category}
          deleteLoading={deleteLoading}
          onDelete={() => onDeleteCategory(category.id)}
        />
      ))}
    </div>
  );
};

export default CategoryList;