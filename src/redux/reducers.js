import { combineReducers } from 'redux';
import todos from './todo/reducer';

export const appReducers = combineReducers({
    todos
});