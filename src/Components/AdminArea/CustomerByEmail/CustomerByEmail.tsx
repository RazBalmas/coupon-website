import { useEffect, useState } from "react";
import CompanyUserModel from "../../../Models/CompanyUserModel";
import "./CustomerByEmail.css";
import adminService from "../../../Service/AdminService";
import { log } from "console";
import CouponModel from "../../../Models/CouponModel";
import ReactDOM from "react-dom";
import CouponCard from "../../CardsArea/CouponCard/CouponCard";
import CustomerUserModel from "../../../Models/CustomerUserModel";
import CustomerCard from "../../CardsArea/CustomerCard/CustomerCard";

function CustomerByEmail(): JSX.Element {
     
    let register : string;
    const [customer, setCustomer] = useState<CustomerUserModel | undefined>(null);
    

    async function customerByEmail(){
        try{
            const answer = await adminService.customerByEmail(register);
            setCustomer(answer);
        }
        catch (error : any){
            console.log(error);
            alert("Failed to retrieve data from server")
        }
    }

    
    return (
        <div className="CustomerByEmail">
            <legend>Email :</legend>
            <br />
            <input type="text" value={register}/>
            <button type="submit" onClick={customerByEmail} >Check</button>
              
            {customer !== null ? (
              <div>
                {
                <CustomerCard key={customer.id} customer={customer}/>
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

export default CustomerByEmail;