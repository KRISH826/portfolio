
import Welcome from "@/components/Welcome";
import Dock from "@/components/Dock";
import { Contact, Resume, Terminal } from "@/components/windows";

export default function Home() {
  return (
    <>
      <main>
        <Welcome />
        <Dock />
        {/* sections */}
        <Terminal />
        <Contact />
        <Resume />
      </main>
    </>
  );
}
