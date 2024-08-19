"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useState } from "react";
import Timeline from "./Timeline";
import Tu from "../../../public/assets/tu.png";
import Cpcu from "../../../public/assets/cocu.png";
import Mcv from "../../../public/assets/mcv.png";
import { TimelineItem } from "./Timeline";

export default function Experience() {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement | null>(null);
  const [replay, setReplay] = useState(false);

  const timelineItems = [
    {
      date: "June 2024",
      stack: ["PHP", "jquery"],
      position: "Frontend-developer",
      description:
        "After completing the design phase, where I also took on the role of UX/UI designer for this project, I transitioned into the development phase with my team. We collaborated closely to bring the design to life, ensuring that every component and function aligned with the users' needs and the design specifications I had created.",
      pic: Mcv,
    },
    {
      date: "May 2024",
      stack: ["Figma"],
      position: "UX / UI Designer",
      description:
        "My role also involved planning the implementation of new functionalities and enhancements, ensuring seamless integration with the existing website structure. This collaborative effort has been essential in achieving a user-friendly design that meets and exceeds the stakeholders' expectations.",
      pic: Mcv,
    },
    {
      date: "August 2024 - Present",
      stack: [],
      position: "Teaching Assistant (TA)",
      description:
        "My responsibility is to prepare and standby to answer the question from students, including help them to do class work. It started from create static web page, connecting to server and using API to fetching data from server (PHP)",
      pic: Cpcu,
    },
  ];

  const educationTimeline = [
    {
      date: "2022 - Present",
      stack: [],
      position: "Computer Engineering, B.Eng",
      description:
        "a computer engineering student from Chulaongkorn university, Junior. GPA: 3.74 (4 semester)",
      pic: Cpcu,
    },
    {
      date: "2019 - 2022",
      stack: [],
      position: "Triamudomsuksa school",
      description: "Sci-Math with GPA: 3.83",
      pic: Tu,
    },
  ];

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
    <div className="min-h-screen  w-full p-2 lg:p-6  pt-16  ">
      <div className="h-full flex flex-col  items-center justify-center ">
        <div className="flex flex-col justify-center  px-2 w-full lg:w-8/12 items-center sm:items-start ">
          <motion.p
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className={` text-[2rem] sm:text-[3rem] font-bold text-white flex items-center justify-center w-full `}
          >
            <span className="text-white/10">{"<"}</span> Experience &nbsp;
            <span className="text-white/10">{" />"}</span>
          </motion.p>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className={` text-md items-center flex flex-col justify-start  text-white px-3 `}
          >
            <h1 className="text-2xl text-white/50 text-left w-full px-4 py-2 font-bold">
              Internship
            </h1>
            <Timeline data={timelineItems} />
            <h1 className="text-2xl text-white/50 text-left w-full px-4 py-2 font-bold mt-10">
              Education
            </h1>
            <Timeline data={educationTimeline} />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
