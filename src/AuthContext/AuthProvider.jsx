import { AuthContext } from "./AuthContext";



const AuthProvider = ({children}) => {
      const user ={name: 'Swadeb'}

      const authInfo ={
            user,
      }

      return (
            <AuthContext value={authInfo} >
                  {children}
            </AuthContext>
      );
};

export default AuthProvider;