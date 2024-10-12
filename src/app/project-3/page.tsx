import Heading from "@/components/Heading";
import styles from "../page.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Project() {
  return (
    <main className={styles.main}>
      <Heading title={"Tank Battles"} description={"A strategic tank game with engaging mechanics."} />
      <Link className="button" href="/">Go back</Link>
      
      <section className={styles.descriptionBox}>
        <h2>Description</h2>
        <p>
          A multiplayer battle game where players control tanks to engage in combat on various rendered terrains. Players use projectiles to hit opponents while navigating through obstacles and utilizing the environment to their advantage. The game incorporates features like wind dynamics and parachutes to enhance UX.
        </p>
      </section>

      <section className={styles.featuresBox}>
        <h2>Key Features</h2>
        <ul>
          <li>Dynamic terrain and level management for varied gameplay.</li>
          <li>Real-time physics for projectile motion and tank movement.</li>
          <li>Multiplayer support with customizable tank colors.</li>
          <li>Strategic elements like wind influence and parachute drops.</li>
        </ul>
      </section>

      <section className={styles.images}>
        <h2>Screenshots</h2>
        <Image width={400} height={400} src="/Snow.png" alt="Tanks Game Screenshot" />
        <Image width={400} height={400} src="/Snow_Fire.png" alt="Tanks Game Screenshot" />
        <Image width={400} height={400} src="/Desert.png" alt="Tanks Game Screenshot" />
        <Image width={400} height={400} src="/Mountains.png" alt="Tanks Game Screenshot" />
      </section>

      <section className={styles.challengesBox}>
        <h2>Challenges Faced: </h2>
        <p>
          I faced challenges such as terrain smoothing using moving averages, and implementing the physics for projectile trajectories.
        </p>
      </section>

      <section className={styles.lessonsBox}>
        <h2>Lessons Learned</h2>
        <p>
          This project taught me valuable lessons in game development, including real-time rendering, user input handling, and the importance of game balance for an engaging experience.
        </p>
      </section>

      <section className={"button"}>
        <a href="https://github.com/Niharika2708/TankBattles.git" target="_blank" rel="noopener noreferrer">View on GitHub</a>
      </section>
    </main>
  );
}
