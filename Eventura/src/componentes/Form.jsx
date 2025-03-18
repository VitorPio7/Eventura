import Style from "../componentes/css/Form.module.css";
export default function Form({handleSubmit,data}) {
    
    return <form className={Style.formDiv} onSubmit={handleSubmit}>
    <label htmlFor="title">Title</label>
            <input type="text" maxLength="17" name="title" defaultValue={data?.title??''} required/>
           <label htmlFor="date" >Date</label>
            <input type="date" name="date" defaultValue={data?.date??''} required/>
            <label htmlFor="time">Time</label>
            <input type="time" name="time"  defaultValue={data?.time??''} required/>
            <label htmlFor="location" >Place</label>
            <input type="text" name="location" maxLength="20" defaultValue={data?.location??''} required/>
            <label htmlFor="price">Price</label>
            <input type="number" name="price"  defaultValue={data?.price??''} required/>
            <label htmlFor="entries" >Entries</label>
            <input type="number" name="entries" defaultValue={data?.entries??''} required/>    
            <label htmlFor="image" >Image</label>
            <input type="text" name="image" defaultValue={data?.image??''} required/>    
            <label htmlFor="description">Description</label>
            <textarea name="description" maxLength="200" required defaultValue={data?.description??''} ></textarea> 
            <button>Send</button> 
        </form>
}