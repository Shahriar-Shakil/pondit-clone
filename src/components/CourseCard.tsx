import Image from "next/image";
import Link from "next/link";
import { IoMdTime } from "react-icons/io";
import { SlCalender } from "react-icons/sl";

type Props = {};

export default function CourseCard({}: Props) {
  return (
    <div className="p-5 relative rounded-xl bg-white space-y-5 hover:bg-primary-blue group transition-all duration-300 ">
      <div className="group/cardHead relative  overflow-hidden shadow-xl aspect-[2/1] rounded-xl">
        <Image
          className="absolute w-full h-full group-hover/cardHead:scale-150 transition-all duration-200"
          src="/images/course1.webp"
          alt="hero"
          fill={true}
        />
        <div className="absolute z-20 top-1/2 right-1/2   translate-x-1/2  text-white ">
          <p className="text-sm sm:text-2xl font-bold  font-hind hadow-md scale-125 group-hover/cardHead:scale-100 transition-all duration-300">
            গ্রাফিক ডিজাইন
          </p>
        </div>
        <div className=" absolute z-20 bottom-5 right-3 bg-white px-2 py-1 rounded-lg">
          <h2 className="font-hind text-md text-orange font-bold">৳ ১২০০০০</h2>
        </div>
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black bg-fixed opacity-50"></div>
      </div>
      <div className="space-y-10 text-black group-hover:text-white">
        <div className="flex gap-2 ">
          <div className=" relative w-16 h-16 rounded-full border  ">
            <Image
              className="object-center object-cover rounded-full 	"
              src="/images/instractor.webp"
              alt="instractor"
              fill={true}
            />
          </div>
          <div className="mt-1 content-end ">
            <p className=" font-hind font-bold text-lg leading-4">
              Mohiuddin Fahad
            </p>
            <span>মেন্টর</span>
          </div>
        </div>
        <div>
          <p className=" font-nato font-medium text-lg leading-4">
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
                <IoMdTime className="w-8 h-8 text-green-500" />
              </span>{" "}
              100hr
            </p>
          </div>
        </div>
        <hr />
      </div>
      <div className="flex items-center justify-center ">
        <Link
          href="/"
          className="flex items-center justify-center px-6 border-[3px] bg-white hover:bg-white  text-base  font-nato py-3 text-primary-blue  border-primary-blue rounded-[46px] min-w-36 w-36"
        >
          বিস্তারিত
        </Link>
      </div>
    </div>
  );
}
