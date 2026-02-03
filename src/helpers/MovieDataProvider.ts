import { Plot } from '@/enums/Plot'
import { MovieType } from '@/enums/MovieType'
import type { Movie, ShortMovie } from '@/classes/movie'

export class MovieDataProvider {
  constructor() {}
  private static readonly apiKey: string = '2f180c84'
  private static readonly apiUrl: string = `https://www.omdbapi.com/?apikey=${this.apiKey}`
  /// Fetch movie data by IMDb ID
  public static async GetMovie(imdbID: string, plot: Plot = Plot.Full): Promise<Movie> {
    const url = `${this.apiUrl}&i=${imdbID}&plot=${plot}`
    const response = await fetch(`${url}`)
    if (!response.ok) {
      throw Error(response.statusText)
    }
    const movie: Movie = (await response.json()) as Movie
    // assuming they return json
    return movie
  }

  /// Fetch movie data by IMDb ID with plot length option

  public static async GetMovies(
    title: string = '',
    type: MovieType | null = null,
    year: number | null = null,
    page: number = 1,
    plot: Plot = Plot.Full,
  ): Promise<ShortMovie[]> {
    const url = `${this.apiUrl}&s=${title}${type ? `&type=${type}` : ''}${year ? `&y=${year}` : ''}${page ? `&page=${page}` : ''}&plot=${plot}`
    const response = await fetch(`${url}`)
    if (!response.ok) {
      throw Error(response.statusText)
    }
    const json = await response.json()
    if (json.Response === 'False') {
      throw Error(json.Error)
    }
    const movies: ShortMovie[] = json.Search as ShortMovie[]
    // assuming they return json
    return movies
  }
}

export async function api<Movie>(url: string): Promise<Movie> {
  const response = await fetch(`${url}`)
  if (!response.ok) {
    throw Error(response.statusText)
  }
  const movie: Movie = (await response.json()) as Movie
  // assuming they return json
  return movie
}
