"use client";

import { useEffect, useState } from "react";

export default function NavBlur() {
  const [scrollY, setScrollY] = useState(0);
  const handleScroll = () => {
    setScrollY(window.scrollY);
		console.log(window.scrollY)
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return <div className={`${scrollY > 5 ? "backdrop-blur" : "backdrop-blur-none"} transition-all absolute inset-0 -z-10`}></div>;
}
