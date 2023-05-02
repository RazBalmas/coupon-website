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
     
    
    
  const [customer, setCustomer] = useState<CustomerUserModel | undefined>(undefined);
  const [register, setRegister] = useState<string>("");
  
  
  const handleCheckClick = async () => {
    try {
      console.log(register);
      const answer = await adminService.customerByEmail(register);
      setCustomer(answer);
    } catch (error: any) {
      console.log(error);
      alert("No Company by specified Email");
    }
  };

    
    return (
        <div className="CustomerByEmail">
            <legend>Email :</legend>
      <br />
      <input
        type="text"
        value={register}
        onChange={(e) => setRegister(String(e.target.value))}
      />
       <button onClick={handleCheckClick}>Check</button>

  
    {customer !== undefined ? (
      <div>
        <CustomerCard key={customer.id} customer={customer} />
      </div>
    ) : (
      <p>No company data to display</p>
    )}
        </div>
            
    );
}

export default CustomerByEmail;