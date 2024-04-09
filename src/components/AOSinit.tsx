"use client";
import "aos/dist/aos.css";
import AOS from "aos";
import React, { useEffect } from "react";

type Props = {
  children: React.ReactNode;
};

export default function AOSinit({ children }: Props) {
  useEffect(() => {
    AOS.init();
  }, []);
  return <div>{children}</div>;
}
