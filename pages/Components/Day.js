import styled, { css } from "styled-components";
import { getDate, getDay, isToday } from "date-fns";
import { useEffect, useState } from "react";

export default function Day({ day, handleClickDay }) {
	const [weekday, setWeekday] = useState("");
	const [dayofweek, setDayOfWeek] = useState("");
	const [today, setToday] = useState(false);

	useEffect(() => {
		setWeekday(day.toLocaleDateString("pt-BR", { weekday: "long" }));
		setDayOfWeek(getDate(day));
		isToday(day) ? setToday(true) : setToday(false);
	}, [day]);

	return (
		<div onClick={handleClickDay} className={today ? "day today" : "day"}>
			<small>{weekday}</small>
			<h1>{dayofweek}</h1>
		</div>
	);
}
