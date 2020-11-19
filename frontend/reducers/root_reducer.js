import { combineReducers } from 'redux'
import sessionReducer from './session_reducer'
import entitiesReducer from './entities_reducer'
import errorsReducer from './errors_reducer'
import uiReducer from './ui_reducer';

const rootReducer = combineReducers({
    entities: entitiesReducer, //has user in it
    session: sessionReducer,
    errors: errorsReducer, //11.17 has sessionerrors in it
    // add ui state to store email 
    ui: uiReducer
})


export default rootReducer; //state shape!!!