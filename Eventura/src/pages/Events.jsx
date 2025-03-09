import Style from "./css/Events.module.css";
import { useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchEvents } from "../util/http";
import CardEvent from "../componentes/CardEvent";
import SearchBar from "../componentes/SearchBar";
export default function Events() {
    const searElement = useRef();
    const [search, setSearch] = useState();
    const { data, error, isLoading, isError } = useQuery({
        queryKey: ["events", { search: search }],
        queryFn: ({ signal }) => fetchEvents({ signal, search }),
        enabled: search !== undefined
    }); 
    console.log("Search term:", search);
    console.log("Data received:", data?.event);

    
    function onSubmit(event) {
        event.preventDefault();
        setSearch(searElement.current.value);
    }
    const allData = useQuery({
        queryKey: ["events"],
        queryFn: ({signal})=>fetchEvents({signal}),
    }
    )
    let content = <p>please enter a search term and to find events</p>
    if(data && data.event){
        content = data.event.map((el)=><CardEvent key={el.id} {...el} /> )
        if(data.event.length === 0){
            content = <>
            <p>no events found, verify all events bellow.</p> 
            {allData.data.map((el)=><CardEvent key={el.id} {...el} />)}</> 
              
        }  
    }
    return <main>
        <h1 className={Style.title}>Explore your events</h1>
         <SearchBar sendElement={searElement} onSubmit={onSubmit} />
        {isLoading && <p>Loading events...</p>}
        {isError && <p>Error loading events: {error.message}</p>}
         {content}      
     </main>
}