import React from "react";
import "./styles/EventsList.scss";
import { IEvent } from "@/models";
import { Event } from "@/components";

export interface EventsListInterface {
  events: IEvent[]
}

const EventsList: React.FC<EventsListInterface> = ({events}) => {

  return (
    <div className="events-list">
      {events.map((event: IEvent) => (
        <Event
          id={event.id}
          key={event.id}
          markets={event.markets}
          name={event.name}
          isVisible={event.markets.length > 0}
        />
      ))}
    </div>
  );
};

export default EventsList;
