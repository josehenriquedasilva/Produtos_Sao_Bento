"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsInstagram } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiCloseLargeFill } from "react-icons/ri";

export default function Header() {
  const [menu, setMenu] = useState(false);

  function toggleMenu() {
    if (menu === false) {
      setMenu(true);
      document.body.classList.add("overflow-hidden");
    } else {
      setMenu(false);
      document.body.classList.remove("overflow-hidden");
    }
  }

  return (
    <header className="flex px-5 pb-13 md:pb-0 justify-between items-center h-[145px] bg-[url(/header.png)] bg-no-repeat bg-left-top bg-cover relative z-10 lg:px-20">
      <Link href="/" id="logo">
        <Image
          src="/logoSB.png"
          alt="Logo São Bento"
          width={160}
          height={100}
          className="w-40 h-25 md:h-auto md:w-60 max-w-[100%] cursor-pointer"
        />
      </Link>
      <nav className="hidden md:flex items-center gap-2.5 mb-5 text-shadow-lg/10">
        <Link
          href="/"
          className="text-white font-bold hover:text-[#7b22b6] cursor-pointer duration-200"
        >
          Inicio
        </Link>
        <Link
          href="/#sobre"
          className="text-white font-bold hover:text-[#7b22b6] cursor-pointer duration-200 shrink-0"
        >
          Sobre Nós
        </Link>
        <Link
          href="/#produtos"
          className="text-white font-bold hover:text-[#7b22b6] cursor-pointer duration-200"
        >
          Produtos
        </Link>
        <Link
          href="/#endereço"
          className="text-white font-bold hover:text-[#7b22b6] cursor-pointer duration-200"
        >
          Endereço
        </Link>
        <Link
          href="/#contato"
          className="text-white font-bold hover:text-[#7b22b6] cursor-pointer duration-200 shrink-0"
        >
          Fale Conosco
        </Link>
      </nav>
      <div
        className={`fixed inset-0 bg-black ${
          menu ? `opacity-50` : `opacity-0`
        } transition-opacity duration-300 pointer-events-none z-30 md:hidden`}
      ></div>
      <nav
        className={`${
          menu ? `translate-x-0` : `translate-x-full`
        } fixed h-full flex flex-col items-end px-5 py-8 gap-5 w-[85%] right-0 top-0 text-shadow-lg/10 transition-all duration-200 z-30 bg-[#4A148C] md:hidden`}
      >
        <button className="text-[#F17E21] cursor-pointer " onClick={toggleMenu}>
          <RiCloseLargeFill className="size-7 hover:size-8 duration-200" />
        </button>
        <Link
          onClick={toggleMenu}
          href="/"
          className=" text-white text-2xl font-bold hover:text-[#F17E21] md:hover:text-[#7b22b6] text-right  cursor-pointer duration-200"
        >
          Inicio
        </Link>
        <Link
          onClick={toggleMenu}
          href="/#sobre"
          className="text-white text-2xl font-bold hover:text-[#F17E21] md:hover:text-[#7b22b6]  text-right  cursor-pointer duration-200"
        >
          Sobre Nós
        </Link>
        <Link
          onClick={toggleMenu}
          href="/#produtos"
          className="text-white text-2xl font-bold hover:text-[#F17E21] md:hover:text-[#7b22b6]  text-right  cursor-pointer duration-200"
        >
          Produtos
        </Link>
        <Link
          onClick={toggleMenu}
          href="/#endereço"
          className="text-white text-2xl font-bold hover:text-[#F17E21] md:hover:text-[#7b22b6] w-[70%] text-right  cursor-pointer duration-200"
        >
          Endereço
        </Link>
        <Link
          onClick={toggleMenu}
          href="/#contato"
          className="text-white text-2xl font-bold hover:text-[#F17E21] md:hover:text-[#7b22b6]  cursor-pointer duration-200"
        >
          Fale Conosco
        </Link>
        <section className="mt-2 flex gap-4 justify-end w-full">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <IoLogoWhatsapp className="size-7 text-[#F17E21] hover:text-[#7b22b6] cursor-pointer duration-200" />
          </a>
          <a
            href="https://www.instagram.com/produtossaobento?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsInstagram className="size-7 text-[#F17E21] hover:text-[#7b22b6] cursor-pointer duration-200" />
          </a>
        </section>
      </nav>
      <button
        onClick={toggleMenu}
        className="bg-[#f89f57d3] rounded-[60px] space-y-2 p-4 md:hidden"
      >
        <span className="w-[30px] h-[3px] rounded-sm bg-[#4A148C] block transition-all duration-200"></span>
        <span className="w-[15px] h-[3px] rounded-sm bg-[#ee6b00] block transition-all duration-200 "></span>
        <span className="w-[30px] h-[3px] rounded-sm bg-[#4A148C] block transition-all duration-200 "></span>
      </button>
    </header>
  );
}
