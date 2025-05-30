import { createBrowserRouter, RouterProvider } from "react-router";
import Events from "./pages/Events";
import AddPage from "./pages/AddPage";
import Home from "./pages/Home";
import Root from "./pages/Root";
import About from "./pages/About";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient,  } from "./util/http";
import Event from "./pages/Event";
import ErrorPage from "./pages/ErrorPage";
const roter = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
        errorElement: <ErrorPage />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "events",
        element: <Events />,
      },
      {
        path: "events/:id",
        element: <Event />,
      },
      {
        path: "add",
        element: <AddPage />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      }
    ],
  },
]);

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={roter} />
      </QueryClientProvider>
    </>
  );
}

export default App;
