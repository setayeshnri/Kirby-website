"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Button from "@/components/button";
import h1Pic from "@/public/home/h1.svg";
import Stars from "@/app/animations/stars";
import FloatingKirby from "@/app/animations/floatingKirby";

export default function Page() {
  const [isVisible, setIsVisible] = useState(false);
  const btnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);


  return (
    <div className="relative w-full h-screen">
      <Stars />
      <FloatingKirby />
      <div
        className={`${
          isVisible ? "opacity-100" : "opacity-0"
        } absolute top-[15%] left-0 w-full px-4 flex flex-col items-center transition-opacity duration-1000 ease-in-out z-[300]
          sm:top-[25%] sm:left-[12%] sm:w-2/5 sm:items-start sm:px-0`}
      >
        <section>
          <h2 className="text-white font-medium text-center sm:text-left">
            THIS PAGE IS DEDICATED TO KIRBY
          </h2>
          <Image alt="Kirby" src={h1Pic} />
          <p className="text-white font-medium text-center sm:text-left">
            Don't let the adorable face fool you—this powerful, pink puff can
            pack a punch! Since 1992, Kirby has been battling baddies across
            dozens of games. With his unique abilities, Kirby is always finding
            new ways to take on troublemakers.
          </p>
        </section>
        <section className="mt-4">
          <Link href="/pages/about">
            <Button btnRef={btnRef}>Learn More</Button>
          </Link>
        </section>
      </div>
    </div>
  );
}
