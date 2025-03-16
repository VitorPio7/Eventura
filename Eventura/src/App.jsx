import {createBrowserRouter, RouterProvider} from "react-router";
import Events from "./pages/Events";
import {action} from "./pages/Event"
import Home from "./pages/Home";
import Root from './pages/Root';
import About from "./pages/About";
import { QueryClientProvider } from "@tanstack/react-query";
import {query} from "./util/http";
import Event from "./pages/Event";
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

      },
      {
        path:'events/:id',
        action:action,
        element:<Event/>
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
