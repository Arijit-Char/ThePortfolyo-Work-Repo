import * as React from 'react';
import { motion } from 'framer-motion';
import { MenuItem } from './Menuitem';
import { FaHome } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { GoProjectSymlink } from "react-icons/go";
import { GrServices } from "react-icons/gr";
import { MdViewTimeline } from "react-icons/md";
import { MdRateReview } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";

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
        <MenuItem i={0} Title={'Home'} Links={'hero'} icon={<FaHome />} />
        <MenuItem i={1} Title={'Skills'} Links={'skills'} icon={<GiSkills />}/>
        <MenuItem i={2} Title={'Projects'} Links={'projects'} icon={<GoProjectSymlink />}/>
        <MenuItem i={3} Title={'Services'} Links={'services'} icon={<GrServices />}/>
        <MenuItem i={4} Title={'Timeline'} Links={'timeline'} icon={<MdViewTimeline />}/>
        <MenuItem i={5} Title={'Testimonial'} Links={'testimonial'} icon={<MdRateReview />}/>
        <MenuItem i={6} Title={'Contact Me'} Links={'contact'} icon={<RiContactsFill />}/>
    </motion.ul>
);

const itemIds = [0, 1, 2, 3, 4];
