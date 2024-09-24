import { Button } from "@nextui-org/button";
import React from "react";

interface ButtonProps {
  btnRef: React.RefObject<HTMLButtonElement>;
  children?: React.ReactNode;
}

const MyButton: React.FC<ButtonProps> = ({ btnRef, children }) => {
  return (
    <Button
      ref={btnRef}
      className="	z-20 bg-primary-blue w-[13vw] max-xl:w-[17vw] max-sm:w-[28.5vw] h-16 max-md:h-12  rounded-full text-white text-2xl max-xl:text-[2vw] max-sm:text-[4vw] font-extrabold tracking-wide shadow-lg"
      style={{ fontFamily: '"M PLUS Rounded 1c", sans-serif' }}
    >
      {children}
    </Button>
  );
};

export default MyButton;
