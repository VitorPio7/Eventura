import {createBrowserRouter, RouterProvider} from "react-router";
import Home from "./pages/Home";
import Root from './pages/Root';
import About from "./pages/About";
const roter = createBrowserRouter([
  {
    path:'/',
    element:<Root/>,
    children:[
      {
        index:true,
        element:<Home/>
      },
      {
        path:'about',
        element:<About/>
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
