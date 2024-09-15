"use client";
import Image from "next/image";
import { useRef, useEffect } from "react";

import cloud from "@/public/cloud.svg";
import myGif from "@/public/gamegif.gif";
import Button from "@/components/button";

const Page = () => {
  const btnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (btnRef.current) {
      btnRef.current.innerText = "Click to Play";
      btnRef.current.addEventListener("click", (e) => {});
    }
  }, []);

  return (
    <div id="secondPage" className="bg-[#F2D8DB] w-full h-[100vh] relative z-[1] mt-[-4px]">
      <div className="wave-border" />
      <h3 className=" mt-24 mb-[-50px] text-3xl font-extrabold text-center">
        Our Featured Game
      </h3>
      <Image
        alt="cloud image"
        className="w-40 z-40 relative top-20 left-[23%]"
        src={cloud}
      />
      <a
        href="https://kirby-lover.netlify.app/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <Image
          alt="kirby game gif"
          className=" m-auto w-2/5 h-96 border-3 border-black rounded-xl"
          src={myGif}
        />{" "}
      </a>
      <Image
        alt="cloud image"
        className="relative left-[64%] top-[-8%]"
        src={cloud}
      />
      <a
        className="flex justify-center relative top-[-5.5rem] "
        href="https://kirby-lover.netlify.app/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <Button btnRef={btnRef} />
      </a>
    </div>
  );
};

export default Page;
