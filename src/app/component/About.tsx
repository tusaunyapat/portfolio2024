"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useState } from "react";
import style from "../component/About.module.css";
import Graph from "./svg/graph";
import Linegraph from "./svg/linegraph";
import Person from "./svg/Person";
export default function About() {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement | null>(null);
  const [replay, setReplay] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const { top } = ref.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (top < windowHeight * 0.8) {
          controls.start({ opacity: 1, y: 0 });
          setReplay(true); // Trigger replay when visible
        } else {
          controls.start({ opacity: 0, y: 20 });
          setReplay(false); // Stop replay when not visible
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);

  return (
    <div className="h-screen w-full mt-2 flex items-center p-2 lg:p-6  py-16 overflow-hidden lg:justify-center">
      <div className="h-full flex flex-col  lg:flex-row items-center justify-center ">
        <div className="flex flex-col justify-center gap-10 px-2 w-full lg:w-8/12 items-center sm:items-start max-w-[50rem]">
          <motion.p
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className={`${style.topic} text-[2rem] sm:text-[3rem] font-bold text-base flex items-center justify-center w-full`}
          >
            <span className="text-base/10 text-[2rem] sm:text-[3rem]">
              {"<"}
            </span>
            About &nbsp;
            <span className="text-base/10 text-[2rem] sm:text-[3rem]">
              {" />"}
            </span>
          </motion.p>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className={`${style.topic} text-md items-center flex flex-row justify-start  text-base `}
          >
            <p className="text-sm sm:text-xl text-justify  px-1 sm:px-10  lg:px-12">
              Hi! I’m Tus, a Computer Engineering student with a keen interest
              in <span className="text-blue font-bold">web development</span>{" "}
              and{" "}
              <span className="text-yellow font-bold">
                software engineering
              </span>
              . Currently in my third year, I’ve gained experience in data
              structures, algorithms, software and hardware development, as well
              as <span className="text-red font-bold">machine learning</span> .
              I’m passionate about creating innovative web solutions and
              exploring data engineering. I’m actively seeking an{" "}
              <span className="text-yellow font-bold">internship </span> to
              apply my skills in a real-world setting and contribute to
              impactful projects.
            </p>
          </motion.div>
        </div>
        <div className="flex flex-row items-center justify-center py-24 sm:py-36 lg:py-10 pl-4 scale-[2] sm:scale-[3.5] ">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className={`${style.topic} w-4/12 flex items-center justify-center `}
          >
            <Person />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
