import Style from "./css/CardEvent.module.css"
export default function CardEvent({img,title,date,price,desc}){
    return <div className={Style.mainDiv}>
        <img src={img} alt={desc} />
        <h3>{title}</h3>
        <div>
        <p>${price}</p>
        <p>{date}</p>
        </div>
        <button>See more</button>
    </div>
}