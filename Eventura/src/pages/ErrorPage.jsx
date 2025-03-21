import Style from "./css/ErrorPage.module.css"
export default function ErrorPage(){
    return <div className={Style.errorPage}>
        <h1>404</h1>
        <p>This page doesnt exist</p>
    </div>
}