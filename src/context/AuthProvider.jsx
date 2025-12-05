import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  deleteUser,

} from "firebase/auth";
import { AuthContext } from "./AuthContext";
import { auth } from "../firebase/Firebase.config";

const AuthProvider = ({ children }) => {

  // google auth provider
  const googleProvider = new GoogleAuthProvider();

  // create user using email and password
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign in user using email and password
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // sign in with google
  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };



  // delete user
  const deleteUserAccount = () => {
    // Note: Deleting a user from Firebase Authentication requires the user to be signed in.
    // This function assumes that the user is currently signed in.
    return deleteUser(auth.currentUser);
  };

  const value = { createUser, signInUser, signInWithGoogle, deleteUserAccount };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
