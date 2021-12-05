import styles from "./About.module.css";

export default function About() {
  return (
    <div>
      <div className={styles.imgContainer}>
        {/* load .webp if no support load .jpg */}
        <picture>
          <source srcSet="/img/terminal.webp" type="image/webp" />
          <img
            className={styles.img}
            src="/img/terminal.jpg"
            alt="airport terminal"
          />
        </picture>
      </div>
      <div className={styles.container}>
        <h1>About the Project</h1>
        <p>
          My main motivation for creating this project was to showcase my
          technical skills to potential employers, along with my love for travel
          and aviation.
        </p>
        <p>
          This site's function is to present all outgoing flights for the
          consecutive day from Iceland's international airport (Keflavik
          Airport), where the destination, time of departure, and airline will
          be displayed for each flight. This project mimics a travel site, all
          that is missing is the option to continue booking your flight. The
          search feature allows users to find a flight to their destination of
          choice, displaying their destination and time of departure. A
          potential problem that this project could solve is to help with
          filling more seats and minimize the risk for air travelers, as they
          can be tested for Covid-19 before they purchase a flight ticket.
        </p>
        <p>
          For the back-end, I used node.js, as JavaScript is the programming
          language most familiar to me. The data is scraped using Puppeteer
          where all data concerning each flight is received- I then filter out
          unnecessary data, and I use Express for the API. For the front-end I
          use React.js, and I don't rely on any CSS framework for my styling.
          All routes are made with react-router-dom. I thoroughly enjoyed
          working on this project and I intend to continue developing it. All
          images credit for this site:{" "}
          <a href="https://unsplash.com/">unsplash.com</a>
        </p>
      </div>
    </div>
  );
}
