import React from "react";
import colors from "../../../Data/ColorData";
import { useCalendarContext } from "../../../context/CalendarContext";

const Select: React.FC = () => {
  const { state, actions } = useCalendarContext();
  const { eventColor } = state;
  const { setEventColor } = actions;

  return (
    <select value={eventColor} onChange={(e) => setEventColor(e.target.value)}>
      {colors.map((option) => (
        <option key={option.code} value={option.code}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default Select;
