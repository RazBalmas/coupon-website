import { NavLink } from "react-router-dom";
import CouponModel from "../../../Models/CouponModel";
import "./CouponCard.css";

interface CouponModelProps{
    coupon : CouponModel;
}

function CouponCard(props : CouponModelProps): JSX.Element {
    return (
        <div className="CouponCard">
            <div>
            Company name : {props.coupon.company.name} <br />
            {props.coupon.catagory} <br />
			Title : {props.coupon.title} <br />
			Description : {props.coupon.description} <br />
			StartDate : {props.coupon.startDate.toString()} <br />
			EndDate : {props.coupon.endDate.toString()} <br />
            Price : ${props.coupon.price}<br />
            Amount : ${props.coupon.amount}<br />

            <NavLink className={"links"} to={"/updateCoupon"} state={props}>
                Update
            </NavLink>    
            
            <NavLink className={"links"} to={"/deleteCoupon"}>
                delete
            </NavLink>
            </div>
        </div>
    );
}

export default CouponCard;
