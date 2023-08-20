// Calendar.tsx
import React, { useState } from "react";
import TableCalendar from "./table/TableCalendar";
import EventModal from "./events/EventModal";
import "./Calendar.scss";
import colors from "../Data/ColorData";

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
    setIsModalOpen(true);
  };

  const handleEventSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (eventName.trim() === "") {
      return;
    }
    setEvents((prevEvents) => ({ ...prevEvents, [selectedDay!]: eventName }));
    setSelectedDay(null);
    setEventName("");
    setIsModalOpen(false);
  };

  const handleEventDelete = () => {
    if (selectedDay) {
      setEvents((prevEvents) => {
        const updatedEvents = { ...prevEvents };
        delete updatedEvents[selectedDay];
        return updatedEvents;
      });
      setSelectedDay(null);
      setIsModalOpen(false);
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

      <EventModal
        isModalOpen={isModalOpen}
        selectedDay={selectedDay}
        events={events}
        setIsModalOpen={setIsModalOpen}
        eventName={eventName}
        eventColor={eventColor}
        colors={colors}
        setEventName={setEventName}
        setEventColor={setEventColor}
        handleEventSubmit={handleEventSubmit}
        handleEventDelete={handleEventDelete}
      />
    </div>
  );
};

export default Calendar;
