import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import MobileSidebar from "./MobileSidebar";

type Props = {};

export default function Header({}: Props) {
  return (
    <div className="py-2">
      <div className="container max-w-2xl mx-auto px-2 lg:px-6">
        <div className=" flex justify-between items-center">
          <div className="flex items-center gap-4">
            {/* <button className="">
              <HiMiniBars3CenterLeft className="w-8 h-8 text-orange " />
            </button> */}
            <div className="block lg:hidden">
              <MobileSidebar />
            </div>
            <Link href="/">
              <Image
                src="/images/logo.webp"
                alt="logo"
                width="160"
                height="44"
              />
            </Link>
          </div>
          {/* menu */}
          <div className="hidden lg:block">
            <ul className="font-hind flex gap-x-[30px] text-base font-semibold">
              <li>
                <Link href="/home">হোম</Link>
              </li>
              <li>
                <Link href="/home">আমাদের সম্পর্কে</Link>
              </li>
              <li>
                <Link href="/home">কোর্স সমূহ</Link>
              </li>
              <li>
                <Link href="/home">সফলতার গল্প</Link>
              </li>
              <li>
                <Link href="/home">ব্লগ</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
