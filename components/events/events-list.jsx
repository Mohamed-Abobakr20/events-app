import EventsItem from "./event-item";

export default function EventsList({ events }) {
  return (
    <div className="row g-4">
      {events.map((event) => (
        <EventsItem item={event} key={event.id}/>
      ))}
    </div>
  );
}
