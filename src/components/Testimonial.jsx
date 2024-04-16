import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../App.scss';

const Testimonial = ({ testimonial }) => {
    const [testimonialIndex, setTestimonialIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setTestimonialIndex((prevIndex) => (prevIndex === testimonial.length - 1 ? 0 : prevIndex + 1));
        }, 10000);
        return () => clearInterval(interval);
    }, [testimonial.length]);

    return (
        <section className="testimonials-container">
            <div className="progress-bar"></div>
            <i className="fas fa-quote-right fa-quote"></i>
            <i className="fas fa-quote-left fa-quote"></i>
            <p className="testimonial">{testimonial[testimonialIndex].review}</p>
            <figure className="user">
                <img src={testimonial[testimonialIndex].image.url} alt="user" className="user-image" />
                <figcaption className="user-details">
                    <h4 className="username">{testimonial[testimonialIndex].name}</h4>
                    <p className="role">{testimonial[testimonialIndex].position}</p>
                </figcaption>
            </figure>
        </section>
    );
};

export default Testimonial;
