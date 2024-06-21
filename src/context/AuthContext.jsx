import { createContext, useState } from "react";
import { auth } from "../firebase";
import {
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";

export const authContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    setUser(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logout = () => {
    setUser(null);
    return signOut(auth);
  };
  const valueToShare = {
    user,
    login,
    logout,
  };

  return (
    <authContext.Provider value={valueToShare}>{children}</authContext.Provider>
  );
}
