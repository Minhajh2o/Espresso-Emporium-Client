import { createContext } from "react";
import { auth } from "../firebase/Firebase.config";

export const AuthContext = createContext(auth)