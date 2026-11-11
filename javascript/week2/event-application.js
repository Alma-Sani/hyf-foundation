function getEventWeekday(daysUntilEvent) {
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const today = new Date().getDay();
  const eventDay = (today + daysUntilEvent) % 7;
  return weekdays[eventDay];
}
console.log(getEventWeekday(2));
console.log(getEventWeekday(9));
