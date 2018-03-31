export default function reducer (state = {
    list: []
}, action) {
    switch(action.type) {
        case 'ADD_TODO': {
            // console.log('primeste', action.payload.text )
            // console.log('state: ', state)
            return {
                ...state,
                list: [
                    ...state.list,
                    action.payload
                ]
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