"use client";
import Link from "next/link";
import React, { useState } from "react";

import { useSearchParams } from "next/navigation";

const NavbarItem = ({ title, param }: { title: string; param: string }) => {
  const searchParams = useSearchParams();
  //   const [searchParams, setSearchParams] = useState<string>("");
  const genre = searchParams.get("genre");

  return (
    <div>
      <Link
        className={`m-4 hover:text-amber-600 font-semibold ${
          genre && genre === param
            ? "underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg"
            : ""
        }`}
        href={`/?genre=${param}`}
      >
        {title}
      </Link>
    </div>
  );
};

export default NavbarItem;
