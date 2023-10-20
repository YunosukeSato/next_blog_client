import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle";
import { AuthLinks } from "../AuthLinks/AuthLinks";

export const Navbar = () => {
  return (
    <div>
      <div>
        <Link href={"/"}>
          <FontAwesomeIcon icon={faInstagram} width={24} height={24} />
        </Link>
        <Link href={"/"}>
          <FontAwesomeIcon icon={faFacebook} width={24} height={24} />
        </Link>
        <Link href={"/"}>
          <FontAwesomeIcon icon={faYoutube} width={24} height={24} />
        </Link>
      </div>
      <div></div>
      <div>
        <ThemeToggle />
        <Link href={"/"}>Homepage</Link>
        <Link href={"/"}>Contact</Link>
        <Link href={"/"}>About</Link>
        <AuthLinks />
      </div>
    </div>
  );
};
