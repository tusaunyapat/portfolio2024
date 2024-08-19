"use client";

import Link from "next/link";
import style from "./sidebar.module.css";
import { IoHomeOutline } from "react-icons/io5";
import { GrProjects } from "react-icons/gr";
import { GoPerson } from "react-icons/go";
import { useParams, usePathname } from "next/navigation";
import { useState } from "react";
import { TbStars } from "react-icons/tb";
import { FaRankingStar } from "react-icons/fa6";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export default function Sidebar() {
  const [current, setCurrent] = useState<string | undefined>("#home");

  const setActiveMenu = (path: string) => {
    return path === current ? "text-yellow bg-yellow/10" : "text-white";
  };

  const MenuItem = ({
    href,
    icon,
    label,
  }: {
    href: string;
    icon: React.ReactNode;
    label: string;
  }) => (
    <li
      className={`${setActiveMenu(
        href
      )} px-2 sm:px-4 py-2 text-white rounded-md hover:bg-white/10`}
      onClick={() => setCurrent(href)}
    >
      <Link href={href} className="flex flex-row items-center">
        {icon}
        <p className="hidden sm:block px-4">{label}</p>
      </Link>
    </li>
  );

  return (
    <nav className=" fixed w-full p-2  bg-gradient-to-b from-black to-base items-center justify-center shadow-md shadow-base z-0">
      <div className=" h-full w-full ">
        <ul
          className={`flex flex-row justify-center p-2 gap-6 h-full rounded-md sm:rounded-2xl  text-sm  items-center `}
        >
          <MenuItem href="#home" icon={<IoHomeOutline />} label="Home" />
          <MenuItem href="#about" icon={<GoPerson />} label="About" />
          <MenuItem
            href="#experience"
            icon={<FaRankingStar />}
            label="Experience"
          />
          <MenuItem href="#projects" icon={<GrProjects />} label="Projects" />
          <MenuItem
            href="#contact"
            icon={<MdOutlinePermContactCalendar />}
            label="Contact"
          />
        </ul>
      </div>
    </nav>
  );
}
