import { Button } from "@nextui-org/button";
import React from "react";

interface ButtonProps {
  btnRef: React.RefObject<HTMLButtonElement>;
  children: React.ReactNode;
}

const MyButton: React.FC<ButtonProps> = ({ btnRef, children }) => {
  return (
    <Button
      ref={btnRef}
      className="w-full	z-20 bg-primary-blue w-[16vw] h-16 max-md:h-12 z-10 rounded-3xl text-white text-2xl max-xl:text-[2vw] max-sm:text-[4vw] font-extrabold tracking-wide shadow-lg"
      style={{ fontFamily: '"M PLUS Rounded 1c", sans-serif' }}
    >
      {children}
    </Button>
  );
};

export default MyButton;
