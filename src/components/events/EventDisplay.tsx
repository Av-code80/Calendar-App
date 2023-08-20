import React from "react";

interface EventDisplayProps {
  eventColor: string;
  event: string;
  handleEventDelete: () => void;
}

const EventDisplay: React.FC<EventDisplayProps> = ({
  eventColor,
  event,
  handleEventDelete,
}) => (
  <div style={{ background:eventColor ,color: "#bdbbbb", textAlign: "center" }}>
    <p>Your event is: {event}</p>
    <button onClick={handleEventDelete}>Delete Event</button>
  </div>
);

export default EventDisplay;
