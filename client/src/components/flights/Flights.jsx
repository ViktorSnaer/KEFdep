import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Flights.module.css";

export default function Flights({ flight, numb }) {
  useEffect(() => {
    firstFrame();
  });

  const [big, setBig] = useState(null);

  // first frame 2* larger on desktop screens
  const firstFrame = () => {
    if (
      numb === 0 ||
      numb === 7 ||
      numb === 12 ||
      numb === 19 ||
      numb === 24 ||
      numb === 31 ||
      numb === 36
    ) {
      setBig(styles.big);
    } else {
      setBig(null);
    }
  };

  let imgPath = flight[1].replace(/ /g, "");
  const imgDef = "/img/destination/default.jpg";

  const defImg = (e) => {
    e.target.src = imgDef;
  };

  return (
    <div className={`${styles.container} ${big}`}>
      <Link to={`/book/${flight[1]}-${flight[0]}-${flight[2]}`}>
        <img
          onError={defImg}
          className={styles.img}
          src={`/img/destination/${imgPath}.jpg`}
          alt={flight[1]}
        />
        <div className={styles.info}>
          <p>{flight[1]}</p>
          <p>Departure: {flight[0]}</p>
          <p>Fly with {flight[2]}</p>
        </div>
      </Link>
    </div>
  );
}
