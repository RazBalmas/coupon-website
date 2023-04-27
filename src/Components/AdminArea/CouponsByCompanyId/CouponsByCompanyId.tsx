import { useEffect, useState } from "react";
import CompanyUserModel from "../../../Models/CompanyUserModel";
import "./CouponsByCompanyId.css";
import adminService from "../../../Service/AdminService";
import { log } from "console";

import ReactDOM from "react-dom";
import CouponCard from "../../CardsArea/CouponCard/CouponCard";
import CouponModel from "../../../Models/CouponModel";

function CouponsByCompanyId(): JSX.Element {
     
    let register : number;
    const [coupons, setCoupons] = useState<CouponModel []| undefined>(null);
    

    async function couponsByCompanyId(){
        try{
            const answer = await adminService.couponsByCompanyId(register);
            setCoupons(answer);
        }
        catch (error : any){
            console.log(error);
            alert("Failed to retrieve data from server")
        }
    }

    
    return (
        <div className="CouponsByCompanyId">
            <legend>Company Id</legend>
            <input type="number" value={register}/>
            <button type="submit" onClick={couponsByCompanyId} >Check</button>


             {coupons !== null ? (
              <div>
                 <hr /> 
                {
                coupons.map((p)=>(
                <CouponCard key={p.id} coupon={p}/>) )
                }
        </div>
            ) : (
                <p>No coupon data to display</p>
                )  
            }
                </div>
                
                );
}

export default CouponsByCompanyId;