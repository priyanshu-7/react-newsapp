import {combineReducers} from "redux";
import customSearch from "../reducers/custom_search";



const reducers= combineReducers({
    CustomSearch: customSearch
});

export default reducers;
