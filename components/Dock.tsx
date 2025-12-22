"use client"
import { dockApps } from '@/data/data';
import Image from 'next/image';
import gsap from 'gsap';
import { useRef } from 'react'
import { useGSAP } from '@gsap/react';
import useWindowStore from '@/store/window';

const Dock = () => {
    const docRef = useRef<HTMLDivElement>(null);
    const { window: windows, openWindow, closeWindow } = useWindowStore();
    useGSAP(() => {
        const dock = docRef.current;
        if (!dock) return;
        const icons = dock.querySelectorAll('.dock-icon');
        const animatedIcons = (mouseX: number) => {
            const { left } = dock.getBoundingClientRect();
            icons.forEach((icon) => {
                const { left: iconLeft, width } = icon.getBoundingClientRect();
                const center = iconLeft - left + width / 2;
                const distance = Math.abs(mouseX - center);
                const intensity = Math.exp(-(distance ** 2.35) / 10000);
                const scale = 1 + intensity * 0.1;
                const y = -15 * intensity;
                gsap.to(icon, {
                    duration: 0.3,
                    scale,
                    ease: 'power1.out',
                    y,
                    overwrite: 'auto',
                })
            })
        }
        const handleMouseMove = (e: { clientX: number; }) => {
            const { left } = dock.getBoundingClientRect();
            animatedIcons(e.clientX - left);
        }

        const resetIcons = () => {
            icons.forEach((icon) => {
                gsap.to(icon, {
                    duration: 0.3,
                    scale: 1,
                    y: 0,
                    overwrite: 'auto',
                })
            })
        }
        dock.addEventListener('mousemove', handleMouseMove);
        dock.addEventListener('mouseleave', resetIcons);

        return () => {
            dock.removeEventListener('mousemove', handleMouseMove);
            dock.removeEventListener('mouseleave', resetIcons);
        }
    }, [])
    const toggleApp = (app: { id: string; canOpen: boolean }) => {
        console.log('Clicked app ID:', app.id);  // Debug: which app was clicked
        if (!app.canOpen) return;
        const isOpen = windows[app.id]?.isOpen;
        if (isOpen) {
            closeWindow(app.id);
        } else {
            openWindow(app.id);
        }

        // Log the ACTUAL current state from store (not stale reference)
        console.log('After update:', useWindowStore.getState().window);
    }
    return (
        <section id='dock'>
            <div ref={docRef} className='dock-container'>
                {
                    dockApps.map(({ id, name, icon, canOpen }) => (
                        <div key={id} className='relative flex justify-center'>
                            <button type='button' className='dock-icon' aria-label={name} disabled={!canOpen} onClick={() => toggleApp({ id, canOpen })}>
                                <Image width={56} height={56} src={`/images/${icon}`} alt={name} className='w-14 h-14' />
                            </button>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Dock