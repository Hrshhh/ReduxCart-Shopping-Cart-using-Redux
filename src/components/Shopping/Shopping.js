import React from 'react';
import Card from '../UI/Card';
import ShoppingFilter from './ShoppingFilter';
import './Shopping.css';
import ShoppingItem from './ShoppingItem';

const Shopping = () => {
  
  return (
    <div>
      <Card className='shops'>
        <ShoppingFilter/>
        <ShoppingItem />
      </Card>
    </div>
  );
};

export default Shopping;