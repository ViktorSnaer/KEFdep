import Search from "../search/Search";
import styles from "./Header.module.css";

export default function Header({ data }) {
  return (
    <div className={styles.container}>
      {/* load .webp if no support load .jpg */}
      <picture>
        <source srcSet="/img/header.webp" type="image/webp" />
        <img
          className={styles.image}
          src={`/img/header.jpg`}
          alt="view of a airplane from the ground"
        />
      </picture>
      <div className={styles.search}>
        <Search data={data} />
      </div>
    </div>
  );
}
