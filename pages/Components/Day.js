import styled from "styled-components";
import { getDate } from "date-fns";
import { useEffect, useState } from "react";

export default function Day({ day }) {
  const [weekday, setWeekday] = useState("");
  const [dayofweek, setDayOfWeek] = useState("");

  useEffect(() => {
    setWeekday(day.toLocaleDateString("pt-BR", { weekday: "long" }));
    setDayOfWeek(getDate(day));
  }, [day]);
  return (
    <div className="day">
      <small>{weekday}</small>
      <h1>{dayofweek}</h1>

      <div className="hours">
        <small>08:00 - 08:30</small>
        <small>08:30 - 09:00</small>
        <small>09:00 - 09:30</small>
        <small>09:30 - 10:00</small>
        <small>10:00 - 10:30</small>
        <small>10:30 - 11:00</small>
        <small>11:00 - 11:30</small>
        <small>11:30 - 12:00</small>
        <small>12:00 - 12:30</small>
        <small>12:30 - 13:00</small>
        <small>13:00 - 13:30</small>
        <small>13:30 - 14:00</small>
        <small>14:00 - 14:30</small>
        <small>14:30 - 15:00</small>
        <small>15:00 - 15:30</small>
        <small>15:30 - 16:00</small>
        <small>16:00 - 16:30</small>
        <small>16:30 - 17:00</small>
        <small>17:00 - 17:30</small>
        <small>17:30 - 18:00</small>
      </div>
    </div>
  );
}
