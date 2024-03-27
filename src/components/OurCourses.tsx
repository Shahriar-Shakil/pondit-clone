import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoMdTime } from "react-icons/io";
import { SlCalender } from "react-icons/sl";

const data = [
  {
    title: "বেসিক কম্পিউটার",
    fullName: "মোশন গ্রাফিক্স অ্যান্ড ভিডিও এডিটিং",
    courseInfo: [
      {
        duration: "3 month",
        internship: "2 month",
        classDuration: "1.5 Hours",
        classInWeek: "3 days",
      },
    ],
    courseBackgroundInfo: `<div><p>গ্রাফিক ডিজাইনার বর্তমানে বেশ জনপ্রিয় একটি পেশা, সম্মানজনক এবং রয়েছে ঝামেলা বিহীন কর্মক্ষেত্র। এই পেশা অত্যধিক জনপ্রিয় হওয়ার আরেকটি মূল কারণ হচ্ছে গ্রাফিক ডিজাইনারদের কর্মক্ষেত্র দেশের গণ্ডি পেরিয়ে আন্তর্জাতিক জব মার্কেট। পাশাপাশি অনলাইনে বিজনেস করতে হলেও অনেক গুরুত্বপূর্ন ভূমিকা রাখে গ্রাফিক ডিজাইন। আপনি যদি বিজনেস করতে চান তাহলে গ্রাফিক ডিজাইন আপনাকে শিখতেই হবে। সুন্দর ডিজাইন ছাড়া সবকিছুই মূল্যহীন। এছাড়াও গ্রাফিক ডিজাইন শিখে ফ্রিল্যান্সার হিসেবে ক্যারিয়ার গড়ার সুযোগ রয়েছে।</p>
        <p>কম্পিউটার বিজ্ঞানের অন্যতম শক্তি হচ্ছে গ্রাফিক ডিজাইন এন্ড মাল্টিমিডিয়া । বর্তমানে ব্রান্ড ডিজাইন থেকে শুরু করে যেকোনো কাজে&nbsp; কম্পিউটার গ্রাফিক প্রফেশনালদের হাতের ছোয়া লক্ষণীয়। গ্রাফিক ডিজাইন এর এই বিশাল চাহিদার দিকে লক্ষ্য রেখে আমাদের এই কোর্সটি সাজানো হয়েছে।</p></div>`,
    courseFee: 18000,
    discount: 9000,
    courseDetails:
      "আমাদের কোর্স ফলো করে আপনিও হতে পারবেন এখন দক্ষ ডিজাইনার। শুধুমাত্র ডিজাইন টুল বা ডিজাইন করার উপায় শিখিয়ে কোর্স শেষ হয় না বরং ডিজাইন শিখে রিয়েলটাইম প্রজেক্ট করার মাধ্যমে আপনি সহজে আপনার দক্ষতা বৃদ্ধি করতে পারবেন।",
  },
];
type Props = {};

export default function OurCourses({}: Props) {
  return (
    <div className="home-slide  new-course mt-12 pt-10 pb-10 md:pt-[80px] md:pb-[56px]">
      <div className="container max-w-2xl mx-auto px-2  pb-14">
        <div className="text-center md:text-left">
          <p className="text-orange font-nato font-bold text-sm md:text-lg block tracking-[0.9px] pb-[18px]">
            সকল ক্যাটাগরীর
          </p>
          <h2 className="text-4xl font-hind font-bold text-[#0b0b0b] tracking-[0.9px] mb-0">
            চলমান কোর্সসমূহ
          </h2>
        </div>
        <div className="mt-6 md:mt-10 font-nato text-base font-medium text-dark-light max-w-md text-center md:text-left">
          <p>
            আমাদের কোর্সসমূহ ইন্ডাস্ট্রির অভিজ্ঞ এবং দক্ষ মেন্টর দ্বারা পরিচালিত
            হচ্ছে। মেন্টরগণ বাংলাদেশের স্বনামধন্য বিভিন্ন সফটওয়্যার ডেভেলপমেন্ট
            কোম্পানিগুলোতে যুক্ত আছেন।
          </p>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="p-5 relative rounded-xl bg-white space-y-5">
              <div className=" relative w-full max-w-md  aspect-[2/1]">
                <Image
                  className="object-center object-cover 	"
                  src="/images/course1.webp"
                  alt="hero"
                  fill={true}
                />
                <div className="absolute z-20 top-1/2 right-1/2 translate-x-1/2 text-white ">
                  <p className="text-2xl font-bold  font-hind hadow-md">
                    গ্রাফিক ডিজাইন
                  </p>
                </div>
                <div className=" absolute z-20 bottom-5 right-3 bg-white px-2 py-1 rounded-lg">
                  <h2 className="font-hind text-md text-orange font-bold">
                    ৳ ১২০০০০
                  </h2>
                </div>
                <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black bg-fixed opacity-50"></div>
              </div>
              <div className="space-y-10 ">
                <div className="flex gap-2">
                  <div className=" relative w-16 h-16 rounded-full border  ">
                    <Image
                      className="object-center object-cover rounded-full	"
                      src="/images/instractor.webp"
                      alt="instractor"
                      fill={true}
                    />
                  </div>
                  <div className="mt-1 content-end">
                    <p className="text-black font-hind font-bold text-lg leading-4">
                      Mohiuddin Fahad
                    </p>
                    <span>মেন্টর</span>
                  </div>
                </div>
                <div>
                  <p className="text-black font-nato font-medium text-lg leading-4">
                    Graphics and UI Design
                  </p>
                  <div className="flex justify-between items-center pt-4">
                    <p className="flex items-center gap-2">
                      <span className="">
                        <SlCalender className="w-8 h-8 text-orange-light" />
                      </span>{" "}
                      4 Months
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="">
                        <IoMdTime className="w-8 h-8 text-orange-light" />
                      </span>{" "}
                      100hr
                    </p>
                  </div>
                </div>
                <hr />
              </div>
              <div className="text-center ">
                <Link
                  href="/"
                  className=" btn btn-ghost  border-2 p-5 border-blue-300 rounded-xl hover:bg-blue-300"
                >
                  বিস্তারিত
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
