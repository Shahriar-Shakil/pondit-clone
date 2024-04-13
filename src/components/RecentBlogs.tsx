import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaBookmark } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";

type Props = {};

export default function RecentBlogs({}: Props) {
  return (
    <div className="background-image">
      <div className="container max-w-2xl mx-auto py-10 md:py-20">
        <div
          data-aos="fade-up"
          data-aos-duration="500"
          className="text-center space-y-3 max-w-md mx-auto"
        >
          <h2 className="text-2xl md:text-4xl font-hind font-bold text-[#0b0b0b] tracking-[0.9px]">
            সাম্প্রতিক ব্লগ সমূহ
          </h2>
          <p>
            টেক দুনিয়ার বিভিন্ন আকর্ষনীয় এবংগুরুত্বপূর্ণ বিষয় নিয়ে লেখার চেষ্টা
            করেছি আমরা। আশা করছি এই জ্ঞান সমৃদ্ধ করবে আপনাদের।
          </p>
        </div>
        <div className="grid grid-cols-3 gap-6 mt-4">
          <div data-aos="fade-up" data-aos-duration="500">
            <div className="relative w-full max-h-52  aspect-[1/1]">
              <Image
                className=" object-fill object-top rounded"
                src="/images/blog.webp"
                alt="hero"
                fill={true}
              />
            </div>
            <div className="relative bg-white p-4 mx-3 -mt-5 rounded-md">
              <div className="flex flex-col ">
                <div className="flex mb-8">
                  <div className="flex gap-1 h-7">
                    <SlCalender className="w-6 h-6 text-orange self-end " />
                    <span className="self-start">31/01/2023</span>
                  </div>
                  <div className="h-7 border-r mx-2"></div>
                  <div className="flex gap-1 h-7 ">
                    <FaBookmark className="w-6 h-6 text-orange self-end " />

                    <span className="self-start text-sm font-nato self-center">
                      Computer Programming
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="font-hind text-2xl font-semibold mb-5 ">
                    <Link href="/">প্রোগ্রামিং কেনো শিখবেন ?</Link>
                  </h3>
                  <div>
                    <p className="text-sm font-nato text-gray-400 text-pretty leading-5 mb-1	">
                      কম্পিউটার একটি অসম্ভব ক্ষমতাবান কিন্তু নির্বোধ একটি
                      যন্ত্র। প্রোগ্রামিং শিখে আমরা একেকজন হয়ে উঠতে পারি সেই
                      মানুষটি ...
                    </p>
                    <Link
                      href="/"
                      className="mx-auto flex items-center justify-center px-6 border-[3px] bg-white hover:bg-primary-blue  text-base  font-nato py-3 text-primary-blue hover:text-white border-primary-blue rounded-[46px] min-w-36 w-36"
                    >
                      বিস্তারিত
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-duration="500">
            <div className="relative w-full max-h-52  aspect-[1/1]">
              <Image
                className=" object-fill object-top rounded"
                src="/images/blog.webp"
                alt="hero"
                fill={true}
              />
            </div>
            <div className="relative bg-white p-4 mx-3 -mt-5 rounded-md">
              <div className="flex flex-col ">
                <div className="flex mb-8">
                  <div className="flex gap-1 h-7">
                    <SlCalender className="w-6 h-6 text-orange self-end " />
                    <span className="self-start">31/01/2023</span>
                  </div>
                  <div className="h-7 border-r mx-2"></div>
                  <div className="flex gap-1 h-7 ">
                    <FaBookmark className="w-6 h-6 text-orange self-end " />

                    <span className="self-start text-sm font-nato self-center">
                      Computer Programming
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="font-hind text-2xl font-semibold mb-5 ">
                    <Link href="/">প্রোগ্রামিং কেনো শিখবেন ?</Link>
                  </h3>
                  <div>
                    <p className="text-sm font-nato text-gray-400 text-pretty leading-5 mb-1	">
                      কম্পিউটার একটি অসম্ভব ক্ষমতাবান কিন্তু নির্বোধ একটি
                      যন্ত্র। প্রোগ্রামিং শিখে আমরা একেকজন হয়ে উঠতে পারি সেই
                      মানুষটি ...
                    </p>
                    <Link
                      href="/"
                      className="mx-auto flex items-center justify-center px-6 border-[3px] bg-white hover:bg-primary-blue  text-base  font-nato py-3 text-primary-blue hover:text-white border-primary-blue rounded-[46px] min-w-36 w-36"
                    >
                      বিস্তারিত
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-duration="500">
            <div className="relative w-full max-h-52  aspect-[1/1]">
              <Image
                className=" object-fill object-top rounded"
                src="/images/blog.webp"
                alt="hero"
                fill={true}
              />
            </div>
            <div className="relative bg-white p-4 mx-3 -mt-5 rounded-md">
              <div className="flex flex-col ">
                <div className="flex mb-8">
                  <div className="flex gap-1 h-7">
                    <SlCalender className="w-6 h-6 text-orange self-end " />
                    <span className="self-start">31/01/2023</span>
                  </div>
                  <div className="h-7 border-r mx-2"></div>
                  <div className="flex gap-1 h-7 ">
                    <FaBookmark className="w-6 h-6 text-orange self-end " />

                    <span className="self-start text-sm font-nato self-center">
                      Computer Programming
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="font-hind text-2xl font-semibold mb-5 ">
                    <Link href="/">প্রোগ্রামিং কেনো শিখবেন ?</Link>
                  </h3>
                  <div>
                    <p className="text-sm font-nato text-gray-400 text-pretty leading-5 mb-1	">
                      কম্পিউটার একটি অসম্ভব ক্ষমতাবান কিন্তু নির্বোধ একটি
                      যন্ত্র। প্রোগ্রামিং শিখে আমরা একেকজন হয়ে উঠতে পারি সেই
                      মানুষটি ...
                    </p>
                    <Link
                      href="/"
                      className="mx-auto flex items-center justify-center px-6 border-[3px] bg-white hover:bg-primary-blue  text-base  font-nato py-3 text-primary-blue hover:text-white border-primary-blue rounded-[46px] min-w-36 w-36"
                    >
                      বিস্তারিত
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
