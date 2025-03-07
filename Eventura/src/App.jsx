import {createBrowserRouter, RouterProvider} from "react-router";
import Home from "./pages/Home";
import Root from './pages/Root';
const roter = createBrowserRouter([
  {
    path:'/',
    element:<Root/>,
    children:[
      {
        index:true,
        element:<Home/>
      }
    ]
  }
])

function App() {
  return (
    <>
      <RouterProvider router={roter}/>
    </>
  )
}

export default App
