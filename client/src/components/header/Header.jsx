import Search from "../search/Search";
import styles from "./Header.module.css";

export default function Header({ data }) {
  return (
    <div className={styles.container}>
      <img
        className={styles.image}
        src={`/img/header.jpg`}
        alt="view of a airplane from the ground"
      />
      <div className={styles.search}>
        <Search data={data} />
      </div>
    </div>
  );
}
