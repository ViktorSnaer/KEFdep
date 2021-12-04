import Button from "../../components/shared/button/Button";
import styles from "./FlightBooked.module.css";

export default function FlightBooked() {
  return (
    <div className={styles.container}>
      <div className={styles.message}>
        <h1 className={styles.header}>Enjoy your trip! 😎</h1>
        <Button link="/" text="Home" />
      </div>
    </div>
  );
}
