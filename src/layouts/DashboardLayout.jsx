import { useSignOut } from "react-firebase-hooks/auth";
import { Outlet } from "react-router-dom";
import auth from "../firebase/firebase.config";

export default function DashboardLayout() {



  // const handleLogOut = () =>{

  // }

  // const [user] = useAuthState(auth);
  const [signOut] = useSignOut(auth);

  const handleSignOut = async () =>{
    await signOut()

  }
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-screen bg-base-200 text-base-content flex flex-col justify-between">
          {/* Sidebar content here */}
         
            <div>
              <li>
                <a>Sidebar Item 1</a>
              </li>
              <li>
                <a>Sidebar Item 2</a>
              </li>
            </div>
            <div>
              <button onClick={handleSignOut} className="btn">LogOut</button>
            </div>
          
        </ul>
      </div>
    </div>
  );
}
