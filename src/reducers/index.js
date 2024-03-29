import {combineReducers} from "redux";
import loginReducer from "./login.reducer";
import commonReducer from "./common.reducer";
import ThemeReducer from "./theme.reducer";
import registerReducer from "./register.reducer";

export default combineReducers({
    loginReducer:loginReducer,
    commonReducer:commonReducer,
    ThemeReducer:ThemeReducer,
    registerReducer:registerReducer,
})