export const addTodo = (shop) => {
    return{
        type: "ADD_TODO",
        payload: {
            data: shop
        }
    }
}

export const deleteTodo = (id) => {
    return{
        type: "DELETE_TODO",
        payload: {
            id: id
        }
    }
}

export const selectArea = (id) => {
    return{
        type: "SELECT_AREA",
        payload: id
        
    }
}

export const selectCategory = (id) => {
    return{
        type: "SELECT_CATEGORY",
        payload: id
    }
}
