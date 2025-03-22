import { useParams } from "react-router";
import { useQuery, useMutation } from "@tanstack/react-query";
import {
  fetchById,
  fetchAllImages,
  updateEvent,
  queryClient,
  deleteEvent
} from "../util/http";
import Popup from "./Modal/Popup.jsx"
import { BiArrowBack} from "react-icons/bi";
import { NavLink } from "react-router";
import { useState } from "react";
import Style from "./css/Event.module.css";
import Modal from "./Modal/Modal.jsx";
import Form from "../componentes/Form";
import { FaCheck, } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import { ToastContainer, toast } from 'react-toastify';
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useNavigate } from "react-router";

export default function Event() {
  let { id } = useParams();
  let navigate = useNavigate();
  let [openPopup, setOpenPopup] = useState(false);
  let [openModalEdit, setOpenModalEdit] = useState(false);
  let { data } = useQuery({
    queryKey: ["events", id],
    queryFn: ({ signal }) => fetchById({ id, signal }),
  });
  
  let query = useQuery({
    queryKey: ["images"],
    queryFn: fetchAllImages,
  });
  let mutation = useMutation({
    mutationFn: updateEvent,
    onMutate: async (data) => {
      let dataEvent = data.event;
      await queryClient.cancelQueries({ queryKey: ["events", id] });
      const previousEvent = queryClient.getQueryData(["events", id]);
      queryClient.setQueryData(["events", id], dataEvent);
      return { previousEvent };
    },
    onError: (error, data, context) => {
      console.log(error);
      queryClient.setQueryData(["events", id], context.previousEvent);
    },
    onSettled: () => {
      queryClient.invalidateQueries(["events", id]);
    },
  });
  let deleteMutation = useMutation({
    mutationFn:deleteEvent,
  })
  const formattedDate = new Date(data?.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  const currency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "usd",
    maximumSignificantDigits: 3,
  }).format(data?.price);
  function handleChangeModal() {
    setOpenModalEdit((prevValue) => !prevValue);
  }
  function handlePopup(){
    setOpenPopup(prevValue=>!prevValue)
  }
  function handleDeleteData(){
    deleteMutation.mutate(id,
      {
        onSuccess:()=>{
          toast.success("Event deleted!",{
            position:"top-center",
            autoClose:2000,
            closeButton:false,
            icon:<AiFillCloseCircle style={{"color":"green","width":"50px","height":"50px" }}/>
          });
         setTimeout(()=>{
          navigate("/events")
         },3000) 
        },
        onError:(error)=>{
          toast.error(error.message,{
            position:"top-center",
            autoClose:2000,
            closeButton:false,
            icon:<FaCheck style={{"color":"#5D8736" ,"width":"50px","height":"50px"}} />
          });
        }
      
      }

    )
  }
  function handleEditdata(event) {
    event.preventDefault();
    const fd = new FormData(event.target);
    const data = Object.fromEntries(fd.entries());
    console.log(data);
    mutation.mutate(
      { id, event: data },
      {
        onSuccess: () => {
          setOpenModalEdit((prevValue) => !prevValue);
          toast.success("Event updated!",{
            position:"top-center",
            autoClose:3000,
            closeButton:false,
            icon:<AiFillCloseCircle style={{"color":"green","width":"50px","height":"50px" }}/>
          });
        
        },
        onError: (error) => {
          setOpenModalEdit((prevValue) => !prevValue);
          toast.error(error.message,{
            closeButton:false,
            autoClose:3000,
            position:"top-center",
            icon:<FaCheck style={{"color":"#5D8736"}}/>
            
          })
        },
      }
    );
  }
  let modal;
  if (openModalEdit) {
    modal = (
      <Modal handleChangeModal={handleChangeModal} typeText="Edit">
        <Form
          handleSubmit={handleEditdata}
          data={data}
          imageData={query.data}
          typeText="Edit"
        />
      </Modal>
    );
  }

  return (
    <div className={Style.body}>
      <main className={Style.main}>
        {openPopup&&<Popup pending={deleteMutation.isPending} handleChangeModal={handlePopup} handleAction={handleDeleteData} actionName="delete">Would you to delete?</Popup>}
        {modal}
        {<ToastContainer/>}
        <NavLink to="/events" className={Style.return}>
          <BiArrowBack /> Back to all events
        </NavLink>
        <div className={Style.mainDiv}>
          <LazyLoadImage
            src={`http://localhost:3000/${data?.image}`}
            className={Style.mainImage}
            alt="image"
            effect="blur"
            wrapperClassName={Style.imageWrapper}
          />
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
        <button className={Style.edit} onClick={handleChangeModal}>
          Edit
        </button>
        <button className={Style.delete} onClick={handlePopup}>Delete</button>
      </div>
    </div>
  );
}
