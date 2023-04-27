import { NavLink, useParams } from "react-router-dom";

import "./CompanyCard.css";
import CompanyUserModel from "../../../Models/CompanyUserModel";

interface CompanyUserProps{
    company : CompanyUserModel;
}


function CompanyCard(props : CompanyUserProps): JSX.Element {
    return (
        <div className="CompanyCard">
            <div>
            {props.company.name} <br />
			Id : {props.company.id} <br />
			Email : {props.company.email} <br />
			Password : {props.company.password} <br />
			

            <NavLink className={"links"} to={"/api/admin/updateCompany"} >
                Update
            </NavLink>
            <NavLink className={"links"} to={"/api/admin/deleteCompany"}>
                Delete
            </NavLink>
            </div>
        </div>
    );
}

export default CompanyCard;
