"use client"
import { socials } from '@/data/data';
import WindowControls from '../WindowControls';
import WindowWrapper from '../WindowWrapper';
import Image from 'next/image';

const Contact = () => {
    return (
        <>
            <div id="window-header">
                <WindowControls windowKey="contact" />
                <h2>Contact</h2>
            </div>
            {/* Window Body */}
            <div className="bg-white p-5 space-y-4">
                <h3>Let&apos;s Connect</h3>
                <p>Got and idea? A bug to squash? Or just want to say hello?</p>

                <ul className='mt-1'>
                    {
                        socials.map(({ id, bg, link, icon, text }) => (
                            <li key={id} style={{ backgroundColor: bg }}>
                                <a href={link} target="_blank" rel="noopener noreferrer">
                                    <Image className='size-5' src={icon} alt={text} width={24} height={24} />
                                    <p>{text}</p>
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}

const ContactWindow = WindowWrapper("contact", Contact);

export default ContactWindow