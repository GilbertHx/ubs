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