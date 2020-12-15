import { SHOWS } from "../constants";
import { AddShowToTableAction } from "../types/actions";
import { ShowType } from "../types/Shows";

export interface ShowTableState {
    tableShows: ShowType[]
}

const initialState: ShowType[] = [];

export const tableReducers = (state = initialState, action: AddShowToTableAction) => {
    switch(action.type) {
        case SHOWS.ADD_SHOW_TO_TABLE:
            return [...state, action.payload];
        case SHOWS.REMOVE_SHOW_FROM_TABLE:
            const index = state.findIndex(x => x.show.id === action.payload.show.id);
            return [
                ...state.slice(0, index),
                ...state.slice(index+ 1)
            ]
        default:
            return state;
    }
}