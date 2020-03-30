//@ts-ignore
import {combineReducers} from 'redux';

import SearchDataSourceReducer  from '../Container/Screen/AddCitizen/Reducer'
const RootReducers = combineReducers({ 
    SearchDataSourceReducer,
});


export default RootReducers;