const puppeteer = require("puppeteer");
const nextDay = require("./nextDay.js");

module.exports.scraper = async function () {
  const getDates = nextDay();

  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox"],
  });

  const page = await browser.newPage();

  await page.goto(
    `https://www.isavia.is/en/keflavik-airport/flight-information/departures?d=${getDates.year}-${getDates.month}-${getDates.nextDay}`
  );

  // wait for pop-up to aper
  await page.waitForTimeout(500);
  // accept cookies
  await page.click(".ch2-btn.ch2-allow-all-btn");

  const flights = await page.evaluate(() => {
    const getFlights = document.querySelectorAll(".schedule-items-entry td");

    let flightsUntrimmed = [];

    getFlights.forEach((flight) => {
      flightsUntrimmed.push(flight.innerText);
    });

    return flightsUntrimmed;
  });

  await browser.close();

  const numberOfFlights = flights.length / 6;

  let flightsTrimmed = [];

  for (let i = 0; i < numberOfFlights; i++) {
    // flight number
    flights.splice(2, 1);
    // time, city/airport, airline
    flightsTrimmed.push(flights.splice(0, 3));

    flights.splice(0, 2);
  }

  return JSON.stringify(flightsTrimmed);
};
