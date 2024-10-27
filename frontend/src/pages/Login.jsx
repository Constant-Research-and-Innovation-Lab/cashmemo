import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { toast } from "sonner";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then(() => {
        // const NewUser = result?.user
        toast.success("User Login Successful");
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error.message));
  };
  return (
    <div className="container mx-auto text-center py-10">
      <h1 className="text-3xl font-bold mb-4">Login</h1>
      <form className="flex flex-col items-center" onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="border p-2 mb-4 rounded w-80"
          required
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="border p-2 mb-4 rounded w-80"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
