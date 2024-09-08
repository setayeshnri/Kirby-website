import React from "react";
import Image from "next/image";
import Header from "@/public/home/h1.svg";
const Page: React.FC = () => {
  return (
    <div>
      <div className="flex flex-col items-center bg-[#E3E9FC] h-[100vh]">
        <div className="flex flex-row">
          <h4>Hi, I&apos;m </h4>
          <Image src={Header} alt="kirby header"></Image>
        </div>
        <div className="flex flex-col">
          <p>
            {" "}
            The star of the Kirby series created by HAL Laboratory and Nintendo.
            I first appeared in *Kirby's Dream Land* in 1992 and have since been
            in over 50 games, exploring different genres like platformers,
            racing, and even pinball. I’m known for my pink, round body, and my
            ability to inhale enemies and take on their abilities, which makes
            me super versatile in my adventures.
          </p>
          <p>
            I live on Planet Popstar in Dream Land, where I often find myself up
            against foes like King Dedede and Meta Knight. Despite the
            challenges, I always stay cheerful and ready to protect my home.
            I’ve even made appearances in other media, like the *Super Smash
            Bros.* series and my very own anime, *Kirby: Right Back at Ya!*
            People love me for my cuteness and my fun, easy-to-draw design.
            Whether I’m flying, fighting, or just eating, I’m always up for an
            adventure!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
