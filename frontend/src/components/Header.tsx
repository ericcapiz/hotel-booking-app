import { Link } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";
import SignOutButton from "./SignOutButton";

const Header = () => {
  const { isLoggedIn } = useAppContext();

  const pathname = window.location.pathname;
  const textAfterSlash = pathname.split("/").pop();

  return (
    <div className="bg-blue-800 py-6">
      <div className="container mx-auto flex justify-between">
        <span className="text-3xl text-white font-bold tracking-tight">
          <Link to="/">EZ Bookings</Link>
        </span>
        <span className="flex space-x-2">
          {isLoggedIn ? (
            <>
              <Link
                className="flex items-center text-blue-600 px-3 font-bold rounded-3xl hover:text-white hover:bg-blue-500 bg-white"
                to="/my-bookings"
              >
                My Bookings
              </Link>
              <Link
                className="flex items-center text-blue-600 px-3 font-bold rounded-3xl hover:text-white hover:bg-blue-500 bg-white"
                to="/my-hotels"
              >
                My Hotels
              </Link>
              <SignOutButton />
            </>
          ) : textAfterSlash === "sign-in" ? null : (
            <Link
              to="/sign-in"
              className="flex items-center text-blue-600 px-3 font-bold rounded-3xl hover:text-white hover:bg-blue-500 bg-white"
            >
              Sign in
            </Link>
          )}
        </span>
      </div>
    </div>
  );
};
export default Header;
