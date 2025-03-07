import Style from "./css/Events.module.css";
import { useRef,useState } from "react";
import {useQuery} from "@tanstack/react-query";
import {fetchEvents} from "../util/http";
import SearchBar from "../componentes/SearchBar";
export default function Events(){
    const searElement = useRef();
    const [actualQuery,setActualQuery] = useState()
    const {data,error,isLoading,isError} = useQuery({
        queryKey:["events",{search:actualQuery }],
        queryFn:()=>fetchEvents({signal,search:actualQuery}),
        enabled:actualQuery!==undefined
    })
    console.log(data)
    function onSubmit(event){
        event.preventDefault();
        setActualQuery(searElement.current.value)
    }
    return <main>
        <h1 className={Style.title}>Explore your events</h1>
        <SearchBar sendElement={searElement} onSubmit={onSubmit}/>  
    </main>
}