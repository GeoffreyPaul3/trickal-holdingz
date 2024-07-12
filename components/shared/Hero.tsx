"use client";

import { MenuSquare, SquareX } from "lucide-react";
import Image from "next/image";
import NavLink from "./NavLink";
import { useState } from "react";
import { Button } from "../ui/button";
import FadeIn from "./FadeIn";
import Link from "next/link";

const Hero = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <div
      className="h-screen relative flex flex-col items-center"
      style={{
        backgroundColor: "#FF3CAC",
        backgroundImage:
          "linear-gradient(to right, #4b79a1, #283e51)",
      }}
    >
      <div className="relative w-full max-w-[1490px] flex items-center justify-between pt-10 mx-auto px-10">
        <Image src="/assets/Trickal.png" width={70} height={70} alt="Logo" />
        <ul className="hidden md:flex items-center gap-10 lg:-[68px]">
          <NavLink to="/">Home</NavLink>
          <NavLink to="products">Products</NavLink>
          <NavLink to="services">Services</NavLink>
        </ul>

        <NavLink to="contact">
          <Button
            size="lg"
            className="rounded-full bg-blue-500 hover:bg-blue-600 hidden md:block"
          >
            Contact
          </Button>
        </NavLink>

        <MenuSquare
          size={30}
          className="block md:hidden cursor-pointer text-white"
          onClick={() => setShowMobileMenu((prev) => !prev)}
        />
        <div
          className={`block md:hidden cursor-pointer w-full fixed ${
            !showMobileMenu ? "-top-[410px]" : "top-0"
          } left-0 bg-[#dde0e5] h-[410px] transition-all duration-[800ms] shadow-xl z-10 py-8 px-12 rounded-b-xl`}
        >
          <SquareX
            size={25}
            className="absolute top-5 right-5 cursor-pointer"
            onClick={() => setShowMobileMenu(false)}
          />
          <ul className="pt-[60px] items-center flex flex-col gap-8">
            <NavLink to="/" mobileMenu>
              Home
            </NavLink>
            <NavLink to="products" mobileMenu>
              Products
            </NavLink>
            <NavLink to="services" mobileMenu>
              Services
            </NavLink>
          </ul>
        </div>
      </div>

      <FadeIn delay={0.2} direction="down" padding fullWidth>
        <h1 className="mt-[90px] text-center text-5xl leading-tight xs:text-[64px] text-white max-w-[1050px]">
          Driving Financial Innovation and Strategic Success
        </h1>
      </FadeIn>
      <FadeIn delay={0.4} direction="up" padding fullWidth>
        <p className="mt-6 text-center text-lg xs:text-xl text-white max-w-[500px]">
          Innovative Finance, Strategic Growth.
        </p>
      </FadeIn>

      <FadeIn delay={0.2} direction="up" padding fullWidth>
        <div className="flex flex-col justify-center items-center relative w-full xs:w-[460px] mt-11">
          <Link href="#services">
            <Button
              size="lg"
              className="rounded-full w-full button sm:w-fit bg-blue-500 hover:bg-blue-600"
            >
              Learn More
            </Button>
          </Link>
        </div>
      </FadeIn>
      <div className="absolute h-[50px] sm:h-[150px] bottom-0 w-full bg-[linear-gradient(180deg,_#ffffff00_0%,_#FFF_100%"></div>
    </div>
  );
};

export default Hero;
