"use client";
import Image from "next/image";

import curve1 from "@/public/curve1.svg";
import curve2 from "@/public/curve2.svg";

import FirstPage from "./pages/firstPage/page";
import SecondPage from "./pages/secondPage/page";
import ThirdPage from "./pages/thirdPage/page"
export default function HomePage() {
  return (
    <section className="flex flex-col overflow-x-hidden">
      <FirstPage />
      <Image
        alt="curve divider"
        className="w-full mt-[-5px] bg-[#F2D8DB] pb-9"
        src={curve1}
      />
      <SecondPage />
      <div>
        <Image
          alt="curve divider"
          className=" z-10 w-full mt-[-5px]"
          src={curve2}
        />
       
      </div> <ThirdPage/>
    </section>
  );
}
