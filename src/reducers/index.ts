import { combineReducers } from "redux";
import errorReducer from "./errorReducers";
import isLoadingReducer from "./isLoadingReducer";
// import messageReducer from "./messageReducer";
import showsReducer from "./showsReducers";
import { tableReducers } from "./tableReducer";

const rootReducer = combineReducers({
    isLoading: isLoadingReducer,
    shows: showsReducer,
    error: errorReducer,
    tableShows: tableReducers,
})

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;