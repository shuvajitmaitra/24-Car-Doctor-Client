import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router";
import { PropTypes } from "prop-types";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <progress className="progress w-56"></progress>
      </div>
    );
  }
  if (user?.email) {
    return children;
  }
  return (
    <Navigate
      to={"/login"}
      replace
    ></Navigate>
  );
};
PrivateRoute.propTypes = {
  children: PropTypes.node,
};
export default PrivateRoute;
