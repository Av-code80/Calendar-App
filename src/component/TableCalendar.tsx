import React from "react";
import { format, startOfWeek, addDays } from "date-fns";

interface Events {
  [day: string]: string;
}

interface TableCalendarProps {
  firstDayOfMonth: Date;
  monthEnd: Date;
  events: Events;
  handleDayClick: (day: string) => void;
}

const TableCalendar: React.FC<TableCalendarProps> = ({
  firstDayOfMonth,
  monthEnd,
  events,
  handleDayClick,
}) => {
  const startDate = startOfWeek(firstDayOfMonth);
  const endDate = addDays(monthEnd, 1);

  const tableRows: React.ReactNode[] = [];
  let rowDays: React.ReactNode[] = [];
  let day = startDate;

  while (day < endDate) {
    const weekDays: React.ReactNode[] = Array.from({ length: 7 }, (_, i) => {
      const formattedDay = format(day, "d");
      const isCurrentMonth = day >= firstDayOfMonth && day <= monthEnd;
      const eventExists = !!events[formattedDay];

      const isDisabled = day.getMonth() !== 0 || day > monthEnd;

      const cell = (
        <td
          key={formattedDay}
          className={`calendar-day ${
            isCurrentMonth ? "current-month" : "other-month"
          } ${isDisabled ? "disabled-day" : ""}`}
          onClick={() => !isDisabled && handleDayClick(formattedDay)}
          style={{
            cursor: isDisabled ? "not-allowed" : "pointer",
            backgroundColor: isDisabled ? "#f5f5f5" : "",
            color: isDisabled ? "#aaa" : "",
            display: isDisabled ? "none" : "",
          }}
        >
          {formattedDay}
          {eventExists && <span className="event-dot" />}
        </td>
      );

      day = addDays(day, 1);
      return cell;
    });

    rowDays = [...rowDays, ...weekDays];
    tableRows.push(<tr key={day.toISOString()}>{weekDays}</tr>);
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Sun</th>
          <th>Mon</th>
          <th>Tue</th>
          <th>Wed</th>
          <th>Thu</th>
          <th>Fri</th>
          <th>Sat</th>
        </tr>
      </thead>
      <tbody>{tableRows}</tbody>
    </table>
  );
};

export default TableCalendar;
