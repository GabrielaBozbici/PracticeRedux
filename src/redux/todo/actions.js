// We don't need this action creator because the redux store will update based on firebase 
//(see componentWillMount from App.js)
// export const addTodo = (todo) => {
//     // console.log('item din actiune: ', todo)
//     return {
//         type: "ADD_TODO",
//         payload: todo
//     }
// }


export const editTodo = (editedTodo) => {
    return {
        type: "EDIT_TODO",
        payload: editedTodo
    }
}

export const deleteTodo = (todoId) => {
    return {
        type: "DELETE_TODO",
        payload: todoId
    }
}

export const receiveTodos = (todos) => {
    console.log('Action creater receiveTodos: ', todos)
    return {
        type: "RECEIVE_TODOS",
        payload: todos
    }
}
