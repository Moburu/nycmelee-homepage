import banner from "../public/banner.jpeg";

export default function Banner() {
  return (
    <div
      className="flex flex-col gap-4 text-white justify-center items-center w-full h-[550px] bg-cover bg-center"
      style={{ backgroundImage: `url(${banner.src})` }}
    >
      <h1 className="text-6xl text-shadow-lg/50">NYCMelee</h1>
      <h2 className="text-3xl text-shadow-lg/50">
        Hosts of Stock Exchange, The Function, and more!
      </h2>
    </div>
  );
}
