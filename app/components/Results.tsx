import React from "react";
import Card from "./Card";
import { Movie } from "../page";

const Results = ({ results }: { results: Movie[] }) => {
  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xxl: grid-cols-5 max-w-6xl mx-auto py-4">
      {results.map((data: Movie) => (
        <Card key={data.id} result={data} />
      ))}
    </div>
  );
};

export default Results;
