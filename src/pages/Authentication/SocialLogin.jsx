import { useLocation, useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";

const SocialLogin = () => {

  const {googleLogin} = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosInstance = useAxios();

  const handleGoogleLogin =()=>{
    googleLogin()
    .then( async(result) =>{
      const user = result.user;
       const userInfo = {
          email: user.email,
          role: 'user' ,//default role
          created_at: new Date().toISOString(),
          last_log_in: new Date().toISOString()
        }

       const res = await axiosInstance.post('/users', userInfo);
       console.log('user update info',res.data)


       //Redirect after signin user
      navigate(location.state || '/');
    })
    .catch(error =>{
      console.log(error.message)
    })
  }

  return (
    <div>
      <div className="divider">Or</div>

      {/* Google Login */}
      <button onClick={handleGoogleLogin} className="btn btn-outline w-full">
        <img
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          alt="google"
          className="w-5 h-5 mr-2"
        />
        Login with Google
      </button>
    </div>
  );
};

export default SocialLogin;
