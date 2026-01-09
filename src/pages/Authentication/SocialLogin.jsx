const SocialLogin = () => {
  return (
    <div>
      <div className="divider">Or</div>

      {/* Google Login */}
      <button className="btn btn-outline w-full">
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
