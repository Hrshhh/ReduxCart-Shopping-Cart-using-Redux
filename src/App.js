import React, {useState} from 'react';
import NewShopping from './components/NewShopping/NewShopping';
import Shopping from './components/Shopping/Shopping';


const App = () => {
  // const [buying, setBuying] = useState(shop_items);

  // const addShopHandler = buy => {
  //   console.log("latrst",buy);
  //   console.log("old",buying)
  //   setBuying([...buying,...buy])
  
  // };

  // const deleteHandler =(idd) => {
  //   const removeShop = buying.filter((shop) => shop.id !== idd);
  //   setBuying(removeShop);
  // }


  return (
    <div>
      <NewShopping />
      <Shopping />
      {/* <NewShopping onAddShop={addShopHandler} />
      <Shopping items={buying} deleteShop={deleteHandler}/> */}
    </div>
  );
}

export default App;