"use client";
import WindowWrapper from "../WindowWrapper";
import WindowControls from "../WindowControls";
import { Download } from "lucide-react";
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();

const Resume = () => {
    return (
        <div className="h-[80vh] bg-white rounded-xl overflow-hidden flex flex-col">
            <div id="window-header">
                <WindowControls windowKey="resume" />
                <h2>Resume</h2>
                <a className="cursor-pointer" href="/files/resume.pdf" download>
                    <Download className="icon" />
                </a>
            </div>
            <div className="bg-white overflow-x-hidden p-5 flex justify-center">
                <div>
                    <Document file="/files/resume.pdf" >
                        <Page pageNumber={1} renderAnnotationLayer renderTextLayer width={550} />
                    </Document>
                </div>
            </div>
        </div>
    );
};

const ResumeWindow = WindowWrapper("resume", Resume);

export default ResumeWindow;