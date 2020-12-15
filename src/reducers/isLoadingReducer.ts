import { Action } from 'redux';
import { SHOWS } from '../constants';

const loadingReducer = (state = false, action: Action) => {
    switch (action.type) {
        case SHOWS.LOAD:
            return true;
        case SHOWS.LOAD_SUCCESS:
            return false;
        case SHOWS.LOAD_FAIL:
            return false;

        default:
            return state;
    }
};

export default loadingReducer;

// import { Action } from "redux";

// export interface IsLoadingState {
//   [key: string]: boolean;
// }

// const getLoadingMatches = (actionType: string) =>
//   /(.*)_(REQUEST|SUCCESS|FAILURE)/.exec(actionType);

// const isLoadingReducer = (state: IsLoadingState = {}, action: Action) => {
//   const matches = getLoadingMatches(action.type);

//   if (!matches) {
//     return state;
//   }

//   const [, requestName, requestStatus] = matches;
//   return {
//     ...state,
//     [requestName]: requestStatus === "REQUEST"
//   };
// };

// export default isLoadingReducer;