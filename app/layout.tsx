"use client"
import "@/styles/globals.css";
import Stars from "./animations/stars";
import FloatingKirby from "./animations/floatingKirby";
export default function RootLayout() {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body>
       <Stars/>
       <FloatingKirby/>
      </body>
    </html>
  );
}
