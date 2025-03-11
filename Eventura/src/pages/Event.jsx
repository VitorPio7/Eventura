import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import {fetchById} from "../util/http";
import { BiArrowBack } from "react-icons/bi";
import { NavLink } from "react-router";
import Style from "./css/Event.module.css"
export default function Event(){
    let {id} = useParams();
   let {data,isPending,isError,error} = useQuery({
     queryKey:["events",id],
     queryFn:({signal})=>fetchById({id,signal})
   })
   const formattedDate = new Date(data?.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  const currency =  new Intl.NumberFormat("en-US", {style:"currency",currency:"usd",maximumSignificantDigits:3}).format(data?.price);
    return <> 
    
    <main className={Style.main}>    
        <NavLink to="/events" className={Style.return}><BiArrowBack/> Back to all events</NavLink>
        <div className={Style.mainDiv}>
        <img src={`http://localhost:3000/${data?.image}`} className={Style.mainImage} alt="image"  />
        <h1>{data?.title}</h1>
        <div className={Style.info}>
            <p className={Style.price}> {currency}</p>
            <p className={Style.date}>{formattedDate}</p>
            <p className={Style.time}>{data?.time}</p>
            <p className={Style.location}>{data?.location}</p>
        </div>
            <p className={Style.desc}>{data?.description}</p>
            <p className={Style.entries}>{data?.entries} entries available</p>
        </div>
    </main>
    <div className={Style.divButton}>
            <button className={Style.edit}>Edit</button>
            <button className={Style.delete}>Delete</button>
    </div>
    </>
}