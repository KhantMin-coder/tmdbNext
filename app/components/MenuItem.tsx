import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";

interface MenuItem {
  title: string;
  address: string;
  Icon: any;
}

const MenuItem = ({ title, address, Icon }: MenuItem) => {
  return <div> 
    <Link className="mx-4 lg:mx-6 hover:text-amber-600" href={address}>
        <Icon className="text-2xl md:hidden mx-4"/>
        <p className="hidden md:inline">{title}</p>
    </Link>
  </div>;
};

export default MenuItem;
