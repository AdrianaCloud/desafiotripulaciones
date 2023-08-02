import React from "react";

const WeatherCard = ({ timeSlot }) => {
  const date = new Date(timeSlot.date);
  const dateText = date.toLocaleDateString();
  const skyState = timeSlot.weather ? timeSlot.weather[0].description : 'N/A';
  const windSpeed = timeSlot.windSpeed ? timeSlot.windSpeed : 'N/A';

  return (
    <article>
      <h2 id="date">{dateText}</h2>
      <p>{skyState}</p>
      <p>Max Temp: {Math.ceil(timeSlot.tempMax - 273)}º</p>
      <p>Min Temp: {Math.ceil(timeSlot.tempMin - 273)}º</p>
      <p>Wind speed: {Math.ceil(windSpeed * 3.6)} km/h</p>
    </article>
  );
};

export default WeatherCard;
