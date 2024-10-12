import Heading from "@/components/Heading";
import styles from "../page.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Project() {
  return (
    <main className={styles.main}>
      <Heading title={"Classic Checkers"} description={"A checkers game with engaging gameplay."} />
      <Link className="button" href="/">Go back</Link>
      
      <section className={styles.descriptionBox}>
        <h2>Description</h2>
        <p>
          A two-player strategy board game where players aim to capture all opponent pieces or block them from moving. Players take turns moving their pieces across the board and capturing opponents by jumping over. Gameplay uses traditional rules, with the ability to promote pieces to kings when they reach the opposite end of the board, enhancing gameplay and strategy.
        </p>
      </section>

      <section className={styles.featuresBox}>
        <h2>Key Features</h2>
        <ul>
          <li>Interactive board with smooth animations for piece movements.</li>
          <li>Real-time user input handling for moves and captures.</li>
          <li>Dynamic promotion of pieces to kings with unique visual indicators.</li>
          <li>Animated win condition detection for an engaging competitive experience.</li>
        </ul>
      </section>

      <section className={styles.images}>
        <h2>Screenshots</h2>
        <Image width={400} height={400} src="/Start.png" alt="Checkers Game Screenshot" />
        <Image width={400} height={400} src="/Move.png" alt="Checkers Game Screenshot" />
        <Image width={400} height={400} src="/King.png" alt="Checkers Game Screenshot" />
      </section>

      <section className={styles.challengesBox}>
        <h2>Challenges Faced: </h2>
        <p>
          I faced challenges related to implementing the game rules accurately and as it required considering all the possible moves, especially in handling captures and promoting pieces to kings.
        </p>
      </section>

      <section className={styles.lessonsBox}>
        <h2>Lessons Learned</h2>
        <p>
          This project taught me valuable lessons in game design, particularly regarding user interaction and the value of smooth animations.
        </p>
      </section>

      <section className={"button"}>
        <a href="https://github.com/Niharika2708/ClassicCheckers.git" target="_blank" rel="noopener noreferrer">View on GitHub</a>
      </section>
    </main>
  );
}
