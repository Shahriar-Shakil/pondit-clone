import Header from "@/components/Header";
import Hero from "@/components/Hero";
import OurCourses from "@/components/OurCourses";
import OurPartners from "@/components/OurPartners";
import Status from "@/components/Status";
import SuccessStories from "@/components/SuccessStories";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Hero />
      <Status />
      <OurCourses />
      <SuccessStories />
      <OurPartners />
    </div>
  );
}
