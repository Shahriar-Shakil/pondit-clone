import Link from "next/link";
import CourseCard from "./CourseCard";

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
    <div className="background-image  new-course mt-12 pt-10 pb-10 md:pt-[80px] md:pb-[56px]  ">
      <div className="container max-w-2xl mx-auto px-2  pb-14 relative">
        <div
          data-aos="fade-up"
          data-aos-duration="500"
          className="text-center md:text-left"
        >
          <p className="text-orange font-nato font-bold text-sm md:text-lg block tracking-[0.9px] pb-2 md:pb-[18px]">
            সকল ক্যাটাগরীর
          </p>
          <h2 className="text-2xl md:text-4xl font-hind font-bold text-[#0b0b0b] tracking-[0.9px] mb-0">
            চলমান কোর্সসমূহ
          </h2>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="500"
          className="mt-3 md:mt-6 font-nato text-base font-medium text-dark-light max-w-md text-center md:text-left"
        >
          <p>
            আমাদের কোর্সসমূহ ইন্ডাস্ট্রির অভিজ্ঞ এবং দক্ষ মেন্টর দ্বারা পরিচালিত
            হচ্ছে। মেন্টরগণ বাংলাদেশের স্বনামধন্য বিভিন্ন সফটওয়্যার ডেভেলপমেন্ট
            কোম্পানিগুলোতে যুক্ত আছেন।
          </p>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
          </div>
          <div className="mt-12">
            <Link
              href="/"
              className="mx-auto flex items-center justify-center px-6 border-[3px] bg-white hover:bg-primary-blue  text-base  font-nato py-3 text-primary-blue hover:text-white border-primary-blue rounded-[46px] min-w-36 w-36"
            >
              সকল কোর্স
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
