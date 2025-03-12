export default function Form({handleSubmit,typeText,data}) {
    return   <form onSubmit={handleSubmit}>
    <label htmlFor="name">name</label>
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
            <label htmlFor="description">Description</label>
            <textarea name="description" required defaultValue={data?.description??''} ></textarea> 
            <button>{typeText}</button> 
        </form>
}