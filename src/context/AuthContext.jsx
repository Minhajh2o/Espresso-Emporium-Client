import { createContext } from "react";
import { auth } from "../firebase/Firebase";

export const AuthContext = createContext(auth)