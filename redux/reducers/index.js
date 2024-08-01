import { combineReducers } from "redux";
// import alert from "./alert_reducer";
// import auth from "./auth_reducer";
import { task_reducer } from "./task_reducer";



export default combineReducers({
    // alert,
    // auth,
    task: task_reducer,
});
