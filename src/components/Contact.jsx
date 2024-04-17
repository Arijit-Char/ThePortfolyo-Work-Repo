import React from 'react';
import { motion } from 'framer-motion';
import '../App.scss';

const Contact = ({ contact }) => {
    return (
        <div className="contact-container">
            <h2 className="contact-heading">Contact</h2>
            <div className="contact-links">
                {contact.map((contact, index) => (
                    <motion.a key={index} href={contact.url} className="contact-link" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                        <img src={contact.image.url} alt={contact.platform} className="contact-image" />
                        <span className="contact-platform">{contact.platform}</span>
                    </motion.a>
                ))}
            </div>
        </div>
    );
};

export default Contact;
