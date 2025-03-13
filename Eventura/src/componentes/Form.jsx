import Style from "../componentes/css/Form.module.css"
export default function Form({handleSubmit,typeText,data}) {
    function onSubmit(event){
        event.preventDefault();
        let formData = new FormData(event.target);
        console.log(formData.get("date"))
        const eventData = {
            title:formData.get("name"),
            date:formData.get("date"),
            time:formData.get("time"),
            location:formData.get("place"),
            price:formData.get("price").toString(),
            entries:formData.get("entries").toString(),
            description:formData.get("description"),
            image:formData.get("image")||''
        };
        handleSubmit(eventData);
    }
    return <form className={Style.formDiv} onSubmit={onSubmit}>
    <label htmlFor="name">Title</label>
            <input type="text" name="name" defaultValue={data?.title??''} required/>
           <label htmlFor="date" >Date</label>
            <input type="date" name="date" defaultValue={data?.date??''} required/>
            <label htmlFor="time">Time</label>
            <input type="time" name="time"  defaultValue={data?.time??''} required/>
            <label htmlFor="place" >Place</label>
            <input type="text" name="place" defaultValue={data?.location??''} required/>
            <label htmlFor="price">Price</label>
            <input type="number" name="price"  defaultValue={data?.price??''} required/>
            <label htmlFor="entries" >Entries</label>
            <input type="number" name="entries" defaultValue={data?.entries??''} required/>    
            <label htmlFor="image" >Image</label>
            <input type="text" name="image" defaultValue={data?.image??''} required/>    
            <label htmlFor="description">Description</label>
            <textarea name="description" required defaultValue={data?.description??''} ></textarea> 
            <button>{typeText}</button> 
        </form>
}