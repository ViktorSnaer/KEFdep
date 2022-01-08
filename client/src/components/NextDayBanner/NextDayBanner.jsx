import styles from "./NextDayBanner.module.css";

export default function nextDayBanner() {
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
