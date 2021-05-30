import {createStore, combineReducers} from 'redux';
import infoReducer from './reducers';
import { reducer as formReducer } from 'redux-form'


const rootReducer = combineReducers({
    infoReducer,
    form: formReducer
})

const store = createStore(rootReducer);

export default store;