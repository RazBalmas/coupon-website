import CouponModel from "../../../Models/CouponModel";
import customerService from "../../../Service/CustomerService";
import CouponCard from "../../CardsArea/CouponCard/CouponCard";
import "./AllMyCouponsByCustomer.css";
import { useEffect, useState } from "react";

function AllMyCouponsByCustomer(): JSX.Element {
    const [couponList, setCouponList] = useState<CouponModel[]>([]);
    
    useEffect(() => {
        async function getCustomer(){
            try{
            const coupons = await customerService.customerCoupons();
            setCouponList(coupons);

        }
        catch (error : any){
            console.log(error);
        }
    }
    getCustomer();

    },[])
    
    return (
        <div className="ProductList">
			<hr />
            {couponList.map((p)=>(
                <CouponCard key={p.id} coupon={p}/>
            ) )}
        </div>
    );}
export default AllMyCouponsByCustomer;
