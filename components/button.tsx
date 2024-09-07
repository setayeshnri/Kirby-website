import { forwardRef, useRef } from "react";
import { Button } from "@nextui-org/button";
import { Rounded } from "@/config/fonts";
interface buttonProps {
  btnRef: React.RefObject<HTMLButtonElement>;
}
const MyButton = forwardRef(({ btnRef }: buttonProps, ref) => {
  return (
    <Button
      ref={btnRef}
      className="absolute button primaryBtn bg-primary-blue w-[16vw] max-sm:w-[35vw] h-16 max-md:h-12 z-100 rounded-[2.4rem] text-white text-2xl  max-xl:text-[2vw] max-sm:text-[4vw] font-extrabold tracking-wide shadow-[0px_2px_16px_0px_#00000030,inset_0px_-2px_4px_0px_#0000001a,inset_0px_4px_6px_0px_#ffffff42]
  "
      style={{ fontFamily: '"M PLUS Rounded 1c", sans-serif' }}
    ></Button>
  );
});

MyButton.displayName = "MyButton";

export default MyButton;
