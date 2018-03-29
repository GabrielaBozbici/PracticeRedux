
export const addTodo = (todo) => {
    return {
        type: "ADD_TODO",
        payload: todo
    }
}


export const editTodo = (text) => {
    return {
        type: "EDIT_TODO",
        payload: text
    }
}



export const deleteTodo = (todoId) => {
    return {
        type: "DELETE_TODO",
        payload: todoId
    }
}