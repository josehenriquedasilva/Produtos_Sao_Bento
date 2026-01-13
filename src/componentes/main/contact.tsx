import Image from "next/image";
import Link from "next/link";
import { BsTelephoneOutboundFill } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdMarkEmailUnread } from "react-icons/md";
import FadeInOnScroll from "../FadeInOnScroll/page";

export default function Contact() {
  return (
    <section id="contato" className="flex flex-col gap-5 pt-5 bg-white">
      <FadeInOnScroll direction={"down"}>
        <h2 className="flex gap-2 items-center justify-center text-2xl text-center font-bold font-[Poppins] text-[#4A148C] text-shadow-lg/10">
          Contate-nós!
          <Image src="/contato.png" width={40} height={50} alt="" />
        </h2>
      </FadeInOnScroll>
      <section className="flex flex-col justify-center items-center gap-5 pt-5 pb-10 bg-radial-[at_50%_75%] from-[#F17E21] to-[#4A148C]">
        <FadeInOnScroll direction={"down"}>
          <h2 className="font-bold text-sm text-[#ecdbcd] text-shadow-lg/10 font-[Poppins] text-center">
            Entre em contato através dos canais digitais!
          </h2>
        </FadeInOnScroll>
        <section className="w-[100%] px-5 flex flex-col justify-center items-start gap-3 max-w-[1024px] mx-auto">
          <Link
            href="#"
            className="w-[100%] flex py-2 px-2 items-center gap-3 bg-amber-100 rounded-xl shadow-lg/20 md:max-w-[70%] mx-auto hover:translate-x-0.5 hover:-translate-y-1.5 transition-transform duration-200 ease-in-out"
            target="_blank"
            rel="noopener noreferrer"
          >
            <section>
              <IoLogoWhatsapp className="size-7 text-[#25D366]" />
            </section>
            <section>
              <h3 className="font-bold text-[#4A146C] font-[Poppins]">
                WhatsApp
              </h3>
              <p className="text-sm font-semibold text-[#4A146C]">
                Vamos conversar! (81) 9 8238-4765
              </p>
            </section>
          </Link>
          <Link
            href="https://www.instagram.com/produtossaobento?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            className="w-[100%] flex py-2 px-2 items-center gap-3 bg-amber-100 rounded-xl shadow-lg/20 md:max-w-[70%] mx-auto hover:translate-x-0.5 hover:-translate-y-1.5 transition-transform duration-200 ease-in-out"
            target="_blank"
            rel="noopener noreferrer"
          >
            <section>
              <Image
                src="/instagram.png"
                width={28}
                height={28}
                alt="Instagram"
                className="size-7"
              />
            </section>
            <section>
              <h3 className="font-bold text-[#4A146C] font-[Poppins]">
                Instagram
              </h3>
              <p className="text-sm font-semibold text-[#4A146C]">
                Siga-nos! @produtossaobento
              </p>
            </section>
          </Link>
          <Link
            href="#"
            className="w-[100%] flex py-2 px-2 items-center gap-3 bg-amber-100 rounded-xl shadow-lg/20 md:max-w-[70%] mx-auto hover:translate-x-0.5 hover:-translate-y-1.5 transition-transform duration-200 ease-in-out"
            target="_blank"
            rel="noopener noreferrer"
          >
            <section>
              <MdMarkEmailUnread className="size-7 text-[#F20A09]" />
            </section>
            <section>
              <h3 className="font-bold text-[#4A146C] font-[Poppins]">Email</h3>
              <p className="text-sm font-semibold text-[#4A146C]">
                produtossaobento@gmail.com
              </p>
            </section>
          </Link>
          <Link
            href="tel:(81) 9 8238-4765"
            className="w-[100%] flex py-2 px-2 items-center gap-3 bg-amber-100 rounded-xl shadow-lg/20 md:max-w-[70%] mx-auto hover:translate-x-0.5 hover:-translate-y-1.5 transition-transform duration-200 ease-in-out"
            rel="noopener noreferrer"
          >
            <section>
              <BsTelephoneOutboundFill className="size-7 text-[#007BFF]" />
            </section>
            <section>
              <h3 className="font-bold text-[#4A146C] font-[Poppins]">
                Telefone
              </h3>
              <p className="text-sm font-semibold text-[#4A146C]">
                Ligue-nos! (81) 9 8238-4765
              </p>
            </section>
          </Link>
        </section>
      </section>
    </section>
  );
}
