"use client";

import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="border-t bg-[#d0d6df]">
      <div className="mx-auto max-w-5xl space-y-5 px-3 py-5">
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
          <div className="space-y-2 text-center sm:text-left">
            <Link href="/" passHref>
              <Image
                src="/assets/Trickal.png"
                width={70}
                height={70}
                alt="Logo"
              />
            </Link>
            <h3 className="text-xl font-semibold">Trickal Holdings</h3>
            <p className="text-sm text-muted-foreground">
              Driving Financial Innovation and Strategic Success
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-5 text-sm text-muted-foreground">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <Link href="#products" className="hover:underline">
              Products
            </Link>
            <Link href="#services" className="hover:underline">
              Services
            </Link>
            <Link href="#contact" className="hover:underline">
              Contact
            </Link>
          </div>
        </div>
        <div className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Trickal Holdings, Inc. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
