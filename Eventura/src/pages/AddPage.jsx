import Style from "./css/AddPage.module.css";
import { useMutation, useQuery } from "@tanstack/react-query";
import { createNewEvent, fetchAllImages } from "../util/http";
import { ToastContainer, toast } from 'react-toastify';
import { FaCheck, } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import 'react-toastify/dist/ReactToastify.css';
export default function AddPage() {
  
  let mutate = useMutation({
    mutationFn: createNewEvent,
  });
  let query = useQuery({
    queryKey: ["images"],
    queryFn: fetchAllImages,
  });
  console.log(query.data);
  function handleSubmit(e) {
    e.preventDefault();
    let fd = new FormData(e.target);
    const eventData = Object.fromEntries(fd.entries());
    mutate.mutate(
      { event: eventData },
      {
        onSuccess: () => {
          toast.success("Event created!",{
            position:"top-center",
            autoClose:3000,
            closeButton:false,
            icon:<AiFillCloseCircle style={{"color":"green","width":"50px","height":"50px" }}/>
          }
          )
        },
        onError: (error) => {
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
  return (
    <div className={Style.myForm}>
      {" "}
      <ToastContainer/>
      <h1>Add a new event.</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <br />
        <input type="text" maxLength="17" required name="title" />
        <br />
        <label htmlFor="location">Location</label>
        <br />
        <input type="text" maxLength="20" name="location" required />
        <br />
        <label htmlFor="time">Time</label>
        <br />
        <input type="time" name="time" required />
        <br />
        <label htmlFor="entries">Entries</label>
        <br />
        <input type="number" name="entries" required />
        <br />
        <label htmlFor="image">Image</label>
        <br />
        <select name="image">
          {query?.data?.map((el, index) => {
            return (
              <option
                key={index}
                style={{
                  backgroundImage: `url(${"http://localhost:3000/" + el.path})`,
                }}
                value={el.path}
              >
                {el.caption}
              </option>
            );
          })}
        </select>
        <br />
        <label htmlFor="date">Date</label>
        <br />
        <input type="date" name="date" required />
        <br />
        <label htmlFor="price">Price</label>
        <br />
        <input type="number" name="price" required />
        <br />
        <label htmlFor="description">Description</label>
        <br />
        <textarea name="description" maxLength="200" required></textarea>
        <br />
        <button>Send data</button>
      </form>
    </div>
  );
}
