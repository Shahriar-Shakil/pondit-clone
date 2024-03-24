import Image from "next/image";
import React from "react";

type Props = {};

export default function Hero({}: Props) {
  return (
    <section className="home-slide flex items-center pt-[100px] pb-[60px] ">
      <div className="container max-w-2xl mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-12">
          <div className="mr-auto col-span-12 md:col-span-6 mt-4">
            <h2 className="font-hind slogan max-w-2xl text-2xl font-extrabold tracking-tight leading-none md:text-3xl xl:text-4xl ">
              দক্ষতার সাথে
            </h2>
            <h2 className="font-hind slogan max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl ">
              সাফল্যের পথে
            </h2>

            <p className="font-nato max-w-2xl mb-6 font-light text-dark-light lg:mb-8 md:text-lg lg:text-lg text-pretty">
              সুনির্দিষ্ট ও সুনির্ধারিত ও সময় উপযোগী কোর্স মডিউল অনুসরণ করে
              প্রশিক্ষনার্থীদের দক্ষতা উন্নয়ন এবং ফ্রিল্যান্সিংয়ে ক্যারিয়ার
              গড়ে তুলতে বদ্ধপরিকর Inspired IT।
            </p>
          </div>
          <div className=" lg:mt-0 col-span-12 md:col-span-6 ">
            <div className=" relative w-full max-w-md  aspect-[70/55]">
              <Image
                className="object-center md:object-right-top	"
                src="/images/heroImage.webp"
                objectFit="contain"
                alt="hero"
                fill={true}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
