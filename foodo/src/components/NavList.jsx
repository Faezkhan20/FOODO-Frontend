
import toast from "react-hot-toast";
import { Link} from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUser } from "../redux/slices/AuthSlice";

const NavList = ({ toggleNav, setToggleNav, auth }) => {
  const dispatch=useDispatch()

  const handleLogout = async () => {
    try {
      // const res = await api.get("/logout");
      // const data = await res.data;
      localStorage.removeItem('token'); 
      dispatch(logoutUser())
      window.location.href = "/";
      toast.success("Logout successfull");
      // navigate("/")
      // dispatch(loginUser())
      // Remove token from local storage
    } catch (error) {
      // Handle logout errors
      console.error("Logout failed:", error);
      toast.error("Logout failed. Please try again.");
    }
  };

  return (
    <div
      className={` ${
        !toggleNav && "translate-x-[200px]"
      } fixed top-12 right-5 lg:right-8 p-3 w-fit bg-white bg-opacity-10 backdrop-blur-sm flex flex-col justify-center items-start rounded-lg shadow-md border border-white font-bold text-gray-600 transtion-all duration-500 ease-in-out`}
    >
      {auth ? (
        <li onClick={handleLogout} className="hover:text-black select-none list-none">Logout</li>
      ) : (
        <div className="flex flex-col">
          <Link to="/login" className="hover:text-black select-none">
            Login{" "}
          </Link>
          <Link to="/signup" className="hover:text-black select-none">
            Signup{" "}
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavList;