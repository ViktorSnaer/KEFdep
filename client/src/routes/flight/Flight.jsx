import { useParams } from "react-router-dom";
import Button from "../../components/shared/button/Button";

import styles from "./Flight.module.css";
import NumberOfPassengers from "./NumberOfPassengers";

export default function Flight() {
  let { flight } = useParams();
  // split string by dash
  let flightData = flight.split(/\s*\-\s*/g);

  let imgName = flightData[0].replace(/ /g, "");

  const imgPath = `/img/destination/${imgName}.jpg`;
  const imgDefault = "/img/destination/default.jpg";

  const defaultImage = (e) => {
    e.target.src = imgDefault;
  };

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img
          onError={defaultImage}
          className={styles.img}
          src={imgPath}
          alt={flightData[0]}
        />
        <h1 className={styles.dest}>{flightData[0]}</h1>
      </div>
      <div className={styles.info}>
        <p className={styles.departure}>Departure @ {flightData[1]}</p>
        <div className={styles.center}>
          <NumberOfPassengers />
        </div>
        <p className={styles.airline}>Airline: {flightData[2]}</p>
      </div>
      <Button link="/flight-booked" text="Book Now" />
    </div>
  );
}
