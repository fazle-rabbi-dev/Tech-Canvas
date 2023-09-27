import React from "react";
import Link from "next/link";
import { Github, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import socialLinks from "@/social-links";

const date = new Date();

function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-800 border-t-[1px] dark:border-t-gray-800 px-4 py-6 text-sm md:px-10 md:flex md:justify-between md:items-end shadow">
      <div className="">
        <h4 className="flex gap-2 items-center text-xl font-satoshi-medium">
          Tech-Canvas
        </h4>
        <p className="my-3 text-gray-400">
          Copyright &copy; {date.getFullYear()} tech-canvas.vercel.app
        </p>
      </div>
      <div className="flex items-center gap-2">
        <a
          className="p-1"
          href={socialLinks.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github />
        </a>
        <a
          className="p-1"
          href={socialLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin />
        </a>
        <a
          className="p-1"
          href={socialLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Twitter />
        </a>
        <a
          className="p-1"
          href={socialLinks.instagram}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram />
        </a>
        <a
          className="p-1"
          href={socialLinks.facebook}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Facebook />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
