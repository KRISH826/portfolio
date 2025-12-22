"use client"
import useWindowStore from '@/store/window';
import React, { ComponentType, useRef } from 'react';

const WindowWrapper = <P extends object>(
    windowKey: string,
    Component: ComponentType<P>
) => {
    const WrappedComponent = (props: P) => {
        const focusWindow = useWindowStore((state) => state.focusWindow);
        const windowState = useWindowStore((state) => state.window[windowKey]);
        const ref = useRef<HTMLDivElement>(null);

        // Don't render if window state is missing or closed
        if (!windowState || !windowState.isOpen) return null;

        const { zIndex } = windowState;

        return (
            <section
                id={windowKey}
                ref={ref}
                className="window absolute animate-window-open"
                style={{ zIndex }}
                onMouseDown={() => focusWindow(windowKey)}
            >
                <Component {...props} />
            </section>
        );
    };

    return WrappedComponent;
};

export default WindowWrapper;