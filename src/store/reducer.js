import { combineReducers } from 'redux';
import HomeReducer from './home/homeReducer'
import commonReducer from './common/commonReducer'
const rootReducer = combineReducers({
    home: HomeReducer,
    commonR:commonReducer
});
export default rootReducer;