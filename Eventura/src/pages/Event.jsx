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
import BadgeSuccess from "./Modal/BadgeSuccess.jsx";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useSubmit } from "react-router";

export default function Event(){
   let submit = useSubmit();
   let {id} = useParams();
   let [openModalEdit,setOpenModalEdit] = useState(false);
   let [openBadgeSucess,setOpenBadgeSucess] = useState(false);
   let {data,isPending,isError,error} = useQuery({
     queryKey:["events",id],
     queryFn:({signal})=>fetchById({id,signal})
   })

  //  let mutation = useMutation({
  //    mutationFn:updateEvent,
  //    onSettled:()=>{
  //     queryClient.invalidateQueries({queryKey:["events",id],refetchActive:false});
  //    },
    
  //  })
  
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
      // const updatedEvent = {
      //   ...formData,
      //   id:id
      // };
      // mutation.mutate(
      //   { id: id, event: updatedEvent },
      //   {onSettled:()=>{
      //     setOpenModalEdit(prevValue=>!prevValue);
      //     setOpenBadgeSucess(true);
      //     setTimeout(()=>{
      //       setOpenBadgeSucess(false);
      //      },5000)
      //   },
      //  },
      // ); 
      submit(formData,{method:'PUT'});
      // setOpenModalEdit(prevValue=>!prevValue);
      // setOpenBadgeSucess(true);
      // setTimeout(()=>{
      //   setOpenBadgeSucess(false);
      //  },5000)
    }
    let modal;
    if(openModalEdit){
      modal = <Modal handleChangeModal={handleChangeModal} typeText="Edit">
             <Form onSubmit={handleEditdata} data={data} typeText="Edit" /> 
             </Modal>
    }
    let placeholderSpiner = <div className={Style.imagePlaceholder}><SpinnerLoader/></div>;
    
    return <> 
   <main className={Style.main}> 
   {console.log("Badge state:", openBadgeSucess)}
        {openBadgeSucess&&<BadgeSuccess/>}
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
export async function action({request,params}){
  const formData = await request.formData();
  const updatedEvent = Object.fromEntries(formData);
  await updateEvent({id:params.id,event:updatedEvent});
  await query.invalidateQueries(['events']);
}