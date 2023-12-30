import React, {useEffect} from 'react';
import CategoryItem from './CategoryItem';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {selectCategories, selectFetchLoading} from '../../store/category/categorySlice';
import Spinner from '../Spinner/Spinner';
import {fetchAllCategories} from '../../store/category/categoryThunks';

const CategoryList: React.FC = () => {
  const dispatch = useAppDispatch();
  const categories = useAppSelector(selectCategories);
  const loading = useAppSelector(selectFetchLoading);
  
  useEffect(() => {
    void dispatch(fetchAllCategories());
  }, [dispatch]);
  
  return (
    <div>
      {loading && <Spinner/>}
      {categories.map((category) => (
        <CategoryItem
          category={category}
          key={category.id}
        />
      ))}
    </div>
  );
};

export default CategoryList;