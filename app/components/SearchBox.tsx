"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const SearchBox = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!search) return router.push('/');
    router.push(`/search/${search}`);
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="flex max-w-6xl mx-auto justify-between items-center px-5 mt-4"
    >
      <input
        className="w-full px-4 h-14 rounded-sm border border-grey placeholder-grey-500 outline-none bg-transparent "
        type="text"
        placeholder="Search movie... "
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      ></input>
      <button
        // disabled={!search}
        className="text-amber-700 cursor-pointe disabled:text-grey-400"
        type="submit"
      >
        Search Movie
      </button>
    </form>
  );
};

export default SearchBox;
