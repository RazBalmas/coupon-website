import { NavLink } from "react-router-dom";
import "./CouponsMenu.css";

function CouponsMenu(): JSX.Element {
    return (
        <div className="CouponsMenu">
            
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
    );
}

export default CouponsMenu;
