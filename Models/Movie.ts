interface Movie {
  id?: number
  original_title?: string
  title?: string
  overview?: string
  backdrop_path?: string | '/temp-cover.webp'
  poster_path?: string
  release_date?: string
  vote_average?: number
  vote_count?: number
  popularity?: number
  original_language?: string
  adult?: boolean
  video?: boolean
  genre_ids?: number[]
}
