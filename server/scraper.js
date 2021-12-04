const puppeteer = require("puppeteer");

module.exports.scraper = async function () {
  // get number of days of current month
  function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
  }

  // dates for link
  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let date = today.getDate();
  // last day of the month?
  date === daysInMonth(month, year) ? (date = 1) : (date = date + 1);

  // init for sorted flights
  let flightsSorted = [];
  // tell bot to open up the browser
  // to ways of lunching the browser headless en non-headless => browser not open / browser open
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox"],
  });
  // open page in new browser
  const page = await browser.newPage();

  await page.goto(
    `https://www.isavia.is/en/keflavik-airport/flight-information/departures?d=${year}-${month}-${date}`
  );

  // wait for pop-up to aper
  await page.waitForTimeout(500);
  // accept cookies
  await page.click(".ch2-btn.ch2-allow-all-btn");

  const flights = await page.evaluate(() => {
    const getFlights = document.querySelectorAll(".schedule-items-entry td");

    // store el in one arr
    let flightsRaw = [];

    // .innerHTML grabs the html code if tag includes embedded tags
    // .innerText gets text/string only. Ignores html tags
    getFlights.forEach((project) => {
      flightsRaw.push(project.innerText);
    });

    return flightsRaw;
  });
  await browser.close();
  // every flight has 6 el => number of flights = length/6
  const noFlights = flights.length / 6;

  for (let i = 0; i < noFlights; i++) {
    // remove flight number
    flights.splice(2, 1);
    // push: time, city/airport, airline
    flightsSorted.push(flights.splice(0, 3));
    // remove unusable el
    flights.splice(0, 2);
  }
  flightsSorted.length > 0
    ? console.log("operation successful")
    : console.log("operation unsuccessful");
  return JSON.stringify(flightsSorted);
};
