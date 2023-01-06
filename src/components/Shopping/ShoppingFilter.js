import React from 'react';
import './ShoppingFilter.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectArea } from '../../actions';
import { selectCategory } from '../../actions';

const ShoppingFilter = () => {
  const {Area_Categories} = useSelector((statee) => ({Area_Categories: statee.totalAreaCategories.Area_Categories}))

  // console.log("Areas ", Area_Categories);
  const dispatch = useDispatch();
  
  const areas = [Area_Categories.filter((ct) => {
    return( ct.id1 !== undefined)
  })]

  const categories = [Area_Categories.filter((ct) => {
    return( ct.id2 !== undefined)
  })]

  // console.log("Areasss:- ", areas);

  return (
    <div className='shopping-filter'>
      <div className='shopping-filter__control'>
        <label className='label-area'>Area</label>

        <select onChange={(e) => dispatch(selectArea(e.target.value))}>
          {areas[0].map((ar) => {
            return(<option key={ar.id1} value={ar.id1}>{ar.area}</option>)
          })}
        </select>
        

        <label className='label-category'>Category</label>
            <select onChange={(e) => dispatch(selectCategory(e.target.value))}>
            {categories[0].map((ct) => {
              return(<option key={ct.id2} value={ct.id2}>{ct.category}</option>)
            })}
            </select>

      </div>
    </div>
  );
};

export default ShoppingFilter;
