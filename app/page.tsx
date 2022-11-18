"use client";

import Image from "next/image";
import { Suspense, useEffect, useLayoutEffect, useRef, useState } from "react";
import Players, { CopyIP } from "../components/home/serverinfo";
import styles from "./page.module.css";
import rove from "../public/rove_banner.png";
import cardStyles from "../components/home/card.module.css";

export default function Home() {
  const inputRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState([0, 0]);
  useEffect(() => {
    document.getElementById("cards").onmousemove = (e) => {
      for (const card of document.getElementsByClassName("card")) {
        const rect = card.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      }
    };
  });
  return (
    <div>
      <div className={styles.hero}>
        <div className={styles.rove}>
          <Image
            src={rove}
            fill
            alt="rove banner"
            style={{ objectPosition: "center", objectFit: "cover" }}
          />
        </div>
        <h3 className={styles.bold}>
          Rove is an open-world, zombie survaival server thing. text text
          texttext{" "}
        </h3>
        <div className={styles.serverInfo}>
          <Players />
          <CopyIP ip="hypixel.net" />
        </div>
      </div>
      <div
        className={cardStyles.cards}
        id="cards"
        onMouseMove={(e) => setMousePosition([e.clientX, e.clientY])}
      >
        {["card 1", "card 2"].map((v, i) => (
          <div className={cardStyles.card} key={i} ref={inputRef}>
            {/* <style jsx>{`
              :root {
                --mouse-x: ${mousePosition[0] - inputRef.current.getBoundingClientRect()}
              }
            `}</style> */}
            <div className={cardStyles.content}>{v}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
