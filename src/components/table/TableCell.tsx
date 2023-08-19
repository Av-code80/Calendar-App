// TableCell.tsx
import React from "react";

interface TableCellProps {
  formattedDay: string;
  isCurrentMonth: boolean;
  isDisabled: boolean;
  eventExists: boolean;
  handleDayClick: () => void;
}

const TableCell: React.FC<TableCellProps> = ({
  formattedDay,
  isCurrentMonth,
  isDisabled,
  eventExists,
  handleDayClick,
}) => (
  <td
    className={`calendar-day ${
      isCurrentMonth ? "current-month" : "other-month"
    } ${isDisabled ? "disabled-day" : ""}`}
    onClick={handleDayClick}
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

export default TableCell;
