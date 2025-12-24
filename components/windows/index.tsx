"use client";
import dynamic from "next/dynamic";
import Terminal from "./Terminal";
import Contact from "./Contact";
import Finder from "./Finder";
import TextFile from "./TextFile";
import ImageFile from "./ImageFile";

// Dynamic import with SSR disabled to prevent pdf.js DOMMatrix error
const Resume = dynamic(() => import("./Resume"), { ssr: false });

export { Terminal, Contact, Resume, Finder, TextFile, ImageFile };