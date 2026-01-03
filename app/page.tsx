"use client";

import Banner from "@/components/Banner";
import banner from "../public/banner.jpeg";
import StartGGHomePage from "@/components/StartGGHomePage";
import StartGGEventInfo from "@/components/StartGGEventInfo";

export default function Home() {
  return (
    <main>
      <div className="min-h-screen bg-slate-950 font-sans text-slate-100">
        <nav className="mx-auto flex max-w-6xl items-center justify-between border-b border-slate-800 p-6">
          <div className="text-2xl font-black tracking-tighter text-green-400 uppercase italic">
            NYC Melee
          </div>
          <div className="hidden space-x-8 text-sm font-medium tracking-widest uppercase md:flex">
            <a href="#" className="hover:text-green-400">
              Schedule
            </a>
            <a href="#" className="hover:text-green-400">
              Rankings
            </a>
            <a href="#" className="hover:text-green-400">
              Replays
            </a>
            <a href="#" className="hover:text-green-400">
              Events
            </a>
            <a href="#" className="text-blue-400 hover:text-green-400">
              Discord
            </a>
          </div>
        </nav>

        <header className="mx-auto max-w-4xl px-6 py-24 text-center">
          <span className="rounded-full border border-green-500/20 bg-green-500/10 px-4 py-1 text-xs font-bold tracking-widest text-green-400 uppercase">
            Market Status: Open
          </span>
          <h1 className="mt-6 mb-6 text-6xl leading-tight font-black md:text-8xl">
            THE PULSE OF{" "}
            <span className="bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
              NYC MELEE.
            </span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-xl text-slate-400">
            Weekly brackets, high-level play, and the tightest community in the
            city. Welcome to the floor.
          </p>
          <div className="flex flex-col justify-center gap-4 md:flex-row">
            <button className="transform rounded-lg bg-green-500 px-8 py-4 font-bold text-slate-950 transition-all hover:scale-105 hover:bg-green-400">
              REGISTER ON START.GG
            </button>
            <button className="rounded-lg border border-slate-700 bg-slate-800 px-8 py-4 transition-all hover:bg-slate-700">
              JOIN THE DISCORD
            </button>
          </div>
        </header>

        <div className="overflow-hidden border-y border-slate-800 bg-slate-900 py-3 whitespace-nowrap">
          <div className="animate-marquee inline-block">
            <span className="mx-8 font-mono text-sm">
              <span className="text-green-400">▲ $FOX</span> 0.24
            </span>
            <span className="mx-8 font-mono text-sm">
              <span className="text-red-400">▼ $FALCO</span> 0.12
            </span>
            <span className="mx-8 font-mono text-sm">
              <span className="text-green-400">▲ $PUFF</span> 0.05
            </span>
            <span className="mx-8 font-mono text-sm">
              NEXT BRACKET:{" "}
              <span className="text-blue-400 underline">THURSDAY @ 6PM</span>
            </span>
            <span className="mx-8 font-mono text-sm">
              <span className="text-green-400">▲ $MARTH</span> 0.18
            </span>
          </div>
        </div>

        <section className="mx-auto grid max-w-6xl gap-8 px-6 py-20 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 transition-colors hover:border-green-500/50">
            <h3 className="mb-4 flex items-center gap-2 text-xl font-bold">
              <span className="text-green-400">01.</span> THE VENUE
            </h3>
            <p className="text-slate-400">
              Located in the heart of NYC. Professional monitors, plenty of
              setups, and food nearby.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 transition-colors hover:border-green-500/50">
            <h3 className="mb-4 flex items-center gap-2 text-xl font-bold">
              <span className="text-green-400">02.</span> THE BRACKET
            </h3>
            <p className="text-slate-400">
              Double elimination Singles and Amateur brackets for those who want
              to level up.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 transition-colors hover:border-green-500/50">
            <h3 className="mb-4 flex items-center gap-2 text-xl font-bold">
              <span className="text-green-400">03.</span> THE COMMUNITY
            </h3>
            <p className="text-slate-400">
              Friendlies start 2 hours before bracket. Come for the sets, stay
              for the vibes.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
