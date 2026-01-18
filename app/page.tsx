
import Welcome from "@/components/Welcome";
import Dock from "@/components/Dock";
import { Contact, Finder, Resume, Terminal, TextFile, ImageFile, Gallery, Safari } from "@/components/windows";


export default function Home() {

  return (
    <>
      <main className="lg:block hidden">
        <Welcome />
        <Dock />
        {/* sections */}
        <Safari />
        <Terminal />
        <Contact />
        <Resume />
        <Finder />
        <TextFile />
        <ImageFile />
        <Gallery />
      </main>
      <main>

      </main>
    </>
  );
}
