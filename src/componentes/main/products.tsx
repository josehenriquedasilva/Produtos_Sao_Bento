import Image from "next/image";
import { products } from "@/data/products";
import Link from "next/link";
import FadeInOnScroll from "../FadeInOnScroll/page";

export default function Products() {
  return (
    <section id="produtos" className="bg-[#FFF8F0] py-16 md:py-24">
      <FadeInOnScroll direction={"down"}>
        <h2 className="flex justify-center items-center gap-3 text-4xl lg:text-5xl text-center font-bold font-[Lobster] bg-gradient-to-r from-[#4A148C] to-[#F17E21] bg-clip-text text-transparent mb-12">
          Nossos Produtos
          <Image src="/biscoito.png" width={50} height={50} alt="" />
        </h2>
      </FadeInOnScroll>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 max-w-6xl mx-auto px-4">
        {products.map((product) => (
          <FadeInOnScroll key={product.id} direction={"left"}>
            <Link
              href={`/produtos/${product.slug}`}
              className="group block"
            >
              <div className=" bg-white rounded-xl overflow-hidden shadow-xl transition-all duration-200 hover:shadow-2xl hover:ring-2 hover:ring-[#F17E21] hover:-translate-y-1">
                <div className="p-5 flex justify-center items-center h-55 sm:h-80 bg-[#f7f7f7] border-b border-gray-100">
                  <Image
                    src={product.imagem}
                    alt={`Imagem do produto ${product.nome}`}
                    width={200}
                    height={250}
                    className="w-auto h-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="flex flex-col justify-between h-33 items-center py-4 text-center">
                  <h3 className="text-[19px] md:text-2xl lg:text-2xl font-extrabold text-[#4A148C] mb-2 transition-colors duration-300 group-hover:text-[#F17E21]">
                    {product.nome}
                  </h3>
                  <button className="bg-[#F17E21] text-white px-5 py-2 text-sm rounded-xl font-bold shadow-md transition-colors duration-200 hover:bg-[#b95f15] hover:text-[#6520b9] hover:shadow-lg focus:outline-none cursor-pointer">
                    Ver Detalhes
                  </button>
                </div>
              </div>
            </Link>
          </FadeInOnScroll>
        ))}
      </div>
    </section>
  );
}
