import Image from "next/image";
import React from "react";

type Props = {};

export default function TestimonialsCard({}: Props) {
  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <p className="text-white italic text-pretty text-center font-hind text-sm md:text-base">
          আমি ৪ বছর মেয়াদী ডিপ্লোমা কোর্স শেষ করে ৮ম পর্বের ইন্টার্নশীপ সম্পন্ন
          করেছি ইন্সপায়ার্ড আইটি থেকে৷ আমি যতটা না আশা করেছিলাম তার চেয়ে অনেক
          কিছু অর্জন করতে পেরেছি এই প্রতিষ্ঠান থেকে। বর্তমান সময়ে নিজেকে দক্ষ
          করে তোলা ছাড়া অন্য কোন বিকল্প পথ নেই৷ আর এই বিষয়টিকেই ইন্সপায়ার্ড
          আইটি অনেক গুরুত্ব দিয়ে থাকে।
        </p>
      </div>
      <div className="flex flex-col items-center mt-5 ">
        <div className=" relative w-16 h-16 rounded-full border  ">
          <Image
            className="object-center object-cover rounded-full 	"
            src="/images/students/1.webp"
            alt="instractor"
            fill={true}
          />
        </div>
        <div className="mt-3 text-center text-sm md:text-base">
          <h2 className="font-hind font-bold">গোলাম মোস্তফা মানিক</h2>
          <p className="text-primary-blue">পলাশাবাড়ী পলিটেকনিক ইন্সটিটিউট</p>
        </div>
      </div>
    </div>
  );
}
