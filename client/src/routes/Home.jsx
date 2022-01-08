import DisplayFlights from "../components/flights/DisplayFlights";
import Header from "../components/header/Header";
import NextDayBanner from "../components/NextDayBanner/NextDayBanner";

export default function Home({ data }) {
  return (
    <div>
      <Header data={data} />
      <NextDayBanner />
      <DisplayFlights data={data} />
    </div>
  );
}
