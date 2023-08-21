import React from "react";
import { useCalendarContext } from "../../context/CalendarContext";
import styles from "./TableCell.module.scss";

interface TableCellProps {
  formattedDay: string;
  isDisabled: boolean;
  eventExists: boolean;
}

const TableCell: React.FC<TableCellProps> = ({
  formattedDay,
  isDisabled,
  eventExists,
}) => {
  const { actions } = useCalendarContext();
  const { handleDayClick } = actions;
  return (
    <td
      className={`${styles.cell} ${isDisabled ? styles.isDisable : ""}`}
      onClick={() => !isDisabled && handleDayClick(formattedDay)}
    >
      {formattedDay}
      {eventExists && <span className={styles["event-dot"]} />}
    </td>
  );
};

export default TableCell;
