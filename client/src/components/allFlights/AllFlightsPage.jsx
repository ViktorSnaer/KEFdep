import Flights from "../flights/Flights";
import styles from "./AllFlightsPage.module.css";
const LOAD = [
  ["", "Loading", ""],
  ["", "Loading", ""],
  ["", "Loading", ""],
  ["", "Loading", ""],
  ["", "Loading", ""],
  ["", "Loading", ""],
  ["", "Loading", ""],
  ["", "Loading", ""],
  ["", "Loading", ""],
];

export default function AllFlightsPage({ data }) {
  return (
    <div className={styles.container}>
      <section className={styles.grid}>
        {data
          ? data.map((flight, index) => {
              return <Flights flight={flight} key={index} numb={index} />;
            })
          : LOAD.map((load, index) => (
              <Flights flight={load} key={index} numb={index} />
            ))}
      </section>
    </div>
  );
}
