"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useState } from "react";
import { BsTelephone } from "react-icons/bs";
import { LuMail } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";

export default function Contact() {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const { top } = ref.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (top < windowHeight * 0.8) {
          controls.start({ opacity: 1, y: 0 });
        } else {
          controls.start({ opacity: 0, y: 20 });
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
    <div className="min-h-screen  w-full p-2 lg:p-6  pt-16  flex items-center justify-center">
      <div className="h-full flex flex-col  items-center justify-center ">
        <div className="flex flex-col justify-center h-full  px-2 w-full  items-center sm:items-start ">
          <motion.p
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className={` text-[2rem] sm:text-[3rem] font-bold text-base flex items-center justify-center w-full `}
          >
            <span className="text-base/10 text-[2rem] sm:text-[3rem] ">
              {"<"}
            </span>{" "}
            Contact &nbsp;
            <span className="text-base/10 text-[2rem] sm:text-[3rem] ">
              {" />"}
            </span>
          </motion.p>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className={`h-full text-md items-center flex flex-col justify-center text-base px-3 my-10`}
          >
            <div className="flex flex-row gap-10 h-24 items-center justify-start bg-base/10 w-full px-10 my-2 rounded-xl">
              <BsTelephone className="text-3xl text-black" />
              <p className="text-lg lg:text-2xl">0959501622</p>
            </div>
            <div className="flex flex-row gap-10 h-24 items-center bg-base/10 w-full px-10 my-2 rounded-xl ">
              <LuMail className="text-3xl text-black" />
              <p className="text-md lg:text-2xl">aunyapat.nit@gmail.com</p>
            </div>
            <div className="flex flex-row gap-10 h-24 items-center  bg-base/10 w-full px-10 my-2 rounded-xl">
              <FaGithub className="text-3xl text-black" />
              <p className="text-lg lg:text-2xl">github/tusaunyapat</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
