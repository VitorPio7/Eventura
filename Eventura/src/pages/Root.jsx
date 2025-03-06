import {Outlet} from "react-router-dom"
import Header from "../componentes/Header"
import Footer from "../componentes/Footer"
export default function Root(){
    return <>
      <Header/>
        <Outlet/>
      <Footer/>
    </>
}