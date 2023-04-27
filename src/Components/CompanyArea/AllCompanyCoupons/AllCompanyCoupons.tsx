import { useEffect, useState } from "react";
import CouponModel from "../../../Models/CouponModel";
import companyService from "../../../Service/CompanyService";
import CouponCard from "../../CardsArea/CouponCard/CouponCard";
import "./AllCompanyCoupons.css";

function AllCompanyCoupons(): JSX.Element {
    
    const [couponList, setCouponList] = useState<CouponModel[]>([]);
    
    useEffect(() => {
        async function getAllCoupons(){
            try{
            const coupons = await companyService.allMyCoupons();
            setCouponList(coupons);

        }
        catch (error : any){
            console.log(error);
        }
    }
    getAllCoupons();

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


export default AllCompanyCoupons;
