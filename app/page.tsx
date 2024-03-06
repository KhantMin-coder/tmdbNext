import Results from "./components/Results";
const API_KEY = process.env.tmdbAPI;

export interface Movie {
    adult: boolean,
    backdrop_path: string,
    id: number,
    title: string,
    name?: string,
    original_language: string,
    original_title: string,
    overview: string,
    poster_path: string,
    media_type: string,
    genre_ids: Array<number>,
    popularity: number,
    release_date: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}

export default async function Home({ searchParams }: any) {
  const genre = searchParams.genre || "fetchTrending";

  const res = await fetch(
    `https://api.themoviedb.org/3/${
      genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
    }?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 3600 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  const results : Movie[] = data.results;

  return (
    <div>
      <Results results={results} />
    </div>
  );
}
