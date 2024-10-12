import Heading from "@/components/Heading";
import styles from "../page.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Project() {
  return (
    <main className={styles.main}>
      <Heading title={"Flavour Vault"} description={"A culinary platform for compiling unique recipes."} />
      <Link className="button" href="/">Go back</Link>
      
      <section className={styles.descriptionBox}>
        <p>
          A client-side web application designed for recipe management.
          Users can add, view, and edit recipes and their associated images. Features 
          robust search functionalities to retrieve recipes by character or image. 
          
          Designed with a focus on visual appeal and user experience, Flavour Vault enhances the experience of collecting 
          and refining recipes.
        </p>
      </section>

      <section className={styles.featuresBox}>
        <h2>Key Features</h2>
        <ul>
          <li>User-friendly interface for adding, viewing, and editing recipes.</li>
          <li>Search functionality accommodates partial and varied text inputs.</li>
          <li>Gallery view of all added recipes with animated images.</li>
        </ul>
      </section>

      <section className={styles.images}>
        <h2>Screenshots</h2>
        <Image width={450} height={300} src="/Main.png" alt="Project Screenshot" />
        <Image width={450} height={300} src="/Home.png" alt="Project Screenshot" />
        <Image width={450} height={300} src="/Add.png" alt="Project Screenshot" />

      </section>

      <section className={styles.challengesBox}>
        <h2>Challenges Faced: </h2>
        <p>
          During this project, I found integrating dynamic content such as animations with static elements and managing state 
          effectively across different components difficult. 
        </p>
      </section>

      <section className={styles.lessonsBox}>
        <h2>Lessons Learned: </h2>
        <p>
          This project taught me the importance of user-centered design and how to leverage client-side storage 
          effectively for maintaining user data without a server.
        </p>
      </section>

      <section className={"button"}>
        <a href="https://github.com/Niharika2708/FlavourVault.git" target="_blank" rel="noopener noreferrer">
          View on GitHub
        </a>
      </section>

      <section className={"button"}>
        <a href="https://github.com/Niharika2708/FlavourVault.git" target="_blank" rel="noopener noreferrer">
          Project is Live here
        </a>
      </section>

    </main>
  );
}