import Style from "./css/AddPage.module.css"
export default function AddPage(){
    return <div className={Style.myForm}> <h1>Add a new event.</h1>
      <form action="">
         <label htmlFor="title">Title</label>
         <br />
         <input type="text" name="title"/>
         <br />
         <label htmlFor="location">Location</label>
         <br />
         <input type="text" />
         <br />
         <label htmlFor="time">Time</label>
         <br />
         <input type="time" name="time"/>
         <br />
         <label htmlFor="entries">Entries</label>
         <br />
         <input type="number" name="entries" />
         <br />
         <label htmlFor="title">Image</label>
         <br />
         <input className={Style.selectImage} type="file" accept="image/png,image/jpeg" name="image"/>
         <br />
         <label htmlFor="date">Date</label>
         <br />
         <input type="date" />
         <br />
         <label htmlFor="price">Price</label>
         <br />
         <input type="number" />
         <br />
         <label htmlFor="description">Description</label>
         <br />
         <textarea name="description"></textarea>
         <br />
         <button>Send data</button>
         
      </form>
    </div>
}