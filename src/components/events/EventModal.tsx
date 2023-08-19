// EventModal.tsx
import React from "react";
import Modal from "react-modal";
import { Color } from "../../Data/ColorData";
import EventForm from "./event-form/EventForm";
import EventDisplay from "./EventDisplay";

interface EventModalProps {
  isModalOpen: boolean;
  selectedDay: string | null;
  events: { [day: string]: string };
  setIsModalOpen: (isOpen: boolean) => void;
  eventName: string;
  eventColor: string;
  colors: Color[];
  setEventName: (name: string) => void;
  setEventColor: (color: string) => void;
  handleEventSubmit: (e: React.FormEvent) => void;
  handleEventDelete: () => void;
}

const EventModal: React.FC<EventModalProps> = ({
  isModalOpen,
  selectedDay,
  events,
  setIsModalOpen,
  eventName,
  eventColor,
  colors,
  setEventName,
  setEventColor,
  handleEventSubmit,
  handleEventDelete,
}) => (
  <Modal
    isOpen={isModalOpen}
    onRequestClose={() => setIsModalOpen(false)}
    contentLabel="Create Event"
    className="modal"
    overlayClassName="overlay"
  >
    <h2>{selectedDay}</h2>
    {selectedDay !== null && events[selectedDay] ? (
      <EventDisplay
        eventColor={eventColor}
        event={events[selectedDay]}
        handleEventDelete={handleEventDelete}
      />
    ) : (
      <EventForm
        eventName={eventName}
        eventColor={eventColor}
        colors={colors}
        setEventName={setEventName}
        setEventColor={setEventColor}
        handleEventSubmit={handleEventSubmit}
        setIsModalOpen={setIsModalOpen}
      />
    )}
  </Modal>
);

export default EventModal;
