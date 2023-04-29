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
            {props.coupon.catagory} <br />
			Title : {props.coupon.title} <br />
			Description : {props.coupon.description} <br />
			StartDate : {props.coupon.startDate.toDateString()} <br />
			EndDate : {props.coupon.endDate.toDateString()} <br />
            Price : ${props.coupon.price}
            Amount : ${props.coupon.amount}
            Company name : {props.coupon.company.name} <br />

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
