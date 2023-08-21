import React from "react";
import Modal from "react-modal";
import EventForm from "./event-form/EventForm";
import EventDisplay from "./EventDisplay";
import { useCalendarContext } from "../../context/CalendarContext";
import styles from "./EventModal.module.scss";

const EventModal: React.FC = () => {
  const { state, actions } = useCalendarContext();
  const { selectedDay, events, isModalOpen } = state;
  const { setIsModalOpen } = actions;

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={() => setIsModalOpen(false)}
      contentLabel="Create Event"
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <h2>{selectedDay}</h2>
      {selectedDay !== null && events[selectedDay] ? (
        <EventDisplay />
      ) : (
        <EventForm />
      )}
    </Modal>
  );
};

export default EventModal;
