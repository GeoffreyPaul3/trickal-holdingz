import { services } from "@/data";
import FadeIn from "./FadeIn";
import Image from "next/image";

const Services = () => {
  return (
    <div
      id="services"
      className="mt-[160px] max-w-[1490px] mx-auto px-10 flex flex-col sm:flex-row gap-12 sm:gap-6 sm:justify-between w-full"
    >
      {services.map((service, index) => (
        <FadeIn key={index} delay={0.2} direction="down">
          <div className="flex flex-col lg:flex-row gap-4 w-full items-center">
            <Image
              src={service.icon}
              width={84}
              height={84}
              alt=""
              className="max-h-[84px] max-w-[84px]"
            />
            <div className="flex flex-col gap-1.5">
              <h3 className="text-center lg:text-start text-2xl lg:text-[28px] text-black font-medium">
                {service.title}
              </h3>
              <p className="text-center lg:text-start text-base lg:text-lg text-gray-500 font-medium">
                {service.subtitle}
              </p>
            </div>
          </div>
        </FadeIn>
      ))}
    </div>
  );
};

export default Services;
