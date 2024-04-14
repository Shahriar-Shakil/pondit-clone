import Link from "next/link";
import React from "react";
import VideoIframe from "./VideoIframe";

type Props = {};

export default function SuccessStories({}: Props) {
  return (
    <div className="container max-w-2xl mx-auto py-10 md:py-20">
      <div
        data-aos="fade-up"
        data-aos-duration="500"
        className="text-center space-y-3 max-w-md mx-auto"
      >
        <h2 className="text-2xl md:text-4xl font-hind font-bold text-[#0b0b0b] tracking-[0.9px]">
          সফলতার গল্প
        </h2>
        <p>
          আমাদের প্রশিক্ষণার্থীদের সফলতা অর্জনের প্রতিটি ধাপে রয়েছে এক একটি
          গল্প, যা Inspired IT বিকশিত করার নির্যাস যোগায়।
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2   gap-6 mt-4">
        <div data-aos="fade-up" data-aos-duration="500" className="">
          <VideoIframe title="test" videoId="Xw5HFeZkB9Y" autoPlay={false} />
        </div>
        <div data-aos="fade-up" data-aos-duration="500" className="">
          <VideoIframe title="test" videoId="jGvFFfp1164" autoPlay={false} />
        </div>
        <div data-aos="fade-up" data-aos-duration="500" className="">
          <VideoIframe title="test" videoId="Yj72A53_0bg" autoPlay={false} />
        </div>
        <div data-aos="fade-up" data-aos-duration="500" className="">
          <VideoIframe title="test" videoId="gM6qTceFndM" autoPlay={false} />
        </div>
      </div>
      <div data-aos="fade-up" data-aos-duration="500" className="mt-12">
        <Link
          href="/"
          className="mx-auto flex items-center justify-center px-6 border-[3px] bg-white hover:bg-primary-blue  text-base  font-nato py-3 text-primary-blue hover:text-white border-primary-blue rounded-[46px] min-w-36 w-36"
        >
          আরো দেখুন
        </Link>
      </div>
    </div>
  );
}
