import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import {fetchById,query,updateEvent } from "../util/http";
import { BiArrowBack } from "react-icons/bi";
import { NavLink } from "react-router";
import { useState } from "react";
import Style from "./css/Event.module.css"
import Modal from "./Modal/Modal";
import Form from "../componentes/Form";
import SpinnerLoader from "../componentes/SpinnerLoader";
import Badge from "./Modal/Badge.jsx";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useMutation } from "@tanstack/react-query";

export default function Event(){

   let {id} = useParams();
   let [openModalEdit,setOpenModalEdit] = useState(false);
   let [messageError,setMessageError] = useState("");
   let [openBadgeSucess,setOpenBadgeSucess] = useState(false);
   let [openBadgeError,setBadgeError] = useState(false);
   let {data,isPending,isError,error} = useQuery({
     queryKey:["events",id],
     queryFn:({signal})=>fetchById({id,signal})
   })

   let mutation = useMutation({
      mutationFn:updateEvent,
      onMutate: async(data)=>{
           let dataEvent = data.event;
           await query.cancelQueries({queryKey:["events",id]});
           const previousEvent = query.getQueryData(["events",id]);
           query.setQueryData(['event',id],dataEvent)
           return {previousEvent};
      },
     onError:(error,data,context)=>{
      query.setQueryData(['events',id],context.previousEvent);
     },
     onSettled:()=>{
       query.invalidateQueries(['events',id]);
     }
   })

   const formattedDate = new Date(data?.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  const currency =  new Intl.NumberFormat("en-US", {style:"currency",currency:"usd",maximumSignificantDigits:3}).format(data?.price);
    function handleChangeModal(){
      setOpenModalEdit(prevValue=>!prevValue);
    }
    function handleEditdata(event){
      event.preventDefault();
       const fd = new FormData(event.target);
       const data = Object.fromEntries(fd.entries());
       mutation.mutate(
        { id: id, event: data },
        {onSuccess:()=>{
          setOpenModalEdit(prevValue=>!prevValue);
          setOpenBadgeSucess(true);
          setTimeout(()=>{
            setOpenBadgeSucess(false);
         },5000)
        },
        onError:(error)=>{
          setBadgeError(true);
          setTimeout(()=>{
            setBadgeError(false);
          })
        },
        }
       );
   
    }
    let modal;
    if(openModalEdit){
      modal = <Modal handleChangeModal={handleChangeModal} typeText="Edit">
             <Form handleSubmit={handleEditdata} data={data} typeText="Edit" />
             </Modal>
    }
    let placeholderSpiner = <div className={Style.imagePlaceholder}><SpinnerLoader/></div>;

    return <>
   <main className={Style.main}>
   {console.log("Badge state:", openBadgeSucess)}
        {openBadgeSucess&&<Badge type="success" text="Your data was saved!"/>}
        {openBadgeError && <Badge type="error" text="There was a problem!"/>}
        {modal}
        <NavLink to="/events" className={Style.return}><BiArrowBack/> Back to all events</NavLink>
      <div className={Style.mainDiv}>
        <LazyLoadImage src={`http://localhost:3000/${data?.image}`} className={Style.mainImage} alt="image" effect="blur" placeholder={placeholderSpiner}  wrapperClassName={Style.imageWrapper} />
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
            <button className={Style.edit} onClick={handleChangeModal} >Edit</button>
            <button className={Style.delete}>Delete</button>
    </div>
    </>
}
