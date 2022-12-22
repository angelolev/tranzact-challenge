import React from "react";
import "./styles/EventsList.scss";
import { useSelector } from "react-redux";
import { AppStore } from "@/redux/store";
import { IEvent } from "@/models";
import { Event } from "@/components";

export interface EventsListInterface {}

const EventsList: React.FC<EventsListInterface> = () => {
  const storeEvents = useSelector((store: AppStore) => store.events);

  return (
    <div className="events-list">
      {storeEvents.map((event: IEvent) => (
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
