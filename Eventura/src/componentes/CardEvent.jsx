import Style from "./css/CardEvent.module.css";
import { useNavigate } from "react-router";
import { LazyLoadImage } from "react-lazy-load-image-component";
export default function CardEvent({image,title,date,price,desc,id}){
    let navigate = useNavigate();
    const formattedDate = new Date(date).toLocaleDateString("en-US", {
        year: "2-digit",
        month: "short",
        day: "numeric",
      });
    
    return <div className={Style.mainDiv}>
         <LazyLoadImage  src={`http://localhost:3000/${image}`} effect="blur"   wrapperClassName={Style.imageWrapper}  alt={desc} />
         <div className={Style.info}>
         <h3>{title}</h3>
        <div className={Style.dataAndPrice}>
          <p className={Style.price}>${price}</p>
          <p>{formattedDate}</p>
        </div>
        </div>
        <button onClick={()=>navigate(`${id}`)} >See more</button>
    </div>
}