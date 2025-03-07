import {createBrowserRouter, RouterProvider} from "react-router";
import Events from "./pages/Events";
import Home from "./pages/Home";
import Root from './pages/Root';
import About from "./pages/About";
import { QueryClientProvider } from "@tanstack/react-query";
import {query} from "./util/http"
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
      },
      {
        path:'events',
        element:<Events/>
      }
    ]
  }
])

function App() {
  return (
    <>
    <QueryClientProvider client={query}>
      <RouterProvider router={roter}/>
    </QueryClientProvider>
    </>
  )
}

export default App
