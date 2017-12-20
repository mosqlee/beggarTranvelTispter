import { combineReducers } from "redux";
import counter from './reducers/counter';
import userInfo from './reducers/userInfo';
import travelList from './reducers/travelList';
export default combineReducers({
    counter,
    userInfo,
    travelList
})
// export default function combineReducers(state = {}, action) {
//     return {
//         counter: counter(state.counter, action),
//         userInfo: userInfo(state.useInfo,action)
//     }
// }