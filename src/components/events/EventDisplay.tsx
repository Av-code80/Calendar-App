import React from "react";
import { useCalendarContext } from "../../context/CalendarContext";
import styles from "./EventDisplay.module.scss";

const EventDisplay: React.FC = () => {
  const { state, actions } = useCalendarContext();
  const { selectedDay, events } = state;
  const { handleEventDelete } = actions;

  const { name, color } = selectedDay
    ? events[selectedDay]
    : { name: "", color: "" };

  return (
    <div className={styles["event-box"]}>
      <p style={{ background: color }}>Your event is: {name}</p>
      <button onClick={handleEventDelete}>Delete Event</button>
    </div>
  );
};

export default EventDisplay;
