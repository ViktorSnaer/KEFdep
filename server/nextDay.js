module.exports = function nextDay() {
  let currentDate = new Date();
  let year = currentDate.getFullYear();
  let month = currentDate.getMonth() + 1;
  let day = currentDate.getDate();
  let nextDay = getNextDay(month, day);

  function getNextDay(month, day) {
    if (day === lastDayInMonth(month, this.year)) {
      return 1;
    } else {
      return day + 1;
    }
  }

  function lastDayInMonth(month, year) {
    return new Date(year, month, 0).getDate();
  }
  return { year, month, nextDay };
};
