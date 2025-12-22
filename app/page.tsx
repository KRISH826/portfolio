
import Welcome from "@/components/Welcome";
import Dock from "@/components/Dock";
import { Contact, Terminal } from "@/components/windows";
import gsap from "gsap";
import { Draggable } from "gsap/all";

gsap.registerPlugin(Draggable);

export default function Home() {
  return (
    <>
      <main>
        <Welcome />
        <Dock />
        {/* sections */}
        <Terminal />
        <Contact />
      </main>
    </>
  );
}
