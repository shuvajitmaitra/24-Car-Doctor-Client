import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import Image from "../../assets/images/login/login.svg";

import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import auth from "../../firebase/firebase.config";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleSingUp = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, email, password);
    createUser(email, password)
      .then((result) =>{

        console.log(result.user)
        updateProfile(auth.currentUser, {
          displayName: name,
        });
      } )
        
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="flex gap-6 py-10 ">
      <div className="flex-1 flex items-center justify-center">
        <img
          src={Image}
          className="w-1/2 mx-auto"
        />
      </div>
      <div className="flex-1 border rounded-lg">
        <form
          onSubmit={handleSingUp}
          className="card-body w-3/4 mx-auto"
        >
          <h3 className="text-4xl font-bold text-center">Login</h3>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="name"
              placeholder="name"
              name="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="text"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a
                href="#"
                className="label-text-alt link link-hover"
              >
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button
              className="btn bg-[#FF3811] text-white"
              type="submit"
            >
              Login
            </button>
          </div>
          <div className="space-y-5 text-center">
            <p>Or Sign in with</p>
            <div className="flex gap-6 text-xl font-bold justify-center">
              <FaFacebookF className="text-[#3B5998] bg-white" />
              <FaLinkedinIn className="text-[#0A66C2] " />
              <FcGoogle />
            </div>
            <p>
              Have an account?{" "}
              <Link
                to="/login"
                className="text-[#FF3811] font-bold"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
