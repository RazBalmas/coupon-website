import { useEffect, useState } from "react";
import CompanyUserModel from "../../../Models/CompanyUserModel";
import "./CouponByTitle.css";
import adminService from "../../../Service/AdminService";
import { log } from "console";
import CouponModel from "../../../Models/CouponModel";
import ReactDOM from "react-dom";
import CouponCard from "../../CardsArea/CouponCard/CouponCard";

function CouponByTitle(): JSX.Element {
     
    let register : string;
    const [coupon, setCoupon] = useState<CouponModel | undefined>(null);
    

    async function couponByTitle(){
        try{
            const answer = await adminService.CouponByTitle(register);
            setCoupon(answer);
        }
        catch (error : any){
            console.log(error);
            alert("Failed to retrieve data from server")
        }
    }

    
    return (
        <div className="CouponByTitle">
            <legend>Title</legend>
            <input type="text" value={register}/>
            <button type="submit" onClick={couponByTitle} >Check</button>
              
            {coupon !== null ? (
              <div>
                {
                <CouponCard key={coupon.id} coupon={coupon}/>
                }
                {/* {coupon.title !== undefined && (
                  <p>Coupon Title: {coupon.title}</p>
                )} */}

              </div>
            ) : (
              <p>No coupon data to display</p>
            )}
        </div>
            
    );
}

export default CouponByTitle;