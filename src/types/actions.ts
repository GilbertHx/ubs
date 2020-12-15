import { type } from "os";
import { SHOWS } from "../constants";
import { ShowType } from "./Shows";

export interface GetShowsRequestAction {
    type: typeof SHOWS.LOAD,
    payload: string;
}

export interface GetShowsSuccessAction {
    type: typeof SHOWS.LOAD_SUCCESS,
    payload: ShowType[];
}

export interface GetShowsFailureAction {
    type: typeof SHOWS.LOAD_FAIL,
    payload: Error | string
}

export interface AddShowToTableAction {
    type: typeof SHOWS.ADD_SHOW_TO_TABLE,
    payload: ShowType
}

export interface RemoveShowFromTableAction {
    type: typeof SHOWS.REMOVE_SHOW_FROM_TABLE,
    payload: string;
}

export type ShowActionTypes = GetShowsRequestAction | GetShowsSuccessAction | GetShowsFailureAction | AddShowToTableAction | RemoveShowFromTableAction;

export type AppActions = ShowActionTypes;