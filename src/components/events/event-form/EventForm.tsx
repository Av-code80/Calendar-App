import React from "react";
import Select from "./Select";
import { useCalendarContext } from "../../../context/CalendarContext";
import styles from "./EventForm.module.scss";

const EventForm: React.FC = () => {
  const { state, actions } = useCalendarContext();
  const { eventName } = state;
  const { setEventName, setIsModalOpen, handleEventSubmit } = actions;
  const isBtnDisabled = eventName.length < 3;

  return (
    <form className={styles.form} onSubmit={handleEventSubmit}>
      <label className={styles["event-name"]}>
        <span>Event Name</span>
        <input
          type="text"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
          placeholder="Enter Event Name"
        />
      </label>

      <label className={styles["event-name"]}>
        <span>Event Color</span>
        <Select />
      </label>

      <div className={styles.buttons}>
        <button
          className={`${isBtnDisabled ? styles.disabled : ""}`}
          type="submit"
          disabled={isBtnDisabled}
        >
          Create Event
        </button>
        <button className={styles.close} onClick={() => setIsModalOpen(false)}>
          Close
        </button>
      </div>
    </form>
  );
};

export default EventForm;
