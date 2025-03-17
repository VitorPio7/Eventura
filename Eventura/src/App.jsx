import {createBrowserRouter, RouterProvider} from "react-router";
import Events from "./pages/Events";

import Home from "./pages/Home";
import Root from './pages/Root';
import About from "./pages/About";
import { QueryClientProvider } from "@tanstack/react-query";
import {query,updateEvent} from "./util/http";
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
        action: async function({request,params}){
          const formData = await request.formData();
          const updatedEvent = Object.fromEntries(formData);
          console.log(params)
          await updateEvent({id:params.id,event:updatedEvent});
          await query.invalidateQueries(['events',params.id])}
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
