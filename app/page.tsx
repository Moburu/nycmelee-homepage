import Banner from "@/components/Banner";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-start justify-start bg-zinc-800">
      <Banner />
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
    </main>
  );
}
