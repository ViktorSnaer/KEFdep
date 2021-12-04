import DisplayFlights from "../components/flights/DisplayFlights";
import Header from "../components/header/Header";
import NextDay from "../components/NextDay/NextDay";

export default function Home({ data }) {
  return (
    <div>
      <Header data={data} />
      <NextDay />
      <DisplayFlights data={data} />
    </div>
  );
}
