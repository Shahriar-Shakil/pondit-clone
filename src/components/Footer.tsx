import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import { IoMailOutline } from "react-icons/io5";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer>
      {/* footer top */}
      <div className="container max-w-2xl mx-auto px-2 my-10">
        <div
          data-aos="fade-up"
          data-aos-duration="500"
          className="grid grid-cols-12 gap-6"
        >
          <div className="col-span-12 md:col-span-4 max-w-full md:max-w-80">
            <div>
              <div className="mb-4">
                <Image
                  src="/images/logo.webp"
                  alt="logo"
                  width="160"
                  height="44"
                />
              </div>
              <div className="">
                <p className=" text-sm font-nato text-pretty text-black">
                  ভার্চুয়াল ট্রেইনিং জগতে শ্রেষ্টত্বের দাবীদার INSPIRE IT চাচ্ছে
                  বাংলাদেশের শিক্ষিত জনগোষ্ঠীকে অনলাইন শিক্ষা ব্যবস্থায় পারদর্শী
                  করে গড়ে তোলা । যা বাংলাদেশের জন্য উন্নত বিশ্বের দারপ্রান্তে
                  যাওয়ার এক মাইলফলক হয়ে থাকবে ।
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-6 md:col-span-2">
            <h2 className="text-black text-lg font-bold mb-7 capitalize">
              মেন্টরদের জন্য
            </h2>
            <ul className="[&>li]:text-sm [&>li]:font-nato [&>li]:py-2 hover:[&>li]:text-orange">
              <li>
                <Link href="/">লগইন</Link>
              </li>
              <li>
                <Link href="/">রেজিস্ট্রেশন</Link>
              </li>
              <li>
                <Link href="/">ড্যাশবোর্ড</Link>
              </li>
              <li>
                <Link href="/">প্রোফাইল</Link>
              </li>
            </ul>
          </div>
          <div className="col-span-6 md:col-span-2">
            <h2 className="text-black text-lg font-bold mb-7 capitalize">
              কুইক লিংক
            </h2>
            <ul className="[&>li]:text-sm [&>li]:font-nato [&>li]:py-2 hover:[&>li]:text-orange">
              <li>
                <Link href="/">আমাদের সম্পর্কে</Link>
              </li>
              <li>
                <Link href="/">ভর্তি সংক্রান্ত তথ্য</Link>
              </li>
              <li>
                <Link href="/">কোর্স সমুহ</Link>
              </li>
              <li>
                <Link href="/">ব্লগ</Link>
              </li>
            </ul>
          </div>
          <div className="col-span-12 md:col-span-4">
            <h2 className="text-black text-lg font-bold mb-7 capitalize">
              যোগাযোগ
            </h2>
            <div className="[&>div]:my-4">
              <div className="flex items-center gap-2">
                <span>
                  <FaLocationDot className="w-6 h-6 text-fuchsia-500	" />
                </span>
                <p>চারতালা মোড়, কলেজ রোড, রংপুর।</p>
              </div>
              <div className="flex items-center gap-2">
                <span>
                  <IoMailOutline className="w-6 h-6 text-orange	" />
                </span>
                <p>info@inspireditbd.com</p>
              </div>
              <div className="flex items-center gap-2">
                <span>
                  <IoIosCall className="w-6 h-6 text-primary-blue	" />
                </span>
                <p> +880 173 8240668</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
