"use client";
import Image from "next/image";
import FirstPage from "./pages/firstPage/page";
import SecondPage from "./secondPage/page";

import curve1 from "@/public/curve1.svg";
import curve2 from "@/public/curve2.svg";
export default function Home() {
  return (
    <section className="flex flex-col overflow-x-hidden">
      <FirstPage />
      <Image
        className="w-full mt-[-5px] bg-[#F2D8DB] pb-9"
        src={curve1}
        alt="curve divider"
      />
      <SecondPage />
      <div>
        <Image
          src={curve2}
          alt="curve divider"
          className=" z-10 w-full mt-[-5px]"
        />
      </div>
    </section>
  );
}
