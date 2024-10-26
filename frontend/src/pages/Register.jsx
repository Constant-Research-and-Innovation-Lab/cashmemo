import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { creatUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    email: "",
    password: "",
    nid: "",
    tradeLicense: "",
    role: "",
    name: "",
    storeLocation: "",
    phoneNumber: "",
    TIN: "",
  });

  const handleChange = (e) => {
    console.log(userData);
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    creatUser(userData?.email, userData?.password)
      .then(() => {
        // const NewUser = result?.user

        // updateUserProfile(userData?.name)
        // .then(()=>{
        //     console.log("User Profile Updated")
        toast.success("User Created Successfully");
        navigate("/");
        // })
        // .catch(error => {
        //     console.log(error.message)
        // })
      })
      .catch((error) => toast.error(error.message));
    // Send data to the backend
    // const response = await fetch('/api/users', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(userData)
    // });
    // const data = await response.json();
    // console.log(data);
  };

  return (
    <form className="p-4" onSubmit={handleSubmit}>
      <h2 className="text-2xl mb-4">Register</h2>
      <input
        name="email"
        placeholder="Email"
        onChange={handleChange}
        required
        className="border mb-2 p-2 w-full"
      />
      <input
        name="password"
        placeholder="Password"
        onChange={handleChange}
        required
        className="border mb-2 p-2 w-full"
      />
      <input
        name="nid"
        placeholder="NID"
        onChange={handleChange}
        required
        className="border mb-2 p-2 w-full"
      />
      <input
        name="tradeLicense"
        placeholder="Trade License"
        onChange={handleChange}
        className="border mb-2 p-2 w-full"
      />
      <select
        name="role"
        onChange={handleChange}
        required
        className="border mb-2 p-2 w-full"
      >
        <option value="">Select Role</option>
        <option value="supplier">Supplier</option>
        <option value="wholesaler">Wholesaler</option>
      </select>
      <input
        name="name"
        placeholder="Name"
        onChange={handleChange}
        required
        className="border mb-2 p-2 w-full"
      />
      <input
        name="storeLocation"
        placeholder="Store Location"
        onChange={handleChange}
        className="border mb-2 p-2 w-full"
      />
      <input
        name="phoneNumber"
        placeholder="Phone Number"
        onChange={handleChange}
        className="border mb-2 p-2 w-full"
      />
      <input
        name="TIN"
        placeholder="TIN"
        onChange={handleChange}
        className="border mb-2 p-2 w-full"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Register
      </button>
    </form>
  );
};

export default Register;
