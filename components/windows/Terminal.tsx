"use client"
import { techStack } from "@/data/data";
import WindowWrapper from "../WindowWrapper";
import { Check } from "lucide-react";
import useWindowStore from "@/store/window";

const Terminal = () => {
    const closeWindow = useWindowStore((state) => state.closeWindow);

    return (
        <div className="rounded-xl overflow-hidden shadow-2xl bg-white">
            {/* Window Header */}
            <div id="window-header">
                <div id="window-controls">
                    <button
                        onClick={() => closeWindow("terminal")}
                        className="close"
                    />
                    <div className="minimize" />
                    <div className="maximize" />
                </div>
                <h2>Tech Stack</h2>
                <div className="w-14" />
            </div>
            {/* Terminal Body */}
            <div className="bg-white p-5 font-mono text-sm min-h-[350px]">
                {/* Command Line */}
                <p className="text-gray-700 mb-4">
                    <span className="text-[#10b981] font-semibold">krishnendu@macbook</span>
                    <span className="text-gray-500">:</span>
                    <span className="text-[#3b82f6]">~</span>
                    <span className="text-gray-500">$</span>
                    <span className="text-gray-900 ml-2">show-tech-stack --all</span>
                </p>

                {/* Output Header */}
                <div className="flex items-center text-gray-500 border-b border-gray-200 pb-2 mb-3">
                    <div className="w-6" /> {/* Space for check icon */}
                    <p className="w-28 ml-4">CATEGORY</p>
                    <p>TECHNOLOGIES</p>
                </div>

                {/* Tech Stack Output */}
                <ul className="space-y-2">
                    {techStack.map(({ category, items }) => (
                        <li key={category} className="flex items-start">
                            <Check className="text-[#10b981] w-6 h-4 mt-0.5 shrink-0" />
                            <span className="text-[#10b981] w-28 ml-4 font-semibold shrink-0">{category}</span>
                            <ul className="flex flex-wrap gap-2">
                                {items.map((item) => (
                                    <li
                                        key={item}
                                        className="text-gray-700 bg-gray-100 px-2 py-0.5 rounded text-xs font-bold"
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>

                {/* Blinking Cursor */}
                <p className="text-gray-700 mt-6">
                    <span className="text-[#10b981] font-semibold">krishnendu@macbook</span>
                    <span className="text-gray-500">:</span>
                    <span className="text-[#3b82f6]">~</span>
                    <span className="text-gray-500">$</span>
                    <span className="ml-2 inline-block w-2 h-4 bg-gray-400 animate-pulse" />
                </p>
            </div>
        </div>
    );
};

const TerminalWindow = WindowWrapper("terminal", Terminal);

export default TerminalWindow;