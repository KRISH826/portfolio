"use client"
import WindowControls from '../WindowControls';
import WindowWrapper from '../WindowWrapper';

const Contact = () => {
    return (
        <>
            <div className="rounded-xl overflow-hidden shadow-2xl bg-white">
                {/* Window Header */}
                <div id="window-header">
                    <WindowControls windowKey="contact" />
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