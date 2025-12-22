"use client"
import useWindowStore from '@/store/window';
import WindowWrapper from '../WindowWrapper';

const Contact = () => {
    const closeWindow = useWindowStore((state) => state.closeWindow);
    return (
        <>
            <div className="rounded-xl overflow-hidden shadow-2xl bg-white">
                {/* Window Header */}
                <div id="window-header">
                    <div id="window-controls">
                        <button
                            onClick={() => closeWindow("contact")}
                            className="close"
                        />
                        <div className="minimize" />
                        <div className="maximize" />
                    </div>
                    <h2>Contact</h2>
                    <div className="w-14" />
                </div>
                {/* Window Body */}
                <div className="bg-white p-5 font-mono text-sm min-h-[350px]">
                    <p>Contact</p>
                </div>
            </div>
        </>
    )
}

const ContactWindow = WindowWrapper("contact", Contact);

export default ContactWindow