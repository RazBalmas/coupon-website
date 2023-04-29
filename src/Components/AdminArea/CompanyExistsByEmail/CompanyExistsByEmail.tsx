import { useEffect, useState } from "react";
import CompanyUserModel from "../../../Models/CompanyUserModel";
import "./CompanyExistsByEmail.css";
import adminService from "../../../Service/AdminService";
import { log } from "console";

function CompanyExistsByEmail(): JSX.Element {
     
    const [register, setRegister] = useState<string>();
    const [exists, setExists] = useState<boolean>(false);
        
    async function handleCheckClick () {
        try {
            console.log("x");
          const answer = await adminService.companyExistsByEmail(register);
          setExists(answer);
        } catch (error: any) {
          console.log(error);
          alert("No Company by specified Id");
        }
      };
    
    
    return (
        <div className="CompanyExistsByEmail">
			
            <legend>Email</legend>
          
          <input type="text"
          value={register}
           onChange={(e) => setRegister(String(e.target.value))}
          />
          <button type="submit" onClick={handleCheckClick}>Check</button>
   

          <span>{exists}</span>
        </div>
    );
}

export default CompanyExistsByEmail;