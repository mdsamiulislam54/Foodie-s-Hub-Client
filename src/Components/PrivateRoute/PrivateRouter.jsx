import React, { use } from "react";
import { Navigate, useLocation } from "react-router";
import { UserContext } from "../../ContextApi/userContext";

const PrivateRouter = ({ children }) => {
  const { pathname } = useLocation();
  console.log(pathname);
  const { user, loading } = use(UserContext);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner text-warning"></span>
      </div>
    );
  }

  if (!user) {
    return <Navigate to={"/login"} state={{ from: pathname }}></Navigate>;
  }

  return children;
};

export default PrivateRouter;
