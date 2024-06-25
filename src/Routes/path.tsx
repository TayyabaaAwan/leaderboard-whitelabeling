import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import NotFound from "../components/NotFound/NotFound";
import Cards from "../components/Cards";
import Form from '../components/admin/form';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Cards />,
      },
      {
        path: "/form",
        element: <Form />,
      },

      { path: "*", element: <NotFound /> },
    ],
  },
]);
