import Table from "@/componentes/main/table";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { products } from "@/data/products";
import { Product } from "@/types/products";
import { Metadata } from "next";

interface ProductDetailsProps {
  params: {
    slug: string;
  };
}

const baseUrl = "https://produtos-sao-bento.com/";
const brandName = "Produtos São Bento";
const shortTitle = "P. São Bento";

function getProducts(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const product = getProducts(params.slug);

  if (!product) {
    return {};
  }

  const productTitle = `${product.nome} | ${brandName}`;
  const productDescription = `Detalhes, ingredientes e informações nutricionais da bolacha ${product.nome}: ${product.igredientes}.`;
  const fullImageUrl = `${baseUrl}${product.imagem}`;

  return {
    title: {
      default: productTitle,
      template: `%s | ${shortTitle}`,
    },
    description: productDescription,

    alternates: {
      canonical: `${baseUrl}pages/products/${product.slug}`,
    },

    openGraph: {
      title: productTitle,
      description: productDescription,
      url: `${baseUrl}pages/products/${product.slug}`,
      siteName: brandName,
      images: [
        {
          url: fullImageUrl,
          width: 100,
          height: 100,
          alt: product.nome,
        },
      ],
      locale: "pt_BR",
      type: "website",
    },
  };
}

export default function Products({ params }: ProductDetailsProps) {
  const produtoSlug = params.slug;

  const currentIndex = products.findIndex((p) => p.slug === produtoSlug);
  const product: Product | undefined = products[currentIndex];

  if (!product) {
    return <div>Produto não encontrado</div>;
  }

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",

    name: product.nome,
    description: product.igredientes,
    sku: `BSB-${product.id}`,
    image: `${baseUrl}${product.imagem}`,

    brand: {
      "@type": "Brand",
      name: "Produtos São Bento",
    },

    hasNutritionInformation: {
      "@type": "NutritionInformation",
      servingSize: `${product.infoNutricinal.porcaoU} unidades (${product.infoNutricinal.porcaoG}g)`,
      calories: `${product.infoNutricinal.valorEnergetico.g30} kcal`,
      carbohydrateContent: `${product.infoNutricinal.carboidratos.g30} g`,
      proteinContent: `${product.infoNutricinal.proteinas.g30} g`,
      sodiumContent: `${product.infoNutricinal.sodio.g30} mg`,
    },
  };

  const totalProducts = products.length;

  const nextIndex = (currentIndex + 1) % totalProducts;
  const nextProduct = products[nextIndex];

  return (
    <div className="flex flex-col gap-5 bg-[#FFF8F0] mt-[-43px] pt-[43px]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <div className="flex flex-col gap-3 items-center my-[30px]">
        <p className="underline group self-start ml-4 md:ml-10">
          <Link
            href="/#produtos"
            className="flex items-center gap-1 font-bold font-[Poppins] text-[#4A148C] text-shadow-md/10 hover:text-[#6520b9] transition-colors duration-200 ease-in-out"
          >
            <FaArrowLeft className="text-[#F17E21] group-hover:-translate-x-1.5 transition-transform duration-200 ease-in-out " />
            Página inicial
          </Link>
        </p>
        <h1 className="text-3xl lg:text-4xl font-[Lobster] bg-gradient-to-l from-[#4A148C] to-[#F17E21] bg-clip-text text-transparent p-2">
          {product.nome}
        </h1>
      </div>
      <div className="flex flex-col gap-5">
        <section className="w-[100%] border-b-3 border-[#4A148C] flex justify-center">
          <Image
            src={product.imagem}
            width={900}
            height={100}
            alt={product.nome}
            title={`Produto: ${product.nome}`}
            className="w-auto h-80 "
          />
        </section>
        <section className="flex flex-col gap-5 lg:flex-row lg:w-[80vw] md:mx-auto lg:mb-10">
          <section className="flex flex-col gap-5">
            <section className="lg:w-[600px]">
              <ul className="flex flex-col gap-3 list-disc px-10">
                <li className="md:max-w-[600px]">
                  <span className="font-semibold">INGREDIENTES:</span>{" "}
                  {product.igredientes}
                </li>
                <li className="font-semibold">
                  ALÉRGICOS: {product.alergicos}
                </li>
              </ul>
            </section>
            <section className="flex flex-col justify-center gap-2 px-5">
              <div className="flex flex-col gap-2">
                <h2 className="text-xl font-semibold text-[#4A148C] text-shadow-md/10 font-[Poppins]">
                  Informação Nutricional
                </h2>
                <Table infoNutritional={product.infoNutricinal} />
              </div>
              <Image
                src={"/alto-em-sodio.png"}
                alt="Alto em sódio"
                width={100}
                height={100}
                className="ml-[-7px]"
              />
            </section>
          </section>
          <section>
            <Link
              href={`/pages/products/${nextProduct.slug}`}
              className="group"
            >
              <div className="bg-[#f17f2183] group-hover:bg-[#f17f21c0] transition-colors duration-200 ease-in-out w-[90%] md:w-[95%] mx-auto flex flex-col items-center p-5 rounded-md gap-5 mb-5">
                <h3 className="flex items-center gap-1 text-xl font-bold font-[Poppins] text-[#4A148C] text-shadow-md/10">
                  Próximo Produto{" "}
                  <FaArrowRight className="text-[#f1720a] group-hover:translate-x-1.5 transition-transform duration-200 ease-in-out" />
                </h3>
                <div className="px-15 py- border-b-4 border-[#4A148C]">
                  <Image
                    src={nextProduct.imagem}
                    alt={`${nextProduct.nome}`}
                    width={100}
                    height={75}
                  />
                </div>
                <p className="text-xl font-semibold font-[Lobster] bg-gradient-to-l from-[#4A148C] to-[#F17E21] bg-clip-text text-transparent px-2">
                  {nextProduct.nome}
                </p>
              </div>
            </Link>
          </section>
        </section>
      </div>
    </div>
  );
}
