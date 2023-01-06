import React from 'react';
import Card from '../UI/Card';
import './ShoppingItem.css';
import { useDispatch,useSelector } from 'react-redux';
import { deleteTodo } from '../../actions';

const ShoppingItem = () => {
  const {Area_Categories} = useSelector((statee) => ({Area_Categories: statee.totalAreaCategories.Area_Categories}))
  const {selectedArea} = useSelector((statee) => ({selectedArea: statee.selectAreaaCategoryy.selectedArea}))
  const {selectedCategory} = useSelector((statte) => ({selectedCategory: statte.selectAreaaCategoryy.selectedCategory}))

  const {shop_listt} = useSelector((Appstate) => 
  ({shop_listt: Appstate.user.shop_items
  }));
  console.log("Shop_List ", shop_listt)

  console.log("Areas ", Area_Categories);

  const filteredArea = selectedArea ? Area_Categories.filter((area) => area.id1 === selectedArea): Area_Categories;

  const filteredCategory = selectedCategory ? Area_Categories.filter((cate) => cate.id2 === selectedCategory ): Area_Categories;

  // console.log("FilteredAreas:- ", filteredArea[0].area);
  // console.log("FilteredCategories:- ", filteredCategory[0].category);

  const filteredAreasCategories = shop_listt.filter((shop) => {
    return (shop.area === filteredArea[0].area && shop.category === filteredCategory[0].category);
  });

  console.log("New Filtered List ", filteredAreasCategories)
  const dispatch = useDispatch();

  // console.log("Selected Area ", selectedArea);
  // console.log("Selected Category ", selectedCategory);

  let finale = (selectedArea === null || (selectedArea === "a0" &&  selectedCategory === "c0") || selectedCategory === null ? shop_listt : filteredAreasCategories)

  console.log("Sd:- ", finale);
  // console.log("True/False ",(selectedArea && selectedCategory));

  return (
    
    finale.map((elem) => {
      return ( <Card className='shopping-item'>
      {elem.opn_date} 
        <div className='shopping-item__description'>
          <h2>{elem.title}</h2>
          <div className='shopping-item__area'>{elem.area}</div>
          <div className='shopping-item__cat'>{elem.category}</div>
        </div>
        {elem.cls_date}
        <button onClick={() => dispatch(deleteTodo(elem.id))}>Delete</button>
      </Card>
      )
      }) 
    
  );
}
 
export default ShoppingItem;