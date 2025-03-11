import Style from "./css/SeeAll.module.css"
export default function SeeAll({text, event}){
    return<div className={Style.info}>
    <p>{text}
        <button className={Style.myButton} onClick={event}>See all</button></p></div>
}