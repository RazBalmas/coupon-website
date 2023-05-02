import { useEffect, useState } from "react";
import CompanyUserModel from "../../../Models/CompanyUserModel";
import "./CustomerExistsById.css";
import adminService from "../../../Service/AdminService";
import { log } from "console";

function CustomerExistsById(): JSX.Element {
     
    const [register, setRegister] = useState<number>();
    const [exists, setExists] = useState<boolean>(false);
        
    async function handleCheckClick () {
        try {
          const answer = await adminService.customerExistsById(register);
          setExists(answer);
          console.log(answer);
          alert("Yes!");
        } catch (error: any) {
          alert("No Company by specified Id");
        }
      };

    

    
    
    return (
        <div className="CustomerExistsById">
			
            <legend>Id</legend>
          
          <input type="number"
          value={register}
           onChange={(e) => setRegister(Number(e.target.value))}
          />
          <button type="submit" onClick={handleCheckClick}>Check</button>
   

          <span>{exists}</span>
        </div>
    );
}

export default CustomerExistsById;