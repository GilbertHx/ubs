import { SHOWS } from '../constants';
import { AppActions, GetShowsRequestAction } from '../types/actions';
import { ShowType } from '../types/Shows';

const loadShows = (query: string = ""): AppActions => ({
    type: SHOWS.LOAD,
    payload: query
})

const setShows = ( shows: ShowType[] ): AppActions => ({
    type: SHOWS.LOAD_SUCCESS,
    payload: shows,
})

const setError = ( error: Error | string ): AppActions => ({
    type: SHOWS.LOAD_FAIL,
    payload: error,
})

export { loadShows, setShows, setError };