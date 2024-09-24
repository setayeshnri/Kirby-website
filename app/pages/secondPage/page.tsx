"use client";
import Image from "next/image";
import { useRef, useEffect, Children } from "react";

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
    <div className="bg-[#F2D8DB] w-full h-[100vh] max-sm:h-[60vh] relative z-[1] mt-[-4px] pt-[2vh] max-sm:pt-0">
      <h3 className=" mt-[2vw] max-lg:mt-[9vw] mb-[-3vw] text-[2vw] max-md:text-[3vw] font-extrabold text-center">
        Our Featured Game
      </h3>

      <Image
        alt="cloud image"
        className="max-2xl:w-[12%] z-40 relative top-[4vw] left-[25%] max-2xl:left-[13%] max-2xl:top-[5.5vw]"
        src={cloud}
      />
      <a
        className=" w-[42%] h-[42%]"
        href="https://kirby-lover.netlify.app/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <Image
          alt="kirby game gif"
          className=" m-auto w-[42%] max-2xl:w-[60%] max-2xl:h-[55%]  max-lg:h-[40%] max-sm:h-[42%]  h-[42%] border-[0.4vw] border-black rounded-xl"
          src={myGif}
        />{" "}
      </a>
      <Image
        alt="cloud image"
        className="max-2xl:w-[12%] relative left-[67.5%] top-[-5%] max-2xl:left-[73%] max-sm:left-[72%] max-sm:top-[-3%]"
        src={cloud}
      />

      <a
        className="flex justify-center relative max-2xl:top-[-5vw] top-[-1vw] "
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
