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