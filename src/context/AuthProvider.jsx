import { AuthContext } from "./AuthContext";

const AuthProvider = ({ children }) => {

    const value = { user: 'hasiba' };
    return (
        <AuthContext value={{ value }}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;