import Banner from "@/components/Banner";
import EmailIcon from "@mui/icons-material/Email";
import LinkWithIcon from "../components/LinkWithIcon";
import SavingsIcon from "@mui/icons-material/Savings";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
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

      <div className="flex flex-row gap-4 text-white justify-around items-center bg-violet-500 w-full h-[400px]">
        <LinkWithIcon
          href="https://twitter.com/NYCMelee"
          label="Twitter"
          icon={<TwitterIcon />}
        />
        <LinkWithIcon
          href="https://www.youtube.com/@NYCMelee"
          label="Youtube"
          icon={<YouTubeIcon />}
        />
        <LinkWithIcon
          href="https://discord.gg/g87pFQRc"
          label="Discord"
          icon={<SportsEsportsIcon />}
        />
        <LinkWithIcon
          href="newyorkcitymelee@gmail.com"
          label="Email"
          icon={<EmailIcon />}
        />
        <LinkWithIcon
          href="https://www.buymeacoffee.com/nycmelee"
          label="Support"
          icon={<SavingsIcon />}
        />
      </div>
    </main>
  );
}
