import { useParams } from "react-router-dom";
import Button from "../../components/shared/button/Button";

import styles from "./Flight.module.css";
import NoPass from "./NoPass";

export default function Flight() {
  let { flight } = useParams();
  // split string by dash
  let data = flight.split(/\s*\-\s*/g);

  let imgName = data[0].replace(/ /g, "");

  const imgPath = `/img/destination/${imgName}.jpg`;
  const imgDef = "/img/destination/default.jpg";
  // set default img if no img is found under path name
  const defImg = (e) => {
    e.target.src = imgDef;
  };

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img
          onError={defImg}
          className={styles.img}
          src={imgPath}
          alt={data[0]}
        />
        <h1 className={styles.dest}>{data[0]}</h1>
      </div>
      <div className={styles.info}>
        <p className={styles.departure}>Departure @ {data[1]}</p>
        <div className={styles.center}>
          <NoPass />
        </div>
        <p className={styles.airline}>Airline: {data[2]}</p>
      </div>
      <Button link="/flight-booked" text="Book Now" />
    </div>
  );
}
