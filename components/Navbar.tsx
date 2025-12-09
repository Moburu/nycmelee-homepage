"use client";

import { useState } from "react";
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
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";

const navLinks = [
  {
    href: "/events",
    label: "Events",
    icon: <CalendarMonthIcon />,
  },
  {
    href: "/replays",
    label: "Replays",
    icon: <ConnectedTvIcon />,
  },
  {
    href: "https://twitter.com/NYCMelee",
    label: "Twitter",
    icon: <TwitterIcon />,
  },
  {
    href: "https://www.youtube.com/@NYCMelee",
    label: "Youtube",
    icon: <YouTubeIcon />,
  },
  {
    href: "https://www.twitch.tv/nycmelee",
    label: "Twitch",
    icon: <SmsFailedIcon />,
  },
  {
    href: "https://discord.gg/v4swpxrU",
    label: "Discord",
    icon: <SportsEsportsIcon />,
  },
  {
    href: "newyorkcitymelee@gmail.com",
    label: "Email",
    icon: <EmailIcon />,
  },
  {
    href: "https://www.buymeacoffee.com/nycmelee",
    label: "Support",
    icon: <SavingsIcon />,
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-zinc-900 shadow-lg sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between">
          <Link className="flex-shrink-0" href="/" aria-label="Go to homepage">
            <Image
              src="/logo.png"
              alt="NYC Melee Logo"
              width={40}
              height={40}
              className="h-10 w-auto cursor-pointer"
              priority
            />
          </Link>

          <div className="flex sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-zinc-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-zinc-400 p-2 rounded-md transition-colors"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <CloseIcon className="block h-6 w-6" />
              ) : (
                <MenuIcon className="block h-6 w-6" />
              )}
            </button>
          </div>

          <div className="hidden sm:flex flex-row gap-4 text-zinc-200 items-center">
            {navLinks.map((link) => (
              <LinkWithIcon key={link.href} {...link} />
            ))}
          </div>
        </div>
        <div
          className={`sm:hidden transition-all duration-300 ease-in-out ${
            isOpen
              ? "max-h-screen opacity-100 mt-2"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
          id="mobile-menu"
        >
          <div className="pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <div
                key={link.href}
                onClick={() => setIsOpen(false)}
                className="block pl-3 pr-4 py-2 text-base font-medium text-zinc-200 hover:bg-zinc-800 rounded-md"
              >
                <LinkWithIcon {...link} className="w-full justify-start" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
