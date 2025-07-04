
import { Navigate } from "react-router-dom";
import { getFromStorage } from "../utils/localStorage";

const Index = () => {
  const username = getFromStorage("username");
  
  if (username) {
    return <Navigate to="/dashboard" replace />;
  }
  
  return <Navigate to="/" replace />;
};

export default Index;
