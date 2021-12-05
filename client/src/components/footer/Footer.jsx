import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.projectLinks}>
          <Link to="/">Home</Link>
          <Link to="/all-flights">All Flights</Link>
          <Link to="/about">About</Link>
          <a
            href="https://github.com/ViktorSnaer/KEFdep"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
        <div className={styles.devLinks}>
          <p>Created and developed by Viktor Snaer © 2021</p>
          <p>
            See more projects on{" "}
            <a href="https://viktorsnaer.com/">viktorsnaer.com</a>
          </p>
          Check out my gitHub{" "}
          <a href="https://github.com/ViktorSnaer">ViktorSnaer</a>
        </div>
      </div>
    </div>
  );
}
