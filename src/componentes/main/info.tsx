import { FaHandsHoldingChild } from "react-icons/fa6";
import { GiScrollUnfurled } from "react-icons/gi";
import {
  MdKeyboardDoubleArrowDown,
  MdOutlineLeaderboard,
} from "react-icons/md";
import { TbTargetArrow } from "react-icons/tb";
import Slider from "react-slick";
import FadeInOnScroll from "../FadeInOnScroll/page";

export default function Info() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <section
      id="sobre"
      className="flex flex-col justify-center items-center gap-5 px-5 py-10 text-[#4A148C] max-w-[1024px] mx-auto overflow-hidden"
    >
      <FadeInOnScroll direction={"up"}>
        <h2 className="flex gap-2 items-center text-3xl font-bold text-shadow-lg/10 font-[Poppins]">
          <MdKeyboardDoubleArrowDown className="size-6 animate-bounce text-[#F17E21]" />
          Sobre Nós
          <MdKeyboardDoubleArrowDown className="size-6 animate-bounce text-[#F17E21]" />
        </h2>
      </FadeInOnScroll>
      <section
        className="w-[100%] flex flex-col gap-5 justify-center items-center>
          lg:flex-row lg:items-start lg:justify-between"
      >
        <FadeInOnScroll direction={"right"}>
          <div className="flex flex-col gap-4 lg:basis-[500px] lg:w-[300px]">
            <h3 className="flex justify-center items-center gap-2 text-center text-2xl text-shadow-lg font-semibold font-[Poppins]">
              Missão <TbTargetArrow className="text-[#F17E21]" />
            </h3>
            <p className="font-semibold text-lg text-center text-shadow-sm">
              Oferecer produtos de qualidade aos nossos clientes, um bom
              atendimento, superando assim todas as expectativas.
            </p>
          </div>
        </FadeInOnScroll>
        <FadeInOnScroll direction={"left"}>
          <div className="flex flex-col gap-4 lg:basis-[550px]">
            <h3 className="flex justify-center items-center gap-2 text-center text-2xl text-shadow-lg font-semibold font-[Poppins]">
              Visão <MdOutlineLeaderboard className="text-[#F17E21]" />
            </h3>
            <p className="font-semibold text-lg text-center text-shadow-sm">
              Ser referência em nosso segmento, tornando assim nossos produtos
              conhecidos.
            </p>
          </div>
        </FadeInOnScroll>
        <FadeInOnScroll direction={"right"}>
          <div className="flex flex-col gap-4 lg:basis-[500px]">
            <h3 className="flex justify-center items-center gap-2 text-center text-2xl text-shadow-lg font-semibold font-[Poppins]">
              Valores <FaHandsHoldingChild className="text-[#F17E21]" />
            </h3>
            <p className="font-semibold text-lg text-center text-shadow-sm">
              Honestidade, transparência, empatia, melhoria contínua, respeito e
              amor.
            </p>
          </div>
        </FadeInOnScroll>
      </section>
      <FadeInOnScroll direction={"left"}>
        <section className="flex flex-col gap-4 mx-auto">
          <h3 className="flex justify-center items-center gap-2 text-center text-2xl text-shadow-lg font-semibold font-[Poppins]">
            Nossa História <GiScrollUnfurled className="text-[#F17E21]" />
          </h3>
          <Slider
            {...settings}
            className="w-[80vw] h-[210px] md:h-auto xl:w-[50vw] mx-auto"
          >
            <p className="font-semibold text-lg text-center text-shadow-sm px-2">
              Tudo começou com um jovem que tinha um sonho de ter seu próprio
              negócio, agarrando assim as poucas oportunidades da vida, saiu de
              repositor de supermercado para vendedor e representante de
              bolachas.
            </p>
            <p className="font-semibold text-lg text-center px-2">
              Já estando no comércio viu então a necessidade de ter um produto
              de um preço acessível e de qualidade que atendesse do pequeno ao
              grande comércio.
            </p>
            <p className="font-semibold text-lg text-center px-2">
              {" "}
              Surgiu então a ideia de alugar uma padaria que a algum tempo
              estava fechada, e com fé e coragem juntamente com seu irmão e o
              padeiro, no dia 04 de fevereiro do ano de 2020, surgiu os
              primeiros pacotes de bolachas.
            </p>
            <p className="font-semibold text-lg text-center px-2">
              Que de início só foram distribuídos para alguns familiares e
              amigos e mercadinhos próximos, assim aprovado por todos começaram
              a expandir para outros mercados e cidades vizinhas.
            </p>
            <p className="font-semibold text-lg text-center px-2">
              {" "}
              Desde então permanecem produzindo, inovando e aperfeiçoando cada
              vez mais nossos produtos. A fim de alcançarmos os resultados
              almejados por nós, nossa equipe e clientes.
            </p>
          </Slider>
        </section>
      </FadeInOnScroll>
    </section>
  );
}
