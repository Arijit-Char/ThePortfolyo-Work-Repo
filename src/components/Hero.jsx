import React from 'react';
import { motion } from 'framer-motion';

function Hero({ about }) {
    const { name, title, subTitle, description, quote, exp_year, address, phoneNumber, contactEmail, avatar } = about;

    return (
        <motion.div className="hero" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <div className="hero-content">
                <div className="hero-info">
                    <h1>{name}</h1>
                    <h2>{title}</h2>
                    <h3>{subTitle}</h3>
                    <p>{description}</p>
                    <p>{`Years of Experience: ${exp_year}`}</p>
                    <p>{`Address: ${address}`}</p>
                    <p>{`Phone Number: ${phoneNumber}`}</p>
                    <p>{`Email: ${contactEmail}`}</p>
                </div>
                <div className="hero-image">
                    <img src={avatar.url} alt={name} />
                </div>
            </div>
        </motion.div>
    );
}

export default Hero;
