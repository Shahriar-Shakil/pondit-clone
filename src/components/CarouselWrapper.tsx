"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

type Props = {
  children: React.ReactNode;
  className?: string;
  settings: any;
};

export default function CarouselWrapper({
  children,
  className,
  settings,
}: Props) {
  return (
    <Slider {...settings} className={className}>
      {children}
    </Slider>
  );
}
