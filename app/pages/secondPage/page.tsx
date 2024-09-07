"use client";
import Image from "next/image";
import cloud from "@/public/cloud.svg";
import myGif from "@/public/gamegif.gif";
import Button from "@/components/button";

import { useRef, useEffect } from "react";
const Page = () => {
  const btnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (btnRef.current) {
      btnRef.current.innerText = "Click to Play";
    }
  }, []);
  return (
    <div className="bg-[#F2D8DB] w-full h-[100vh] relative z-[1] mt-[-4px]">
      <div className="wave-border"></div>
      <h3 className=" mt-24 mb-[-50px] text-3xl font-extrabold text-center">
        Our Featured Game
      </h3>
      <Image
        src={cloud}
        alt="cloud image"
        className="w-40 z-40 relative top-20 left-[23%]"
      />
      <Image
        className=" m-auto w-2/5 h-96 border-3 border-black rounded-xl"
        src={myGif}
        alt="kirby game gif"
      />{" "}
      <Image
        src={cloud}
        alt="cloud image"
        className="relative left-[64%] top-[-8%]"
      />
      <div className="flex justify-center relative top-[-5.5rem] ">
        <Button btnRef={btnRef} />
      </div>
    </div>
  );
};

export default Page;
