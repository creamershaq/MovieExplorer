export async function api<MovieType>(url: string): Promise<MovieType> {
  const response = await fetch(`${url}`)
  if (!response.ok) {
    throw Error(response.statusText)
  }
  const movie: MovieType = (await response.json()) as MovieType
  // assuming they return json
  return movie
}
