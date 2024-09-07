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
    <Navbar className="z-100 bg-background text-white z-100 shadow-[0px_8px_10px_0px_#00000024] ">
      <NavbarBrand>
        <Image src={KirbyIcon} alt="logo of Kirby" />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <NavbarItem isActive>
          <Link color="foreground" href="#" className="text-lg">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" aria-current="page" className="text-lg">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#" className="text-lg">
            Games
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#" className="text-lg">
           ChatBot
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
