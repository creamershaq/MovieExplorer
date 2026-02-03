// Reading
export interface IShortMovie {
  Title: string
  Year?: string
  imdbID?: string
  Type?: string
  Poster?: string // URL to poster image
}

export interface IMovie extends IShortMovie {
  Title: string
  Year?: string
  Rated?: string
  imdbID?: string
  Type?: string
  Poster?: string // URL to poster image
  Released?: string
  Runtime?: string
  Genre?: string
  Director?: string
  Writer?: string
  Actors?: string
  Plot?: string
  Language?: string
  Country?: string
  Awards?: string
  Ratings?: { Source: string; Value: string }[]
  Metascore?: string
  imdbRating?: string
  imdbVotes?: string
  DVD?: string
  BoxOffice?: string
  Production?: string
  Website?: string
  Response?: string
}

export type Movie = IMovie

export type ShortMovie = IShortMovie
