import CommunityHub from "./Communityhub";
import StartGGEventInfo from "./StartGGEventInfo";

export default function StartGGHomePage() {
  return (
    <div className="grid grid-cols-3 grid-rows-1 gap-4 text-white items-center justify-center outline-solid w-full h-[400px]">
      <CommunityHub />
      <StartGGEventInfo />
      <h1 className="text-6xl text-center">Test</h1>
    </div>
  );
}
