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
    
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
    return (
        
        <div className="Menu">
            
        <div    className="general-menu">
        {clientType === undefined && (
            <>
             
			<NavLink to={"/home"}>Home</NavLink>

            <br />
			
            <NavLink to={"/about"}>About</NavLink>
            <br /> 
          </>
        )}
        {clientType === ClientType.COMPANY && (
            <>
           
            
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
            
            
          </>
        )}
        {clientType === ClientType.CUSTOMER && (
            <>
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
          </>
        )}
        {clientType === ClientType.ADMIN && (
            <>
            <div className="AdminDropdown">
              <div className="AdminDropdownItem">
                <button className="link">Companies</button>
                <div className="AdminDropdownMenu">
                <NavLink to={"/api/admin/companyExistsById"}>Company exists by Id</NavLink>
            <br />
            <NavLink to={"/api/admin/companyExistsByEmail"}>Company exists by Id</NavLink>
            <br />
            <NavLink to={"/api/admin/addCompany"}>Add a Company</NavLink>
            <br />
            <NavLink to={"/api/admin/updateCompany"}>Update Company</NavLink>
            <br />
            <NavLink to={"/api/admin/deleteCompany"}>Delete Company</NavLink>
            <br />
            <NavLink to={"/api/admin/getAllCompany"}>All Companies</NavLink>
            <br />
            <NavLink to={"/api/admin/getCompanyById"}>Get Company by Id</NavLink>
            <br />
            <NavLink to={"/api/admin/getCompanyByEmail"}>Get Company by Id</NavLink>
                </div>
              </div>
              <div className="AdminDropdownItem">
              <button className="link">Customers</button>
                <div className="AdminDropdownMenu" id="adminMenu2">
                <NavLink to={"/api/admin/addCustomer"}>Add Customer</NavLink>
            <br />
			 <NavLink to={"/api/admin/customerExistsById"}>Customer exists by id</NavLink>
            <br />
            <NavLink to={"/api/admin/customerExistsByEmail"}>Customer exists by Email</NavLink>
            <br />
            <NavLink to={"/api/admin/updateCustomer"}>Update Customer</NavLink>
            <br />
            <NavLink to={"/api/admin/deleteCustomer"}>Delete Customer</NavLink>
            <br />
            <NavLink to={"/api/admin/allCustomers"}>All Customers</NavLink>
            <br />
            <NavLink to={"/api/admin/customerById"}>Customer by id</NavLink>
            <br />
            <NavLink to={"/api/admin/customerByEmail"}>Customer by email</NavLink>
            <br />
            <NavLink to={"/api/admin/addPurches"}>Add Purches</NavLink>
            <br />
            <NavLink to={"/api/admin/deletePurches"}>Delete Purches</NavLink>
                </div>
              </div>
              <div className="AdminDropdownItem">
              <button className="link">Coupons</button>
                <div className="AdminDropdownMenu" id="adminMenu3">
                <NavLink to={"/api/admin/addCoupon"}>Add Coupon</NavLink>
            <br />
            <NavLink to={"/api/admin/updateCoupon"}>Update Coupon</NavLink>
            <br />
            <NavLink to={"/api/admin/deleteCoupon"}>Delete Coupon</NavLink>
            <br />
            <NavLink to={"/api/admin/CouponsByCompanyId"}>Coupons of Company</NavLink>
            <br />
            <NavLink to={"/api/admin/CouponById"}>Get Coupon by id</NavLink>
            <br />
            <NavLink to={"/api/admin/CouponByTitle"}>Get Coupon by Title</NavLink>
            <br />
            <NavLink to={"/api/admin/allCoupons"}>All Coupons</NavLink>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Menu;

//         <div className="Menu">
//             {clientType === undefined && <>
// 			<NavLink to={"/home"}>Home</NavLink>

//             <br />
			
//             <NavLink to={"/about"}>About</NavLink>
//             <br /> </>
//             }
//             {clientType === ClientType.COMPANY && <>
            
//             <NavLink to={"/api/company/updateCompany"}>Update Company</NavLink>
//             <br />
//             <NavLink to={"/api/company/addCoupon"}>Add Coupon</NavLink>
//             <br />
//             <NavLink to={"/api/company/updateCoupon"}>Update Coupon</NavLink>
//             <br />
//             <NavLink to={"/api/company/deleteCoupon"}>Delete Coupon</NavLink>
//             <br />
//             <NavLink to={"/api/company/allMyCoupons"}>My Coupons</NavLink>
//             <br />
//             <NavLink to={"/api/company/uploadImage"}>Upload Image</NavLink>
            
//             </>}
//             {clientType === ClientType.CUSTOMER && <>
            
//             <NavLink to={"/api/company/updateCompany"}>Update Company</NavLink>
//             <br />
//             <NavLink to={"/api/company/addCoupon"}>Add Coupon</NavLink>
//             <br />
//             <NavLink to={"/api/company/updateCoupon"}>Update Coupon</NavLink>
//             <br />
//             <NavLink to={"/api/company/deleteCoupon"}>Delete Coupon</NavLink>
//             <br />
//             <NavLink to={"/api/company/allMyCoupons"}>My Coupons</NavLink>
//             <br />
//             <NavLink to={"/api/company/uploadImage"}>Upload Image</NavLink>
            
//             </>}
//             {clientType === ClientType.ADMIN && <>
            
//             <span>Company Menu</span>
//             <br />
//             <div className="CompaniesMenu">
//             <NavLink to={"/api/admin/companyExistsById"}>Company exists by Id</NavLink>
//             <br />
//             <NavLink to={"/api/admin/companyExistsByEmail"}>Company exists by Id</NavLink>
//             <br />
//             <NavLink to={"/api/admin/addCompany"}>Add a Company</NavLink>
//             <br />
//             <NavLink to={"/api/admin/updateCompany"}>Update Company</NavLink>
//             <br />
//             <NavLink to={"/api/admin/deleteCompany"}>Delete Company</NavLink>
//             <br />
//             <NavLink to={"/api/admin/getAllCompany"}>All Companies</NavLink>
//             <br />
//             <NavLink to={"/api/admin/getCompanyById"}>Get Company by Id</NavLink>
//             <br />
//             <NavLink to={"/api/admin/getCompanyByEmail"}>Get Company by Id</NavLink>
        
//         </div>
         
            
//             <span>Customer Menu</span>
          
//       <div className="CustomersMenu">
//             <NavLink to={"/api/admin/addCustomer"}>Add Customer</NavLink>
//             <br />
// 			 <NavLink to={"/api/admin/customerExistsById"}>Customer exists by id</NavLink>
//             <br />
//             <NavLink to={"/api/admin/customerExistsByEmail"}>Customer exists by Email</NavLink>
//             <br />
//             <NavLink to={"/api/admin/updateCustomer"}>Update Customer</NavLink>
//             <br />
//             <NavLink to={"/api/admin/deleteCustomer"}>Delete Customer</NavLink>
//             <br />
//             <NavLink to={"/api/admin/allCustomers"}>All Customers</NavLink>
//             <br />
//             <NavLink to={"/api/admin/customerById"}>Customer by id</NavLink>
//             <br />
//             <NavLink to={"/api/admin/customerByEmail"}>Customer by email</NavLink>
//             <br />
//             <NavLink to={"/api/admin/addPurches"}>Add Purches</NavLink>
//             <br />
//             <NavLink to={"/api/admin/deletePurches"}>Delete Purches</NavLink>
//            <br />
        
//             <span>Coupon Menu</span>
//             <br />
//             <div className="CouponsMenu">
            
//             <NavLink to={"/api/admin/addCoupon"}>Add Coupon</NavLink>
//             <br />
//             <NavLink to={"/api/admin/updateCoupon"}>Update Coupon</NavLink>
//             <br />
//             <NavLink to={"/api/admin/deleteCoupon"}>Delete Coupon</NavLink>
//             <br />
//             <NavLink to={"/api/admin/CouponsByCompanyId"}>Coupons of Company</NavLink>
//             <br />
//             <NavLink to={"/api/admin/CouponById"}>Get Coupon by id</NavLink>
//             <br />
//             <NavLink to={"/api/admin/CouponByTitle"}>Get Coupon by Title</NavLink>
//             <br />
//             <NavLink to={"/api/admin/allCoupons"}>All Coupons</NavLink>
           
//         </div>
//         </div>
          
            
//             </>}
          
//         </div>
//     );
// }

// function CompaniesLinks(){

//     return (
//         <div className="CompaniesMenu">
			
//         <NavLink to={"/api/admin/companyExistsById"}>Company exists by Id</NavLink>
//         <br />
//         <NavLink to={"/api/admin/companyExistsByEmail"}>Company exists by Id</NavLink>
//         <br />
//         <NavLink to={"/api/admin/addCompany"}>Add a Company</NavLink>
//         <br />
//         <NavLink to={"/api/admin/updateCompany"}>Update Company</NavLink>
//         <br />
//         <NavLink to={"/api/admin/deleteCompany"}>Delete Company</NavLink>
//         <br />
//         <NavLink to={"/api/admin/getAllCompany"}>All Companies</NavLink>
//         <br />
//         <NavLink to={"/api/admin/getCompanyById"}>Get Company by Id</NavLink>
//         <br />
//         <NavLink to={"/api/admin/getCompanyByEmail"}>Get Company by Id</NavLink>
    
//     </div>
//     )
// }

// export default Menu;
