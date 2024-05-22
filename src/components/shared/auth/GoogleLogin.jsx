import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../firebase/firebase.config";

export default function GoogleLogin() {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  console.log(auth);

  const handleGoogleLogin = () => {
    signInWithGoogle();
  };
  console.log(user, loading, error);
  return (
    <div>
      <button
        onClick={handleGoogleLogin}
        className="bg-orange-400 text-white font-bold px-5 py-3 w-full  rounded-lg"
      >
        Login With Google
      </button>
    </div>
  );
}
