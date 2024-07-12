import { products, productsBtnText, productsTitle } from "@/data";
import FadeIn from "./FadeIn";
import { Button } from "../ui/button";
import Image from "next/image";
import { ArrowBigRight, ExternalLink } from "lucide-react";

const Products = () => {
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
            className="flex items-center gap-2 ease-linear transition-all duration-350
             mx-auto 2xl:mx-0 mb-10 2xl:mb-0 rounded-full font-bold w-full button sm:w-fit bg-blue-500 hover:bg-blue-600"
          >
            <p className="text-lg lg:text-xl text-white font-medium">
              {productsBtnText}
            </p>
            <ArrowBigRight />
          </Button>
        </div>
      </FadeIn>
      <div className="w-full flex flex-col md:flex-row gap-[160px] md:gap-6">
        {products.map((product, index) => (
          <FadeIn
            key={index}
            delay={(index + 1) * 0.2}
            direction="left"
            fullWidth
          >
            <div className="h-[510px] relative flex-1 bg-[#c1D0E4] rounded-[50px] max-w-[500px]">
              <Image
                src={product.img}
                alt=""
                className="absolute -top-[120px] left-1/2 -translate-x-1/2"
              />
              <div className="absolute bottom-0 w-full bg-white h-[260px] rounded-[50px] shadow-md px-8 py-[26px] flex flex-col justify-between">
                <div>
                  <h2 className="mb-2 text-black text-3xl lg:text-[32px] font-medium">
                    {product.title}
                  </h2>
                  <p className="text-sm lg:text-xl text-black font-medium">
                    Easily exchange currencies and make payments with T Pay.
                    Secure and reliable services for all your financial needs.
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-lg lg:text-xl text-black font-medium">
                    Visit Website
                  </p>
                  <ExternalLink size={25} />
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
