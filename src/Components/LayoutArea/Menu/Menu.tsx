import { useEffect , useState} from "react";
import { NavLink } from "react-router-dom";
import ClientType from "../../../Models/ClientType";
import { authStore } from "../../../Redux/AuthState";
import "./Menu.css";



function Menu(): JSX.Element {
    const [clientType, setClientType] = useState<ClientType>();
    
    useEffect(() => {
        setClientType(authStore.getState().user?.clientType as ClientType);
    
        const unsubscribe = authStore.subscribe(()=> {
            setClientType(authStore.getState().user?.clientType as ClientType)
    });
    return unsubscribe;
    }, []);
    
    return (
        <div className="Menu">
			<NavLink to={"/home"}>Home</NavLink>

            <br />
			
            <NavLink to={"/about"}>About</NavLink>

            <br />

            {clientType === ClientType.CUSTOMER && <>
            
            <NavLink to="#">Customer Link 1</NavLink>
            <br />
            <NavLink to="#">Customer Link 2</NavLink>
            
            </>}
            {clientType === ClientType.COMPANY && <>
            
            <NavLink to="#">Company Link 1</NavLink>
            <br />
            <NavLink to="#">Company Link 2</NavLink>
            
            </>}
            {clientType === ClientType.ADMIN && <>
            
            <NavLink to="#">Admin Link 1</NavLink>
            <br />
            <NavLink to="#">Admin Link 2</NavLink>
            
            </>}
        </div>
    );
}

export default Menu;
