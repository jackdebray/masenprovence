"use client";
import React, { useEffect } from "react";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default function Footer() {
  useEffect(() => {
    const checkLocation = () => {
      if (
        window.location.pathname === "/" &&
        window.location.hash.includes("video")
      ) {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: "smooth",
        });
        (async () => {
          await sleep(200);
          window.history.replaceState({}, "", window.location.pathname);
        })();
      }
    };

    const interval = setInterval(checkLocation, 500); // Check every .5 seconds

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <footer className="mt-2 flex justify-center items-center mb-[3%] md:mb-[1.5%] z-50">
      <div className="text-center text-gray-600 text-sm max-w-[85%]">
        &copy; 2024 Jack Debray. All rights reserved.
      </div>
    </footer>
  );
}
