"use client";

import { useInView } from "react-intersection-observer";
import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  direction?: "left" | "right" | "up" | "down";
  delay?: number;
}

export default function FadeInOnScroll({
  children,
  direction = "up",
  delay = 0,
}: FadeInProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const initialClass = {
    down: "opacity-0 -translate-y-10",
    up: "opacity-0 translate-y-10",
    left: "opacity-0 -translate-x-10",
    right: "opacity-0 translate-x-10",
  }[direction];

  const finalClass = "opacity-100 translate-x-0 translate-y-0";

  const transitionClass = `transition-all duration-700 ease-out`;
  const delayStyle = { transitionDelay: `${delay}ms` };

  return (
    <div
      ref={ref}
      className={`${inView ? finalClass : initialClass} ${transitionClass}`}
      style={delayStyle}
    >
      {children}
    </div>
  );
}
