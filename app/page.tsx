
import Welcome from "@/components/Welcome";
import Dock from "@/components/Dock";
import { Contact, Finder, Resume, Terminal, TextFile, ImageFile } from "@/components/windows";

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
        <Finder />
        <TextFile />
        <ImageFile />
      </main>
    </>
  );
}
