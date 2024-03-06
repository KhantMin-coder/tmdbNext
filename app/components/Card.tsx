import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Movie } from "../page";

const Card = ({ result }: { result: Movie }) => {
  return (
    <div className="cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 group">
      <Link href={`/movie/${result.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${result.backdrop_path}`}
          alt={result.poster_path}
          width={500}
          height={300}
          className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200"
          placeholder="blur"
          blurDataURL="loading"
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        />
        <div className="p-2">
          <h2 className="truncate text-lg font-bold">
            {result.title || result.name}
          </h2>
          <p className="line-clamp-2 text-md">{result.overview}</p>
          <p>
            {result.release_date} {result.vote_count}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
