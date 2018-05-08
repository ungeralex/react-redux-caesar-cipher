import {sendKeyToServer} from './KeyReducer';
import {sendTextWithKeyToServer} from './CodeReducer';
import {combineReducers} from "redux";

const rootReducer = combineReducers({
    sendKeyToServer,
    sendTextWithKeyToServer
});

export default rootReducer;