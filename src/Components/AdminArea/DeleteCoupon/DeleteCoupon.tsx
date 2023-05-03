import adminService from "../../../Service/AdminService";
import companyService from "../../../Service/CompanyService";
import "./DeleteCoupon.css";
import { useEffect, useState } from "react";

function DeleteCoupon(): JSX.Element {
    const [register, handleSubmit] = useState <number>(0);
   
 

    async function send() {
         try {
            
             await adminService.deleteCoupon(register);
            
             
 
         } catch (err: any) {
             alert("Failed!")
         }
    } 

    
    return (
        
			
            <div className="DeleteCoupon">
			
            <input type="number" onChange={(e) => {
            const id = parseInt(e.target.value);
            handleSubmit(id);
            }}/>
      <button type="submit" onClick={() => send()}>Submit</button>
       

        </div>
    );
}

export default DeleteCoupon;
