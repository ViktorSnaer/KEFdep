import { useState } from "react";
import styles from "./NumberOfPassengers.module.css";

export default function NumberOfPassengers() {
  const [number, setNumber] = useState(1);

  const increment = () => {
    setNumber(number + 1);
  };

  const decrement = () => {
    if (number > 1) {
      setNumber(number - 1);
    }
  };

  return (
    <div>
      <p className={styles.passengers}>Passengers</p>
      <div className={styles.container}>
        <button className={styles.decrement} onClick={decrement}>
          -
        </button>
        <p>{number}</p>
        <button className={styles.increment} onClick={increment}>
          +
        </button>
      </div>
    </div>
  );
}
