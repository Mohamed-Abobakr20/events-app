import EventsList from "@/components/events/events-list";
import Search from "@/components/events/search-events";
import { getAllEvents } from "@/dummy-data";
import Head from "next/head";
import { useRouter } from "next/router";

export default function AllEvents() {
  const allEvents = getAllEvents();
  const router = useRouter();
  function handleSearch(year, month) {
    router.push(`/events/${year}/${month}`);
  }

  return (
    <>
      <Head>
        <title>All Events</title>
      </Head>
      <Search onSearch={handleSearch} />
      <EventsList events={allEvents} />
    </>
  );
}
