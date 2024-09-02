import { forwardRef } from "react";
import { Button } from "@nextui-org/button";
import { Rounded } from "@/config/fonts";
const MyButton = forwardRef(() => {
  return (
    <Button
      className="bg-primary-blue w-[16%] h-16 z-100 rounded-[2.4rem] text-white text-2xl font-extrabold tracking-wide shadow-[0px_2px_16px_0px_#00000030,inset_0px_-2px_4px_0px_#0000001a,inset_0px_4px_6px_0px_#ffffff42]
  "
      style={{ fontFamily: '"M PLUS Rounded 1c", sans-serif' }}
    >
      Learn more
    </Button>
  );
});

MyButton.displayName = "MyButton";

export default MyButton;
