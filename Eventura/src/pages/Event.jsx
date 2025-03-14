import { useParams } from "react-router";
import { useQuery,useMutation, useQueryClient } from "@tanstack/react-query";
import {fetchById,updateEvent } from "../util/http";
import { BiArrowBack } from "react-icons/bi";
import { NavLink } from "react-router";
import { useState } from "react";
import Style from "./css/Event.module.css"
import Modal from "./Modal/Modal";
import Form from "../componentes/Form";
import SpinnerLoader from "../componentes/SpinnerLoader";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';


export default function Event(){
  const queryClient = useQueryClient();
   let {id} = useParams();
   let [openModalEdit,setOpenModalEdit] = useState(false);
  

   console.log(openModalEdit)
   let {data,isPending,isError,error} = useQuery({
     queryKey:["events",id],
     queryFn:({signal})=>fetchById({id,signal})
   })

   let mutation = useMutation({
     mutationFn:updateEvent,
     onMutate: async(data)=>{
      await queryClient.cancelQueries({queryKey:["events",id]});
      const previousEvent = queryClient.getQueryData(["events",id]);
      queryClient.setQueryData(["events",id],{
        event:{
        ...previousEvent?.event,
        ...data.event
      }});
      return {previousEvent};
      
    },
    onError:(error,data,context)=>{
      queryClient.setQueryData(['events',id],context.previousEvent);
     },
     onSettled:()=>{
      queryClient.invalidateQueries({queryKey:["events",id],refetchType:false});
     },
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
    function handleEditdata(formData){
      const updatedEvent = {
        ...formData,
        id:id
      }
      mutation.mutate({id:id,event:updatedEvent});
      setOpenModalEdit(false);
    }
    let modal;
    if(openModalEdit){
      modal = <Modal handleChangeModal={handleChangeModal} isPending={mutation.isPending} isSucess={mutation.isSuccess} typeText="Edit">
             <Form handleSubmit={handleEditdata} data={data} typeText="Edit" isPending={mutation.isPending}/> 
             </Modal>
    }
    let placeholderSpiner = <div className={Style.imagePlaceholder}><SpinnerLoader/></div>;
    return <> 
   <main className={Style.main}> 
        {modal}
        <NavLink to="/events" className={Style.return}><BiArrowBack/> Back to all events</NavLink>
        {isPending||mutation.isPending ? <SpinnerLoader/>:<div className={Style.mainDiv}>
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
        </div>}
      
    </main>
    <div className={Style.divButton}>
            <button className={Style.edit} onClick={handleChangeModal} >Edit</button>
            <button className={Style.delete}>Delete</button>
    </div>
    </>
}