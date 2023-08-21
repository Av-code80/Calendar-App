import React from "react";
import TableCalendar from "./table/TableCalendar";
import EventModal from "./events/EventModal";
import styles from "./Calendar.module.scss";

const Calendar: React.FC = () => {
  return (
    <div className={styles.calendar}>
      <TableCalendar
        firstDayOfMonth={new Date(2023, 0, 1)}
        monthEnd={new Date(2023, 0, 31)}
      />
      <EventModal />
    </div>
  );
};

export default Calendar;
