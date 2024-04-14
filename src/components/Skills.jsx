import React from 'react';
import { motion } from 'framer-motion';
import '../App.scss';

function Skills({ skills }) {

  return (
    <div className="skills" >
      <h2 className='skills-heading'>Skills</h2>

      <div className='skills-container'>
        {skills.map((skill) => (
          <motion.div
            key={skill._id}
            className='skill'
            whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
            whileTap={{ scale: 0.9, transition: { duration: 0.3 } }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <motion.img
              src={skill.image.url}
              alt={skill.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
            <div className='skill-details'>
              <motion.h3
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {skill.name}
              </motion.h3>
              <div className='skill-bar'>
                <motion.div
                  className='skill-bar-fill'
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.percentage}%` }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
