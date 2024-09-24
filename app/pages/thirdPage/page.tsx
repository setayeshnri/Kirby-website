"use client";
import styles from "@/styles/kirby.module.css";
import Link from "next/link";
import MyButton from "@/components/button";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Kirby from "@/public/Round Kirby.png";
const Page = () => {
  const btnRef = useRef<HTMLButtonElement | null>(null);
  useEffect(() => {
    if (btnRef.current) {
      btnRef.current.innerHTML = "Click to Chat";
    }
  }, []);
  return (
    <div className="bg-[url('/clouds.png')] h-[100vh] bg-cover flex flex-row justify-around mt-[-70px] pt-[6vw]  max-lg:p-[5%]  max-lg:pt-[2%] max-md:pt-[7%]">
      <div className="relative top-32 left-36 max-xl:top-[16rem] max-xl:left-[5rem]  max-md:top-[18rem] z-10 h-52 max-md:hidden">
        <div className={styles.body}>
          <div className={styles.face}>
            <div className={styles.eyes}>
              <div className={styles.eyeRight}>
                <div className={styles.eyeBottom} />
              </div>
              <div className={styles.eyeLeft}>
                <div className={styles.eyeBottom} />
              </div>
            </div>

            <div className={styles.cheeks}>
              <div className={styles.cheekLeft} />
              <div className={styles.cheekRight} />
            </div>

            <div className={styles.mouth} />
          </div>
          <div className={styles.armLeft} />
          <div className={styles.armRight} />
          <div className={styles.footLeft} />
          <div className={styles.footRight} />
        </div>
      </div>
      <div className="flex flex-col justify-start p-[2vw] bg-white relative top-64  h-fit  w-[26%] rounded-r-3xl rounded-bl-3xl max-md:w-[65vw]  max-md:rounded-3xl max-md:top-32 max-md:justify-between max-md:items-center max-md:p-[10%]">
        <p className="mb-7 text-[2vw] font-medium  max-md:text-[4.5vw]  max-md:text-center  max-md:mb-[30%] max-md:hidden">
          Oh, Hi!!
          <br />I am Kirby, Let&apos;s chat!
        </p>
        <div className="md:hidden flex flex-row m-auto items-center w-[60%]">
          <Image className="w-[30%] h-[30%] mr-[1%] relative bottom-1" src={Kirby} alt="O shaped Kirby" />
          <p className="font-medium text-[6vw] text-center w-[90%]">H, HI!! </p>
        </div>
        <p className="md:hidden font-medium text-[6vw] text-center mb-[20%]">
          It's me, Kirby.
          <br /> Let&apos;s chat!
        </p>
        <Link href="/pages/chatBot">
          <MyButton btnRef={btnRef} />
        </Link>
      </div>{" "}
    </div>
  );
};

export default Page;
