import { motion } from "framer-motion";
import { StaticImageData } from "next/image"; // Or similar import for your bundler

import Image from "next/image";

export interface TimelineItem {
  date: string;
  stack: string[];
  position: string;
  description: string;
  pic: string | StaticImageData; // Assuming 'pic' is a path to an image or an imported image
}

export default function Timeline({ data }: { data: TimelineItem[] }) {
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <ol className={`  w-full  `}>
      {data.map((item, index) => (
        <motion.li
          key={index}
          className=" bg-base/10 p-4 w-full mb-4 rounded-md"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          variants={itemVariants}
        >
          {/* <div className="relative w-4 h-4 bg-yellow rounded-full   "></div> */}
          <Image
            src={item.pic}
            alt={`Image item.title`}
            className="w-2/6 lg:w-1/6 mb-2"
          />
          <time className="mb-1 text-sm font-normal leading-none text-blue my-2">
            {item.date}
          </time>
          <p className="text-xl font-bold  text-[#242E3A]">{item.position}</p>
          <ul className="flex flex-row py-1 ">
            {item.stack.map((stack, index) => (
              <li
                key={index}
                className="text-blue/80 border-2 text-semibold border-blue/80 px-2 py-1 mr-2 rounded-sm text-xs"
              >
                {stack}
              </li>
            ))}
          </ul>
          <div className="text-sm text-base/50 font-normal text-justify">
            {item.description}
          </div>
        </motion.li>
      ))}
    </ol>
  );
}
