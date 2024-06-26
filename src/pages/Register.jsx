import { Link, useNavigate } from "react-router-dom";
import GoogleLogin from "../components/shared/auth/GoogleLogin";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import auth from "../firebase/firebase.config";
import { useEffect } from "react";

export default function Register() {
  const navigate = useNavigate();
  const [userInfo] = useAuthState(auth);

  // createUserWithEmailAndPassword
  const [createUserWithEmailAndPassword,user,loading,error] = useCreateUserWithEmailAndPassword(auth);

  console.log(user,loading);

  const handleSignUpWithEmailPassword = (e) =>{
    e.preventDefault()
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    createUserWithEmailAndPassword(email,password);
  }
 

  // useNavigate
  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
    if(error){
      console.log(error?.message);
    }
  }, [navigate, userInfo,error]);
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSignUpWithEmailPassword} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button  className="btn btn-primary">Register</button>
              </div>
              {
              error && <p className="text-red-500">{error?.message}</p>
            }


              <div>
                <p>
                  Already have an account?{" "}
                  <Link to={"/login"} className="text-red-500">
                    Login
                  </Link>{" "}
                </p>
              </div>
            </form>
            <div className="mx-7 mb-5">
              <GoogleLogin />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
