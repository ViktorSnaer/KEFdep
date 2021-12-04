import { Link } from "react-router-dom";

import styles from "./Button.module.css";

export default function Button({ link, text }) {
  return (
    <Link to={link}>
      <button className={styles.book}>{text}</button>
    </Link>
  );
}
