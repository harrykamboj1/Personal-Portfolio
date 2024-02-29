import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";

import Wrapper from "./Wrapper";
import flag from "../assets/indian-flag.png";
import pe1 from "../assets/sec-2-p-e-1.png";
import pe2 from "../assets/sec-2-p-e-2.png";
import Div from "./Div";

const AboutMe = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [100, 0], { clamp: false });
  const y2 = useTransform(scrollY, [0, 500], [0, -200], { clamp: false });
  return (
    <div
      id="about"
      className="w-full py-[50px] md:py-[100px] bg-white text-black relative overflow-hidden"
    >
      {/* BACKGROUND ELEMENTS START */}
      <span className="sec-2-bg-gradient" />
      <motion.img className="sec-2-p-e-1" style={{ y: y1 }} src={pe1} />
      <motion.img className="sec-2-p-e-2" style={{ y: y2 }} src={pe2} />
      {/* BACKGROUND ELEMENTS END */}

      <Wrapper>
        {/* HEADING START */}
        <Div className="text-[40px] md:text-[90px] 2xl:text-[120px] leading-[52px] md:leading-[95px] 2xl:leading-[123px] font-oswald uppercase mb-[25px] md:mb-[40px] 2xl:mb-[60px] flex flex-col relative">
          <span>A Software Developer</span>
          <span className="flex items-center gap-2">
            <span>Based</span>
            <img
              src={flag}
              alt=""
              className="w-[70px] md:w-[150px] 2xl:w-[190px] block mt-1 md:mt-2"
            />
            <span>In India</span>
          </span>
        </Div>
        {/* HEADING END */}

        {/* PARAGRAPH START */}
        <Div className="max-w-[759px] 2xl:max-w-[959px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] mb-[20px] md:mb-[30px] 2xl:mb-[50px] relative">
          Hello! I'm Harnoor Singh, a dedicated Full Stack Developer with a
          strong focus on fintech. With over 2 years of experience in the
          industry, I've developed a diverse skill set that includes Java,
          JavaScript, ReactJS, NodeJS, Spring Boot, Hibernate, Prisma,
          PostgreSQL, Express, AWS, TypeScript, MongoDB, and Tailwind CSS.
        </Div>
        {/* PARAGRAPH END */}

        {/* PARAGRAPH START */}
        <Div className="max-w-[759px] 2xl:max-w-[959px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] mb-[20px] md:mb-[30px] 2xl:mb-[50px] relative">
          I've successfully completed more than 10 projects, each of which has
          allowed me to refine my skills and contribute to the fintech sector.
          My expertise lies in creating efficient, scalable web applications
          that meet the unique needs of my clients.
        </Div>
        {/* PARAGRAPH END */}

        {/* PARAGRAPH START */}
        <Div className="max-w-[759px] 2xl:max-w-[959px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] relative">
          As a professional, I believe in continuous learning and leveraging
          technology to transform the financial sector. I bring this perspective
          to every project I undertake, ensuring that I deliver solutions that
          are not only high-quality but also innovative. If you're looking for a
          Full Stack Developer who can deliver tailored fintech solutions and is
          committed to excellence, feel free to get in touch. I'm excited to
          help bring your vision to life and contribute to your success
        </Div>
        {/* PARAGRAPH END */}
      </Wrapper>
    </div>
  );
};

export default AboutMe;
