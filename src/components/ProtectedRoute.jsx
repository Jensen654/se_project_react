import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthorizationContext } from "../contexts/AuthorizationContext";

const ProtectedRoute = ({ children, anonymous = false }) => {
  const location = useLocation();
  const from = location.state?.from || "/";
  const { isLoggedIn } = useContext(AuthorizationContext);

  if (isLoggedIn && anonymous) {
    return <Navigate to={from} />;
  }

  if (!isLoggedIn && !anonymous) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
