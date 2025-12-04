import LocationCityIcon from "@mui/icons-material/LocationCity";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center font-sans bg-zinc-800">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-start py-32 px-16 bg-zinc-800 sm:items-start">
        <div className="flex flex-row items-center mb-8 sm:items-start">
          <LocationCityIcon fontSize="large" />
          <LocationCityIcon fontSize="large" />
          <LocationCityIcon fontSize="large" />
          <LocationCityIcon fontSize="large" />
        </div>
        <h1 className="text-6xl">NYCMelee</h1>
        <h2 className="text-3xl">
          Hosts of Stock Exchange, The Function, and more!
        </h2>
      </div>
      <div className="grid grid-cols-3 grid-rows-1 gap-4 text-white items-center justify-center bg-red-500 w-full h-[400px]">
        <h1 className="text-6xl text-center">NYCMelee</h1>
        <h1 className="text-6xl text-center">NYCMelee</h1>
        <h1 className="text-6xl text-center">NYCMelee</h1>
      </div>
      <div className="flex flex-row gap-4 text-white justify-around items-center bg-green-500 w-full h-[400px]">
        <h1 className="text-6xl">Article</h1>
        <h1 className="text-6xl">Article</h1>
        <h1 className="text-6xl">Article</h1>
      </div>
      <div className="flex flex-row gap-4 text-white justify-around items-center bg-violet-500 w-full h-[400px]">
        <p className="text-3xl">Discord</p>
        <p className="text-3xl">Twitter</p>
        <p className="text-3xl">YouTube</p>
        <p className="text-3xl">Email</p>
      </div>
    </main>
  );
}
