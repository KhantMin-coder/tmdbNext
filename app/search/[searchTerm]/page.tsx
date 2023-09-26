import Results from "@/app/components/Results";
import React from "react";

const SearchPage = async ({ params }: any) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.tmdbAPI}&query=${params.searchTerm}&language=en-US&include_adult=false`
  );
  if (!res.ok) throw new Error("No Search Result / Error Fetching Data");

  const data = await res.json();

  const result = data.results;
  console.log(result.length)
  return (
    <div>
      {result && result.length === 0 && <h1>No Results Found</h1>}
      {result && <Results results={result}/>}
    </div>
  );
};

export default SearchPage;
