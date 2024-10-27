import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const handleLogout = () => {
    logout()
      .then(() => {})
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <nav className="bg-custom-navy py-4 border-b-[0.5px] border-blue-900 p-4">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-white text-2xl">Cashmemo</h1>
        <div>
          <Link to="/" className="text-white px-4">
            Home
          </Link>
          {user ? (
            <>
              <button onClick={handleLogout} className="text-white px-4">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-white px-4">
                Login
              </Link>
            </>
          )}
          <Link to="/register" className="text-white px-4">
            Register
          </Link>
          <Link to="/demo" className="text-white px-4">
            Demo
          </Link>
          <Link to="/pricing" className="text-white px-4">
            Pricing
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
