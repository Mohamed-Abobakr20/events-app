import { getEventById } from "@/dummy-data";
import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function EventDetails() {
  const router = useRouter();
  const [event, setEvent] = useState(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (router.isReady) {
      setEvent(getEventById(router.query.eventId));
      setIndex(event?.location.indexOf(","));
    }
  }, [router.isReady, index, event]);

  return (
    <>
      <Head>
        <title>Event Details</title>
      </Head>
      {event ? (
        <div className="card w-75 mx-auto">
          <img src={event.image} className="w-100" height={260} />
          <div className="card-body">
            <h3 className="card-title">{event.title}</h3>
            <p className="card-text">{event.description}</p>
            <div className="address d-flex align-items-center mb-3">
              <i className="fa-solid fa-location-dot me-3 fs-5"></i>
              <p className="m-0">
                <span className="d-block">
                  {event?.location.slice(0, index)}
                </span>
                <span>{event?.location.slice(index + 1)}</span>
              </p>
            </div>
            <p className="date">
              <i className="fa-solid fa-calendar-days me-3 fs-5"></i>
              <em>
                {new Date(event.date).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </em>
            </p>
          </div>
        </div>
      ) : (
        // <div>dd</div>
        <h1 className="not-found">Loadding...</h1>
      )}
    </>
  );
}
