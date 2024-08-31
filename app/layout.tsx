"use client"
import "@/styles/globals.css";
import Stars from "./animations/stars";
export default function RootLayout() {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body>
       <Stars/>
      </body>
    </html>
  );
}
