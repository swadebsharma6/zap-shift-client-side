import { useLocation, useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";

const SocialLogin = () => {

  const {googleLogin} = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoogleLogin =()=>{
    googleLogin()
    .then(result =>{
      console.log('google', result.user);

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
