"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { IoIosClose } from "react-icons/io";

type Props = {};

export default function MobileSidebar({}: Props) {
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked((prevState) => !prevState);
  };
  return (
    <div className="drawer ">
      <input
        onChange={handleChange}
        id="mobile-sidebar"
        type="checkbox"
        className="drawer-toggle"
        checked={checked}
      />
      <div className="drawer-content">
        {/* Page content here */}
        <label htmlFor="mobile-sidebar" className="drawer-button">
          <HiMiniBars3CenterLeft className="w-8 h-8 text-orange " />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="mobile-sidebar"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        <div className="w-64 min-h-full bg-base-200 bg-orange">
          <div className="bg-white p-4">
            <div className="flex justify-between items-center w-full focus:bg-none ">
              <Image
                src="/images/logo.webp"
                height={29}
                width={120}
                alt="logo"
                className=""
              />

              <button
                onClick={handleChange}
                className="btn btn-sm btn-square btn-outline border-none	"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>

          <ul className="menu font-hind text-white p-0 [&_li>*]:rounded-none [&_li>*]:py-4">
            <li className="border-b border-orange-light">
              <Link href="/home">হোম</Link>
            </li>
            <li className="border-b border-orange-light">
              <Link href="/home">আমাদের সম্পর্কে</Link>
            </li>
            <li className="border-b border-orange-light">
              <Link href="/home">কোর্স সমূহ</Link>
            </li>
            <li className="border-b border-orange-light">
              <Link href="/home">সফলতার গল্প</Link>
            </li>
            <li className="border-b border-orange-light">
              <Link href="/home">ব্লগ</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
