export default function reducer (state = {
    list: []
}, action) {
    switch(action.type) {
        case 'RECEIVE_TODOS': {
            return {
                ...state,
                list: [
                    ...state.list,
                    action.payload
                ]
            }
        }
        // case 'ADD_TODO': {
        //     return {
        //         ...state,
        //         list: [
        //             ...state.list,
        //             action.payload
        //         ]
        //     }
        // }
        case 'EDIT_TODO': {
            let newList = state.list;
            let found = newList.find(function(element) {
                return element.id === action.payload.id
            });
            console.log('found: ', found)

            let idx = newList.indexOf(found);
            newList[idx] = action.payload;

            //or second option: removes 1 element starting from position idx, and replaces it with new one:
            // newList.splice(idx,1,action.payload)

            console.log('found: ', found, idx, newList);

            return {
                ...state,
                list: [
                    ...newList
                ]
            }
        }

        case 'DELETE_TODO':{

            let newList = state.list;
            let found = newList.find(function(element) {
                return element.id === action.payload.id
            });

            let idx = newList.indexOf(found);
            newList.splice(idx,1); //removes 1 element starting from position idx


            return {
                ...state,
                list: [
                    ...newList
                ]
            }
        }

        default: {
            return { ...state };
        }
    }
}