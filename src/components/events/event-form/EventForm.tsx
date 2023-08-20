import React from "react";
import Select from "./Select";
import { Color } from "../../../Data/ColorData";

interface EventFormProps {
  eventName: string;
  eventColor: string;
  colors: Color[];
  setEventName: (name: string) => void;
  setEventColor: (color: string) => void;
  handleEventSubmit: (e: React.FormEvent) => void;
  setIsModalOpen: (isOpen: boolean) => void;
}

const EventForm: React.FC<EventFormProps> = ({
  eventName,
  eventColor,
  colors,
  setEventName,
  setEventColor,
  handleEventSubmit,
  setIsModalOpen,
}) => (
  <form className="form" onSubmit={handleEventSubmit}>
    <label className="event-name">
      <span>Event Name</span>
      <input
        type="text"
        value={eventName}
        onChange={(e) => setEventName(e.target.value)}
        placeholder="Enter Event name"
      />
    </label>

    <label className="event-name">
      <span>Event Color</span>
      <Select value={eventColor} onChange={setEventColor} options={colors} />
    </label>

    <div>
      <button type="submit" disabled={eventName.length < 3}>
        Create Event
      </button>
      <button onClick={() => setIsModalOpen(false)}>Close</button>
    </div>
  </form>
);

export default EventForm;
