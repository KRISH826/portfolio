"use client"

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react';

gsap.registerPlugin(useGSAP);

const FONT_SIZE = {
    title: { min: 400, max: 600, default: 400 },
    subtitle: { min: 300, max: 500, default: 300 }
}

const renderText = (text: string, className: string | undefined, baseweight = 400) => {
    return [...text].map((char, index) => {
        return (
            <span
                key={index}
                className={className}
                style={{ fontWeight: baseweight + index }}
            >
                {char}
            </span>
        )
    })
}

const setUpTextHover = (container: HTMLElement, type: string) => {
    if (!container) return;
    const letters = container.querySelectorAll('span');
    const { min, max, default: base } = FONT_SIZE[type as keyof typeof FONT_SIZE];

    let letterCenters: number[] = [];
    const updateCenters = () => {
        letterCenters = Array.from(letters).map(letter => {
            const { left, width } = letter.getBoundingClientRect();
            return left + width / 2;
        });
    };
    // Initial calculation
    updateCenters();
    window.addEventListener('resize', updateCenters);

    const animatedLetter = (letter: HTMLElement, weight: number, duration = 0.5) => {
        return gsap.to(letter, {
            duration,
            ease: "power2.out",
            fontWeight: weight,
            overwrite: 'auto',
        });
    };

    const handleMouseHover = (e: MouseEvent) => {
        const mouseX = e.clientX;
        letters.forEach((letter, index) => {
            const centerX = letterCenters[index];
            const distance = Math.abs(mouseX - centerX);
            const intensity = Math.exp(-(distance ** 2) / 10000)
            animatedLetter(letter, min + (max - min) * intensity, 0.5);
        })
    }

    const handleMouseLeave = () => {
        letters.forEach((letter) => {
            animatedLetter(letter, base, 0.5);
        })
    }

    container.addEventListener('mousemove', handleMouseHover);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
        container.removeEventListener('mousemove', handleMouseHover);
        container.removeEventListener('mouseleave', handleMouseLeave);
        window.removeEventListener('resize', updateCenters);
    }
}

const Welcome = () => {
    const titleRef = useRef<HTMLParagraphElement>(null);
    const subtitleRef = useRef<HTMLHeadingElement>(null);

    useGSAP(() => {
        const cleanupTitle = setUpTextHover(titleRef.current as HTMLElement, 'title');
        const cleanupSubtitle = setUpTextHover(subtitleRef.current as HTMLElement, 'subtitle');
        return () => {
            if (cleanupTitle) cleanupTitle();
            if (cleanupSubtitle) cleanupSubtitle();
        };
    });
    return (
        <section id='welcome'>
            <p ref={subtitleRef}>{renderText("Hey, I'm Krishnendu Welcome To My", "text-3xl font-georama", 300)}</p>
            <h1 className='mt-5 font-georama italic tracking-widest' ref={titleRef}>{renderText("portfolio.", "text-6xl font-georama ", 400)}</h1>
        </section>
    )
}

export default Welcome