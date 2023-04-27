import { NavLink, useParams } from "react-router-dom";
import CustomerUserModel from "../../../Models/CustomerUserModel";
import "./CustomerCard.css";

interface CustomerUserProps{
    customer : CustomerUserModel;
}


function CustomerCard(props : CustomerUserProps): JSX.Element {
    return (
        <div className="CouponCard">
            <div>
            {props.customer.firstName} + {props.customer.lastName} <br />
			Id : {props.customer.id} <br />
			Email : {props.customer.email} <br />
			Password : {props.customer.password} <br />
			

            <NavLink className={"links"} to={"/api/admin/updateCustomer"} >
                Update
            </NavLink>
            <NavLink className={"links"} to={"/api/admin/deleteCustomer"}>
                Delete
            </NavLink>
            </div>
        </div>
    );
}

export default CustomerCard;
