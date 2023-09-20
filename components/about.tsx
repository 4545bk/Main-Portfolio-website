"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      I'm a creative Full Stack Web Developer based in {" "}
        <span className="font-medium">Ethiopia</span>, I decided to pursue my
        passion for programming also problem solving. I am learning Software Engineering in a Addis Ababa university and also in coding bootcamp {" "}
        <span className="font-medium">full-stack web development</span>.{" "} 
        <span className="italic">In addition to my technical expertise,</span> I have also pursued studies in Economics.<span className="underline">This multidisciplinary approach has allowed me to develop a unique perspective when it comes to  problem-solving.</span>
        By combining my knowledge of software engineering with  economic principles, I can analyze data, think critically, and make informed decisions that consider both technical feasibility and economic viability.
        {" "}
        <span className="font-medium">
        Full Stack Software Developer | MERN | React | Node | Express | Javascript | Python | Java        </span>
        . I am also familiar with editing and graphics. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full/part-time position</span> as a Fullstack
        developer.
      </p>

      <p>
        <span className="italic">Detail-orientated Developer</span>, adapt at interpreting blueprints,working with others, and meeting production deadlines. Skilled at quickly learning new processes{" "}
        <span className="font-medium">technologies, and machinery </span>. Self-motivated with strong organizational and time management abilities.  Most importantly, {" "}
        <span className="font-medium">I Love How I constantly trying to </span> learn new skills to 
        improve myself and my work.
      </p>
    </motion.section>
  );
}
