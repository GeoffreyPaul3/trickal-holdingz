"use client";

import { useState } from "react";
import { products, productsBtnText, productsTitle } from "@/data";
import FadeIn from "./FadeIn";
import { Button } from "../ui/button";
import Image from "next/image";
import { ArrowBigRight, ExternalLink } from "lucide-react";
import Link from "next/link";

const Products = () => {
  const [visibleProducts, setVisibleProducts] = useState(2);

  const handleShowMore = () => {
    setVisibleProducts(visibleProducts + 2);
  };

  return (
    <div
      id="products"
      className="flex flex-col 2xl:flex-row gap-[128px] 2xl:gap-2 2xl:justify-between mt-[160px] 2xl:mt-[270px] mb-[160px] max-w-[1490px] mx-auto px-10 w-full"
    >
      <FadeIn delay={0.2} direction="right">
        <div className="flex flex-col">
          <h1 className="text-center 2xl:text-start text-black text-5xl lg:text-[64px] font-medium mb-6">
            {productsTitle}
          </h1>
          <Button
            size="lg"
            className="flex items-center gap-2 ease-linear transition-all duration-350 mx-auto 2xl:mx-0 mb-10 2xl:mb-0 rounded-full font-bold w-full button sm:w-fit bg-blue-500 hover:bg-blue-600"
            onClick={handleShowMore}
          >
            <p className="text-lg lg:text-xl text-white font-medium">
              {productsBtnText}
            </p>
            <ArrowBigRight />
          </Button>
        </div>
      </FadeIn>
      <div className="w-full flex flex-col md:flex-row gap-[160px] md:gap-6">
        {products.slice(0, visibleProducts).map((product, index) => (
          <FadeIn
            key={index}
            delay={(index + 1) * 0.2}
            direction="left"
            fullWidth
          >
            <div className="h-[510px] relative flex-1 bg-[#c1D0E4] rounded-[50px] max-w-[500px]">
              <div className="w-full h-[260px] flex items-center justify-center">
                <Image
                  src={product.img}
                  alt={product.title}
                  width={250}
                  height={250}
                  className="object-contain"
                />
              </div>
              <div className="absolute bottom-0 w-full bg-white h-[260px] rounded-[50px] shadow-md px-8 py-[26px] flex flex-col justify-between">
                <div>
                  <h2 className="mb-2 text-black text-3xl lg:text-[32px] font-medium">
                    {product.title}
                  </h2>
                  <p className="text-sm lg:text-base text-black font-medium">
                    {product.description}
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-lg lg:text-xl text-black font-medium">
                    Visit Website
                  </p>
                  <Link href={product.link} passHref>
                    <ExternalLink size={25} className="cursor-pointer" />
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
};

export default Products;
