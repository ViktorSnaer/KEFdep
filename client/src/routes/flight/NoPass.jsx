import { useState } from "react";
import styles from "./NoPass.module.css";

export default function NoPass() {
  const [no, setNo] = useState(1);

  const increment = () => {
    setNo(no + 1);
  };

  const decrement = () => {
    if (no > 1) {
      setNo(no - 1);
    }
  };

  return (
    <div>
      <p className={styles.passengers}>Passengers</p>
      <div className={styles.container}>
        <button className={styles.decrement} onClick={decrement}>
          -
        </button>
        <p>{no}</p>
        <button className={styles.increment} onClick={increment}>
          +
        </button>
      </div>
    </div>
  );
}
