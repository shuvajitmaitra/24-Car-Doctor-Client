import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to sign out your account",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sign Out",
    }).then((result) => {
      if (result.isConfirmed) {
        logOut();
        Swal.success("Sign Out!", "You are successfully sign out", "success");
      }
    });
  };
  const navLink = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/booking">Booked</Link>
      </li>
    </>
  );
  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <label
            tabIndex={0}
            className="btn btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLink}
          </ul>
        </div>
        <Link className="btn btn-ghost normal-case text-xl">
          <img
            src={logo}
            className="w-16"
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLink}</ul>
      </div>
      <div className="navbar-end">
      {user?.email ? (
        <span onClick={handleSignOut}>
          {
            user ? <button className="btn btn-outline btn-error btn-sm rounded">Sign Out</button> : <Link to="/login"><button className="btn btn-outline btn-error btn-sm rounded">Sign Out</button></Link>
          }
        </span>
      ) : (
        <span>
          <Link to="/login"><button className="btn btn-outline btn-success btn-sm rounded">Sign In</button></Link>
        </span>
      )}
      </div>
    </div>
  );
};

export default Navbar;
