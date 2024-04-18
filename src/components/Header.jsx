import React from 'react';
import { useScroll, useAnimatedValue, AnimatedBlock, interpolate } from 'react-ui-animate';
import { IoMdMenu } from 'react-icons/io';
import '../App.scss';

export default function Header({ about }) {
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
                zIndex: 1000,
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
                        fontSize: 20,
                        marginLeft: 20,
                        flex: 1,
                        color: '#353535',
                    }}
                >
                    {`Hello! I'm ${about?.name}`}
                    <p style={{ fontSize: '0.7rem', fontWeight: '400' }}>{about.quote}</p>
                </div>

                <div style={{ color: '#353535', cursor: 'pointer' }}>
                    <IoMdMenu size={30} />
                </div>
            </AnimatedBlock>
        </div>
    );
}
