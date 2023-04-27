import { useEffect, useState } from "react";
import CompanyUserModel from "../../../Models/CompanyUserModel";
import "./CompanyExistsByEmail.css";
import adminService from "../../../Service/AdminService";
import { log } from "console";

function CompanyExistsByEmail(): JSX.Element {
     
    const [register, handleSubmit] = useState<string>("");
    const [exists, setExists] = useState<boolean>(false);
    

    
        async function existsByEmail(){
            try{
                console.log(register);
                const answer = await adminService.companyExistsByEmail(register);
                console.log(register);
                setExists(answer);
            }
            catch (error : any){
                console.log(error);
                alert("Failed to retrieve data from server")
            }
        }

    
    
    return (
        <div className="CompanyExistsByEmail">
			
            <legend>Email</legend>
          
                <input type="email" value={register} onChange={(e) => handleSubmit(e.target.value)} />
                <button type="submit" onClick={existsByEmail}>Check</button>
         

                <span>{exists}</span>
        </div>
    );
}

export default CompanyExistsByEmail;