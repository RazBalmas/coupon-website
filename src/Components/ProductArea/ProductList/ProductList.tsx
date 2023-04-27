import { useEffect, useState } from "react";
import CouponModel from "../../../Models/CouponModel";
import "./ProductList.css";
import generalService from "../../../Service/GeneralService";
import CouponCard from "../../CardsArea/CouponCard/CouponCard";

function ProductList(): JSX.Element {
    
    const [couponList, setCouponList] = useState<CouponModel[]>([]);
    
    useEffect(() => {
        async function getAllCoupons(){
            try{
            const coupons = await generalService.getAllCoupons();
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
