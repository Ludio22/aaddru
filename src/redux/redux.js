import { combineReducers, createStore } from "redux";
import aboutReducer from "./reducers/about_reducer";
import mainReducer from "./reducers/main_reducer";
import progressReducer from "./reducers/progress_reducer";

let reducers = combineReducers({
    main: mainReducer,
    cases: progressReducer,
    about: aboutReducer,
});

let store = createStore(reducers);

export default store;