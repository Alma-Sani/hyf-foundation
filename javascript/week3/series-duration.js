const seriesDurations = [
  {
    title: "Game of Thrones",
    days: 3,
    hours: 1,
    minutes: 0,
  },
];

function logOutSeriesText() {
  const lifeInMinutes = 80 * 365 * 24 * 60;

  for (let i = 0; i < seriesDurations.length; i++) {
    const series = seriesDurations[i];

    const seriesInMinutes =
      series.days * 24 * 60 + series.hours * 60 + series.minutes;

    const percentage = (seriesInMinutes / lifeInMinutes) * 100;

    console.log(series.title + " took " + percentage + "% of my life");
  }
}

logOutSeriesText();
