import { Navigate, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";
import Loading from "../components/Shared/Loading";


const PrivetRoute = ({children}) => {
      const {user, loading} = useAuth();
      const location = useLocation();

      if(loading){
            return <Loading/>
      }

      if(!user){
            return <Navigate to='/login' state={location.pathname} replace></Navigate>
      }

      return  children;
};

export default PrivetRoute;