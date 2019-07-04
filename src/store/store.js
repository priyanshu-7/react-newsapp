import thunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux";
import Reducers from "../reducers/reducers";


//middleware
const middleware= applyMiddleware(thunk);

//store
const store= createStore(Reducers, middleware);

export default store;
