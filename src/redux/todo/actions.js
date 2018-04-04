
export const addTodo = (todo) => {
    // console.log('item din actiune: ', todo)
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

export const editDone = (item) => {
    console.log('Action creater: ', item)
    return {
        type: "EDIT_DONE",
        payload: item
    }
}



export const deleteTodo = (todoId) => {
    return {
        type: "DELETE_TODO",
        payload: todoId
    }
}
