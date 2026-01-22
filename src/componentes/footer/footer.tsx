import Image from "next/image";
import Link from "next/link";
import { BsInstagram } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import FadeInOnScroll from "../FadeInOnScroll/page";

export default function Footer() {
  return (
    <footer className="bg-[#4A148C] py-2">
      <section className="max-w-[830px] mx-auto flex flex-col gap-3 justify-center items-center overflow-hidden">
        <FadeInOnScroll>
          <section className="flex flex-col justify-center items-center">
            <div className="w-[100%]">
              <Image
                width={140}
                height={140}
                className="w-35 mx-auto"
                src="/logoSB.png"
                alt="Logo Produtos São Bento"
              />
            </div>
            <nav className="text-lg font-bold text-[#F17E21] text-shadow-lg/10">
              <ul className="flex flex-col md:flex-row gap-1.5 justify-center items-center md:w-[310px] md:flex-wrap">
                <li className="hover:-translate-y-1 hover:translate-x-0.5 transition-transform duration-200 ease-in-out">
                  <Link href="/#introduction">Inicio</Link>
                </li>
                <li className="hover:-translate-y-1 hover:translate-x-0.5 transition-transform duration-200 ease-in-out">
                  <Link href="/#sobre">Sobre Nós</Link>
                </li>
                <li className="hover:-translate-y-1 hover:translate-x-0.5 transition-transform duration-200 ease-in-out">
                  <Link href="/#produtos">Produtos</Link>
                </li>
                <li className="hover:-translate-y-1 hover:translate-x-0.5 transition-transform duration-200 ease-in-out">
                  <Link href="/#endereço">Endereço</Link>
                </li>
                <li className="hover:-translate-y-1 hover:translate-x-0.5 transition-transform duration-200 ease-in-out">
                  <Link href="/#contato">Fale Conosco</Link>
                </li>
              </ul>
            </nav>
          </section>
        </FadeInOnScroll>
        <section className="w-[90%] md:max-w-[1024px] flex justify-between items-center">
          <FadeInOnScroll direction={"left"}>
            <div className="flex gap-2">
              <Link href="#" target="_blank" rel="noopener noreferrer">
                <IoLogoWhatsapp className="size-5 text-[#F17E21] hover:text-[#7b22b6] cursor-pointer duration-200" />
              </Link>
              <Link
                href="https://www.instagram.com/produtossaobento?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsInstagram className="text-[#F17E21] hover:text-[#7b22b6] cursor-pointer duration-200 size-5" />
              </Link>
            </div>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <div className="text-center font-semibold">
              <p className="text-xs text-[#cccccc]">
                &copy; Produtos São bento. <br /> Todos direitos resevado.
              </p>
            </div>
          </FadeInOnScroll>
          <FadeInOnScroll direction={"right"}>
            <Link
              className="text-center text-[#F17E21] hover:text-[#7b22b6] duration-200"
              href="https://portfolio-eosin-beta-11.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="text-xs font-semibold">
                Desenvolvido <br /> por <br />
              </p>
              <p className="text-sm">JH-DEV</p>
            </Link>
          </FadeInOnScroll>
        </section>
      </section>
    </footer>
  );
}
