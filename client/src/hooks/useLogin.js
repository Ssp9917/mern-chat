import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";
import axios from "../config/axiosInstance";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();
  const navigate = useNavigate()

  const login = async (username, password) => {
    const success = handleInputErrors(username, password);
	console.log(username,password)
    if (!success) return;
    setLoading(true);
    try {
      const res = await axios.post("/api/auth/login", { username, password });
	  console.log(res)
      const data = res.data;

      localStorage.setItem("chat-user", JSON.stringify(data));
      setAuthUser(data);
      Swal.fire({
        title: "Success!",
        text: "Login successful!",
        icon: "success",
      });

      navigate("/");
    } catch (error) {
      // Handle errors gracefully
      Swal.fire({
        title: "Error!",
        text: error.message,
        icon: "error",
        confirmButtonText: "Try Again",
      });
    } finally {
      setLoading(false);
    }
  };

  return { loading, login };
};
export default useLogin;

function handleInputErrors(username, password) {
	console.log(username,password)
  if (!username || !password) {
    Swal.fire({
      title: "Error!",
      text: "Please fill all fields.",
      icon: "error",
      confirmButtonText: "Try Again",
    });
    return false;
  }

  return true;
}
