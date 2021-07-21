import { useHistory } from "react-router-dom";
import { useEffect } from "react";

interface AuthenticatedRouteProps {
  children: JSX.Element;
}

export default function AuthenticatedRoute({
  children,
}: AuthenticatedRouteProps) {
  const router = useHistory();
  const isAuthenticated = localStorage.getItem("userToken")?.length;

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/signin");
    }
  }, [isAuthenticated, router]);

  return children;
}
