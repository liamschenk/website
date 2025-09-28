"use client";

import { useEffect, useState } from "react";

import styles from "./page.module.css";

export default function Home() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const weekday = now.toLocaleDateString(undefined, { weekday: "long" });
  const date = now.toLocaleDateString(undefined, {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const time = now.toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <>
      <main className={styles.main}>
        <section className={styles.intro}>
          <h1>## Liam Schenk</h1>
          <p>&gt; Gelernter Mediamatiker EFZ</p>
        </section>

        <section className={styles.biography}>
          <h2># Über</h2>
          <p>
            Hallo, ich bin Liam, Mediamatiker EFZ mit Abschluss bei Swisscom.
            Aktuell arbeite ich beim{" "}
            <a
              href="https://stv-fsg.ch"
              target="_blank"
              rel="noopener noreferrer"
            >
              Schweizerischen Turnverband
            </a>
            . Mein Fokus liegt dort vor allem auf Grafikdesign. Ich arbeite
            strukturiert, teamorientiert und lerne gerne Neues.
          </p>
        </section>
        <section className={styles.contact}>
          <h2># Kontakt</h2>
          <div className={styles["contact-links"]}>
            <p>
              <a
                href="mailto:liam.schenk@bluewin.ch"
                target="_blank"
                rel="noopener noreferrer"
              >
                E-Mail
              </a>{" "}
              /{" "}
              <a
                href="https://www.linkedin.com/in/liamschenk"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>{" "}
              /{" "}
              <a
                href="https://github.com/liamschenk/website"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </p>
          </div>
        </section>
      </main>

      <footer>
        <p>
          {weekday}, {time}
        </p>
      </footer>
    </>
  );
}
