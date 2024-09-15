import React from "react";
import Image from "next/image";
import Header from "@/public/home/h1.svg";
import kirby1 from "@/public/about/characters-kirby.png";
import kirby2 from "@/public/about/char-kirby.png";
import kirby3 from "@/public/about/kirby-puffy.png";
import kirby4 from "@/public/about/kirby-star2.png";

const Page: React.FC = () => {
  return (
    <div className="bg-[#E3E9FC] h-[150vh]">
      <div className="flex flex-row justify-around p-[10%] pb-7">
        <div>
          <Image src={kirby1} alt="kirbypic" className="w-[27vw]" />
        </div>{" "}
        <div className="flex flex-col w-[40%] justify-start text-[1.3vw]">
          <div className="flex flex-row text-left">
            <h4>Hi, I&apos;m </h4>
            <Image src={Header} alt="kirby header" className="w-[15%]"></Image>
          </div>
          <div className="flex flex-col">
            <p>
              {" "}
              The star of the Kirby series created by HAL Laboratory and
              Nintendo. I first appeared in *Kirby&apos;s Dream Land in 1992 and
              have since been in over 50 games, exploring different genres like
              platformers, racing, and even pinball. I&apos;m known for my pink,
              round body, and my ability to inhale enemies and take on their
              abilities, which makes me super versatile in my adventures.
            </p>
            <p>
              I live on Planet Popstar in Dream Land, where I often find myself
              up against foes like King Dedede and Meta Knight. Despite the
              challenges, I always stay cheerful and ready to protect my home.
              I&apos;ve even made appearances in other media, like the *Super
              Smash Bros.* series and my very own anime, *Kirby: Right Back at
              Ya!* People love me for my cuteness and my fun, easy-to-draw
              design. Whether I&apos;m flying, fighting, or just eating,
              I&apos;m always up for an adventure!
            </p>
          </div>
        </div>
      </div>
      <div className="relative flex overflow-hidden h-[50vh]">
        <div className="py-12 animate-marquee whitespace-nowrap flex flex-row">
          <span className=" mx-20 w-[30vw]">
            <Image className="w-[24vw]" src={kirby2} alt="kirby" />
          </span>
          <span className=" mx-20 w-[30vw] ">
            <Image className="w-[24vw]" src={kirby3} alt="kirby" />
          </span>

          <span className=" mx-20 w-[30vw] ">
            <Image className="w-[24vw]" src={kirby4} alt="kirby" />
          </span>
          <span className=" mx-20 w-[30vw] ">
            <Image className="w-[24vw]" src={kirby2} alt="kirby" />
          </span>
          <span className=" mx-20 w-[30vw] ">
            <Image className="w-[24vw]" src={kirby3} alt="kirby" />
          </span>

          <span className=" mx-20 w-[30vw] ">
            <Image className="w-[24vw]" src={kirby4} alt="kirby" />
          </span>
        </div>

        <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap flex flex-row">
          <span className=" mx-20 w-[30vw]">
            <Image className="w-[24vw]" src={kirby2} alt="kirby" />
          </span>
          <span className=" mx-20 w-[30vw] ">
            <Image className="w-[24vw]" src={kirby3} alt="kirby" />
          </span>

          <span className=" mx-20 w-[30vw] ">
            <Image className="w-[24vw]" src={kirby4} alt="kirby" />
          </span>
          <span className=" mx-20 w-[30vw] ">
            <Image className="w-[24vw]" src={kirby2} alt="kirby" />
          </span>
          <span className=" mx-20 w-[30vw] ">
            <Image className="w-[24vw]" src={kirby3} alt="kirby" />
          </span>

          <span className=" mx-20 w-[30vw] ">
            <Image className="w-[24vw]" src={kirby4} alt="kirby" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Page;
