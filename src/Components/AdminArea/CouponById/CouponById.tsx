import { useEffect, useState } from "react";
import CompanyUserModel from "../../../Models/CompanyUserModel";
import "./CouponById.css";
import adminService from "../../../Service/AdminService";
import { log } from "console";
import CouponModel from "../../../Models/CouponModel";
import ReactDOM from "react-dom";

function CouponById(): JSX.Element {
     
    const [register, handleSubmit] = useState<number>();
    const [coupon, setCoupon] = useState<CouponModel | null>();
    

    async function couponById(){
        try{
            const answer = await adminService.CouponById(register);
            setCoupon(answer);
        }
        catch (error : any){
            console.log(error);
            alert("Failed to retrieve data from server")
        }
    }

    
    return (
        <div className="CouponById">
            <legend>Id</legend>
            <input type="number" value={register}/>
            <button type="submit" onClick={couponById}>Check</button>
            <span>coupon : </span>
          
        </div>
    );
}

export default CouponById;