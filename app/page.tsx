"use client";
import Image from "next/image";
import Stars from "./animations/stars";
import FloatingKirby from "./animations/floatingKirby";
import MyButton from "@/components/button";
import { Rounded } from "@/config/fonts";
import h1Pic from "@/public/h1.svg";
import { useEffect, useRef } from "react";
import { Navbar } from "@nextui-org/navbar";

export default function Home() {
  const page1Ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    
    setTimeout(() => {
      const page1 = page1Ref.current;
      console.log(page1);
      if (page1) {
        page1.classList.add("visibility");
        console.log("Class added!");
      }
    }, 2000);
  },[]);

  return (
    <section className="section1">
      <Navbar/>
      <Stars />
      <FloatingKirby />
      <div className="firstPage flex flex-col ml-40 mt-[74px] opacity-0 transition-opacity ease-in-out duration-[1s] z-100"ref={page1Ref}>
        <h2 className="text-xl font-medium w-[275px] mb-9 z-100 text-white">
          This page is dedicated to
        </h2>
        <Image src={h1Pic} alt={"header picture"} className="z-100 ml-[-13]" />{" "}
        <p
          className="z-10 text-white w-[23%] text-2xl h-56 font-medium mb-32"
          style={{ fontFamily: '"M PLUS Rounded 1c", sans-serif' }}
        >
          Don’t let the adorable face fool you—this powerful, pink puff can pack
          a punch! Since 1992, Kirby has been battling baddies across dozens of
          games. With his unique abilities, Kirby is always finding new ways to
          take on troublemakers.
        </p>
        <MyButton />
      </div>
    </section>
  );
}
