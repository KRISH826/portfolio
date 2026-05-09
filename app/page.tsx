
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
      <main className="lg:hidden block">
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-lg font-bold">Mobile version coming soon</h1>
          <p className="text-sm">You can use the desktop version for now</p>
        </div>
      </main>
    </>
  );
}
