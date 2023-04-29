import { useEffect, useState } from "react";
import CompanyUserModel from "../../../Models/CompanyUserModel";
import "./CouponsByCompanyId.css";
import adminService from "../../../Service/AdminService";
import { log } from "console";

import ReactDOM from "react-dom";
import CouponCard from "../../CardsArea/CouponCard/CouponCard";
import CouponModel from "../../../Models/CouponModel";

function CouponsByCompanyId(): JSX.Element {
     
     
    const [companyCoupons, setCompanyCoupons] = useState<CouponModel[] | undefined>(undefined);
    const [register, setRegister] = useState<number>(0);
    
    
    const handleCheckClick = async () => {
      try {
        console.log(register);
        const answer = await adminService.couponsByCompanyId(register);
        setCompanyCoupons(answer);
      } catch (error: any) {
        console.log(error);
        alert("No Coupon by specified Company Id");
      }
    };
  
  

    
    return (
        <div className="CouponsByCompanyId">
                <legend>Company Id :</legend>
      <br />
      <input
        type="number"
        value={register}
        onChange={(e) => setRegister(Number(e.target.value))}
      />
       <button onClick={handleCheckClick}>Check</button>

    {companyCoupons !== undefined ? (
        <div>
          {companyCoupons.map((p)=>(
                   <CouponCard key={p.id} coupon={p}/>
               ) )}
      </div>
    ) : (
      <p>No coupon data to display</p>
    )}
          
                </div>
                
                );
}

export default CouponsByCompanyId;