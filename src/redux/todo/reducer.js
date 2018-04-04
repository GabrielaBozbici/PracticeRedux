export default function reducer (state = {
    list: [
        {
            text: "Be happy",
            done: false,
            date: new Date().getTime(),
            id:'11'
        },
        {
            text: "Clean home",
            done: false,
            date: new Date().getTime(),
            id:'22'
        },
        {
            text: "Arrange stuff",
            done: false,
            date: new Date().getTime(),
            id:'33'
        },
        {
            text: "Buy tickets",
            done: false,
            date: new Date().getTime(),
            id:'44'
        },
        {
            text: "Travel",
            done: false,
            date: new Date().getTime(),
            id:'55'
        },
        {
            text: "Love yourself",
            done: false,
            date: new Date().getTime(),
            id:'66'
        }
    ]
}, action) {
    switch(action.type) {
        case 'ADD_TODO': {
            return {
                ...state,
                list: [
                    ...state.list,
                    action.payload
                ]
            }
        }

        case 'EDIT_TODO': {
            let newList = state.list;

            let found = newList.find(function(element) {
                return element.id === action.payload.id
            });

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

        case 'EDIT_DONE': {
            let newList = state.list;

            let found = newList.find(function(element) {
                return element.id === action.payload.id
            });
            console.log('Reducer: ', action.payload)

            let idx = newList.indexOf(found);
            newList[idx] = action.payload;
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