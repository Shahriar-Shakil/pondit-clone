"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import MobileSidebar from "./MobileSidebar";

type Props = {};

export default function Header({}: Props) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  console.log(scrollPosition);
  return (
    <div className="fixed left-0 right-0 top-0 z-50">
      <div className={cn("py-4", scrollPosition > 100 && "add-header-bg")}>
        <div className="container max-w-2xl mx-auto px-2 lg:px-6">
          <div className=" flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="block lg:hidden">
                <MobileSidebar />
              </div>
              <Link className="flex-grow " href="/">
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
                  <Link className="hover:text-orange-light" href="/home">
                    হোম
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-orange-light" href="/home">
                    আমাদের সম্পর্কে
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-orange-light" href="/home">
                    কোর্স সমূহ
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-orange-light" href="/home">
                    সফলতার গল্প
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-orange-light" href="/home">
                    ব্লগ
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
