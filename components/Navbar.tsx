import Image from "next/image";
import LinkWithIcon from "./LinkWithIcon";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ConnectedTvIcon from "@mui/icons-material/ConnectedTv";
import EmailIcon from "@mui/icons-material/Email";
import SavingsIcon from "@mui/icons-material/Savings";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import SmsFailedIcon from "@mui/icons-material/SmsFailed";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

export default function Navbar() {
  return (
    <header className="bg-zinc-800 sticky top-0 z-50">
      <div className="flex items-center justify-between mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div>
          <Image
            src="/logo.png"
            alt="NYC Melee Logo"
            width={48}
            height={48}
            className="h-12 w-auto"
          />
        </div>
        <div className="flex flex-row gap-2 text-white justify-around items-center w-full">
          <LinkWithIcon
            href="/events"
            label="Events"
            icon={<CalendarMonthIcon />}
          />
          <LinkWithIcon
            href="/replays"
            label="Replays"
            icon={<ConnectedTvIcon />}
          />
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
            href="https://www.twitch.tv/nycmelee"
            label="Twitch"
            icon={<SmsFailedIcon />}
          />
          <LinkWithIcon
            href="https://discord.gg/v4swpxrU"
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
      </div>
    </header>
  );
}
