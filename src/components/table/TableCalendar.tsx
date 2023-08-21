import React from "react";
import { startOfWeek, addDays } from "date-fns";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

interface TableCalendarProps {
  firstDayOfMonth: Date;
  monthEnd: Date;
}

const TableCalendar: React.FC<TableCalendarProps> = ({
  firstDayOfMonth,
  monthEnd,
}) => {
  const startDate = startOfWeek(firstDayOfMonth);
  const endDate = addDays(monthEnd, 1);

  const tableRows: React.ReactNode[] = [];
  let day = startDate;

  while (day < endDate) {
    tableRows.push(
      <TableRow
        key={day.toISOString()}
        startDate={day}
        firstDayOfMonth={firstDayOfMonth}
        monthEnd={monthEnd}
      />
    );
    day = addDays(day, 7);
  }

  return (
    <table>
      <TableHeader />
      <tbody>{tableRows}</tbody>
    </table>
  );
};

export default TableCalendar;
