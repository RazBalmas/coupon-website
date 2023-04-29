import { useEffect, useState } from "react";
import CompanyUserModel from "../../../Models/CompanyUserModel";
import "./CouponByTitle.css";
import adminService from "../../../Service/AdminService";
import { log } from "console";
import CouponModel from "../../../Models/CouponModel";
import ReactDOM from "react-dom";
import CouponCard from "../../CardsArea/CouponCard/CouponCard";

function CouponByTitle(): JSX.Element {
     
  const [coupon, setCoupon] = useState<CouponModel | undefined>(undefined);
  const [register, setRegister] = useState<string>("");
  
  
  const handleCheckClick = async () => {
    try {
      console.log(register);
      const answer = await adminService.CouponByTitle(register);
      setCoupon(answer);
    } catch (error: any) {
      console.log(error);
      alert("No Coupon by specified Id");
    }
  };


    
    return (
        <div className="CouponByTitle">
              <legend>Title :</legend>
      <br />
      <input
        type="text"
        value={register}
        onChange={(e) => setRegister(String(e.target.value))}
      />
       <button onClick={handleCheckClick}>Check</button>

  
    {coupon !== undefined ? (
      <div>
        <CouponCard key={coupon.id} coupon={coupon} />
      </div>
    ) : (
      <p>No coupon data to display</p>
    )}
          
        </div>
            
    );
}

export default CouponByTitle;