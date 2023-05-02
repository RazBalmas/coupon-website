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
     
  const [customer, setCustomer] = useState<CustomerUserModel | undefined>(undefined);
  const [register, setRegister] = useState<number>(0);
  
  
  const handleCheckClick = async () => {
    try {
      console.log(register);
      const answer = await adminService.customerById(register);
      setCustomer(answer);
    } catch (error: any) {
      console.log(error);
      alert("No Customer by specified Id");
    }
  };


    
    return (
        <div className="CustomerById">
           
      <legend>Id :</legend>
      <br />
      <input
        type="number"
        value={register}
        onChange={(e) => setRegister(Number(e.target.value))}
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

export default CustomerById;