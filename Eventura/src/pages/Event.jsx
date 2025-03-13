import { useParams } from "react-router";
import { useQuery,useMutation } from "@tanstack/react-query";
import {fetchById,updateEvent,query } from "../util/http";
import { BiArrowBack } from "react-icons/bi";
import { NavLink } from "react-router";
import { useState } from "react";
import Style from "./css/Event.module.css"
import Modal from "./Modal/Modal";
import Form from "../componentes/Form";
import SpinnerLoader from "../componentes/SpinnerLoader"
export default function Event(){
   let {id} = useParams();
   let [openModalEdit,setOpenModalEdit] = useState(false);
   let {data,isPending,isError,error} = useQuery({
     queryKey:["events",id],
     queryFn:({signal})=>fetchById({id,signal})
   })
   let mutation = useMutation({
     mutationFn:updateEvent,
     onMutate: async(data)=>{
      const newEvent = data.event;
      await query.cancelQueries({queryKey:["events",id]});
      const previousEvent = query.getQueryData(["events",id]);
      query.setQueryData(['events',id],newEvent);
      return {previousEvent}
    },
    onError:(error,data,context)=>{
      query.setQueryData(['events',id],context.previousEvent);
     },
     onSettled:()=>{
      query.invalidateQueries(["events",id]);
     }
   })
 
   const formattedDate = new Date(data?.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  const currency =  new Intl.NumberFormat("en-US", {style:"currency",currency:"usd",maximumSignificantDigits:3}).format(data?.price);
    function handleChangeModal(){
      setOpenModalEdit(prevValue=>!prevValue)
    }
    function handleEditdata(formData){
      mutation.mutate({id:id,event:formData});
      setOpenModalEdit(false);
    }
    let modal;
    if(openModalEdit){
      modal = <Modal handleChangeModal={handleChangeModal} typeText="Edit">
              <Form handleSubmit={handleEditdata} data={data} typeText="Edit"/>
              </Modal>
    }
    return <> 
   <main className={Style.main}> 
        {modal}
        {mutation.isPending && <SpinnerLoader/>}
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
            <button className={Style.edit} onClick={handleChangeModal} >Edit</button>
            <button className={Style.delete}>Delete</button>
    </div>
    </>
}