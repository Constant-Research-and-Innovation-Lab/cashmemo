import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const { updateUserProfile, creatUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [image, Setimage] = useState("");
  const [uploadImg, setUploadedImg] = useState("");
  
  // Initialize userData state
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    image: "", 
    nid: "",
    tradeLicense: "",
    role: "",
    name: "",
    storeLocation: "",
    phoneNumber: "",
    TIN: "",
  });

  
  useEffect(() => {
    if (uploadImg) {
      setUserData((prevData) => ({ ...prevData, image: uploadImg }));
    }
  }, [uploadImg]);

  const submitImage = (e) => {
    const selectedImg = e.target.files[0];
    Setimage(selectedImg);

    const data = new FormData();
    data.append("file", selectedImg);
    data.append("upload_preset", "cashmemo");
    data.append("cloud_name", "dadgcqkon");

    axios
      .post("https://api.cloudinary.com/v1_1/dadgcqkon/image/upload", data)
      .then((res) => setUploadedImg(res?.data?.url))
      .catch((error) => console.log(error.message));
  };

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    creatUser(userData.email, userData.password)
      .then(() => {
        updateUserProfile(userData.name, userData.image)
          .then(() => {
            console.log("User Profile Updated");
          })
          .catch((error) => {
            console.log("User updating related error", error.message);
          });
        toast.success("User Created Successfully");
        navigate("/");
      })
      .catch((error) => toast.error(error.message));
  };
  console.log("finalData",userData)
  return (
    <div className="max-w-screen-md mx-auto">
      <form className="p-4" onSubmit={handleSubmit}>
        <h2 className="text-2xl mb-4 text-center">Register</h2>
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
          name="image"
          placeholder="Upload Image"
          onChange={submitImage}
          required
          type="file"
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
    </div>
  );
};

export default Register;
