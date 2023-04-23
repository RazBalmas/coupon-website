import { useEffect , useState} from "react";
import { NavLink } from "react-router-dom";
import ClientType from "../../../Models/ClientType";
import { authStore } from "../../../Redux/AuthState";
import "./Menu.css";
import CompanyMenu from "../../CompanyArea/CompanyMenu/CompanyMenu";



function Menu(): JSX.Element {
    const [clientType, setClientType] = useState<ClientType>(ClientType.GENERAL);
    
    useEffect(() => {
         
        setClientType(authStore.getState().user?.clientType as ClientType);
    
        const unsubscribe = authStore.subscribe(()=> {
            setClientType(authStore.getState().user?.clientType as ClientType)
    });
    return unsubscribe;
    }, []);
    
    return (
        <div className="Menu">
            {clientType === undefined && <>
			<NavLink to={"/home"}>Home</NavLink>

            <br />
			
            <NavLink to={"/about"}>About</NavLink>
            <br /> </>
            }
            {clientType === ClientType.COMPANY && <>
            
            <NavLink to={"/api/company/updateCompany"}>Update Company</NavLink>
            <br />
            <NavLink to={"/api/company/addCoupon"}>Add Coupon</NavLink>
            <br />
            <NavLink to={"/api/company/updateCoupon"}>Update Coupon</NavLink>
            <br />
            <NavLink to={"/api/company/deleteCoupon"}>Delete Coupon</NavLink>
            <br />
            <NavLink to={"/api/company/allMyCoupons"}>My Coupons</NavLink>
            <br />
            <NavLink to={"/api/company/uploadImage"}>Upload Image</NavLink>
            
            </>}
            {clientType === ClientType.CUSTOMER && <>
            
            <NavLink to={"/api/company/updateCompany"}>Update Company</NavLink>
            <br />
            <NavLink to={"/api/company/addCoupon"}>Add Coupon</NavLink>
            <br />
            <NavLink to={"/api/company/updateCoupon"}>Update Coupon</NavLink>
            <br />
            <NavLink to={"/api/company/deleteCoupon"}>Delete Coupon</NavLink>
            <br />
            <NavLink to={"/api/company/allMyCoupons"}>My Coupons</NavLink>
            <br />
            <NavLink to={"/api/company/uploadImage"}>Upload Image</NavLink>
            
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
