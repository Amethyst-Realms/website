import Image from "next/image";
import Players, { CopyIP } from "../components/home/serverinfo";
import styles from "./page.module.css";
import rove from "../public/rove_banner.png";
import Cards, { Card } from "../components/home/cards";3
import vault from "../public/banners/vault.png"
import research from "../public/banners/research.png"

const cards: Card[] = [{
  title: "Release 1.0!",
  content: "we have now released a super very epic 420 cool version of rove that everyone should play :troll: ",
  image: research,
  link: "/updates/1.0",
  linkName: "Read Updates1!!!1!"

},{
  title: "Monuments",
  content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
  image: vault,
  link: "/monuments",
},{
  title: "Release 1.0!",
  content: "we have now released a super very epic 420 cool version of rove that everyone should play :troll: ",
  image: research,
  link: "/updates/1.0",
  linkName: "Read Updates1!!!1!"

},{
  title: "Monuments",
  content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
  image: vault,
  link: "/monuments",
},]

export default function Home() {
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
          texttext
        </h3>
        <div className={styles.serverInfo}>
          <Players />
          <CopyIP ip="hypixel.net" />
        </div>
      </div>
      <Cards cards={cards} />
    </div>
  );
}
