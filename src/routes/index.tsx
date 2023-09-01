import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout";
import Login from "../pages/login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Login />,
      },
    ],
  },
]);

export default router;
