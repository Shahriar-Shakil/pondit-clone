import Image from "next/image";
import React from "react";
import { successStorySettings } from "@/lib/carouselSettings";
import CarouselWrapper from "./CarouselWrapper";
import StoryCard from "./StoryCard";

type Props = {};

export default function SuccessStories({}: Props) {
  return (
    <section className="success-stories bg-blend-multiply	mb-20 relative ">
      <div className="absolute top-0 left-0 right-0 h-full bg-black/40"></div>
      <div className="container max-w-2xl mx-auto px-2 relative">
        <div data-aos="fade-up" data-aos-duration="500" className="text-center">
          <span className="text-sm md:text-lg  font-nato text-white pb-5 font-bold tracking-wide">
            প্রশিক্ষণার্থীদের মতামত
          </span>
          <h2 className="mb-6 tracking-wide font-bold font-nato text-xl md:text-4xl text-white">
            আপনাদের ভালোবাসা আমাদের অনুপ্রেরনা
          </h2>
        </div>
      </div>
      <div className="absolute inset-x-0 overflow-hidden">
        <div className="container max-w-sm mx-auto ">
          <div
            data-aos="fade-up"
            data-aos-duration="500"
            className=" bg-gradient-to-b from-gray-500 to-gray-100 p-6	md:p-14 border-8 rounded-3xl border-white "
          >
            <CarouselWrapper
              settings={successStorySettings}
              className="SuccessStoriesSlide "
            >
              <div>
                <StoryCard />
              </div>
              <div>
                <StoryCard />
              </div>
              <div>
                <StoryCard />
              </div>
              <div>
                <StoryCard />
              </div>
            </CarouselWrapper>
          </div>
        </div>
      </div>
    </section>
  );
}
