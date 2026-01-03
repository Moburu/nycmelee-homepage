import banner from "../public/banner.jpeg";

export default function Banner() {
  return (
    <div className="flex flex-col gap-4 text-white justify-center items-center w-full h-[150px] bg-black/80">
      <h1 className="text-6xl mx-8 font-mono font-semibold">NYC Melee</h1>
      <h2 className="text-3xl text-shadow-lg/0">
        Hosts of Stock Exchange, The Function, and more!
      </h2>
    </div>
  );
}
