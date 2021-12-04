import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import AllFlights from "./routes/AllFlights";
import Flight from "./routes/flight/Flight";
import Navbar from "./components/nav/Navbar";
import Footer from "./components/footer/Footer";
import About from "./routes/about/About";
import FlightBooked from "./routes/flightBooked/FlightBooked";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(JSON.parse(data.message)));
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home data={data} />} />
        <Route path="/book/:flight" element={<Flight />} />
        <Route path="/all-flights" element={<AllFlights data={data} />} />
        <Route path="/about" element={<About />} />
        <Route path="/flight-booked" element={<FlightBooked />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
