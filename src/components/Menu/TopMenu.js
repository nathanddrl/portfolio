import React from "react";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import "../../styles/index.css";

export const TopMenu = () => {
  return (
    <div className="w-full flex justify-center items-center h-16 bg-primary-100 text-primary-900">
      <ul className="w-5/6 flex justify-around items-center weight-600">
        <li className="mr-4 hover:underline">
          <a href="#home" className="">
            Home
          </a>
        </li>
        <li className="mr-4">
          <a href="#about" className="">
            About
          </a>
        </li>
        <li className="mr-4">
          <a href="#skills" className="">
            Skills
          </a>
        </li>
        <li className="mr-4">
          <a href="#projects" className="">
            Projects
          </a>
        </li>
        <li className="mr-4">
          <a href="#contact" className="">
            Contact
          </a>
        </li>
        <li className="mr-4">
          <AiOutlineLinkedin className="text-2xl" />
        </li>
        <li className="mr-4">
          <AiFillGithub className="text-2xl" />
        </li>
      </ul>
    </div>
  );
};

export default TopMenu;
