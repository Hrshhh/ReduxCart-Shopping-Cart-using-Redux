const initialState={
    Area_Categories: [
        {id1: 'a0',area: null},
        {id1: 'a1',area: 'Thane'}, 
        {id1: 'a2',area: 'Pune'}, 
        {id1: 'a3',area: 'Mumbai Suburban'},
        {id1: 'a4',area: 'Nashik'}, 
        {id1: 'a5',area: 'Nagpur'}, 
        {id1: 'a6',area: 'Ahmednagar'},
        {id1: 'a7',area: 'Solapur'}, 
        {id1: 'a8',area: 'Jalgaon'},
        {id2: 'c0',category: null},
        {id2: 'c1',category: 'Butcher'}, 
        {id2: 'c2',category: 'Grocery'}, 
        {id2: 'c3',category: 'Baker'},
        {id2: 'c4',category: 'Chemist'}, 
        {id2: 'c5',category: 'Stationery'}, 
        {id2: 'c6',category: 'Florist'}
    ]
}

        

const totalAreaCategories = (state=initialState, action) => {
    return{
        ...state,
    }
}

export default totalAreaCategories;