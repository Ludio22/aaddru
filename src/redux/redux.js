import { combineReducers, createStore } from "redux";
import mainReducer from "./reducers/main_reducer";

let reducers = combineReducers({
    mainReducer: mainReducer,
});

let store = createStore(reducers);

export default store;