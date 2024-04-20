import * as React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import './menu.scss';
const variants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 },
        },
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 },
        },
    },
};

const colors = ['#FF008C', '#D309E1', '#9C1AFF', '#7700FF', '#4400FF', '#2600FF', '#1400FF'];

export const MenuItem = ({ i, Links, Title }) => {
    const style = { border: `2px solid ${colors[i]}` };
    return (
        <Link activeClass="active" to={Links} spy={true} smooth={true} hashSpy={true} offset={100} duration={500} delay={50} isDynamic={true}>
            <motion.li variants={variants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <div className="icon-placeholder" style={style} />
                <div className="text-placeholder" style={style}>
                    {Title}
                </div>
            </motion.li>
        </Link>
    );
};
