export default function reducer (state = {}, action) {
    switch(action.type) {
        case 'ADD_TODO': {
            console.log('primeste', action )
            return {
                ...state,
                text: action.payload

            }
        }

        case 'EDIT_TODO': {
            return {
                ...state,
                id: action.payload
            }
        }

        case 'DELETE_TODO':{
            return {
                ...state,
                id: action.payload
            }
        }

        default: {
            return { ...state };
        }
    }
}