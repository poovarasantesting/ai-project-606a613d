import { GoogleLogin } from "@react-oauth/google";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleLoginSuccess = (credentialResponse: any) => {
    console.log("Login Success:", credentialResponse);
    // In a real app, you would send this token to your backend
    // and validate it there before authenticating the user
    localStorage.setItem("googleToken", credentialResponse.credential);
    toast.success("Login successful!");
    navigate("/dashboard");
  };

  const handleLoginError = () => {
    console.error("Login Failed");
    toast.error("Google login failed. Please try again.");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h1 className="text-2xl font-bold text-center mb-6">Welcome</h1>
        <p className="text-gray-600 text-center mb-8">
          Sign in to access your dashboard
        </p>
        <div className="flex justify-center">
          <GoogleLogin
            onSuccess={handleLoginSuccess}
            onError={handleLoginError}
            useOneTap
          />
        </div>
        <p className="text-gray-500 text-xs mt-8 text-center">
          By signing in, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  );
}