import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScroll, useAnimatedValue, AnimatedBlock, interpolate } from 'react-ui-animate';
import '../App.scss';
import '../components/Menu/menu.scss';
import { useRef } from 'react';
import { useCycle } from 'framer-motion';
import { Navigation } from './Menu/Navigation';
import { MenuToggle } from './Menu/Menutoggle';
import { useDimensions } from './Menu/use-dimention';

const sidebar = {
    open: (width = 400) => ({
        clipPath: `circle(${width * 2 + 400}px at calc(100% - 40px) 40px)`,
        transition: {
            type: 'spring',
            stiffness: 20,
            restDelta: 2,
        },
    }),
    closed: {
        clipPath: 'circle(30px at calc(100% - 40px) 40px)',
        transition: {
            delay: 0.5,
            type: 'spring',
            stiffness: 400,
            damping: 40,
        },
    },
};

export default function Header({ about }) {
    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);

    const y = useAnimatedValue(0, { immediate: true });
    useScroll(({ scrollY }) => {
        y.value = scrollY;
    });

    const boxShadow = interpolate(y.value, [0, 400], ['0px 0px 0px rgba(0,0,0,0.2)', '0px 4px 20px rgba(0,0,0,0.2)'], {
        extrapolate: 'clamp',
    });

    const imageSize = interpolate(y.value, [0, 400], [100, 50], {
        extrapolate: 'clamp',
    });

    return (
        <div className="header">
            <AnimatedBlock
                style={{
                    backgroundColor: 'rgb(131,58,180)',
                    backgroundImage: 'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 55%, rgba(252,176,69,1) 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    padding: 20,
                    position: 'fixed',
                    width: '100%',
                    boxShadow,
                    zIndex: 10,
                }}
            >
                <AnimatedBlock
                    style={{
                        width: imageSize,
                        height: imageSize,
                        backgroundImage: `url(${about.avatar.url})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        borderRadius: '50%',
                    }}
                />

                <div
                    style={{
                        fontWeight: 'bold',
                        fontSize: 25,
                        marginLeft: 20,
                        flex: 1,
                        color: '#ff5a00',
                    }}
                >
                    {`Hello! I'm ${about?.name}`}
                    <p style={{ fontSize: '0.7rem', fontWeight: '400' }}>{about.quote}</p>
                </div>
                <motion.nav initial={false} animate={isOpen ? 'open' : 'closed'} custom={height} ref={containerRef}>
                    <motion.div className="background" variants={sidebar} />
                    <Navigation />
                    <MenuToggle toggle={() => toggleOpen()} />
                </motion.nav>
            </AnimatedBlock>
        </div>
    );
}
