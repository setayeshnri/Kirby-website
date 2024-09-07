"use client";
import Image from "next/image";
import Stars from "../../animations/stars";
import { useRouter } from "next/navigation";
import Link from "next/link";
import FloatingKirby from "../../animations/floatingKirby";
import Button from "@/components/button";
import h1Pic from "@/public/home/h1.svg";
import { useEffect, useRef } from "react";
export default function Page() {
  const page1Ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    setTimeout(() => {
      const page1 = page1Ref.current;

      if (page1) {
        page1.classList.add("visibility");
      }
    }, 5000);
  }, []);
  const router = useRouter();
  const btnRef = useRef<HTMLButtonElement | null>(null);
  useEffect(() => {
    if (btnRef.current) {
      btnRef.current.innerHTML = "Learn More";
    }
  });

  return (
    <div className="section1 h-[100vh] w-full ">
      <Stars />
      <FloatingKirby />
      <div
        className="firstPage flex flex-col relative left-[20%] max-lg:left-[10%] top-[18vh] transition-opacity ease-in-out duration-[1s] max-sm:left-0  max-sm:top-16 max-sm:items-center"
        ref={page1Ref}
      >
        <h2 className="text-[1.1vw] max-sm:text-[2.5vw] max-lg:text-[1.9vw] font-medium  mb-9 max-sm:mb-3 text-white z-40 ">
          THIS PAGE IS DEDICATED TO KIRBY
        </h2>
        <Image
          src={h1Pic}
          alt={"header picture"}
          className="ml-[-13] z-40 w-[24%] mb-3 max-sm:w-[65%] max-lg:w-[39%]"
        />{" "}
        <p className="text-white w-[29%] text-[1.4vw] max-sm:text-[4.5vw] max-lg:text-[2.7vw] max-sm:w-[60%] max-lg:w-[52%] h-36 font-medium z-40">
          Don’t let the adorable face fool you—this powerful, pink puff can pack
          a punch! Since 1992, Kirby has been battling baddies across dozens of
          games. With his unique abilities, Kirby is always finding new ways to
          take on troublemakers.
        </p>
        <div className="  mt-[9vw] max-2xl:mt-[5vw] max-lg:mt-[11%] max-sm:relative max-sm:m-auto ">
          <Link href="/pages/about">
            {" "}
            <Button btnRef={btnRef} />
          </Link>
        </div>
      </div>
    </div>
  );
}
