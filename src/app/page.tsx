import Heading from "@/components/Heading";
import styles from "./page.module.css";
import PortfolioEntryCardGroup from "@/components/PortfolioEntryCardGroup";
import SkillBadges from "@/components/SkillBadges";

export default function Home() {
  const skills = [
    "REACT",
    "NEXT.JS",
    "JAVASCRIPT",
    "CSS",
    "NODE.JS",
    "NPM"
  ];
  return (
    <main className={styles.main}>
      <Heading title={"Hello! I'm Niharika Chomal"} description={"Welcome to my portfolio! I am a student at the University of Sydney. My projects reflect my commitment to innovation, aesthetics, and functionality, blending technology and creativity to create meaningful digital experiences."}/>
      <PortfolioEntryCardGroup entries={
        [
          {
            title: "Flavour Vault",
            description: "A culinary platform to compile unique recipes.",
            image: "/candle.png",
            skills: ["HTML", "CSS Animations", "JavaScript", "Responsive Design"],
            href: "project",
          },
          {
            title: "Classic Checkers",
            description: "A checkers game with user-friendly interface.",
            image: "/cup.png",
            skills: ["Java", "GUI", "Event Handling", "Unit Testing"],
            href: "project-4",
          },
          {
            title: "Wizard Defense Game",
            description: "An interactive adaptation of GemCraft.",
            image: "/clock.png",
            skills: ["Data Structures and Algorithms", "Java", "Scripting", "UX", "JSON"],
            href: "project-5",
          },
          {
            title: "ESP32 Obstacle Avoiding Car",
            description: "A robotic car that navigates obstacles autonomously.",
            image: "/globe.png",
            skills: ["MicroPython", "Real Time Systems", "Wireless Communication", "Hardware Interfacing"],
            href: "project-2",
          },
          {
            title: "Tank Battles",
            description: "A strategic tank battle game with engaging mechanics.",
            image: "/key.png",
            skills: ["Java", "Frame based graphics", "Physics Simulations", "AI for NPC characters", "JSON"],
            href: "project-3",
          }
        ]
      } />

      <div className={styles.skillsSection}>
        <p style={{ fontSize: '15px'}}>This portfolio has been built using: </p>
        <SkillBadges skills={skills} />
      </div>

      <div className={styles.contactSection}>
        <p>Contact Me:</p>
        <p>Email: <a href="mailto:niharika.chomal@gmail.com">niharika.chomal@gmail.com</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/niharika-chomal-765165296/">Niharika Chomal</a></p>
        <p>GitHub: <a href="https://github.com/Niharika2708">Niharika2708</a></p>
      </div>
      
    </main>
  );
}