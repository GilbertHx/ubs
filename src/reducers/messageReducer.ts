import { SHOWS } from '../constants';
import { GetShowsFailureAction } from '../types/actions';

const initialState: string = '';

const messageReducer = (state = initialState, action: GetShowsFailureAction) => {
    switch (action.type) {
        case SHOWS.LOAD_FAIL:
            // return action.payload.toString();
            return state
        case SHOWS.LOAD:
            return "Loading...";
        case SHOWS.LOAD_SUCCESS:
            return "Date received";

        default:
            return state;
    }
};

export default messageReducer;