import Style from "./css/CardEvent.module.css"
export default function CardEvent({image,title,date,price,desc}){
    return <div className={Style.mainDiv}>
        <img width="100px" height="100px" src={`http://localhost:3000/${image}`}  alt={desc} />
        <h3>{title}</h3>
        <div>
        <p>${price}</p>
        <p>{date}</p>
        </div>
        <button>See more</button>
    </div>
}