import { useEffect, useState } from "react";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import UserModel from "../../../Models/UserModel";
import { authStore } from "../../../Redux/AuthState";
import authService from "../../../Service/AuthService";
import "./AuthMenu.css";
import ClientType from "../../../Models/ClientType";



function AuthMenu(): JSX.Element {

    const [user, setUser] = useState<UserModel>();

    useEffect(()=>{
        setUser(authStore.getState().user);

        authStore.subscribe(()=> {
            setUser(authStore.getState().user);
            });


    }, [])
    
    function Logout():void{
        authService.Logout();
        alert("Bye Bye =)");
        const navigate = useNavigate();
        navigate("/Home");


    }


    return (
        <div className="AuthMenu">
			{!user && 
            <>
            
            <span><NavLink to={"/register"} >Register</NavLink> | </span>
            <NavLink to={"/login"}>Login</NavLink>
              </>}
              {user && 
              <>
              
              <span>Hello {user.email} | </span>
              <NavLink to={"/Home"} onClick={Logout}>Logout</NavLink>

              </>

              }
        </div>
    );
}

export default AuthMenu;
