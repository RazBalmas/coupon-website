import { useEffect, useState } from "react";
import CompanyUserModel from "../../../Models/CompanyUserModel";
import "./CustomerExistsByEmail.css";
import adminService from "../../../Service/AdminService";
import { log } from "console";

function CustomerExistsByEmail(): JSX.Element {
     
    const [register, setRegister] = useState<string>();
    const [exists, setExists] = useState<boolean>(false);
        
    async function handleCheckClick () {
        try {
            console.log("x");
          const answer = await adminService.customerExistsByEmail(register);
          setExists(answer);
          alert("Yes!");
        } catch (error: any) {
          console.log(error);
          alert("No Customer by specified Id");
        }
      };
    
    return (
        <div className="CustomerExistsByEmail">
			
            <legend>Email</legend>
          
                <input type="email" value={register} onChange={(e) => setRegister(e.target.value)} />
                <button type="submit" onClick={handleCheckClick}>Check</button>
         

                <span>{exists}</span>
        </div>
    );
}

export default CustomerExistsByEmail;