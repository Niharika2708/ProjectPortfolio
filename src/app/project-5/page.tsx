import Heading from "@/components/Heading";
import styles from "../page.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Project() {
  return (
    <main className={styles.main}>
      <Heading title={"Wizard Defense Game"} description={"Defend your tower from waves of monsters!"} />
      <Link className="button" href="/">Go back</Link>
      
      <section className={styles.descriptionBox}>
        <h2>Description</h2>
        <p>
          An engaging strategy game inspired by GemCraft where players defend their tower from waves of incoming monsters. Players build towers, upgrade capabilities, and use magical spells to defeat enemies. Features dynamic gameplay with multiple waves of monsters, each increasing in difficulty and variety.
        </p>
      </section>
      
      <section className={styles.featuresBox}>
        <h2>Key Features</h2>
        <ul>
          <li>Multiple waves of monsters with varying attributes and behaviors.</li>
          <li>Tower building and upgrading mechanics to enhance defense.</li>
          <li>Dynamic mana system for casting spells and summoning towers.</li>
          <li>Interactive gameplay with real-time strategy elements.</li>
        </ul>
      </section>

      <section className={styles.images}>
        <h2>Screenshots</h2>
        <Image width={400} height={400} src="/Wave1.png" alt="Wizard Tower Defense Game Screenshot" />
        <Image width={400} height={400} src="/Wave2.png" alt="Wizard Tower Defense Game Screenshot" />
        <Image width={400} height={400} src="/Wave3.png" alt="Wizard Tower Defense Game Screenshot" />
        <Image width={400} height={400} src="/Fire2.png" alt="Wizard Tower Defense Game Screenshot" />
      </section>

      <section className={styles.challengesBox}>
        <h2>Challenges Faced</h2>
        <p>
          Implementing the wave mechanics for different difficulty levels posed significant challenges. Ensuring smooth maze navigations using Dijkstra's Algorithm and A* also proved tricky.
        </p>
      </section>

      <section className={styles.lessonsBox}>
        <h2>Lessons Learned</h2>
        <p>
          This project deepened my understanding path finding algorithms such as A*, BFS and DFS, as the strengths of each had to be weighed against its impact on enhancing player engagement.
        </p>
      </section>

      <section className={"button"}>
        <a href="https://github.com/Niharika2708/WizardDefenseGame.git" target="_blank" rel="noopener noreferrer">View on GitHub</a>
      </section>
    </main>
  );
}
