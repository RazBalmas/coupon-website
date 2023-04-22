import CouponModel from "../../../Models/CouponModel";
import "./CouponCard.css";

interface CouponModelProps{
    coupon : CouponModel;
}

function CouponCard(props : CouponModelProps): JSX.Element {
    return (
        <div className="CouponCard">
            <div>
			Title : {props.coupon.title} <br />
            Company name : {props.coupon.company.name} <br />
            price : ${props.coupon.price}
            </div>
        </div>
    );
}

export default CouponCard;
