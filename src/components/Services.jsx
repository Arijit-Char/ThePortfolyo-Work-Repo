import React from 'react';
import { motion } from 'framer-motion';
import '../App.scss';

function Services({ services }) {
    console.log(services);

    return (
        <div className="services">
            <h2 className="services-heading">Services</h2>

            <div className="services-container">
                {services.map((service) => (
                    <motion.div
                        key={service._id}
                        className="service"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <img src={service.image.url} alt={service.name} />
                        <div className="service-details">
                            <h3>{service.name}</h3>
                            <p>{service.desc}</p>
                            <div className="service-charge">
                                <span>{service.charge}</span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Services;
