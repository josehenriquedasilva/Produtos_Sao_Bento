import Image from "next/image";
import Link from "next/link";
import FadeInOnScroll from "../FadeInOnScroll/page";

export default function Introduction() {
    return (
        <section className="bg-[#4A148C] pt-16 pb-10 md:pt-0 md:pb-0 flex justify-center">
          <div className="text-white h-full md:w-[50%] p-5 md:p-16 lg:pl-40">
            <FadeInOnScroll direction={"left"}>
              <h1 className="font-[Poppins] text-3xl md:text-6xl text-shadow-lg/30 font-bold leading-tight mb-4 max-w-[400px]">
                Tradição em Cada Mordida
              </h1>
              <p className="text-xl font-semibold text-shadow-md/30 md:text-2xl mb-8 relative">
                Com amor e <br className="md:hidden" /> qualidade para
                <br className="md:hidden" /> sua mesa!
              </p>
              <Link
                href="#produtos"
                className="bg-[#F17E21] text-white p-2.5 text-sm rounded-xl font-extrabold cursor-pointer hover:bg-[#b95f15] duration-200 hover:text-[#6520b9]"
              >
                Explore Produtos
              </Link>
            </FadeInOnScroll>
          </div>
          <div className="md:w-[50%] bg-[#F17e21] flex justify-center items-center lg:pr-50">
            <Image
              src="/mascote-SB.png"
              alt="Mascote P. São Bento"
              width={500}
              height={500}
              className="h-auto max-w-[500px] w-38 md:w-60 absolute translate-y-6 translate-x-[-60%] md:translate-x-10"
              title="Mascote P. São Bento"
            />
          </div>
        </section>
    )
}