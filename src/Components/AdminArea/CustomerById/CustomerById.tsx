import { useEffect, useState } from "react";
import CompanyUserModel from "../../../Models/CompanyUserModel";
import "./CustomerById.css";
import adminService from "../../../Service/AdminService";
import { log } from "console";
import CouponModel from "../../../Models/CouponModel";
import ReactDOM from "react-dom";
import CouponCard from "../../CardsArea/CouponCard/CouponCard";
import CustomerUserModel from "../../../Models/CustomerUserModel";
import CustomerCard from "../../CardsArea/CustomerCard/CustomerCard";

function CustomerById(): JSX.Element {
     
    let register : number;
    const [customer, setCustomer] = useState<CustomerUserModel | undefined>(null);
    

    async function customerById(){
        try{
            const answer = await adminService.customerById(register);
            setCustomer(answer);
        }
        catch (error : any){
            console.log(error);
            alert("Failed to retrieve data from server")
        }
    }

    
    return (
        <div className="CustomerById">
            <legend>Id :</legend>
            <br />
            <input type="number" value={register}/>
            <button type="submit" onClick={customerById} >Check</button>
              
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

export default CustomerById;