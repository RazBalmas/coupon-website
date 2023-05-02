import { useEffect, useState } from "react";
import "./AllCouponsByCustomer.css";
import CouponModel from "../../../Models/CouponModel";
import customerService from "../../../Service/CustomerService";
import CouponCard from "../../CardsArea/CouponCard/CouponCard";
import adminService from "../../../Service/AdminService";

function AllCouponsByCustomer(): JSX.Element {

    const [couponsList, setCouponsList] = useState<CouponModel[]>([]);
    
    useEffect(() => {
        async function getAllCoupon(){
            try{
            const coupons = await customerService.allCoupons();
            setCouponsList(coupons);
        }
        catch (error : any){
            console.log(error);
            alert("Failed to retrieve data from server")
        }
    }
    getAllCoupon();

    },[])

    return (
        <div className="AllCoupons">
				<hr />
            {couponsList.map((p)=>(
                <CouponCard key={p.id} coupon={p}/>
            ) )}
        </div>
    );
}

export default AllCouponsByCustomer;
