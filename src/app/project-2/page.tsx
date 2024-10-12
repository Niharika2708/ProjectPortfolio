import Heading from "@/components/Heading";
import styles from "../page.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Project() {
  return (
    <main className={styles.main}>
      <Heading title={"ESP32 Obstacle Avoiding Car"} description={"An internship project to build an autonomous car using ESP32."} />
      <Link className="button" href="/">Go back</Link>
      
      <section className={styles.descriptionBox}>
        <h2>Description</h2>
        <p>
          This project is designed to navigate an obstacle avoiding car autonomously using an ultrasonic sensor and motors controlled by an ESP32. The car uses real-time distance measurements to detect obstacles and decide whether to move forward, turn, or reverse.
        </p>
      </section>

      <section className={styles.featuresBox}>
        <h2>Key Features</h2>
        <ul>
          <li>Real-time distance measurement using an ultrasonic sensor.</li>
          <li>Motor control for movement based on obstacle detection.</li>
          <li>Web interface to control the car remotely, including on/off functionality.</li>
          <li>Autonomous navigation around obstacles using decision-making logic.</li>
        </ul>
      </section>

      <section className={styles.images}>
        <h2>Screenshots</h2>
        <Image width={450} height={300} src="/front.png" alt="ESP32 Obstacle Avoiding Car Screenshot" />
        <Image width={450} height={300} src="/left.png" alt="ESP32 Obstacle Avoiding Car Screenshot" />
      </section>

      <section className={styles.challengesBox}>
        <h2>Challenges Faced</h2>
        <p>
          During this project, I faced challenges such as tuning the motor control for optimal performance and ensuring reliable distance measurements to prevent collisions.
        </p>
      </section>

      <section className={styles.lessonsBox}>
        <h2>Lessons Learned</h2>
        <p>
          This project taught me valuable lessons in embedded systems, real-time control, and integrating hardware components with software for functionality.
        </p>
      </section>

      <section className={"button"}>
        <a href="https://github.com/Niharika2708/ObstacleAvoidingCar.git" target="_blank" rel="noopener noreferrer">View on GitHub</a>
      </section>
    </main>
  );
}