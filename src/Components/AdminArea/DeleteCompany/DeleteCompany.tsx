import { useEffect, useState } from "react";
import CompanyUserModel from "../../../Models/CompanyUserModel";
import "./DeleteCompany.css";
import adminService from "../../../Service/AdminService";
import { log } from "console";

function DeleteCompany(): JSX.Element {
     
    const [register, handleSubmit] = useState <number>(0);
   
 

    async function send() {
         try {
            
             await adminService.deleteCompany(register);
             alert("Success!")
             
 
         } catch (err: any) {
             alert("Failed!")
         }
    } 
    
   
    
    return (
        <div className="DeleteCompany">
			
            <legend>Id :</legend>
      <br />
      <input
        type="number"
        value={register}
        onChange={(e) => handleSubmit(Number(e.target.value))}
      />
       <button onClick={send}>Check</button>
        
        </div>
    );
}

export default DeleteCompany;