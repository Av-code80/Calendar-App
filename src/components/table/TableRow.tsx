import React from "react";
import TableCell from "./TableCell";
import { format, addDays } from "date-fns";
import { useCalendarContext } from "../../context/CalendarContext";

interface TableRowProps {
  startDate: Date;
  firstDayOfMonth: Date;
  monthEnd: Date;
}

const TableRow: React.FC<TableRowProps> = ({
  startDate,
  firstDayOfMonth,
  monthEnd,
}) => {
  const { state } = useCalendarContext();
  const { events } = state;
  let day = startDate;
  const weekDays = Array.from({ length: 7 }, (_, i) => {
    const formattedDay = format(day, "d");
    const eventExists = Boolean(events[formattedDay]);
    const isDisabled =
      day.getMonth() !== firstDayOfMonth.getMonth() || day > monthEnd;

    const cell = (
      <TableCell
        key={formattedDay}
        formattedDay={formattedDay}
        isDisabled={isDisabled}
        eventExists={eventExists}
      />
    );

    day = addDays(day, 1);
    return cell;
  });

  return <tr>{weekDays}</tr>;
};

export default TableRow;
