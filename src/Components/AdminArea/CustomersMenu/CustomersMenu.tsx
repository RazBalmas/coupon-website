import { NavLink } from "react-router-dom";
import "./CustomersMenu.css";

function CustomersMenu(): JSX.Element {
    return (
        <div className="CustomersMenu">
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
    );
}

export default CustomersMenu;
