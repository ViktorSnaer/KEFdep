import Flights from "./Flights";
import styles from "./DisplayFlights.module.css";
import { Link } from "react-router-dom";
const LOAD = [
  ["", "Loading", ""],
  ["", "Loading", ""],
  ["", "Loading", ""],
  ["", "Loading", ""],
  ["", "Loading", ""],
  ["", "Loading", ""],
];

export default function DisplayFlights({ data }) {
  return (
    <div className={styles.container}>
      <section className={styles.grid}>
        {data
          ? data
              .slice(0, 6)
              .map((flight, index) => (
                <Flights flight={flight} key={index} numb={index} />
              ))
          : LOAD.map((load, index) => (
              <Flights flight={load} key={index} numb={index} />
            ))}
      </section>
      <Link to="/all-flights" className={styles.link}>
        All Flights ✈️
      </Link>
    </div>
  );
}
