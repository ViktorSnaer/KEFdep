import styles from "./NextDay.module.css";

export default function nextDay() {
  let dateRef = new Date();
  let date = dateRef.getDate() + 1;
  let month = dateRef.getMonth() + 1;
  return (
    <div className={styles.container}>
      <h1>
        Flights from Keflavik Airport on {date} / {month}{" "}
      </h1>
    </div>
  );
}
