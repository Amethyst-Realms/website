"use client";

import type { StaticImageData } from "next/image";
import Image from "next/image";
import Link from "next/link";
import { useRef, MouseEvent } from "react";
import styles from "./card.module.css";

export default function Cards({ cards }: { cards: Card[] }) {
  const inputRef = useRef<HTMLDivElement[]>([]);

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    for (const card of inputRef.current) {
      const rect = card.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;

      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    }
  };
  return (
    <div className={styles.cards} id="cards" onMouseMove={onMouseMove}>
      {cards.map((card, i) => (
        <div
          className={styles.card}
          key={i}
          //@ts-expect-error typescript moment
          ref={(el) => (inputRef.current[i] = el)}
        >
          <div className={styles.content}>
            <div className={styles.image}>
              <Image src={card.image} alt={"image of " + card.title} fill style={{ objectPosition: "center", objectFit: "cover", borderRadius: "inherit" }} /> 
            </div>
            <h2>{card.title}</h2>
            <p>{card.content}</p>
            {card.link &&
            <Link href={card.link}>
              {card.linkName || "Learn More"}
            </Link>
            }
          </div>
        </div>
      ))}
    </div>
  );
}

export interface Card {
  image: StaticImageData;
  title: string;
  content: string;
  link?: string;
  linkName?: string;
}
