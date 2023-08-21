import React, { createContext, useContext, useState } from "react";

interface EventInfo {
  name: string;
  color: string;
}

interface Events {
  [day: string]: EventInfo;
}

export interface CalendarState {
  selectedDay: string | null;
  events: Events;
  eventName: string;
  eventColor: string;
  isModalOpen: boolean;
}

export interface CalendarActions {
  setEventName: React.Dispatch<React.SetStateAction<string>>;
  setEventColor: React.Dispatch<React.SetStateAction<string>>;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleDayClick: (day: string) => void;
  handleEventSubmit: (e: React.FormEvent) => void;
  handleEventDelete: () => void;
}

const CalendarContext = createContext<
  | {
      state: CalendarState;
      actions: CalendarActions;
    }
  | undefined
>(undefined);

export const useCalendarContext = () => {
  const context = useContext(CalendarContext);
  if (!context) {
    throw new Error(
      "useCalendarContext must be used within a CalendarProvider"
    );
  }
  return context;
};

export interface CalendarProviderProps {
  children: React.ReactNode;
}

export const CalendarProvider: React.FC<CalendarProviderProps> = ({
  children,
}) => {
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
    setEventName("");
    setIsModalOpen(true);
  };

  const handleEventSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (eventName.trim() === "") {
      return;
    }
    if (selectedDay)
      setEvents((prevEvents) => ({
        ...prevEvents,
        [selectedDay]: { name: eventName, color: eventColor },
      }));
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

  const state: CalendarState = {
    selectedDay,
    events,
    eventName,
    eventColor,
    isModalOpen,
  };

  const actions: CalendarActions = {
    setEventName,
    setEventColor,
    setIsModalOpen,
    handleDayClick,
    handleEventSubmit,
    handleEventDelete,
  };

  return (
    <CalendarContext.Provider value={{ state, actions }}>
      {children}
    </CalendarContext.Provider>
  );
};
