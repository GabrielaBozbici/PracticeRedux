import { createStore } from 'redux';
import { appReducers } from './reducers';


const store = createStore(appReducers);


store.subscribe(() => {
    console.log('State app: ', store.getState())
})

export default store;