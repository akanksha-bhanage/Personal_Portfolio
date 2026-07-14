import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(139,92,246,0.15)] transition-all duration-300 group">
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-[#1A1A1F] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <div className="w-16 h-16 rounded-full bg-[#8B5CF6]/10 flex items-center justify-center border border-[#8B5CF6]/20">
          <img src={icon} alt={title} className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300" />
        </div>
        <h3 className="text-white text-[18px] font-bold text-center font-poppins">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-[#C5C5C5] text-[18px] max-w-3xl leading-[30px] font-poppins">
        I'm Akanksha Bhanage, a B.Tech Computer Science & Engineering student
        and Full Stack Developer with experience building MERN applications, deploying
        containerized projects using Docker and AWS EC2, and working with modern web
        technologies. I enjoy solving problems through DSA, leading technical events as
        an ACM Event Lead, and continuously expanding my skills in Cloud Computing and
        Artificial Intelligence.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');
