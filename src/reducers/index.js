import { combineReducers } from 'redux';
import courses from './courses-reducer';
import auth from './auth-reducer';

const rootReducer = combineReducers({
    courses,
    auth
});

export default rootReducer;