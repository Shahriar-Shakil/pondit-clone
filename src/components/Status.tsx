import Image from "next/image";
import React from "react";

let data = [
  {
    title: "মোট কোর্স",
    icons: "/icons/status-1.svg",
    count: 30,
  },
  {
    title: "মোট মেন্টর",
    icons: "/icons/status-2.svg",
    count: 35,
  },
  {
    title: "মোট শিক্ষার্থী",
    icons: "/icons/status-3.svg",
    count: 7500,
  },
  {
    title: "মোট স্কলারশিপ",
    icons: "/icons/status-3.svg",
    count: 2230,
  },
];
type Props = {};

export default function Status({}: Props) {
  return (
    <div className="container max-w-xl mx-auto px-2 lg:px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex items-center justify-center md:justify-start p-6 rounded-[20px] bg-white">
          <div>
            <Image
              src="/icons/status-1.svg"
              alt="icons"
              height={75}
              width={75}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
