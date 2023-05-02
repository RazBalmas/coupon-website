import { NavLink } from "react-router-dom";
import CouponModel from "../../../Models/CouponModel";
import "./CouponCard.css";
import { useEffect, useState } from "react";
import adminService from "../../../Service/AdminService";

interface CouponModelProps{
    coupon : CouponModel;
}
// const [imageFile, setImageFile] = useState<File>();
 
// async function getImage(name : string) {
//     const file = await adminService.getImage(name);
//     if(file){
//     setImageFile(file);
// }
// }

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
            Amount : {props.coupon.amount}<br />
            Id:  {props.coupon.id}<br />

            {props.coupon.image !== "" && <>
            
            <img src={props.coupon.image} alt="" />
            </>

            }
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
