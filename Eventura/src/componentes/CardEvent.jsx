import Style from "./css/CardEvent.module.css";
import { useNavigate } from "react-router";
import { LazyLoadImage } from "react-lazy-load-image-component";
import {motion} from "framer-motion";
export default function CardEvent({image,title,date,price,desc,id}){
    let navigate = useNavigate();
    const formattedDate = new Date(date).toLocaleDateString("en-US", {
        year: "2-digit",
        month: "short",
        day: "numeric",
      });
    
    return <motion.div 
    initial={{opacity:0,scale:0}} 
    animate={{opacity:1, scale:1}}
    transition={{
      duration:0.3,
      scale:{type:"spring",visualDuration:0.4, bounce:0.5}
      
    }} 
    className={Style.mainDiv}>
         <LazyLoadImage  src={`http://localhost:3000/${image}`} effect="blur"   wrapperClassName={Style.imageWrapper}  alt={desc} />
         <div className={Style.info}>
         <h3>{title}</h3>
        <div className={Style.dataAndPrice}>
          <p className={Style.price}>${price}</p>
          <p>{formattedDate}</p>
        </div>
        </div>
        <motion.button whileHover={{scale:1.05, transition:{type:"spring",bounce:0.7}}} onClick={()=>navigate(`${id}`)} >See more</motion.button>
    </motion.div>
}