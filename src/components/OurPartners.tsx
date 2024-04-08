import Image from "next/image";
import React from "react";
import { ourPartnerSettings } from "@/lib/carouselSettings";
import CarouselWrapper from "./CarouselWrapper";

type Props = {};

export default function OurPartners({}: Props) {
  return (
    <div className="container max-w-2xl mx-auto  py-10 md:py-20">
      <div className="text-center">
        <span className="text-sm md:text-lg  font-nato text-orange pb-2 md:pb-5 font-bold tracking-wide block">
          আমাদের সাথে যুক্ত আছেন
        </span>
        <h2 className="mb-6 tracking-wide font-bold font-hind text-xl md:text-4xl text-black">
          দেশের শীর্ষ স্থানীয় বিশ্ববিদ্যালয় এবং প্রতিষ্ঠান সমূহ
        </h2>
      </div>
      <div>
        <CarouselWrapper settings={ourPartnerSettings}>
          <div>
            <Image
              className="object-scale-down"
              src="/images/partners/1.webp"
              alt="instractor"
              width={100}
              height={100}
            />
          </div>
          <div>
            <Image
              className="object-scale-down"
              src="/images/partners/2.webp"
              alt="instractor"
              width={100}
              height={100}
            />
          </div>
          <div>
            <Image
              className="object-scale-down"
              src="/images/partners/3.webp"
              alt="instractor"
              width={100}
              height={100}
            />
          </div>
          <div>
            <Image
              className="object-scale-down"
              src="/images/partners/4.webp"
              alt="instractor"
              width={100}
              height={100}
            />
          </div>
          <div>
            <Image
              className="object-scale-down"
              src="/images/partners/5.webp"
              alt="instractor"
              width={100}
              height={100}
            />
          </div>
          <div>
            <Image
              className="object-scale-down"
              src="/images/partners/6.webp"
              alt="instractor"
              width={100}
              height={100}
            />
          </div>
          <div>
            <Image
              className="object-scale-down"
              src="/images/partners/7.webp"
              alt="instractor"
              width={100}
              height={100}
            />
          </div>
          <div>
            <Image
              className="object-scale-down"
              src="/images/partners/8.webp"
              alt="instractor"
              width={100}
              height={100}
            />
          </div>
        </CarouselWrapper>
      </div>
    </div>
  );
}
