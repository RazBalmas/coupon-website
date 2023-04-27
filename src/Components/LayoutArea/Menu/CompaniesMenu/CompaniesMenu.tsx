import { NavLink } from "react-router-dom";
import "./CompaniesMenu.css";

function CompaniesMenu(): JSX.Element {
    return (
        <div className="CompaniesMenu">
			
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
    );
}

export default CompaniesMenu;
