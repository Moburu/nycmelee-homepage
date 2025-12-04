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
      </main>
    </div>
  );
}
