import React, { useState } from "react";
import { colors, Color } from "../Data/ColorData";
import TableCalendar from "./TableCalendar";
import Modal from "react-modal";
import "./Calendar.scss";

interface Events {
  [day: string]: string;
}

const Calendar: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  const [events, setEvents] = useState<Events>({});
  const [eventName, setEventName] = useState<string>("");
  const [eventColor, setEventColor] = useState<string>("#FF5252");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleDayClick = (day: string) => {
    const selectedDayInt = parseInt(day, 10);
    if (selectedDayInt > 31) {
      return;
    }

    setSelectedDay(day);
    setEventName(events[day] || "");
    setIsModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleEventSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (eventName.trim() === "") {
      return;
    }
    setEvents((prevEvents) => ({ ...prevEvents, [selectedDay!]: eventName }));
    setSelectedDay(null);
    setEventName("");
    setIsModalOpen(false); // Close the modal after submitting
  };

  const handleEventDelete = () => {
    if (selectedDay) {
      setEvents((prevEvents) => {
        const updatedEvents = { ...prevEvents };
        delete updatedEvents[selectedDay];
        return updatedEvents;
      });
      setSelectedDay(null);
      setIsModalOpen(false); // Close the modal after deleting
    }
  };

  return (
    <div className="calendar">
      <TableCalendar
        firstDayOfMonth={new Date(2023, 0, 1)}
        monthEnd={new Date(2023, 0, 31)}
        events={events}
        handleDayClick={handleDayClick}
      />

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Create Event"
        className="modal"
        overlayClassName="overlay"
      >
        <h2>{selectedDay}</h2>
        {selectedDay !== null && events[selectedDay] ? (
          <div style={{ color: eventColor, textAlign: "center" }}>
            <p>Your event is: {events[selectedDay]}</p>
            <button onClick={handleEventDelete}>Delete Event</button>
          </div>
        ) : (
          <form className="form" onSubmit={handleEventSubmit}>
            <label>
              Event Name:
              <input
                type="text"
                value={eventName}
                onChange={(e) => setEventName(e.target.value)}
                placeholder="Enter Event name"
              />
            </label>

            <label>
              Event Color:
              <select
                value={eventColor}
                onChange={(e) => setEventColor(e.target.value)}
              >
                {colors.map((color: Color) => (
                  <option key={color.code} value={color.code}>
                    {color.name}
                  </option>
                ))}
              </select>
            </label>

            <div className="buttons">
              <button type="submit" disabled={eventName.length < 3}>
                Create Event
              </button>
              <button onClick={closeModal}>Close</button>
            </div>
          </form>
        )}
      </Modal>
    </div>
  );
};

export default Calendar;
