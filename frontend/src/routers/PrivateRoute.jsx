import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <div className="flex justify-center items-center py-32 text-center">
        Loading...
      </div>
    );
  }

  if (user) {
    return children;
  }
  return <Navigate to="login" state={{ location }} replace></Navigate>;
};

export default PrivateRoute;
