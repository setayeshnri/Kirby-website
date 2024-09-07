"use client"
import "@/styles/globals.css";
import Home from "./page";
import App from "@/components/navbar";

export default function RootLayout() {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body>
        <App />
        <Home />
      </body>
    </html>
  );
}
