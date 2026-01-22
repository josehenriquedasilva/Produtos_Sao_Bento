import Image from "next/image";
import FadeInOnScroll from "../FadeInOnScroll/page";

export default function Location() {
  return (
    <section
      id="endereço"
      className="bg-white flex flex-col justify-center items-center px-5 py-10 overflow-hidden"
    >
      <FadeInOnScroll direction={"down"}>
        <h1 className="flex gap-2 items-center text-2xl text-[#4A148C] font-bold text-shadow-lg/10 font-[Poppins]">
          Onde Nós Encontrar
          <Image src="/mapa.png" width={30} height={100} alt=""/>
        </h1>
      </FadeInOnScroll>
      <FadeInOnScroll direction={"right"}>
        <div className=" sm:w-[500px] sm:h-[250px] md:w-[700px] md:h-[300px] mt-5 mb-1">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d303.160723067933!2d-36.33792266024708!3d-8.477224978586458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7a9dd464d078b8d%3A0xe734968a6ad0d8e9!2sProdutos%20S%C3%A3o%20Bento!5e1!3m2!1spt-BR!2sbr!4v1760016802604!5m2!1spt-BR!2sbr"
            className="w-[100%] h-[100%] rounded-2xl shadow-lg"
            loading="lazy"
            allowFullScreen={true}
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </FadeInOnScroll>
      <FadeInOnScroll direction={"up"}>
        <p className="font-semibold text-shadow-sm text-[#4A148C]">
          Visite-nos em nosso endereço!
        </p>
      </FadeInOnScroll>
    </section>
  );
}
