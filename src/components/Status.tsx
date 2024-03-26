import Image from "next/image";
import React from "react";

let data = [
  {
    title: "নারীদের বৃত্তি",
    icons: "/icons/status-1.svg",
    count: "200",
  },
  {
    title: "ক্যারিয়ার কাউন্সেলি",
    icons: "/icons/status-2.svg",
    count: "10,000",
  },
  {
    title: "সফল ফ্রিল্যান্সার",
    icons: "/icons/status-3.svg",
    count: "65",
  },
  {
    title: "শারীরিক প্রতিবন্ধী",
    icons: "/icons/status-4.svg",
    count: "20",
  },
  {
    title: "পলিটেকনিক",
    icons: "/icons/status-1.svg",
    count: "15",
  },
  {
    title: "ইন্টার্নশিপের সুযোগ",
    icons: "/icons/status-2.svg",
    count: "115",
  },
];
type Props = {};

export default function Status({}: Props) {
  return (
    <div className="container max-w-2xl mx-auto px-2  pb-14 ">
      <div className="pt-[70px]  lg:pt-0 bg-white md:bg-transparent -mt-6 md:mt-0   lg:-mt-16  relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-3">
          {data.map((item, i) => (
            <div
              key={i}
              className="flex items-center justify-center md:justify-start p-6 rounded-[20px] bg-white border hover:-translate-y-3 transition-all	duration-500	"
            >
              <div>
                <Image src={item.icons} alt="icons" height={75} width={75} />
              </div>
              <div className="pl-[18px]">
                <h4 className="font-hind font-bold text-black">
                  <span>{item.count}</span>+
                </h4>
                <p className="font-nato text-black text-base">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
