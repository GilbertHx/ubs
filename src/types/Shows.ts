export type ShowType = {
    score: number
    show: ShowDetails
}

export type ShowDetails = {
    id: number,
    name: string,
    language: string,
    type: string,
    genres: string[],
    status: string,
    officialSite: string,
    schedule: ShowSchedule,
    rating: ShowRating
    network: ShowNetwork,
    image: ShowCoverImage,
    summary: string,

}

export type ShowSchedule = {
    time: string,
    days: string[],
}

export type ShowNetwork = {
    id: string
    name: string,
}

export type ShowCoverImage = {
    medium: string,
    original: string
}

export type ShowRating = {
    average: number,
}
