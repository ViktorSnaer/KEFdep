import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

export default function Navbar() {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.container}>
        <img className={styles.logo} src="img/airplane.png" alt="logo" />
        <nav className={styles.navBar}>
          <ul>
            <li>
              <Link to="/" className={styles.link}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/all-flights" className={styles.link}>
                All Flights
              </Link>
            </li>
            <li>
              <Link to="/about" className={styles.link}>
                About
              </Link>
            </li>
            <li>
              {" "}
              <a
                href="https://viktorsnaer.com/index.html"
                target="_blank"
                rel="noreferrer"
                className={styles.link}
              >
                GitHub
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
