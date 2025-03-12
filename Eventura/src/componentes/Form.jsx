export default function Form({handleSubmit}) {
    return   <form onSubmit={handleSubmit}>
    <label htmlFor="name">name</label>
            <input type="text" name="name" />
            <label htmlFor="">name</label>
            <input type="text" name="name"/>
            <label htmlFor="date">Date</label>
            <input type="date" name="date"/>
            <label htmlFor="time">Time</label>
            <input type="time" name="time"/>
            <label htmlFor="place">Place</label>
            <input type="text" name="place"/>
            <label htmlFor="price">Price</label>
            <input type="number" name="price"/>
            <label htmlFor="entries">Entries</label>
            <input type="number" name="entries"/>    
            <label htmlFor="description">Description</label>
            <textarea name="description" ></textarea> 
            <button>Edit</button> 
        </form>
}