/* eslint-disable react/prop-types */
import { format, startOfWeek, addDays } from "date-fns";

const TableCalendar = ({
  firstDayOfMonth,
  monthEnd,
  events,
  handleDayClick,
}) => {
  const startDate = startOfWeek(firstDayOfMonth);
  const endDate = addDays(monthEnd, 1);

  const tableRows = [];
  let rowDays = [];
  let day = startDate;

  while (day < endDate) {
    // eslint-disable-next-line no-unused-vars
    const weekDays = Array.from({ length: 7 }, (_, i) => {
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
            display: isDisabled && "none",
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
    tableRows.push(<tr key={day}>{weekDays}</tr>);
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
