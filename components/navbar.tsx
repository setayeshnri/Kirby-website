import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import Link from "next/link";
import Image from "next/image";

import KirbyIcon from "../public/home/icon.svg";

export default function App() {
  return (
    <Navbar className=" bg-background text-white z-100 shadow-[0px_8px_10px_0px_#00000024] ">
      <NavbarBrand>
        <Image alt="logo of Kirby" src={KirbyIcon} />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <NavbarItem isActive>
          <Link className="text-lg" color="foreground" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link aria-current="page" className="text-lg" href="/pages/about">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-lg" color="foreground" href="#secondPage">
            Games
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-lg" color="foreground" href="#thirdPage">
            ChatBot
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
