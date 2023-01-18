import { v4 as uuidv4 } from 'uuid';

const initialState= {
    shop_items: [
        {
            id: 'sd1',
            text: {
                title: 'Bhindi',
                area: "Mumbai Suburban",
                category: "Grocery",
                opn_date: "2021-2-2",
                cls_date: "2021-2-19"
            }
            
        },
        { 
            id: 'sd2',
            text: {
                title: 'Rounder',
                area: "Thane",
                category: "Stationery", 
                opn_date: "2021-2-12",
                cls_date: "2021-2-14"
            }
            
        },
        {
            id: 'sd3',
            text: {
                title: 'Chocolate Cake',
                area: "Pune",
                category: "Baker",
                opn_date: "2022-12-09",
                cls_date: "2022-12-09"
            }
            
        },
        {
            id: 'sd4',
            text: {
                title: 'Paracetamol',
                area: "Nagpur",
                category: "Chemist",
                opn_date: "2022-12-09",
                cls_date: "2022-12-10"
            }
            
        },
    ]
}


const shoppingReducers = (state=initialState, action) => {
    switch(action.type) {
        case ("ADD_TODO"):
            const ShoppingWithId = {
                id: uuidv4(),
                text: action.payload.data,
            };
            return{
                ...state,
                shop_items: [...state.shop_items, ShoppingWithId]
            }

        case ("DELETE_TODO"):
            return{
                ...state,
                shop_items: state.shop_items.filter((shop) => shop.id !== action.payload.id)
            }
        default:
            return state
            
    }
}

export default shoppingReducers;
