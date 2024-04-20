import * as React from 'react';
import { motion } from 'framer-motion';
import { MenuItem } from './Menuitem';
import './menu.scss';

const variants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
};

export const Navigation = () => (
    <motion.ul variants={variants}>
        <MenuItem i={0} Title={'Home'} Links={'hero'} />
        <MenuItem i={1} Title={'Skills'} Links={'skills'} />
        <MenuItem i={2} Title={'Projects'} Links={'projects'} />
        <MenuItem i={3} Title={'Services'} Links={'services'} />
        <MenuItem i={4} Title={'Timeline'} Links={'timeline'} />
        <MenuItem i={5} Title={'Testimonial'} Links={'testimonial'} />
        <MenuItem i={6} Title={'Contact Me'} Links={'contact'} />
    </motion.ul>
);

const itemIds = [0, 1, 2, 3, 4];
