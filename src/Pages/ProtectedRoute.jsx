import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { authContext } from "../context/AuthContext";

function ProtectedRoute({ children }) {
  const {user}=useContext(authContext);

  if(!user){
    return <Navigate to='/'/>
  }
  
  return children;
}

export default ProtectedRoute;
