import style from "./css/Footer.module.css"
export default function Footer(){
    let data = new Date()
    return <footer className={style.myFooter}>
        <p>&copy; {data.getFullYear()} Eventura</p>
    </footer>
}