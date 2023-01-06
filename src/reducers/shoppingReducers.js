const initialState= {
    shop_items: [
        {
            id: 'sd1',
            title: 'Bhindi',
            area: "Mumbai Suburban",
            category: "Grocery",
            opn_date: "2021-2-2",
            cls_date: "2021-2-19"
        },
        { id: 'sd2',
            title: 'Rounder',
            area: "Thane",
            category: "Stationery", 
            opn_date: "2021-2-12",
            cls_date: "2021-2-14"
        },
        {
            id: 'sd3',
            title: 'Chocolate Cake',
            area: "Pune",
            category: "Baker",
            opn_date: "2022-12-09",
            cls_date: "2022-12-09"
        },
        {
            id: 'sd4',
            title: 'Paracetamol',
            area: "Nagpur",
            category: "Chemist",
            opn_date: "2022-12-09",
            cls_date: "2022-12-10"
        },
    ]
}


const shoppingReducers = (state=initialState, action) => {
    switch(action.type) {
        case ("ADD_TODO"):
            return{
                ...state,
                shop_items: [...state.shop_items, action.payload.data]
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