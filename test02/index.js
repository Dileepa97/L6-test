import fetch from "node-fetch";

const apiKey = "AIzaSyBIw8Cy_uIOB24Vper_tTklGL-nHL8eHiQ";

const getBusyIntervalsAsync = async (calendarId, startTime, endTime) => {
  const url = `https://www.googleapis.com/calendar/v3/freeBusy?key=${apiKey}`;

  const requestBody = {
    timeMin: startTime,
    timeMax: endTime,
    timeZone: "UTC",
    items: [{ id: calendarId }],
  };

  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
  })
    .then((response) => response.json())
    .then((data) => {
      const busyIntervals = data.calendars[calendarId].busy;
      console.log(busyIntervals);
      return busyIntervals;
    })
    .catch((error) => console.error("Error:", error));
};

const calendarId =
  "0b9d60de67c1041a8e511dab9caead5a1a728ee3e1ff851d99c5061869357855@group.calendar.google.com";
const start = "2024-01-20T00:00:00Z";
const end = "2024-01-30T00:00:00Z";

getBusyIntervalsAsync(calendarId, start, end);
