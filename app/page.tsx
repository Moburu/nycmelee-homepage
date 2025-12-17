'use client';

import Banner from "@/components/Banner";
import banner from "../public/banner.jpeg";
import { listFiles } from "@/database/api";
import { useEffect } from "react";

export default function Home() {
  useEffect (() => {
    const fetchFiles = async () => {
      await listFiles();
    }
    fetchFiles();
  }, []);

  return (
    <main>
      <div
        className="bg-cover bg-center bg-black/60 bg-blend-multiply bg-fixed"
        style={{ backgroundImage: `url(${banner.src})` }}
      >
        <div className="flex min-h-screen w-full flex-col items-start justify-start">
          <Banner />
          <div className="grid grid-cols-3 grid-rows-1 gap-4 text-white items-center justify-center outline-solid w-full h-[400px]">
            <h1 className="text-6xl text-center">NYCMelee</h1>
            <h1 className="text-6xl text-center">NYCMelee</h1>
            <h1 className="text-6xl text-center">NYCMelee</h1>
          </div>

          <div className="flex flex-row gap-4 text-white justify-around items-center w-full h-[400px]">
            <h1 className="text-6xl">Article</h1>
            <h1 className="text-6xl">Article</h1>
            <h1 className="text-6xl">Article</h1>
          </div>
        </div>
      </div>
    </main>
  );
}
