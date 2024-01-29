import React, { useState, useEffect } from "react";
import pig from "./pig.jpg";
import "./App.css";

function GroundhogDayCounter() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const groundhogDay = new Date("February 3, 2024 12:20:00").getTime();
      const now = new Date().getTime();
      const distance = groundhogDay - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={pig} className="App-logo" alt="logo" />
        <div>
          <h1>Countdown to Groundhog Day:</h1>
          <p1>
            {days} days {hours} hours {minutes} minutes {seconds} seconds
          </p1>
        </div>
      </header>
    </div>
  );
}

export default GroundhogDayCounter;
