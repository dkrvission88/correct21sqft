import { combineReducers } from "redux";
// import reducers1 from './REDUCERS/reducer1'
import { reduce01 } from "./REDUCERS/reducer1";
// import authReducer from "./REDUCERS/reducer2";
// import { editReducer } from "./REDUCERS/reducer3";


const rootreducer=combineReducers({
    reducer:reduce01,
    // edit:editReducer,

    // auth:authReducer,
})


export default  rootreducer