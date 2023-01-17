import React,{useState} from 'react';
import ShoppingForm from './ShoppingForm';
import './NewShopping.css';

const NewShopping = () => {
  const [isEditing, setIsEditing] = useState(false);
  
  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className='new-shop'>
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Shop</button>
      )}
      {isEditing && (
        <ShoppingForm onCancel={stopEditingHandler}/>
      )}
      
    </div>
  );
};

export default NewShopping;
