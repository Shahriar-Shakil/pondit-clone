import Image from "next/image";
import React from "react";

type Props = {};

export default function RecentBlogs({}: Props) {
  return (
    <div className="background-image">
      <div className="container max-w-2xl mx-auto py-10 md:py-20">
        <div className="text-center space-y-3 max-w-md mx-auto">
          <h2 className="text-2xl md:text-4xl font-hind font-bold text-[#0b0b0b] tracking-[0.9px]">
            সাম্প্রতিক ব্লগ সমূহ
          </h2>
          <p>
            টেক দুনিয়ার বিভিন্ন আকর্ষনীয় এবংগুরুত্বপূর্ণ বিষয় নিয়ে লেখার চেষ্টা
            করেছি আমরা। আশা করছি এই জ্ঞান সমৃদ্ধ করবে আপনাদের।
          </p>
        </div>
        <div className="grid grid-cols-3 gap-6">
          <div className="">
            <div className="relative w-full max-h-52  aspect-[1/1]">
              <Image
                className=" object-fill object-top"
                src="/images/blog.webp"
                alt="hero"
                fill={true}
              />
            </div>
            <div className="relative bg-white p-4 mx-3 -mt-5 rounded-md">
              body
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
