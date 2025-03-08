import Style from "./css/Events.module.css";
import { useRef,useState } from "react";
import {useQuery} from "@tanstack/react-query";
import {fetchEvents} from "../util/http";
import CardEvent from "../componentes/CardEvent";
import SearchBar from "../componentes/SearchBar";
export default function Events(){
    const searElement = useRef();
    const [search,setSearch] = useState()
    const {data,error,isLoading,isError} = useQuery({
        queryKey:["events",{search:search }],
        queryFn:({signal,search})=>fetchEvents({signal,search:search}),
        enabled:search!==undefined
    })
    console.log(data)
    function onSubmit(event){
        event.preventDefault();
        setSearch(searElement.current.value)
    }
    return <main>
        <h1 className={Style.title}>Explore your events</h1>
        <SearchBar sendElement={searElement} onSubmit={onSubmit}/> 
        {data?.map((event)=>{
            return <CardEvent key={event.id} {...event}/>
        })} 
    </main>
}