import Style from "./css/CardEvent.module.css"
export default function CardEvent({image,title,date,price,desc}){
    const formattedDate = new Date(date).toLocaleDateString("en-US", {
        year: "2-digit",
        month: "short",
        day: "numeric",
      });
    return <div className={Style.mainDiv}>
         <img  src={`http://localhost:3000/${image}`}  alt={desc} />
         <div className={Style.info}>
         <h3>{title}</h3>
        <div className={Style.dataAndPrice}>
          <p className={Style.price}>${price}</p>
          <p>{formattedDate}</p>
        </div>
        </div>
        <button>See more</button>
    </div>
}