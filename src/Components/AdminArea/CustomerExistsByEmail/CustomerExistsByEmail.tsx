import { useEffect, useState } from "react";
import CompanyUserModel from "../../../Models/CompanyUserModel";
import "./CustomerExistsByEmail.css";
import adminService from "../../../Service/AdminService";
import { log } from "console";

function CustomerExistsByEmail(): JSX.Element {
     
    const [register, handleSubmit] = useState<string>("");
    const [exists, setExists] = useState<boolean>(false);
    

    
        async function customerExistsByEmail(){
            try{
           
                const answer = await adminService.customerExistsByEmail(register);

                setExists(answer);
            }
            catch (error : any){
                console.log(error);
                alert("Failed to retrieve data from server")
            }
        }

    
    
    return (
        <div className="CustomerExistsByEmail">
			
            <legend>Email</legend>
          
                <input type="email" value={register} onChange={(e) => handleSubmit(e.target.value)} />
                <button type="submit" onClick={customerExistsByEmail}>Check</button>
         

                <span>{exists}</span>
        </div>
    );
}

export default CustomerExistsByEmail;