import { useEffect, useState } from "react";
import companyService from "../../../Service/CompanyService";
import "./DeleteCouponByCompany.css";
import CouponModel from "../../../Models/CouponModel";
import CouponCard from "../../CardsArea/CouponCard/CouponCard";

function DeleteCouponByCompany(): JSX.Element {
    const [register, handleSubmit] = useState <number>(0);
   
 

    async function send() {
         try {
            
             await companyService.deleteCoupon(register);
            
             alert("Coupon was deleted successfully!")
             
 
         } catch (err: any) {
             alert("Failed!")
         }
    } 
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
        
			
            <div className="DeleteCoupon">
			
                <button type="submit" onClick={() => send()}>Submit</button>
            {couponList !== undefined && <>
                <input type="number" onChange={(e) => {
                const id = parseInt(e.target.value);
                handleSubmit(id);
                }}/>
                </>}
            
            {couponList.map((p)=>(
                <CouponCard key={p.id} coupon={p}/>
            ) )}
            <hr />
       

        </div>
    );
}
export default DeleteCouponByCompany;
