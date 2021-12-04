import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Search.module.css";

export default function Search({ data }) {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className={styles.container}>
      <h1>Next day departures out of Iceland</h1>
      <div className={styles.center}>
        <input
          className={styles.input}
          type="text"
          placeholder="Search destination"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
        {data
          ? data
              .filter((data) => {
                if (searchTerm === "") {
                  return;
                } else if (
                  data[1].toLowerCase().includes(searchTerm.toLocaleLowerCase())
                ) {
                  return data;
                }
              })
              .map((flight, index) => {
                return (
                  <div key={index} className={styles.searchResult}>
                    <Link
                      className={styles.searchLink}
                      to={`/book/${flight[1]}-${flight[0]}-${flight[2]}`}
                    >
                      {flight[1]} - DEP {flight[0]}
                    </Link>
                  </div>
                );
              })
          : null}
      </div>
    </div>
  );
}
