"use client";
import useWindowStore from "@/store/window";

interface WindowControlsProps {
    windowKey: string;
}

const WindowControls = ({ windowKey }: WindowControlsProps) => {
    const closeWindow = useWindowStore((state) => state.closeWindow);

    return (
        <div id="window-controls">
            <button onClick={() => closeWindow(windowKey)} className="close" />
            <div className="minimize" />
            <div className="maximize" />
        </div>
    );
};

export default WindowControls;
