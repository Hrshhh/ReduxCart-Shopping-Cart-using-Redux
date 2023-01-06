const initialState = {
    selectedArea: null,
    selectedCategory: null
}

const areaCategorySelector = ( state=initialState, action ) => {
    switch(action.type){
        case ("SELECT_AREA"):
            return{
                ...state,
                selectedArea: action.payload
            }

        case ("SELECT_CATEGORY"):
            return {
                ...state,
                selectedCategory: action.payload
            }

        default:
            return state
    }
}

export default areaCategorySelector;

// areas: ['Thane', 'Pune', 'Mumbai Suburban','Nashik', 'Nagpur', 'Ahmednagar', 'Solapur', 'Jalgaon']