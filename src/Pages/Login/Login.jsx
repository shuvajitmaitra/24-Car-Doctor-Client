import { useContext } from "react";
import Image from "../../assets/images/login/login.svg";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
const Login = () => {
  const { signInUser } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.value.email;
    const password = e.target.value.password;
    console.log(email, password);
    signInUser(email, password)
      .then((result) => console.log(result.user))
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
          onSubmit={handleLogin}
          className="card-body w-3/4 mx-auto"
        >
          <h3 className="text-4xl font-bold text-center">Sign In</h3>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button
              className="btn bg-[#FF3811] text-white"
              type="submit"
            >
              Sign In
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
              New in Car Doctor?{" "}
              <Link
                to="/register"
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

export default Login;
