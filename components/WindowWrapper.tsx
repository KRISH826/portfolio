"use client"
import useWindowStore from '@/store/window';
import React, { ComponentType, useRef } from 'react';
import { motion, AnimatePresence } from "motion/react";

const WindowWrapper = <P extends { data?: unknown }>(
    windowKey: string,
    Component: ComponentType<P>
) => {
    const WrappedComponent = (props: P) => {
        const focusWindow = useWindowStore((state) => state.focusWindow);
        const windowState = useWindowStore((state) => state.window[windowKey]);
        const ref = useRef<HTMLDivElement>(null);

        // Don't render if window state is missing
        if (!windowState) return null;

        const { zIndex, isOpen, data } = windowState;
        console.log(`WindowWrapper [${windowKey}]: isOpen=${isOpen}, zIndex=${zIndex}`);

        return (
            <AnimatePresence>
                {isOpen && (
                    <motion.section
                        id={windowKey}
                        ref={ref}
                        className="window absolute"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        style={{ zIndex }}
                        onMouseDown={() => focusWindow(windowKey)}
                        drag
                        dragMomentum={false}
                        whileDrag={{ scale: 1.02 }}
                    >
                        <Component {...props} data={data} />
                    </motion.section>
                )}
            </AnimatePresence>
        );
    };

    return WrappedComponent;
};

export default WindowWrapper;