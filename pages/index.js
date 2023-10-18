import EventsList from "@/components/events/events-list";
import { getFeaturedEvents } from "@/dummy-data";
import Head from "next/head";

export default function Home() {
  const featuredEvents = getFeaturedEvents();

  return (
    <>
      <Head>
        <title>Featured Events</title>
      </Head>
      <EventsList events={featuredEvents} />
    </>
  );
}
