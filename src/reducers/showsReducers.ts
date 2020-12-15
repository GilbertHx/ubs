import { SHOWS } from "../constants";
import { GetShowsSuccessAction } from "../types/actions";
import { ShowType } from "../types/Shows";

const initialState: ShowType[] = [];

const showsReducer = (state: ShowType[] = initialState , action: GetShowsSuccessAction) : ShowType[]  => {
    if (action.type === SHOWS.LOAD_SUCCESS) {
        return [...action.payload];
    }
    return state;
}

export default showsReducer
