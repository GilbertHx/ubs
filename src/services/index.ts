import { ShowType } from "../types/Shows";

interface showsResponse {
    shows: ShowType[];
}

const fetchShows = async (query: string): Promise<showsResponse> =>  {
    const response = await fetch(`http://api.tvmaze.com/search/shows?q=${query}`)
    const data = await response.json();
    if (response.status >= 400) {
        throw new Error(data.errors);
    }
    return data;
}

export { fetchShows };