// interface ErrorAction {
//     type: string;
//     error: Error | string;
//   }
  
//   export interface ErrorState {
//     [key: string]: null | Error | string;
//   }
  
//   const getErrorMatches = (actionType: string) =>
//     /(.*)_(REQUEST|FAILURE|CLEAR_ERRORS)/.exec(actionType);
  
//   const errorReducer = (state: ErrorState = {}, action: ErrorAction) => {
//     const matches = getErrorMatches(action.type);
  
//     if (!matches) {
//       return state;
//     }
  
//     const [, requestName, requestStatus] = matches;
//     return {
//       ...state,
//       [requestName]: requestStatus === "FAILURE" ? action.error : null
//     };
//   };
  
//   export default errorReducer;

import { SHOWS } from '../constants';
import { GetShowsFailureAction } from '../types/actions';

const initialState: boolean | null = null;

const errorReducer = (state = initialState, action: GetShowsFailureAction) => {
    switch (action.type) {
        case SHOWS.LOAD_FAIL:
            return action.payload;
        case SHOWS.LOAD:
        case SHOWS.LOAD_SUCCESS:
            return null;

        default:
            return state;
    }
};

export default errorReducer;