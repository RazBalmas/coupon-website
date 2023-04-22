import { useEffect, useState } from "react";
import CouponModel from "../../../Models/CouponModel";
import "./ProductList.css";
import couponService from "../../../Service/CouponService";
import CouponCard from "../CouponCard/CouponCard";

function ProductList(): JSX.Element {
    
    const [couponList, setCouponList] = useState<CouponModel[]>([]);
    
    useEffect(() => {
        async function getAllCoupons(){
            try{
            const coupons = await couponService.getAllCoupons();
            setCouponList(coupons);

        }
        catch (error : any){
            console.log(error);
        }
        getAllCoupons();
    }

    },[])
    
    return (
        <div className="ProductList">
			<hr />
            {couponList.map((p)=>(
                <CouponCard key={p.id} coupon={p}/>
            ) )}
        </div>
    );
}

export default ProductList;
