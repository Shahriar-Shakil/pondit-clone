import Header from "@/components/Header";
import Hero from "@/components/Hero";
import OurCourses from "@/components/OurCourses";
import OurPartners from "@/components/OurPartners";
import RecentBlogs from "@/components/RecentBlogs";
import Status from "@/components/Status";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Hero />
      <Status />
      <OurCourses />
      <Testimonials />
      <OurPartners />
      <RecentBlogs />
    </div>
  );
}
