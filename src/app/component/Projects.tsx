// pages/index.tsx
"use client";
import { motion } from "framer-motion";
import styles from "./Projects.module.css";
import React, { createContext } from "react";
import { useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useState } from "react";
import Image from "next/image";
import { useInView } from "framer-motion";

import Projectpic1 from "../../../public/assets/1.png";
import Projectpic2 from "../../../public/assets/2.png";
import Projectpic3 from "../../../public/assets/3.png";

export default function Projects() {
  const projectDetails = [
    {
      name: "Coffee Man",
      time: "Dec 2022",
      tool: ["Java", "JavaFx"],
      description:
        "this is a part of Programming Methodulogy subject. I have to create a game logic with Java and gui with JavaFx. along with OOP. It was created on December 2022.",
      repo: "https://github.com/tusaunyapat/Coffee-Man",
      pic: Projectpic1,
    },
    {
      name: "Uno game",
      time: "May 2023",
      tool: ["HTML", "CSS", "Javascript", "EC2"],
      description:
        "This is a part of finalproject. it is a website used to play Uno game with your friends in realtime update. Server using EC2.",
      repo: "https://github.com/tusaunyapat/Coffee-Man",
      pic: Projectpic3,
    },
    {
      name: "Weather Report (IoT)",
      time: "May 2024",
      tool: ["Arduino", "STM32", "Firebase", "React"],
      description:
        "This website used to showing the realtime PM 2.5 value. Measuring with DHT11 sensor on board and sending data to nodeMCU that was conected to realtime database of Firebase.",
      repo: "https://github.com/tusaunyapat/Coffee-Man",
      pic: Projectpic2,
    },
  ];
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
    <div className=" w-full p-2 lg:p-6 overflow-hidden py-16 flex flex-col items-center justify-center ">
      <motion.p
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        className={` text-[2rem] sm:text-[3rem] font-bold text-white text-center `}
      >
        <span className="text-white/10">{"<"}</span>
        Projects
        <span className="text-white/10">{" />"}</span>
      </motion.p>
      <div className={``}>
        <div className={``}>
          {projectDetails.map((project, index) => {
            const itemVariants = {
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            };
            return (
              <div className="flex flex-col my-10 mx-4 max-w-6xl lg:flex-row justify-start items-center  border-b border-white/30 pb-2 lg:border-none">
                <motion.div
                  key={index}
                  className={` w-full lg:w-3/5 flex items-center justify-center `}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  variants={itemVariants}
                >
                  <Image
                    src={project.pic} // Ensure these images exist in the public/images directory
                    alt={`Image ${project.name}`}
                    className={`${styles.image} shadow-lg shadow-black rounded-2xl `}
                  />
                </motion.div>
                <motion.div
                  className={`relative mx-4 h-auto w-full lg:w-2/5`}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  variants={itemVariants}
                >
                  <p className="text-white/50 font-bold text-2xl lg:text-[2rem] mt-6 lg:mt-0">
                    #{index + 1}
                    <span className="text-sm text-white/30 px-4 font-normal">
                      {project.time}
                    </span>
                  </p>

                  <h1 className="text-white text-4xl lg:text-5xl font-bold py-1">
                    {project.name}
                  </h1>

                  <ul className="flex flex-row py-1">
                    {project.tool.map((tool, index) => (
                      <li
                        key={index} // added the key to each tool list item
                        className="border border-1 border-blue rounded-md mr-2 px-2 py-1"
                      >
                        <p className="text-xs font-normal text-blue">{tool}</p>
                      </li>
                    ))}
                  </ul>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    whileInView="visible"
                    viewport={{ once: false }}
                    className="text-white/60 py-1 font-normal text-sm"
                  >
                    {project.description}
                  </motion.p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
      {/* <div className="flex flex-col max-w-[50rem]">
        <div className="project w-full">
          <Image
            src={Projectpic1}
            className="w-auto h-auto"
            alt={`Image 01`}
            width={800}
            height={600}
          />
        </div>
      </div> */}
    </div>
  );
}
