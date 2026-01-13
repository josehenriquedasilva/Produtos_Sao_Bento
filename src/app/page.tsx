"use client";

import Contact from "@/componentes/main/contact";
import Info from "@/componentes/main/info";
import Introduction from "@/componentes/main/introduction";
import Location from "@/componentes/main/location";
import Products from "@/componentes/main/products";

export default function Home() {
  return (
    <div>
      <main className="mt-[-43px] bg-[#FFF8F0]">
        <Introduction />
        <Info />
        <Products />
        <Location />
        <Contact />
      </main>
    </div>
  );
}
