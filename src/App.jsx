import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Layout from "./Componants/Layout/Layout";
import Countries from "./Pages/Countries/Countries";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";

export default function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/",
          element: <Home />,
        },
        { path: ":countries", element: <Countries /> },
        {
          path: "*",
          element: <PageNotFound />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes}></RouterProvider>;
}
