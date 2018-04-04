import { createStore } from 'redux';
import { appReducers } from './reducers';


const store = createStore(appReducers);


store.subscribe(() => {
    console.log('State-ul app-ului: ', store.getState())
})

export default store;