"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active link style
  const linkClass = (path) =>
    `transition ${
      pathname === path ? "text-white font-semibold" : "text-gray-400"
    } hover:text-white`;

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo (FIXED) */}
        <Link href="/">
          <div className="flex items-center gap-2 cursor-pointer hover:scale-105 transition">
            
            <Image
              src="/logo.png"
              alt="JK Ply Logo"
              width={40}
              height={40}
              className="rounded"
            />

            <span className="text-white font-bold text-sm md:text-lg">
              JK Ply Hardware and Furniture Workshop
            </span>

          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8">
          <Link href="/" className={linkClass("/")}>Home</Link>
          <Link href="/services" className={linkClass("/services")}>Services</Link>
          <Link href="/contact" className={linkClass("/contact")}>Contact</Link>
        </nav>

        {/* Desktop Button */}
        <Link href="/contact" className="hidden md:block">
          <button className="bg-white text-black px-5 py-2 rounded-full hover:scale-105 transition">
            Order Now
          </button>
        </Link>

        {/* Mobile Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute w-full bg-black/95 backdrop-blur-lg transition-all duration-300 ${
          open ? "top-16 opacity-100" : ".top-\[-300px] opacity-0"
        }`}
      >
        <div className="flex flex-col px-6 py-6 space-y-4 text-white">

          <Link href="/" onClick={() => setOpen(false)} className={linkClass("/")}>
            Home
          </Link>

          <Link href="/services" onClick={() => setOpen(false)} className={linkClass("/services")}>
            Services
          </Link>

          <Link href="/contact" onClick={() => setOpen(false)} className={linkClass("/contact")}>
            Contact
          </Link>

          <Link href="/contact" onClick={() => setOpen(false)}>
            <button className="w-full bg-white text-black py-2 rounded-full mt-2">
              Order Now
            </button>
          </Link>

        </div>
      </div>
    </header>
  );
}
