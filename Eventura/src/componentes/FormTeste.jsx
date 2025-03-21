import Style from "./css/FormTeste.module.css";
import { useQuery } from "@tanstack/react-query";
import { fetchAllImages } from "../util/http";

export default function FormTeste({data,handleSubmit}) {
  let query = useQuery({
    queryKey: ["images"],
    queryFn: fetchAllImages,
  });
 
  return (
    <div className={Style.myForm}>
      {" "}
      <h1>Add a new event.</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <br />
        <input type="text" maxLength="17" defaultValue={data?.title ?? ""} required name="title" />
        <br />
        <label htmlFor="location">Location</label>
        <br />
        <input type="text" maxLength="20" defaultValue={data?.location ?? ""} name="location" required />
        <br />
        <label htmlFor="time">Time</label>
        <br />
        <input type="time" name="time" defaultValue={data?.time ?? ""} required />
        <br />
        <label htmlFor="entries">Entries</label>
        <br />
        <input type="number" defaultValue={data?.title ?? ""}  name="entries" required />
        <br />
        <label htmlFor="image">Image</label>
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
        <label htmlFor="date" >Date</label>
        <br />
        <input type="date" defaultValue={data?.date ?? ""} name="date" required />
        <br />
        <label htmlFor="price">Price</label>
        <br />
        <input type="number" defaultValue={data?.price ?? ""} name="price" required />
        <br />
        <label htmlFor="description">Description</label>
        <br />
        <textarea name="description" defaultValue={data?.description ?? ""} maxLength="200" required></textarea>
        <br />
        <button>Send data</button>
      </form>
    </div>
  );
}
