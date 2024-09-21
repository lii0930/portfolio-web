import React from "react";
import Link from "next/link";

import {
  RiGithubLine,
  RiInstagramLine,
  RiFacebookLine,
  RiBehanceLine,
} from "react-icons/ri";
export default function Socials() {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiGithubLine />
      </Link>
      <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiInstagramLine />
      </Link>
      <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiFacebookLine />
      </Link>
      <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiBehanceLine />
      </Link>
    </div>
  );
}
