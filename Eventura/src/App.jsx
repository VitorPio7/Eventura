import {createBrowserRouter, RouterProvider} from "react-router";
import Events from "./pages/Events";
import AddPage from "./pages/AddPage"
import Home from "./pages/Home";
import Root from './pages/Root';
import About from "./pages/About";
import EditEvent from "./pages/EditEvent"
import { QueryClientProvider } from "@tanstack/react-query";
import {queryClient,updateEvent} from "./util/http";
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
        element:<Event/>,
      },
      {
        path:'events/:id/edit',
        element:<EditEvent/>,
      },
      {
        path:'add',
        element:<AddPage/>
      }
    ]
  }
])

function App() {
  return (
    <>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={roter}/>
    </QueryClientProvider>
    </>
  )
}

export default App
