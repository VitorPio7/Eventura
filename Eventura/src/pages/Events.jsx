import Style from "./css/Events.module.css";
import { useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchEvents } from "../util/http";
import {motion,AnimatePresence} from "framer-motion"
import CardEvent from "../componentes/CardEvent";
import SearchBar from "../componentes/SearchBar";
import SeeAll from "../componentes/SeeAll";
import "react-lazy-load-image-component/src/effects/blur.css";
export default function Events() {
  const searElement = useRef();
  const [search, setSearch] = useState();
  const [seeAll, setSeeAll] = useState(false);
  const { data, error, isLoading, isError } = useQuery({
    queryKey: ["events", { search: search }],
    queryFn: ({ signal }) => fetchEvents({ signal, search }),
    enabled: search !== undefined,
  });

  function onSubmit(event) {
    event.preventDefault();
    setSeeAll(false);
    setSearch(searElement.current.value);
  }
  const allData = useQuery({
    queryKey: ["events"],
    queryFn: ({ signal }) => fetchEvents({ signal }),
  });
  let content = "";
  if (data && data.event) {
    content = data.event.map((el) => <CardEvent key={el.id} {...el} />);
    if (data.event.length === 0) {
      content = (
        <>
          {allData.data.map((el) => (
            <CardEvent key={el.id} {...el} />
          ))}
        </>
      );
    }
  }
  if (allData.data && seeAll) {
    content = allData.data.map((el) => <CardEvent key={el.id} {...el} />);
  }
  return (
    <main className={Style.mainClass}>
      <h1 className={Style.title}>Explore your events</h1>
      <SearchBar sendElement={searElement} onSubmit={onSubmit} />
      {isLoading && <p>Loading events...</p>}
      {isError && <p>Error loading events: {error.message}</p>}
      {!seeAll && (
        <SeeAll
          text="please enter a search term to find events"
          event={() => setSeeAll(true)}
        />
      )}
      {data?.event.length === 0 ? (
        <p>no event found, verify all events bellow.</p>
      ) : null}
      <div className={Style.content}>{content}</div>
    </main>
  );
}
