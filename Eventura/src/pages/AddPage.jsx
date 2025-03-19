import Style from "./css/AddPage.module.css"
export default function AddPage(){
    function handleSubmit(e){
        e.preventDefault();
        let fd = new FormData(e.target);
        const data = Object.fromEntries(fd.entries());
        console.log(data);
    }
    return <div className={Style.myForm}> <h1>Add a new event.</h1>
      <form onSubmit={handleSubmit}>
         <label htmlFor="title" >Title</label>
         <br />
         <input type="text" maxLength="17" required name="title"/>
         <br />
         <label htmlFor="location">Location</label>
         <br />
         <input type="text" maxLength="20" name="location" required/>
         <br />
         <label htmlFor="time">Time</label>
         <br />
         <input type="time" name="time" required/>
         <br />
         <label htmlFor="entries">Entries</label>
         <br />
         <input type="number" name="entries" required/>
         <br />
         <label htmlFor="title">Image</label>
         <br />
         <input className={Style.selectImage} type="file" required accept="image/png,image/jpeg" name="image"/>
         <br />
         <label htmlFor="date">Date</label>
         <br />
         <input type="date" name="date" required />
         <br />
         <label htmlFor="price">Price</label>
         <br />
         <input type="number" name="price" required/>
         <br />
         <label htmlFor="description">Description</label>
         <br />
         <textarea name="description"  maxLength="200" required></textarea>
         <br />
         <button>Send data</button>
         
      </form>
    </div>
}