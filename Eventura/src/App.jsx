import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Home";
const roter = createBrowserRouter([
  {
    path:'/',
    element:<Home/>,
    children:[
      {
        path:index,
        element:<Home/>
      }
    ]
  }
])

function App() {
  return (
    <>
      <div className="App">
        <h1>Hello World</h1>
      </div>
    </>
  )
}

export default App
