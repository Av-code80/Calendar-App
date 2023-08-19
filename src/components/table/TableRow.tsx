// TableRow.tsx
import React from "react";
import TableCell from "./TableCell";
import { format, addDays } from "date-fns";

interface TableRowProps {
  startDate: Date;
  firstDayOfMonth: Date;
  monthEnd: Date;
  events: { [day: string]: string };
  handleDayClick: (day: string) => void;
}

const TableRow: React.FC<TableRowProps> = ({
  startDate,
  firstDayOfMonth,
  monthEnd,
  events,
  handleDayClick,
}) => {
  let day = startDate;
  const weekDays = Array.from({ length: 7 }, (_, i) => {
    const formattedDay = format(day, "d");
    const isCurrentMonth = day >= firstDayOfMonth && day <= monthEnd;
    const eventExists = !!events[formattedDay];
    const isDisabled =
      day.getMonth() !== firstDayOfMonth.getMonth() || day > monthEnd;

    const cell = (
      <TableCell
        key={formattedDay}
        formattedDay={formattedDay}
        isCurrentMonth={isCurrentMonth}
        isDisabled={isDisabled}
        eventExists={eventExists}
        handleDayClick={() => !isDisabled && handleDayClick(formattedDay)}
      />
    );

    day = addDays(day, 1);
    return cell;
  });

  return <tr>{weekDays}</tr>;
};

export default TableRow;
