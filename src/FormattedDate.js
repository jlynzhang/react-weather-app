import React from "react";

export default function FormattedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];
  let hours = props.date.getHours();
  if (hours > 12) {
    hours = hours - 12;
  }

  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let am_pm = determineAM_PM(props.date.getHours());
  function determineAM_PM(hour) {
    if (hour <= 11) {
      return "AM";
    } else {
      return "PM";
    }
  }

  return (
    <div>
      {day} {hours}:{minutes} {am_pm}
    </div>
  );
}
