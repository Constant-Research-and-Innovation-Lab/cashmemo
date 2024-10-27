import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import PrivateRoute from "./PrivateRoute";
import Secret from "../shared/Secret";
import DashBoard from "../DashBoard/DashBoard";
const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "",
        element: <h1>Home</h1>,
      },
      {
        path: "orders",
        element: <div> Orders </div>,
      },
      {
        path: "about",
        element: <div> About </div>,
      },
      {
        path: "secret",
        element: (
          <PrivateRoute>
            <Secret />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path:"dashboard",
    element: <DashBoard/>,
    children: [
      {
        path: "",
        element : <div>Dashboard</div>
      },
      {
        path: "profile",
        element : <div>Profile</div>
      }
    ]
  }
]);

export default router;
