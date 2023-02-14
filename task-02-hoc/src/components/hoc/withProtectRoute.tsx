import React, { useEffect, useState } from "react";
import { RouteProps, useNavigate } from "react-router-dom";

interface IAuthProps {
  isAuthenticated?: boolean;
}

const withProtectRoute = <T extends IAuthProps>(
  OriginalComponent: React.FC<T & RouteProps>
) => {
  return (props: T & RouteProps) => {
    const navigate = useNavigate();
    const auth = localStorage.getItem("isAuthenticated");
    const [isAuthenticated, setIsAuthenticated] = useState(
      () => auth === "true" || false
    );

    useEffect(() => {
      if (!isAuthenticated) {
        navigate("/login");
      }
    }, [isAuthenticated, setIsAuthenticated]);

    return isAuthenticated ? <OriginalComponent {...props} /> : null;
  };
};
export default withProtectRoute;
