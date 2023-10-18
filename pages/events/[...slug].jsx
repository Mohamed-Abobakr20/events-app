import EventsList from "@/components/events/events-list";
import { getFilteredEvents } from "@/dummy-data";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function FilteredEvents() {
  const router = useRouter();
  let slug = [];
  const [filteredEvents, setEvents] = useState([]);

  useEffect(() => {
    if (router.isReady) {
      slug = router.query.slug;
      setEvents(getFilteredEvents({ year: +slug[0], month: +slug[1] }));
    }
  }, [router.isReady]);

  return (
    <>
      <Head>
        <title>Filtered Events</title>
      </Head>
      {filteredEvents.length === 0 ? (
        <h1 className="not-found">No Events Found</h1>
      ) : (
        <EventsList events={filteredEvents} />
      )}
    </>
  );
}
