import { M_PLUS_Rounded_1c } from "next/font/google";
import { Gluten } from "next/font/google";

export const Rounded = M_PLUS_Rounded_1c({
    subsets: ["latin"],
    variable: '--Rounded-gluten',
    weight: "100"
});

export const gluten = Gluten({
  variable:'--font-gluten',
  subsets: ["latin"],
});