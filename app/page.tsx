import Banner from "@/components/Banner";
import banner from "../public/banner.jpeg";
import StartGGHomePage from "@/components/StartGGHomePage";

export default function Home() {
  return (
    <main>
      <div
        className="bg-cover bg-center bg-black/60 bg-blend-multiply bg-fixed"
        style={{ backgroundImage: `url(${banner.src})` }}
      >
        <div className="flex min-h-screen w-full flex-col items-start justify-start">
          <Banner />
          <StartGGHomePage />
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
